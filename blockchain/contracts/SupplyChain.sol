// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SupplyChain {
    struct Product {
        string name;
        string productCode;
        string description;
        address owner;
    }

    mapping(string => Product) public products;

    function registerProduct(string memory _name, string memory _productCode, string memory _description) public {
        products[_productCode] = Product(_name, _productCode, _description, msg.sender);
    }

    function getProduct(string memory _productCode) public view returns (string memory, string memory, string memory, address) {
        Product memory product = products[_productCode];
        return (product.name, product.productCode, product.description, product.owner);
    }
}