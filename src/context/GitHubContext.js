import { createContext, useState } from "react";
// mock data
import mockRepos from "./mockdata.js/mockRepos";
import mockUsers from "./mockdata.js/mockUsers";
import mockFollowers from "./mockdata.js/mockFollowers";
// context
export const GitHubContextProvider = createContext();

const GitHubContext = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUsers);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);

  return (
    <GitHubContextProvider.Provider
      value={{
        githubUser,
        repos,
        followers,
      }}
    >
      {children}
    </GitHubContextProvider.Provider>
  );
};

export default GitHubContext;
