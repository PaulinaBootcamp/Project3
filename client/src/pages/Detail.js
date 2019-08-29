import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

import AddUnitModal from "../components/AddUnitModal";
import Units from "../pages/Units";

class Detail extends Component {
  state = {
    unit: {}
  };

  componentDidMount() {
    console.log(this)
    API.getUnit(this.props.match.params.id)
      .then(res => this.setState({ ...res.data }))
      .catch(err => console.log(err));
  };

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
    return (
      <Container fluid>
        <Row>
        <Col size="md-3">
                    <Units/>
                    </Col>
          <Col size="md-9">
              <h1>
                {this.state.title}
              </h1>
                        {/* </Col>
        </Row>
        <Row>
          <Col size="md-9 md-offset-1"> */}
            <article>
              <h3>Section 1</h3>
              <p>
                {this.state.section1}
              </p>
            </article>
            <article>
              <h3>Section 2</h3>
              <p>
                {this.state.section2}
              </p>
            </article>
            <article>
              <h3>Section 3</h3>
              <p>
                {this.state.section3}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
 <AddUnitModal buttonContent="Edit"  modalHeading= {this.state.title} >
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
                onClick={this.updateUnit}
              >
                Save Changes Unit
              </FormBtn>
            </form>
             </AddUnitModal>
            <Link to="/">← Back</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
