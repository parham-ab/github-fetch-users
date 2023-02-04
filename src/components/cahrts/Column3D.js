import { Chart } from "react-google-charts";
// mui components
import { Box } from "@mui/material";
export const data = [
  ["Repos", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
];

export const options = {
  chart: {
    title: "Most Popular",
  },
};

const Column3D = () => {
  return (
    <Box
      sx={{
        background: "#fff",
        backdropFilter: "blur(10px)",
        borderRadius: "40px",
        padding: "15px",
        boxShadow: "10px 20px 60px #bebebe, -10px -20px 60px #ffffff",
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
