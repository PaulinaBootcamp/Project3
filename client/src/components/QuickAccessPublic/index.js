import React from "react";
import "./style.css";
import { Col, Row, ContainerCenter } from "../Grid";
import EditUnitModal from "./../EditUnitModal";
import { Input, TextArea, FormBtn } from "./../Form";
import AddUnitModal from "./../AddUnitModal";


function QuickAccess() {
  return (
     <div>
      <div className=" text-center">
      <h2> WELCOME TO THE ACADEMY.</h2>
           <h3 className="overlayText">
The Academy at Harvard Square (TAHS) is an institution for global citizenship education.

TAHS (HSA Corporation) is located in the academically prestigious area of Harvard Square. TAHS provides educational programs to international students, professionals, and public/private organizations. With over a decade of experience, TAHS designs programs that enable individuals to achieve their academic and professional goals through acquiring a global mindset.
         </h3></div>
    <div className="jumbotron text-center">
      <div className="overlay">
      </div>
      <div className="background-image">
            <ContainerCenter>
        
      </ContainerCenter></div>

    </div>
    </div>
  );
}

export default QuickAccess;
