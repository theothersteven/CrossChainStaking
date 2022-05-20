//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
// import "../0.4.24/Lido.sol";


contract Lido{
  function submit(address _referral) external payable returns (uint256) {}
  function balanceOf(address _account) public view returns (uint256) {}
}

contract CCStakingEthClient{
    address private LIDO_CONTRACT;
    Lido private lido; 

    constructor(address _lidoContract) {
        LIDO_CONTRACT = _lidoContract;
        lido = Lido(LIDO_CONTRACT); 
    }

    function stake() payable public returns(uint256) {
        console.log("stake function called.");
        uint256 stETH = lido.submit{value: msg.value}(address(0));
        console.log("Staked ", msg.value , " ETH");
        console.log("Received ", stETH, " stETH");
        return stETH;
    }
    
    function checkStEthBalance() public view returns (uint256) {
        uint256 balance = lido.balanceOf(address(this));
        console.log("checkStEthBalance returned ", balance);
        return balance;
    }

    function sendThroughWormhole(uint256 _amount) private {
        // How to do this?
    }
}
