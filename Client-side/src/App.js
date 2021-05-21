import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./Components/Products";
import Home from "./Components/Home";
import notFound from './images/404.png';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/signUp">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <div className="d-flex justify-content-center">
            <img src={notFound} alt="" />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
