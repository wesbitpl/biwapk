import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../theme/global.jsx";
import { theme } from "../../theme/theme.jsx";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import history from "../../utils/history/history";
import { StyledApp } from "./App.styled";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import ApplicationPage from "../Pages/ApplicationPage/ApplicationPage";
import { checkIsLogin } from "../../utils/login/checkIsLogin";
import { url } from "../../utils/url";
function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [URL, setURL] = useState(url());
  useEffect(() => {
    if (checkIsLogin()) {
      setIsLogin(true);
      setToken(localStorage.getItem("token"));
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);
  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <StyledApp>
            <Header open={open} setOpen={setOpen} isLogin={isLogin} setIsLogin={setIsLogin} user={user} />
            <Menu open={open} setOpen={setOpen}></Menu>
            <main style={{ marginTop: "32px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Switch>
                <Route exact path="/">
                  {!isLogin ? <Redirect to="/login" /> : <HomePage token={token} URL={URL} />}
                </Route>
                <Route path="/login">{isLogin ? <Redirect to="/" /> : <LoginPage setIsLogin={setIsLogin} history={history} setToken={setToken} setUser={setUser} URL={URL} />}</Route>
                <Route path="/applications/:id">
                  <ApplicationPage token={token} URL={URL} />
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
