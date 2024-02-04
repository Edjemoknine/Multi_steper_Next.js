"use client";

import { useState } from "react";

const Steper = () => {
  const [current, setCurrent] = useState(1);
  const [Completed, setCompleted] = useState(false);
  const steps = ["Customer Info", "Shipping Info", "Payment"];
  return (
    <div className="flex relative flex-col gap-6 items-center">
      <div className="flex relative   justify-center items-center max-w-3xl w-full mx-auto p-6 ">
        {steps.map((step, i) => (
          <div
            className={`stepItem ${current === i + 1 && "active"} ${
              (i + 1 < current || Completed) && "completed"
            }`}
          >
            <div className="step  w-14 z-10 h-14 text-[14px] rounded-full bg-gray-400 text-white font-semibold flex justify-center items-center">
              {i + 1}
            </div>
            <p className="text-xl">{step}</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          current == steps.length
            ? setCompleted(true)
            : setCurrent((prev) => prev + 1);
        }}
        className="px-4 py-2 disabled:bg-gray-800 disabled:cursor-not-allowed bg-gray-500 text-white rounded-md cursor-pointer"
      >
        {Completed ? "Completed" : "Next"} {current}
      </button>
    </div>
  );
};

export default Steper;
