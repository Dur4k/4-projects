import React, { useState, useEffect } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import NavBar from "../NavBar";

import Screen1 from "./screen1";
import Screen2 from "./screen2";
import Screen3 from "./screen3";
import Screen4 from "./screen4";

const Cinema = () => {
  let history = useHistory();
  const [seats, setSeats] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState("avangers");
  const [value, setValue] = useState(10);
  const [total, setTotal] = useState(0);
  console.log(selectedMovie);
  useEffect(() => {
    switch (selectedMovie) {
      case "joker":
        setValue(12);
        setTotal(0);
        setSeats(0);
        break;
      case "sinister":
        setValue(8);
        setTotal(0);
        setSeats(0);
        break;
      case "shrek":
        setValue(6);
        setTotal(0);
        setSeats(0);
        break;
      case "avangers":
        setValue(10);
        setTotal(0);
        setSeats(0);
        break;
    }
  }, [selectedMovie]);

  const handleClick = (a) => {
    if (a.target.classList.contains("seat") && !a.target.classList.contains("occupied")) {
      if (!a.target.classList.contains("selected")) {
        setSeats((seats) => seats + 1);

        a.target.classList.add("selected");
      } else {
        setSeats((seats) => seats - 1);
        console.log(seats);
        console.log(value);
        // setSeats(seats - 1);

        a.target.classList.remove("selected");
      }
    }
  };

  useEffect(() => {
    const container = document.querySelector(".all");

    container.addEventListener("click", handleClick);
    setTotal(value * seats);

    return () => {
      container.removeEventListener("click", handleClick);
      setTotal(value * seats);
    };
  }, [value, seats]);

  const onChange = (e) => {
    setSelectedMovie(e.target.value);
    history.push(`/cinemaSeats/${e.target.value}`);
  };

  return (
    <div className="bg-gray-900 flex flex-col self-center overflow-hidden m-0 h-screen ">
      <NavBar border="border-white text-white sm:px-5" />

      <div className="bg-gray-900 flex flex-col center  m-0 text-white mt-32">
        <div className="my-9">
          <label>Pick a movie:</label>
          <select onChange={onChange} className="ml-3 py-1 appearance-none border-gray-900 px-2 text-black ">
            <option value="avangers">Avengers: Endgame ($10)</option>
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
          {" "}
          <Route exact path="/cinemaSeats/avangers">
            <Screen1 seats={seats} total={total} />
          </Route>{" "}
          <Route exact path="/cinemaSeats/joker">
            <Screen2 seats={seats} total={total} />
          </Route>
          <Route exact path="/cinemaSeats/shrek">
            <Screen3 seats={seats} total={total} />
          </Route>
          <Route exact path="/cinemaSeats/sinister">
            <Screen4 seats={seats} total={total} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(Cinema);
