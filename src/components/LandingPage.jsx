import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import GetStarted from "./GetStarted";
import GetInTouch from "./GetInTouch";
function LandingPage() {
  return (
    <>
    <Header />
    <GetStarted />
    <GetInTouch />
    </>
  //   <div>
  //     {" "}
  //     <div
  //       className="landing-page-hero-section position-relative "
  //       style={{
  //         backgroundColor: "#F2F5FE",

  //         borderRadius: 12,
  //       }}
  //     >
  //       <div className="d-block" style={{ marginTop: "5rem" }}>
  //         <span
  //           style={{
  //             color: "#4666FF",
  //             fontWeight: "500",
  //             fontSize: "26px",
  //             fontFamily: "Poppins",
  //           }}
  //         >
  //           Dispatch One.
  //         </span>
  //       </div>
  //       <div
  //         className="d-block mb-1  mt-3"
  //         style={{ borderBottom: "none", paddingBottom: "0rem", zIndex: 1 }}
  //       >
  //         <span
  //           style={{
  //             lineHeight: "75px",
  //             color: "#333333",
  //             fontSize: "45pt",
  //             fontWeight: "600",
  //             fontFamily: "Poppins",
  //           }}
  //         >
  //           Erp.
  //         </span>
  //       </div>
  //       <div className="d-block hero-section-text mb-2">
  //         <span
  //           style={{
  //             color: "#9AA8B7",
  //             fontWeight: "500",
  //             fontSize: "26px",
  //             fontFamily: "Poppins",
  //           }}
  //         >
  //           Build, grow & manage your business.{" "}
  //           <div className="text-center"> Faster & easier than ever.</div>
  //         </span>
  //       </div>
  //       <div
  //         className="hero-section-text mb-5"
  //         style={{ bottom: "6rem", fontFamily: "Poppins" }}
  //       >
  //         <Link to="/login">
  //           {" "}
  //           <button className="landing-page-get-started-button btn-primary">
  //             Get Started
  //           </button>
  //         </Link>
  //       </div>
  //     </div>
  //   </div>
  );
}

export default LandingPage;
