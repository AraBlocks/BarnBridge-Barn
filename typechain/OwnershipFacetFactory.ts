/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { OwnershipFacet } from "./OwnershipFacet";

export class OwnershipFacetFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<OwnershipFacet> {
    return super.deploy(overrides || {}) as Promise<OwnershipFacet>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): OwnershipFacet {
    return super.attach(address) as OwnershipFacet;
  }
  connect(signer: Signer): OwnershipFacetFactory {
    return super.connect(signer) as OwnershipFacetFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OwnershipFacet {
    return new Contract(address, _abi, signerOrProvider) as OwnershipFacet;
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
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610311806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80638da5cb5b1461003b578063f2fde38b1461006f575b600080fd5b6100436100b3565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100b16004803603602081101561008557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506100c2565b005b60006100bd6100d6565b905090565b6100ca610109565b6100d3816101d7565b50565b60006100e06102ae565b60030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6101116102ae565b60030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146101d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f4d75737420626520636f6e7472616374206f776e65720000000000000000000081525060200191505060405180910390fd5b565b60006101e16102ae565b905060008160030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050828260030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3505050565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c9050809150509056fea2646970667358221220b26666cefde07475bb44da0ea982d0e1cf0533de88493873794b77343331124c64736f6c63430007030033";
