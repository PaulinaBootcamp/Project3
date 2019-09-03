import React from "react";
import "./style.css";
import { Col, Row, ContainerCenter } from "../Grid";
import EditUnitModal from "./../EditUnitModal";
import { Input, TextArea, FormBtn } from "./../Form";
import AddUnitModal from "./../AddUnitModal";


function QuickAccess() {
  return (
    <div>
    <div className="jumbotron text-center">
      <div className="overlay">
      </div>
      <div className="background-image">
            <ContainerCenter>
        <Row>
         <Col size="md-2"> </Col>
          <Col size="md-8">             
                   <div className="overlayText"> WELCOME TO THE ACADEMY</div>
                    <div className="welcometxt"> Please log in to access your materials</div>
             
               
                 
          </Col>
        </Row>

      </ContainerCenter></div>
      </div>

    </div>
  );
}

export default QuickAccess;
