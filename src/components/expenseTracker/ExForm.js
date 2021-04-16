import React, { useState } from "react";

const ExForm = ({ setListOfExpenses, listOfExpenses, setExpence, expences }) => {
  const [text, setText] = useState("");
  const [numb, setNub] = useState("");
  const [itsPositiveTransaction, setItsPositiveTransaction] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    const negativeor = itsPositiveTransaction ? numb : numb * -1;
    const realnumb = +negativeor;
    const checkforemptyString = !text.trim().length ? "unknown item" : text;
    setListOfExpenses([...listOfExpenses, { id: Math.floor(Math.random() * 10000000), text: checkforemptyString, numb: +realnumb.toFixed(2) }]);
    // setExpence([...expences, { id: Math.floor(Math.random() * 10000000), text: text, numb: negativeor }]);
    setText("");
    setNub("");
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNub(e.target.value);
  };

  return (
    <div className="bg-white flex flex-col p-8 w-96  mx-auto  rounded-2xl mb-2">
      <form onSubmit={onSubmit} id="form">
        <div class="form-control m-auto flex flex-col mb-4">
          <label for="text">
            Text
            <br />
          </label>
          <input
            value={text}
            onChange={handleChange}
            className="flex bg-gray-100 text-black border px-4 rounded-2xl p-1 w-full m-auto"
            type="text"
            id="text"
            placeholder="Enter text..."
          />
        </div>
        <div class="form-control mb-5">
          <label for="amount">
            Amount <br />
          </label>
          <input
            value={numb}
            onChange={handleNumberChange}
            className="flex bg-gray-100 text-black border rounded-2xl px-4 p-1 w-full m-auto"
            type="number"
            id="amount"
            placeholder="Enter amount..."
          />
        </div>
        <div className="flex justify-between ">
          <button
            onClick={() => setItsPositiveTransaction(true)}
            type="submit"
            className="shadow-xl bg-gray-100 py-1 px-2 border-green-200 border-2 rounded-2xl hover:bg-green-100 hover:shadow-2xl"
          >
            Add transaction
          </button>
          <button
            onClick={() => setItsPositiveTransaction(false)}
            type="submit"
            className="shadow-xl bg-gray-100 py-1 px-5 border-red-400 border-2 rounded-2xl hover:bg-red-100 hover:shadow-2xl"
          >
            Add expence
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExForm;
