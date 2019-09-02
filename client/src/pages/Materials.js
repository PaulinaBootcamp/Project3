import React, { Component } from "react";
import Flashcard from "../components/Flashcard";
import Vocabulary from "../components/Vocabulary";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Table from 'react-bootstrap/Table'


class Flashcards extends Component {

  state = {
    flashcards: [],
    flashcardName: "",
    flashcardImage: "",
    flipped: false
  };

  componentDidMount() {
    this.loadFlashcards();
  };

  loadFlashcards = () => {
    API.getFlashcards()
      .then(res => {
        // console.log(res.data);
        this.setState({ flashcards: res.data, flashcardName: "", flashcardImage: "" })
        // console.log("flashhhhhhhhhh" + JSON.stringify(this.state.flashcards));
      })
      .catch(err => console.log(err));
  };


  render() {
    return (
      <Container>
      <Row>
        <Col size="md-3 sm-12">
           <h3>Decks</h3>
           </Col>
      <Col size="md-9 sm-12">
          <h3>Vocabulary</h3>
          <Row>
           <Col size="md-12 sm-12">
        
        {this.state.flashcards.length ? (
          <div>
            {this.state.flashcards.map(flashcard => (
              <span key={flashcard._id}>
                <Vocabulary
                  title={flashcard.flashcardName}
                  imageUrl={flashcard.flashcardImage}
                />
              </span>
            ))}
          </div>
        ) : (
            <h3>No Results to Display</h3>
          )}
      </Col>
      </Row>
      </Col>
         
      </Row>

      </Container>


    )
  }
}

export default Flashcards;
