//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Bridge {
    event TokensLocked(address from, uint256 amount);
    event TokensUnlocked(address from, uint256 amount);

    event TokensBridged(address from, uint256 amount);

    function lockTokens(uint256 _amount) external payable {}
}
