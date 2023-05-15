import React from "react";

const Whatsapp = () => {
  return (
    <div>
      <a
        href="https://wa.me/+923146804166"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp ml-6 " style={{ fontSize: "95px" }}></i>{" "}
        <span className="text-[48px] mb-8">CHAT WITH US</span>
      </a>
    </div>
  );
};

export default Whatsapp;
