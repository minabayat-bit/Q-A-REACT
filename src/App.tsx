import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import "./index.css";

function App() {
  // const [openIndex, setOpenIndex] = useState<number | null>(null);
  // const toggleCard = (index: number) => {
  //   setOpenIndex(openIndex === index ? null : index);
  // };

  return (
    <div className=" flex flex-col justify-center items-center pt-50 gap-4 ">
      <span className="text-[#c59d5f] text-4xl font-light tracking-wider">
        General Questions
      </span>

      <Cards/>
      <Cards />
      <Cards />
    </div>
  );
}

export default App;
