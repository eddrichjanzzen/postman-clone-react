import React, { useState, useEffect } from 'react';
import { 
  Input, 
  Button,
  Grid
} from 'semantic-ui-react';

const AddKeyValue = ({ keyPair, setKeyPair, onKeyPairRemove }) => {
  //https://stackoverflow.com/questions/63710791/react-hooks-handle-multiple-inputs

  const [keyValue, setKeyValue] = useState(keyPair);
  const [debouncedKeyValue, setDebouncedKeyValue] = useState(keyValue);

  useEffect(()=> {
    
    const timerId = setTimeout(() => {
      setDebouncedKeyValue(keyValue);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    }

  }, [keyValue]);


  useEffect(() => {

    setKeyPair(debouncedKeyValue);

  }, [debouncedKeyValue])


  const handleOnChange = (e) => {
    // define a state variable to keep track of the key and value together
    // https://stackoverflow.com/questions/63710791/react-hooks-handle-multiple-inputs
    setKeyValue((prevState) => ({
      ...prevState,
      id: keyValue.id,
      [e.target.name] : e.target.value
    }));
  }

  return (
    <div className="add-key-value">
      <Grid 
        divided='vertically'>
        <Grid.Row
          columns={3}>
          <Grid.Column
            computer={7}
            tablet={6}
            mobile={5}>
            <Input 
              fluid 
              placeholder='Key'
              name='keyItem'
              onChange={(e) => handleOnChange(e)}/>
          </Grid.Column>

          <Grid.Column
            computer={7}
            tablet={6}
            mobile={5}>
            <Input 
              fluid 
              placeholder='Value'
              name='valueItem'
              onChange={(e) => handleOnChange(e)}/>
          </Grid.Column>

          <Grid.Column
            computer={2}
            tablet={4}
            mobile={6}>
            <Button
              fluid
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