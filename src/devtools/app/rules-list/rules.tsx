import * as React from 'react';
import { Border } from 'devtools/react-controls/border';
import { Box } from 'devtools/react-controls/box';
import { TextInput } from 'devtools/react-controls/text-input';
import { IconButton } from 'devtools/react-controls/icon-button';
import { getDefaultRules } from './default-rules';
import { Rule } from './types';

const style: React.CSSProperties = { width: '75%', margin: 'auto' };

export const Rules: React.FC = () => {
  const [rules, setRules] = React.useState(getDefaultRules());
  const onChange = () => setRules([...rules]);

  return (
    <Border top>
      <Box col spacing style={style} padding='v'>
        {rules.map(rule => (
          <RuleItem key={rule.id} rule={rule} onChange={onChange} />
        ))}
      </Box>
    </Border>
  );
};

interface RuleItemProps {
  rule: Omit<Rule, 'id'>;
  onChange: VoidFunction;
}

const RuleItem: React.FC<RuleItemProps> = (props) => {
  const { rule, onChange } = props;

  const onPathChange = (path: string) => {
    rule.path = path;
    onChange();
  };

  const onUrlChange = (url: string) => {
    rule.url = url;
    onChange();
  };

  return (
    <Box row spacing grow>
      <Box col spacingSm grow>
        <TextInput placeholder='/api/request/method' value={rule.url} onChange={onUrlChange} />
        <TextInput placeholder='path.to.item[0].name' value={rule.path} onChange={onPathChange} />
      </Box>
      <Box col spacingSm>
        <IconButton src='/assets/icons/actions/delete.svg' />
        <IconButton src='/assets/icons/actions/new.svg' />
      </Box>
    </Box>
  );
};
