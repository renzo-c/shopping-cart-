import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100vh;
`;

export const ImageContainer = styled.img`
  width: 308px;
  height: 288px;
  // margin-bottom: 15px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 50px;
`;

export const Div = styled.div`
  font-size: ${({ type }) => (type === 'title' ? '28px' : '16px')};
  margin-bottom: 20px;
`;

export const Span = styled.div`
  display: inline-block;
  font-weight: 600;
`;
