import React from "react";

const Whatsapp = () => {
  return (
    <div className="bg-[#696969] mx-auto">
      <a
        href="https://wa.me/+923146804166"
        className="whatsapp_float mx-auto flex flex-wrap justify-between items-center w-3/4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp ml-6 " style={{ fontSize: "95px" }}></i>{" "}
        <span className="text-[48px] mt-3">
          CHAT WITH US(we are only a click away)
        </span>
      </a>
    </div>
  );
};

export default Whatsapp;
