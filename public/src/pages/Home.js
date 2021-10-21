import { Redirect } from "react-router-dom";

const Home = ({ authorized }) => {
  if (!authorized) {
    return <Redirect to='/login' />;
  }
  return (
    <div>
      home
    </div>
  );
};

export default Home;
