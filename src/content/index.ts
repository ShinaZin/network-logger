import { findMatchingRule } from 'core/helpers';
import { Message } from 'core/types';
import { logRequestData, logResponseData } from './logger';

chrome.runtime.onMessage.addListener(async (message: Message) => {
  const rule = await findMatchingRule(message.url);
  if (!rule) {
    return;
  }

  switch (message.type) {
    case 'request': logRequestData(message, rule); break;
    case 'response': logResponseData(message, rule); break;
  }
});

