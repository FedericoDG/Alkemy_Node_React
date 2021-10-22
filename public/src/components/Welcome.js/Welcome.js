import './Welcome.scss'

const Welcome = () => {
  return (
    <h1>Hola {localStorage.getItem('email')}</h1>
  );
};

export default Welcome;
