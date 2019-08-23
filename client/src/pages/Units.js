import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import EditBtn from "../components/EditBtn";
import AddBtn from "../components/AddBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

import AddUnitModal from "../components/AddUnitModal";

class Units extends Component {

  state = {
    units: [],
    title: "",
    section1: "",
    section2: "",
    section3: ""
  };

  componentDidMount() {
    this.loadUnits();
  }

  loadUnits = () => {
    API.getUnits()
      .then(res =>
        this.setState({ units: res.data, section1: "", section2: "", section3: "" })
      )
      .catch(err => console.log(err));
  };

  deleteUnit = id => {
    API.deleteUnit(id)
      .then(res => this.loadUnits())
      .catch(err => console.log(err));
  };

    updateUnit = id => {
  API.saveUnit({
        title: this.state.title,
        section1: this.state.section1,
        section2: this.state.section2,
        section3: this.state.section3
      })
      .then(res => this.loadUnits())
      .catch(err => console.log(err));
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    console.log(this.state.title, this.state.section1, this.state.section1)
    
    if (this.state.title && this.state.section1) {
      API.saveUnit({
        title: this.state.title,
        section1: this.state.section1,
        section2: this.state.section2,
        section3: this.state.section3
      })
        .then(res => this.loadUnits())
        .catch(err => console.log(err));
    }
  };

  

  render() {
    return (
  

      <Container fluid>
        <Row>
          <Col size="md-3 sm-12">
                 <AddUnitModal>

               <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.section1}
                onChange={this.handleInputChange}
                name="section1"
                placeholder="Section One (required)"
              />
              <TextArea
                value={this.state.section2}
                onChange={this.handleInputChange}
                name="section2"
                placeholder="Section Two (Optional)"
              />
              <TextArea
                value={this.state.section3}
                onChange={this.handleInputChange}
                name="section3"
                placeholder="Section Three (Optional)"
              />
              <FormBtn
                disabled={!(this.state.title && this.state.section1)}
                onClick={this.handleFormSubmit}
              >
                Add Unit
              </FormBtn>
            </form>
             </AddUnitModal>
            {this.state.units.length ? (
              <List>
                {this.state.units.map(unit => (
                  <ListItem key={unit._id}>
                    <Link to={"/units/" + unit._id}>
                      <strong>
                        {unit.title}
                      </strong>
                    </Link>
                    <EditBtn onClick={() => this.updateUnit(unit._id)} />
                    <DeleteBtn onClick={() => this.deleteUnit(unit._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
          <Col size="md-9">
       
          </Col>
          
        </Row>
      </Container>
    );
  }
}

export default Units;
