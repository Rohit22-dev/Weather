import React from "react";
import Navbar from "./Navbar";
import Weather from "./Weather";

const Home = () => {
  return (
    <div className="w-full md:w-3/4 h-full flex flex-col py-10">
      <Navbar />
      <Weather />
    </div>
  );
};

export default Home;
