/** This object represents a Telegraph account. */
export type Account = {
  /**
   * Account name, helps users with several accounts remember which they are currently using.
   * Displayed to the user above the "Edit/Publish" button on Telegra.ph,
   * other users don't see this name.
   */
  short_name: string,
  /**
   * Default author name used when creating new articles.
   */
  author_name: string,
  /**
   * Profile link, opened when users click on the author's name below the title.
   * Can be any link, not necessarily to a Telegram profile or channel.
   */
  author_url: string,
  /**
   * _Optional_. Only returned by the createAccount and revokeAccessToken method.
   * Access token of the Telegraph account.
   */
  access_token?: string,
  /**
   * _Optional_. URL to authorize a browser on telegra.ph and connect it to a Telegraph account.
   * This URL is valid for only one use and for 5 minutes only.
   */
  auth_url?: string,
  /**
   * _Optional_. Number of pages belonging to the Telegraph account.
   */
  page_count?: number,
};

/** This object represents a page on Telegraph. */
export type Page = {
  /** Path to the page. */
  path: string,
  /** URL of the page. */
  url: string,
  /** Title of the page. */
  title: string,
  /** Description of the page. */
  description: string,
  /** _Optional_. Name of the author, displayed below the title. */
  author_name?: string,
  /**
   * _Optional_. Profile link, opened when users click on the author's name below the title.
   * Can be any link, not necessarily to a Telegram profile or channel.
   */
  author_url?: string,
  /** _Optional_. Image URL of the page. */
  image_url?: string,
  /** Optional. {@link https://telegra.ph/api#Content-format Content} of the page. */
  content?: Array<Node>,
  /** Number of page views for the page. */
  views: number,
  /**
   * _Optional_. Only returned if access_token passed.
   * True, if the target Telegraph account can edit the page.
   */
  can_edit?: boolean,
};

/** This object represents the number of page views for a Telegraph article. */
export type PageViews = {
  /** Number of page views for the target page. */
  views: number,
};

/**
 * This object represents a list of Telegraph articles belonging to an account.
 * Most recently created articles first.
 */
export type PageList = {
  /**
   * Total number of pages belonging to the target Telegraph account.
   */
  total_count: number,
  /**
   * Requested pages of the target Telegraph account.
   */
  pages: Array<Page>,
};

/**
 * This abstract object represents a DOM Node.
 * It can be a String which represents a DOM text node or a {@link NodeElement} object.
 */
export type Node = string | NodeElement;

/** This object represents a DOM element node. */
export type NodeElement = {
  /**
   * Name of the DOM element.
   * Available tags:
   * a, aside, b, blockquote, br, code, em, figcaption, figure, h3, h4,
   * hr, i, iframe, img, li, ol, p, pre, s, strong, u, ul, video.
   */
  tag: 'a' | 'aside' | 'b' | 'blockquote' | 'br' | 'code' | 'em' | 'figcaption' | 'figure' | 'h3' | 'h4' | 'hr' | 'i' | 'iframe' | 'img' | 'li' | 'ol' | 'p' | 'pre' | 's' | 'strong' | 'u' | 'ul' | 'video',
  /**
   * _Optional_. Attributes of the DOM element. Key of object represents name of attribute,
   * value represents value of attribute. Available attributes: href, src.
   */
  attrs?: {
    href?: string,
    src?: string,
  },
  /** _Optional_. List of child nodes for the DOM element. */
  children?: Array<Node>,
};

export type CreateAccount = {
  /**
   * __(String, 1-32 characters)__
   *
   * _Required_. Account name, helps users with several accounts remember which
   * they are currently using. Displayed to the user above the "Edit/Publish"
   * button on Telegra.ph, other users don't see this name.
   */
  short_name: string,
  /**
   * __(String, 0-128 characters)__
   *
   * _Optional_. Default author name used when creating new articles.
   */
  author_name?: string,
  /**
   * __(String, 0-512 characters)__
   *
   * _Optional_. Default profile link, opened when users click on the author's name below the title.
   * Can be any link, not necessarily to a Telegram profile or channel.
   */
  author_url?: string,
};

export type EditAccountInfo = {
  /** _Required_. Access token of the Telegraph account. */
  access_token: string,
  /**
   * __(String, 1-32 characters)__
   *
   * _Optional_. New account name.
   */
  short_name?: string,
  /**
   * __(String, 0-128 characters)__
   *
   * _Optional_. New default author name used when creating new articles..
   */
  author_name?: string,
  /**
   * __(String, 0-512 characters)__
   *
   * _Optional_. New default profile link, opened when users click on the author's name
   * below the title. Can be any link, not necessarily to a Telegram profile or channel.
   */
  author_url?: string,
};

export type GetAccountInfo = {
  /** _Required_. Access token of the Telegraph account. */
  access_token: string,
  /**
   * __(Array of String, default = [“short_name”,“author_name”,“author_url”])__
   *
   * _Optional_. List of account fields to return. Available fields:
   * short_name, author_name, author_url, auth_url, page_count.
   */
  fields?: Array<'short_name' | 'author_name' | 'author_url' | 'auth_url' | 'page_count'>
};

export type RevokeAccessToken = {
  /** _Required_. Access token of the Telegraph account. */
  access_token: string,
};

export type CreatePage = {
  /** _Required_. Access token of the Telegraph account. */
  access_token: string,
  /**
   * __(String, 1-256 characters)__
   *
   * _Required_. Page title.
   */
  title: string,
  /**
   * __(String, 0-128 characters)__
   *
   * _Optional_. Author name, displayed below the article's title.
   */
  author_name?: string,
  /**
   * __(String, 0-512 characters)__
   *
   * _Optional_. Profile link, opened when users click on the author's name below the title.
   * Can be any link, not necessarily to a Telegram profile or channel.
   */
  author_url?: string,
  /**
   * __(Array of {@link Node}, up to 64 KB)__
   *
   * _Required_. {@link https://telegra.ph/api#Content-format Content} of the page.
   */
  content: Array<Node>,
  /**
   * __(Boolean, default = false)__
   *
   * _Optional_. If true, a content field will be returned in the {@link Page} object (see: {@link https://telegra.ph/api#Content-format Content format}).
   */
  return_content?: boolean,
};

export type EditPage = {
  /** _Required_. Access token of the Telegraph account. */
  access_token: string,
  /** _Required_. Path to the page. */
  path: string,
  /**
   * __(String, 1-256 characters)__
   *
   * _Required_. Page title.
   */
  title: string,
  /**
   * __(Array of {@link Node}, up to 64 KB)__
   *
   * _Required_. {@link https://telegra.ph/api#Content-format Content} of the page.
   */
  content: Array<Node>,
  /**
   * __(String, 0-128 characters)__
   *
   * _Optional_. Author name, displayed below the article's title.
   */
  author_name?: string,
  /**
   * __(String, 0-512 characters)__
   *
   * _Optional_. Profile link, opened when users click on the author's name below the title.
   * Can be any link, not necessarily to a Telegram profile or channel.
   */
  author_url?: string,
  /**
   * __(Boolean, default = false)__
   *
   * _Optional_. If true, a content field will be returned in the {@link Page} object.
   */
  return_content?: boolean,
};

export type GetPage = {
  /**
   * _Required_. Path to the Telegraph page (in the format `Title-12-31`, i.e. everything that comes after `http://telegra.ph/`).
   */
  path: string,
  /**
   * __(Boolean, default = false)__
   *
   * _Optional_. If true, a content field will be returned in the {@link Page} object.
   */
  return_content?: boolean,
};

export type GetPageList = {
  /** _Required_. Access token of the Telegraph account. */
  access_token: string,
  /**
   * __(Integer, default = 0)__
   *
   * _Optional_. Sequential number of the first page to be returned.
   */
  offset?: number,
  /**
   * __(Integer, 0-200, default = 50)__
   *
   * _Optional_. Limits the number of pages to be retrieved.
   */
  limit?: number,
};

export type GetViews = {
  /**
   * _Required_. Path to the Telegraph page(in the format `Title-12-31`,
   * where 12 is the month and 31 the day the article was first published).
   */
  path: string,
  /**
   * __(Integer, 2000-2100)__
   *
   * _Required if month is passed_.
   * If passed, the number of page views for the requested year will be returned.
   */
  year?: number,
  /**
   * __(Integer, 1-12)__
   *
   * _Required if day is passed_.
   * If passed, the number of page views for the requested month will be returned.
   */
  month?: number,
  /**
   * __(Integer, 1-31)__
   *
   * _Required if hour is passed_.
   * If passed, the number of page views for the requested day will be returned.
   */
  day?: number,
  /**
   * __(Integer, 0-24)__
   *
   * If passed, the number of page views for the requested hour will be returned.
   */
  hour?: number,
};
