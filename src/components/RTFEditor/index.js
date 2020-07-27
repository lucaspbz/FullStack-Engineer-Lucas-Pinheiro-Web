import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function App({ initialValue, saveNewValue, index }) {
  const handleEditorChange = (content, editor) => {
    if (index >= 0) {
      saveNewValue((oldAlternatives) => {
        oldAlternatives[index] = { ...oldAlternatives[index], texto: content };

        console.log('Mudando alternativa:', index);

        return oldAlternatives;
      });
    } else {
      console.log('Mudando enunciado...');
      saveNewValue(content);
    }
  };

  return (
    <div className="editor-container">
      <Editor
        initialValue={initialValue}
        apiKey="c5nfz6z7fyp267wlo2yr8wp45hqw0rcqa9jaan7m1d5ugmdr"
        init={{
          plugins: ['quickbars, autoresize'],
          toolbar: false,
          menubar: false,
          inline: true,
        }}
        onEditorChange={handleEditorChange}
      />
    </div>
  );
}
