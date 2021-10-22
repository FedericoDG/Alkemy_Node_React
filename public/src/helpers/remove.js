import axios from 'axios';

const remove = (id, setAuxFetch) => {
  axios.delete(`http://localhost:3000/api/operations/${id}`, { headers: { Authorization: localStorage.getItem('token') } })
    .then(response => {
      console.log(response);
      setAuxFetch(prev => !prev);
    })
    .catch(error => console.log(error));
};

export default remove;
