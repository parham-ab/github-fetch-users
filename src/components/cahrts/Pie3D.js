import { Chart } from "react-google-charts";
// mui charts
import { Box } from "@mui/material";

export const options = {
  title: "Languages",
  is3D: true,
};

const Pie3D = ({ languages }) => {
  languages = languages.map((item) => {
    return [item.label, item.value];
  });
  const data = [["Task", "Hours per Day"], ...languages];

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
        data={data}
        options={options}
        width={"300px"}
        height={"200px"}
      />
    </Box>
  );
};

export default Pie3D;
