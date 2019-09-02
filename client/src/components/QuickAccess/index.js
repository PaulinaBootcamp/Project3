import React from "react";
import "./style.css";
import { Col, Row, ContainerCenter } from "../Grid";

function QuickAccess() {
  return (

    <div className="jumbotron text-center">
      <div className="overlay">
      </div>
      <div className="background-image">
            <ContainerCenter >
        <Row>
          <Col size="md-3">             
          </Col>
          <Col size="md-2">              
                  <div><a href="#" class="btn btn-info quick-category-btn">17</a></div>
                  <h2>GRADING QUE</h2>            
          </Col>
          <Col size="md-2">              
                  <div><a href="#" class="btn btn-info quick-category-btn">8</a></div>
                  <h2>OVERDUE</h2>            
          </Col>
          <Col size="md-2">              
                  <div><a href="#" class="btn btn-info quick-category-btn">3</a></div>
                  <h2>OPEN ITEMS</h2>            
          </Col>
           <Col size="md-3">             
          </Col>
        </Row>

      </ContainerCenter></div>

    </div>
  );
}

export default QuickAccess;
