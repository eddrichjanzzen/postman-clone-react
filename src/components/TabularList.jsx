import React from 'react';
import { Tab } from 'semantic-ui-react';
import KeyValuePane from './panes/KeyValuePane';

class TabularList extends React.Component {

  state = {
    queryParams: [
      {
        id: 0,
        keyItem : '',
        valueItem : ''
      }
    ],
    headers: [
      {
        id: 0,
        keyItem : '',
        valueItem : ''
      }
    ]
  }

  // configuration for panes
  panes = [
    {
      menuItem: 'Query Params',
      render: () => <KeyValuePane
                      tabName='queryParams'
                      keyValueList={this.state.queryParams}
                      onKeyPairAdd={this.onKeyPairAdd}
                      onKeyPairUpdate={this.onKeyPairUpdate}
                      onKeyPairRemove={this.onKeyPairRemove}
                    />
    },
    {
      menuItem: 'Headers',
      render: () => <KeyValuePane
                      tabName='headers'
                      keyValueList={this.state.headers}
                      onKeyPairAdd={this.onKeyPairAdd}
                      onKeyPairUpdate={this.onKeyPairUpdate}
                      onKeyPairRemove={this.onKeyPairRemove}
                    />
    },
    { 
      menuItem: 'JSON', 
      render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> 
    }
  ]

  onKeyPairAdd = (tabName) => {
    this.setState({
      ...this.state[tabName].push({
        id: this.state[tabName].length,
        keyItem: '',
        valueItem: ''
      })
    }, () => {
      console.log(this.state);
    })
  }

  onKeyPairRemove = (tabName, keyPair) => {
    
    let newKeyValues = [...this.state[tabName]];

    // render a new list removing based on the index
    newKeyValues = newKeyValues.filter(x => x.id !== keyPair.id);

    this.setState({
      [tabName] : newKeyValues
    }, () => {
      console.log(this.state)
    });
  }

  onKeyPairUpdate = (tabName, keyPair) => {
    // Reference:
    // https://javascript.plainenglish.io/react-updating-a-value-in-state-array-7bae7c7eaef9

    // first look for the elements index
    const elementIndex = this.state[tabName].findIndex(element => element.id === keyPair.id);
    
    let newKeyValues = [...this.state[tabName]];

    newKeyValues[elementIndex] = {
      ...newKeyValues[elementIndex], 
      keyItem: keyPair.keyItem,
      valueItem: keyPair.valueItem
    }

    this.setState({
      [tabName]: newKeyValues
    }, () => {
      console.log(this.state)
    });
  }

  onTabChange = () => {
    console.log('tab changed 1')
  }

  render(){
    return (
      <div className="tabular-list">
        <Tab 
          panes={this.panes}
          onTabChange={this.onTabChange}
        />
      </div>
    );
  }

}

export default TabularList;