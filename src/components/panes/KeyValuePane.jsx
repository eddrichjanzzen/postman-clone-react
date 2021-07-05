import React from 'react';
import AddKeyValue from './AddKeyValue';
import { Tab, Button } from 'semantic-ui-react';

class KeyValuePane extends React.Component {
  
  handleOnClick = (tabName) => {
    this.props.onKeyPairAdd(tabName);
  }

  onKeyPairRemove = (tabName, keyPair) => {
    this.props.onKeyPairRemove(tabName, keyPair);
  }

  onKeyPairUpdate = (tabName, keyPair) => {
    this.props.onKeyPairUpdate(tabName, keyPair);
  }

  render(){
    const renderedList = this.props.keyValueList.map((keyPair) => {
      return <AddKeyValue
          key={keyPair.id}
          keyPair={keyPair}
          onKeyPairUpdate={(kpValue) => this.onKeyPairUpdate(this.props.tabName, kpValue)}
          onKeyPairRemove={() => this.onKeyPairRemove(this.props.tabName, keyPair)} />
      });

    return (
      <Tab.Pane>
        {renderedList}
        <Button onClick={() => this.handleOnClick(this.props.tabName)}>Add</Button>
      </Tab.Pane>
    )
  }
}

export default KeyValuePane;