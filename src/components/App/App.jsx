import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../theme/global.jsx";
import { theme } from "../../theme/theme.jsx";
import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <h1>Biwapp</h1>
        </div>
        <div>
          <Burger open={open} setOpen={setOpen}></Burger>
          <Menu open={open} setOpen={setOpen}></Menu>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
