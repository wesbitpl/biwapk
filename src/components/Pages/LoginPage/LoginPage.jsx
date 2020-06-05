import React, { useState, useEffect } from "react";
import { StyledLoginPage, StyledError } from "./LoginPage.styled";
import { useHistory } from "react-router-dom";
import CryptoJS from "crypto-js";

export default function LoginPage({ setIsLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginErr, setLoginErr] = useState(false);
  const history = useHistory();
  const hash = CryptoJS.SHA256("demo").toString(CryptoJS.enc.Hex);
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "demo" && password === hash) {
      setLoginErr(false);
      setIsLogin(true);
      const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, "secret passphrase");
      hmac.update(username);
      hmac.update(password);
      const token = hmac.finalize();
      localStorage.setItem("token", token);
      history.replace("/");
    } else {
      setLoginErr(true);
    }
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
        <input id="password" type="password" placeholder="Hasło" onChange={(e) => setPassword(CryptoJS.SHA256(e.target.value).toString(CryptoJS.enc.Hex))} />
        <StyledError loginErr={loginErr}>{loginErr ? "Błędny login lub hasło" : ""}</StyledError>
        <button onClick={(e) => handleLogin(e)}>Zaloguj</button>
      </form>
      <div>
        <span>Login: demo</span>
        <span>Hasło: demo</span>
      </div>
    </StyledLoginPage>
  );
}
