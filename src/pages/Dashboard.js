import { useContext } from "react";
// mui component
import { Grid } from "@mui/material";
// component
import Card from "../components/Card";
import Followers from "../components/Followers";
import Info from "../components/Info";
import Repo from "../components/Repo";
import Search from "../components/Search";
import Loading from "../components/common/Loading";
// context
import { GitHubContextProvider } from "../context/GitHubContext";

const Dashboard = () => {
  const { isLoading } = useContext(GitHubContextProvider);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Grid container alignItems="center">
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="center"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          my={5}
        >
          <Search />
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="center"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          my={5}
        >
          <Info />
        </Grid>

        <Grid container justifyContent="center" spacing={3}>
          <Grid item xs={12} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} md={8}>
            <Followers />
          </Grid>
        </Grid>
      </Grid>
      <Repo />
    </>
  );
};

export default Dashboard;
