import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledApplicationList = styled.div`
  padding: 20px 15px;
  background: ${({ theme }) => theme.color.white};
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.shadow};
  margin-bottom: 32px;
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
  ul {
    list-style: none;
    width: 100%;
    li {
      padding: 10px 0;
      display: grid;
      grid-template-columns: [name] auto [status] 25px [arrow] 30px;
      column-gap: 32px;
      align-items: center;
    }
  }
`;
export const StyledName = styled.span`
  grid-area: name;
`;

export const StyledStatus = styled.span`
  grid-area: status;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${({ status, theme }) => (status === "Zatwierdzony" ? theme.color.green : theme.color.red)};
`;
export const StyledArrow = styled(Link)`
  grid-area: arrow;
  width: 30px;
  height: 30px;
`;
