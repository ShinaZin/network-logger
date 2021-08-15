import * as React from 'react';
import { Border } from 'devtools/react-controls/border';
import { Box } from 'devtools/react-controls/box';
import { TextInput } from 'devtools/react-controls/text-input';
import { IconButton } from 'devtools/react-controls/icon-button';

const style: React.CSSProperties = { width: '75%', margin: 'auto' };

export const Rules: React.FC = () => (
  <Border top>
    <Box col spacing style={style} padding='v'>
      {[0, 1, 2].map((key) => (
        <Item key={key} />
      ))}
    </Box>
  </Border>
);

const Item: React.FC = () => (
  <Box row spacing grow>
    <Box col spacingSm grow>
      <TextInput placeholder='/api/request/method' />
      <TextInput placeholder='path.to.item[0].name' />
    </Box>
    <Box col spacingSm>
      <IconButton src='/assets/icons/actions/delete.svg' />
      <IconButton src='/assets/icons/actions/new.svg' />
    </Box>
  </Box>
);
