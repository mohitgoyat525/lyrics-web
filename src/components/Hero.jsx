import React, { useState, useEffect } from "react";
import Header from "../common/Header";

const Hero = () => {
  // State to hold the remaining time
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    
    const calculateTimeLeft = () => {
      const targetDate = new Date();
      targetDate.setHours(11, 0, 0, 0);
      if (new Date() > targetDate) {
        targetDate.setDate(targetDate.getDate() + 1); 
      }

      const now = new Date();
      const timeDifference = targetDate - now;
      if (timeDifference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    };
    const intervalId = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-heroBg bg-center bg-cover bg-no-repeat h-[826px] max-xl:h-full">
      <div className="bg-[#000000CC] py-[21px]">
        <div className="container">
          <Header />
        </div>
      </div>
      <div className="container">
        <h1 className="text-white font-normal text-[72px] max-xl:text-6xl max-lg:text-5xl max-md:text-4xl leading-[91.8px] max-w-[1059px] mx-auto text-center pt-[254px] max-xl:pt-28 max-lg:pt-20 max-md:pt-16">
          There are games... And then there are{" "}
          <span className="text-[#1BABFE]">Gilded</span> Games
        </h1>
        <p className="font-semibold leading-[127%] text-4xl text-white text-center timer">
          <span className="text-[#1BABFE]">{timeLeft.days}d</span> :
          {timeLeft.hours}hr : {timeLeft.minutes}min : {timeLeft.seconds}sec
        </p>
        <p className="font-semibold leading-[127%] text-lg text-white text-center">
          Remaining Presale Time
        </p>
        <div className=" flex items-center gap-6 justify-center mt-[22px] pb-[129px] max-xl:pb-24 max-lg:pb-20 max-md:pb-16">
          <button className="hero-btn min-w-[178px] text-white font-normal text-2xl leading-6 h-[52px] flex items-center justify-center rounded-full gap-2">
            <img src="/assets/images/png/presale-btn-icon.png" alt="icon" className="w-full max-w-[22px]"/>
            Presale
          </button>
          <button className="second-btn border border-solid border-white min-w-[166px] text-white font-normal text-2xl leading-6 h-[52px] flex items-center justify-center rounded-full gap-2">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
