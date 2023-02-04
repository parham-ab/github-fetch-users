import { useContext } from "react";
// mui components
import { Box } from "@mui/system";
// context
import { GitHubContextProvider } from "../context/GitHubContext";
// charts components
import { BarChart, Pie3D, Doughnut2D, Column3D, Bar3D } from "./cahrts";
import { Grid } from "@mui/material";

const Repo = () => {
  const { repos } = useContext(GitHubContextProvider);

  return (
    <Grid container  justifyContent="center" mt={10}>
      <Grid item xs={12} md={6}>
        <BarChart />
        <Pie3D />
      </Grid>

      <Grid item xs={12} md={6}>
        <Doughnut2D />
        <Column3D />
      </Grid>
    </Grid>
  );
};

export default Repo;
