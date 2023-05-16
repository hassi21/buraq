import React from "react";
import b1 from "./../pictures/b1.jpeg";
import b2 from "./../pictures/b2.jpeg";
import b3 from "./../pictures/b3.jpeg";
import b4 from "./../pictures/b4.jpeg";
import b5 from "./../pictures/b5.jpeg";
import b6 from "./../pictures/b6.jpeg";
import b7 from "./../pictures/b7.jpeg";
import b8 from "./../pictures/b8.jpeg";
import b9 from "./../pictures/b9.jpeg";
import b10 from "./../pictures/b10.jpeg";
import b11 from "./../pictures/b11.jpeg";
import b12 from "./../pictures/b12.jpeg";
import Navbar from "./Navbar";

const Broachers = () => {
  return (
    <div>
      <Navbar />

      <div className="flex w-full mb-20 flex-wrap">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
          SOME OF OUR Broachers
        </h1>
        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
          Overall, Broachers are a versatile and effective way to communicate a
          message or promote a product or event. With the right design and
          distribution, they can be a powerful tool for reaching a wide
          audience.
        </p>
      </div>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={b1}
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={b2}
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={b3}
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={b4}
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={b5}
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={b6}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={b7}
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={b8}
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={b9}
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={b10}
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={b11}
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={b12}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Broachers;
