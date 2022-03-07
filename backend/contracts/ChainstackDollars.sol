// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "hardhat/console.sol";

// Import ERC20
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ChainstackDollars is ERC20 {
    // create the token passing the name and symbol
    constructor(
        string memory _name,
        string memory _symbol,
        uint256 _initialSupply
    ) ERC20(_name, _symbol) {
        // mint all tokens and send them to the deployer's wallet
        _mint(msg.sender, _initialSupply * (10**uint256(18)));
        console.log("Tokens minted %s", _initialSupply);
        console.log("Deployed! Tokens sent to %s", msg.sender);
    }
}
