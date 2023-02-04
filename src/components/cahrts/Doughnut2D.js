import { Chart } from "react-google-charts";
// mui components
import { Box } from "@mui/material";

export const data = [
  ["Task", "Hours per aDay"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7], // CSS-style declaration
];

export const options = {
  title: "Stars Per Language",
  pieHole: 0.35,
  is3D: false,
};
const Doughnut2D = () => {
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
        chartType="PieChart"
        width="300px"
        height="200px"
        data={data}
        options={options}
      />
    </Box>
  );
};

export default Doughnut2D;
