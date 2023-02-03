import React, { useContext } from "react";
// context
import { GitHubContextProvider } from "../context/GitHubContext";
// mui component
import { Avatar, Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
// icons
import { RiGitRepositoryLine, RiUserFollowLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { BsStickies } from "react-icons/bs";

const Info = () => {
  const {
    githubUser: { public_repos, follower, following, public_gists },
  } = useContext(GitHubContextProvider);

  const items = [
    {
      id: 1,
      icon: <RiGitRepositoryLine />,
      label: "repos",
      value: public_repos,
      color: "#006e1878",
    },
    {
      id: 2,
      icon: <FiUsers />,
      label: "followers",
      value: follower,
      color: "#e7800178",
    },
    {
      id: 3,
      icon: <RiUserFollowLine />,
      label: "following",
      value: following,
      color: "#0008ff78",
    },
    {
      id: 4,
      icon: <BsStickies />,
      label: "gists",
      value: public_gists,
      color: "#ff000078",
    },
  ];

  return (
    <>
      <Grid container>
        {items.map(({ id, icon, label, color, value }) => (
          <React.Fragment key={id}>
            <Grid item xs={12} md={3} display="flex">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                  background: "#ffffff52",
                  width: "200px",
                  p: 1,
                  borderRadius: 3,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <Avatar sx={{ width: 36, height: 36, background: color }}>
                  {icon}
                </Avatar>
                <Stack alignItems="flex-end">
                  <Typography
                    variant="subtitle1"
                    component="h5"
                    fontWeight={"bold"}
                  >
                    {value}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {label}
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </>
  );
};

export default Info;
