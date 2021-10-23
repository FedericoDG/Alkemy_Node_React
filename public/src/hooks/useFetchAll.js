import { useEffect, useState } from "react";
import axios from "axios";

const useFetchAll = () => {
  const [operations, setOperations] = useState([]);
  const [total, setTotal] = useState([]);
  const [loading, setLoading] = useState(true);
  const [auxFetch, setAuxFetch] = useState(false);

  const token = localStorage.getItem('token');
  
  useEffect(() => {
    let isMounted = true;
    axios.get('http://localhost:3000/api/operations', { headers: { Authorization: token } })
      .then(response => {
        if (isMounted) {
          setOperations(response.data);
          setTotal(response.data.reduce((acc, item) => item.type === 'INGRESO' ? acc + parseFloat(item.amount) : acc - parseFloat(item.amount), 0).toFixed(2));
          setLoading(false);
        }
      }).catch(error => {
        console.log(error);
      });
    return () => isMounted = false;
  }, [auxFetch, token]);
  return [operations, total, loading, setAuxFetch];
};

export default useFetchAll;
