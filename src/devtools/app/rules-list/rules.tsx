import * as React from 'react';
import { useForceUpdate } from 'common/hooks';
import { Border } from 'devtools/react-controls/border';
import { Box } from 'devtools/react-controls/box';
import { IconButton } from 'devtools/react-controls/icon-button';
import { TextInput } from 'devtools/react-controls/text-input';
import { Store } from 'devtools/store/store';
import { Rule } from './types';

const style: React.CSSProperties = { width: '75%', margin: 'auto' };

export const Rules: React.FC = () => {
  const forceUpdate = useForceUpdate();
  React.useEffect(() => Store.setUpdater(forceUpdate), []);

  return (
    <Border top>
      <Box col spacing style={style} padding='v'>
        {Store.rules.map((rule, i) => (
          <RuleItem key={rule.id} index={i} rule={rule} />
        ))}
      </Box>
    </Border>
  );
};

interface RuleItemProps {
  index: number;
  rule: Omit<Rule, 'id'>;
}

const RuleItem: React.FC<RuleItemProps> = (props) => {
  const { rule, index } = props;

  const onPathChange = (path: string) => {
    Store.setRulePath(index, path);
  };

  const onUrlChange = (url: string) => {
    Store.setRuleUrl(index, url);
  };

  const onRemove = () => Store.removeRule(index);

  const onAdd = () => Store.insertRule(index);

  const disabled = Store.rules.length == 1;

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
