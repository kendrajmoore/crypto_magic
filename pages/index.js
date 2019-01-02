import React, { Component } from "react";
import factory from "../ethereum/factory";

class GameIndex extends Component {
  async componentDidMount() {
    const games = await factory.methods.getDeployedGames().call();
  }
  render() {
    return <div>Games</div>;
  }
}

export default GameIndex;
