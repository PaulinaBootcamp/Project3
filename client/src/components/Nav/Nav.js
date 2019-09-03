import React from "react";
import Login from "../Login/Login";

function Nav(props) {
  return (

     <nav className="navbar sticky-top navbar-light bg-light">
      <a href="/" className="navbar-left"><img src="http://learning.theacademy.ac/wp-content/uploads/2017/10/tAhs-BW-340156-300x138.png" alt="Logo"></img></a>
        <Login
        user={props.user}
        onLogin={props.onLogin}
        onLogout={props.onLogout}
      />
    </nav>


  );
}

export default Nav;
