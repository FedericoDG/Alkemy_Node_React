import { useContext, useEffect, useState } from "react";
import UserContext from '../context/Contex';
import axios from "axios";

const useFetchCategory = (url) => {
  const [operations, setOperations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [auxFetch, setAuxFetch] = useState(false);

  const { user } = useContext(UserContext);

  useEffect(() => {
    let isMounted = true;
    axios.get(url, { headers: { Authorization: user?.token } })
      .then(response => {
        if (isMounted) {
          setOperations(response.data);
          setLoading(false);
        }
      }).catch(error => {
        console.log(error);
      });
    return () => isMounted = false;
  }, [url, auxFetch, user?.token]);
  return [operations, loading, setAuxFetch];
};

export default useFetchCategory;
