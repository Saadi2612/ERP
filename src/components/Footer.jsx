import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer row">
      <div className="col-sm-6">
        <h3>About Us</h3>
        <p>
        Our mission is to help organizations streamline their operations and make data-driven decisions through the use of cutting-edge technology.
        </p>
      </div>
      <div className="col-sm-6">
        <h3>Contact Us</h3>
        <p>
          <FaPhone /> +(92)3351499049
        </p>
        <p>
          <FaMapMarkerAlt /> 58 Airline Housing Society, Lahore
        </p>
        <div className="social-icons">
          <a href="https://www.facebook.com">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
