import React, { useContext } from "react";
import { UserContext } from "../App";
import { BsDropletFill, BsWind, BsSpeedometer } from "react-icons/bs";
import sunrise from "../assets/sunrise.png";
import sunset from "../assets/sunset.png";

const Weather = () => {
  const { Data, forecast } = useContext(UserContext);

  return (
    <div className="grid grid-flow-row md:grid-cols-2 grid-col-1 h-screen p-8 gap-4">
      {/* Main weather  */}
      <div className="flex flex-col shadow-md shadow-dark p-8 my-auto bg-gradient-to-br from-[#0E8388] to-[#F5F3C1] h-full md:h-2/3 rounded-lg ">
        <p className="text">{Data?.location?.region}</p>
        <div className="flex flex-col lg:flex-row w-full flex-1 justify-evenly lg:justify-between items-center">
          <div className="flex flex-col">
            <p className="text-7xl font-bold">{Data?.current?.temp_c}°C</p>
            <p className="ml-2 text-xl font-semibold">
              {Data?.current?.condition.text}
            </p>
          </div>
          <img
            src={`https://cdn.weatherapi.com/weather/128x128/${
              Data?.current?.is_day === 1 ? "day" : "night"
            }/${Data?.current?.condition.icon.slice(-7)}`}
            className="w-24"
          />
        </div>

        <div className="flex gap-1.5 w-full mt-auto">
          <div className="grid place-items-center grow bg-gradient-to-br from-dark_teal to-dark_gray py-4 rounded-lg  gap-2">
            <BsDropletFill size={20} color="#CBE4DE" />
            <p>Humidity {Data?.current?.humidity}</p>
          </div>
          <div className="grid place-items-center grow bg-gradient-to-br from-dark_teal to-dark_gray py-4 rounded-lg gap-2">
            <BsSpeedometer size={20} color="#CBE4DE" />
            Pressure {Data?.current?.pressure_mb}
          </div>
          <div className="grid place-items-center flex-col grow bg-gradient-to-br from-dark_teal to-dark_gray py-4 rounded-lg gap-2">
            <BsWind size={20} color="#CBE4DE" />
            Wind speed {Data?.current?.wind_kph}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-4">
        {/* sunrise and sunset  */}
        <div className="flex flex-col shadow-md shadow-dark justify-around items-center bg-gradient-to-br from-[#0E8388] to-[#E49393] w-full h-full md:h-1/3 rounded-lg">
          <h1 className="font-bold text-2xl text-dark">Sunrise/Sunset</h1>
          <div className="flex w-full justify-evenly">
            <div className="space-y-4">
              <img src={sunrise} />
              <p className="text-lg font-semibold">
                {forecast &&
                  forecast.forecastday &&
                  forecast.forecastday[0].astro &&
                  forecast?.forecastday[0]?.astro?.sunrise}
              </p>
            </div>
            <div className="space-y-4">
              <img src={sunset} />
              <p className="text-lg font-semibold">
                {forecast &&
                  forecast.forecastday &&
                  forecast.forecastday[0].astro &&
                  forecast.forecastday[0].astro.sunset}
              </p>
            </div>
          </div>
        </div>

        {/* Air quality  */}
        <div className="flex flex-col shadow-md shadow-dark p-2 justify-around items-center bg-gradient-to-br from-[#0E8388] to-[#E49393] w-full h-full md:h-1/3 rounded-lg">
          <h1 className="font-bold text-2xl text-dark">Air Quality</h1>
          <div className="flex flex-wrap gap-4 justify-center">
            {["no2", "o3", "s02", "pm2_5", "pm10", "uv"].map((item, i) => {
              return (
                <div
                  className="flex gap-1 p-1 px-2 rounded-full bg-gradient-to-r from-dark_teal to-dark_gray"
                  key={i}
                >
                  <p className="text font-semibold">{item.toUpperCase()}:</p>
                  <p className="text">
                    {item === "uv"
                      ? Data?.current?.uv
                      : Data?.current?.air_quality.o3.toFixed(2)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
