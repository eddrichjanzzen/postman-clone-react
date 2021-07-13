import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

import ResponseTabGroup from './ResponseTabGroup';

const styles = {
  'padding': '2em'
}

const ResponsePanel = () => {
  return (
    <div style={styles}>
      <Container fluid>
        <h1>Response</h1>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <div>Status: </div>
            </Grid.Column>
            <Grid.Column>
              <div>Time: </div>
            </Grid.Column>
            <Grid.Column>
              <div>Size: </div>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={1}>
            <Grid.Column width={16}>
              <ResponseTabGroup/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>

  );
}

export default ResponsePanel;