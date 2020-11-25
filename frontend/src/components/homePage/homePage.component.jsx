import React from 'react';
import api from '../../constants/Api';
import { Link } from 'react-router-dom';
import StoryCard from "../storyCard/storyCard.component";
import { Container, Body, Stories, InitialStory } from './homePage.styles';

class HomePage extends React.Component {

  state = {
    stories: []
  }

  componentDidMount(){
    this.fetchStories();
  }

  fetchStories = () => {
    api.get("/stories")
    .then(response => {
        this.setState({
            stories: response.data
        })
    })
  }

  render() {
    const { stories } = this.state;
    return (
      <Body>
        <Container>
          {/* Header */}
          <h1>Latest Stories</h1>
          <Stories>
            <div className="stories-container">
              {stories.length > 0 ? stories.map((story, index) => (
                <StoryCard
                  story={story}
                  key={index}
                />
              )) :
              <Link to={`/stories/new`}>
                <InitialStory>
                  <div className="card-header">
                    <h3 className="story-title">Create your first story</h3>
                  </div>
                </InitialStory>
              </Link>
            }
            </div>
            <img src="https://uploads-ssl.webflow.com/5c3e32e57e2ca27801aea8b9/5c61985c310b63c03c99fb28_morning%20brew.png" id="main-img" alt="main-img"/>
          </Stories>
        </Container>
      </Body>
    );
  }
}

export default HomePage;
