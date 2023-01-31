import { createContext } from "react";
export const GitHubContextProvider = createContext();

const GitHubContext = ({ children }) => {
  return (
    <GitHubContextProvider.Provider>{children}</GitHubContextProvider.Provider>
  );
};

export default GitHubContext;
