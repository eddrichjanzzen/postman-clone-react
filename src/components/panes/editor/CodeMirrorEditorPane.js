import React, { useRef, useEffect } from 'react';
import { EditorView, keymap } from '@codemirror/view';
import { EditorState, basicSetup } from '@codemirror/basic-setup';
import { defaultTabBinding } from '@codemirror/commands';
import { json } from '@codemirror/lang-json';

const basicExtensions = [
  basicSetup,
  keymap.of([defaultTabBinding]),
  json(),
  EditorState.tabSize.of(2),
  EditorView.contentAttributes.of({contenteditable: false}),
  EditorView.editable.of(false)
]

const CodeMirrorEditorPane = ({ initialCode, setEditorView }) => {

  const editorRef = useRef();

  useEffect(() => {  

    if(editorRef.current === null) return;
  
    const state = EditorState.create({
      doc: initialCode,
      extensions: basicExtensions
    });

    const view = new EditorView({
      state,
      parent: editorRef.current
    })
    
    setEditorView(view);

    return () => {
      view.destroy();
      setEditorView(null);
    }

  }, [editorRef, initialCode])

  return (
    <div ref={editorRef}></div>
  )

}

export default CodeMirrorEditorPane;