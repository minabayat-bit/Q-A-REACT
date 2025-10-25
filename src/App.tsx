import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="flex flex-col justify-center items-center pt-50 gap-4 ">
      <span className="text-[#c59d5f] text-4xl font-light tracking-wider">
        General Questions
      </span>
      <div className="bg-white p-8 gap-3">
        <div className="flex flex-row justify-between">
          <h2 className="tracking-widest">
            do you accept all major credit cards?
          </h2>
          <button className="text-[#c59d5f] text-[25px] border-2 border-[#c59d5f] ">+</button>
        </div>
        <div className="h-1 bg-black"></div>
        <p className="text-gray-400 w-150 pt-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore
          illo dolores quia nemo doloribus quaerat, magni numquam repellat
          reprehenderit.
        </p>
      </div>
    </div>
  );
}

export default App;
