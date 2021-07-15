import React, { useState, useEffect } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import ResponseTabGroup from './tab-groups/ResponseTabGroup';
import prettyBytes from 'pretty-bytes';
import ResponseMeta from './ResponseMeta';

const ResponsePanel = ({ response }) => {

  const [ doc, setDoc ] = useState('{}');
  const [ loading, setLoading ] = useState(false);

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