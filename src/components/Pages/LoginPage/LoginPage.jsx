import React, { useState, useEffect } from "react";
import { StyledLoginPage, StyledError } from "./LoginPage.styled";
import axios from "axios";

export default function LoginPage({ setIsLogin, history, setToken, setUser, URL }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginErr, setLoginErr] = useState(false);
  const [logging, setLogging] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "" && password === "") {
      setLoginErr(true);
      return;
    }
    setLogging(true);
    const post = async () => {
      try {
        const response = await axios.post(`${URL}/auth/local`, {
          identifier: username,
          password: password,
        });
        if (response.status === 200) {
          setLoginErr(false);
          setIsLogin(true);
          localStorage.setItem("token", response.data.jwt);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          setToken(response.data.jwt);
          setUser(response.data.user);
          history.replace("/");
        }
      } catch (error) {
        setLoginErr(true);
        setLogging(false);
      }
    };
    post();
  };
  return (
    <StyledLoginPage>
      <h1>Biwapk</h1>
      <p>zarządzanie biwakami harcerskimi</p>
      <h3>Zaloguj się by przejść do panelu </h3>
      <form noValidate autoComplete="off">
        <label htmlFor="username"></label>
        <input id="username" type="text" placeholder="Login" onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="password"></label>
        <input id="password" type="password" placeholder="Hasło" onChange={(e) => setPassword(e.target.value)} />
        <StyledError loginErr={loginErr}>{loginErr ? "Błędny login lub hasło" : ""}</StyledError>
        <button onClick={(e) => handleLogin(e)}>{logging ? "Logowanie..." : "Zaloguj"}</button>
      </form>
      <div>
        <span>Login: demo</span>
        <span>Hasło: password</span>
      </div>
    </StyledLoginPage>
  );
}
