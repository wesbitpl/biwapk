import styled from "styled-components";
import link from "../../../assets/images/link-solid.svg";

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
    word-wrap: break-word;
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

export const StyledOverlay = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
  font-weight: 700;
  small {
    font-weight: 400;
    margin-right: 8px;
    font-size: 14px;
  }
  a {
    color: ${({ theme }) => theme.color.blue};
  }
`;
export const StyledStatus = styled(StyledOverlay)`
  h4 {
    display: inline;
    color: ${({ status, theme }) => (status === "Zatwierdzony" ? theme.color.green : theme.color.red)};
  }
`;

export const StyledAttachments = styled(StyledOverlay)`
  flex-direction: column;
  align-items: flex-start;
  ul {
    list-style: none;
    li {
      padding: 8px 0;
      a {
        position: relative;
        display: flex;
        &::before {
          position: relative;
          content: url(${link});
          width: 16px;
          height: 18px;
          margin-right: 8px;
        }
      }
    }
  }
`;

export const StyledAddDate = styled(StyledOverlay)`
  font-size: 14px;
`;
