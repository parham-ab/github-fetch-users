import { Chart } from "react-google-charts";
// mui components
import { Box } from "@mui/material";

export const options = {
  chart: {
    title: "Most Popular",
  },
};

const Column3D = ({ stars }) => {
  stars = stars.map((item) => {
    return [item.label, item.value];
  });
  const data = [["", ""], ...stars];

  return (
    <Box
      className="chartContainer"
      sx={{
        background: "#fff",
        backdropFilter: "blur(10px)",
        borderRadius: "40px",
        padding: "15px",
        height: "270px",
        boxShadow: "10px 20px 60px #bebebe, -10px -20px 60px #ffffff",
        m: 2,
      }}
    >
      <Chart
        chartType="Bar"
        width="300px"
        height="200px"
        data={data}
        options={options}
      />
    </Box>
  );
};

export default Column3D;
