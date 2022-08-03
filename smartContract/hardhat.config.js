

 require('@nomiclabs/hardhat-waffle');

 module.exports = {
  solidity:'0.8.0',
  networks:{
    goerli:{
      url:'https://eth-goerli.g.alchemy.com/v2/6ArdtvFpSLNuXl-rRJuIq_rCzRfWaAkc',
      accounts:['95fab6fbf08104ea1d0714ba9a0c4a0a3ef288430154f5b4f0c5aba207e88414'] 
    }
  }
 }