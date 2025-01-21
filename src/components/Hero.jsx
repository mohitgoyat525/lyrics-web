import React, { useState, useEffect } from "react";
import Header from "../common/Header";
import { DownArrow } from "../utils/icons";
import { ALPHABET_LIST, BUTTONS_LIST } from "../utils/helper";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedAlphabets, setSelectedAlphabets] = useState([]);
  const navigate = useNavigate();

  const handleAlphabetClick = (letter) => {
    setSelectedAlphabets([letter]);
    navigate(`?${letter.toLowerCase()}`);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const getHeading = () =>
    ({
      Pop: "Pop Music Hits",
      Rock: "Rock Music Hits",
      All: "Hit Me Hard and Soft",
      More: "More Music Coming Soon",
    }[selectedCategory] || "Hit Me Hard and Soft");

  useEffect(() => {
    const heading = getHeading();
    if (heading) {
      navigate(`?${heading}`);
    } else {
      console.log("Invalid heading value");
    }
  }, [selectedCategory]);

  return (
    <div className="max-xl:pb-10">
      <div className="container">
        <Header />
        <div className="flex items-center mt-[17px] max-xl:overflow-x-scroll max-xl:pb-5">
          <div className="flex items-center gap-5 me-[15px]">
            {BUTTONS_LIST.map((category) => (
              <button
                key={category}
                className={`min-w-[49px] h-[29px] text-xs justify-center leading-6 border flex items-center border-solid border-black rounded-[9px] transition-all ease-linear duration-200 ${
                  selectedCategory === category
                    ? "bg-darkBlack text-white"
                    : "hover:bg-black hover:text-white"
                } font-normal text-darkBlack`}
                onClick={() => handleCategoryClick(category)}
              >
                {category} {category === "" && <DownArrow />}
              </button>
            ))}
          </div>

         
          {ALPHABET_LIST.map((obj, i) => (
            <p
              key={i}
              className={`size-[29px] max-xl:overflow-x-scroll min-w-[29px] text-xs hover:text-[#FAFAFF] cursor-pointer font-medium leading-[18px] rounded-full flex items-center justify-center transition-all ease-linear duration-200 ${
                selectedAlphabets.includes(obj)
                  ? "bg-black text-white"
                  : "hover:bg-black text-darkBlack"
              }`}
              onClick={() => handleAlphabetClick(obj)}
            >
              {obj}
            </p>
          ))}
        </div>

       
        <div className="w-full max-w-[1141px] mx-auto rounded-[20px] bg-darkBlack h-[347px] relative mt-[43px] max-lg:h-full max-lg:mt-7">
          <div className="flex justify-between max-lg:flex-wrap">
            <div className="flex flex-col ps-[48px] pt-[48px] max-xl:ps-8 max-xl:pt-8 max-md:ps-5 max-md:pt-5">
              <h1 className="text-5xl max-lg:text-4xl max-md:text-3xl font-bold leading-[58.51px] text-[#FAFAFF] uppercase montseret-font">
                {getHeading()}
              </h1>
              <div className="flex items-center gap-6 absolute bottom-[-58px] max-xl:bottom-0 max-lg:hidden">
                <img
                  src="/assets/images/png/billie-eillish-img.png"
                  alt="user-img"
                  className="cursor-pointer max-xl:size-40"
                />
                <div className="flex flex-col">
                  <h3 className="text-white text-[32px] font-semibold leading-[42px]">
                    Billie Eilish
                    {selectedAlphabets.map((letter, i) => (
                      <span key={i} className="text-[#FAFAFF] ms-2">
                        {letter}
                      </span>
                    ))}
                  </h3>
                  <p className="text-base text-[#CECECE] font-medium leading-[19.5px] montseret-font">
                    Released May 17, 2024
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 lg:hidden mt-5">
                <img
                  src="/assets/images/png/billie-eillish-img.png"
                  alt="user-img"
                  className="cursor-pointer max-xl:size-40 max-lg:size-20 max-md:size-16"
                />
                <div className="flex flex-col">
                  <h3 className="text-white text-[32px] font-semibold leading-[42px] max-lg:text-2xl">
                    Billie Eilish
                  </h3>
                  <p className="text-base text-[#CECECE] font-medium leading-[19.5px]">
                    Released May 17, 2024
                  </p>
                </div>
              </div>
            </div>
            <img
              src="/assets/images/png/billie-eillish-second-img.png"
              alt="billie-eillish"
              className="py-[43px] pe-[43px] max-lg:p-10 max-md:p-6 max-sm:p-4 max-lg:mx-auto pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
