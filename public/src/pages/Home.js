import { useHistory } from "react-router-dom";
import UserContext from '../context/Contex';
import Balance from "../components/Balance/Balance";
import Form from "../components/Form/Form";
import Table from "../components/Table/Table";
import Welcome from "../components/Welcome.js/Welcome";

import useFetchAll from "../hooks/useFetchAll";
import { useContext } from "react";

const Home = () => {
  const [operations, total, loading, setAuxFetch] = useFetchAll();
  const { authorized } = useContext(UserContext);
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