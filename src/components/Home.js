import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage:
            'url("https://al-buraq-frontend.vercel.app/static/media/main-bg.43d92a018e742bd06622.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <h1 className="text-center pt-8 text-[3rem] text-white font-bold">
          Bringing your ideas to
        </h1>
        <h1 className="text-center text-[3rem] text-white font-bold">Life</h1>
        <h1 className="text-center text-[3rem] text-white">
          Al-Buraq Printing Press
        </h1>

        <div className=" flex justify-between items-center ml-[25%] mt-[5%] w-1/2 mx-2 my-4 text-primary">
          <div>
            <Link to={"/Magazine"} className="mr-5 text-[#BDC8C9]">
              <div className="flex  flex-col justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-[#F6C562]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                  />
                </svg>
                <h1 className="text-[#F6C562] mt-4 text-center">
                  Magazine Covers
                </h1>
              </div>
            </Link>
          </div>
          <div>
            <Link to={"/Portfolio"} className="mr-5 text-[#BDC8C9]">
              <div className="flex  flex-col justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#F6C562]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
                <h1 className="text-[#F6C562] mt-4">Portfolio</h1>
              </div>
            </Link>
          </div>
          <div>
            <Link to={"/Poster"} className="mr-5 text-[#BDC8C9]">
              <div className="flex  flex-col justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#F6C562]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
                  />
                </svg>
                <h1 className="text-[#F6C562] mt-4">Posters</h1>
              </div>
            </Link>
          </div>
          <div>
            <Link to={"/Novels"} className="mr-5 text-[#BDC8C9]">
              <div className="flex  flex-col justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-[#F6C562]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                  />
                </svg>

                <h1 className="text-[#F6C562] mt-4">Novels</h1>
              </div>
            </Link>
          </div>
          <div>
            <Link to={"/Broachers"} className="mr-5 text-[#BDC8C9]">
              <div className="flex  flex-col justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-[#F6C562]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                  />
                </svg>

                <h1 className="text-[#F6C562] mt-4">Broachers</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
