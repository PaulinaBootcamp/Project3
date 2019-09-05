import React, { Component } from "react";
import Flashcard from "../components/Flashcard";
import Vocabulary from "../components/Vocabulary";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Table from 'react-bootstrap/Table'
import { ListItem } from "../components/List";
import AddUnitModal from "../components/AddUnitModal";
import { Input, TextArea, FormBtn } from "../components/Form";




class Flashcards extends Component {

  state = {
    flashcards: [],
    flashcardName: "",
    flashcardImage: "",
    flipped: false,
    selectedCategory: undefined,
    currentCardIdx: 0,
    categories: new Set(),
  };

  componentDidMount() {
    this.loadFlashcards();
  };


  loadFlashcards = () => {
    API.getFlashcards()
      .then(res => {      

        res.data.forEach(flashcard => this.state.categories.add(flashcard.flashcardCategory));

        this.setState({ flashcards: res.data, flashcardName: "", flashcardImage: "", categories: this.state.categories })
        
      })
      .catch(err => console.log(err));
  };
  handleCategory = (category) => {
    if (this.state.selectedCategory === category) {
      this.setState({ selectedCategory: undefined })
    } else {
      this.setState({ selectedCategory: category })
    }
  }


  render() {
    return (
      <Container>
      <Row>
        <Col size="md-3 sm-12">
           <h3>Decks</h3>
           {Array.from(this.state.categories).map(category =>
              <button
                className="btn unit"
                onClick={() => this.handleCategory(category)}>{category}
              </button>
            )}
              <AddUnitModal buttonContent="New Card">
               <form>
              <Input
                value={this.state.flashcardName}
                onChange={this.handleInputChange}
                name="flashcardName"
                placeholder="Word"
              />
              <TextArea
                value={this.state.flashcardImage}
                onChange={this.handleInputChange}
                name="flashcardImage"
                placeholder="Image Link"
              />
              <TextArea
                value={this.state.flashcardCategory}
                onChange={this.handleInputChange}
                name="flashcardCategory"
                placeholder="Category"
              />
            
              <FormBtn
                disabled={!(this.state.flashcardName && this.state.flashcardImage)}
                onClick={this.handleFormSubmit}
              >
                Add Card
              </FormBtn>
            </form>
             </AddUnitModal>
           </Col>
      <Col size="md-9 sm-12">
          <h3>Vocabulary</h3>
          <Row>
           <Col size="md-12 sm-12">
        
        {this.state.flashcards.length ? (
          <div>
       {this.state.flashcards.length ? (
                <div>
                  {this.state.flashcards.filter((flashcard, idx) =>
                    this.state.selectedCategory === undefined ||
                    flashcard.flashcardCategory === this.state.selectedCategory
                  ).map(flashcard =>
                    (<div className="btn" key={flashcard._id}>
                     <ol><Vocabulary
title={flashcard.flashcardName}
imageUrl={flashcard.flashcardImage}
/></ol>
                    </div>))}
                </div>
              ) : (
                  <h3>No Results to Display</h3>
                )}
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
