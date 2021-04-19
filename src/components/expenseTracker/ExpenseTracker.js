import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import ExForm from "./ExForm";
import ExTransactioins from "./ExTransactioins";

const ExpenseTracker = () => {
  const [listOfExpenses, setListOfExpenses] = useState([]);
  const [expences, setExpence] = useState([]);

  const [total, setTotal] = useState(0);
  const [changingListView, setChListView] = useState(1);
  const checkForSumColor = total < 0 ? "border-red-400" : "border-green-400";

  useEffect(() => {
    //taking care of your balance
    const t = listOfExpenses.map((number) => number.numb);
    setTotal(t.reduce((a, b) => a + b, 0));
  }, [listOfExpenses]);

  const allTransforms = () => {
    setExpence(listOfExpenses);
    setChListView(1);
  };
  const expencesFunction = () => {
    setExpence(listOfExpenses.filter((number) => number.numb < 0));
    setChListView(2);
  };
  const earningsFunction = () => {
    setExpence(listOfExpenses.filter((number) => number.numb > 0));
    setChListView(3);
  };

  useEffect(() => {
    switch (changingListView) {
      case 2:
        expencesFunction();
        break;
      case 3:
        earningsFunction();
        break;
      default:
        allTransforms();
    }
  }, [setListOfExpenses, listOfExpenses, changingListView]);

  return (
    <div className=" bg-gray-300 flex flex-col  h-screen flex-none  ">
      <NavBar border="text-white-500 border-white-500 bg-gray-200 sm:px-5" />

      <div className="h-full mt-20">
        <div className={`bg-white flex flex-col p-5 sm:w-96 border-2 ${checkForSumColor} mx-auto center w-80 rounded-2xl mb-3`}>
          <div className="text-md">your balance</div>
          <div className="px-6 py-1 rounded-2xl">
            <div className="text-3xl">{total} £</div>
          </div>
        </div>

        <ExForm
          className="flex-none"
          expences={expences}
          setExpence={setExpence}
          setListOfExpenses={setListOfExpenses}
          listOfExpenses={listOfExpenses}
        />

        <div className=" bg-gray-300  flex-col  ">
          <div className="bg-white flex flex-col sm:p-5 p-2 sm:w-96 w-80 border-2  mx-auto center rounded-2xl  ">
            <div className="flex  justify-between w-full mb-2 text-sm">
              <button onClick={allTransforms} className={`flex border ${changingListView === 1 ? "border-gray-500" : ""} btn3 hover:border-gray-500`}>
                💰All transactions
              </button>
              <button
                onClick={expencesFunction}
                className={`flex border ${changingListView === 2 ? "border-red-500" : ""} btn3 hover:border-red-500 `}
              >
                🔻expences
              </button>
              <button
                onClick={earningsFunction}
                className={`flex border ${changingListView === 3 ? "border-green-500" : ""} btn3 hover:border-green-500`}
              >
                💸earnings
              </button>
            </div>
            <div className=" border border-gray-200 w-full mb-2 flex "></div>

            <ExTransactioins
              className=" h-full"
              setListOfExpenses={setListOfExpenses}
              listOfExpenses={listOfExpenses}
              expences={expences}
              setExpence={setExpence}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
