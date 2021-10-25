import { useContext, useEffect, useState } from "react";
import UserContext from '../context/Contex';
import axios from "axios";

const useFetchOperation = (id) => {
  const [update, setUpdate] = useState({});
  const [auxFetch, setAuxFetch] = useState(false);

  const { user } = useContext(UserContext);

  useEffect(() => {
    let isMounted = true;
    axios.get(`http://localhost:3000/api/operation/${id}`, { headers: { Authorization: user?.token } })
      .then(response => {
        if (isMounted) {
          setUpdate(response.data);
        }
      })
      .catch(error => {
        console.log(error);
      });
    return () => isMounted = false;
  }, [auxFetch, id, user?.token]);
  return [update, setUpdate, setAuxFetch];
};

export default useFetchOperation;