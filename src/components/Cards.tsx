import { useState } from "react";

const Cards = () => {
  const [openIndex, setOpenIndex] = useState(false);
  return (
    <div className=" flex flex-col justify-center items-center  gap-4 ">
      <div className="bg-white p-8 gap-3 w-150">
        <div className="flex flex-row justify-between">
          <h2 className="tracking-widest">title card</h2>
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

        <p className="text-gray-400 w-100 pt-3">
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
