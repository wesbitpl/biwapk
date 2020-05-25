import React, { useState } from "react";
import { StyledLoginPage } from "./LoginPage.styled";
import { useHistory } from "react-router-dom";

export default function LoginPage({ setIsLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "demo" && password === "demo") {
      setIsLogin(true);
      history.replace("/");
    }
  };
  return (
    <StyledLoginPage>
      <h1>Biwapk</h1>
      <p>zarządzanie biwakami harcerskimi</p>
      <h3>Zaloguj się by przejść do panelu</h3>
      <form noValidate autoComplete="off">
        <input id="username" type="text" placeholder="Login" onChange={(e) => setUsername(e.target.value)} />
        <input id="password" type="password" placeholder="Hasło" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={(e) => handleLogin(e)}>Zaloguj</button>
      </form>
      <div>
        <span>Login: demo</span>
        <span>Hasło: demo</span>
      </div>
    </StyledLoginPage>
  );
}
