import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html, body{
    margin:0;
    padding:0;
}
*,*::after, *::before{
    box-sizing: border-box;
}
body{
    background: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.black};
    font-family: "Montserrat", sans-serif;
    text-rendering: optimizeLegibility;
}
`;
