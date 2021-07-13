import React from 'react';
import { 
  Input, 
  Button,
  Grid
} from 'semantic-ui-react';

import useStateCallback from './../../../utilities/useStateCallback';

const initialState = {
  id: 0,
  keyItem: '',
  valueItem: ''
}

const AddKeyValue = ({ keyPair, onKeyPairUpdate, onKeyPairRemove }) => {
  //https://stackoverflow.com/questions/54954091/how-to-use-callback-with-usestate-hook-in-react

  const [keyValue, setKeyValue ] = useStateCallback(initialState);

  const handleOnChange = (e) => {
    
    setKeyValue({
      id: keyPair.id,
      [e.target.name] : e.target.value
    }, ()=> {
      // update the keypair value, after the state was updated
      onKeyPairUpdate(keyValue);
    });
  }

  return (
    <div className="add-key-value">
      <Grid divided='vertically'>
        <Grid.Row columns={3}>

          <Grid.Column width={7}>
            <Input 
              fluid 
              placeholder='Key'
              name='keyItem'
              value={keyValue.keyItem}
              onChange={(e) => handleOnChange(e)}/>
          </Grid.Column>

          <Grid.Column width={7}>
            <Input 
              fluid 
              placeholder='Value'
              name='valueItem'
              value={keyValue.valueItem}
              onChange={(e) => handleOnChange(e)}/>
          </Grid.Column>

          <Grid.Column width={2}>
            <Button
              onClick={()=> onKeyPairRemove(keyPair)}
              >Remove
            </Button>
          </Grid.Column>

        </Grid.Row>
      </Grid>
    </div>
  );
}

export default AddKeyValue;