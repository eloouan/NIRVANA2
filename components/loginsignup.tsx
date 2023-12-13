// @refresh disable

import React, { useEffect, useState } from "react";
import axios from "axios";

import { useAuth } from "../pages/AuthContext";
import { Link } from 'react-router-dom'

const loginsignup = () => {
  
  const { isLogged, isAdmin, userId, setisLogged, setuserId, setisAdmin} = useAuth();
  const [menuVisible, setMenuVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const toggleLoginPage = () => {
    setLoginVisible(!loginVisible);
  };
  
  const checkUser = () => {
    const name = document.querySelector("#name").value;
    const password = document.querySelector("#password").value;
    console.log(name);
    console.log(password);
    axios.get("https://l1.dptinfo-usmb.fr/~grp11/Tests/connexion2.php?+name="+name+"&password="+password)
      .then(response => {
        if (response.data.loginSuccessful) {
        setisLogged(true);
        setuserId(response.data.user_id);
        if (response.data.isadmin){
          setisAdmin(true);
        }
        } else {
        console.log(response.data.loginSuccessful);
        }
  })
  }
  return (
      <div className="Logincontainer">
        <div className="Loginheader">
            <h3>Login</h3>
          <div className="Logininputs">
          <div className="Loginusername">
            <img className="person" src="person.png"  />
            <input id="name" name="name" type="text" />
            </div>
            <div className="Loginpassword">
            <img className="password" src="password.png" />
            <input type="password" id="password" name="password"/>
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
            <Link to="/"><a onClick={checkUser} >Login</a></Link>
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
              <Link to="/"><button>Map</button></Link>
              <Link to="/admin">
                <button>Admin</button>
              </Link>
            </div>
          </div>
        </div>

        
    </div>
    

      
  );
};

export default loginsignup;

