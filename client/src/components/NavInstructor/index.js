import React from "react";
import "./style.css"

function NavInstructor() {
  return (
    <div>
 <nav className="navbar navbar-expand-sm sticky-top"> 
   
  <ul className="navbar-nav">
     <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
      Classroom
      </a>
    </li>  
    <li className="nav-item">
      <a className="nav-link" href="#section1">Lesson Plans</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#section2">Materials</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#section3">Assignments</a>
    </li>
  </ul>
</nav>

<div id="section1" className="container-fluid bg-secondary" >
  <h1>Lesson Plans</h1>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
</div>
<div id="section2" className="container-fluid bg-secondary" >
  <h1>Materials</h1>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
</div>
<div id="section3" className="container-fluid bg-secondary" >
  <h1>Assignments</h1>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
</div>
</div>
  );
}

export default NavInstructor;
