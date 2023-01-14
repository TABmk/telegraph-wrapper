import * as FormData from 'form-data';
import * as URL from 'url';
import * as https from 'https';
import * as http from 'http';
import * as fs from 'fs';

const URLOAD_URL = 'https://telegra.ph/upload';

/**
 * Telegra.ph success response
 */
export type TelegraphOK = Array<{
  /** Telegra.ph file link. Example: `/file/123abc123abc123abc123.ext` */
  src: string,
}>;

/**
 * Telegra.ph error response
 */
export type TelegraphError = {
  /** Error body */
  error: string,
};

const submit = (form: FormData, cb: Function): void => {
  form.submit(
    URLOAD_URL,
    (err, response) => {
      if (err) throw err;
      let body = '';
      response.on('data', (chunk) => {
        body += chunk.toString();
      });
      response.on('end', () => cb(JSON.parse(body)));
      response.resume();
    },
  );
};

const remote = async (urls: Array<string>): Promise<TelegraphOK | TelegraphError> => (
  new Promise((res) => {
    const form = new FormData();

    const allimg = urls.map((fileUrl, i) => (
      new Promise((fileRes) => {
        const uri = URL.parse(fileUrl);
        const fetch = uri.protocol === 'https:' ? https : http;

        fetch.get(fileUrl, (response) => {
          form.append(`file${i}`, response);
          fileRes(true);
        });
      })
    ));

    Promise.all(allimg).then(() => submit(form, res));
  })
);

const local = async (urls: Array<string>): Promise<TelegraphOK | TelegraphError> => (
  new Promise((res) => {
    const form = new FormData();

    for (let i = 0; i < urls.length; i += 1) {
      form.append(`file${i}`, fs.readFileSync(urls[i]), `file${i}.png`);
    }

    submit(form, res);
  })
);

/**
 * Upload files to telegra.ph server
 * @param {string | Array<string>} urls
 * Single link or array of links. Remote files must starts with `http` or `https`
 * @returns {Promise}
 */
export const upload = async (
  urls: string | Array<string>,
): Promise<TelegraphOK | TelegraphError> => {
  const urlArr = Array.isArray(urls) ? urls : [urls];
  const isUrl = (p: string) => /^http/.test(p);

  const mix = urlArr.every((e) => isUrl(e) === isUrl(urlArr[0]));

  if (!mix) {
    throw new Error('Do not mix local and remote links!');
  }

  if (isUrl(urlArr[0])) {
    return remote(urlArr);
  }

  return local(urlArr);
};
