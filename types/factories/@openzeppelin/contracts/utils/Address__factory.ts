/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Address,
  AddressInterface,
} from "../../../../@openzeppelin/contracts/utils/Address";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "AddressEmptyCode",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220c3d621977f064e384d77a7f38001fcbf2e2b714139e5fb526a1fd3072a79689164736f6c634300081c0033";

type AddressConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AddressConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Address__factory extends ContractFactory {
  constructor(...args: AddressConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: string }): Promise<Address> {
    return super.deploy(overrides || {}) as Promise<Address>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Address {
    return super.attach(address) as Address;
  }
  override connect(signer: Signer): Address__factory {
    return super.connect(signer) as Address__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AddressInterface {
    return new utils.Interface(_abi) as AddressInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Address {
    return new Contract(address, _abi, signerOrProvider) as Address;
  }
}
