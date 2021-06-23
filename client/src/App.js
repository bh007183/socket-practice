import Login from "./pages/Login/Login"
import CreateAccount from "./pages/Login/CreateAccount"
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route exact path="/createaccount">
          <CreateAccount/>
        </Route>

      </Switch>
    </Router>
   
      
    
  );
}

export default App;
