import web3 from "./web3";
import GameFactory from "./build/GameFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(GameFactory.interface),
  "0xa2DF36fF0024D1A1faF31132d6bE7c947A1c9fba"
);

export default instance;
