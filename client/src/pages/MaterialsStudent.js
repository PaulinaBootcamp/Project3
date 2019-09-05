import Flashcard from "../components/Flashcard";
import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
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
    categories: new Set()
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    
    if (this.state.flashcardName && this.state.flashcardImage) {
      console.log("this is new flashcard" + this.state.flashcardName)
      API.saveFlashcard({
        flashcardName: this.state.flashcardName,
        flashcardImage: this.state.flashcardImage,
        selectedCategory: this.state.selectedCategory
      })
        .then(res => this.loadFlashcards())
        .catch(err => console.log(err));
    }
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
            <h3>Flashcards</h3>
            <div>
              {this.state.flashcards.length ? (
                <div>
                  {this.state.flashcards.filter((flashcard, idx) =>
                    this.state.selectedCategory === undefined ||
                    flashcard.flashcardCategory === this.state.selectedCategory
                  ).map(flashcard =>
                    (<span className="btn" key={flashcard._id}>
                      <Flashcard
                        title={flashcard.flashcardName}
                        imageUrl={flashcard.flashcardImage}
                       
                      />
                    </span>))}
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
