import React from "react";
import whatsapp from "./../pictures/whatsapp.png";

const Whatsapp = () => {
  return (
    <div className=" pl-96">
      <a
        href="https://wa.me/+923146804166"
        className="whatsapp_float mx-auto    "
        target="_blank"
        rel="noopener noreferrer"
      >
        <img style={{ height: "150px" }} src={whatsapp} alt="" />
      </a>
    </div>
  );
};

export default Whatsapp;
