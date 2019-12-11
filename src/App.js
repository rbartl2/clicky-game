import React, { Component } from "react";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    clickedArray : [],
    score: 0,
    topScore: 0,
    message: ""
  };

  shuffleArray = (picArray) => {
    for (let i = picArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [picArray[i], picArray[j]] = [picArray[j], picArray[i]];
    }
    return picArray;
}

clickPicture = id => {
  // Arrange the pictures in a random manner
  const shuffledArray = this.shuffleArray(cards);
  this.setState({cards: shuffledArray});
  // if clicked an image already clicked set this.state.score = 0; empty clickeadArray, end of if block
  if (this.state.clickedArray.includes(id)) {
    this.setState({ score: 0, clickedArray: [], message: "Incorrect! Game Over. Click an image to start again!"});
  }
  else {
    this.setState({
      clickedArray: this.state.clickedArray.concat([id]),
      score: this.state.score + 1,
      message: "Correct!",
    });
  }
  // set topscore = score if score>topscore.
  if (this.state.score > this.state.topScore) {
    this.setState({ topScore: this.state.score });
  }
  
}

render() {
  return (
    <div className="App">
      <Header score={this.state.score} topScore={this.state.topScore}>Clicky Game</Header>
      <Wrapper>
        {this.state.cards.map(picture => (
          <Cards
            clickPicture={this.clickPicture}
            id={picture.id}
            key={picture.id}
            image={picture.image}
          />
        ))}
      </Wrapper>
      <Footer />
    </div>
  )
}

};

export default App;
