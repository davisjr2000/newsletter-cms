import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const CardContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
  height: 140px;
  width: 70%;
  border: 1px solid ${COLORS.lightGrey};
  display: flex;
  align-items: center;
  margin: 10px 0;

  .brew-mug {
    width: 140px;
    height: 11  0px;
  }

  .news-content {
    padding: 15px 10px 15px 20px;
    width: 100%;
  }

  h3 {
    font-size: 19px;
    font-weight: 700;
    color: ${COLORS.dark};
    font-family:
  }

  p {
    color: ${COLORS.grey};
    font-weight: 300;
    margin: 0;
    margin-bottom: 10px;
    word-break: break-word;
  }

  a {
    color: ${COLORS.blue};
    border: none;
  }

  .newsletter-card-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    width: 100%;
    .brew-mug {
      display: none;
    }
    .news-content {
      padding: 5px;
    }
    .newsletter-card-content {
      h3 {
        font-size: 15px;
      }
    }
  }
  @media (max-width: 992px) {
    width: 90%;
  }
`
