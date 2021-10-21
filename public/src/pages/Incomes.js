import { Redirect } from "react-router-dom";
import useFetchCategory from "../hooks/useFetchCategory";

import Table from "../components/Table/Table";

const Incomes = ({ authorized }) => {
  const [operations, loading] = useFetchCategory('http://localhost:3000/api/operations/ingreso');

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
            <Table operations={operations} />
          </>
      }
    </div>
  );
};

export default Incomes;
