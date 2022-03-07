// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "hardhat/console.sol";

// Import ERC20
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ERC20Burnable} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract QChainstackDollars is ERC20, ERC20Burnable {
    address bridge;

    event TokensMinted(address from, uint256 amount);

    constructor(address _bridge) ERC20("QChainstackDollars", "Q-CHSD") {
        bridge = _bridge;
        console.log("Bridge address set to %s", _bridge);
    }

    modifier onlyBridge() {
        require(
            bridge == msg.sender,
            "QChainstackDollar: only the bridge can trigger this method!"
        );
        _;
    }

    // @dev called from the bridge when tokens are locked on ETH side
    function mint(address _recipient, uint256 _amount)
        public
        virtual
        onlyBridge
    {
        emit TokensMinted(_recipient, _amount);

        _mint(_recipient, _amount);
        console.log("Tokens minted for %s", _recipient);
    }

    // @dev called from the bridge when tokens are received on Quorum side
    function burnFrom(address _account, uint256 _amount)
        public
        virtual
        override(ERC20Burnable)
        onlyBridge
    {
        super.burnFrom(_account, _amount);
        console.log("Tokens burned from %s", _account);
    }
}
