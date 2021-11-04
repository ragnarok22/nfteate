# NFTéate
Create NFT for OpenSea
# Run the smart contracts
## How run locally
This project use [truffle](https://www.trufflesuite.com) for easy deploy.

### Command for compiling smart contract:

    truffle compile

### Command for deploy smart contract

    truffle migrate

### Running the smart contract tests

    truffle test

## Mint NFT
### Enviroment variables
ALCHEMY_KEY: the key for [alchemy](https://dashboard.alchemyapi.io)
MNEMONIC: the mnemonic for the private key
NETWORK: the network name
OWNER_ADDRESS: the owner address
NFT_CONTRACT_ADDRESS: the address of the smart contract
### Command for minting NFT

    yarn mint