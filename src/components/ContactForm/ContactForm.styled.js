import styled from '@emotion/styled';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 10px 15px 10px;
  // border: 2px solid blue;
  border-radius: 10px;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  margin-bottom: 20px;
`;

export const StyledSpan = styled.span`
  display: flex;
  margin-bottom: 10px;
  font-size: 18px;
  // font-weight: 500;
  font-weight: bold;
`;

export const StyledInput = styled.input`
  padding: 5px;
  font-size: 18px;
  font-weight: 400;
  // font-family: italic;
  border-radius: 5px;
  border: 2px solid royalblue;
`;

export const StyledButton = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  padding: 10px;
  width: 200px;
  font-size: 18px;
  font-weight: 400;
  // font-family: italic;
  border-radius: 10px;
  color: white;
  background-color: royalblue;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: navy;
  }
`;
