import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Container = styled.div`
  background: white;
  padding: 20px 5px;
  border-bottom: 1px dotted ${COLORS.grey};
  transition: all 0.2s ease;

  &:first-child {
    border-top: 1px dotted ${COLORS.grey};
  }

  .arrow-right {
    width: 11px;
    height: 11px;
  }

  &:hover {
    background: ${COLORS.lightBlue};
  }

`
export const Story = styled.div`
  display: flex;
  flex-direction: column;
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
`
