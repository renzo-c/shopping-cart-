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
