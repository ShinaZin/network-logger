import { uuid } from 'common/uuid';
import { getDefaultRules } from 'devtools/app/rules-list/default-rules';
import { Rule } from 'devtools/app/rules-list/types';

export class Store {
  static rules: Rule[] = getDefaultRules();
  private static forceUpdate: VoidFunction;

  /** @param updater must be `setState` or `forceUpdate` */
  static setUpdater(updater: VoidFunction) {
    this.forceUpdate = () => {
      updater();
    };
  }

  static insertRule(index: number) {
    const rule = makeRule();
    const newRules = [...this.rules];
    newRules.splice(index + 1, 0, rule);
    this.rules = newRules;
    this.forceUpdate();
  }

  static removeRule(index: number) {
    this.rules = [...this.rules.slice(0, index), ...this.rules.slice(index + 1)];
    this.forceUpdate();
  }

  static setRuleUrl(index: number, url: Rule['url']) {
    const rule = this.rules[index];
    this.rules[index] = { ...rule, url };
    this.forceUpdate();
  }

  static setRulePath(index: number, path: Rule['path']) {
    const rule = this.rules[index];
    this.rules[index] = { ...rule, path };
    this.forceUpdate();
  }
}

function makeRule(): Rule {
  return {
    id: uuid(),
    url: '',
    path: '',
  };
}
