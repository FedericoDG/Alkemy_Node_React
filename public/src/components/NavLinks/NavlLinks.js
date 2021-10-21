import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import './NavLinks.scss';

const NavlLinks = ({ handleClick }) => {
  const animationFrom = { opacity: 0, y: -40 };
  const animationTo = { opacity: 1, y: 0 };

  return (
    <ul className="navlinks">
      <motion.li
        initial={animationFrom}
        animate={animationTo}
        transition={{ delay: 0.2 }}
        onClick={handleClick}>
        <NavLink className="link" to='/uno' activeClassName="active">uno</NavLink>
      </motion.li>
      <motion.li
        initial={animationFrom}
        animate={animationTo}
        transition={{ delay: 0.3 }}
        onClick={handleClick}>
        <NavLink className="link" to='/dos' activeClassName="active">dos</NavLink>
      </motion.li>
    </ul>
  );
};

export default NavlLinks;
