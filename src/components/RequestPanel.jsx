import React from 'react';
import { 
  Container, Grid
} from 'semantic-ui-react';
import InputBar from './InputBar';
import RequestTabs from './RequestTabs';


const styles = {
  'padding': '2em'
}

const RequestPanel = () => {

  return (
    <div style={styles}>
      <Container fluid>
        <InputBar/>
        <br/>
        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column width={16}>
              <RequestTabs/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>

  )
}

export default RequestPanel;