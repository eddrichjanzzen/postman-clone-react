import React, { useState } from 'react';
import RequestPanel from './components/RequestPanel';
import ResponsePanel from './components/ResponsePanel';
import './App.css';

const App = () => {

  const [ response, setResponse ] = useState(null);

  const showResponse = (
    response ? <ResponsePanel response={response}/> : null)
  ;

  return (
    <div className="app">
      <RequestPanel setResponse={setResponse}/>
      {showResponse}
    </div>
  )
  
}

export default App;