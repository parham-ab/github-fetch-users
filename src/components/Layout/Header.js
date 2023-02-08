import { Typography } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();

  return (
    <>
      {!isAuthenticated && <button onClick={loginWithRedirect}>Log in</button>}
      {isAuthenticated && (
        <button
          onClick={() => {
            logout({ returnTo: window.location.origin });
          }}
        >
          Log out
        </button>
      )}
    </>
  );
};

export default Header;
