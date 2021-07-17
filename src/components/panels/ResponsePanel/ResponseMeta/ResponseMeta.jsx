import React from 'react';
import { Grid } from 'semantic-ui-react';

const ResponseMeta = ({ status, time, size}) => {

  return (
    <Grid.Row
    columns={3}>
    <Grid.Column
      computer={2}
      tablet={4}
      mobile={4}>
      <div><b>Status:</b> {status}</div>
    </Grid.Column>
    <Grid.Column
      computer={2}
      tablet={4}
      mobile={4}>
      <div><b>Time:</b> {time}</div>
    </Grid.Column>
    <Grid.Column
      computer={2}
      tablet={4}
      mobile={4}>
      <div><b>Size:</b> {size}</div>
    </Grid.Column>
  </Grid.Row>
  )
}

export default ResponseMeta;