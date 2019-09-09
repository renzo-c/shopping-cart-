import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 360px;
  height: 480px;
  background: #ffffff;
  border-radius: 4px;
  outline: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 53.3px;
  height: 45.3px;

  margin: 8px auto;
  padding: 0px;
`;

export const Title = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 32px;
  text-align: center;

  margin: 8px auto;
  padding: 0px;
`;

export const Description = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: center;

  width: 227px;
  margin: 0px;
  padding: 0px;
`;
