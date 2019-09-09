import styled from 'styled-components';

export const Span = styled.span`
  color: ${({ color }) => color};
  font-weight: 600;
`;

export const IconSpan = styled.span`
  position: absolute;
  color: ${({ color }) => `${color}`};
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
