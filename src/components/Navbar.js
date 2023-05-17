import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <header className=" bg-[#614F37] text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p- flex-col md:flex-row items-center">
            <Link
              to={"/Home"}
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            >
              <span className="ml-3 text-xl mt-3">AL-Buraq</span>
            </Link>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <Link to={"/Home"} className="mr-5 text-[#BDC8C9]">
                Home
              </Link>
              <Link to={"/About"} className="mr-5 text-[#BDC8C9]">
                About{" "}
              </Link>
              <Link to={"/Services"} className="mr-5 text-[#BDC8C9]">
                Services{" "}
              </Link>
              <Link to={"/Contact"} className="mr-5 text-[#BDC8C9]">
                Contact us{" "}
              </Link>
            </nav>
            <Link to={"/Billing"}>
              <button className="inline-flex items-center bg-[#F6C562] border-0 mb-3 p-2 focus:outline-none hover:bg-[#F6C562] rounded text-base mt-4 md:mt-0">
                Billing
              </button>
            </Link>

            <Link to={"/login"}>
              <button className="inline-flex items-center bg-[#F6C562] ml-5 border-0 py-3 px-2 focus:outline-none hover:bg-[#F6C562] rounded text-base mt-4 md:mt-0">
                Logout
              </button>
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
