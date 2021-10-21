import { useState } from 'react';
import { CgMenuCheese } from 'react-icons/cg';
import { CgCloseR } from 'react-icons/cg';

import NavlLinks from '../NavLinks/NavlLinks';

import './NavigationMobile.scss';

const NavigationMobile = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  return (
    <nav className="navigationMobile">
      {
        open &&
        <NavlLinks handleClick={handleClick} />
      }
      {
        open ?
          <CgCloseR className="hamburguer" size="30px" color="white" onClick={handleClick} />
          :
          <CgMenuCheese className="hamburguer" size="30px" color="white" onClick={handleClick} />
      }
    </nav>
  );
};

export default NavigationMobile;