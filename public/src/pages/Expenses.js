import { useHistory } from "react-router-dom";
import useFetchCategory from "../hooks/useFetchCategory";

import Table from "../components/Table/Table";
import Welcome from "../components/Welcome.js/Welcome";

const Expenses = ({ authorized }) => {
  const [operations, loading, setAuxFetch] = useFetchCategory('http://localhost:3000/api/operations/egreso');

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
            <Table operations={operations} setAuxFetch={setAuxFetch} />
          </>
      }
    </div>
  );
};

export default Expenses;
