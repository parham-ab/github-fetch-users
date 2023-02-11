// mui components
import { Typography, Avatar, Box } from "@mui/material";
// react-icons
import { MdOutlineLogout } from "react-icons/md";
// Auth0
import { useAuth0 } from "@auth0/auth0-react";
import { MyBtn } from "../styled-components/Button";

const Header = () => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();

  return (
    <>
      {!isAuthenticated && <button onClick={loginWithRedirect}>login</button>}
      {user && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection={{ xs: "column", sm: "row" }}
          sx={{
            background: "#e6efff",
            padding: "10px",
          }}
        >
          <Avatar
            alt={user.name}
            src={user.picture}
            sx={{
              width: "35px",
              height: "35px",
            }}
          />
          <Box display="flex" pl={1}>
            <Typography variant="body2">Welcome,</Typography>
            <Typography variant="body2" fontWeight="bold">
              &nbsp;{user.name}
            </Typography>
          </Box>

          {isAuthenticated && !isLoading && (
            <MdOutlineLogout
              style={{
                fontSize: "20",
                color: "#cb0000",
                cursor: "pointer",
                ml: "6px",
              }}
            />
          )}
        </Box>
      )}
    </>
  );
};

export default Header;
