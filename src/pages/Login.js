import { Box } from "@mui/system";
// images
import login_img from "../assets/images/Login.svg";
// Auth0
import { useAuth0 } from "@auth0/auth0-react";
// custom button
import { MyBtn } from "../components/styled-components/Button";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      sx={{
        minHeight: "100vh",
      }}
    >
      <Box sx={{ m: "auto", width: { lg: "40%", md: "50%", xs: "80%" } }}>
        <img src={login_img} alt="login" />
      </Box>
      <MyBtn autoMargin type="primary" size="40" onClick={loginWithRedirect}>
        Login
      </MyBtn>
    </Box>
  );
};

export default Login;
