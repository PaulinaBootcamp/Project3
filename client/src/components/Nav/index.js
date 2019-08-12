import React from "react";
import "./style.css"

function Nav() {
  return (
    <nav className="navbar sticky-top">
   <img src="http://learning.theacademy.ac/wp-content/uploads/2017/10/tAhs-BW-340156-300x138.png" alt="The Academy at Harvard Square"></img>
      <a className="navbar-brand" href="/">
   <button type="button" className="btn login ">Login</button>
      </a>
    </nav>
  );
}

export default Nav;
