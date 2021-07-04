import React from 'react';
import InputBar from './components/InputBar';
import TabularList from './components/TabularList';
import { 
  Container
} from 'semantic-ui-react';

class App extends React.Component {
  
  render() {
    return (
      <div className="app">
        <Container>
          <InputBar/>
          <TabularList/>
        </Container>
      </div>
    )
  }
}

export default App;