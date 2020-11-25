import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Container = styled.div`
  padding: 0 15px;
  margin-right: auto;
  margin-left: auto;
  background: white;
  border-radius: 30px;

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

export const Body = styled.div`
  padding: 25px;
  border-radius: 30px;
  margin: 20px;
  background: white;

  @media (max-width: 768px) {
    padding: 0;
  }
  @media (max-width: 992px) {
    padding: 0;
  }
`

export const Stories = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .stories-container {
    width: 40%;
    padding-right: 10px;
    height: 450px;
    overflow: scroll;
    overflow-y:auto;
  }

  #main-img {
    width: 60%;
    height: 450px;
    border-radius: 10px;
    object-fit: cover;
  }

  @media (mmax-width: 768px) {
    flex-direction: column;
    .stories-container {
      width: 100%;
    }
    #main-img {
      display: none;
    }
  }
  @media (max-width: 992px) {
    flex-direction: column;
    .stories-container {
      width: 100%;
    }
    #main-img {
      display: none;
    }
  }
`
export const InitialStory = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 20px 5px;
  border-bottom: 1px dotted ${COLORS.grey};
  border-top: 1px dotted ${COLORS.grey};
  transition: all 0.2s ease;

  &:hover {
    background: ${COLORS.lightBlue};
  }

  .tag {
    padding: 5px 10px;
    border-radius: 5px;
    max-width: 25%;
    font-size: 13px;
    font-weight: 500;
    background: ${COLORS.yellow};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .story-title {
    margin-bottom: 8px;
    font-size: 19px;
    max-width: 70%;
    word-wrap: break-word;
    font-weight: 700;
  }

  .read-more {
    width: max-content;
    color: ${COLORS.blue};
    border: none;
    margin-top: 3px;
    display: flex;
    align-items: center;
  }

  .publication {
    font-size: 14px;
    color: ${COLORS.grey};
    margin: 10px 0 5px 0;
    font-weight: 300;
  }

  .card-header {
    display: flex;
    align-items: start;
    justify-content: space-between;
  }

  .arrow-right {
    width: 11px;
    height: 11px;
  }

`

