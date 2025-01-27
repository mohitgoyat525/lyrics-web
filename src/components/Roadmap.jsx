import React from "react";
import { ROADMAP_LIST } from "../utils/helper";
import Heading from "../common/Heading";


function Roadmap() {
  return (
    <div id="nodes" className="  bg-black mt-[-2px] mb-[-3px]">
      <div className="container xl:px-0 px-3">
        <Heading
          primaryText="Road"
          text="map"
          myClass="text-center 2xl:pb-[115px] xl:pb-[75px] sm:pb-[36px] pb-[20px]"
        />
        <div className="relative xl:block hidden">
          <div
            data-aos="fade-up"
            className="flex justify-between mt-[69px] max-lg:flex-col gap-5 relative lg:after:content-[''] lg:after:absolute lg:after:w-full lg:after:h-[2px] lg:after:bg-[#333333] lg:after:top-[-69px] xl:after:max-w-[1132px] after:max-w-[800px]"
          >
            {ROADMAP_LIST.map((phase, index) => (
              <div
                key={index}
                className="flex flex-col relative after:content-[''] after:absolute after:w-[65px] after:h-[62px] after:bg-grident-rl after:shadow-shadow-btn after:rounded-[50%] after:top-[-103px] after:z-[2] after:shadow-[0px_0px_63.22px_0px_#1BABFE]"
              >
                <p className="font-semibold text-lg leading-[23.22px] text-white flex">
                  {phase.title}
                </p>
                <h4 className="font-semibold text-4xl max-lg:text-3xl max-md:text-2xl leading-[46.44px] text-white flex mb-3">
                  {phase.quarter}
                </h4>
                {phase.items.map((item, itemIndex) => (
                  <div className="flex items-center gap-4 mb-3" key={itemIndex}>
                    <div className="w-[5px] h-[5px] bg-offGray rounded-[50%]"></div>
                    <p className="font-mont font-normal text-[18px] leading-[32.4px] text-white opacity-70 font-montserrat">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <img
            className="w-full absolute top-[-25%] right-[-161px] max-w-[335px] min-[1536px]:block hidden"
            src="/assets/images/webp/line-roadmap.webp"
            alt="LineImg"
          />
        </div>
        <div className="relative block xl:hidden justify-start">
          <div className="flex relative items-center justify-center gap-16">
            <div className="blank">
              {ROADMAP_LIST.map((phase, index) => (
                <div
                  key={index}
                  className="border-l border-lightGray relative gap-[30px]"
                >
                  <div className="flex justify-center ">
                    <div className="w-[50px] h-[50px] shadow-[0px_0px_63.22px_0px_#1BABFE] bg-grident-rl shadow-shadow-btn rounded-[50%] absolute left-[-27px]"></div>
                    <div className="flex flex-col relative sm:pl-[70px] pl-[38px]">
                      <p className="font-poppins font-semibold text-lg leading-[23.22px] text-white flex pt-5">
                        {phase.title}
                      </p>
                      <h4 className="font-poppins font-semibold text-[36px] max-lg:text-3xl max-md:text-2xl leading-[46.44px] text-white flex mb-3">
                        {phase.quarter}
                      </h4>
                      {phase.items.map((item, itemIndex) => (
                        <div
                          className="flex items-center gap-4"
                          key={itemIndex}
                        >
                          <div className="w-[5px] h-[5px] bg-offGray rounded-[50%]"></div>
                          <p className="font-mont font-normal text-lg leading-[32.4px] text-white opacity-70 text-start font-montserrat">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
