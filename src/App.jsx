import React, { createContext, useEffect, useState } from "react";
import Home from "./components/Home";
import SidePanel from "./components/SidePanel";
import axios from "axios";
import Forecast from "./components/Forecast";
const UserContext = createContext();
const App = () => {
  const [Data, setData] = useState([]);
  const [city, setCity] = useState("Lucknow");
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get(
        `http://api.weatherapi.com/v1/current.json?key=6a51b3f734174a7e99495856231004&q=${city}&aqi=yes`
      ),
      axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=6a51b3f734174a7e99495856231004&q=${city}&days=10&aqi=no&alerts=yes`
      ),
    ])
      .then((responses) => {
        setData(responses[0].data);
        setForecast(responses[1].data.forecast);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [city]);

  return (
    <UserContext.Provider value={{ Data, city, setCity, forecast }}>
      <div className="flex flex-col">
        <div className="flex md:flex-row flex-col h-max w-screen ">
          <Home />
          <SidePanel />
        </div>
        <Forecast/>
      </div>
    </UserContext.Provider>
  );
};

export { UserContext };
export default App;
