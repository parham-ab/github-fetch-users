import React, { useContext, Fragment } from "react";
// mui components
import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
// context
import { GitHubContextProvider } from "../context/GitHubContext";

const Followers = () => {
  const { followers } = useContext(GitHubContextProvider);

  return (
    <>
      <Box
        sx={{
          background: "#a7a7a752",
          backdropFilter: "blur(10px)",
          borderRadius: "40px",
          padding: "15px",
          boxShadow:
            "6px 6px 14px 0 rgba(0, 0, 0, 0.2), -8px -8px 18px 0 rgba(255, 255, 255, 0.55)",
          overflow: "auto",
          maxHeight: "230px",
        }}
      >
        {followers.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                py={1}
                sx={{ borderBottom: "solid 1px #d1d1d1" }}
              >
                <Avatar
                  sx={{ width: 40, height: 40 }}
                  alt={item.login}
                  src={item.avatar_url}
                />
                <Typography
                  variant="body1"
                  component="a"
                  fontWeight={"bold"}
                  color="text.secondary"
                  href={`https://${item.html_url}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.login}
                </Typography>
              </Box>
            </React.Fragment>
          );
        })}
      </Box>
    </>
  );
};

export default Followers;
