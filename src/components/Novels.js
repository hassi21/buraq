import React from "react";
import p1 from "./../pictures/p1.png";
import p2 from "./../pictures/p2.png";
import p3 from "./../pictures/p3.png";
import p4 from "./../pictures/p4.jpg";
import p5 from "./../pictures/p5.png";
import p6 from "./../pictures/p6.png";
const Novels = () => {
  return (
    <div>
      <section className="text-gray-600 bg-[#696969] body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              OUR BEST SELLING NOVELS
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-black">
              Our Novels are liked all around the globe as we are giving our
              100% for its progress and prosperity, Our novels are mostly
              successful because you guys rate us and show your love for
              ALBURAQ.{}
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={p1}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    SOLO SOUL
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    410 pages
                  </h1>
                  <p className="leading-relaxed">
                    Here we are talking about a man who lives all his life alone
                    and progreses in this world with no support
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={p2}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    DARK FOREST
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    230 pages
                  </h1>
                  <p className="leading-relaxed">
                    Wildlife is a very amazing and awesome life If you know how
                    to live it........
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={p3}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE DARK SECRET
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    150 pages
                  </h1>
                  <p className="leading-relaxed">
                    A girl who had all the knowledge about future but she could
                    not............
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={p4}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Coming Soon
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    230 pages
                  </h1>
                  <p className="leading-relaxed">
                    We are coming soon in the Towns of your Country PAKISTAN
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={p5}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE BLOOM
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    230 PAGES
                  </h1>
                  <p className="leading-relaxed">
                    Blooming Flowers are always mind relaxing and they are
                    pleasant for the .............
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={p6}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    MISSING WOMAN
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    180 pages
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Novels;
