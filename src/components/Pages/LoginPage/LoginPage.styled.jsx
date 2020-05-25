import styled from "styled-components";
import { theme } from "../../../theme/theme";

export const StyledLoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1,
  h3 {
    margin: 0;
    margin-bottom: 16px;
  }
  p {
    margin: 0;
    margin-bottom: 32px;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    input {
      margin-bottom: 16px;
      padding: 16px;
      border-radius: 20px;
      border: none;
      box-shadow: ${({ theme }) => theme.shadow};
      font-family: "Montserrat", sans-serif;
      color: ${({ theme }) => theme.color.black};
      outline: none;
      font-size: 16px;
    }
    button {
      padding: 16px;
      font-size: 16px;
      font-family: "Montserrat", sans-serif;
      font-weight: 700;
      border-radius: 20px;
      border: none;
      background: ${({ theme }) => theme.color.blue};
      color: ${({ theme }) => theme.color.white};
      box-shadow: ${({ theme }) => theme.shadow};
      outline: none;
    }
  }
  div {
    width: 100%;
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(0, 144, 242, 0.8);
    padding: 42px;
    color: ${({ theme }) => theme.color.white};
    border-radius: 20px;
    span {
      font-weight: 700;
    }
  }
`;
