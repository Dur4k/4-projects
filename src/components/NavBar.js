import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-between">
      <a href="/">ExpenseTracker</a>
      <a href="/hangman">Hangman</a>
      <a href="/cinemaSeats/avangers">CinemaSeats</a>
      <a href="/userGenerator">userGenerator</a>
    </div>
  );
};

export default NavBar;
