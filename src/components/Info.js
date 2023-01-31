import { useContext } from "react";
// context
import { GitHubContextProvider } from "../context/GitHubContext";

const Info = () => {
  const data = useContext(GitHubContextProvider);
  console.log(data)
  return <div></div>;
};

export default Info;
