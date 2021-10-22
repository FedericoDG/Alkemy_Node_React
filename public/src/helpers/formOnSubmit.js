import axios from "axios";

const formOnSubmit = (e, object, setObject, setAuxFetch, id) => {
  e.preventDefault();
  const token = localStorage.getItem('token');
  if (id) {
    axios.put(`http://localhost:3000/api/operation/${id}`, object, { headers: { Authorization: token } })
      .then(response => {
        alert(response.data.message);
      })
      .catch(error => console.log(error));
  } else {
    axios.post(`http://localhost:3000/api/operation/`, object, { headers: { Authorization: token } })
      .then(response => {
        console.log(response.data.message);
      })
      .catch(error => console.log(error));
    setObject({ ...object, category: "ALQUILER", type: "EGRESO" });
  }
  setAuxFetch(prev => !prev);
  e.target.reset();
  return object;
};

export default formOnSubmit;