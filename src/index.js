import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import CssBaseline from "@material-ui/core/CssBaseline";
import { Container } from "@material-ui/core";

import App from "./components/App";
import Store from "./store";

ReactDOM.render(
  <Provider store={Store}>
    <CssBaseline />
    <Container maxWidth="sm">
      <App />
    </Container>
  </Provider>,
  document.getElementById("root")
);
