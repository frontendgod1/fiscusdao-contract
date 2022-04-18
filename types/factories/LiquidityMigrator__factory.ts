/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  LiquidityMigrator,
  LiquidityMigratorInterface,
} from "../LiquidityMigrator";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IFiscusAuthority",
        name: "_authority",
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
    inputs: [
      {
        internalType: "address",
        name: "pair",
        type: "address",
      },
      {
        internalType: "contract IUniswapV2Router",
        name: "routerFrom",
        type: "address",
      },
      {
        internalType: "contract IUniswapV2Router",
        name: "routerTo",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_minA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minB",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256",
      },
    ],
    name: "migrateLP",
    outputs: [],
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
];

const _bytecode =
  "0x610160604052600c6101208190526b15539055551213d49256915160a21b6101409081526200003291600091906200016f565b507f31f8cc382c9898b273eff4e0b7626a6987c846e80000000000000000000000006080527f9a315bdf513367c0377fb36545857d12e85813ef00000000000000000000000060a0527f383518188c0c6d7730d91b2c03a03c837814a89900000000000000000000000060c0527f64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d500000000000000000000000060e0527f184f3fad8618a6f458c16bae63f70c426fe784b300000000000000000000000061010052348015620000f557600080fd5b50604051620012ea380380620012ea833981810160405260208110156200011b57600080fd5b5051600180546001600160a01b0319166001600160a01b0383169081179091556040518291907f2f658b440c35314f52658ea8a740e05b284cdc84dc9ae01e891f21b8933e7cad90600090a250506200021b565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620001a75760008555620001f2565b82601f10620001c257805160ff1916838001178555620001f2565b82800160010185558215620001f2579182015b82811115620001f2578251825591602001919060010190620001d5565b506200020092915062000204565b5090565b5b8082111562000200576000815560010162000205565b60805160601c60a05160601c60c05160601c60e05160601c6101005160601c61104e6200029c6000398061067f528061075652508061035c52806107b95280610904528061099a5280610af85280610b745250806105bf52806106b65280610c2d5280610ca95250806109de52508061040b52806104ba525061104e6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80637a9e5e4b146100465780637aed5b461461006e578063bf7e214f146100c0575b600080fd5b61006c6004803603602081101561005c57600080fd5b50356001600160a01b03166100e4565b005b61006c600480360360e081101561008457600080fd5b506001600160a01b0381358116916020810135821691604082013581169160608101359091169060808101359060a08101359060c0013561026c565b6100c8610dd3565b604080516001600160a01b039092168252519081900360200190f35b600160009054906101000a90046001600160a01b03166001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b15801561013257600080fd5b505afa158015610146573d6000803e3d6000fd5b505050506040513d602081101561015c57600080fd5b50516000906001600160a01b031633146102095760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156101fa5780601f106101cf576101008083540402835291602001916101fa565b820191906000526020600020905b8154815290600101906020018083116101dd57829003601f168201915b50509250505060405180910390fd5b50600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0383169081179091556040517f2f658b440c35314f52658ea8a740e05b284cdc84dc9ae01e891f21b8933e7cad90600090a250565b600160009054906101000a90046001600160a01b03166001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b1580156102ba57600080fd5b505afa1580156102ce573d6000803e3d6000fd5b505050506040513d60208110156102e457600080fd5b50516000906001600160a01b031633146103575760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156101fa5780601f106101cf576101008083540402835291602001916101fa565b5060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156103c757600080fd5b505afa1580156103db573d6000803e3d6000fd5b505050506040513d60208110156103f157600080fd5b5051604080516370a0823160e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660048301529151929350600092918b16916370a0823191602480820192602092909190829003018186803b15801561046357600080fd5b505afa158015610477573d6000803e3d6000fd5b505050506040513d602081101561048d57600080fd5b50516040805162b0eee360e41b81526001600160a01b038c811660048301526024820184905291519293507f000000000000000000000000000000000000000000000000000000000000000090911691630b0eee309160448082019260009290919082900301818387803b15801561050457600080fd5b505af1158015610518573d6000803e3d6000fd5b50505050886001600160a01b031663095ea7b389836040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b15801561057357600080fd5b505af1158015610587573d6000803e3d6000fd5b505050506040513d602081101561059d57600080fd5b505060408051635d5155ef60e11b81526001600160a01b0388811660048301527f0000000000000000000000000000000000000000000000000000000000000000811660248301526044820184905260648201889052608482018790523060a483015260c4820186905282516000938493928d169263baa2abde9260e4808301939282900301818787803b15801561063457600080fd5b505af1158015610648573d6000803e3d6000fd5b505050506040513d604081101561065e57600080fd5b5080516020918201516040805163095ea7b360e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660048301526024820184905291519396509194507f0000000000000000000000000000000000000000000000000000000000000000169263095ea7b3926044808401938290030181600087803b1580156106f957600080fd5b505af115801561070d573d6000803e3d6000fd5b505050506040513d602081101561072357600080fd5b505060408051630232f83960e11b8152600481018390526000602482018190526044820181905291516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001692630465f072926064808201939182900301818387803b15801561079957600080fd5b505af11580156107ad573d6000803e3d6000fd5b505050506000610856857f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561082457600080fd5b505afa158015610838573d6000803e3d6000fd5b505050506040513d602081101561084e57600080fd5b505190610de2565b9050886001600160a01b031663095ea7b38b856040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b1580156108af57600080fd5b505af11580156108c3573d6000803e3d6000fd5b505050506040513d60208110156108d957600080fd5b50506040805163095ea7b360e01b81526001600160a01b038c811660048301526024820184905291517f00000000000000000000000000000000000000000000000000000000000000009092169163095ea7b3916044808201926020929091908290030181600087803b15801561094f57600080fd5b505af1158015610963573d6000803e3d6000fd5b505050506040513d602081101561097957600080fd5b50506040805162e8e33760e81b81526001600160a01b038b811660048301527f00000000000000000000000000000000000000000000000000000000000000008116602483015260448201869052606482018490526084820186905260a482018490527f0000000000000000000000000000000000000000000000000000000000000000811660c483015260e482018990529151918c169163e8e3370091610104808201926060929091908290030181600087803b158015610a3a57600080fd5b505af1158015610a4e573d6000803e3d6000fd5b505050506040513d6060811015610a6457600080fd5b50506001546040805163030d028960e21b81529051610b9b926001600160a01b031691630c340a24916004808301926020929190829003018186803b158015610aac57600080fd5b505afa158015610ac0573d6000803e3d6000fd5b505050506040513d6020811015610ad657600080fd5b5051604080516370a0823160e01b815230600482015290516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016916370a08231916024808301926020929190829003018186803b158015610b3e57600080fd5b505afa158015610b52573d6000803e3d6000fd5b505050506040513d6020811015610b6857600080fd5b50516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190610e2b565b6001546040805163030d028960e21b81529051610cd0926001600160a01b031691630c340a24916004808301926020929190829003018186803b158015610be157600080fd5b505afa158015610bf5573d6000803e3d6000fd5b505050506040513d6020811015610c0b57600080fd5b5051604080516370a0823160e01b815230600482015290516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016916370a08231916024808301926020929190829003018186803b158015610c7357600080fd5b505afa158015610c87573d6000803e3d6000fd5b505050506040513d6020811015610c9d57600080fd5b50516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190610e2b565b6001546040805163030d028960e21b81529051610dc5926001600160a01b031691630c340a24916004808301926020929190829003018186803b158015610d1657600080fd5b505afa158015610d2a573d6000803e3d6000fd5b505050506040513d6020811015610d4057600080fd5b5051604080516370a0823160e01b815230600482015290516001600160a01b038d16916370a08231916024808301926020929190829003018186803b158015610d8857600080fd5b505afa158015610d9c573d6000803e3d6000fd5b505050506040513d6020811015610db257600080fd5b50516001600160a01b038c169190610e2b565b505050505050505050505050565b6001546001600160a01b031681565b6000610e2483836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610faa565b9392505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1663a9059cbb60e01b178152925182516000946060949389169392918291908083835b60208310610ebd5780518252601f199092019160209182019101610e9e565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610f1f576040519150601f19603f3d011682016040523d82523d6000602084013e610f24565b606091505b5091509150818015610f52575080511580610f525750808060200190516020811015610f4f57600080fd5b50515b610fa3576040805162461bcd60e51b815260206004820152600f60248201527f5452414e534645525f4641494c45440000000000000000000000000000000000604482015290519081900360640190fd5b5050505050565b600081848411156110395760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610ffe578181015183820152602001610fe6565b50505050905090810190601f16801561102b5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50505090039056fea164736f6c6343000705000a";

export class LiquidityMigrator__factory extends ContractFactory {
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
    _authority: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LiquidityMigrator> {
    return super.deploy(
      _authority,
      overrides || {}
    ) as Promise<LiquidityMigrator>;
  }
  getDeployTransaction(
    _authority: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_authority, overrides || {});
  }
  attach(address: string): LiquidityMigrator {
    return super.attach(address) as LiquidityMigrator;
  }
  connect(signer: Signer): LiquidityMigrator__factory {
    return super.connect(signer) as LiquidityMigrator__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LiquidityMigratorInterface {
    return new utils.Interface(_abi) as LiquidityMigratorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LiquidityMigrator {
    return new Contract(address, _abi, signerOrProvider) as LiquidityMigrator;
  }
}
