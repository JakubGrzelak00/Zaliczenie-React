import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FilmPage from "./Pages/FilmPage";
import HomePage from "./Pages/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movie" component={FilmPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
