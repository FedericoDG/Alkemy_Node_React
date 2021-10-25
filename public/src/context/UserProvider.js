import { useEffect, useState } from 'react';
import Context from './Contex';

const UserProvider = ({ children }) => {
  const [authorized, setAuthorized] = useState(JSON.parse(localStorage.getItem('authorized')));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  useEffect(() => {
    setAuthorized(JSON.parse(localStorage.getItem('authorized')));
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);

  return (
    <Context.Provider value={{ authorized, setAuthorized, user, setUser }}>
      {children}
    </Context.Provider>
  );
};

export default UserProvider;