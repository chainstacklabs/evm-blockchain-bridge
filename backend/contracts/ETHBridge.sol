//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Bridge {
    // address of the bridge
    address bridge;

    event TokensLocked(address from, uint256 amount);
    event TokensUnlocked(address from, uint256 amount);

    event TokensBridged(address from, uint256 amount);

    modifier onlyBridge() {
        require(
            bridge == msg.sender,
            "QChainstackDollar: only the bridge can trigger this method!"
        );
        _;
    }

    constructor(address _bridge) {
        bridge = _bridge;
    }

    // @dev receives tokens from bridge and emits event that will be captured by bridge backend process
    function lockTokens(uint256 _amount) external payable {
        emit TokensLocked(msg.sender, _amount);
    }

    function unlockTokens(uint256 _amount) external payable {}
}
