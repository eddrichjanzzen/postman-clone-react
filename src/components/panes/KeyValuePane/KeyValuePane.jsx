import React from 'react';
import AddKeyValue from './AddKeyValue/AddKeyValue';
import { Button } from 'semantic-ui-react';
import { v4 as uuidv4 } from 'uuid';

const color = 'orange';

const KeyValuePane = ({ keyPairs, setKeyPairs }) => {

  const onKeyPairAdd = () => {
    setKeyPairs(keyPairs => [...keyPairs, {
      id: uuidv4(),
      keyItem: '',
      valueItem: ''
    }])
  }

  const onKeyPairRemove = (keyPair) => {
    let newKeyValues = [...keyPairs];
    newKeyValues = newKeyValues.filter(x => x.id !== keyPair.id);
    setKeyPairs(newKeyValues);
  }

  const onKeyPairUpdate = (keyPair) => {
    // Reference:
    // https://javascript.plainenglish.io/react-updating-a-value-in-state-array-7bae7c7eaef9

    // first look for the elements index

    const elementIndex = keyPairs.findIndex(element => element.id === keyPair.id);
    let newKeyValues = [...keyPairs];
    
    newKeyValues[elementIndex] = {
      ...newKeyValues[elementIndex], 
      keyItem: keyPair.keyItem,
      valueItem: keyPair.valueItem
    };
    
    setKeyPairs(newKeyValues);
  };


  const renderedList = keyPairs.map((keyPair) => {
    return <AddKeyValue
        key={keyPair.id}
        keyPair={keyPair}
        setKeyPair={(kpValue) => onKeyPairUpdate(kpValue)}
        onKeyPairRemove={() => onKeyPairRemove(keyPair)} />
    });

  return (
    <React.Fragment>
      {renderedList}
      <Button
        basic
        color={color} 
        onClick={() => onKeyPairAdd()}>Add</Button>
    </React.Fragment>
  )

}

export default KeyValuePane;