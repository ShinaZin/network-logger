import * as React from 'react';
import { Border } from 'devtools/react-controls/border';
import { Box } from 'devtools/react-controls/box';
import { TextInput } from 'devtools/react-controls/text-input';

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
  <Box col spacingSm>
    <TextInput placeholder='/api/request/method' grow />
    <TextInput placeholder='path.to.item[0].name' />
  </Box>
);
