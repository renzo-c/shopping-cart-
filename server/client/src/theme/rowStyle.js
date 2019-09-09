import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  padding: 16px;
  border: 1px solid #dddddd;
  pointer-events: ${({ type }) => (type === 'dull' ? 'none' : 'auto')};
  opacity: ${({ dull }) => (dull ? '0.4' : '1')};
`;

export const Image = styled.img`
  width: 80px;
  height: 74px;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 16px;
`;

export const Description = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 3;
`;

export const Name = styled.div`
  margin: 0;
  padding: 0;
`;

export const Span = styled.span`
  color: ${({ color }) => color};
  font-weight: 600;
  font-size: ${({ type }) => (type === 'price' ? '22px' : '16px')};
  line-height: ${({ type }) => (type === 'price' ? '32px' : '24px')};
`;

export const Button = styled.button`
  position: relative;
  margin: auto;
  width: 48px;
  height: 48px;
  border: none;
  outline: none;
  border-radius: 50%;
  background: #ff8000;
  line-height: 80px;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  &:active {
    background-color: #d16e0a;
  }
`;

export const Cross = styled.span`
  position: absolute;
  display: block;
  background: white;
  top: 50%;
  left: 50%;
  height: 24px;
  width: 3px;
  transform: translate(-50%, -50%);
  &::after {
    background: white;
    content: '';
    height: 3px;
    left: -11px;
    position: absolute;
    top: 11px;
    width: 24px;
  }
`;

export const CounterControl = styled.div`
  position: fixed;
  display: flex;
  background-color: #ff8000;
  width: 180px;
  height: 48px;
  left: 284px;
  top: 279px;
  justify-content: space-between;
  border-radius: 4px;
  z-index: 10;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CounterDisplay = styled.input`
  width: 68px;
  height: 48px;
  background-color: #ff8000;
  padding: 0;
  border: none;
  color: white;
  font-size: 16px;
  text-align: center;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const CounterButton = styled.button`
  width: 56px;
  height: 48px;
  background-color: #ff8000;
  border: none;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
