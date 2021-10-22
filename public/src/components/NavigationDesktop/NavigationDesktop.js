import NavlLinks from '../NavLinks/NavlLinks';

import './NavigationDesktop.scss';

const NavigationDesktop = ({ authorized, setAuthorized }) => {
  return (
    <nav className="navigationDesktop">
      {
        authorized &&
        <NavlLinks setAuthorized={setAuthorized} />
      }
    </nav>
  );
};

export default NavigationDesktop;
