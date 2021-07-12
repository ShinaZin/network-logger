import * as React from 'react';
import { Container } from 'devtools/app/styles';
import { Border } from 'devtools/react-controls/border';
import { Box } from 'devtools/react-controls/box';
import { TextInput } from 'devtools/react-controls/text-input';

export const App: React.FC = () => (
  <Container>
    <Box style={{ textAlign: 'center', color: 'gray', fontSize: '30px' }} padding>Network logger</Box>
    <Border top>
      <Box col spacing style={{ width: '75%', margin: 'auto' }} padding='v'>
        {[0, 1, 2].map(key => <Item key={key} />)}
      </Box>
    </Border>
  </Container>
);


const Item: React.FC = () => (
  <Box col spacingSm>
    <TextInput placeholder='/api/request/method' grow />
    <TextInput placeholder='path.to.item[0].name' />
  </Box>
);
