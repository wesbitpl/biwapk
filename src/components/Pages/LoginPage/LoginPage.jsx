import React, { useState, useEffect } from "react";
import { StyledLoginPage, StyledError } from "./LoginPage.styled";
import axios from "axios";
// import { useHistory } from "react-router-dom";
import CryptoJS from "crypto-js";

export default function LoginPage({ setIsLogin, history, setToken, setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginErr, setLoginErr] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const post = async () => {
      try {
        const response = await axios.post("/auth/local", {
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
      }
    };
    post();
    // if (username === "demo" && password === hash) {
    //   setLoginErr(false);
    //   setIsLogin(true);
    //   const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, "secret passphrase");
    //   hmac.update(username);
    //   hmac.update(password);
    //   const token = hmac.finalize();
    //   localStorage.setItem("token", token);
    //   // history.replace("/");
    // } else {
    //   setLoginErr(true);
    // }
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
        <button onClick={(e) => handleLogin(e)}>Zaloguj</button>
      </form>
      <div>
        <span>Login: demo</span>
        <span>Hasło: password</span>
      </div>
    </StyledLoginPage>
  );
}
