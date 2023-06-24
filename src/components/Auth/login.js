import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { auth, provider } from "../../firebase";
  import "./register.css";
  import swal from "sweetalert";
  
  function Login() {
    const history = useNavigate();
    const [register, setRegister] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
  
    function validateEmail(email) {
      const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
      if (reg.test(email) === false) {
        return false;
      } else return true;
    }
  
    const handleSignIn = () => {
      setError();
      setLoading(true);
      if (email === "" || password === "") {
        setError("Required field is missing");
        setLoading(false);
      } else if (!validateEmail(email)) {
        setError("Email is malformed");
        setLoading(false);
      } else {
        signInWithEmailAndPassword(auth, email, password)
          .then((res) => {
           
            swal("You are logged in successfully!", "Welcome to ERP ", "success", {
              timer: 2000,
            });
            history("/");
            setLoading(false);
          })
          .catch((error) => {
            console.log(error.code);
            setError(error.message);
            setLoading(false);
          });
      }
    };
  
   
    return (
      <div className="reg">
        <div className="reg-container">
          <p style={{ color: "black", opacity: 1.0, fontWeight: "bolder" }}>
            Register Yourself Here
          </p>
  
          <div className="reg-auth-login">
            <div className="reg-auth-login-container">
             
                  <div className="reg-input-field">
                    <p>Email</p>
                    <input type="text"    onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                  <div className="reg-input-field">
                    <p>Password</p>
                    <input type="password"    onChange={(e) => setPassword(e.target.value)}/>
                  </div>
                  <button
                   className="reg-input-button"
                    onClick={handleSignIn}
                    disabled={loading}
                    style={{
                      marginTop: "10px",
                    }}
                  >
                    Login
                  </button>
             
  
            
            </div>
          </div>
          {error !== "" && (
            <p
              style={{
                color: "red",
                fontSize: "14px",
              }}
            >
              {error}
            </p>
          )}
        </div>
      </div>
    );
  }
  
  export default Login;
  