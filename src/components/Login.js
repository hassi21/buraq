import React, { useState } from "react";
import lg from "./../pictures/lg.png";
import { Link } from "react-router-dom";
const Login = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(true);

  const handleLoginButtonClick = () => {
    setIsLoginVisible(false);
  };
  return (
    <div>
      {isLoginVisible && (
        <section
          className="h-100 gradient-form"
          style={{ backgroundColor: "#eee" }}
        >
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-xl-10">
                <div className="card rounded-3 text-black">
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="card-body p-md-5 mx-md-4">
                        <div className="text-center">
                          <img src={lg} style={{ width: "185px" }} alt="logo" />
                        </div>

                        <form>
                          <p>Please login to your account</p>

                          <div className="form-outline mb-4">
                            <input
                              type="email"
                              id="form2Example11"
                              className="form-control"
                              placeholder="Phone number or email address"
                            />
                            <label className="form-label" for="form2Example11">
                              Username
                            </label>
                          </div>

                          <div className="form-outline mb-4">
                            <input
                              type="password"
                              id="form2Example22"
                              className="form-control"
                            />
                            <label className="form-label" for="form2Example22">
                              Password
                            </label>
                          </div>

                          <div className="text-center pt-1 mb-5 pb-1">
                            <Link to={"/Home"}>
                              <button
                                onClick={handleLoginButtonClick}
                                className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                                type="button"
                              >
                                Log in
                              </button>
                            </Link>
                            <a className="text-muted" href="#!">
                              Forgot password?
                            </a>
                          </div>

                          <div className="d-flex align-items-center justify-content-center pb-4">
                            <p className="mb-0 me-2">Don't have an account?</p>
                            <Link to={"/Signup"}>
                              <button
                                onClick={handleLoginButtonClick}
                                type="button"
                                className="btn btn-outline-danger"
                              >
                                Create new
                              </button>
                            </Link>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                      <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                        <h4 className="mb-4">
                          We are more than just a company
                        </h4>
                        <p className="small mb-0">
                          We heartly Welcome you to our printing Press <br />
                          Your Satisfaction will be our first and foremost
                          PRIORITY
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Login;
