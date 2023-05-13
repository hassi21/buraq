import React from "react";

const About = () => {
  return (
    <div>
      <h1 className=" bg-[#696969] text-4xl font-bold pt-8 pl-4">
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
          <h1 className="bg-[#696969] text-center font-extrabold pt-3 pb-4">
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
          </h1>
        </div>
        <div className="pr-[10%] mt-[15%]">
          <i
            className="fa fa-quote-right"
            style={{ color: "black", fontSize: "56px" }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default About;
