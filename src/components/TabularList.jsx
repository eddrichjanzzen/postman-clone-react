import React from 'react';
import { Tab } from 'semantic-ui-react';
import AddKeyValue from './panes/AddKeyValue';

const panes = [
  {
    menuItem: 'Query Params',
    render: () => <AddKeyValue/>
  },
  { 
    menuItem: 'Headers', 
    render: () => <AddKeyValue/> 
  },
  { 
    menuItem: 'JSON', 
    render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> 
  }
]

const TabularList = () => {
  
  return (
    <div className="tabular-list">
      <Tab panes={panes}/>
    </div>
  )
}

export default TabularList;