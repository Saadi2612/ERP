import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section className="SignUp_section_class">
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-sm-12 col-lg-4 col-md-8 ">
            <div className="text-center mb-4 ">
              <span
                style={{
                  fontWeight: 600,
                  fontSize: "1.4rem",
                  color: "#333333",
                  marginBottom: "2px",
                  fontFamily: "Poppins",
                }}
              >
                
                Login
              </span>{" "}
            </div>
            <form>
              <div className="form-group">
                <input
                  className={"form-control  "}
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={email}
                  style={{
                    border: "3px solid #F2F5FE",
                    borderRadius: "10px",
                    fontFamily: "Poppins",
                    fontSize: "13px",
                  }}
                  

                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control mt-4"
                  placeholder="Password"
                  name="password"
                  value={password}
                  style={{
                    border: "3px solid #F2F5FE",
                    borderRadius: "10px",
                    fontFamily: "Poppins",
                    fontSize: "13px",
                  }}
                  required
                />
              </div>

              <div className=" d-flex justify-content-center w-100">
                <button className="btn btn-primary mt-4 w-100 d-flex justify-content-center">
                  Login
                </button>
              </div>

              
              <div className="text-center mt-4">
                <span
                  style={{
                    fontWeight: 600,
                    color: "#616161",
                    fontFamily: "Poppins",
                    fontSize: "13px",
                  }}
                >
                  {" "}
                  Don`t have an account?
                </span>{" "}
                <Link
                  className="link_Style mx-1"
                  style={{
                    fontWeight: 600,
                    color: "#4858E6",
                    fontFamily: "Poppins",
                    fontSize: "13px",
                  }}
                  to="/signup"
                >
                  Sign up
                </Link>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
