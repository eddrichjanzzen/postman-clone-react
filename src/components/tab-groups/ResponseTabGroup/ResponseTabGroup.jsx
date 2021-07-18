import React from 'react';
import { Tab } from 'semantic-ui-react';
import CodeMirrorEditorPane from '../../panes/CodeMirrorEditorPane/CodeMirrorEditorPane';
import ResponseHeaders from '../../panes/ResponseHeadersPane/ResponseHeadersPane';

const ResponseTabGroup = ({ doc, setDoc, response, loading }) => {

  // configuration for panes
  const panes = [
    {
      menuItem: 'Response Body',
      pane: <Tab.Pane 
              key="response-body"
              loading={loading}>
              <CodeMirrorEditorPane
                doc={doc}
                setDoc={setDoc}
                isEditable={false}/>
            </Tab.Pane>  
    },
    {
      menuItem: 'Response Headers',
      pane: <Tab.Pane key="response-headers">
              <ResponseHeaders
                response={response}/>
            </Tab.Pane>  
    }
  ]

  return (
    <div className="response-tabs">
      <Tab 
        renderActiveOnly={false}
        panes={panes}
      />
    </div>
  );
}

export default ResponseTabGroup;