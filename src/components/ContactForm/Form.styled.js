import { styled } from 'styled-components';

export const StyledLabel = styled.label`
  font-size: 30px;
  font-weight: 600;
  display: inline-block;
`;

export const StyledInput = styled.input`
  width: 180px;
  padding: 10px;
  border-radius: 10px;

  margin-right: 10px;
  margin-left: 10px;
`;

export const StyledButton = styled.button`
  border-radius: 10px;
  border: none;

  margin-bottom: 20px;
  padding: 10px 20px;
  font-size: 14px;

  box-shadow: 2px 1px 2px 1px gray;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;
