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
  let languages = repos.reduce((prev, cur) => {
    const { language } = cur;
    if (!language) return prev;
    if (!prev[language]) {
      prev[language] = { label: language, value: 1 };
    } else {
      prev[language] = { ...prev[language], value: prev[language].value + 1 };
    }
    return prev;
  }, {});
  languages = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  return (
    <Grid container justifyContent="center" mt={10}>
      <Grid item xs={12} md={6}>
        <BarChart />
        <Pie3D languages={languages} />
      </Grid>

      <Grid item xs={12} md={6}>
        <Doughnut2D />
        <Column3D />
      </Grid>
    </Grid>
  );
};

export default Repo;
