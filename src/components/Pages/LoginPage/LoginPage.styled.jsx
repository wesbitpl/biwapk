import styled from "styled-components";

export const StyledLoginPage = styled.div`
  width: 100%;
  max-width: 580px;
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
      transition: background 0.3s ease-in-out;
      &:hover {
        background: #00b0ff;
      }
    }
  }
  div {
    width: 100%;
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({ theme }) => theme.color.green};
    padding: 42px;
    color: ${({ theme }) => theme.color.white};
    border-radius: 20px;
    span {
      font-weight: 700;
    }
  }
`;

export const StyledError = styled.span`
  padding: 16px;
  margin-bottom: 16px;
  height: 52px;
  border-radius: 20px;
  font-weight: 700;
  background: ${({ theme }) => theme.color.red};
  color: ${({ theme }) => theme.color.white};
  opacity: ${(props) => (props.loginErr ? "1" : "0")};
  transition: opacity.3s ease-in-out;
`;
