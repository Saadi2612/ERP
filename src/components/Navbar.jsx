import React from "react";
import Logo from "../assets/footer-logo-80x34.png";
import { auth, provider, db } from "../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../feature/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
const Navbar = () => {
  const user = useSelector(selectUser);

  const SignOut = () => {
    auth.signOut();
    swal("Your are logged out successfully!", " ", "success", { timer: 2000 });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container" style={{ marginLeft: "3rem" }}>
        <a class="navbar-brand" href="/">
          <img src={Logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          style={{ marginLeft: "18rem" }}
        >
          <ul className="navbar-nav ml-auto justify-content-center">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/projects">
                Projects
              </a>
            </li>
            {user ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  aria-haspopup="true"
                  href="/services"
                >
                  Services
                </a>

                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  id="navbarDropdown"
                >
                  {user.displayName === "Client" ? (
                    <>
                      {" "}
                      <a className="dropdown-item" href="/costestimation">
                        Cost Estimation
                      </a>
                    </>
                  ) : (
                    <>
                      {" "}
                      <a className="dropdown-item" href="/costestimation">
                        Cost Estimation
                      </a>
                      <a className="dropdown-item" href="/projectmanagement">
                        Project Management
                      </a>
                      <a className="dropdown-item" href="/inventorymanagement">
                        Inventory Management
                      </a>
                    </>
                  )}
                </div>
              </li>
            ) : (
              <li className="nav-item active">
                <a className="nav-link" href="/services">
                  Services
                </a>
              </li>
            )}

            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div style={{ marginLeft: "16rem" }}>
          <ul className="navbar-nav ml-auto justify-content-center">
            {user ? (
              <li className="nav-item">
                <a className="nav-link">
                  {user.displayName}: {user.email}
                </a>
              </li>
            ) : (
              <li className="nav-item active">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}

            {user ? (
              <li className="nav-item">
                <button className="nav-link" onClick={SignOut}>
                  Logout
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/signup">
                  Signup
                </a>
              </li>
            )}
            {user && (
              <li className="nav-item">
                <a className="nav-link" href="/dashboard">
                  Dashboard
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
