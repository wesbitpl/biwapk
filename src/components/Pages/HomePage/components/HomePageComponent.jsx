import React from "react";
import { StyledHomePageComponent } from "./HomePageComponent.styled";

export default function HomePageComponent() {
  return (
    <StyledHomePageComponent>
      <h2>Panel</h2>
      <p>
        Witaj w panelu użytkownika. Aby przejść do instrukcji obsługi aplikacji{" "}
        <a href="https://github.com/wesbitpl/biwapk" target="_blank" rel="noopener noreferrer">
          kliknij tutaj
        </a>
        .
      </p>
    </StyledHomePageComponent>
  );
}
