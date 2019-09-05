import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import "./App.css";

// function to shuffle array of images
function shuffleImage(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp
  }
  return array
};


class App extends Component {
  state = {
    characters,
    score: 0,
    topScore: 0,
    clickedCharacters: []
  };

  clickedImage = id => {
    let clickedCharacters = this.state.clickedCharacters;
    let score = this.state.score;
    let topScore = this.state.topScore;

    if(clickedCharacters.indexOf(id) === -1) {
      clickedCharacters.push(id);
      this.handleIncrement();
      this.characterShuffle();
    }else if(this.state.score === 12) {
      alert("You win!")
      this.setState({
        score: 0,
        clickedCharacters: []
      });
    } else {
      this.setState({
        score: 0,
        clickedCharacters: []
      });
      alert("Sorry you picked the same fighter twice, try again!")
    }  
    if (score > topScore) {
      this.setState({
        topScore: score
      })
    }
  };

  // function to increment 1 point to score
  handleIncrement = () => {
    this.setState({ score: this.state.score +1 });
  }

  // function to call shuffleImage function for characters
  characterShuffle = () => {
    this.setState({ characters: shuffleImage(characters) })
  }


  render() {
    return (
     
      <Wrapper>
         <Title 
            score={this.state.score}
            message={this.state.message}
            topScore={this.state.score} />
        <div class="container"> 
          <div class="row">
            {this.state.characters.map(character => (
              <CharacterCard
                id={character.id}
                key={character.id}
                name={character.name}
                image={character.image}
                clickedImage={this.clickedImage}
                />
            ))}
            </div>
        </div>
      </Wrapper>
    );
  
  }
}

export default App;
