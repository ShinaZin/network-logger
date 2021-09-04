import { uuid } from 'common/uuid';
import { Rule } from 'devtools/app/rules-list/types';

export const getDefaultRules = (): Rule[] => [
  {
    id: uuid(),
    url: '/get/something',
    path: 'items[0].name',
  },
  {
    id: uuid(),
    url: '/put/something-else',
    path: 'items[0].value',
  },
];
