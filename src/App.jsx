import React from 'react';
import RequestPanel from './components/RequestPanel';
import ResponsePanel from './components/ResponsePanel';

class App extends React.Component {
  
  render() {
    return (
      <div className="app">
        <RequestPanel/>
        <ResponsePanel/>
      </div>
    )
  }
}

export default App;