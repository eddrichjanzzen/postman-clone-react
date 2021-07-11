import React from 'react';
import AddKeyValue from './AddKeyValue';
import { Tab, Button } from 'semantic-ui-react';

const KeyValuePane = ({ tabName, keyValueList, onKeyPairAdd, onKeyPairRemove, onKeyPairUpdate  }) => {


  const renderedList = keyValueList.map((keyPair) => {
    return <AddKeyValue
        key={keyPair.id}
        keyPair={keyPair}
        onKeyPairUpdate={(kpValue) => onKeyPairUpdate(tabName, kpValue)}
        onKeyPairRemove={() => onKeyPairRemove(tabName, keyPair)} />
    });

  return (
    <Tab.Pane>
      {renderedList}
      <Button onClick={() => onKeyPairAdd(tabName)}>Add</Button>
    </Tab.Pane>
  )

}

export default KeyValuePane;