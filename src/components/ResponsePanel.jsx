import React, { useState, useEffect } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import ResponseTabGroup from './ResponseTabGroup';
import prettyBytes from 'pretty-bytes';

const styles = {
  'padding': '2em'
}

const ResponsePanel = ({ response }) => {

  const [ doc, setDoc ] = useState('{}');

  useEffect(() => {
    
    if(response === null) return;
    const jsonResponse = JSON.stringify(response.data, null, 2);
    setDoc(jsonResponse);

  }, [response])


  const status = response.status;
  const time = response.customData.time;
  const size = prettyBytes(
    JSON.stringify(response.data).length + 
    JSON.stringify(response.headers).length
  );

  return (
    <div style={styles}>
      <Container fluid>
        <h1>Response</h1>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <div>Status: {status ? status: ''}</div>
            </Grid.Column>
            <Grid.Column>
              <div>Time: {time ? time: ''}</div>
            </Grid.Column>
            <Grid.Column>
              <div>Size: {size ? size : ''}</div>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={1}>
            <Grid.Column width={16}>
              <ResponseTabGroup
                doc={doc}
                setDoc={setDoc}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>

  );
}

export default ResponsePanel;