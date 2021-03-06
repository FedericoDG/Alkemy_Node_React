import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import NavigationDesktop from '../NavigationDesktop/NavigationDesktop';
import NavigationMobile from '../NavigationMobile/NavigationMobile';

import './Navbar.scss';

const Navbar = () => {
  const animationFrom = { opacity: 0, y: -40 };
  const animationTo = { opacity: 1, y: 0 };

  return (
    <div className="navbar">
      <motion.span initial={animationFrom}
        animate={animationTo}
        transition={{ delay: 0.1 }}>
        <Link className="logo" to="/">alkemy</Link>
      </motion.span>
      <NavigationMobile />
      <NavigationDesktop />
    </div>
  );
};

export default Navbar;
