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
        <div className="container my-[45px] max-lg:overflow-auto max-lg:my-10 max-md:my-5 max-lg:pb-5">
          <div className="flex items-center justify-center">
            {ALPHABET_LIST.map((obj, i) => (
              <p
                key={i}
                className={`min-w-[39px] rounded-full flex text-xs hover:bg-black hover:text-white font-normal leading-[18px] items-center h-[39px] justify-center cursor-pointer transition-all ease-linear duration-300 
              ${
                selectedAlphabet === obj
                  ? "bg-black text-white"
                  : "bg-transparent text-black"
              }`}
                onClick={() => handleClick(obj)}
              >
                {obj}
              </p>
            ))}
          </div>
        </div>
        <div className="border border-solid border-offBlue w-full mb-[67px] max-xl:mb-14 max-md:mb-8 max-sm:mb-5"></div>
      </div>
    );
};

export default Alphabets;
