import { useState } from 'react';
import { CgMenuRound } from 'react-icons/cg';
import { CgCloseO } from 'react-icons/cg';

import NavlLinks from '../NavLinks/NavlLinks';

import './NavigationMobile.scss';

const NavigationMobile = ({ authorized, setAuthorized }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  return (
    <nav className="navigationMobile">
      {
        open && authorized &&
        <NavlLinks handleClick={handleClick} setAuthorized={setAuthorized} />
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