import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.color.white};
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  padding: 100px 16px;
  box-shadow: ${({ theme }) => theme.shadow};
  transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(110%);")};
  transition: transform 0.2s ease-in-out;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 20px;
  width: 50px;
  height: 50px;
  margin-bottom: 16px;
  svg {
    width: 25px;
  }
  &.active {
    background: ${({ theme }) => theme.color.blue};
    svg {
      * {
        fill: ${({ theme }) => theme.color.white};
        stroke: ${({ theme }) => theme.color.white};
      }
    }
  }
`;
