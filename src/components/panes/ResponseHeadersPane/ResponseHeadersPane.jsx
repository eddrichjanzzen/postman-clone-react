import React from 'react';
import { Grid } from 'semantic-ui-react';

const ResponseHeaders = ({response }) => {

  const responseHeaders = [];

  if(!(response == null)) {
    if('headers' in response){
      Object.entries(response.headers).forEach(([key, value]) => {
        responseHeaders.push({
          key: key,
          value: value
        })
      })
    }
  }

  const renderedHeaders = responseHeaders.map(({key, value}) => {
    
    return (
      <Grid.Row key={key}>
        <Grid.Column 
          computer={2}
          tablet={5}
          mobile={7}>
          {key}
        </Grid.Column>
        <Grid.Column 
          computer={3}
          tablet={5}
          mobile={7}>
          {value}
        </Grid.Column>
      </Grid.Row>
    )

  })

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column 
          computer={2}
          tablet={5}
          mobile={7}>
          <h4>Key</h4>
        </Grid.Column>
        <Grid.Column
          computer={3}
          tablet={5}
          mobile={7}>
          <h4>Value</h4>
        </Grid.Column>
      </Grid.Row>
      {renderedHeaders}
    </Grid>
  );
};

export default ResponseHeaders;