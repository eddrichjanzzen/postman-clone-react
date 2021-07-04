import React from 'react';
import InputBar from './components/InputBar';
import TabularList from './components/TabularList';
import { 
  Container, 
  Header, 
  Divider
} from 'semantic-ui-react';

class App extends React.Component {
  
  render() {
    return (
      <div className="app">
        <Container>
          <Header as='h2'>Postman Clone</Header>
          <InputBar/>
          <Divider/>
          <TabularList/>
        </Container>
      </div>
    )
  }
}

export default App;