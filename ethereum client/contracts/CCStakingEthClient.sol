//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
// import "../0.4.24/Lido.sol";


contract Lido{
  function submit(address _referral) external payable returns (uint256) {}
  function balanceOf(address _account) public view returns (uint256) {}
}

contract WETH9{
    mapping (address => uint) public  balanceOf;
    function deposit() public payable {}
    function withdraw(uint wad) public {}
}

contract CCStakingEthClient{
    address private LIDO_CONTRACT;
    Lido private lido; 
    WETH9 private weth;

    constructor(address _lidoContract, address _wethContract) {
        LIDO_CONTRACT = _lidoContract;
        lido = Lido(LIDO_CONTRACT); 
        weth = WETH9(_wethContract);
    }

    function stake() payable public returns(uint256) {
        console.log("stake function called.");
        uint256 amount = address(this).balance;
        uint256 stETH = lido.submit{value: amount}(address(0));
        console.log("Staked ", amount, " ETH");
        console.log("Received ", stETH, " stETH");
        return stETH;
    }

    function unwrap() public {
        uint256 amount = weth.balanceOf(address(this));
        console.log("unwrap called, amount: ", amount);
        weth.withdraw(amount);
    }
    function wrap() public {
        uint256 amount = address(this).balance;
        console.log("wrap called, amount: ", amount);
        weth.deposit{value: amount}();
    }
    
    function checkStEthBalance() public view returns (uint256) {
        uint256 balance = lido.balanceOf(address(this));
        console.log("checkStEthBalance returned ", balance);
        return balance;
    }

    function checkWrappedETHBalance() public view returns (uint256){
        uint256 balance = weth.balanceOf(address(this));
        console.log("checkWrappedETHBalance returned ", balance);
        return balance;
    }

    
    function sendThroughWormhole(uint256 _amount) private {
        // How to do this?
    }

    receive() external payable {}
    function receiveEther() public payable {
    }
}
