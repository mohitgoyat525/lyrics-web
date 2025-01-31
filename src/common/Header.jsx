import React from "react";
import { SearchIcon } from "../utils/icons";
import { Link } from "react-router-dom";
const Header = () => {
    const handleIconClick = () => {
      
      const inputElement = document.querySelector("input");
      inputElement.focus();
    };
  return (
    <nav className="w-full max-w-[1128px] header-shadow rounded-[20px] flex items-center justify-between py-[10px] max-md:flex-wrap max-xl:gap-6 max-sm:gap-2 mt-[10px]">
      <Link to="/">
        <img
          src="/assets/images/svg/header-logo.svg"
          alt="logo"
          className="ps-[38px] max-md:ps-6 max-xl:min-w-[109px] max-xl:h-14 max-md:min-w-20 max-md:h-5"
        />
      </Link>
      <div className=" max-md:hidden flex items-center rounded-full w-full max-w-[650px] justify-between border border-solid border-offBlue ps-[30px] pe-2 max-lg:ps-2">
        <input
          type="text"
          placeholder="What do you feel like listening to right now ?"
          className=" placeholder:text-sm text-sm font-normal placeholder:font-normal leading-6 bg-transparent placeholder:left-6 placeholder:text-lightGray outline-none w-full pe-4"
        />
        <p
          onClick={handleIconClick}
          className="flex items-center justify-center size-[39px] min-w-[39px] rounded-full bg-black cursor-pointer my-[6px]"
        >
          <SearchIcon />
        </p>
      </div>
      <div className="flex items-center gap-5">
        <button className="text-darkBlack text-sm leading-6 font-normal transition-all ease-linear duration-300 hover:scale-110">
          Login
        </button>
        <button className="me-3 bg-darkBlack border border-solid border-transparent hover:bg-white hover:text-darkBlack transition-all ease-linear duration-300 hover:border-darkBlack text-white font-medium text-sm leading-6 rounded-[9px] w-full min-w-[105px] max-sm:min-w-[85px] py-[9px] h-[43px]">
          Sign Up
        </button>
      </div>
      <div className="md:hidden flex mx-3 items-center rounded-full w-full max-w-[650px] justify-between border border-solid border-offBlue ps-[30px] pe-2 max-md:ps-2">
        <input
          type="text"
          placeholder="What do you feel like listening to right now ?"
          className=" placeholder:text-sm text-sm font-normal bg-transparent pe-4 placeholder:font-normal leading-6 placeholder:left-6 placeholder:text-lightGray outline-none w-full max-md:text-xs"
        />
        <p className="flex items-center justify-center h-[39px] min-w-[39px] rounded-full bg-darkBlack cursor-pointer my-[6px]">
          <SearchIcon />
        </p>
      </div>
    </nav>
  );
};

export default Header;
