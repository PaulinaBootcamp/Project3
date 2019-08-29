import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";

function NavStudent() {
  return (
    <ul className="nav nav-tabs sticky-top notepad">
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
         My Classes
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/assignments"
          className={window.location.pathname === "/assignments" ? "nav-link active" : "nav-link"}
        >
          Homework
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/materials"
          className={window.location.pathname === "/materials" ? "nav-link active" : "nav-link"}
        >
          Study Materials
        </Link>
      </li>
    </ul>
  );
}

export default NavStudent;
