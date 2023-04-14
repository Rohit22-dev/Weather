import React, { useContext, useState } from "react";
import { UserContext } from "../App";
import {
  BsArrowDown,
  BsArrowUp,
  BsCloudSnowFill,
  BsFillCloudRainHeavyFill,
  BsSnow,
} from "react-icons/bs";

const SidePanel = () => {
  const { forecast } = useContext(UserContext);
  const data = forecast && forecast.forecastday;
  let time = new Date().toLocaleTimeString();
  const date = new Date().toLocaleDateString();
  const [ltime, setLtime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setLtime(time);
  };

  setInterval(updateTime, 1000);

  return (
    <div className=" m-8 rounded-lg md:w-1/4 h-[40rem] md:h-screen flex flex-col items-center p-5 py-16 bg-dark_teal">
      <p className="text-2xl font-mono font-semibold text-rose-400">{ltime}</p>
      <p className="text-lg font-mono font-semibold text-rose-400">{date}</p>
      <div className="flex flex-wrap gap-5 justify-center w-full mt-8 overflow-scroll">
        {data &&
          data.map((item, i) => {
            return (
              <div className="flex w-full shadow-inner shadow-dark rounded-lg">
                <img src={item.day.condition.icon} className="w-12 m-5" />
                <div
                  className="flex flex-col items-center w-full  p-2 px-4 cursor-pointer"
                  key={i}
                >
                  <p className="text-md font-mono text-dark" key={i}>
                    {item.date}
                  </p>
                  <div className="flex w-full justify-around">
                    <div className="flex items-center">
                      <BsArrowUp />
                      {item.day.maxtemp_c}°C
                    </div>
                    <div className="flex items-center ">
                      <BsArrowDown />
                      {item.day.mintemp_c}°C
                    </div>
                  </div>
                  <div className="flex  w-full justify-around">
                    <div className="flex items-center gap-2">
                      <BsFillCloudRainHeavyFill />
                      {item.day.daily_chance_of_rain}
                    </div>
                    <div className="flex items-center gap-2">
                      <BsSnow />
                      {item.day.daily_chance_of_snow}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SidePanel;
