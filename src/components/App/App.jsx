import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../theme/global.jsx";
import { theme } from "../../theme/theme.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { StyledApp } from "./App.styled";
import Header from "../Header/Header";
import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <StyledApp>
            <Header open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen}></Menu>
          </StyledApp>
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;
