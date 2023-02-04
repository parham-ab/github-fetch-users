// mui component
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
// component
import Card from "../components/Card";
import Info from "../components/Info";
// import { Info, Repo, Search, User, Card } from "../components";

const Dashboard = () => {
  return (
    <div>
      {/* <Search /> */}
      {/* <Box
      // display="flex"
      // justifyContent="space-between"
      // alignItems="center"
      > */}
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
          <Info />
        </Grid>

        <Grid container justifyContent="center" spacing={3}>
          <Grid item xs={12} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} md={8}>
            <Card />
          </Grid>
        </Grid>
      </Grid>
      {/* </Box> */}
      {/* <User />
      <Repo /> */}
    </div>
  );
};

export default Dashboard;
