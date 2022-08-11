import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

// Views
import Dashboard from "./views/screens/Dashboad";
import { GlobalStyle } from "./utils/theme/global-style";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/:id" />
            <Route path="/locations" />
            <Route path="/locations/:id" />
            <Route path="/episodes" />
            <Route path="/episodes/:id" />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
