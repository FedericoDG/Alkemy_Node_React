import { useState } from "react";
import { useHistory, Redirect } from 'react-router-dom';
import axios from 'axios';

import './Login.scss';

const Login = ({ authorized, setAuthorized }) => {
  const [login, setlogin] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  let history = useHistory();

  if (authorized) {
    return <Redirect to='/' />;
  }

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

  return (
    <div className="login">
      <h1>LOGIN</h1>
      <h2>(Ingrese su email y password)</h2>
      <form onChange={handleOnChange} onSubmit={handleOnSubmit}>
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">Ingresar</button>
      </form>
      <p>Pruebe con:</p>
      <p>user1@mail.com - Password1234!</p>
      <p>user2@mail.com - Password1234!</p>
      {
        error &&
        <div className="errorContainer">
          <span className="error">ERROR</span>
          <span className="message">{error}</span>
        </div>
      }
    </div>
  );
};

export default Login;
