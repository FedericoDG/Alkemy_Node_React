import { useHistory } from "react-router-dom";
import Balance from "../components/Balance/Balance";
import Form from "../components/Form/Form";
import Table from "../components/Table/Table";
import Welcome from "../components/Welcome.js/Welcome";

import useFetchAll from "../hooks/useFetchAll";

const Home = ({ authorized }) => {
  const [operations, total, loading, setAuxFetch] = useFetchAll();

  let history = useHistory();

  if (!authorized) {
    history.push("/login");
  }

  return (
    <div>
      <Welcome />
      {
        loading ?
          <p>CARGANDO...</p>
          :
          <>
            <Balance total={total} />
            <Form setAuxFetch={setAuxFetch} />
            <Table operations={operations} setAuxFetch={setAuxFetch} home={true} />
          </>
      }
    </div>
  );
};

export default Home;