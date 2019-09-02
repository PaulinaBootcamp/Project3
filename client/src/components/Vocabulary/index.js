import React, { Component } from "react";
import Flippy, { FrontSide, BackSide } from "./../lib";
import Button from "react-bootstrap/Button";
import { Col, Row, Container } from "./../Grid";
import "./style.css";
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge'


const VocabularyListItem = ({ title, imageUrl }) => (
  <React.Fragment>
    <Badge variant="light"><Image className="vocab" src={imageUrl} roundedCircle  />
    {title}
  </Badge>  
  </React.Fragment>
);

class Vocabulary extends Component {
  render() {
    return (
            <VocabularyListItem imageUrl={this.props.imageUrl} title={this.props.title}/>
               );
  }
}
export default Vocabulary;