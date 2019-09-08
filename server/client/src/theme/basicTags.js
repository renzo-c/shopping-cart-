import styled from 'styled-components';

export const IconSpan = styled.span`
  position: absolute;
  color: ${({color}) => `${color}`};
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;