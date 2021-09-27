import React from "react";
import "./App.css";
import { Homepage } from "./containers/homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Modal from "./components/modal/Modal";
import Mail from "./components/mail/Mail";
import ScrollToTop from "./components/ScrollToTop";

function App(props) {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Homepage} exact />
        {/* <Homepage />; */}
        <Route path="/polityka-prywatnosci" component={Modal} exact />
        <Route path="/kontakt-mailowy" component={Mail} exact />
      </Switch>
    </Router>
  );
}

export default App;
