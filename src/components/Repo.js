import { useContext } from "react";
// context
import { GitHubContextProvider } from "../context/GitHubContext";
// charts components
import { BarChart, Pie3D, Doughnut2D, Column3D } from "./cahrts";
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
  // stars & forks
  let { stars, forks } = repos.reduce(
    (prev, curr) => {
      const { stargazers_count, name, forks } = curr;
      prev.stars[stargazers_count] = { label: name, value: stargazers_count };
      prev.forks[forks] = { label: name, value: forks };
      return prev;
    },
    {
      stars: {},
      forks: {},
    }
  );
  stars = Object.values(stars).slice(-5).reverse();
  forks = Object.values(forks).slice(-5).reverse();

  return (
    <Grid container justifyContent="center" mt={10}>
      <Grid item xs={12} md={6}>
        <BarChart forks={forks} />
        <Pie3D languages={mostUsed} />
      </Grid>

      <Grid item xs={12} md={6}>
        <Doughnut2D languages={mostPopular} />
        <Column3D stars={stars} />
      </Grid>
    </Grid>
  );
};

export default Repo;
