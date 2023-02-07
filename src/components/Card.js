import { useContext } from "react";
// context
import { GitHubContextProvider } from "../context/GitHubContext";
// mui components
import { Box } from "@mui/system";
import { Avatar, Typography } from "@mui/material";
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
    <Box
      sx={{
        background: "#a7a7a752",
        backdropFilter: "blur(10px)",
        borderRadius: "40px",
        padding: "15px",
        boxShadow:
          "6px 6px 14px 0 rgba(0, 0, 0, 0.2), -8px -8px 18px 0 rgba(255, 255, 255, 0.55)",
      }}
    >
      <header>
        <Box display="flex" alignItems="center">
          <Avatar sx={{ width: 62, height: 62 }} alt={name} src={avatar_url} />
          <Box px={2}>
            <Box lineHeight={"1px"}>
              <Typography variant="body1" component="h1" fontWeight={"bold"}>
                {name}
              </Typography>
              {twitter_username && (
                <Typography
                  variant="caption"
                  component="h5"
                  fontWeight={"bold"}
                  color="text.secondary"
                >
                  @{twitter_username}
                </Typography>
              )}
            </Box>
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
          {bio && (
            <Typography
              variant="subtitle2"
              component="h5"
              fontWeight={"bold"}
              color="text.secondary"
              noWrap
            >
              {bio}
            </Typography>
          )}

          {company && (
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
          )}
          {location && (
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
          )}

          {blog && (
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
                noWrap
              >
                {blog}
              </Typography>
            </Box>
          )}
        </Box>
      </header>
    </Box>
  );
};

export default Card;
