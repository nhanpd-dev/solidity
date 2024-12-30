// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {ERC20Burnable} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

import {console} from "hardhat/console.sol";

contract Vault is AccessControl, Ownable {
    IERC20 private token;
    uint256 public maxWithdrawAmount;
    bool public withdrawEnable;
    bytes32 public constant WITHDRAW_ROLE = keccak256("WITHDRAW_ROLE");

    constructor() Ownable(msg.sender) {
        _grantRole(DEFAULT_ADMIN_ROLE, _msgSender());
        _grantRole(WITHDRAW_ROLE, _msgSender());
    }

    function setWithdrawEnable(bool _isEnable) public onlyOwner {
        withdrawEnable = _isEnable;
    }

    function setMaxWithdrawAmount(uint256 _maxAmount) public onlyOwner {
        maxWithdrawAmount = _maxAmount;
    }

    function setToken(IERC20 _token) public onlyOwner {
        token = _token;
    }

    function setPermissionWithdraw(address _to) external {
        _grantRole(WITHDRAW_ROLE, _to);
    }

    function withdraw(uint256 _amount, address _to) external {
        require(withdrawEnable, "Withdraw is not available");
        require(_amount <= maxWithdrawAmount, "Exceed maximun amount");
        require(
            owner() == _msgSender() || hasRole(WITHDRAW_ROLE, _msgSender()),
            "Caller is not a withdrawer"
        );
        token.transfer(_to, _amount);
    }

    function deposit(uint256 _amount) external {
        console.log("sender: %s, deposit: %s", msg.sender, address(this));

        require(
            token.balanceOf(msg.sender) >= _amount,
            "Insufficient amount balance"
        );
        console.log(
            "balance: %s, _amount: %s",
            token.balanceOf(msg.sender),
            _amount
        );

        SafeERC20.safeTransferFrom(token, msg.sender, address(this), _amount);
    }
}
