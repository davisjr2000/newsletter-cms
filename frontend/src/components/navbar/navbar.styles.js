import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Container = styled.div`
  padding: 0 15px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .MuiSvgIcon-root {
    display: none;
  }

  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }

  @media (max-width: 768px) {
    .MuiSvgIcon-root {
      display: block;
    }
    .navlinks {
      display: none;
    }
  }
  @media (max-width: 992px) {
    .MuiSvgIcon-root {
      display: block;
    }
    .navlinks {
      display: none;
    }
  }
`

export const Nav = styled.nav`
  padding: 25px;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);

  a {
    border: none;
    #logo {
      width: 180px;
    }
  }

  .navlinks {
    a {
      margin-left: 30px;
      font-weight: 400;
      font-size: 14px;
      text-decoration: none;
      color: ${COLORS.blue};
      border: none;
      transition: all 0.3s ease;
      &:hover {
        opacity: 0.8;
    }
  }
`
