import React from "react";
import { StyledHomePage } from "./HomePage.styled";
import HomePageComponent from "./components/HomePageComponent";

function HomePage() {
  return (
    <StyledHomePage>
      <HomePageComponent />
    </StyledHomePage>
  );
}

export default HomePage;
