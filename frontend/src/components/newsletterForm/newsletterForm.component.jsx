import React from 'react';
import { SingleDatePicker } from 'react-dates';
import moment from "moment";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { Editor } from '@tinymce/tinymce-react';
import api from '../../constants/Api';
import Alert from '@material-ui/lab/Alert';
import Interweave from 'interweave';
import { Container, EditorContainer, LeftSide, RightSide, NewsletterContainer, NewsletterContent } from './newsletterForm.styles';

class NewsletterForm extends React.Component {
    state = {
        newsletter : {
            html: `<h3>Your Morning Brew: ${moment().format('MM/DD/YYYY')} issue</h3>`,
            publication_date: moment().format('MM/DD/YYYY'),
        },
        stories: [],
        focused: false,
        formErrors: [],
        loading: false
    }

    componentDidMount(){
      const { newsletter } = this.props;
      if (newsletter){
        this.setState({
          newsletter
        })
      }
    }

    handleDateChange = publication_date => {
      this.setState({
        newsletter: {
            ...this.state.newsletter,
            publication_date
        }
      })
    }

  handleEditorChange = (content, editor) => {
    const {newsletter} = this.state;
    this.setState({
        newsletter: {
            ...newsletter,
            html: content
        }
    })
  }

  handleSubmit = () => {
    const { newsletter } = this.state;
    this.setState({
      loading: true
    })
    if (newsletter.id){
      api.patch(`/newsletters/${newsletter.id}`, {
          newsletter
        }).then(response => {
          this.props.onUpdate(response.data)
          this.setState({ loading: false })
        }).catch(error => this.handleValidationError(error.response.data.errors))
    } else {
      api.post('/newsletters', {
          newsletter
        }).then(response => {
          this.props.history.push(`/newsletters/${response.data.id}`);
        }).catch(error => this.handleValidationError(error.response.data.errors))
    }
  }

  handleValidationError = (formErrors) => {
    this.setState({ formErrors, loading: false });
  }

  render() {
    const { formErrors, focused, loading, newsletter } = this.state;
    const { id, html, publication_date } = newsletter
    
    return (
      <Container>
      <LeftSide>
        {!id && (
        <>
          <label>Issue date</label>
          <br/>
          <SingleDatePicker
            date={moment(publication_date)}
            onDateChange={date => this.handleDateChange(date.format('MM/DD/YYYY'))}
            focused={focused}
            onFocusChange={({ focused }) => this.setState({ focused })}
            id="story_date_picker"
          />
        </>
        )}
        <EditorContainer>
        <Editor
          initialValue={html}
          init={{
            height: 400,
            menubar: false,
            // underline: [{inline: 'u', styles: {}}],
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
        <NewsletterContainer>
          <img src="https://miro.medium.com/max/1400/0*rLlT3Ok2AZJRwniH" id="rise-and-grind" alt="rise-and-grind" />
          <NewsletterContent>
            <Interweave content={html}/>
          </NewsletterContent>
        </NewsletterContainer>
      </RightSide>
      </Container>
    );
  }
}

export default NewsletterForm;
