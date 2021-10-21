import { Redirect } from "react-router-dom";
import Balance from "../components/Balance/Balance";
import Table from "../components/Table/Table";

import useFetchAll from "../hooks/useFetchAll";

const Home = ({ authorized }) => {
  const [operations, total, loading] = useFetchAll();

  if (!authorized) {
    return <Redirect to='/login' />;
  }

  return (
    <div>
      {
        !loading ?
          <p>CARGANDO...</p>
          :
          <>
            <Balance total={total} />
            <Table operations={operations} />
          </>
      }
    </div>
  );
};

export default Home;