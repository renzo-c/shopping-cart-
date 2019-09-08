import styled from 'styled-components';

export const SearchBar = styled.input`
  position: absolute;
  width: 360px;
  height: 48px;
  left: 120px;
  top: 64px;
  background: #ffffff;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 16px 12px;
`;

export const SearchList = styled.div`
  position: absolute;
  width: 360px;
  height: 480px;
  left: 120px;
  top: 128px;
  background: #ffffff;
  border-radius: 4px;
  outline: none;
`;

export const Row = styled.div`
  display: flex;
  padding: 16px;
  border: 1px solid #dddddd;
  pointer-events: ${({type}) => type === 'dull' ? 'none' : 'auto'};
  opacity: ${({dull}) => dull ? '0.4' : '1'};
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
  color: ${({ color }) => (color === 'red' ? 'red' : 'black')};
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

export const TimeBoard = styled.div`
  position: absolute;
  width: 270px;
  height: 24px;
  left: 589px;
  top: 128px;
`;

export const PricingBoard = styled.div`
  position: absolute;
  width: 360px;
  height: 224px;
  left: 544px;
  top: 168px;
  outline: none;
`;

export const QuoteBoard = styled.div`
  position: absolute;
  margin: 0;
  // padding: 16px;
  width: 360px;
  height: 160px;
  left: 0px;
  top: 0px;
  background: #ffffff;
`;

export const ButtonOrder = styled.button`
  position: absolute;
  width: 360px;
  height: 48px;
  left: 0px;
  top: 176px;
  background: #f7f7f7;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 4px;
  color: #c1c1c1;
`;

export const Div = styled.div`
  margin: 0;
  margin-bottom: 8px;
  padding: ${({ dir }) => (dir === 'column' ? '16px' : '0')};
  display: flex;
  background-color: ${({ bg }) =>
    bg === 'marker' ? '#FFE200' : 'transparent'};
  flex-direction: ${({ dir }) => (dir === 'column' ? 'column' : 'row')};
  justify-content: ${({ dir }) =>
    dir === 'column' ? 'flex-start' : 'space-between'};
  font-weight: ${({ font }) => (font === 'weight' ? '600' : 'normal')};
`;
