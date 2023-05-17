import React, { useState } from "react";
import Navbar from "./Navbar";
const Contact = () => {
  const [isFeedback, setIsFeedback] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    var { name, email, message } = e.target.elements;
    name = name.value;
    message = message.value;
    email = email.value;
    document.getElementById("myForm").reset();
    setIsFeedback(true);
    setTimeout(() =>setIsFeedback(false), 5000);
    
  }
  return (
    <>
      <Navbar />

      <div>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 flex-col mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameborder="0"
                title="map"
                marginheight="0"
                marginwidth="0"
                //   scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.855683779449!2d73.06049841513583!3d33.63498374705055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df951fe400e221%3A0x7a8552520802df52!2sSaidpur%20Rd%2C%20Block%20E%20Satellite%20Town%2C%20Rawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1669411933090!5m2!1sen!2s"
                //   style={{filter: grayscale(1) contrast(1.2) opacity(0.4);}}
              ></iframe>
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">Please leave your feedback for us</p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a href="/" className="text-indigo-500 leading-relaxed">
                    Alburaq@gmail.com
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">03016804166</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              {!isFeedback ? (
                <form id="myForm" onSubmit={handleSubmit}>
                  <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                    Feedback
                  </h2>

                  <div className="relative mb-4">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="relative mb-4">
                    <label for="email" class="leading-7 text-sm text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="relative mb-4">
                    <label
                      for="message"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                  <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    submit
                  </button>
                </form>
              ) : (
                <h1>ThankYou for your feedback</h1>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
