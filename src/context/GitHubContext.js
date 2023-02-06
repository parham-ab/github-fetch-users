import { createContext, useEffect, useState } from "react";
import axios from "axios";
// mock data
import mockRepos from "./mockdata.js/mockRepos";
import mockUsers from "./mockdata.js/mockUsers";
import mockFollowers from "./mockdata.js/mockFollowers";
import { checkRequests } from "../services/checkRequests";
// context
export const GitHubContextProvider = createContext();

const GitHubContext = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUsers);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  const [requestsCount, setRequestsCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRequestCount = async () => {
      try {
        const {
          data: {
            resources,
            rate: { remaining },
          },
        } = await axios.get(`https://api.github.com/rate_limit`);
        if (remaining === 0) {
          // do something...
        }
        setRequestsCount(remaining);
      } catch (err) {
        console.log(err);
      }
    };
    fetchRequestCount();
  }, []);

  return (
    <GitHubContextProvider.Provider
      value={{
        githubUser,
        repos,
        followers,
        requestsCount,
      }}
    >
      {children}
    </GitHubContextProvider.Provider>
  );
};

export default GitHubContext;
