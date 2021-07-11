import React, { useState, useEffect } from 'react';
import { 
  Input, 
  Button,
  Grid
} from 'semantic-ui-react';

const initialState = {
  id: 0,
  keyItem: '',
  valueItem: ''
}

const AddKeyValue = ({ keyPair, onKeyPairUpdate, onKeyPairRemove }) => {

  const [keyValue, setKeyValue ] = useState(initialState);
  
  useEffect(()=> {
    
    onKeyPairUpdate(keyValue);

  }, [keyValue])


  const handleOnChange = (e) => {
    setKeyValue({
      [e.target.name] : e.target.value
    });
  }

  const handleOnClick = () => {
    onKeyPairRemove(keyPair);
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
              onChange={(e) => handleOnChange(e)}/>
          </Grid.Column>

          <Grid.Column width={7}>
            <Input 
              fluid 
              placeholder='Value'
              name='valueItem'
              onChange={(e) => handleOnChange(e)}/>
          </Grid.Column>

          <Grid.Column width={2}>
            <Button
              onClick={()=> handleOnClick()}
              >Remove
            </Button>
          </Grid.Column>

        </Grid.Row>
      </Grid>
    </div>
  );
}

export default AddKeyValue;