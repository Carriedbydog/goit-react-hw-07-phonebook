import { styled } from 'styled-components';

export const StyledList = styled.ul``;

export const StyledItem = styled.li`
  font-size: 20px;
  margin-bottom: 25px;
`;

export const StyledContactBtn = styled.button`
  border-radius: 10px;
  border: none;

  padding: 10px 20px;
  font-size: 14px;
  margin-left: 30px;

  box-shadow: 2px 1px 2px 1px gray;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;
