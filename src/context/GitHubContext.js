import { createContext, useEffect, useState } from "react";
import axios from "axios";
// toast
import toast, { Toaster } from "react-hot-toast";
// context
export const GitHubContextProvider = createContext();
// error toast
const notify = (errMsg) => toast.error(errMsg);

const GitHubContext = ({ children }) => {
  const [githubUser, setGithubUser] = useState([]);
  const [repos, setRepos] = useState([]);
  const [testVal, setTestVal] = useState(false);
  const [followers, setFollowers] = useState([]);
  const [requestsCount, setRequestsCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(true);
  const BASE_URL = "https://api.github.com";

  useEffect(() => {
    const fetchRequestCount = async () => {
      try {
        const {
          data: {
            rate: { remaining },
          },
        } = await axios.get(`${BASE_URL}/rate_limit`);
        if (remaining === 0) {
          toggleError(true);
          notify("Sorry, you've exceeded your hourly rate limit!");
        }
        setRequestsCount(remaining);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserInfo("parham-ab");
    fetchRequestCount();
    // this state change is to render last data of the repos in the google-charts
    setTestVal(!testVal);
  }, []);
  // error
  function toggleError(status) {
    setError(status);
  }
  // fetch user info
  const fetchUserInfo = async (username) => {
    setIsLoading(true);
    const { data } = await axios
      .get(`${BASE_URL}/users/${username}`)
      .catch((err) => {
        setIsLoading(false);
        notify("Invalid Username!");
      });
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
            // this state change is to render last data of the repos in the google-charts
            setTestVal(!testVal);
          }
          if ((followers.status = "fulfilled")) {
            setFollowers(followers.value.data);
          }
        })
        .catch((err) => {
          setIsLoading(false);
          notify("Something went wrong!");
        });
    } else {
      toggleError(true);
      notify("Invalid Username!");
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
      <Toaster />
    </GitHubContextProvider.Provider>
  );
};

export default GitHubContext;
