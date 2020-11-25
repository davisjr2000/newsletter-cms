import React from 'react';
import { SingleDatePicker } from 'react-dates';
import Story from "../story/story.component";
import moment from "moment";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { Editor } from '@tinymce/tinymce-react';
import api from '../../constants/Api';
import Alert from '@material-ui/lab/Alert';
import { Container, EditorContainer, LeftSide, RightSide, StoryContainer } from './storyForm.styles';

class StoryForm extends React.Component {
    state = {
        story : {
            title: "",
            html: "",
            tag: "",
            publication_date: moment().format('MM/DD/YYYY'),
        },
        focused: false,
        formErrors: [],
        loading: false,
    }

    componentDidMount(){
        const { story } = this.props;
        if (story){
          this.setState({
              story
          })
        }
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            story: {
                ...this.state.story,
                [name]: value
            }
        })
    }

    handleDateChange = publication_date => {
      this.setState({
        story: {
            ...this.state.story,
            publication_date
        }
    })
    }

  handleEditorChange = (content, editor) => {
    this.setState({
        story: {
            ...this.state.story,
            html: content
        }
    })
  }

  handleSubmit = () => {
      this.setState({ loading: true })
      const { story } = this.state
      if (story.id){
        api.patch(`/stories/${story.id}`, {
            story
          }).then(response => {
            this.props.onUpdate(response.data)
            this.setState({ loading: false })
          }).catch(error => this.handleValidationError(error.response.data.errors))
      } else {
        api.post('/stories', {
            story
          }).then(response => {
            this.props.history.push(`/stories/${response.data.id}`);
          }).catch(error => this.handleValidationError(error.response.data.errors))
      }
  }

  handleValidationError = (formErrors) => {
    this.setState({ formErrors, loading: false })
  }

  render() {
    const { formErrors, story, focused, loading } = this.state;
    const { title, html, tag, publication_date } = story;
    return (
      <Container>
      <LeftSide>
        <label htmlFor="tag">Tag</label>
        <br/>
        <input
          value={tag}
          onChange={this.handleChange}
          name="tag"
          placeholder="TAG"
          className="form-input"
        />
        <br/>
        <label htmlFor="title">Title</label>
        <br/>
        <input
          value={title}
          onChange={this.handleChange}
          name="title"
          placeholder="Story Title"
          className="form-input"
        />
        <br/>
        <label>Issue date</label>
        <br/>
        <SingleDatePicker
          date={moment(publication_date)}
          onDateChange={date => this.handleDateChange(date.format('MM/DD/YYYY'))}
          focused={focused}
          onFocusChange={({ focused }) => this.setState({ focused })}
          id="story_date_picker"
        />
        <EditorContainer>
          <Editor
            initialValue={html}
            init={{
              height: 400,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
              ],
              toolbar:
                'undo redo | formatselect | underline forecolor | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
            }}
            onEditorChange={this.handleEditorChange}
          />
        </EditorContainer>
        {formErrors.length > 0 &&
          <Alert severity="error">
            {formErrors.map(error => <div>{error}</div>)}
          </Alert>
        }
        <button className="btn-blue" onClick={this.handleSubmit} disabled={loading}>Submit</button>
      </LeftSide>
      <RightSide>
        <h2>Preview</h2>
        <StoryContainer>
          <Story
            story={story}
            toggleEdit={this.toggleEdit}
            fromNewsletter={true}
          />
        </StoryContainer>
      </RightSide>
      </Container>
    );
  }
}

export default StoryForm;


