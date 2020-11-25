import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Container = styled.div`
  padding: 0 15px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0;
  }

  @media (max-width: 992px) {
    padding: 0;
  }
`
export const NewsletterContainer = styled.div`
  width: 50%;
  border-radius: 10px;
  border: 1px solid ${COLORS.lightGrey};
  background: white;
  overflow: hidden;

  h3 {
    color: ${COLORS.dark};
    font-size: 22px;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif !important;
  }

  p {
    color: ${COLORS.grey};
    font-weight: 300;
    margin: 0;
    margin-top: 5px;
    margin-bottom: 15px;
  }

  img#rise-and-grind {
    width: 100%;
    height: 280px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 992px) {
    width: 90%;
  }
`
export const NewsletterContent = styled.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 5px;
  }
  @media (max-width: 992px) {
    padding: 10px;
  }
`

export const StoryContainer = styled.div`
  margin: 30px 0;
  padding: 20px 20px 10px 20px;
  border: 1px solid ${COLORS.lightGrey};
  border-radius: 10px;
`
