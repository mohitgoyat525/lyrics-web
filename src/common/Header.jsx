import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HEADER_LIST } from '../utils/helper'

const Header = () => {
      const [isOpen, setIsOpen] = useState(false);
      const handler = () => {
        setIsOpen(!isOpen);
      };
      useEffect(() => {
        const handleOverflow = () => {
          if (isOpen && window.innerWidth < 1025) {
            document.body.classList.add("overflow-hidden");
          } else {
            document.body.classList.remove("overflow-hidden");
          }
        };

        handleOverflow();
        window.addEventListener("resize", handleOverflow);

        return () => {
          document.body.classList.remove("overflow-hidden");
          window.removeEventListener("resize", handleOverflow);
        };
      }, [isOpen]);

  return (
    <nav className="flex items-center justify-between">
      <Link to="/">
        <img
          src="/assets/images/png/header-logo.png"
          alt="logo"
          className="w-full max-w-[286px]"
        />
      </Link>
      <div>
        <ul
          className={`flex items-center gap-10  max-xl:flex-col max-xl:justify-center max-xl:fixed max-xl:top-0 max-xl:left-0 max-xl:w-full max-xl:h-screen max-xl:bg-black max-xl:z-[90] transition-transform duration-300 ${
            isOpen ? "max-xl:-translate-y-0" : "max-xl:-translate-y-full"
          }`}
        >
          {HEADER_LIST.map((obj, i) => (
            <li
              className="leading-[22px] text-[22px] font-bold text-white"
              key={i}
            >
              <Link>{obj}</Link>
            </li>
          ))}
          <li>
            <button className="hero-btn min-w-[181px] text-white font-normal text-2xl leading-6 h-[53px] flex items-center justify-center rounded-full gap-2">
              <img
                src="/assets/images/png/btn-discord-icon.png"
                alt="btn"
                className="w-full max-w-[22px]"
              />
              Discord
            </button>
          </li>
        </ul>
      </div>
      <button
        onClick={handler}
        className="flex flex-col justify-center items-center z-[100] gap-1 xl:hidden relative size-6"
      >
        <span
          className={`h-1 w-full bg-white rounded transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-[8px]" : ""
          }`}
        ></span>
        <span
          className={`h-1 w-full bg-white rounded transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`h-1 w-full bg-white rounded transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-[8px]" : ""
          }`}
        ></span>
      </button>
    </nav>
  );
}

export default Header