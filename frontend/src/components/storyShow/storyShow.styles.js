import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Container = styled.div`
  padding: 0 15px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 35px;
    color: ${COLORS.blue};
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
    padding: 0;
  }

  @media (max-width: 992px) {
    padding: 0;
  }
`

export const StoryContainer = styled.div`
  width: 50%;
  border-radius: 10px;
  margin: 25px 0;
  padding: 25px;
  border: 1px solid ${COLORS.lightGrey};

  h1 {
    word-wrap: break-word;
  }

  p {
    word-wrap: break-word;
  }

  .tag-inner {
    word-wrap: break-word;
  }

  .btn-blue-sm {
    margin-top: 15px;
    margin-right: 10px;
    border: 1px solid ${COLORS.blue};
    background: white;
    padding: 5px 20px;
    font-size: 15px;
    color: ${COLORS.blue};
    border-radius: 5px;
    transition: all 0.2s ease;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 992px) {
    width: 90%;
  }
`
