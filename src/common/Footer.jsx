import React from "react";
import { FOOTER_LIST, FOOTER_LIST_TWO } from "../utils/helper";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="container w-full max-xl:px-4 lg:mb-[89px] mb-16">
        <div className="flex flex-wrap w-full mx-auto">
          <div className="lg:w-8/12 w-full flex flex-col items-center lg:items-start mt-[62px]">
            <div className="lg:max-w-[728px] max-w-3xl w-full">
              <div className="flex flex-wrap xl:mb-[37px] lg:mb-8 md:mb-7 sm:mb-6 mb-5 w-full max-lg:items-center max-lg:justify-center">
                <div className="lg:w-4/12 w-3/12 font-semibold !leading-[174%] text-xs lg:text-sm">
                  {FOOTER_LIST[0].heading}
                </div>
                <div className="lg:w-4/12 w-3/12 font-semibold !leading-[174%] text-xs lg:text-sm">
                  {FOOTER_LIST[0].songs}
                </div>
                <div className="lg:w-4/12 w-3/12 font-semibold !leading-[174%] text-xs lg:text-sm">
                  {FOOTER_LIST[0].artist}
                </div>
              </div>

              <div className="lg:max-w-[728px] w-full lg:space-y-6 space-y-4">
                {FOOTER_LIST.slice(1).map((song, index) => (
                  <div
                    key={index}
                    className="flex flex-wrap w-full max-lg:items-center max-lg:justify-center"
                  >
                    <div className="lg:w-4/12 w-3/12 flex items-center">
                      <Link>
                        <p className="lg:text-sm text-xs text-darkBlack !leading-[171.43%]">
                          {song.link}
                        </p>
                      </Link>
                    </div>
                    <div className="lg:w-4/12 w-3/12 flex justify-center items-center lg:flex">
                      <div className="text-start w-full">
                        <Link to="/">
                          <p className="lg:text-sm text-xs !leading-[200%] text-darkBlack">
                            {song.aboutSong}
                          </p>
                        </Link>
                      </div>
                    </div>
                    <div className="lg:w-4/12 w-3/12 flex items-center">
                      <Link to="/">
                        <p className="lg:text-sm text-xs !leading-[200%] text-darkBlack">
                          {song.aboutArtist}
                        </p>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-4/12 w-full flex justify-center lg:justify-start mt-8">
            <div className="lg:ps-10 pt-10 max-w-[312px] w-full">
              <h4 className="font-semibold lg:text-sm text-xs text-darkBlack lg:mb-[26px] md:mb-5 mb-4">
                Follow us
              </h4>
              {FOOTER_LIST_TWO.map((item, index) => (
                <div
                  key={index}
                  className={`flex bg-white rounded-[10px] justify-between items-center mb-[14px] py-3 ps-6 pe-[14px] ${
                    index === 3 ? "mb-0" : ""
                  }`}
                >
                  <h3 className="!leading-[174%] lg:text-sm text-xs">
                    {item.title}
                  </h3>
                  <Link to={item.link}>
                    <img
                      className="max-w-[30px] h-auto"
                      src={item.image}
                      alt={item.alt}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-off-white w-full xl:py-[30px] lg:py-6 py-5 flex justify-center items-center">
        <div className="max-w-[1140px] mx-auto w-full">
          <div className="flex flex-wrap w-full justify-between md:gap-5 gap-3">
            <p className="text-darkBlack lg:text-sm text-xs text-center max-lg:mx-auto max-lg:px-6">
              All rights reserved to Global Media Holdings Ltd.{" "}
              {new Date().getFullYear()}
            </p>
            <div className="flex lg:gap-10 gap-7 max-lg:px-6 max-lg:mx-auto">
              <Link className="text-darkBlack lg:text-sm text-xs" to="/">
                Privacy Policy
              </Link>
              <Link className="text-darkBlack lg:text-sm text-xs" to="/">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
