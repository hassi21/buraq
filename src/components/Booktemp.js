import React from "react";
import Book1 from "./Book1";
import Book2 from "./Book2";
import Book3 from "./Book3";
import Book4 from "./Book4";

const Booktemp = () => {
  return (
    <div>
      <div>
        <h1 className="bg-[#696969] text-5xl text-black text-center">
          SOME BOOK COVERS
        </h1>
      </div>
      <div className="w-[100%] flex justify-around bg-[#696969] amain ">
        <div className="w-2/5 ml-8 a1">
          <Book1 />
        </div>
        <div className="w-2/5 pt-4 a2">
          <Book2 />
        </div>
      </div>
      <div>
        <h1 className="bg-[#696969] text-5xl text-black text-center">
          SOME MAGAZINE COVERS
        </h1>
      </div>
      <div className="w-[100%] flex justify-around pt-6 bg-[#696969] awmain ">
        <div className="w-2/5 ml-8 a3">
          <Book3 />
        </div>
        <div className="w-2/5 a4">
          <Book4 />
        </div>
      </div>
    </div>
  );
};

export default Booktemp;
