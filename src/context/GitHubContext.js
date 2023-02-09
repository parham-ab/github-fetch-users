import { createContext, useEffect, useState } from "react";
import axios from "axios";
// mock data
import mockRepos from "./mockdata.js/mockRepos";
import { checkRequests } from "../services/checkRequests";
// context
export const GitHubContextProvider = createContext();

const GitHubContext = ({ children }) => {
  const [githubUser, setGithubUser] = useState([]);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState([]);
  const [requestsCount, setRequestsCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: true, msg: "" });
  const BASE_URL = "https://api.github.com";
  useEffect(() => {
    fetchUserInfo("parham-ab");
  }, []);
  useEffect(() => {
    const fetchRequestCount = async () => {
      try {
        const {
          data: {
            resources,
            rate: { remaining },
          },
        } = await axios.get(`${BASE_URL}/rate_limit`);
        if (remaining === 0) {
          toggleError(true, "Sorry, you've exceeded your hourly rate limit!");
          // do something...
        }
        setRequestsCount(remaining);
      } catch (err) {
        console.log(err);
      }
    };
    fetchRequestCount();
  }, []);
  // error
  function toggleError(show, msg) {
    setError({ show, msg });
  }
  // fetch user info
  const fetchUserInfo = async (username) => {
    setIsLoading(true);
    const { data } = await axios
      .get(`${BASE_URL}/users/${username}`)
      .catch((err) => console.log(err));
    if (data) {
      setGithubUser(data);
      const { login, followers_url } = data;

      await Promise.allSettled([
        axios.get(`${BASE_URL}/users/${login}/repos?per_page=100`),
        axios.get(`${followers_url}?per_page=100`),
      ])
        .then((results) => {
          const [repos, followers] = results;
          if ((repos.status = "fulfilled")) {
            setRepos(repos.value.data);
          }
          if ((followers.status = "fulfilled")) {
            setFollowers(followers.value.data);
          }
        })
        .catch((err) => console.log(err));
    } else {
      toggleError(true, "Invalid Username!");
    }
    setIsLoading(false);
  };

  return (
    <GitHubContextProvider.Provider
      value={{
        githubUser,
        repos,
        followers,
        requestsCount,
        error,
        fetchUserInfo,
        isLoading,
      }}
    >
      {children}
    </GitHubContextProvider.Provider>
  );
};

export default GitHubContext;
