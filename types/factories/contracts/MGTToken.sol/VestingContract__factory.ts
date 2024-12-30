/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  VestingContract,
  VestingContractInterface,
} from "../../../contracts/MGTToken.sol/VestingContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_distributed",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_vestingPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_cliffTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_releasePeriod",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vestingInfo",
    outputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_distributed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startReleaseDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_releasePeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_periodReleaseToken",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_distributedTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_vestingPeriod",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052600160065534801561001557600080fd5b50604051610bce380380610bce833981810160405281019061003791906102ca565b600073ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff16036100a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161009d906103c9565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610115576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161010c90610435565b60405180910390fd5b81426101219190610484565b60028190555080600581905550600062278d008461013f91906104e7565b90506000808414610150578161015e565b60018261015d9190610518565b5b9050886000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508760018190555086600381905550600085036101bd5760016101d5565b8087896101ca9190610518565b6101d491906104e7565b5b60048190555085600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508460078190555050505050505050505061054c565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061026182610236565b9050919050565b61027181610256565b811461027c57600080fd5b50565b60008151905061028e81610268565b92915050565b6000819050919050565b6102a781610294565b81146102b257600080fd5b50565b6000815190506102c48161029e565b92915050565b600080600080600080600060e0888a0312156102e9576102e8610231565b5b60006102f78a828b0161027f565b97505060206103088a828b016102b5565b96505060406103198a828b016102b5565b955050606061032a8a828b0161027f565b945050608061033b8a828b016102b5565b93505060a061034c8a828b016102b5565b92505060c061035d8a828b016102b5565b91505092959891949750929550565b600082825260208201905092915050565b7f496e76616c696420746f6b656e20616464726573730000000000000000000000600082015250565b60006103b360158361036c565b91506103be8261037d565b602082019050919050565b600060208201905081810360008301526103e2816103a6565b9050919050565b7f496e76616c69642062656e656669636961727920616464726573730000000000600082015250565b600061041f601b8361036c565b915061042a826103e9565b602082019050919050565b6000602082019050818103600083015261044e81610412565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061048f82610294565b915061049a83610294565b92508282019050808211156104b2576104b1610455565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006104f282610294565b91506104fd83610294565b92508261050d5761050c6104b8565b5b828204905092915050565b600061052382610294565b915061052e83610294565b925082820390508181111561054657610545610455565b5b92915050565b6106738061055b6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806320df13441461003b57806386d1a69f14610061575b600080fd5b61004361006b565b60405161005899989796959493929190610313565b60405180910390f35b6100696100f0565b005b60008060008060008060008060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600154600354600254600554600454600654600754985098509850985098509850985098509850909192939495969798565b60035460015411610136576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161012d906103fd565b60405180910390fd5b42600554600654610147919061044c565b600254610154919061048e565b10610194576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161018b9061050e565b60405180910390fd5b60006004546003546001546101a9919061052e565b116101c3576003546001546101be919061052e565b6101c7565b6004545b9050806003546101d7919061048e565b600381905550600660008154809291906101f090610562565b919050555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836040518363ffffffff1660e01b81526004016102729291906105aa565b6020604051808303816000875af1158015610291573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102b59190610610565b5050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006102e4826102b9565b9050919050565b6102f4816102d9565b82525050565b6000819050919050565b61030d816102fa565b82525050565b600061012082019050610329600083018c6102eb565b610336602083018b6102eb565b610343604083018a610304565b6103506060830189610304565b61035d6080830188610304565b61036a60a0830187610304565b61037760c0830186610304565b61038460e0830185610304565b610392610100830184610304565b9a9950505050505050505050565b600082825260208201905092915050565b7f56657374696e672069732066756c6c792072656c656173656400000000000000600082015250565b60006103e76019836103a0565b91506103f2826103b1565b602082019050919050565b60006020820190508181036000830152610416816103da565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610457826102fa565b9150610462836102fa565b9250828202610470816102fa565b915082820484148315176104875761048661041d565b5b5092915050565b6000610499826102fa565b91506104a4836102fa565b92508282019050808211156104bc576104bb61041d565b5b92915050565b7f546f6b656e206973207374696c6c20696e206c6f636b00000000000000000000600082015250565b60006104f86016836103a0565b9150610503826104c2565b602082019050919050565b60006020820190508181036000830152610527816104eb565b9050919050565b6000610539826102fa565b9150610544836102fa565b925082820390508181111561055c5761055b61041d565b5b92915050565b600061056d826102fa565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361059f5761059e61041d565b5b600182019050919050565b60006040820190506105bf60008301856102eb565b6105cc6020830184610304565b9392505050565b600080fd5b60008115159050919050565b6105ed816105d8565b81146105f857600080fd5b50565b60008151905061060a816105e4565b92915050565b600060208284031215610626576106256105d3565b5b6000610634848285016105fb565b9150509291505056fea2646970667358221220671bf9d11513940cf2b1bcb56e2f789311cd1aca6082c790abab894651fb679b64736f6c634300081c0033";

type VestingContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VestingContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VestingContract__factory extends ContractFactory {
  constructor(...args: VestingContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _token: string,
    _amount: BigNumberish,
    _distributed: BigNumberish,
    _beneficiary: string,
    _vestingPeriod: BigNumberish,
    _cliffTime: BigNumberish,
    _releasePeriod: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<VestingContract> {
    return super.deploy(
      _token,
      _amount,
      _distributed,
      _beneficiary,
      _vestingPeriod,
      _cliffTime,
      _releasePeriod,
      overrides || {}
    ) as Promise<VestingContract>;
  }
  override getDeployTransaction(
    _token: string,
    _amount: BigNumberish,
    _distributed: BigNumberish,
    _beneficiary: string,
    _vestingPeriod: BigNumberish,
    _cliffTime: BigNumberish,
    _releasePeriod: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _token,
      _amount,
      _distributed,
      _beneficiary,
      _vestingPeriod,
      _cliffTime,
      _releasePeriod,
      overrides || {}
    );
  }
  override attach(address: string): VestingContract {
    return super.attach(address) as VestingContract;
  }
  override connect(signer: Signer): VestingContract__factory {
    return super.connect(signer) as VestingContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VestingContractInterface {
    return new utils.Interface(_abi) as VestingContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VestingContract {
    return new Contract(address, _abi, signerOrProvider) as VestingContract;
  }
}
