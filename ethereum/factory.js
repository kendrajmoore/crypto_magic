import web3 from "./web3";
import GameFactory from "./build/GameFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(GameFactory.interface),
  "0xCaC7CC48bAD619868f05e28e02D55BC9e007c38b"
);

export default instance;
