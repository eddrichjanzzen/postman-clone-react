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

const CodeMirrorEditor = () => {

  const editorRef = useRef();

  useEffect(() => {

    if(editorRef.current === null){
      return;
    }

    // create a new editor on initial load
    const view = new EditorView({
      state: EditorState.create({
        doc: "{\n\t\n}",
        extensions: basicExtensions
      }),
      parent: editorRef.current
    })

    // component clean up, when unmounted
    return () => {
      view.destroy();
    }


  }, [editorRef])

  return (
    <div ref={editorRef}></div>
  )

}

export default CodeMirrorEditor;