import styled from "styled-components";
export const StyledHeader = styled.header`
  /* position: sticky;
  top: 0; */
  display: grid;
  grid-template: "logo . face burger" 50px / 62.5px 1fr 50px 50px;
  column-gap: 16px;
  width: 100%;
  z-index: 10;

  button {
    grid-area: burger;
  }
`;

export const StyledFace = styled.div`
  grid-area: face;
  position: relative;
  cursor: pointer;
`;

export const StyledProfile = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  padding: 16px;
  width: 60vw;
  /* height: 100px; */
  background: white;
  z-index: 10;
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.shadow};
  display: flex;
  flex-direction: column;
  button {
    padding: 16px;
    border: 0;
    border-radius: 20px;
    background: ${({ theme }) => theme.color.red};
    color: ${({ theme }) => theme.color.white};
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
  }
`;
