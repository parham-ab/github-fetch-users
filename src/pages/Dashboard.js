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
      <Grid container alignItems='center'>
        <Grid
          item
          xs={12}
          lg={4}
          md={6}
          display="flex"
          flexDirection="column"
          alignItems="center"
          my={5}
        >
          <Info />
        </Grid>
        <Grid item xs={12} lg={4} md={6}>
          <Card />
        </Grid>
        <Grid item xs={12} lg={4} md={6}>
          <Card />
        </Grid>
      </Grid>
      {/* </Box> */}
      {/* <User />
      <Repo /> */}
    </div>
  );
};

export default Dashboard;
