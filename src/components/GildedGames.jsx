import React from "react";

const GildedGames = () => {
  return (
    <div className="bg-gilded-bg bg-center bg-cover bg-no-repeat h-[705px] max-xl:h-full max-xl:py-24 max-lg:py-20 max-md:py-16 max-sm:py-10 flex items-center justify-center relative z-30">
      <div className="container">
        <div className="relative w-full max-w-[1285px] mx-auto max-lg:py-20 max-md:py-16 max-sm:py-10">
          <img
            src="/assets/images/png/semicolon-top.png"
            alt="semicolon"
            className="max-w-[102px] w-full absolute top-[-49px] left-[102px] max-xl:hidden pointer-events-none"
          />
          <img
            src="/assets/images/png/semicolon-bottom.png"
            alt="semicolon"
            className="max-w-[102px] w-full absolute bottom-[-50px] right-[22rem] max-xl:hidden pointer-events-none"
          />
          <p className="font-josefin font-normal text-[40px] leading-[156%] max-lg:text-3xl max-md:text-2xl text-center max-w-[940px] mx-auto text-white">
            Gilded Games is a new type of gaming platform, partially owned and
            operated by its players. Earn Gild tokens by playing and use them to
            decide the future of the game!
          </p>
        </div>
      </div>
    </div>
  );
};

export default GildedGames;
