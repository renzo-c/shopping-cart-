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

export const Price = styled.span`
  color: red;
  font-weight: 600;
  font-size: 22px;
  line-height: 32px;
`;

export const Button = styled.button`
  background-color: #FF8000;
  border: none;
  border-radius: 50%;
  padding: 20px;
  cursor: pointer;
  width: 48px;
  height:48px;
  outline:none;
  align-self: center;
  &:active {
    background-color: #d16e0a;
  }
`;
