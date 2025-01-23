import React, { useState } from "react";
import { SONGS_LIST } from "../utils/helper";

const SoundsList = () => {
  const [uploads, setUploads] = useState(null);
  const [showImage, setShowImage] = useState(false);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgUpload = URL.createObjectURL(file);
      setUploads(imgUpload);
      setShowImage(true);
    }
  };

  const handleRemoveImage = () => {
    setUploads(null);
    setShowImage(false);
  };

    return (
      <div>
        <div className="container">
          <h2 className="text-lightBlack font-semibold text-5xl leading-[58.85px] pt-[65px]">
            Songs
          </h2>
          <div className="flex items-start justify-between w-full gap-[58px] max-lg:flex-col pt-7">
            <div className="flex flex-col w-full ">
              {SONGS_LIST.map((obj, i) => (
                <div className={`w-full ${i === 0 ? "" : "pt-[44px]"}`} key={i}>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col items-start">
                      <h3 className="text-sm leading-6 font-semibold pl-[25px] max-sm:text-xs">
                        {obj.heading}
                      </h3>
                      <h2 className="flex items-center gap-4 text-black font-semibold text-sm leading-6">
                        <span className="text-offGray font-semibold text-sm">
                          {obj.counting}
                        </span>
                        {obj.songName}
                      </h2>
                    </div>
                    <div className="flex items-start gap-[97px] max-md:gap-10 max-sm:gap-5">
                      <div className="flex flex-col">
                        <h3 className="text-sm leading-6 font-semibold max-sm:text-xs">
                          {obj.releaseDate}
                        </h3>
                        <p className="text-lightGray font-normal text-xs leading-6 pr-[50px] max-md:pr-10 max-sm:pr-2">
                          {obj.date}
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-sm leading-6 font-semibold max-sm:text-xs">
                          {obj.time}
                        </h3>
                        <p className="text-lightGray font-normal text-xs leading-6">
                          {obj.playedTime}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="">
              <input
                type="file"
                id="my-input"
                hidden
                onChange={(e) => handleChange(e)}
                multiple
              />
              <label
                htmlFor="my-input"
                className={`cursor-pointer text-white flex items-center justify-center text-center bg-darkSkyBlue relative min-w-[300px] h-[600px] rounded-[20px] ${
                  showImage ? "hidden" : "block"
                }`}
              >
                Add Place
              </label>
              <img
                className={`w-[300px] h-[600px] object-cover rounded-[20px] ${
                  showImage ? "block" : "hidden"
                }`}
                src={uploads}
                alt="Uploaded content"
              />
              <div
                className="flex flex-col gap-2 absolute top-5 right-5 cursor-pointer"
                onClick={handleRemoveImage}
              >
                <span
                  className={`${
                    showImage
                      ? "h-0.5 w-7 bg-white rounded-lg rotate-45 translate-y-1.5"
                      : "h-0 w-0"
                  }`}
                ></span>
                <span
                  className={`${
                    showImage
                      ? "h-0.5 w-7 bg-white rounded-lg -rotate-45 -translate-y-1"
                      : "h-0 w-0"
                  }`}
                ></span>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-solid border-offBlue w-full mt-[45px]"></div>
      </div>
    );
};

export default SoundsList;
