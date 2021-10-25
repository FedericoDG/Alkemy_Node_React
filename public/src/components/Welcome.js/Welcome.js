import { useContext } from 'react';
import UserContext from '../../context/Contex';

import './Welcome.scss';

const Welcome = () => {
  const { user } = useContext(UserContext);

  return (
    <h1 className="welcome">Usuario: {user?.email}</h1>
  );
};

export default Welcome;
