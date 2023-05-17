import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div>
      <Navbar />

      <h1 className=" bg-[#696969] text-white text-4xl font-bold pt-8 pl-4">
        Our Priorities:
      </h1>
      <div className="flex bg-[#696969] text-center font-semibold pt-8 pb-4 justify-around">
        <div className="pl-[10%]">
          <i
            className="fa fa-quote-left"
            style={{ color: "black", fontSize: "56px" }}
          ></i>
        </div>
        <div>
          <p className="bg-[#696969] text-center text-white font-extrabold pt-3 pb-4">
            Welcome to our printing press! We are a team of skilled
            professionals <br />
            who are dedicated to providing high-quality printing services for
            all
            <br />
            of your needs. With years of experience in the industry, we have
            <br />
            become experts in our field and are committed to delivering
            <br />
            exceptional results to all of our clients. Whether you need business
            <br />
            cards, flyers, brochures, or any other printed materials, we have
            the
            <br />
            tools and expertise to bring your vision to life. Our
            state-of-the-art
            <br />
            equipment and attention to detail ensure that your projects are
            <br />
            completed accurately and on time. We pride ourselves on providing
            <br />
            outstanding customer service and building lasting relationships with
            <br />
            our clients. Contact us today to discuss your printing needs and let
            <br />
            us help you achieve your goals!
          </p>
        </div>
        <div className="pr-[10%] mt-[15%]">
          <i
            className="fa fa-quote-right"
            style={{ color: "black", fontSize: "56px" }}
          ></i>
        </div>
      </div>

      <section className="text-gray-600 body-font">
        <h1 className="bg-black p-8 text-center text-white text-4xl ">
          MEET OUR TALENTED TEAM
        </h1>
        <div className="container bg-[#696969] px-5 bg- mx-auto">
          <div className="flex flex-wrap pt-4 -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://static.vecteezy.com/system/resources/previews/001/840/618/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg    "
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">
                SABA MUQADDAS
              </h2>
              <p className="leading-relaxed text-white text-base">
                EMAIl:Muqadassaba04@gmail.com <br /> CONTACT:03146804166
              </p>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://static.vecteezy.com/system/resources/previews/001/840/618/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">
                SYEDA UROOJ ZARA
              </h2>
              <p className="leading-relaxed text-white text-base">
                EMAIL:Rooojizahra@gmail.com
                <br /> CONTACT:031658677395
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
