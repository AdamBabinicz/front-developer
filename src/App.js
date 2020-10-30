import React from "react";
import "./App.css";
import { Homepage } from "./containers/homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(props) {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Homepage} exact />
        {/* <Homepage />; */}
      </Switch>
    </Router>
  );
}

export default App;
