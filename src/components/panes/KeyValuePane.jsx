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

    const renderedList = this.state.keyValues.map((keyPair, index) => {
      return <AddKeyValue
          key={index}
          keyPair={keyPair} 
          onKeyPairUpdate={this.onKeyPairUpdate} />
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