import React, { useState } from "react";
import lg from "../pictures/lg.png";
import { Link, useNavigate } from "react-router-dom";
// import { Link, } from "react-router-dom";
import { isLogin, login } from "../services/api/userAuth";
const Login = () => {
  const navigate = useNavigate();

  const [isLoginVisible, setIsLoginVisible] = useState(true);

  const handleSignupButtonClick = () => {
    // e.preventDefault();
    // console.log("clicked");
    // const response = await login();
    // setIsLoginVisible(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    var { email, password } = e.target.elements;
    email = email.value;
    password = password.value;

    console.log("clicked", email, password, process.env.REACT_APP_API_URL);
    try {
      const response = await login(email, password);
      if (response.data.success) {
        localStorage.setItem("user", JSON.stringify(response.data.data));
        setIsLoginVisible(false);
        navigate("/home");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {isLoginVisible && (
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a
              href="/"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img className="w-8 h-8 mr-2" src={lg} alt="logo" />
              ALBURAQ
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
                </h1>
                <form
                  className="space-y-4 md:space-y-6"
                  action="#"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required=""
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          for="remember"
                          className="text-gray-500 dark:text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="ml-3 text-sm"></div>
                    </div>

                    <Link to="/Signup">
                    
                    <a
                      
                      className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Register?
                    </a>
                    </Link>
                  </div>

                  {/* <Link
                    to={"/Home"}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  > */}
                  <button
                    type="submit"
                    // onClick={handleSignupButtonClick}
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Sign in
                  </button>
                  {/* </Link> */}
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Login;
