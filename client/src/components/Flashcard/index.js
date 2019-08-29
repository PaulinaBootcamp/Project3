import React, { Component } from "react";
import Flippy, { FrontSide, BackSide } from "./../lib";
import Button from "react-bootstrap/Button";
import "./style.css";
const FlippyStyle = {
  width: "200px",
  height: "200px",
  textAlign: "center",
  color: "#FFF",
  fontFamily: "sans-serif",
  fontSize: "30px",
  justifyContent: "center"
};

const CardContents = ({ title, imageUrl }) => (
  <React.Fragment>
    <FrontSide
      style={{
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <img
        src={imageUrl}
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      />
      <span
        style={{
          fontSize: "12px",
          position: "absolute",
          bottom: "10px",
          width: "100%"
        }}
      >
        <br />
        Hover over to show key word
      </span>
    </FrontSide>
    <BackSide
      style={{
        backgroundColor: "#EB6864",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <h1>{title}</h1>
      <span
        style={{
          fontSize: "12px",
          position: "absolute",
          bottom: "10px",
          width: "100%"
        }}
      >
        <br />
        <Button variant="success">Success</Button>
        <Button variant="outline-warning">Warning</Button>
      </span>
    </BackSide>
  </React.Fragment>
);

class Flashcard extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            flex: "1 0 200px",
            justifyContent: "space-around",
            "flex-wrap": "wrap"
          }}
        >
          <Flippy flipOnHover={true} flipDirection='horizontal' style={FlippyStyle}>
            <CardContents imageUrl={this.props.imageUrl} title={this.props.title}/>
          </Flippy>
        </div>
      </div>
    );
  }
}
export default Flashcard;