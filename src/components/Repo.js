import { useContext } from "react";
// context
import { GitHubContextProvider } from "../context/GitHubContext";
// charts components
import { BarChart, Pie3D, Doughnut2D, Column3D, Bar3D } from "./cahrts";

const Repo = () => {
  const { repos } = useContext(GitHubContextProvider);
  return (
    <div>
      <BarChart />
      <Pie3D />
      <Doughnut2D />
      <div>
        <Column3D />
      </div>
    </div>
  );
};

export default Repo;
