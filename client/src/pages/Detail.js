import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

import AddUnitModal from "../components/AddUnitModal";
import Units from "../pages/Units";
import DeleteBtn from "../components/DeleteBtn";

class Detail extends Component {
  constructor(props) {
    super(props);
  }

   updateUnit = () => {
  API.updateUnit({
        id:this.props.match.params.id,
        title: this.state.title,
        section1: this.state.section1,
        section2: this.state.section2,
        section3: this.state.section3
      })
      .then(res => {})
      .catch(err => console.log(err));
  };

    handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    console.log("Details title prop " + this.props.title)
    return (
         <Container >    
      {this.props.title ? (
        <Row>
         <Col size="md-3"> </Col>
          <Col size="md-12">
              <h1>
               {this.props.title}
              </h1>
             <article>
              <h3>Section 1</h3>
              <p>
                {this.props.section1}
              </p>
            </article>
            <article>
              <h3>Section 2</h3>
              <p>
                {this.props.section2}
              </p>
            </article>
            <article>
              <h3>Section 3</h3>
              <p>
                {this.props.section3}
              </p>
            </article>
            </Col>  
            </Row>
             ) : (
                <h1>Select Unit to Show Detail</h1>
              )}
      </Container>
    );
  }
}

export default Detail;
