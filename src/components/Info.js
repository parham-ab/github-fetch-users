import { useContext } from "react";
// context
import { GitHubContextProvider } from "../context/GitHubContext";

const Info = () => {
  const {
    githubUser: { public_repos, follower, following, public_gists },
  } = useContext(GitHubContextProvider);

  const items = [
    {
      id: 1,
      icon: "icon_1",
      label: "repos",
      value: public_repos,
      color: "pink",
    },
    {
      id: 2,
      icon: "icon_2",
      label: "followers",
      value: follower,
      color: "green",
    },
    {
      id: 3,
      icon: "icon_3",
      label: "following",
      value: following,
      color: "blue",
    },
    {
      id: 4,
      icon: "icon_4",
      label: "gists",
      value: public_gists,
      color: "yellow",
    },
  ];

  return (
    <div>
      {items.map(({ id, icon, label, color, value }) => (
        <section key={id}>
        
          <span>{icon}</span>
          <div>
            <h3>{value}</h3>
            <p>{label}</p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Info;
