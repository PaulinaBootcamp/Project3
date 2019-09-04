import React, { Component } from "react";
import Flashcard from "../components/Flashcard";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";

class Flashcards extends Component {

  state = {
    flashcards: [],
    flashcardName: "",
    flashcardImage: "",
    flipped: false,
    selectedCategory: undefined,
    categories: new Set()
  };


  componentDidMount() {
    this.loadFlashcards();
  };

  loadFlashcards = () => {
    API.getFlashcards()
      .then(res => {
        // console.log(res.data);        

        res.data.forEach(flashcard => this.state.categories.add(flashcard.flashcardCategory));

        this.setState({ flashcards: res.data, flashcardName: "", flashcardImage: "", categories: this.state.categories })
        // console.log("flashhhhhhhhhh" + JSON.stringify(this.state.flashcards));
      })
      .catch(err => console.log(err));
  };


  render() {
    console.log(Array.from(this.state.categories.values())); return (
      <Container>
        <Row>
          <Col size="md-3 sm-12">
            <h3>Decks</h3>
            {Array.from(this.state.categories).map(category => <p>{category}</p>)}
            {/* <button 
               className="btn unit" onClick={() => this.setState}>{unit.title}
            </button> */}

          </Col>
          <Col size="md-9 sm-12">
            <h3>Flashcards</h3>
            <div>
              {this.state.flashcards.length ? (
                <div>
                  {this.state.flashcards.filter(flashcard =>
                    this.state.selectedCategory === undefined ||
                    flashcard.flashcardCategory === this.state.selectedCategory
                  ).map(flashcard => (
                    <span className="btn" key={flashcard._id}>
                      <Flashcard
                        title={flashcard.flashcardName}
                        imageUrl={flashcard.flashcardImage}
                      />
                    </span>
                  ))}
                </div>
              ) : (
                  <h3>No Results to Display</h3>
                )}
            </div>
          </Col>

        </Row>

      </Container>


    )
  }
}

export default Flashcards;
