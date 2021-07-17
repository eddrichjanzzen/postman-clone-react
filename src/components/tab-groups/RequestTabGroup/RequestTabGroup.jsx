import React from 'react';
import { Tab } from 'semantic-ui-react';
import CodeMirrorEditorPane from '../../panes/CodeMirrorEditorPane/CodeMirrorEditorPane';
import KeyValuePane from '../../panes/KeyValuePane/KeyValuePane';

const RequestTabGroup = ({ doc, setDoc, queryParams, setQueryParams, headers, setHeaders }) => {
  
  // configuration for panes
  const panes = [
    {
      menuItem: 'Query Params',
      pane: <Tab.Pane key="query-params">
              <KeyValuePane
                keyPairs={queryParams}
                setKeyPairs={setQueryParams}
                />
            </Tab.Pane>  
    },
    {
      menuItem: 'Headers',
      pane: <Tab.Pane key="headers">
              <KeyValuePane
                keyPairs={headers}
                setKeyPairs={setHeaders}/>
            </Tab.Pane>  
    },
    { 
      menuItem: 'Body', 
      pane: <Tab.Pane key="json-editor">
              <CodeMirrorEditorPane 
                doc={doc}
                setDoc={setDoc}/>
            </Tab.Pane> 
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

export default RequestTabGroup;
