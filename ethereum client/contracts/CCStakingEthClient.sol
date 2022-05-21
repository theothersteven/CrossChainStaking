//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// import "hardhat/console.sol";
// import "../0.4.24/Lido.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Lido{
  function submit(address _referral) external payable returns (uint256) {}
  function balanceOf(address _account) public view returns (uint256) {}
}

contract WETH9{
    mapping (address => uint) public  balanceOf;
    mapping (address => mapping (address => uint))  public  allowance;
    function deposit() public payable {}
    function withdraw(uint wad) public {}
    function approve(address guy, uint wad) public returns (bool) {}
    function transferFrom(address src, address dst, uint wad) public returns (bool) {}
}

contract StETH{
   mapping (address => uint256) private shares; 
   function getTotalShares() public view returns (uint256) {}
   function sharesOf(address _account) public view returns (uint256) {}
   function transfer(address _recipient, uint256 _amount) public returns (bool) {}
}

contract CCStakingEthClient is Ownable{
    address private LIDO_CONTRACT;
    Lido private lido; 
    WETH9 private weth;
    StETH private stEth;

    event Staked(uint256 amount);
    event Unwrapped(uint256 amount);
	event Withdrawn(uint256 amount);
    constructor(address _lidoContract, address _wethContract, address _stEthContract) {
        LIDO_CONTRACT = _lidoContract;
        lido = Lido(LIDO_CONTRACT); 
        weth = WETH9(_wethContract);
        stEth = StETH(_stEthContract);
    }

    function transferAndStakeWrappedEth(uint256 _amount) public returns(uint256) {
        weth.transferFrom(msg.sender, address(this), _amount);
        unwrap(_amount);
        uint256 stETH = stake(_amount);
        return stETH;
    }
    function stake(uint256 _amount) payable public returns(uint256) {
        // console.log("stake function called.");
        require(_amount <= address(this).balance);
        uint256 stETH = lido.submit{value: _amount}(address(0));
        // console.log("Staked ", _amount, " ETH");
        // console.log("Received ", stETH, " stETH");
        emit Staked(_amount);
        return stETH;
    }

    function unwrap(uint256 _amount) public {
        require(_amount <= weth.balanceOf(address(this)));
        // console.log("unwrap called, amount: ", _amount);
        weth.withdraw(_amount);
        emit Unwrapped(_amount);
    }
    function wrap(uint256 _amount) public {
        require(_amount <= address(this).balance);
        // console.log("wrap called, amount: ", _amount);
        weth.deposit{value: _amount}();
    }
    
    function checkStEthBalance() public view returns (uint256) {
        uint256 balance = lido.balanceOf(address(this));
        // console.log("checkStEthBalance returned ", balance);
        return balance;
    }

    function checkWrappedETHBalance() public view returns (uint256){
        uint256 balance = weth.balanceOf(address(this));
        // console.log("checkWrappedETHBalance returned ", balance);
        return balance;
    }

    function withDrawStEth(uint256 _amount, address _recipient) onlyOwner public {
        stEth.transfer(_recipient, _amount);
        emit Withdrawn(_amount);
    }

    
    function sendThroughWormhole(uint256 _amount) private {
        // How to do this?
    }

    receive() external payable {}
    function receiveEther() public payable {
    }
}
