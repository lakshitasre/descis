const Web3 = require('web3').default; // Use .default if necessary

try {
    const web3 = new Web3('http://127.0.0.1:7545');
    console.log('Web3 instantiated successfully:', web3);
} catch (error) {
    console.error('Error instantiating Web3:', error);
}