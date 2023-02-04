import { Chart } from "react-google-charts";
// mui charts
import { Box } from "@mui/material";

export const data = [
  ["Element", "Density", { role: "style" }],
  ["Copper", 8.94, "#b87333"], // RGB value
  ["Silver", 10.49, "silver"], // English color name
  ["Gold", 19.3, "gold"],
  ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
];
export const options = {
  title: "Most Forked",
  width: 300,
  height: 200,
  bar: { groupWidth: "85%" },
  legend: { position: "none" },
};
const BarChart = () => {
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
