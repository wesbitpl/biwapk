import styled from "styled-components";
export const StyledHeader = styled.header`
  /* position: sticky;
  top: 0; */
  display: grid;
  grid-template: "logo . face burger" 50px / 62.5px 1fr 50px 50px;
  column-gap: 16px;
  width: 100%;
  z-index: 10;
  div.face {
    grid-area: face;
  }
  button {
    grid-area: burger;
  }
`;
