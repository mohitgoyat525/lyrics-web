import React from "react";
import Heading from "../common/Heading";

const Uniswap = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat bg-uniswapBg ">
      <div className="relative flex items-center h-[885px] max-xl:h-full max-lg:flex-wrap max-w-[1920px] mx-auto max-lg:gap-10 max-xl:py-28 max-lg:py-20 max-md:py-16 max-sm:py-10">
        <div className="container">
          <div className="max-lg:flex max-lg:items-center max-lg:justify-center max-lg:flex-col">
            <Heading text='Buy on' secondaryText='Uniswap' myClass='mb-4'/>
            <ul className="list-disc ml-5">
              <li className="text-white text-xl font-normal leading-[25px] font-josefin">
                100,000+ Airdrop
              </li>
              <li className="text-white text-xl font-normal leading-[25px] font-josefin">
                NFT $GILD giveaway
              </li>
              <li className="text-white text-xl font-normal leading-[25px] font-josefin">
                Announcement and Games
              </li>
            </ul>
            <button className="rounded-full transition-all ease-linear duration-300 hover:scale-95 text-white font-josefin gap-2 mt-[41px] justify-center min-w-[170px] h-[53px] hero-btn flex items-center font-normal text-2xl leading-6">
              <img src="/assets/images/svg/unicorn-img.svg" alt="unicorn" />
              Buy Now
            </button>
          </div>
        </div>
        <img
          src="/assets/images/png/treassure-img.png"
          alt="treassure"
          className="w-full max-w-[961px] absolute right-0 max-xl:max-w-[561px] max-lg:hidden pointer-events-none"
        />
        <img
          src="/assets/images/png/md-treasure-img.png"
          alt="treasue"
          className="lg:hidden w-full max-w-[320px] mx-auto pointer-events-none"
        />
      </div>
    </div>
  );
};

export default Uniswap;
