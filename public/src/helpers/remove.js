import axios from 'axios';

const remove = (id, token, setAuxFetch) => {
  axios.delete(`http://localhost:3000/api/operation/${id}`, { headers: { Authorization: token } })
    .then(response => {
      console.log(response.data.message);
      setAuxFetch(prev => !prev);
    })
    .catch(error => console.log(error));
};

export default remove;
