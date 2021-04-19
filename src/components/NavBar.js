import React from "react";

const NavBar = ({ border, bgcolor, opacity }) => {
  return (
    <>
      <div className="flex justify-around flex-wrap mt-2  ">
        <a className={`border-2 ${border} ${bgcolor} ${opacity}  px-1 rounded-lg mb-1 sm:mb-0`} href="/">
          ExpenseTracker
        </a>
        <a className={`border-2 ${border} ${bgcolor} ${opacity}  px-1 rounded-lg mb-1 sm:mb-0`} href="/hangman">
          Hangman
        </a>
        <a className={`border-2 ${border} ${bgcolor} ${opacity}  px-1 rounded-lg mb-1 sm:mb-0`} href="/cinemaSeats/avangers">
          CinemaScreen
        </a>
        <a className={`border-2 ${border} ${bgcolor} ${opacity}  px-1 rounded-lg mb-1 sm:mb-0`} href="/userGenerator">
          userGenerator
        </a>
      </div>
    </>
  );
};

export default NavBar;
