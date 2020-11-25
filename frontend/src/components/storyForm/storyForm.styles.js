import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Container = styled.div`
  padding-right: 0 15px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px 0;
  display: flex;

  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }

  p {
    font-weight: 300;
  }

  .form-input {
    width: 65%;
    margin: 10px 0 25px 0;
    height: 40px;
    border: 1px solid ${COLORS.mediumGrey};
    border-radius: 5px;
    padding: 5px 10px;
    font-family: 'Rubik', sans-serif;
    font-weight: 300;
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

  .btn-blue-sm {
    margin-top: 15px;
    margin-right: 10px;
    background: ${COLORS.blue};
    padding: 5px 20px;
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

  button.DayPickerKeyboardShortcuts_buttonReset {
    display:none;
  }

  .CalendarDay__selected {
    background: ${COLORS.blue};
    color: white;
  }

  .DateInput_input__focused {
    border-bottom: 2px solid ${COLORS.blue};
  }

  .DateInput_input, .DateInput {
    height: 35px;
    font-size: 14px;
    color: ${COLORS.dark};
    font-family: 'Rubik', sans-serif;
  }

  .SingleDatePickerInput__withBorder {
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid ${COLORS.mediumGrey};
    margin: 10px 0 15px 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding-right: 0;
    .form-input {
      width: 100%
    }
  }
  @media (max-width: 992px) {
    flex-direction: column;
    padding-right: 0;
    .form-input {
      width: 100%
    }
  }
`

export const EditorContainer = styled(Container)`
  width: 100%;
  .tox {
    width: 100%;
    z-index: 0;
    border-radius: 5px;
  }
`

export const LeftSide = styled.div`
  width: 55%;
  padding-right: 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding-right: 0;
    padding: 8px;
  }
  @media (max-width: 992px) {
    width: 100%;
    padding-right: 0;
    padding: 8px;
  }
`


export const RightSide = styled.div`
  width: 45%;
  padding: 20px;
  border-left: 1px dotted ${COLORS.grey};

  h2 {
    color: ${COLORS.blue};
    font-size: 25px;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 25px;
  }

  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 992px) {
    display: none;
  }
`

export const StoryContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  margin: 25px 0;
  padding: 20px;
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
`
