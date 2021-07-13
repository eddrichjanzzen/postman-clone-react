import React from 'react';
import { Tab } from 'semantic-ui-react';
import CodeMirrorEditor from './CodeMirrorEditor';
import KeyValuePane from './panes/KeyValuePane';

const RequestTabs = () => {
  
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
      menuItem: 'JSON Body', 
      pane: <Tab.Pane><CodeMirrorEditor/></Tab.Pane> 
    }
  ]

  return (
    <div className="request-tabs">
      <Tab 
        renderActiveOnly={false}
        panes={panes}
      />
    </div>
  );

};

export default RequestTabs;
