import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import "./style.css"

function NavInstructor() {
  return (
    <div className="secondaryNav">
    <ul className="nav nav-tabs sticky-top notepad">
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Lesson Plan
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/assignments"
          className={window.location.pathname === "/assignments" ? "nav-link active" : "nav-link"}
        >
          Assignments
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/materials"
          className={window.location.pathname === "/materials" ? "nav-link active" : "nav-link"}
        >
          Materials
        </Link>
      </li>
    </ul>
    </div>
  );
}

export default NavInstructor;
