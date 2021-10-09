type BrowserRequest = chrome.devtools.network.Request['request'];
type PostData = Record<string, any>;
type Query = BrowserRequest['queryString'];

export interface Response {
  type: 'response';
  data: string;
  url: string;
}

export interface Request {
  type: 'request';
  postData?: PostData;
  query: Query;
  url: string;
}

export type Message = Response | Request;
