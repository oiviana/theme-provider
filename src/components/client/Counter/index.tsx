"use client";

import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState<number>(0);

  function handleDecrement() {
    setCounter(counter - 1);
  }

  function handleIncrement() {
    setCounter(counter + 1);
  }

  return (
    <div className="flex flex-col shadow-sm items-center justify-around max-w-[320px] rounded h-48 p-2 bg-white dark:bg-dark-300">
    <h2 className="text-base lg:text-xl font-semibold">Esse é um Client Component</h2>
    <div className="flex text-lg lg:text-2xl">
      <button className="w-16 shadow rounded flex justify-center items-center bg-light-300 dark:bg-dark-500"
      onClick={handleDecrement}>
        -
      </button>
      <span className="w-40 flex justify-center"> {counter} </span>
      <button
        className="w-16 shadow rounded flex justify-center items-center bg-light-300 dark:bg-dark-500"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
    </div>
  );
}
