import React from 'react';
import { Tab } from 'semantic-ui-react';
import KeyValuePane from './panes/KeyValuePane';

const panes = [
  {
    menuItem: 'Query Params',
    render: () => <KeyValuePane/>
  },
  { 
    menuItem: 'Headers', 
    render: () => <KeyValuePane/>
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