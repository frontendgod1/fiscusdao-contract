/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AccessControlledMock,
  AccessControlledMockInterface,
} from "../AccessControlledMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_auth",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
    inputs: [],
    name: "governorOnlyTest",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "governorTest",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "guardianOnlyTest",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "guardianTest",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "policyOnlyTest",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "policyTest",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
  {
    inputs: [],
    name: "vaultOnlyTest",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vaultTest",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c0604052600c60808190526b15539055551213d49256915160a21b60a090815261002d91600091906100b0565b5034801561003a57600080fd5b5060405161085a38038061085a8339818101604052602081101561005d57600080fd5b5051600180546001600160a01b0319166001600160a01b0383169081179091556040518291907f2f658b440c35314f52658ea8a740e05b284cdc84dc9ae01e891f21b8933e7cad90600090a25050610151565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826100e6576000855561012c565b82601f106100ff57805160ff191683800117855561012c565b8280016001018555821561012c579182015b8281111561012c578251825591602001919060010190610111565b5061013892915061013c565b5090565b5b80821115610138576000815560010161013d565b6106fa806101606000396000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c80638718bb3611610076578063bf7e214f1161005b578063bf7e214f1461012f578063c599180f14610153578063e1f9e8f01461015b576100be565b80638718bb361461011f5780639d6aedd114610127576100be565b806336ea13a3116100a757806336ea13a3146100e757806357c95543146100ef5780637a9e5e4b146100f7576100be565b80630c0aed54146100c35780630cafff62146100df575b600080fd5b6100cb610163565b604080519115158252519081900360200190f35b6100cb6102bb565b6100cb6102cb565b6100cb6103e9565b61011d6004803603602081101561010d57600080fd5b50356001600160a01b031661040d565b005b6100cb61055b565b6100cb61056b565b61013761057b565b604080516001600160a01b039092168252519081900360200190f35b6100cb61058a565b6100cb6106a8565b6001546040805163030d028960e21b815290516000926001600160a01b031691630c340a24916004808301926020929190829003018186803b1580156101a857600080fd5b505afa1580156101bc573d6000803e3d6000fd5b505050506040513d60208110156101d257600080fd5b50516000906001600160a01b0316331461027f5760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156102705780601f1061024557610100808354040283529160200191610270565b820191906000526020600020905b81548152906001019060200180831161025357829003601f168201915b50509250505060405180910390fd5b5050600180547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16600160a01b90811791829055900460ff1690565b600154600160b01b900460ff1681565b60015460408051630505c8c960e01b815290516000926001600160a01b031691630505c8c9916004808301926020929190829003018186803b15801561031057600080fd5b505afa158015610324573d6000803e3d6000fd5b505050506040513d602081101561033a57600080fd5b50516000906001600160a01b031633146103ad5760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156102705780601f1061024557610100808354040283529160200191610270565b5050600180547fffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffffff16600160b01b90811791829055900460ff1690565b60015477010000000000000000000000000000000000000000000000900460ff1681565b600160009054906101000a90046001600160a01b03166001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b15801561045b57600080fd5b505afa15801561046f573d6000803e3d6000fd5b505050506040513d602081101561048557600080fd5b50516000906001600160a01b031633146104f85760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156102705780601f1061024557610100808354040283529160200191610270565b50600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0383169081179091556040517f2f658b440c35314f52658ea8a740e05b284cdc84dc9ae01e891f21b8933e7cad90600090a250565b600154600160a01b900460ff1681565b600154600160a81b900460ff1681565b6001546001600160a01b031681565b60015460408051630229549960e51b815290516000926001600160a01b03169163452a9320916004808301926020929190829003018186803b1580156105cf57600080fd5b505afa1580156105e3573d6000803e3d6000fd5b505050506040513d60208110156105f957600080fd5b50516000906001600160a01b0316331461066c5760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156102705780601f1061024557610100808354040283529160200191610270565b5050600180547fffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffff16600160a81b90811791829055900460ff1690565b6001546040805163fbfa77cf60e01b815290516000926001600160a01b03169163fbfa77cf916004808301926020929190829003018186803b1580156101a857600080fdfea164736f6c6343000705000a";

export class AccessControlledMock__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _auth: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AccessControlledMock> {
    return super.deploy(
      _auth,
      overrides || {}
    ) as Promise<AccessControlledMock>;
  }
  getDeployTransaction(
    _auth: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_auth, overrides || {});
  }
  attach(address: string): AccessControlledMock {
    return super.attach(address) as AccessControlledMock;
  }
  connect(signer: Signer): AccessControlledMock__factory {
    return super.connect(signer) as AccessControlledMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AccessControlledMockInterface {
    return new utils.Interface(_abi) as AccessControlledMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AccessControlledMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AccessControlledMock;
  }
}
