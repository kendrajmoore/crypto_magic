import React, { Component } from "react";
import factory from "../ethereum/factory";

class GameIndex extends Component {
  async componentDidMount() {
    const campaign = await factory.methods.getGames().call();
  }
  render() {
    return <div>Games</div>;
  }
}

export default GameIndex;
