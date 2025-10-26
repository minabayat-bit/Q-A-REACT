import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import "./index.css";

function App()  {

const [openIdex, setOpenIdex] = useState<number | null : index>(null);
const toggleCard = (index: number) => {
  setOpenIdex(openIdex === index ? null : index);
};

  return (
    <div className=" flex flex-col justify-center items-center pt-50 gap-4 ">
      <span className="text-[#c59d5f] text-4xl font-light tracking-wider">
        General Questions
      </span>
      <Cards >
        <div >
          <h2 >
            do you accept all major credit cards?
          </h2>
          <button >
            +
          </button>
        </div>
        <div ></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore
          illo dolores quia nemo doloribus quaerat, magni numquam repellat
          reprehenderit.
        </p>
      </Cards>
    </div>
  );
}

export default App;
