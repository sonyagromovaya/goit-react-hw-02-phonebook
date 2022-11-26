import styled from '@emotion/styled';

export const StyledButton = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  padding: 5px;
  width: 100px;
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

export const StyledSpan1 = styled.span`
  display: flex;
  margin: 10px 0 10px 0;
  padding-left: 5px;
  font-size: 18px;
  font-weight: bold;
  // font-family: italic;
`;
export const StyledSpan2 = styled.span`
  display: flex;
  margin: 10px 0 10px 0;
  // margin-left: 0;
  font-size: 18px;
  // font-weight: bold;
  // font-family: italic;
`;

export const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 7px 0 7px 0;
  :nth-child(2n + 2) {
    background-color: #bcd4e6;
  }
  border-radius: 10px;
`;

export const StyledDiv = styled.div`
  width: 100%;
  margin-right: 15px;
  display: flex;
  justify-content: space-between;
`;
