import React, { useState, useEffect } from "react";

function formatMoney(number) {
  return "£" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

const Wealtharrays = () => {
  const [users, setUsers] = useState([]);
  const [total, setTotal] = useState("");
  async function fetchUser() {
    const req = await fetch("https://randomuser.me/api/");
    const data = await req.json();
    setUsers([
      ...users,
      {
        name: `${data.results[0].name.first} ${data.results[0].name.last}`,
        perAnnual: Math.floor(Math.random() * 500000),
        picture: `${data.results[0].picture.large}`,
        id: `${data.results[0].email}`,
      },
    ]);
  }
  useEffect(() => {
    fetchUser();
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function dounbleMoney() {
    setUsers(
      users.map((user) => {
        return { ...user, perAnnual: user.perAnnual * 2 };
      })
    );
  }

  function showMillionares() {
    setUsers(users.filter((user) => user.perAnnual > 1000000));
  }

  function sortRitchies() {
    setUsers([...users].sort((a, b) => b.perAnnual - a.perAnnual));
  }

  function claculateWealthies() {
    setTotal(formatMoney(users.reduce((a, b) => a + b.perAnnual, 0)));
  }
  function sortDown() {
    setUsers([...users].sort((a, b) => a.perAnnual - b.perAnnual));
  }
  function reset() {
    setUsers([]);
    setTotal("");
  }
  const arrayOfUsers = users.map((user) => {
    return (
      <div key={user.id} className="flex justify-between mb-1 border-2 rounded-lg p-1 -ml-4 sm:ml-0 flex-row ">
        <div className="flex  ">
          <img alt="user" className="w-8 h-8 flex   self-center rounded-full" src={user.picture} />{" "}
          <strong className="flex self-center">{user.name}</strong>
        </div>
        <div className="flex self-center ">
          <div className=" flex self-center break-all ">{formatMoney(user.perAnnual)}</div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="bg-white flex flex-col  justify-center h-screen m-0 justify-self-center content-center self-center place-content-center items-center ">
        <div className="flex sm:p-5 m-0 max-w-full lg:w-2/4 w-full">
          <aside className=" mt-20  p-1 w-40 border-r-2 border-black ">
            <button onClick={fetchUser} className="btn1">
              Add User 👱‍♂️
            </button>
            <button onClick={dounbleMoney} className="btn1">
              Double Money 💰
            </button>
            <button onClick={showMillionares} className="btn1">
              Show Only Millionaires 💵
            </button>
            <div className="flex">
              <button onClick={sortRitchies} className="btn2">
                Sort by Richest ↓
              </button>
              <button
                onClick={sortDown}
                className="  items-center  cursor-pointer flex  border border-black  p-1  mb-2 font-bold text-sm  rounded-lg"
              >
                ↑
              </button>
            </div>
            <button onClick={claculateWealthies} className="btn1">
              Calculate entire Wealth 🧮
            </button>
            <button onClick={reset} className="btn1">
              Reset 🚫
            </button>
            <div>
              {!total ? null : (
                <>
                  <div className="font-bold border-b mt-10">total wealth:</div>
                  <div className="break-all">{total}</div>
                </>
              )}
            </div>
          </aside>

          <main className="flex-1 py-3 px-6 w-80 h-20" id="main">
            <h2 className="px-3  border-black border-b-2 pb-3 flex justify-between my-6 mb-8 " id="wealth">
              <strong>Person</strong> Wealth
            </h2>
            <div className="h-auto">{arrayOfUsers}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Wealtharrays;
