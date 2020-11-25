import React from 'react';
import { Link } from 'react-router-dom';
import Interweave from 'interweave';
import { CardContainer } from './newsletterCard.styles';

const NewsletterCard = ({ newsletter }) => {
    const { html } = newsletter;
    return (
      <CardContainer>
        <img src="https://avatars0.githubusercontent.com/u/50154055?s=200&v=4" className="brew-mug" alt="brew-mug" />
        <div className="news-content">
          <Interweave content={html}/>
          <div className="newsletter-card-content">
            <Link to={`/newsletters/${newsletter.id}`}>
              Read Stories
            </Link>
          </div>
        </div>
      </CardContainer>
    )
}

export default NewsletterCard;
