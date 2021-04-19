import React from "react";

const Screen4 = ({ seats, total }) => {
  return (
    <div className="center flex flex-col">
      <div className=" mb-10 flex h-auto all">
        <div className="row flex flex-col ">
          <div className="seat"></div>
          <div className="seat "></div>
          <div className="occupied"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat "></div>
        </div>
        {/* second row */}
        <div className="row flex flex-col ">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className=" occupied"></div>
          <div className="seat "></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
        </div>
        {/* 3rdrow */}
        <div className="row flex flex-col ml-3">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className=" occupied"></div>
        </div>
        {/* 4th row */}
        <div className="row flex flex-col">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className=" occupied "></div>
          <div className="seat"></div>
          <div className="seat  "></div>
          <div className=" occupied"></div>
        </div>
        {/* 5th row */}
        <div className="row flex flex-col">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className=" occupied"></div>
          <div className=" occupied"></div>
          <div className=" occupied"></div>
          <div className=" occupied"></div>
          <div className="seat"></div>
        </div>
        {/* 6th row */}
        <div className="row flex flex-col">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className=" occupied"></div>
          <div className=" occupied"></div>
          <div className=" occupied"></div>
          <div className="seat "></div>
          <div className=" occupied"></div>
        </div>
        {/* 7th row */}
        <div className="row flex flex-col mr-3">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className=" occupied"></div>
          <div className=" occupied"></div>
          <div className=" occupied"></div>
          <div className="seat"></div>
        </div>
        {/* 8th row */}
        <div className="row flex flex-col ">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className=" occupied"></div>
          <div className=" occupied"></div>
          <div className=" occupied"></div>
          <div className="seat"></div>
        </div>
        {/* last row */}
        <div className="row flex flex-col ">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className=" occupied"></div>
          <div className=" occupied"></div>
          <div className=" occupied"></div>
          <div className=" occupied"></div>
        </div>
      </div>
      <p className="text">
        You have selected <span className="priceTag">{seats}</span> seats for a price of $
        <span className="priceTag ml-1" id="total">
          {total}
        </span>
      </p>
    </div>
  );
};

export default Screen4;
