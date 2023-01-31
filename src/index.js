import { Container } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// react-router-dom
import { BrowserRouter } from "react-router-dom";
// styles
import "./assets/styles/index.scss";
// components
import Layout from "./components/Layout";
import GitHubContext from "./context/GitHubContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GitHubContext>
      <Layout>
        <Container maxWidth="lg">
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Container>
      </Layout>
    </GitHubContext>
  </React.StrictMode>
);
