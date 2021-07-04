import React from 'react';
import { Input, Button } from 'semantic-ui-react';

const AddKeyValue = () => {
  
  return (
    <div className="add-key-value">
      <Input placeholder='Key'/>
      <Input placeholder='Value'/>
      <Button>Add</Button>
    </div>
  )

}

export default AddKeyValue;