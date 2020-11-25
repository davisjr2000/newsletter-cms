import React from 'react';
import api from '../../constants/Api';
import Story from '../story/story.component';
import NewsletterForm from '../newsletterForm/newsletterForm.component';
import Interweave from 'interweave';
import { Container, NewsletterContainer, NewsletterContent, StoryContainer } from './newsletterShow.styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
class NewsletterShow extends React.Component {
    state = {
      newsletter: {
          stories: []
      }
    }

    componentDidMount(){
        this.fetchNewsletter();
    }

    fetchNewsletter = () => {
      api.get(`/newsletters/${this.props.match.params.id}`)
      .then(response => {
          this.setState({
            newsletter: response.data
          })
      })
    }

    toggleEdit = () => {
     this.setState({
       editing: !this.state.editing
     })
    }

    onDelete = () => {
      const { newsletter } = this.state;
      api.delete(`/newsletters/${newsletter.id}`)
      .then(response => {
        this.props.history.push('/');
      })
    }

    onUpdate = (newsletter) => {
      this.setState({newsletter});
      this.toggleEdit()
    }

    render() {
      const { newsletter, editing } = this.state;

      return (
        <Container>
          {editing ? 
            <NewsletterForm 
              newsletter={newsletter}
              onUpdate={this.onUpdate}
             />
            : (      
          <NewsletterContainer>
            <img src="https://miro.medium.com/max/1400/0*rLlT3Ok2AZJRwniH" id="rise-and-grind" alt="rise-and-grind" />
            <NewsletterContent>
              <Interweave content={newsletter.html}/>
              <div>
                <EditIcon 
                  style={{ color: "#1C7FF2" }} 
                  onClick={this.toggleEdit} 
                />
                <DeleteForeverIcon 
                  style={{ color: "#ce1414" }}
                  onClick={this.onDelete}
                />
              </div>
              {newsletter.stories.map((story, index)=> (
                <StoryContainer>
                  <Story
                    story={story}
                    key={index}
                    fromNewsletter
                  />
                </StoryContainer>
              ))}
            </NewsletterContent>
          </NewsletterContainer>
           )
          }
        </Container>
      );
    }
  }

  export default NewsletterShow;
