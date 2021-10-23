import { useHistory, useParams } from "react-router-dom";
import useFetchCategory from "../hooks/useFetchCategory";

import Table from "../components/Table/Table";
import Welcome from "../components/Welcome.js/Welcome";

const Category = ({ authorized }) => {
  const { cat } = useParams();

  const [operations, loading, setAuxFetch] = useFetchCategory(`http://localhost:3000/api/category/${cat}`);

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

export default Category;