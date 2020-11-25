import React from 'react';
import Story from '../story/story.component'
import api from '../../constants/Api';
import StoryForm from '../storyForm/storyForm.component';
import { Container, StoryContainer } from './storyShow.styles';

class StoryShow extends React.Component {
    state = {
      story: {
          html: "",
          title: ""
      },
      editing: false
    }

    componentDidMount(){
      this.fetchStory();
    }

    refreshStory = story => {
      this.setState({story})
    }

    toggleEdit = () => {
      this.setState({
          editing: !this.state.editing
      })
    }

    onUpdate = (story) => {
      this.refreshStory(story);
      this.toggleEdit()
    }

    fetchStory = () => {
      api.get(`/stories/${this.props.match.params.id}`)
      .then(response => {
        this.setState({
            story: response.data
        })
      })
    }

    render() {
      const { story, editing } = this.state;
      return (
        <Container>
            {editing ? (
              <StoryForm
                story={story}
                onUpdate={this.onUpdate}
              />
              ) : (
              <StoryContainer>
                <Story
                  story={story}
                  toggleEdit={this.toggleEdit}
                />
              </StoryContainer>
            )}
        </Container>
      );
    }
  }

  export default StoryShow;
