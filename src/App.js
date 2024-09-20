import { useEffect } from "react";
import Aos from "aos";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Header/Header";

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Footer from "./components/UI/Footer";
import {Routes,Route} from "react-router-dom";
import Rout from "./rout";
import Signup from "./components/UI/user/SignInSignUp";
import Admin from "./components/UI/admin/Admin"
import Creat from "./components/UI/admin/Creat"
import Update from "./components/UI/admin/Update"
import About from "./components/UI/About";

import TermsandConditions from "./components/UI/TermsandConditions";
import Login from "./components/UI/admin/Login";
import Sigin from "./components/UI/admin/Sigin";
import { useState } from "react";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  const [user, setLoginUser] = useState({});
  return (
    <div style={{overflowX:"hidden",overflowY:"hidden"}}>
    <Layout />
  
      <Routes>
      <Route path="/" element={<Rout />} />
      <Route path="/Signup" element={<Signup/>} />
     <Route path="/Admin" element= 
            {user && user._id ? (
              <Admin setLoginUser={setLoginUser} />
            ) : (
              <Login setLoginUser={setLoginUser} />
            )} />
      <Route path="/Login" element={<Login setLoginUser={setLoginUser}/>} />
      <Route path="/Sigin" element={<Sigin/>} />
      <Route path="/Creat" element={<Creat/>} />
      <Route path="/TermsandConditions" element={<TermsandConditions/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Update/:id" element={<Update/>} /> 
       </Routes>
      <Footer />
    </div>
  );
}

export default App;
