import { useContext } from 'react';
import UserContext from '../../context/Contex';
import { NavLink, useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

import './NavLinks.scss';

const NavlLinks = ({ handleClick }) => {
  const { setAuthorized } = useContext(UserContext);

  const animationFrom = { opacity: 0, y: -40 };
  const animationTo = { opacity: 1, y: 0 };

  let history = useHistory();

  const handleOnClick = () => {
    localStorage.clear();
    setAuthorized(false);
    history.push("/login");
  };

  return (
    <ul className="navlinks">
      <motion.li
        initial={animationFrom}
        animate={animationTo}
        transition={{ delay: 0.2 }}
        onClick={handleClick}>
        <NavLink className="link" to='/incomes' activeClassName="active">ingresos</NavLink>
      </motion.li>
      <motion.li
        initial={animationFrom}
        animate={animationTo}
        transition={{ delay: 0.3 }}
        onClick={handleClick}>
        <NavLink className="link" to='/expenses' activeClassName="active">egresos</NavLink>
      </motion.li>
      <motion.li
        initial={animationFrom}
        animate={animationTo}
        transition={{ delay: 0.4 }}
        onClick={handleClick}>
        <span className="link" to='/login' onClick={handleOnClick}>salir</span>
      </motion.li>
    </ul>
  );
};

export default NavlLinks;
