import axios from "axios";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Balance from "../components/Balance/Balance";
import Table from "../components/Table/Table";

const Home = ({ authorized }) => {
  const [operations, setOperations] = useState([]);
  const [total, setTotal] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/api/operations', { headers: { Authorization: localStorage.getItem('token') } })
      .then(response => {
        setOperations(response.data);
        setTotal(response.data.reduce((acc, item) => item.type === 'INGRESO' ? acc + parseFloat(item.amount) : acc - parseFloat(item.amount), 0).toFixed(2));
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
            <Balance total={total} />
            <Table operations={operations} />
          </>
      }
    </div>
  );
};

export default Home;