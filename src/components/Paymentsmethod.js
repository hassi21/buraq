import React from "react";
import easypaisa from "./../pictures/easypaisa.png";
import jazzcash from "./../pictures/jazzcash.png";
import { Link } from "react-router-dom";

const Paymentsmethod = () => {
  return (
    <div>
      <div>
        <h1 className="bg-black mx-auto w-2/5 my-auto p-3 text-center text-white text-3xl mb-8 mt-4">
          PAYMENT METHODS
        </h1>
        <button className="flex bg-[#696969] mx-auto w-2/5  mb-8 my-auto p-6">
          <Link
            className=" flex w-1/2 items-center justify-between"
            to={"/Paydet"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
              />
            </svg>
            <span className="text-center font-bold text-">
              CREDIT OR DEBIT CARD
            </span>
          </Link>
        </button>
        <h1
          className="bg-[#696969] mx-auto w-2/5 my-auto p-6 text-center text-white text-3xl mb-8 
        "
        >
          Or
        </h1>
        <button className="flex bg-[#696969] mx-auto w-2/5  my-auto p-6">
          <a
            href="https://easypaisa.com.pk/ "
            target="_blank"
            className="flex w-1/2 items-center justify-between"
            rel="noreferrer"
          >
            <img
              style={{ width: "50px", height: "36px" }}
              src={easypaisa}
              alt=""
            />
            <span className="text-center font-bold"> EASYPAISA US</span>
          </a>
        </button>
        <button className="flex bg-[#696969] mx-auto w-2/5 mt-6 p-6">
          <a
            href="https://www.jazzcash.com.pk/ "
            target="_blank"
            className="flex w-1/2 items-center justify-between"
            rel="noreferrer"
          >
            <img
              style={{ width: "64px", height: "44px" }}
              src={jazzcash}
              alt=""
            />
            <span className="ml-3 font-bold"> Jazzcash US</span>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Paymentsmethod;
