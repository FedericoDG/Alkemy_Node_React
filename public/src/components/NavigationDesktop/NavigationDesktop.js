import { useContext } from 'react';
import UserContext from '../../context/Contex';

import NavlLinks from '../NavLinks/NavlLinks';

import './NavigationDesktop.scss';

const NavigationDesktop = () => {
  const { authorized } = useContext(UserContext);

  return (
    <nav className="navigationDesktop">
      {
        authorized &&
        <NavlLinks />
      }
    </nav>
  );
};

export default NavigationDesktop;
