import React from "react";
import "./style.css"
import { Col, Row, Container } from "../Grid";
import Jumbotron from "../Jumbotron";

function QuickAccessInstructor() {
  return (
<div className="jumbotron text-center">
  <div className="overlay">
  </div>
  <div className="background-image">
  </div>
  <div className="caption">
   <Container fluid>
        <Row>
          <Col size="md-3">
          </Col>
          <Col size="md-2">
 <button type="button" className="btn btn-circle btn-xl">17</button>
          <p>Submitted</p>
          </Col>
           <Col size="md-2">
 <button type="button" className="btn btn-circle btn-xl">3</button>
          <p>Overdue</p>
          </Col>
           <Col size="md-2">
 <button type="button" className="btn btn-circle btn-xl">17</button>
          <p>Submitted</p>
          </Col>
           <Col size="md-3">
          </Col>
        </Row>
      </Container>
  </div>
</div>
  );
}

export default QuickAccessInstructor;
