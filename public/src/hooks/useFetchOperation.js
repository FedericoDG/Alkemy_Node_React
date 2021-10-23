import { useEffect, useState } from "react";
import axios from "axios";

const useFetchOperation = (id) => {
  const [update, setUpdate] = useState({});
  const [auxFetch, setAuxFetch] = useState(false);
  
  const token = localStorage.getItem('token');

  useEffect(() => {
    let isMounted = true;
    axios.get(`http://localhost:3000/api/operation/${id}`, { headers: { Authorization: token } })
      .then(response => {
        if (isMounted) {
          setUpdate(response.data);
          setAuxFetch(auxFetch)
        }
      })
      .catch(error => {
        console.log(error);
      });
    return () => isMounted = false;
  }, [auxFetch, id, token]);
  return [update, setUpdate, setAuxFetch];
};

export default useFetchOperation;