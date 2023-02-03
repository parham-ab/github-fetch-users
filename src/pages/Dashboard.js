// component
import { Info, Repo, Search, User, Card } from "../components";

const Dashboard = () => {
  return (
    <div>
      <Search />
      <Info />
      <Card />
      <User />
      <Repo />
    </div>
  );
};

export default Dashboard;
