import React from "react";
import { POWERED_BY_LIST } from "../utils/helper";
import Heading from "../common/Heading";

const PowerdBy = () => {
  return (
    <div className="container py-[58px] max-xl:py-10">
      <Heading primaryText="Powered" text="By:" myClass="text-center mb-4" />
      <div className="flex items-center gap-6 mt-[68px] max-lg:mt-10 max-md:mt-5 max-lg:flex-wrap justify-center">
        {POWERED_BY_LIST.map((obj, i) => (
          <div
            key={i}
            className="border-lightBrown border border-solid  rounded-[13px] w-full max-w-[312px] h-[181px]"
          >
            <div className="border-light-graident relative z-10 p-[5px] w-full max-w-[312px] h-[181px] flex items-center justify-center rounded-[13px]">
              <div className="w-full">
                <img
                  src={obj}
                  alt="icons"
                  className="mx-auto pointer-events-none"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PowerdBy;
