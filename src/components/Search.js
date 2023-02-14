import { useContext, useState } from "react";
// context
import { GitHubContextProvider } from "../context/GitHubContext";
// custom styled components
import { MyBtn } from "./styled-components/Button";

const Search = () => {
  const [username, setUsername] = useState("");
  const { requestsCount, error, fetchUserInfo } = useContext(
    GitHubContextProvider
  );
  // submit
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUserInfo(username);
  };

  return (
    <div className="search-container">
      {/* -----display error-----  */}
      {error.show && <p>{error.msg}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type a username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {username.trim() && requestsCount > 0 && (
          <MyBtn type="submit" variant="primary" onClick={handleSubmit}>
            submit
          </MyBtn>
        )}
      </form>
    </div>
  );
};

export default Search;
