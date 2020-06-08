import styled from "styled-components";

export const StyledApplicationsPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const StyledButton = styled.button`
  padding: 20px;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  border-radius: 20px;
  border: none;
  background: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow};
  outline: none;
  cursor: pointer;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
  &:hover {
    background: #00b0ff;
  }
  &:disabled {
    color: #cccccc;
    background: #3b78a4;
  }
`;
