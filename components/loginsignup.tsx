import React, { useEffect, useState } from "react";

import { Link } from 'react-router-dom'

const loginsignup = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const toggleLoginPage = () => {
    setLoginVisible(!loginVisible);
  };
  return (
      <div className="Logincontainer">
        <div className="Loginheader">
            <h3>Login</h3>
          <div className="Logininputs">
          <div className="Loginusername">
            <img className="person" src="person.png"  />
            <input type="text" />
            </div>
            <div className="Loginpassword">
            <img className="password" src="password.png" />
            <input type="password" />
            </div>
         </div>
         <div className="Loginbuttons">
                <div className="Loginremember">
                    <input type="checkbox" className="Logincheckbox"/>
                    <p>Remember me</p>
                </div>
                <p>Forgot Password</p>
            </div>
            <div className="Loginbtn-box">
                <a href="#" target="_blank">Login</a>
            </div>
            <div className="Loginregister">
                <p>Don't have an account?
                    <a href="#" target="_blank">
                        <span>Register</span>
                    </a>
                </p>
            </div>
        </div>
        <div className="menu-button" style={{ bottom: "20px", right: "10px" }}>
        <div className="wrapper">
          <input type="checkbox" />
          <div className="fab"></div>
          <div className="fac">
              <Link to="/login">
                  <button onClick={toggleLoginPage} className="login-button"></button>
              </Link>
              <Link to="/"><button>Map</button></Link>
            </div>
          </div>
        </div>

        
    </div>
    

      
  );
};

export default loginsignup;

