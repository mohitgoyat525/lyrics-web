import React from "react";

const Heading = ({
  primaryText,
  secondaryText,
  gradientText,
  text,
  myClass,
}) => {
  return (
    <h2
      className={`${myClass} font-josefin font-bold text-5xl max-md:text-4xl max-md:leading-9 max-sm:text-3xl leading-[61.2px] text-white`}
    >
      <span className="gradient-text">{primaryText}</span>
      <span className="gradient-text">{gradientText}</span>
      {text} <span className="gradient-text">{secondaryText}</span>
    </h2>
  );
};

export default Heading;
