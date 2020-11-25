import React from 'react'
import ReactDOM from 'react-dom';
import { Editor } from '@tinymce/tinymce-react';

class StoryForm extends React.Component {
    handleEditorChange = (content, editor) => {
      console.log('Content was updated:', content);
    }
 
    render() {
      return (
        <h1>Salve</h1>
        // <Editor
        //   initialValue="<p>This is the initial content of the editor</p>"
        //   init={{
        //     height: 500,
        //     menubar: false,
        //     plugins: [
        //       'advlist autolink lists link image charmap print preview anchor',
        //       'searchreplace visualblocks code fullscreen',
        //       'insertdatetime media table paste code help wordcount'
        //     ],
        //     toolbar:
        //       'undo redo | formatselect | bold italic backcolor | \
        //       alignleft aligncenter alignright alignjustify | \
        //       bullist numlist outdent indent | removeformat | help'
        //   }}
        //   onEditorChange={this.handleEditorChange}
        // />
      );
    }
  }
 
  export default StoryForm;