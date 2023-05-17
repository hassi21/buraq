import React, { useState } from "react";
import Cheezious from "./../pictures/Cheezious.jpg";
import robot from "./../pictures/robot.jpg";
import Ford from "./../pictures/Ford.jpg";
import { Rating, Typography } from "@mui/material";
import Navbar from "./Navbar";
const Magazine = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <Navbar />

      <section className="text-black bg-[#696969] body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="  ml-[12%] lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              CHEEZIOUS PAKISTAN
            </h1>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Before they are finished
              <br className="hidden lg:inline-block" />
              Help them get FINISHED
            </h1>
            <p className="mb-8 leading-relaxed text-white">
              Melt your heart and your taste buds with Cheezious – the ultimate{" "}
              comfort food." "From classic grilled cheese to gourmet creations,
              Cheezious has the perfect sandwich for every craving." "Get your
              cheese fix with Cheezious – the best grilled cheese in town."
              "Cheezious – where every bite is an ooey, gooey, cheesy delight."
              "Satisfy your hunger and your love of cheese with Cheezious – the
              ultimate cheesy experience." "With creative twists on a classic
              favorite, Cheezious is the perfect spot for foodies and cheese
              lovers alike." "The secret to happiness? Grilled cheese from
              Cheezious, of course!" "With fresh ingredients and artisanal
              bread, Cheezious elevates the humble grilled cheese to gourmet
              status."
            </p>
            <div>
              <Typography component="legend">
                <h1 className="text-3xl">Rate US</h1>
              </Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={Cheezious}
            />
          </div>
        </div>
      </section>
      <hr />
      <section className="text-black bg-[#696969] body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover w-3/4 object-center rounded"
              alt="hero"
              src={robot}
            />
          </div>
          <div className=" ml-[15%] lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Am I A ROBOT?
            </h1>
            <h1 className="title-font  sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Exploring the Blurred Line
              <br className="hidden lg:inline-block" />
              Between Human and Machine{" "}
            </h1>
            <p className="mb-8 leading-relaxed text-white">
              "Am I a Robot?" is a thought-provoking question that touches on{" "}
              themes of identity, consciousness, and what it means to be human.
              With advances in technology and the development of artificial
              intelligence, the line between human and machine is becoming
              increasingly blurred. As we create machines that can think, learn,
              and even mimic human emotions, it raises questions about the
              ethics and responsibilities of these creations. Ultimately, the
              answer to the question "Am I a Robot?" may depend on our
              definitions of humanity and consciousness, and the way we choose
              to treat and interact with these technological creations.
            </p>
            <div>
              <Typography component="legend">
                <h1 className="text-3xl">Rate US</h1>
              </Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="text-black bg-[#696969] body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="  ml-[12%] lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Ford Mustang
            </h1>
            <h1 className="title-font w-fit  sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              The Legacy and Innovation{" "}
              <br className="hidden lg:inline-block" />
              of Ford Motor Company{" "}
            </h1>
            <p className="mb-8 leading-relaxed text-white">
              Ford is a popular car brand that has been manufacturing vehicles{" "}
              for over a century. The company was founded in Detroit, Michigan
              in 1903, and has since become one of the largest and most
              successful car manufacturers in the world. Ford produces a wide
              range of car models, including sedans, SUVs, trucks, and sports
              cars. Some of the most popular Ford models include the Mustang,
              the F-150 pickup truck, the Focus, and the Escape SUV. Ford is
              also known for its innovative technologies, such as the Ford SYNC
              system, which allows drivers to control various functions of their
              car using voice commands. Ford has a strong presence in many
              countries, including the United States, the United Kingdom, and
              China, and has a reputation for producing high-quality and
              reliable vehicles.
            </p>
            <div>
              <Typography component="legend">
                <h1 className="text-3xl">Rate US</h1>
              </Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={Ford}
            />
          </div>
        </div>
      </section>
      <hr />
    </div>
  );
};

export default Magazine;
