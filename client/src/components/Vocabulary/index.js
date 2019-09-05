import React, { Component } from "react";
import Flippy, { FrontSide, BackSide } from "./../lib";
import Button from "react-bootstrap/Button";
import { Col, Row, Container } from "./../Grid";
import "./style.css";
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge'


const VocabularyListItem = ({ title, imageUrl }) => (
  <React.Fragment>
    <Badge variant="light"><Image className="vocab" src={imageUrl}   />
    {title}
  </Badge>  
  </React.Fragment>
);

class Vocabulary extends Component {
  render() {
    return (
      <Container>
      <Row>
        <Col size="md-6 sm-12">
            <VocabularyListItem imageUrl={this.props.imageUrl} title={this.props.title}/>
               
               </Col>
               </Row>
               </Container>
               );
  }
}
export default Vocabulary;