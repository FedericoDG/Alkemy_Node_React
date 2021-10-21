import axios from "axios";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

import Table from "../components/Table/Table";

const Expenses = ({ authorized }) => {
  const [operations, setOperations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/api/operations/egreso', { headers: { Authorization: localStorage.getItem('token') } })
      .then(response => {
        setOperations(response.data);
      }).catch(error => {
        console.log(error);
      });
    return () => {
      setLoading(false);
    };
  }, []);

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

export default Expenses;
