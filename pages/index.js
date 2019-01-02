import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import factory from "../ethereum/factory";

class GameIndex extends Component {
  async componentDidMount() {
    const games = await factory.methods.getDeployedGames().call();
    console.log(games);
  }

  // renderGames() {
  //   const items = this.props.games.map(address => {
  //     return {
  //       header: address,
  //       description: <a>View</a>,
  //       fluid: true
  //     };
  //   });
  //   return <Card.Group items={items} />;
  // }
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
        />
        test
      </div>
    );
  }
}

export default GameIndex;
