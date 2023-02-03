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
    <div>
      <header>
        <Avatar sx={{ width: 70, height: 70 }} alt={name} src={avatar_url} />
        <Box>
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
            color="text.secondary"
            href={`https://${blog}`}
            target="_blank"
            rel="noreferrer"
          >
            {blog}
          </Typography>
        </Box>
      </header>
    </div>
  );
};

export default Card;
