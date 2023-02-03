import { useContext } from "react";
// context
import { GitHubContextProvider } from "../context/GitHubContext";
// mui components
import { Box } from "@mui/system";
import { Avatar, Grid, Typography } from "@mui/material";
// styled components
import { MyBtn } from "./styled-components/Button";
// react-icons
import { FaBuilding } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { BiLinkAlt } from "react-icons/bi";

const Card = () => {
  const {
    githubUser: {
      name,
      company,
      blog,
      bio,
      location,
      twitter_username,
      avatar_url,
      html_url,
    },
  } = useContext(GitHubContextProvider);

  return (
    <Grid container>
      <Grid item>
        <Box
          sx={{
            background: "#a7a7a752",
            backdropFilter: "blur(10px)",
            borderRadius: "40px",
            padding: "15px",
            boxShadow:
              "12px 12px 16px 0 rgba(0, 0, 0, 0.25), -8px -8px 12px 0 rgba(255, 255, 255, 0.3)",
          }}
        >
          <header>
            <Box display="flex" alignItems="center">
              <Avatar
                sx={{ width: 70, height: 70 }}
                alt={name}
                src={avatar_url}
              />
              <Box px={2}>
                <Typography variant="body1" component="h1" fontWeight={"bold"}>
                  {name}
                </Typography>
                {twitter_username && (
                  <Typography
                    variant="subtitle1"
                    component="h5"
                    fontWeight={"bold"}
                    color="text.secondary"
                  >
                    @{twitter_username}
                  </Typography>
                )}
              <MyBtn
                variant="outlined"
                as="a"
                href={html_url}
                target="_blank"
                rel="noreferrer"
              >
                Follow
              </MyBtn>
              </Box>
            </Box>

            <Box mt={3}>
              <Typography
                variant="subtitle2"
                component="h5"
                fontWeight={"bold"}
                color="text.secondary"
              >
                {bio}
              </Typography>

              <Box display="flex" alignItems="center">
                <FaBuilding color="#00000099" />
                <Typography
                  variant="subtitle2"
                  component="h5"
                  fontWeight={"bold"}
                  color="text.secondary"
                >
                  {company}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <IoLocation color="#00000099" />
                <Typography
                  variant="subtitle2"
                  component="h5"
                  fontWeight={"bold"}
                  color="text.secondary"
                >
                  {location}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <BiLinkAlt color="#00000099" />
                <Typography
                  variant="subtitle2"
                  component="a"
                  fontWeight={"bold"}
                  color="primary"
                  href={`https://${blog}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {blog}
                </Typography>
              </Box>
            </Box>
          </header>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Card;
