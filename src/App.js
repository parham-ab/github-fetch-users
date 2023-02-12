// react-router-dom
import { Navigate, Route, Routes } from "react-router-dom";
// components
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Navigate to="/notfound" />} />
    </Routes>
  );
};

export default App;
