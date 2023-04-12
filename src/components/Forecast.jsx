import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import axios from "axios";

const Forecast = () => {
  const { forecast } = useContext(UserContext);
  const data = forecast && forecast.forecastday && forecast.forecastday[0].hour;

  return (
    <div className="flex flex-col">
      <p className="text-center font-extrabold text-3xl sm:text-5xl bg-clip-text text-transparent bg-gradient-to-br from-[#0E8388] to-[#F5F3C1]">Forecast</p>
      <div className="grid grid-flow-row grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 w-full p-10 h-fit gap-4">
        {data &&
          data.map((item, i) => {
            return (
              <div
                className="flex flex-col items-center bg-gradient-to-br from-[#57C5B6] to-[#002B5B] rounded-lg p-2 shadow-sm shadow-black hover:scale-105"
                key={i}
              >
                <div className="flex items-center justify-evenly w-full">
                  <img src={item.condition?.icon} className="" />
                  <p className="text-lg font-sans font-semibold">{item.condition?.text}</p>
                </div>
                <div className="text flex items-center justify-evenly w-full font-mono">
                  <p className="text-dark text-lg font-semibold">{item.time.slice(-5)}</p>
                  <p>{item.temp_c}°C</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Forecast;
