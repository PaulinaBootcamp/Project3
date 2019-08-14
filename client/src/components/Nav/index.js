import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar sticky-top navbar-light bg-light">
      <a href="/" className="navbar-left"><img src="http://learning.theacademy.ac/wp-content/uploads/2017/10/tAhs-BW-340156-300x138.png"></img></a>
      <button type="button" class="btn btn-info">Login</button>
    </nav>
  );
}

export default Nav;
