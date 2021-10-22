import { Redirect, useParams } from "react-router-dom";
import useFetchOperation from "../hooks/useFetchOperation";

import Welcome from "../components/Welcome.js/Welcome";
import Form from "../components/Form/Form";

const Update = ({ authorized }) => {
  let { id } = useParams();

  const [update, setUpdate, setAuxFetch] = useFetchOperation(id);

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
