import React from 'react';
import { Tab } from 'semantic-ui-react';

  // configuration for panes
  const panes = [
    {
      menuItem: 'Response Body',
      pane: <Tab.Pane>Response Body</Tab.Pane>  
    },
    {
      menuItem: 'Response Headers',
      pane: <Tab.Pane>Response Headers</Tab.Pane>  
    }
  ]


const ResponseTabs = () => {
  return (
    <div className="response-tabs">
      <Tab 
        renderActiveOnly={false}
        panes={panes}
      />
    </div>
  );
}

export default ResponseTabs;