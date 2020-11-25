import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Container = styled.div`
  .tag-inner {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 15px;
    font-weight: bold;
    color: #252525;
    background-color: #f0b041;
    padding: 3px 10px;
    border-radius: 5px;
  }

  .p_btn-social {
    margin: 20px 0 10px 0;
    a {
      border: none;
      display: inline;
      max-width: 20px;
      margin-right: 5px;
    }
  }

  p {
    word-break: break-word;
    font-weight: 300;
    color: ${COLORS.dark};
  }

  h3 {
    font-size: 27px;
    margin-top: 20px;
  }

  .publication {
    color: ${COLORS.grey};
    font-weight: 300;
    margin-top: 30px;
  }
`
