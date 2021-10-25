import { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import UserContext from '../context/Contex';
import useFetchCategory from "../hooks/useFetchCategory";

import Table from "../components/Table/Table";
import Welcome from "../components/Welcome.js/Welcome";

const Category = () => {
  const { cat } = useParams();

  const [operations, loading, setAuxFetch] = useFetchCategory(`http://localhost:3000/api/category/${cat}`);

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
            <Table operations={operations} setAuxFetch={setAuxFetch} />
          </>
      }
    </div>
  );
};

export default Category;