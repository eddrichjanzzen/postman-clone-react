import React from 'react';
import { Tab } from 'semantic-ui-react';
import CodeMirrorEditorPane from './panes/editor/CodeMirrorEditorPane';
import KeyValuePane from './panes/key-value-pane/KeyValuePane';

const RequestTabGroup = ({ editorView, setEditorView, queryParams, setQueryParams, headers, setHeaders }) => {
  
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
      menuItem: 'JSON Body', 
      pane: <Tab.Pane key="json-editor">
              <CodeMirrorEditorPane 
                initialCode={'{\n\t\n}'}
                setEditorView={setEditorView}/>
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
