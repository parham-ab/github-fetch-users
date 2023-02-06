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
    const { language, stargazers_count } = cur;
    if (!language) return prev;
    if (!prev[language]) {
      prev[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      prev[language] = {
        ...prev[language],
        value: prev[language].value + 1,
        stars: prev[language].stars + stargazers_count,
      };
    }
    return prev;
  }, {});
  // most used languages
  const mostUsed = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);
  // most popular languages
  const mostPopular = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars;
    })
    .map((item) => {
      return { ...item, value: item.stars };
    })
    .slice(0, 5);

  return (
    <Grid container justifyContent="center" mt={10}>
      <Grid item xs={12} md={6}>
        <BarChart />
        <Pie3D languages={mostUsed} />
      </Grid>

      <Grid item xs={12} md={6}>
        <Doughnut2D languages={mostPopular} />
        <Column3D />
      </Grid>
    </Grid>
  );
};

export default Repo;
