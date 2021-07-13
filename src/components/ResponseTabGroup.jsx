import React, { useState } from 'react';
import { Tab } from 'semantic-ui-react';
import CodeMirrorEditorPane from './panes/editor/CodeMirrorEditorPane';

const ResponseTabGroup = () => {

  const [editorView, setEditorView] = useState(null);

  // configuration for panes
  const panes = [
    {
      menuItem: 'Response Body',
      pane: <Tab.Pane key="response-body">
              <CodeMirrorEditorPane
                initialCode={'{}'}
                setEditorView={setEditorView}/>
            </Tab.Pane>  
    },
    {
      menuItem: 'Response Headers',
      pane: <Tab.Pane key="response-headers">Response Headers</Tab.Pane>  
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