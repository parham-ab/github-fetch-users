import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options = {
  title: "Languages",
  is3D: true,
};

const Pie3D = () => {
  return (
    <>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"300px"}
        height={"200px"}
      />
    </>
  );
};

export default Pie3D;
