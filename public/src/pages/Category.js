import { Redirect, useParams } from "react-router-dom";
import useFetchCategory from "../hooks/useFetchCategory";

import Table from "../components/Table/Table";
import Welcome from "../components/Welcome.js/Welcome";

const Category = ({ authorized }) => {
  const { cat } = useParams();
  console.log(cat);
  const [operations, loading, setAuxFetch] = useFetchCategory(`http://localhost:3000/api/category/${cat}`);

  if (!authorized) {
    return <Redirect to='/login' />;
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