import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import "./index.css";

function App() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleCard = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" flex flex-col justify-center items-center pt-50 gap-4 ">
      <span className="text-[#c59d5f] text-4xl font-light tracking-wider">
        General Questions
      </span>
      <Cards>
        <div className="flex flex-row justify-between">
          <h2>do you accept all major credit cards?</h2>
          <button onClick={() => toggleCard(0)}>
            {openIndex === 0 ? "-" : "+"}
          </button>
        </div>
        <div></div>
        {openIndex === 0 && (
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore
            illo dolores quia nemo doloribus quaerat, magni numquam repellat
            reprehenderit.
          </p>
        )}
      </Cards>
    </div>
  );
}

export default App;
