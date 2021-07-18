import React, { useState, useEffect } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import ResponseTabGroup from '../../tab-groups/ResponseTabGroup/ResponseTabGroup';
import prettyBytes from 'pretty-bytes';
import ResponseMeta from './ResponseMeta/ResponseMeta';

const ResponsePanel = ({ response, loading }) => {

  const [ doc, setDoc ] = useState('{}');

  useEffect(() => {
    
    if(response === null) return;
    const jsonResponse = JSON.stringify(response.data, null, 2);
    setDoc(jsonResponse);

  }, [response, loading])

  const hasResponse = !(response == null);
  
  let time = '';
  let status = '';
  let size = '';

  if(hasResponse){
    const hasCustomData = 'customData' in response;
    const hasData = 'data' in response;
    const hasHeaders = 'headers' in response;

    status = hasResponse ? response.status : 0;

    if(hasData && hasHeaders){
      size = prettyBytes(
        (hasResponse ? JSON.stringify(response.data).length : 0) + 
        (hasResponse ? JSON.stringify(response.headers).length : 0)
      );
    }

    if(hasCustomData){
      time = response.customData.time
    }
  }

  return (
    <div>
      <Container fluid>
        <h1>Response</h1>
        <Grid>

          <ResponseMeta
            status={status}
            time={time}
            size={size}
          />

          <Grid.Row columns={1}>
            <Grid.Column width={16}>
              <ResponseTabGroup
                doc={doc}
                setDoc={setDoc}
                response={response}
                loading={loading}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>

  );
}

export default ResponsePanel;