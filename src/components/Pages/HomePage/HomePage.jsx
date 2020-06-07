import React from "react";
import { StyledHomePage } from "./HomePage.styled";
import HomePageComponent from "./components/HomePageComponent";
import ApplicationsList from "../../Applications/ApplicationsList";

function HomePage({ token }) {
  return (
    <StyledHomePage>
      <HomePageComponent />
      <ApplicationsList token={token} />
    </StyledHomePage>
  );
}

export default HomePage;
