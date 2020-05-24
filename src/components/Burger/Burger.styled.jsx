import styled from "styled-components";

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.color.white};
  border: none;
  cursor: pointer;
  padding: 12px;
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.shadow};
  &:focus {
    outline: none;
  }

  div {
    width: 25px;
    height: 4px;
    background: ${({ theme }) => theme.color.blue};
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;
