import { getJsonValue, isValidJson } from 'core/helpers';
import { Request, Response } from 'core/types';
import { Rule } from 'devtools/app/rules-list/types';

type LogData = Record<string, unknown>;

export function logRequestData(request: Request, rule: Rule) {
  const { postData, query: queryString } = request;
  const { path } = rule;
  if (path === '*') {
    logWithRequestHeader({ postData, queryString });
  } else if (path === '?') {
    logWithRequestHeader({ queryString });
  } else if (path) {
    const value = postData && getJsonValue(path, postData);
    logWithRequestHeader({ path, value });
  }
}

export function logResponseData(response: Response, rule: Rule) {
  if (isValidJson(response.data)) {
    const parsed = JSON.parse(response.data);
    const { path } = rule;
    if (path === '*') {
      logWithResponseHeader(parsed);
    } else if (path) {
      const value = getJsonValue(path, parsed);
      logWithResponseHeader({ path, value });
    }
  }
}

function logWithRequestHeader(data: LogData) {
  console.log('%c[netlogger request]:', 'color: #0372AA');
  console.log(data);
}

function logWithResponseHeader(data: LogData) {
  console.log('%c[netlogger response]:', 'color: #F7A454');
  console.log(data);
}
