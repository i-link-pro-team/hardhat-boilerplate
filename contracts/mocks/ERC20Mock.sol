// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @title A simple ERC20 contract
contract ERC20Mock is ERC20 {
    constructor(
        string memory name_,
        string memory symbol_,
        uint256 totalSupply_
    ) ERC20(name_, symbol_) {
        ERC20._mint(msg.sender, totalSupply_);
    }

    /**
     * @notice Return decimals ERC20 contract
     */
    function decimals() public view virtual override returns (uint8) {
        return 6;
    }
}
