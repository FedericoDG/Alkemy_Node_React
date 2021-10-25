import { useContext } from "react";
import { Redirect, useParams } from "react-router-dom";
import UserContext from '../context/Contex'
import useFetchOperation from "../hooks/useFetchOperation";

import Welcome from "../components/Welcome.js/Welcome";
import Form from "../components/Form/Form";

const Update = () => {
  let { id } = useParams();

  const [update, setUpdate, setAuxFetch] = useFetchOperation(id);

  const {authorized} = useContext(UserContext)

  if (!authorized) {
    return <Redirect to='/login' />;
  }

  return (
    <div>
      <Welcome />
      <Form update={update} setUpdate={setUpdate} setAuxFetch={setAuxFetch} />
    </div>
  );
};

export default Update;
