import React,{useEffect,useState} from "react";
import { BrowserRouter as Router,Switch, Route, Routes, Redirect, useNavigate } from "react-router-dom";
import "./App.css"; // Import the App.css file
import Footer from "./components/Footer";
import Header from "./components/Header";
//import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import LandingPage from "./components/LandingPage";
import ProjectManagement from "./components/Services/ProjectManagement";
import Dashboard from "./components/Dashboard/Dashboard";
import Contact from "./components/Contact";
import InventoryManagement from "./components/Services/InventoryManagement";
import CostEstimation from "./components/Services/CostEstimation/CostEstimation";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Register from "./components/Auth/register";
import Login from "./components/Auth/login";

import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./feature/userSlice";

function App() {
  const user = useSelector(selectUser);
  console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
      
    });
  }, [dispatch]);


 
  return (
    <div className="App">
      <Navbar />
      <Router>
    
        <Routes>
        {/* <Route exact path="/" element={<Register />} /> */}
       
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route exact path="dashboard" element={<Dashboard />} />
          <Route
            exact
            path="/projectmanagement"
            element={<ProjectManagement />}
          />
          <Route
            exact
            path="/inventorymanagement"
            element={<InventoryManagement />}
          />
          <Route exact path="/costestimation" element={<CostEstimation user={user} />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/projects" element={<Projects />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
