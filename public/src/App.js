import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserProvider from "./context/UserProvider";

import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Incomes from "./pages/Incomes";
import Expenses from "./pages/Expenses";
import Category from "./pages/Category";
import Update from "./pages/Update";

import './App.scss';

const App = () => {
  return (
    <div className="app">
      <UserProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route path="/incomes" component={Incomes} />
            <Route path="/expenses" component={Expenses} />
            <Route path="/category/:cat" component={Category} />
            <Route path="/update/:id" component={Update} />
          </Switch>
        </Router>
      </UserProvider>
    </div>
  );
};

export default App;
