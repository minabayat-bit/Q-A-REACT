import { useState } from "react";

interface cardsPropsType {
  title: string;
}

const Cards = ({ title }: cardsPropsType) => {
  const [openIndex, setOpenIndex] = useState(false);
  return (
    <div className=" flex flex-col justify-center items-center  gap-4 ">
      <div className="bg-white p-8 gap-3 w-200 font-light">
        <div className="flex flex-row justify-between gap-5">
          <h2 className="tracking-[5px] text-[20px]"> {title}</h2>
          <button
            onClick={() => {
              if (openIndex === true) {
                setOpenIndex(false);
              } else {
                setOpenIndex(true);
              }
            }}
            className="text-[#c59d5f] text-[25px] font-bold border-3 border-[#c59d5f]  w-6 h-10  "
          >
            {" "}
            {openIndex ? "-" : "+"}
          </button>
        </div>
        <div className="h-px bg-black mt-4"></div>
        {openIndex ? (
          <p className="text-gray-500 text[17px] pt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            iusto quae expedita ducimus blanditiis, qui repudiandae officiis
            numquam fugiat at porro aut vel quis cumque aliquid odio, harum
            provident odit.
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Cards;
