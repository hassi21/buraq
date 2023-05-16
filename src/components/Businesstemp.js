import React from "react";
import Business1 from "./Business1";
import Business2 from "./Business2";
import Business3 from "./Business3";
import Business4 from "./Business4";
const Businesstemp = () => {
  return (
    <div>
      <div className="w-[100%] flex justify-around bg-[#696969] ">
        <div className="w-3/5 ml-8">
          <Business1 />
        </div>
        <div className="w-3/5">
          <Business2 />
        </div>
      </div>
      <div className="w-[100%] flex justify-around bg-[#696969] pt-8 ">
        <div className="w-3/5 ml-8">
          <Business3 />
        </div>
        <div className="w-3/5">
          <Business4 />
        </div>
      </div>
    </div>
  );
};

export default Businesstemp;
