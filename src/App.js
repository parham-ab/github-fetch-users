// react-router-dom
import { Navigate, Route, Routes } from "react-router-dom";
// components
import PrivateRoute from "./components/PrivateRoute";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      {/* <PrivateRoute> */}
        <Route path="/" element={<HomePage />} />
      {/* </PrivateRoute> */}
      <Route path="/notfound" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Navigate to="/notfound" />} />
    </Routes>
  );
};

export default App;
