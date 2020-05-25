import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../theme/global.jsx";
import { theme } from "../../theme/theme.jsx";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { StyledApp } from "./App.styled";
import Header from "../Header/Header";
import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
function App() {
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <StyledApp>
            <Header open={open} setOpen={setOpen} isLogin={isLogin} />
            <Menu open={open} setOpen={setOpen}></Menu>
            <main style={{ marginTop: "32px" }}>
              <Switch>
                <Route exact path="/">
                  {!isLogin ? <Redirect to="/login" /> : <HomePage />}
                </Route>
                <Route exact path="/login">
                  <LoginPage setIsLogin={setIsLogin} />
                </Route>
              </Switch>
            </main>
          </StyledApp>
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;
