import React, { useState, useEffect } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Screen1 from "./screen1";
import Screen2 from "./screen2";
import Screen3 from "./screen3";
import Screen4 from "./screen4";

const Cinema = () => {
  let history = useHistory();
  const [seats, setSeats] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState("/");
  const [value, setValue] = useState(10);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    switch (selectedMovie) {
      case "joker":
        setValue(12);
        setTotal(0);
        setSeats(1);
        break;
      case "sinnister":
        setValue(8);
        setTotal(0);
        setSeats(1);
        break;
      case "shrek":
        setValue(6);
        setTotal(0);
        setSeats(1);
        break;
      case "/":
        setValue(10);
        setTotal(0);
        setSeats(1);
        break;
    }
  }, [selectedMovie]);

  const handleClick = (a) => {
    if (a.target.classList.contains("seat") && !a.target.classList.contains("occupied")) {
      if (!a.target.classList.contains("selected")) {
        setTotal(value * seats);
        setSeats(seats + 1);
        a.target.classList.add("selected");
      } else if (a.target.classList.contains("selected")) {
        setSeats(seats - 1);
        setTotal(value * seats);

        a.target.classList.remove("selected");
      }
    }
  };
  useEffect(() => {
    const container = document.querySelector(".all");
    container.addEventListener("click", handleClick);
    return () => {
      container.removeEventListener("click", handleClick);
    };
  }, [seats, handleClick]);

  const onChange = (e) => {
    setSelectedMovie(e.target.value);
    history.push(`/${e.target.value}`);
  };

  return (
    <div className="bg-gray-900 flex flex-col center h-screen m-0 text-white">
      <div className="my-9">
        <label>Pick a movie:</label>
        <select onChange={onChange} className="ml-3 py-1 appearance-none border-gray-900 px-2 text-black ">
          <option value="">Avengers: Endgame ($10)</option>
          <option value="joker">Joker ($12)</option>
          <option value="sinister">Sinnister ($8)</option>
          <option value="shrek">Shrek 4th ($6)</option>
        </select>
      </div>
      <ul className="flex space-x-6 my-4 ">
        <li className="flex center">
          <div className="seat"></div>
          <small>N/A</small>
        </li>
        <li className="flex center">
          <div className="selected"></div>
          <small>Selected</small>
        </li>
        <li className="flex center">
          <div className="seat occupied"></div>
          <small>Occupied</small>
        </li>
      </ul>
      <div className="per">
        {/* perspective 1k */} <div className=" screen flex flex-col h-32 w-72 my-4 bg-white"></div>
      </div>
      {/* first row */}
      <Switch>
        <Route exact path="/">
          <Screen1 seats={seats} total={total} />
        </Route>
        <Route exact path="/joker">
          <Screen2 seats={seats} total={total} />
        </Route>
        <Route exact path="/shrek">
          <Screen3 seats={seats} total={total} />
        </Route>
        <Route exact path="/sinister">
          <Screen4 seats={seats} total={total} />
        </Route>
      </Switch>
    </div>
  );
};

export default withRouter(Cinema);
