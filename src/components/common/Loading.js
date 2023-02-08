import { Box } from "@mui/material";

const Loading = () => {
  return (
    <Box display="flex" minHeight={"100vh"}>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </Box>
  );
};

export default Loading;
