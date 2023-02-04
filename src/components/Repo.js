import { useContext } from "react";
// context
import { GitHubContextProvider } from "../context/GitHubContext";
// charts components
import { ExampleChart, Pie3D, Doughnut2D, Column3D, Bar3D } from "./cahrts";

const Repo = () => {
  const { repos } = useContext(GitHubContextProvider);
  return (
    <div>
      <ExampleChart />
      <Pie3D />
    </div>
  );
};

export default Repo;
