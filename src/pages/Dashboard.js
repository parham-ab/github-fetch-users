// component
import { Info, Repo, Search, User } from "../components";

const Dashboard = () => {
  return (
    <div>
      <Search />
      <Info />
      <User />
      <Repo />
    </div>
  );
};

export default Dashboard;
