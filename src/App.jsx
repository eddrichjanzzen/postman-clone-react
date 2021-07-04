import React from 'react';
import InputBar from './components/InputBar';
import { Container, Header } from 'semantic-ui-react';

const App = () => {
  return (
    <div className="app">
      <Container>
        <Header as='h2'>Postman Clone</Header>
        <InputBar/>
      </Container>
    </div>
  )
}

export default App;