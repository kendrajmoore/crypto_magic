const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "replace holiday cement burger vacant nuclear six rocket provide unveil fiber deal",
  "https://rinkeby.infura.io/v3/627c1c7723474abc97f6e117c2500c5b"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Deploying", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["Hi there"] })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Deployed", result.options.address);
};
deploy();
