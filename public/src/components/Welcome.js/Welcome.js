import './Welcome.scss';

const Welcome = () => {
  return (
    <h1 className="welcome">Usuario: {localStorage.getItem('email')}</h1>
  );
};

export default Welcome;
