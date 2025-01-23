import React, { useState } from "react";
import { ALPHABET_LIST } from "../utils/helper";

const Alphabets = () => {
  const [selectedAlphabet, setSelectedAlphabet] = useState(null);
  const handleClick = (alphabet) => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("alphabet", alphabet.toLowerCase());
    window.history.pushState(
      {},
      "",
      `${window.location.pathname}?${urlParams}`
    );
    setSelectedAlphabet(alphabet);
  };

    return (
      <div>
        <div className="container my-[45px] max-lg:overflow-auto">
          <div className="flex items-center justify-center">
            {ALPHABET_LIST.map((obj, i) => (
              <div
                key={i}
                className={`min-w-[39px] rounded-full flex items-center h-[39px] justify-center cursor-pointer 
              ${
                selectedAlphabet === obj
                  ? "bg-black text-white"
                  : "bg-transparent text-black"
              }`}
                onClick={() => handleClick(obj)}
              >
                <p>{obj}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="border border-solid border-offBlue w-full "></div>
      </div>
    );
};

export default Alphabets;
