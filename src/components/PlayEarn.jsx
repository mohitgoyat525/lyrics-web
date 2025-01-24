import React from "react";
import Description from "../common/Description";

const PlayToEarn = () => {
  return (
    <div className="bg-black pb-[110px] max-xl:pb-20 max-lg:pb-16 max-md:pb-10 flex justify-center items-center -mt-1 relative">
      <div className="max-w-[1320px] w-full mx-auto max-xl:px-4">
        <h2 className="font-bold xl:text-5xl lg:text-4xl md:text-3xl text-center lg:mb-4 mb-3 text-2xl text-white font-josefin">
          Play to <span className="text-[#7664CD]">Earn</span>
        </h2>
        <Description
          className="text-center max-w-5xl mx-auto xl:mb-12 lg:mb-10 md:mb-8 mb-5"
          title="Gilded World will be the first game released by Gilded Games. It is an MMORPG, browser based game that is unlike any other. We have taken inspiration from some of the most popular and successful MMORPG and RPG games and have boiled it down to the best online gameplay that people will actually want to play!"
        />
        <img
          src="/assets/images/png/white-shadow-left.png max-md:hidden"
          alt=""
          className="absolute left-0"
        />
        <img
          src="/assets/images/png/white-shadow-right.png"
          alt=""
          className="absolute right-0 max-md:hidden"
        />
        <img
          className="max-w-[1320px] w-full relative z-50"
          src="./assets/images/webp/gilded-world-img.webp "
          alt="gilded-world-img"
        />
      </div>
    </div>
  );
};

export default PlayToEarn;
