import { Navigate, Route } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const isAuthenticate = true;

  return (
    <Route
      {...rest}
      render={() => {
        return isAuthenticate ? (
          children
        ) : (
          <Navigate element={<Navigate to="/login" />} />
        );
      }}
    ></Route>
  );
};

export default PrivateRoute;
