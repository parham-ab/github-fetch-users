// react-router-dom
import { Navigate, Route, Routes } from "react-router-dom";
// components
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Navigate to="/notfound" />} />
    </Routes>
  );
};

export default App;
