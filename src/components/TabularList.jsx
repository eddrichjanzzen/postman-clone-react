import React from 'react';
import { Tab } from 'semantic-ui-react';
import KeyValuePane from './panes/KeyValuePane';

const TabularList = () => {
  
  // configuration for panes
  const panes = [
    {
      menuItem: 'Query Params',
      pane: <Tab.Pane><KeyValuePane/></Tab.Pane>  
    },
    {
      menuItem: 'Headers',
      pane: <Tab.Pane><KeyValuePane/></Tab.Pane>  
    },
    { 
      menuItem: 'JSON', 
      pane: <Tab.Pane></Tab.Pane> 
    }
  ]

  return (
    <div className="tabular-list">
      <Tab 
        menu={{ pointing: true }}
        renderActiveOnly={false}
        panes={panes}
      />
    </div>
  );

};

export default TabularList;
