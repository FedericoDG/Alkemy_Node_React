import { Redirect, useParams } from "react-router-dom";

import Welcome from "../components/Welcome.js/Welcome";
import Form from "../components/Form/Form";
import { useEffect, useState } from "react";
import axios from "axios";

const Update = ({ authorized }) => {
  let { id } = useParams();

  const [update, setUpdate] = useState({});

  useEffect(() => {
    let isMounted = true;
    axios.get(`http://localhost:3000/api/operation/${id}`, { headers: { Authorization: localStorage.getItem('token') } })
      .then(response => {
        if (isMounted) {
          setUpdate(response.data);
        }
      })
      .catch(error => {
        console.log(error);
      });
    return () => isMounted = false;
  }, [id]);


  if (!authorized) {
    return <Redirect to='/login' />;
  }

  return (
    <div>
      <Welcome />
      <Form update={update} setUpdate={setUpdate} />
    </div>
  );
};

export default Update;
