import * as React from 'react';
import { Border } from 'devtools/react-controls/border';
import { Box } from 'devtools/react-controls/box';
import { IconButton } from 'devtools/react-controls/icon-button';
import { TextInput } from 'devtools/react-controls/text-input';
import { RulesContext, RulesContextConsumer } from 'devtools/store/store';
import { Rule } from './types';

const style: React.CSSProperties = { width: '75%', margin: 'auto' };

export const Rules: React.FC = () => (
  <RulesContextConsumer>
    {context => (
      <Border top>
        <Box col spacing style={style} padding='v'>
          {context.rules.map((rule, i) => (
            <RuleItem key={rule.id} index={i} rule={rule} context={context} />
          ))}
        </Box>
      </Border>
    )}
  </RulesContextConsumer>
);


interface RuleItemProps {
  index: number;
  rule: Omit<Rule, 'id'>;
  context: RulesContext;
}

const RuleItem: React.FC<RuleItemProps> = (props) => {
  const { rule, index, context } = props;

  const onPathChange = (path: string) => context.setRulePath(index, path);

  const onUrlChange = (url: string) => context.setRuleUrl(index, url);

  const onRemove = () => context.removeRule(index);

  const onAdd = () => context.insertRule(index);

  const disabled = context.rules.length == 1;

  return (
    <Box row spacing grow>
      <Box col spacingSm grow>
        <TextInput placeholder='/api/request/method' value={rule.url} onChange={onUrlChange} />
        <TextInput placeholder='path.to.item[0].name' value={rule.path} onChange={onPathChange} />
      </Box>
      <Box col spacingSm>
        <IconButton src='/assets/icons/actions/delete.svg' onClick={onRemove} disabled={disabled} />
        <IconButton src='/assets/icons/actions/new.svg' onClick={onAdd} />
      </Box>
    </Box>
  );
};
