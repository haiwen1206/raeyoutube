/* 
<StyledExample color={'red'}>，在const StyledExample = styled` color:${props=>props.color};`
*/
import React from "react";
import AttractionsPage from "./pages/AttractionsPage";
import HomePage from "./pages/HomePage";

import "./styles.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/AttractionsPage">
            <AttractionsPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
