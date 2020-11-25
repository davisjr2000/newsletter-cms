import React from 'react';
import api from '../../constants/Api';
import { Link } from 'react-router-dom';
import NewsletterCard from '../newsletterCard/newsletterCard.component';
import { Container } from './newsletterFeed.styles';

class NewsletterFeed extends React.Component {

  state = {
    newsletters: []
  }

  componentDidMount(){
    this.fetchNewsletters();
  }

  fetchNewsletters = () => {
    api.get("/newsletters")
    .then(response => {
        this.setState({
            newsletters: response.data
        })
    })
  }

  render() {
    const { newsletters } = this.state;

    return (
      <Container>
        <h1>Our Newsletters</h1>
        {newsletters.length > 0 ? newsletters.map((newsletter, index) => (
          <NewsletterCard
            newsletter={newsletter}
            key={index}
          />
        )) :
        <div className="no-newsletters">
          <p>No newsletters to display yet</p>
          <Link to={`/newsletters/new`}>
            <button className="btn-blue">Create newsletter</button>
          </Link>
        </div>
        }
      </Container>
    );
  }
}

export default NewsletterFeed;
