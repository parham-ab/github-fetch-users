import { Box } from "@mui/system";
// images
import login_img from "../assets/images/Login.svg";
// custom button
import { MyBtn } from "../components/styled-components/Button";

const Login = () => {
  return (
    <>
      <h1>GitHub User</h1>
      <Box sx={{ m: "auto", width: { lg: "40%", md: "50%", xs: "80%" } }}>
        <img src={login_img} alt="login" />
      </Box>
      <MyBtn autoMargin type="primary" size="40">
        Login
      </MyBtn>
    </>
  );
};

export default Login;
