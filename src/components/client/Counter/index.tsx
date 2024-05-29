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
    <div className="flex flex-col items-center justify-around max-w-[300px] border-2 rounded h-44">
    <h2 className="text-base lg:text-xl">Esse é um Client Component</h2>
    <div className="flex text-lg lg:text-2xl">
      <button className="w-16  rounded flex justify-center items-center bg-white dark:bg-dark-300"
      onClick={handleDecrement}>
        -
      </button>
      <span className="w-40  flex justify-center"> {counter} </span>
      <button
        className="w-16 rounded flex justify-center items-center bg-white dark:bg-dark-300"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
    </div>
  );
}
