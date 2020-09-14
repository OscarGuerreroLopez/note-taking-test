import React from "react";
import { ThemeProvider } from "theme-ui";
import { theme } from "./styles";

import Router from "./router";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
