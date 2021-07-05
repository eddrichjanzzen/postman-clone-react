import React from 'react';
import AddKeyValue from './AddKeyValue';
import { Tab, Button } from 'semantic-ui-react';

class KeyValuePane extends React.Component {
  
  state = {
    keyValues: [
      {
        id: 0,
        keyItem : '',
        valueItem : ''
      }
    ]
  }

  handleOnClick = () => {
    this.setState({
      ...this.state.keyValues.push({
        id: this.state.keyValues.length,
        keyItem: '',
        valueItem: ''
      })
    })
  }

  onKeyPairRemove = (keyPair) => {
    
    let newKeyValues = [...this.state.keyValues];

    // render a new list removing based on the index
    newKeyValues = newKeyValues.filter(x => x.id !== keyPair.id);

    this.setState({
      keyValues: newKeyValues
    }, () => {
      console.log(this.state)
    });
  }

  onKeyPairUpdate = (keyPair) => {
    // Reference:
    // https://javascript.plainenglish.io/react-updating-a-value-in-state-array-7bae7c7eaef9

    // first look for the elements index
    const elementIndex = this.state.keyValues.findIndex(element => element.id === keyPair.id);

    let newKeyValues = [...this.state.keyValues];

    newKeyValues[elementIndex] = {
      ...newKeyValues[elementIndex], 
      keyItem: keyPair.keyItem,
      valueItem: keyPair.valueItem
    }

    this.setState({
      keyValues: newKeyValues
    }, ()=> {
      console.log(this.state)
    });
  }

  render(){

    const renderedList = this.state.keyValues.map((keyPair) => {
      return <AddKeyValue
          key={keyPair.id}
          keyPair={keyPair} 
          onKeyPairUpdate={this.onKeyPairUpdate}
          onKeyPairRemove={this.onKeyPairRemove} />
      });

    return (
      <Tab.Pane>
        {renderedList}
        <Button onClick={(e) => this.handleOnClick(e)}>Add</Button>
      </Tab.Pane>
    )
  }
}

export default KeyValuePane;