import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Story } from './storyCard.styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const StoryCard = ({ story }) => {
    const { title, publication_date, tag, id } = story;
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    let month;
    if (publication_date) {month = months[Number(publication_date.substr(0,2)) - 1]}
    return (
      <Container>
        <Link to={`/stories/${id}`}>
            <Story>
              <div className="card-header">
                <h3 className="story-title">{title}</h3>
                <div className="tag">{tag}</div>
              </div>
                <p className="publication">{publication_date ? `${month} ${publication_date.substr(3,2)}, ${publication_date.substr(6)}`: null}</p>
                <button className="read-more">Read more <ArrowForwardIcon style={{ fontSize: 13 }}/></button>
            </Story>
        </Link>
      </Container>
    )
}

export default StoryCard;
