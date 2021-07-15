import React, { useRef, useEffect } from 'react';
import { EditorView, keymap } from '@codemirror/view';
import { EditorState, basicSetup } from '@codemirror/basic-setup';
import { defaultTabBinding } from '@codemirror/commands';
import { json } from '@codemirror/lang-json';

const basicExtensions = [
  basicSetup,
  keymap.of([defaultTabBinding]),
  json(),
  EditorState.tabSize.of(2)
]

const CodeMirrorEditorPane = ({ doc, setDoc }) => {

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
        })
      ]
    });

    const view = new EditorView({
      state,
      parent: editorRef.current
    });

    return () => {
      view.destroy();
    }

  }, [editorRef.current])


  return (
    <div ref={editorRef}></div>
  )
}

export default CodeMirrorEditorPane;