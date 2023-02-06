import { Chart } from "react-google-charts";
// mui charts
import { Box } from "@mui/material";

export const options = {
  title: "Most Forked",
  width: 300,
  height: 200,
  bar: { groupWidth: "85%" },
  legend: { position: "none" },
};
const BarChart = ({ forks }) => {
  forks = forks.map((item) => {
    return [item.label, item.value];
  });
  const data = [["Element", "Density"], ...forks];

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
        chartType="BarChart"
        width="300px"
        height="200px"
        data={data}
        options={options}
      />
    </Box>
  );
};

export default BarChart;
