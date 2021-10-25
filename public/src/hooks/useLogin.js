import { useContext, useState } from "react";
import { useHistory } from 'react-router-dom';
import UserContext from '../context/Contex';
import axios from 'axios';

const useLogin = () => {
  const [login, setlogin] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const { setUser, setAuthorized } = useContext(UserContext);

  let history = useHistory();

  const handleOnChange = ({ target }) => {
    if (target.name === 'email') {
      setlogin({ ...login, email: target.value });
    } else if (target.name === 'password') {
      setlogin({ ...login, password: target.value });
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/login', login)
      .then(response => {
        setAuthorized(true);
        localStorage.setItem('authorized', 'true');
        localStorage.setItem('user', JSON.stringify({ ...response.data, token: `Bearer ${response.data.token}` }));
        setUser({ ...response.data, token: `Bearer ${response.data.token}` });
        history.push('/');
      })
      .catch(error => {
        setError(error.response.data.message);
        console.log(error.response.data.message);
      });
  };
  return [error, handleOnChange, handleOnSubmit];
};

export default useLogin;