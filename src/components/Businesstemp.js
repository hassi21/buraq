import React from "react";
import Business1 from "./Business1";
import Business2 from "./Business2";
import Business3 from "./Business3";
import Business4 from "./Business4";

const Businesstemp = () => {
  return (
    <div>
      <div>
        <h1 className="bg-[#696969] text-5xl pt-5 text-black text-center">
          SOME BUSINESS CARDS
        </h1>
      </div>
      <div className="w-[100%] flex justify-around bg-[#696969] bmain ">
        <div className="w-2/5 ml-8 b1">
          <Business1 />
        </div>
        <div className="w-2/5 b2">
          <Business2 />
        </div>
      </div>
      <div>
        <h1 className="bg-[#696969] text-5xl text-black text-center">
          SOME PARTY POSTERS
        </h1>
      </div>
      <div className="w-[100%] flex justify-around pt-6 bg-[#696969] bwmain ">
        <div className="w-2/5 ml-8 b3">
          <Business3 />
        </div>
        <div className="w-2/5 b4">
          <Business4 />
        </div>
      </div>
    </div>
  );
};

export default Businesstemp;
