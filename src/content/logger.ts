import { getJsonValue, isValidJson } from 'core/helpers';
import { Request, Response } from 'core/types';
import { Rule } from 'devtools/app/rules-list/types';

export function logRequestData(request: Request, rule: Rule) {
  console.log('%c[netlogger request]:', 'color: #0372AA');
  const { postData, query: queryString } = request;
  const { path } = rule;
  if (path === '*') {
    console.log({ postData, queryString });
  } else if (path === '?') {
    console.log({ queryString });
  } else {
    const value = postData && getJsonValue(path, postData);
    value && console.log({ path, value });
  }
}

export function logResponseData(response: Response, rule: Rule) {
  if (isValidJson(response.data)) {
    const parsed = JSON.parse(response.data);
    const { path } = rule;
    console.log('%c[netlogger response]:', 'color: #F7A454');
    if (path === '*') {
      console.log(parsed);
    } else {
      const value = getJsonValue(path, parsed);
      value && console.table({ path, value });
    }
  }
}
