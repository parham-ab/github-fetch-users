import { useContext, useState } from "react";
// context
import { GitHubContextProvider } from "../context/GitHubContext";
// custom styled components
import { MyBtn } from "./styled-components/Button";

const Search = () => {
  const [username, setUsername] = useState("");
  const { requestsCount } = useContext(GitHubContextProvider);
  console.log(requestsCount);
  // submit
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type a username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {requestsCount > 0 && (
          <MyBtn type="submit" variant="primary">
            submit
          </MyBtn>
        )}
        <h4>{requestsCount} / 60</h4>
      </form>
    </div>
  );
};

export default Search;
