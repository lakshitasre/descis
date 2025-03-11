const Web3 = require('web3').default;

const contractABI = require('./build/contracts/SupplyChain.json'); // Adjust the path as necessary
const contractAddress = '0x4BF021a286bC5E4951dBCc903574D5857d5EDEdA'; // Replace with your newly deployed contract address

const web3 = new Web3('http://127.0.0.1:7545');

const supplyChain = new web3.eth.Contract(contractABI.abi, contractAddress);

async function registerProduct() {
    const accounts = await web3.eth.getAccounts();
    await supplyChain.methods.registerProduct('Product Name', 'ProductCode123', 'Product Description').send({ from: accounts[0], gas: 3000000 });
    console.log('Product registered!');
}

async function getProduct() {
    const product = await supplyChain.methods.getProduct('ProductCode123').call();
    console.log('Product Details:', product);
}

// Call the functions
registerProduct().then(() => getProduct());