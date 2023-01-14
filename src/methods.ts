import fetch from './request';
import * as Types from './types';

const BASE_URL = 'https://api.telegra.ph';

/**
 * ## /createAccount
 * Use this method to create a new Telegraph account. Most users only need one account, but this
 * can be useful for channel administrators who would like to keep individual author names and
 * profile links for each of their channels. On success, returns an {@link Types.Account} object
 * with the regular fields and an additional `access_token` field.
 * @param {Types.CreateAccount} args {@link Types.CreateAccount}
 * @param {string} args.short_name _Required_. Hover property for more info
 * @param {string} [args.author_name] _Optional_. Hover property for more info
 * @param {string} [args.author_url] _Optional_. Hover property for more info
 * @returns {Promise<Types.Account>} Promise with a {@link Types.Account} object
 * @see https://telegra.ph/api#createAccount
 */
export const createAccount = async (args: Types.CreateAccount): Promise<Types.Account> => {
  const req = await fetch(`${BASE_URL}/createAccount`, args);

  return req.result;
};

/**
 * ## /editAccountInfo
 * Use this method to update information about a Telegraph account.
 * Pass only the parameters that you want to edit.
 * On success, returns an {@link Types.Account} object with the default fields.
 * @param {Types.EditAccountInfo} args {@link Types.EditAccountInfo}
 * @param {string} args.access_token _Required_. Hover property for more info
 * @param {string} [args.short_name] _Optional_. Hover property for more info
 * @param {string} [args.author_name] _Optional_. Hover property for more info
 * @param {string} [args.author_url] _Optional_. Hover property for more info
 * @returns {Promise<Types.Account>} Promise with a {@link Types.Account} object
 * @see https://telegra.ph/api#editAccountInfo
 */
export const editAccountInfo = async (args: Types.EditAccountInfo): Promise<Types.Account> => {
  const req = await fetch(`${BASE_URL}/editAccountInfo`, args);

  return req.result;
};

/**
 * ## /getAccountInfo
 * Use this method to get information about a Telegraph account.
 * Returns an {@link Types.Account} object on success.
 * @param {Types.GetAccountInfo} args {@link Types.GetAccountInfo}
 * @param {string} args.access_token _Required_. Hover property for more info
 * @param {Array<string>} [args.fields=['short_name', 'author_name', 'author_url']]
 * _Optional_. Hover property for more info. _Default_: ['short_name', 'author_name', 'author_url']
 * @returns {Promise<Types.Account>} Promise with a {@link Types.Account} object
 * @see https://telegra.ph/api#getAccountInfo
 */
export const getAccountInfo = async ({
  fields = ['short_name', 'author_name', 'author_url'],
  ...rest
}: Types.GetAccountInfo): Promise<Types.Account> => {
  const req = await fetch(`${BASE_URL}/getAccountInfo`, { fields, ...rest });

  return req.result;
};

/**
 * ## /revokeAccessToken
 * Use this method to revoke access_token and generate a new one,
 * for example, if the user would like to reset all connected sessions,
 * or you have reasons to believe the token was compromised.
 * On success, returns an {@link Types.Account} object with new `access_token` and `auth_url` fields
 * @param {Types.RevokeAccessToken} args {@link Types.RevokeAccessToken}
 * @param {string} args.access_token _Required_. Hover property for more info
 * @returns {Promise<Types.Account>} Promise with a {@link Types.Account} object
 * @see https://telegra.ph/api#revokeAccessToken
 */
export const revokeAccessToken = async (args: Types.RevokeAccessToken): Promise<Types.Account> => {
  const req = await fetch(`${BASE_URL}/revokeAccessToken`, args);

  return req.result;
};

/**
 * ## /createPage
 * Use this method to create a new Telegraph page.
 * On success, returns a {@link Types.Page} object.
 * @param {Types.CreatePage} args {@link Types.CreatePage}
 * @param {string} args.access_token _Required_. Hover property for more info
 * @param {string} args.title _Required_. Hover property for more info
 * @param {Array<Types.Node>} args.content _Required_. Hover property for more info
 * @param {string} [args.author_name] _Optional_. Hover property for more info
 * @param {string} [args.author_url] _Optional_. Hover property for more info
 * @param {boolean} [args.return_content=false]
 * _Optional_. Hover property for more info. _Default_: false
 * @returns {Promise<Types.Page>} Promise with a {@link Types.Page} object
 * @see https://telegra.ph/api#createPage
 */
export const createPage = async ({
  return_content = false,
  ...rest
}: Types.CreatePage): Promise<Types.Page> => {
  const req = await fetch(`${BASE_URL}/createPage`, {
    return_content,
    ...rest,
  });

  return req.result;
};

/**
 * ## /editPage
 * Use this method to edit an existing Telegraph page.
 * On success, returns a {@link Types.Page} object.
 * @param {Types.EditPage} args {@link Types.EditPage}
 * @param {string} args.access_token _Required_. Hover property for more info
 * @param {string} args.path _Required_. Hover property for more info
 * @param {string} args.title _Required_. Hover property for more info
 * @param {Array<Types.Node>} args.content _Required_. Hover property for more info
 * @param {string} [args.author_name] _Optional_. Hover property for more info
 * @param {string} [args.author_url] _Optional_. Hover property for more info
 * @param {boolean} [args.return_content=false]
 * _Optional_. Hover property for more info. _Default_: false
 * @returns {Promise<Types.Page>} Promise with a {@link Types.Page} object
 * @see https://telegra.ph/api#editPage
 */
export const editPage = async ({
  return_content = false,
  ...rest
}: Types.EditPage): Promise<Types.Page> => {
  const req = await fetch(`${BASE_URL}/editPage`, {
    return_content,
    ...rest,
  });

  return req.result;
};

/**
 * ## /getPage
 * Use this method to get a Telegraph page
 * On success, returns a {@link Types.Page} object.
 * @param {Types.GetPage} args {@link Types.GetPage}
 * @param {string} args.path _Required_. Hover property for more info
 * @param {boolean} [args.return_content=false]
 * _Optional_. Hover property for more info. _Default_: false
 * @returns {Promise<Types.Page>} Promise with a {@link Types.Page} object
 * @see https://telegra.ph/api#getPage
 */
export const getPage = async ({
  return_content = false,
  ...rest
}: Types.GetPage): Promise<Types.Page> => {
  const req = await fetch(`${BASE_URL}/getPage`, {
    return_content,
    ...rest,
  });

  return req.result;
};

/**
 * ## /getPageList
 * Use this method to get a list of pages belonging to a Telegraph account.
 * Returns a {@link Types.PageList} object, sorted by most recently created pages first.
 * @param {Types.GetPageList} args {@link Types.GetPageList}
 * @param {string} args.access_token _Required_. Hover property for more info
 * @param {number} [args.offset=0] _Optional_. Hover property for more info. _Default_: 0
 * @param {number} [args.limit=50] _Optional_. Hover property for more info. _Default_: 50
 * @returns {Promise<Types.PageList>} Promise with a {@link Types.PageList} object
 * @see https://telegra.ph/api#getPageList
 */
export const getPageList = async ({
  offset = 0,
  limit = 50,
  ...rest
}: Types.GetPageList): Promise<Types.PageList> => {
  const req = await fetch(`${BASE_URL}/getPageList`, {
    offset,
    limit,
    ...rest,
  });

  return req.result;
};

/**
 * ## /getViews
 * Use this method to get the number of views for a Telegraph article.
 * Returns a {@link Types.PageViews} object on success.
 * By default, the total number of page views will be returned.
 * @param {Types.GetViews} args {@link Types.GetViews}
 * @param {string} args.path _Required_. Hover property for more info
 * @param {number} [args.year] _Optional_. Hover property for more info.
 * @param {number} [args.month] _Optional_. Hover property for more info.
 * @param {number} [args.day] _Optional_. Hover property for more info.
 * @param {number} [args.hour] _Optional_. Hover property for more info.
 * @returns {Promise<Types.PageViews>} Promise with a {@link Types.PageViews} object
 * @see https://telegra.ph/api#getViews
 */
export const getViews = async (args: Types.GetViews): Promise<Types.PageViews> => {
  const req = await fetch(`${BASE_URL}/getPageList`, args);

  return req.result;
};
