import styled from "styled-components";

export const StyledApplication = styled.div`
  padding: 20px 15px;
  background: ${({ theme }) => theme.color.white};
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.shadow};
  margin-bottom: 32px;
  width: 100%;
  h2 {
    font-size: 22px;
    margin: 0;
    margin-bottom: 16px;
  }
  p {
    font-size: 18px;
    margin: 0;
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.color.blue};
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
