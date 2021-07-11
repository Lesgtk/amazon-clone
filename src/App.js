import React, { useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import { auth } from "./firebase";

function App() {

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if(authUser) {
        dispatchEvent({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatchEvent({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
        <div className="app">
            <Router>
              <Switch>
                <Router path="/login">
                  <Login />
                </Router>
                <Route path="/">
                  <Header />
                  <Home />
                </Route>
              </Switch>
            </Router>
        </div>
  );
}

export default App;
