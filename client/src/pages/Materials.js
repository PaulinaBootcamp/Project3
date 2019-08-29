import React, { Component } from "react";
import Flashcard from "../components/Flashcard";
import API from "../utils/API";

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
      <div>
        {this.state.flashcards.length ? (
          <div>
            {this.state.flashcards.map(flashcard => (
              <div key={flashcard._id}>
                <Flashcard
                  title={flashcard.flashcardName}
                  imageUrl={flashcard.flashcardImage}
                />
              </div>
            ))}
          </div>
        ) : (
            <h3>No Results to Display</h3>
          )}
      </div>




    )
  }
}

export default Flashcards;
