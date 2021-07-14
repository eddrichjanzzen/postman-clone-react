import React, { useState, useEffect } from 'react';
import { 
  Input, 
  Button,
  Grid
} from 'semantic-ui-react';

const AddKeyValue = ({ keyPair, setKeyPair, onKeyPairRemove }) => {
  //https://stackoverflow.com/questions/63710791/react-hooks-handle-multiple-inputs

  const [keyValue, setKeyValue] = useState(keyPair);

  useEffect(()=> {
    
    // research why this warning happens and if it has an impact to the application
    setKeyPair(keyValue);

  }, [keyValue])

  const handleOnChange = (e) => {
    // define a state variable to keep track of the key and value together
    //https://stackoverflow.com/questions/63710791/react-hooks-handle-multiple-inputs
    setKeyValue((prevState) => ({
      ...prevState,
      id: keyValue.id,
      [e.target.name] : e.target.value
    }))
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