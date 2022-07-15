import React from "react";

const Main = (props) => {
  return (
    <>
      <div className="flex flex-col lg:w-1/3 sm:w-full sm:max-h-96 lg:max-h-full relative text-white rounded-2xl overflow-hidden bg-zinc-900">
        {props.is_day ? (
          <img
            className="h-full w-full object-cover"
            src="./images/day.jpg"
            alt="img"
          />
        ) : (
          <img
            className="h-full w-full object-cover opacity-50"
            src="./images/night.jpg"
            alt="img"
          />
        )}
        <div
          className={`absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center ${
            props.is_day ? "text-black" : "text-white"
          }`}
        >
          <h1 className="text-8xl">
            {props.temp_c}
            <sup>o</sup>C
          </h1>
        </div>
      </div>
    </>
  );
};

export default Main;
