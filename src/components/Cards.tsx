import { type ReactNode } from "react";

interface cardsPropsType {
  children: ReactNode;
}

const Cards = ({ children }: cardsPropsType) => {
  return (
    <div className=" flex flex-col justify-center items-center pt-50 gap-4 ">
      <div className="bg-white p-8 gap-3">
        <div className="flex flex-row justify-between">
          <h2 className="tracking-widest"></h2>
        </div>
        <div className="h-px bg-black"></div>
        <p className="text-gray-400 w-100 pt-3"></p>
      </div>
      {children}
    </div>
  );
};

export default Cards;
