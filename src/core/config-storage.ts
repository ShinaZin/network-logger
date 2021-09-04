import { getDefaultRules } from 'core/default-rules';
import { Rule } from 'devtools/app/rules-list/types';

const enum Key {
  Rules = 'rules'
}

export class ConfigStorage {
  static getRules = (): Rule[] => {
    const rules = localStorage.getItem(Key.Rules);
    return rules ? JSON.parse(rules) : getDefaultRules();
  };

  static setRules = (rules: Rule[]) => {
    localStorage.setItem(Key.Rules, JSON.stringify(rules));
  };
}
