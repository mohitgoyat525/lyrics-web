import React from 'react'
import { GILDED_TOKEN_LIST } from '../utils/helper';

const GildToken = () => {
  return (
    <div className="bg-cover bg-no-repeat bg-center bg-gildTokenBg h-[567px] relative z-[111]">
      <div className="container">
        <h2 className="text-5xl font-josefin max-lg:text-4xl max-md:text-3xl max-sm:text-2xl text-center font-bold leading-[61.2px] text-white mb-4">
          <span className="text-lightPurple">$GILD</span> Token Info
        </h2>
        <div className="flex items-center gap-6 max-xl:flex-wrap max-xl:justify-center mt-[59px] max-xl:mt-10 max-lg:mt-6 max-md:mt-5">
          {GILDED_TOKEN_LIST.map((obj, i) => (
            <div
              key={i}
              className="border-light-graident p-[5px] w-full max-w-[312px] h-[181px] flex items-center justify-center rounded-[13px]"
            >
              <div className="w-full">
                <img src={obj.Image} alt="icons" className={`w-full mx-auto ${i===0?'max-w-[63px] pb-[9px]':i===1?'max-w-[84px] pb-[13px]': 'max-w-[70px] pb-[11px]'}`} />
                <h3 className='text-3xl max-lg:text-2xl text-white font-bold text-center'>{obj.title}</h3>
                <p className='text-center font-normal text-lg leading-[22px] text-white'>{obj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GildToken