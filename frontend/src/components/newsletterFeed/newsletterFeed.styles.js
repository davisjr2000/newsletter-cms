import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Container = styled.div`
  padding: 0 15px;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 25px;
    color: ${COLORS.blue};
  }

  a {
    color: ${COLORS.blue};
    border: none;
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

  .btn-blue {
    margin-top: 15px;
    background: ${COLORS.blue};
    padding: 10px 60px;
    font-size: 15px;
    border: none;
    color: white;
    border-radius: 5px;
    transition: all 0.2s ease;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }

  .no-newsletters {
    text-align: center;
    margin-top: 40px;
    p {
      font-weight: 300;
    }
  }

  @media (max-width: 768px) {
    padding: 0;
  }
  @media (max-width: 992px) {
    padding: 0;
  }
`
