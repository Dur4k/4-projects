import React from "react";
import Cinema from "./cinemaComponnents/Cinema.js";
import ExpenseTracker from "./expenseTracker/ExpenseTracker.js";
import Hangman from "./hangman/Hangman.js";
import NavBar from "./NavBar.js";
import Wealtharrays from "./welthcalc.js";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path={"/"}>
          <ExpenseTracker />
        </Route>
        <Route exact path={"/cinemaSeats/:id"}>
          <Cinema />
        </Route>
        <Route exact path={"/hangman"}>
          <Hangman />
        </Route>
        <Route exact path={"/userGenerator"}>
          <Wealtharrays />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
