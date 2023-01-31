import { useNavigate } from "react-router-dom";
import { Box, Stack } from "@mui/material";
// images
import notfound_img from "../assets/images/404.svg";
import { MyBtn } from "../components/styled-components/Button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Stack>
      <Box sx={{ m: "auto", width: { lg: "40%", md: "50%", xs: "80%" } }}>
        <img src={notfound_img} alt="404" />
      </Box>
      <Box sx={{ mt: 8 }}>
        <MyBtn rounded type="primary" uppercase onClick={() => navigate("/")}>
          back
        </MyBtn>
      </Box>
    </Stack>
  );
};

export default NotFound;
