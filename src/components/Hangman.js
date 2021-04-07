import React, { useState, useEffect } from "react";
import GameEnding from "./HangmanComponents";

const words = ["wizzaard", "woord"];
let word = words[Math.floor(Math.random() * words.length)];

const Hangman = () => {
  let isPlaying = true;

  const [correctWord, setCorrectWord] = useState([]);
  const [incorrectWord, setIncorrectWord] = useState([]);
  const [repeatWarning, setRepeatWarning] = useState(false);
  const [count, setcount] = useState(0);
  const [lost, setLost] = useState(0);
  const [wor, setWord] = useState("");
  const [info, setInfo] = useState(true);
  useEffect(() => {
    async function asyncFunc() {
      const response = await fetch("https://random-word-api.herokuapp.com/word?number=10");
      const data = await response.json();
      const words = data;
      setWord(words[Math.floor(Math.random() * words.length)]);
    }
    asyncFunc();
  }, [lost, count]);
  const detectWords = () => {
    const splitedWord = wor.split("");
    return splitedWord.map((w, index) => (
      <div key={index} className="bg-black   rounded-xl  opacity-70 inline-flex py-4 px-3 mr-1 center ">
        <div className=" w-3 h-4 flex center opacity-100 text-2xl md:text-4xl md:w-4 md:h-6">{correctWord.includes(w) ? w : ""}</div>
      </div>
    ));
  };

  const registerKey = (e) => {
    if (isPlaying && e.keyCode >= 65 && e.keyCode <= 90) {
      if (wor.includes(e.key)) {
        if (!correctWord.includes(e.key)) {
          setCorrectWord([...correctWord, e.key]);
        } else {
          repeatWarningFnc();
        }
      } else {
        if (!incorrectWord.includes(e.key)) {
          setIncorrectWord([...incorrectWord, e.key]);
        } else {
          repeatWarningFnc();
        }
      }
    }
  };

  const repeatWarningFnc = () => {
    setRepeatWarning(true);
    setTimeout(() => {
      setRepeatWarning(false);
    }, 700);
  };

  function winningGame() {
    let hasDuplicates = wor.replace(/(.)(?=.*\1)/g, "");

    if (hasDuplicates.length === correctWord.length) {
      isPlaying = false;
      return <GameEnding count={count} setcount={setcount} playAgain={playAgain} message="You Won congratulations 🎉🎉🎉🎉👻👻💁" button="Get 🏆" />;
    }

    if (incorrectWord.length === 6 && lost <= 4) {
      isPlaying = false;
      return (
        <GameEnding word={wor} lost={lost} setLost={setLost} playAgain={playAgain} message={`Inncorect 🙈🙈 word was: ${wor}`} button="Try again " />
      );
    }
    if (incorrectWord.length === 6 && lost >= 5) {
      isPlaying = false;
      return (
        <GameEnding
          word={wor}
          lost={lost}
          count={count}
          setcount={setcount}
          setLost={setLost}
          playAgain={playAgain}
          message="Game is Lost"
          button="new Game "
        />
      );
    }
  }
  function playAgain() {
    setCorrectWord([]);
    setIncorrectWord([]);
  }
  // https://i.pinimg.com/originals/d4/dc/9d/d4dc9d20f136e35c14820c26084dbd2c.png
  return (
    <div onKeyDown={registerKey} tabIndex={-1} className="relative h-screen">
      <div
        style={{
          backgroundImage: "url(" + "https://i.pinimg.com/originals/de/ab/0b/deab0b4c134643fe3a8736bf018bdb42.jpg" + ")",
        }}
        className="bg-cover bg-center object-cover text-white flex flex-col self-center overflow-hidden m-0 h-screen "
      >
        <h1 className="w-52 center my-6 text-center text-black relative ">
          {info ? "Win 10 times to get 10£" : "`"}
          <div
            onMouseOver={() => {
              setInfo(!info);
            }}
            onMouseOut={() => {
              setInfo(!info);
            }}
            className="-top-1 -right-4 rounded-xl bg-opacity-75    absolute bg-black text-white p-1"
          >
            {!info ? "Game end after 5   💀 " : "❓"}
          </div>
        </h1>
        <div className="text-center flex center space-x-1  ">
          <div className="border-black bg-black opacity-70   rounded-xl  border-2 px-5 p-3">
            <div className="opacity-100">
              💀<br></br>
              {lost}
            </div>
          </div>
          <div className="border-black bg-black opacity-70   rounded-xl  border-2 px-5 p-3">
            <div className="opacity-100">
              🏆<br></br>
              {count}
            </div>
          </div>
        </div>
        <div className="game-container py-6 px-8 relative m-auto h-2/4 w-2/5 ">
          <svg height="250" width="200" className="figure-container">
            <line x1="60" y1="20" x2="140" y2="20" />
            <line x1="140" y1="20" x2="140" y2="50" />
            <line x1="60" y1="20" x2="60" y2="230" />
            <line x1="20" y1="230" x2="100" y2="230" />

            <circle cx="140" cy="70" r="20" className={incorrectWord.length >= 1 ? "" : `hidden`} />

            <line x1="140" y1="90" x2="140" y2="150" className={incorrectWord.length >= 2 ? "" : `hidden`} />
            <line x1="140" y1="120" x2="120" y2="100" className={incorrectWord.length >= 3 ? "" : `hidden`} />
            <line x1="140" y1="120" x2="160" y2="100" className={incorrectWord.length >= 4 ? "" : `hidden`} />
            <line x1="140" y1="150" x2="120" y2="180" className={incorrectWord.length >= 5 ? "" : `hidden`} />
            <line x1="140" y1="150" x2="160" y2="180" className={incorrectWord.length >= 6 ? "" : `hidden`} />
          </svg>

          <div className=" absolute top-10 right-40  sm:right-72   md:left-96 flex flex-col text-left sm:text-right ">
            <div id="">
              <div className="font-semibold sm:text-left text-right underline  text-lg w-40 ">Wrong letters:</div>
              <p className="mx-3 text-right sm:text-left w-40 tracking-wider text-gray-200">{incorrectWord.join(", ")}</p>
            </div>
          </div>

          <div className="flex    transform    items-center justify-center mt-10" id="word">
            {wor ? detectWords() : ""}
          </div>
        </div>

        {wor ? winningGame() : ""}
        <div
          className={`bg-black rounded-2xl center py-4 px-5 fixed -bottom-14 transform ease-in duration-500 ${
            repeatWarning ? "transform duration-500 ease-out -translate-y-12" : ""
          } `}
          id="notification-container"
        >
          <p className="m-0">You have already entered this letter</p>
        </div>
      </div>
    </div>
  );
};

export default Hangman;
