/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { LibOwnership } from "./LibOwnership";

export class LibOwnershipFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<LibOwnership> {
    return super.deploy(overrides || {}) as Promise<LibOwnership>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LibOwnership {
    return super.attach(address) as LibOwnership;
  }
  connect(signer: Signer): LibOwnershipFactory {
    return super.connect(signer) as LibOwnershipFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibOwnership {
    return new Contract(address, _abi, signerOrProvider) as LibOwnership;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
];

const _bytecode =
  "0x60566023600b82828239805160001a607314601657fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122053048d04414be094014ba2b752b211a55020f210b0a0bbf0012a505beee7da4f64736f6c63430007030033";
