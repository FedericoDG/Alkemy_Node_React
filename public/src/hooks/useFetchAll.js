import { useEffect, useState } from "react";
import axios from "axios";

const useFetchAll = () => {
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
  return [operations, total, loading];
};

export default useFetchAll;
