import axios from "axios";
import { useEffect, useState } from "react";

const useFetchCategory = (url) => {
  const [operations, setOperations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(url, { headers: { Authorization: localStorage.getItem('token') } })
      .then(response => {
        setOperations(response.data);
      }).catch(error => {
        console.log(error);
      });
    return () => {
      setLoading(false);
    };
  }, [url]);
  return [operations, loading];
};

export default useFetchCategory;
