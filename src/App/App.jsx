import React, { useState } from 'react';
import RequestPanel from '../components/panels/RequestPanel/RequestPanel';
import ResponsePanel from '../components/panels/ResponsePanel/ResponsePanel';
import './App.css';

const App = () => {

  const [ response, setResponse ] = useState(null);
  const [ loading, setLoading ] = useState(false);

  return (
    <div className="app">
      <RequestPanel 
        setResponse={setResponse}
        setLoading={setLoading}/>
      <ResponsePanel 
        response={response}
        loading={loading}/>
    </div>
  )
  
}

export default App;