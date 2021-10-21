import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import './NavLinks.scss';

const NavlLinks = ({ handleClick }) => {
  const animationFrom = { opacity: 0, y: -40 };
  const animationTo = { opacity: 1, y: 0 };

  const handleOnClick = () => {
    localStorage.clear();
  };

  return (
    <ul className="navlinks">
      <motion.li
        initial={animationFrom}
        animate={animationTo}
        transition={{ delay: 0.2 }}
        onClick={handleClick}>
        <NavLink className="link" to='/ingresos' activeClassName="active">ingresos</NavLink>
      </motion.li>
      <motion.li
        initial={animationFrom}
        animate={animationTo}
        transition={{ delay: 0.3 }}
        onClick={handleClick}>
        <NavLink className="link" to='/egresos' activeClassName="active">egresos</NavLink>
      </motion.li>
      <motion.li
        initial={animationFrom}
        animate={animationTo}
        transition={{ delay: 0.4 }}
        onClick={handleClick}>
        <a className="link" href='/login' onClick={handleOnClick}>salir</a>
      </motion.li>
    </ul>
  );
};

export default NavlLinks;
