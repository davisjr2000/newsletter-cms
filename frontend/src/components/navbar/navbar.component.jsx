import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav } from './navbar.styles';
import MenuIcon from '@material-ui/icons/Menu';

class Navbar extends React.Component {

    render() {
      return (
        <Nav>
          <Container>
            <Link to="/">
              <img src="https://i.ibb.co/xFttp76/morning-brew-logo-dark.png" id="logo" alt="morning-brew"/>
            </Link>
            <div className="navlinks">
              <Link to="/">Home</Link>
              <Link to="/stories/new">Create Story</Link>
              <Link to="/newsletters/new">Create Newsletter</Link>
              <Link to="/newsletters">Newsletters</Link>
            </div>
            <MenuIcon />
          </Container>
        </Nav>
      );
    }
  }

  export default Navbar;
