import React, { Component } from "react";
import PupCard from "./components/PupCard";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import pups from "./pups.JSON";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    pups
  };
	pup = this.setState({ pups });
  // shufflePups = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const pups = this.state.pup.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Score>Memory Game</Score>
        {this.state.pups.map(pup => (
          <PupCard
            shufflePup={this.shufflePup}
            id={pup.id}
            key={pup.id}
            image={pup.image}
           />
        ))}
      </Wrapper>
    );
  }
}

export default App;

