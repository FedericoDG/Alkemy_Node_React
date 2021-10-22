import { Redirect } from 'react-router-dom';
import useLogin from '../hooks/useLogin';
import './Login.scss';

const Login = ({ authorized, setAuthorized }) => {
const [error, handleOnChange, handleOnSubmit ] = useLogin(setAuthorized)

  if (authorized) {
    return <Redirect to='/' />;
  }

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
