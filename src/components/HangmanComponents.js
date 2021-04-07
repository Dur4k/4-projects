import React from "react";

const GameEnding = ({ message, playAgain, setcount, count, lost, setLost, button }) => {
  const restartGame = () => {
    if (lost === 5) {
      setcount(0);
      setLost(0);
    } else {
      setcount ? setcount(count + 1) : setLost(lost + 1);
    }

    playAgain();
  };

  return (
    <div className=" flex bg-black-800 fixed inset-0 center" id="popup-container">
      <div className=" popup bg-gray-900 opacity-95 rounded-3xl p-10 shadow-xl w-5/6 md:w-2/6 h-56 ">
        <div className=" text-center mt-6 bold text-3xl">{message}</div>
        <button
          onClick={restartGame}
          className=" flex pointer bg-gray-600  mt-6 px-5 py-3 rounded-2xl m-auto text-center transform hover:bg-gray-500   border-2 border-gray-500 hover:shadow-2xl"
        >
          {button}
        </button>
      </div>
    </div>
  );
};

export default GameEnding;
