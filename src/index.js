import { Container } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Auth0
import { Auth0Provider } from "@auth0/auth0-react";
// react-router-dom
import { BrowserRouter } from "react-router-dom";
// styles
import "./assets/styles/index.scss";
// components
import Layout from "./components/Layout";
import GitHubContext from "./context/GitHubContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocation="localstorage"
  >
    <GitHubContext>
      <Layout>
        <Container maxWidth="lg">
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Container>
      </Layout>
    </GitHubContext>
  </Auth0Provider>
);
