import { useContext, useEffect, useState } from "react";
import { BiMap, BiSearch } from "react-icons/bi";
import { UserContext } from "../App";
import axios from "axios";

const Navbar = () => {
  const { Data, setCity } = useContext(UserContext);
  const [curCity, setCurCity] = useState("");

  const handleClick = () => {
    setCity(curCity);
    setCurCity("");
  };

  return (
    <div className="flex sm:px-20 px-8 justify-between items-center">
      <div className="flex flex-col">
        <h1 className="text-3xl lg:text-5xl font-bold text-light_blue">
          {Data.location?.name}
        </h1>
        <div className="flex items-center text-lg lg:text-2xl font-semibold gap-2 text-dark_teal">
          <BiMap />
          {Data.location?.country}
        </div>
      </div>
      <div className="bg-light_blue flex items-center rounded-lg border-2 border-dark_teal px-2">
        <input
          type="text"
          className="rounded-lg bg-light_blue text-dark_gray h-10 w-32 sm:w-40 outline-none"
          onChange={(e) => setCurCity(e.target.value)}
          value={curCity}
          onKeyDown={(e) => {
            e.key === "Enter" && handleClick();
          }}
        />
        <BiSearch
          size={24}
          color="#0E8388"
          className="cursor-pointer hover:scale-105"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Navbar;
