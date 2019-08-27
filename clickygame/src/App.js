import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  state = {
    characters
  }
  
  render() {
    return (
      <Wrapper>
        <Title> Dragon Ball Super Characters </Title>
        {this.state.characters.map(character => (
          <CharacterCard
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            />
        ))}
      </Wrapper>
    );
  
  }
}

export default App;
