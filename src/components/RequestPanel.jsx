import React, { useState } from 'react';
import { 
  Container, Grid
} from 'semantic-ui-react';
import InputBar from './InputBar';
import RequestTabGroup from './RequestTabGroup';
import { v4 as uuidv4 } from 'uuid';

const styles = {
  'padding': '2em'
}

const keyPairInitState = [
  {
    id: uuidv4(),
    keyItem : '',
    valueItem : ''
  }
] 

const RequestPanel = () => {

  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/todos/1');
  const [httpMethod, setHttpMethod] = useState('GET');
  
  const [editorView, setEditorView] = useState(null);
  const [queryParams, setQueryParams ] = useState(keyPairInitState);
  const [headers, setHeaders ] = useState(keyPairInitState);
  

  const handleOnInputSend = () => {
    console.log('url ', url);
    console.log('http method', httpMethod);
    console.log('headers', headers);
    console.log('query params ', queryParams)
    console.log('body ', editorView.state.doc.toString());
  }


  return (
    <div style={styles}>
      <Container fluid>
        <InputBar
          url={url} 
          setUrl={setUrl}
          httpMethod={httpMethod}
          setHttpMethod={setHttpMethod}
          onInputSend={handleOnInputSend}/>
        <br/>
        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column width={16}>
              <RequestTabGroup
                setEditorView={setEditorView}
                queryParams={queryParams}
                setQueryParams={setQueryParams}
                headers={headers}
                setHeaders={setHeaders}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>

  )
}

export default RequestPanel;