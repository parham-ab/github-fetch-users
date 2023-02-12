// react-router-dom
import { Navigate, Route, Routes } from "react-router-dom";
// Auth0
import { useAuth0 } from "@auth0/auth0-react";
// components
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Dashboard /> : <Login />} />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="/*" element={<Navigate to="/notfound" />} />
    </Routes>
  );
};

export default App;
