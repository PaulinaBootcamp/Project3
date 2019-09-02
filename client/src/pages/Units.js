import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import EditBtn from "../components/EditBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Detail from "./Detail";

import AddUnitModal from "../components/AddUnitModal";
import EditUnitModal from "../components/EditUnitModal";

class Units extends Component {

  state = {
    units: [],
    title: "",
    section1: "",
    section2: "",
    section3: "", 
    unit: {}
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

  getUnit = (id) => {
    console.log("here" + id);
     API.getUnit(id)
      .then(res => this.setState({ unit: res.data }))
      .catch(err => console.log(err));

      console.log(this.state.unit._id);
  };
   

  deleteUnit = id => {
    API.deleteUnit(id)
      .then(res => this.loadUnits())
      .catch(err => console.log(err));
  };

  
  editUnit = id => {
    API.updateUnit(id)
      .then(res => this.loadUnits())
      .catch(err => console.log(err));
  };

    updateUnit = id => {
  API.updateUnit({
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
      <Container>
        <Row>
          <Col size="md-3 sm-12">  
          <h1>Units</h1>              
            {this.state.units.length ? (
              <List>
                {this.state.units.map(unit => (
                  <ListItem    key={unit._id}>
                  <button 
                  className="btn unit" onClick={() => this.getUnit(unit._id)}>{unit.title}
                  
                  </button>
                      <div>      
                      <DeleteBtn onClick={() => this.deleteUnit(unit._id)} />
                      <EditUnitModal buttonContent="Edit"  modalHeading= {this.state.unit.title} >
               <form>
              <Input
                value={unit.title}                          

                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={unit.section1}
                onChange={this.handleInputChange}
                name="section1"
                placeholder="Section One (required)"
              />
              <TextArea
                value={unit.section2}
                onChange={this.handleInputChange}
                name="section2"
                placeholder="Section Two (Optional)"
              />
              <TextArea
                value={unit.section3}
                onChange={this.handleInputChange}
                name="section3"
                placeholder="Section Three (Optional)"
              />
              <FormBtn
                disabled={!(unit.title && unit.section1)}
                onClick={this.updateUnit}
              >
                Save Changes Unit
              </FormBtn>
            </form>          
           </EditUnitModal>
          </div>
           
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
                      
           <AddUnitModal buttonContent="Add New Unit">
               <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <TextArea
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
             </Col>
          <Col size="md-9">
            <Detail title={this.state.unit.title} section1={this.state.unit.section1} section2={this.state.unit.section2} section3={this.state.unit.section3}/>       
                                  </Col>  
                  
        </Row>
      </Container>
    );
  }
}

export default Units;
