import React from 'react';
import Interweave from 'interweave';
import { Container } from './story.styles';
import api from '../../constants/Api';

class Story extends React.Component {

  onDelete = () => {
    const { story } = this.props;
    api.delete(`/stories/${story.id}`)
    .then(response => {
      window.location.href = '/'
    })
  }

  render() {
    const { story, toggleEdit, fromNewsletter } = this.props;
    const { publication_date, html, title, tag} = story;
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    let month;
    if (publication_date) {month = months[Number(publication_date.substr(0,2)) - 1]}

    return (
      <Container>
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tbody>
            <td className="section body-copy">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tbody>
                <tr>
                  <td className="tag-outer">
                    <table align="left" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td className="tag-inner">{tag}</td>
                    </tr>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
                <h3>{title}</h3>
                <Interweave content={html}/>
                {publication_date && <div className="publication">{`${month} ${publication_date.substr(3,2)}, ${publication_date.substr(6)}`}</div>}
                <div className="p_btn-social">
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><img
                        src="https://img.createsend1.com/ei/j/30/B40/C56/csimport/facebook_icon.png"
                        width="20" alt="" /></a>&nbsp;&nbsp;
                    <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><img
                        src="https://img.createsend1.com/ei/j/30/B40/C56/csimport/twitter_icon.png"
                        width="20" alt="" /></a>&nbsp;&nbsp;
                    <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><img
                        src="https://img.createsend1.com/ei/j/30/B40/C56/csimport/linkedin_icon.png"
                        width="20" alt="" /></a>&nbsp;&nbsp;
                    <a href="mailto:?subject=Check%20out%20this%20story%20from%20Morning%20Brew!&amp;body=www.morningbrew.com%0A%0AWant%20more%20great%20content%3F%20Subscribe%20to%20Morning%20Brew%27s%20daily%20newsletter%20for%20all%20the%20latest%20news%20from%20Wall%20Street%20to%20Silicon%20Valley%20%40%20www.morningbrew.com."
                    target="_blank" rel="noreferrer"><img src="https://img.createsend1.com/ei/j/30/B40/C56/csimport/mail_icon.png"
                        width="20" alt="" /></a>
                </div>
                </td>
            </tbody>

        </table>
        {!fromNewsletter && (
           <>
            <button className="btn-blue-sm" onClick={toggleEdit}>Edit</button>
            <button className="btn-blue-sm" onClick={this.onDelete}>Delete</button>
           </>
        )}
      </Container>
    );
  }
}

export default Story;
