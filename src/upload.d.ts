/**
 * Telegra.ph success response
 */
export type TelegraphOK = Array<{
    /** Telegra.ph file link. Example: `/file/123abc123abc123abc123.ext` */
    src: string;
}>;
/**
 * Telegra.ph error response
 */
export type TelegraphError = {
    /** Error body */
    error: string;
};
/**
 * Upload files to telegra.ph server
 * @param {string | Array<string>} urls
 * Single link or array of links. Remote files must starts with `http` or `https`
 * @returns {Promise}
 */
export declare const upload: (urls: string | Array<string>) => Promise<TelegraphOK | TelegraphError>;
