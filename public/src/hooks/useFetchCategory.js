import { useEffect, useState } from "react";
import axios from "axios";

const useFetchCategory = (url) => {
  const [operations, setOperations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [auxFetch, setAuxFetch] = useState(false);

  const token = localStorage.getItem('token');

  useEffect(() => {
    let isMounted = true;
    axios.get(url, { headers: { Authorization: token } })
      .then(response => {
        if (isMounted) {
          setOperations(response.data);
          setLoading(false);
        }
      }).catch(error => {
        console.log(error);
      });
    return () => isMounted = false;
  }, [url, auxFetch, token]);
  return [operations, loading, setAuxFetch];
};

export default useFetchCategory;
