import { Chart } from "react-google-charts";
// mui components
import { Box } from "@mui/material";

export const options = {
  title: "Stars Per Language",
  pieHole: 0.35,
  is3D: false,
};
const Doughnut2D = ({ languages }) => {
  languages = languages.map((item) => {
    return [item.label, item.value];
  });
  const data = [["Task", "Hours per aDay"], ...languages];

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
