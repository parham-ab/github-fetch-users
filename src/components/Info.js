import React, { useContext } from "react";
// context
import { GitHubContextProvider } from "../context/GitHubContext";
// mui component
import { Avatar, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
// icons
import { RiGitRepositoryLine, RiUserFollowLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { BsStickies } from "react-icons/bs";

const Info = () => {
  const {
    githubUser: { public_repos, followers, following, public_gists },
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
      value: followers,
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
      {items.map(({ id, icon, label, color, value }) => (
        <React.Fragment key={id}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              background: "#ffffff52",
              width: "200px",
              p: 1,
              m: "3px",
              borderRadius: 3,
              boxShadow:
                "12px 12px 16px 0 rgb(141 141 141 / 25%), -8px -8px 12px 0 rgb(165 165 165 / 30%)",
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
        </React.Fragment>
      ))}
    </>
  );
};

export default Info;
