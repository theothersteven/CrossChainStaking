// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Staked extends ethereum.Event {
  get params(): Staked__Params {
    return new Staked__Params(this);
  }
}

export class Staked__Params {
  _event: Staked;

  constructor(event: Staked) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Unwrapped extends ethereum.Event {
  get params(): Unwrapped__Params {
    return new Unwrapped__Params(this);
  }
}

export class Unwrapped__Params {
  _event: Unwrapped;

  constructor(event: Unwrapped) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Withdrawn extends ethereum.Event {
  get params(): Withdrawn__Params {
    return new Withdrawn__Params(this);
  }
}

export class Withdrawn__Params {
  _event: Withdrawn;

  constructor(event: Withdrawn) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class CCStakingEthClient extends ethereum.SmartContract {
  static bind(address: Address): CCStakingEthClient {
    return new CCStakingEthClient("CCStakingEthClient", address);
  }

  checkStEthBalance(): BigInt {
    let result = super.call(
      "checkStEthBalance",
      "checkStEthBalance():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_checkStEthBalance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "checkStEthBalance",
      "checkStEthBalance():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  checkWrappedETHBalance(): BigInt {
    let result = super.call(
      "checkWrappedETHBalance",
      "checkWrappedETHBalance():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_checkWrappedETHBalance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "checkWrappedETHBalance",
      "checkWrappedETHBalance():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  transferAndStakeWrappedEth(_amount: BigInt): BigInt {
    let result = super.call(
      "transferAndStakeWrappedEth",
      "transferAndStakeWrappedEth(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_amount)]
    );

    return result[0].toBigInt();
  }

  try_transferAndStakeWrappedEth(_amount: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "transferAndStakeWrappedEth",
      "transferAndStakeWrappedEth(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_amount)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _lidoContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _wethContract(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _stEthContract(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ReceiveEtherCall extends ethereum.Call {
  get inputs(): ReceiveEtherCall__Inputs {
    return new ReceiveEtherCall__Inputs(this);
  }

  get outputs(): ReceiveEtherCall__Outputs {
    return new ReceiveEtherCall__Outputs(this);
  }
}

export class ReceiveEtherCall__Inputs {
  _call: ReceiveEtherCall;

  constructor(call: ReceiveEtherCall) {
    this._call = call;
  }
}

export class ReceiveEtherCall__Outputs {
  _call: ReceiveEtherCall;

  constructor(call: ReceiveEtherCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class StakeCall extends ethereum.Call {
  get inputs(): StakeCall__Inputs {
    return new StakeCall__Inputs(this);
  }

  get outputs(): StakeCall__Outputs {
    return new StakeCall__Outputs(this);
  }
}

export class StakeCall__Inputs {
  _call: StakeCall;

  constructor(call: StakeCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class StakeCall__Outputs {
  _call: StakeCall;

  constructor(call: StakeCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class TransferAndStakeWrappedEthCall extends ethereum.Call {
  get inputs(): TransferAndStakeWrappedEthCall__Inputs {
    return new TransferAndStakeWrappedEthCall__Inputs(this);
  }

  get outputs(): TransferAndStakeWrappedEthCall__Outputs {
    return new TransferAndStakeWrappedEthCall__Outputs(this);
  }
}

export class TransferAndStakeWrappedEthCall__Inputs {
  _call: TransferAndStakeWrappedEthCall;

  constructor(call: TransferAndStakeWrappedEthCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class TransferAndStakeWrappedEthCall__Outputs {
  _call: TransferAndStakeWrappedEthCall;

  constructor(call: TransferAndStakeWrappedEthCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UnwrapCall extends ethereum.Call {
  get inputs(): UnwrapCall__Inputs {
    return new UnwrapCall__Inputs(this);
  }

  get outputs(): UnwrapCall__Outputs {
    return new UnwrapCall__Outputs(this);
  }
}

export class UnwrapCall__Inputs {
  _call: UnwrapCall;

  constructor(call: UnwrapCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UnwrapCall__Outputs {
  _call: UnwrapCall;

  constructor(call: UnwrapCall) {
    this._call = call;
  }
}

export class WithDrawStEthCall extends ethereum.Call {
  get inputs(): WithDrawStEthCall__Inputs {
    return new WithDrawStEthCall__Inputs(this);
  }

  get outputs(): WithDrawStEthCall__Outputs {
    return new WithDrawStEthCall__Outputs(this);
  }
}

export class WithDrawStEthCall__Inputs {
  _call: WithDrawStEthCall;

  constructor(call: WithDrawStEthCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class WithDrawStEthCall__Outputs {
  _call: WithDrawStEthCall;

  constructor(call: WithDrawStEthCall) {
    this._call = call;
  }
}

export class WrapCall extends ethereum.Call {
  get inputs(): WrapCall__Inputs {
    return new WrapCall__Inputs(this);
  }

  get outputs(): WrapCall__Outputs {
    return new WrapCall__Outputs(this);
  }
}

export class WrapCall__Inputs {
  _call: WrapCall;

  constructor(call: WrapCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WrapCall__Outputs {
  _call: WrapCall;

  constructor(call: WrapCall) {
    this._call = call;
  }
}
