import React from "react";
import Cinema from "./cinemaComponnents/Cinema.js";
import ExpenseTracker from "./expenseTracker/ExpenseTracker.js";
import Hangman from "./hangman/Hangman.js";
import Wealtharrays from "./welthcalc.js";

const App = () => {
  return (
    <div>
      <ExpenseTracker />
      <Cinema />
      <Hangman />
      <Wealtharrays />
    </div>
  );
};

export default App;
