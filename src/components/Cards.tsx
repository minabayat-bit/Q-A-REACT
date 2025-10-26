import React, { Children } from "react";
import { type ReactNode } from "react";

interface cardsPropsType {
  children: ReactNode;
}

const Cards = ({ children }: cardsPropsType) => {
  return (
    <div>
      <div className="bg-white p-8 gap-3">
        <div className="flex flex-row justify-between">
          <h2 className="tracking-widest"></h2>
          <button className="text-[#c59d5f] text-[25px] border-2 border-[#c59d5f] ">
            +
          </button>
        </div>
        <div className="h-[1px] bg-black"></div>
        <p className="text-gray-400 w-150 pt-3"></p>
      </div>
      {children}
    </div>
  );
};

export default Cards;
