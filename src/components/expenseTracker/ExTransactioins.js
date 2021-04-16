import React from "react";

const ExTransactioins = ({ listOfExpenses, setListOfExpenses, expences, setExpence }) => {
  const arrayOfExpenses = expences.map((expense) => {
    const checkForSumColor = expense.numb < 0 ? "text-red-400" : "text-green-400";
    const deleteEntry = () => {
      setListOfExpenses(listOfExpenses.filter((e) => e.id !== expense.id));
    };

    return (
      <div key={expense.id} className="hoverbtn flex w-full   ">
        <div className=" flex justify-between w-full  bg-gray-100 my-1 py-1 px-6 rounded-2xl    ">
          <div>{expense.text}</div>
          <div className={`${checkForSumColor}`}>{expense.numb} £</div>
        </div>
        <button
          onClick={deleteEntry}
          id="show"
          className=" show hidden flex transform translate-x-0 text-red-500  ml-1 w-auto bg-gray-100 my-1 py-1 px-3 rounded-2xl active:bg-red-200 "
        >
          X
        </button>
      </div>
    );
  });
  if (listOfExpenses.length === 0) {
    return (
      <div className="   ">
        <div className="my-5 font-sans text-gray-500 text-center">add your first transaction.</div>
      </div>
    );
  }
  return <>{arrayOfExpenses}</>;
};

export default ExTransactioins;
