import React from 'react'
import { POWERED_BY_LIST } from '../utils/helper';

const PowerdBy = () => {
  return (
    <div className="container py-[58px] max-xl:py-10">
      <h2 className="text-5xl font-josefin max-lg:text-4xl text-center max-md:text-3xl max-sm:text-2xl font-bold leading-[61.2px] text-lightPurple mb-4">
        Powered <span className="text-white">By:</span>
      </h2>
      <div className="flex items-center gap-6 mt-[68px] max-lg:mt-10 max-md:mt-5 max-lg:flex-wrap max-lg:justify-center">
        {POWERED_BY_LIST.map((obj, i) => (
          <div
            key={i}
            className="border-light-graident p-[5px] w-full max-w-[312px] h-[181px] flex items-center justify-center rounded-[13px]"
          >
            <div className="w-full">
              <img
                src={obj}
                alt="icons"
                className=''
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PowerdBy