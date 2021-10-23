import { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const useLogin = (setAuthorized) => {
  const [login, setlogin] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

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
        localStorage.setItem('logged', 'true');
        localStorage.setItem('email', response.data.email);
        localStorage.setItem('token', `Bearer ${response.data.token}`);
        setAuthorized((prev) => !prev);
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