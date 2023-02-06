import { useState } from "react";
// custom styled components
import { MyBtn } from "./styled-components/Button";

const Search = () => {
  const [username, setUsername] = useState("");
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
        <MyBtn type="submit" variant="primary">
          submit
        </MyBtn>
      </form>
    </div>
  );
};

export default Search;