import { useContext, useState } from 'react';
import UserContext from '../../context/Contex';
import { CgMenuRound } from 'react-icons/cg';
import { CgCloseO } from 'react-icons/cg';

import NavlLinks from '../NavLinks/NavlLinks';

import './NavigationMobile.scss';

const NavigationMobile = () => {
  const [open, setOpen] = useState(false);

  const { authorized } = useContext(UserContext);

  const handleClick = () => setOpen(!open);

  return (
    <nav className="navigationMobile">
      {
        open && authorized &&
        <NavlLinks handleClick={handleClick} />
      }
      {
        open && authorized &&
        <CgCloseO className="hamburguer" size="35px" color="white" onClick={handleClick} />
      }
      {
        !open && authorized &&
        <CgMenuRound className="hamburguer" size="35px" color="white" onClick={handleClick} />
      }
    </nav>
  );
};

export default NavigationMobile;