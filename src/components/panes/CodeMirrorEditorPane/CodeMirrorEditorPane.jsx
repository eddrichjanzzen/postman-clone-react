import React, { useRef, useEffect } from 'react';
import { EditorView, keymap } from '@codemirror/view';
import { EditorState, basicSetup } from '@codemirror/basic-setup';
import { defaultTabBinding } from '@codemirror/commands';
import { json } from '@codemirror/lang-json';
import './CodeMirrorEditorPane.css';

const basicExtensions = [
  basicSetup,
  keymap.of([defaultTabBinding]),
  json(),
  EditorState.tabSize.of(2)
]

const CodeMirrorEditorPane = ({ doc, setDoc, isEditable=true }) => {

  const editorRef = useRef();

  useEffect(() => {  
    if(editorRef.current === null) return;
    
    const state = EditorState.create({
      doc: doc,
      extensions: [
        ...basicExtensions,
        EditorView.updateListener.of((view) => {
          if (view.docChanged) {
            setDoc(view.state.doc);
          }
        }),
        EditorView.editable.of(isEditable)
      ]
    });

    const view = new EditorView({
      state,
      parent: editorRef.current
    });

    return () => {
      view.destroy();
    }

  }, [editorRef.current, doc])


  return (
    <div className="editor-pane" ref={editorRef}></div>
  )
}

export default CodeMirrorEditorPane;