import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Incomes from "./pages/Incomes";
import Expenses from "./pages/Expenses";

import './App.scss';

const App = () => {
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('logged')) {
      console.log('AUTORIZADO');
      setAuthorized(true);
    }
  }, [authorized]);

  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/login" component={() => <Login authorized={authorized} setAuthorized={setAuthorized} />} />
          <Route exact path="/" component={() => <Home authorized={authorized} />} />
          <Route path="/ingresos" component={() => <Incomes authorized={authorized} />} />
          <Route path="/egresos" component={() => <Expenses authorized={authorized} />} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
