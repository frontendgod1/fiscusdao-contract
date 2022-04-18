/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  FiscusAccessControlled,
  FiscusAccessControlledInterface,
} from "../FiscusAccessControlled";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IFiscusAuthority",
        name: "authority",
        type: "address",
      },
    ],
    name: "AuthorityUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "authority",
    outputs: [
      {
        internalType: "contract IFiscusAuthority",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IFiscusAuthority",
        name: "_newAuthority",
        type: "address",
      },
    ],
    name: "setAuthority",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class FiscusAccessControlled__factory {
  static readonly abi = _abi;
  static createInterface(): FiscusAccessControlledInterface {
    return new utils.Interface(_abi) as FiscusAccessControlledInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FiscusAccessControlled {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as FiscusAccessControlled;
  }
}
