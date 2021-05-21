import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Greeting from "./Components/Greeting";
import Products from "./Components/Products";


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
        <Route path="/">
          <Greeting />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
