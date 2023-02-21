import React from 'react'

const Signup = () => {
  return (
    <section className=" gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-dark text-white"
              style={{ borderRadius: "1rem " }}
            >
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Signup</h2>
                  <p className="text-white-50 mb-5">
                    Please enter your login and password!
                  </p>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="text"
                      id="typeUserX"
                      className="form-control border form-control-lg"
                    />
                    <label
                      className="form-label px-2"
                      style={{
                        background: "#332D2D",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "2rem",
                        marginTop: "0.5rem",
                        paddingBottom: "0.8rem",
                      }}
                      htmlFor="typeUserX"
                    >
                      Username
                    </label>
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="text"
                      id="typeFirstX"
                      className="form-control border form-control-lg"
                    />
                    <label
                      className="form-label px-2"
                      style={{
                        background: "#332D2D",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "2rem",
                        marginTop: "0.5rem",
                        paddingBottom: "0.8rem",
                      }}
                      htmlFor="typeFirstX"
                    >
                      Firstname
                    </label>
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="text"
                      id="typeLastX"
                      className="form-control border form-control-lg"
                    />
                    <label
                      className="form-label px-2"
                      style={{
                        background: "#332D2D",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "2rem",
                        marginTop: "0.5rem",
                        paddingBottom: "0.8rem",
                      }}
                      htmlFor="typeLastX"
                    >
                      Lastname
                    </label>
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="typeEmailX"
                      className="form-control border form-control-lg"
                    />
                    <label
                      className="form-label px-2"
                      style={{
                        background: "#332D2D",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "2rem",
                        marginTop: "0.5rem",
                        paddingBottom: "0.8rem",
                      }}
                      htmlFor="typeEmailX"
                    >
                      Email
                    </label>
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="password"
                      id="typePasswordX1"
                      className="form-control border form-control-lg"
                    />
                    <label
                      className="form-label px-2"
                      style={{
                        background: "#332D2D",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "2rem",
                        marginTop: "0.5rem",
                        paddingBottom: "0.8rem",
                      }}
                      htmlFor="typePasswordX1"
                    >
                      Password
                    </label>
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="password"
                      id="typePasswordX2"
                      className="form-control border form-control-lg"
                    />
                    <label
                      className="form-label px-2"
                      style={{
                        background: "#332D2D",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "2rem",
                        marginTop: "0.5rem",
                        paddingBottom: "0.8rem",
                      }}
                      htmlFor="typePasswordX2"
                    >
                      Password2
                    </label>
                  </div>
                  <p className="small mb-5 pb-lg-2">
                    <a className="text-white-50" href="#!">
                      Forgot password?
                    </a>
                  </p>
                  <button
                    className="btn btn-outline-light btn-lg px-5"
                    type="submit"
                  >
                    Login
                  </button>
                  <div className="d-flex justify-content-center text-center mt-4 pt-1">
                    <a href="#!" className="text-white">
                      <i className="fab fa-facebook-f fa-lg" />
                    </a>
                    <a href="#!" className="text-white">
                      <i className="fab fa-twitter fa-lg mx-4 px-2" />
                    </a>
                    <a href="#!" className="text-white">
                      <i className="fab fa-google fa-lg" />
                    </a>
                  </div>
                </div>
                <div>
                  <p className="mb-0">
                    Don't have an account?{" "}
                    <a href="#!" className="text-white-50 fw-bold">
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



export default Signup