import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && window.web3 !== "undefined") {
  //browser
  web3 = new Web3(window.web3.currentProvider);
} else {
  //
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/627c1c7723474abc97f6e117c2500c5b"
  );

  web3 = new Web3(provider);
}

export default web3;
