// SPDX-License-Identifier: Apache-2.0
pragma solidity 0.7.6;

import "../interfaces/IBarn.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";

contract MulticallMock {
    using SafeMath for uint256;

    IBarn barn;
    IERC20 ara;

    constructor(address _barn, address _ara) {
        barn = IBarn(_barn);
        ara = IERC20(_ara);
    }

    function multiDelegate(uint256 amount, address user1, address user2) public {
        ara.approve(address(barn), amount);

        barn.deposit(amount);
        barn.delegate(user1);
        barn.delegate(user2);
        barn.delegate(user1);
    }

    function multiDeposit(uint256 amount) public {
        ara.approve(address(barn), amount.mul(3));

        barn.deposit(amount);
        barn.deposit(amount);
        barn.deposit(amount);
    }
}
