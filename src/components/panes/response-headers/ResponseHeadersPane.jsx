import React from 'react';
import { Grid } from 'semantic-ui-react';

const ResponseHeaders = ( {response }) => {

  const responseHeaders = []

  Object.entries(response.headers).forEach(([key, value]) => {
    responseHeaders.push({
      key: key,
      value: value
    })
  })

  const renderedHeaders = responseHeaders.map(({key, value}) => {
    
    return (
      <Grid.Row key={key}>
        <Grid.Column width={2}>
          {key}
        </Grid.Column>
        <Grid.Column width={2}>
          {value}
        </Grid.Column>
      </Grid.Row>
    )

  })

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={2}>
          <h3>key</h3>
        </Grid.Column>
        <Grid.Column width={2}>
          <h3>value</h3>
        </Grid.Column>
      </Grid.Row>
      {renderedHeaders}
    </Grid>
  );

};

export default ResponseHeaders;