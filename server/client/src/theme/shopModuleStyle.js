import styled, { css } from 'styled-components';

const activeButton = css`
  background: #ff8000;
  color: white;
  cursor: pointer;
  &:active {
    background-color: #d16e0a;
  }
  pointer-events: auto;
`;

export const ButtonOrder = styled.button`
  position: absolute;
  width: 360px;
  height: 48px;
  left: 0px;
  top: 176px;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 4px;
  color: #c1c1c1;
  font-wight: 600;
  font-size: 16px;
  outline: none;
  pointer-events: none;
  ${({ price }) => (price >= 50 ? activeButton : 'background: #f7f7f7;')}
`;
