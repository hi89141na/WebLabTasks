"use client";  // Required for client-side code
import { useState } from "react";
import React from 'react'

function Counter() {
  const [count, setCount] = useState(0);

  const addHandler = () => {
    if (count < 10) {
      setCount(count + 1);
    }
    
     else {
      console.log("Maximum count reached");
    }
  };

  const subtractHandler = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      console.log("Minimum count reached");
    }
  };

  return (
    <div className="bg-blue-950  h-screen flex items-center justify-center ">
      <div className="bg-blue-100 flex items-center justify-center flex-col gap-4 w-[50%] h-[50%] ">
      <div className="space-y-5">
        <h2 className="text-center font-bold text-3xl text-black">
          Counter Program
        </h2>
        <h2 className="text-center font-bold text-5xl  text-black">{count}</h2>
      </div>
      <div className="space-x-5">
        <button
          onClick={addHandler}
          className="bg-blue-600 py-1 px-8 rounded-md text-white"
        >
          Add 1
        </button>
        <button
          onClick={subtractHandler}
          className="bg-red-600 py-1 px-8 rounded-md text-white"
        >
          Subtract 1
        </button>
      </div>
      </div>
    </div>
  );
}

export default Counter;
