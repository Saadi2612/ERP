import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { auth, provider, db } from "../firebase";
import { ref, set } from "firebase/database";

import swal from "sweetalert";


const Signup = () => {
  
  const history = useNavigate();
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [lname, setLname] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function validateEmail(email) {
    const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email) === false) {
      return false;
    } else return true;
  }

  const handleGoogleSignIN = () => {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((res) => {
        swal(
          "You are logged in successfully!",
          "Welcome to AskCUI ",
          "success"
        );
        setLoading(false);
        // console.log(res);

        history("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        swal(
          "You are logged in successfully!",
          "Welcome to AskCUI ",
          "success"
        );
        history("/");
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.code);
        setError(error.message);
        setLoading(false);
      });
  };

  const handleRegister = () => {
    setError("");
    setLoading(false);
    if (email === "" || password === "" || username === "") {
      setError("Required field is missing.");
      setLoading(false);
    } else if (!validateEmail(email)) {
      setError("Email is malformed");
      setLoading(false);
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          let user = {
            email: res.user.email,
            password: password,
            fname: username,
            lname: lname,
          };
          set(ref(db, "usersList/" + res.user.uid), user).then((res) => {
            console.log(res);
            swal(
              "You are logged in successfully!",
              "Welcome to AskCUI ",
              "success"
            );
            history("/");
          });

          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
          setLoading(false);
        });
    }
  };
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
        
                Sign up
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
              <div className="form-group">
                <input
                  type="password"
                  className="form-control mt-4"
                  placeholder="Confirm Password"
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
                <button  className="btn btn-primary mt-4 w-100 d-flex justify-content-center">
                  Signup
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
                  Already have an account?
                </span>{" "}
                <Link
                  className="link_Style mx-1"
                  style={{
                    fontWeight: 600,
                    color: "#4858E6",
                    fontFamily: "Poppins",
                    fontSize: "13px",
                  }}
                  to="/login"
                >
                  Login
                </Link>
              </div>
            
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
