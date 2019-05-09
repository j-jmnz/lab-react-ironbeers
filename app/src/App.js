/* eslint-disable */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import Beers from "./components/Beers";
import "./App.css";
//Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/new-beer" component={NewBeer} />
          <Route exact path="/random-beer" component={RandomBeer} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
