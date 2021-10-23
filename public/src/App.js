import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Incomes from "./pages/Incomes";
import Expenses from "./pages/Expenses";
import Category from "./pages/Category";
import Update from "./pages/Update";

import './App.scss';

const App = () => {
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('logged')) {
      setAuthorized(true);
    }
  }, [authorized]);

  return (
    <div className="app">
      <Router>
        <Navbar authorized={authorized} setAuthorized={setAuthorized} />
        <Switch>
          <Route path="/login" component={() => <Login authorized={authorized} setAuthorized={setAuthorized} />} />
          <Route exact path="/" component={() => <Home authorized={authorized} />} />
          <Route path="/incomes" component={() => <Incomes authorized={authorized} />} />
          <Route path="/expenses" component={() => <Expenses authorized={authorized} />} />
          <Route path="/category/:cat" component={() => <Category authorized={authorized} />} />
          <Route path="/update/:id" component={() => <Update authorized={authorized} />} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
