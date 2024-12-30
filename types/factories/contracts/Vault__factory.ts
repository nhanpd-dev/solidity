/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Vault, VaultInterface } from "../../contracts/Vault";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessControlBadConfirmation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "neededRole",
        type: "bytes32",
      },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "SafeERC20FailedOperation",
    type: "error",
  },
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "WITHDRAW_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
    name: "maxWithdrawAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "callerConfirmation",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxAmount",
        type: "uint256",
      },
    ],
    name: "setMaxWithdrawAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "setPermissionWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
    ],
    name: "setToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_isEnable",
        type: "bool",
      },
    ],
    name: "setWithdrawEnable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawEnable",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5033600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100845760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161007b919061036e565b60405180910390fd5b610093816100f860201b60201c565b506100b46000801b6100a96101be60201b60201c565b6101c660201b60201c565b506100f27f5d8e12c39142ff96d79d04d15d1ba1269e4fe57bb9d26f43523628b34ba108ec6100e76101be60201b60201c565b6101c660201b60201c565b50610389565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b60006101d883836102c360201b60201c565b6102b857600160008085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506102556101be60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4600190506102bd565b600090505b92915050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006103588261032d565b9050919050565b6103688161034d565b82525050565b6000602082019050610383600083018461035f565b92915050565b6119b9806103986000396000f3fe608060405234801561001057600080fd5b50600436106101205760003560e01c80638da5cb5b116100ad578063d547741f11610071578063d547741f146102dd578063df74e028146102f9578063e02023a114610315578063f2fde38b14610333578063f516440c1461034f57610120565b80638da5cb5b1461023757806391d1485414610255578063a217fddf14610285578063b5b68afe146102a3578063b6b55f25146102c157610120565b8063248a9ca3116100f4578063248a9ca3146101a95780632f2ff15d146101d957806336568abe146101f5578063715018a614610211578063827a560b1461021b57610120565b8062f714ce1461012557806301ffc9a714610141578063144fa6d7146101715780631630e01a1461018d575b600080fd5b61013f600480360381019061013a9190611251565b61036d565b005b61015b600480360381019061015691906112e9565b61055a565b6040516101689190611331565b60405180910390f35b61018b6004803603810190610186919061138a565b6105d4565b005b6101a760048036038101906101a291906113b7565b610620565b005b6101c360048036038101906101be919061141a565b61064e565b6040516101d09190611456565b60405180910390f35b6101f360048036038101906101ee9190611471565b61066d565b005b61020f600480360381019061020a9190611471565b61068f565b005b61021961070a565b005b610235600480360381019061023091906114dd565b61071e565b005b61023f610743565b60405161024c9190611519565b60405180910390f35b61026f600480360381019061026a9190611471565b61076d565b60405161027c9190611331565b60405180910390f35b61028d6107d7565b60405161029a9190611456565b60405180910390f35b6102ab6107de565b6040516102b89190611331565b60405180910390f35b6102db60048036038101906102d69190611534565b6107f1565b005b6102f760048036038101906102f29190611471565b610a1b565b005b610313600480360381019061030e9190611534565b610a3d565b005b61031d610a4f565b60405161032a9190611456565b60405180910390f35b61034d600480360381019061034891906113b7565b610a73565b005b610357610af9565b6040516103649190611570565b60405180910390f35b600460009054906101000a900460ff166103bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103b3906115e8565b60405180910390fd5b600354821115610401576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103f890611654565b60405180910390fd5b610409610aff565b73ffffffffffffffffffffffffffffffffffffffff16610427610743565b73ffffffffffffffffffffffffffffffffffffffff16148061047657506104757f5d8e12c39142ff96d79d04d15d1ba1269e4fe57bb9d26f43523628b34ba108ec610470610aff565b61076d565b5b6104b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ac906116c0565b60405180910390fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb82846040518363ffffffff1660e01b81526004016105129291906116e0565b6020604051808303816000875af1158015610531573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610555919061171e565b505050565b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806105cd57506105cc82610b07565b5b9050919050565b6105dc610b71565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b61064a7f5d8e12c39142ff96d79d04d15d1ba1269e4fe57bb9d26f43523628b34ba108ec82610bf8565b5050565b6000806000838152602001908152602001600020600101549050919050565b6106768261064e565b61067f81610ce9565b6106898383610bf8565b50505050565b610697610aff565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146106fb576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107058282610cfd565b505050565b610712610b71565b61071c6000610def565b565b610726610b71565b80600460006101000a81548160ff02191690831515021790555050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000801b81565b600460009054906101000a900460ff1681565b6108316040518060400160405280601781526020017f73656e6465723a2025732c206465706f7369743a2025730000000000000000008152503330610eb5565b80600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b815260040161088d9190611519565b602060405180830381865afa1580156108aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108ce9190611760565b101561090f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610906906117d9565b60405180910390fd5b6109ea6040518060400160405280601881526020017f62616c616e63653a2025732c205f616d6f756e743a2025730000000000000000815250600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b81526004016109a39190611519565b602060405180830381865afa1580156109c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e49190611760565b83610f54565b610a18600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16333084610ff3565b50565b610a248261064e565b610a2d81610ce9565b610a378383610cfd565b50505050565b610a45610b71565b8060038190555050565b7f5d8e12c39142ff96d79d04d15d1ba1269e4fe57bb9d26f43523628b34ba108ec81565b610a7b610b71565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610aed5760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401610ae49190611519565b60405180910390fd5b610af681610def565b50565b60035481565b600033905090565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610b79610aff565b73ffffffffffffffffffffffffffffffffffffffff16610b97610743565b73ffffffffffffffffffffffffffffffffffffffff1614610bf657610bba610aff565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610bed9190611519565b60405180910390fd5b565b6000610c04838361076d565b610cde57600160008085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610c7b610aff565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a460019050610ce3565b600090505b92915050565b610cfa81610cf5610aff565b611075565b50565b6000610d09838361076d565b15610de457600080600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610d81610aff565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a460019050610de9565b600090505b92915050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b610f4f838383604051602401610ecd93929190611878565b6040516020818303038152906040527ffcec75e0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506110c6565b505050565b610fee838383604051602401610f6c939291906118b6565b6040516020818303038152906040527fca47c4eb000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506110c6565b505050565b61106f848573ffffffffffffffffffffffffffffffffffffffff166323b872dd868686604051602401611028939291906118f4565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506110e0565b50505050565b61107f828261076d565b6110c25780826040517fe2517d3f0000000000000000000000000000000000000000000000000000000081526004016110b992919061192b565b60405180910390fd5b5050565b6110dd816110d56111826111a3565b63ffffffff16565b50565b600080602060008451602086016000885af180611103576040513d6000823e3d81fd5b3d92506000519150506000821461111e57600181141561113a565b60008473ffffffffffffffffffffffffffffffffffffffff163b145b1561117c57836040517f5274afe70000000000000000000000000000000000000000000000000000000081526004016111739190611519565b60405180910390fd5b50505050565b60006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b6111ae819050919050565b6111b6611954565b565b600080fd5b6000819050919050565b6111d0816111bd565b81146111db57600080fd5b50565b6000813590506111ed816111c7565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061121e826111f3565b9050919050565b61122e81611213565b811461123957600080fd5b50565b60008135905061124b81611225565b92915050565b60008060408385031215611268576112676111b8565b5b6000611276858286016111de565b92505060206112878582860161123c565b9150509250929050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6112c681611291565b81146112d157600080fd5b50565b6000813590506112e3816112bd565b92915050565b6000602082840312156112ff576112fe6111b8565b5b600061130d848285016112d4565b91505092915050565b60008115159050919050565b61132b81611316565b82525050565b60006020820190506113466000830184611322565b92915050565b600061135782611213565b9050919050565b6113678161134c565b811461137257600080fd5b50565b6000813590506113848161135e565b92915050565b6000602082840312156113a05761139f6111b8565b5b60006113ae84828501611375565b91505092915050565b6000602082840312156113cd576113cc6111b8565b5b60006113db8482850161123c565b91505092915050565b6000819050919050565b6113f7816113e4565b811461140257600080fd5b50565b600081359050611414816113ee565b92915050565b6000602082840312156114305761142f6111b8565b5b600061143e84828501611405565b91505092915050565b611450816113e4565b82525050565b600060208201905061146b6000830184611447565b92915050565b60008060408385031215611488576114876111b8565b5b600061149685828601611405565b92505060206114a78582860161123c565b9150509250929050565b6114ba81611316565b81146114c557600080fd5b50565b6000813590506114d7816114b1565b92915050565b6000602082840312156114f3576114f26111b8565b5b6000611501848285016114c8565b91505092915050565b61151381611213565b82525050565b600060208201905061152e600083018461150a565b92915050565b60006020828403121561154a576115496111b8565b5b6000611558848285016111de565b91505092915050565b61156a816111bd565b82525050565b60006020820190506115856000830184611561565b92915050565b600082825260208201905092915050565b7f5769746864726177206973206e6f7420617661696c61626c6500000000000000600082015250565b60006115d260198361158b565b91506115dd8261159c565b602082019050919050565b60006020820190508181036000830152611601816115c5565b9050919050565b7f457863656564206d6178696d756e20616d6f756e740000000000000000000000600082015250565b600061163e60158361158b565b915061164982611608565b602082019050919050565b6000602082019050818103600083015261166d81611631565b9050919050565b7f43616c6c6572206973206e6f7420612077697468647261776572000000000000600082015250565b60006116aa601a8361158b565b91506116b582611674565b602082019050919050565b600060208201905081810360008301526116d98161169d565b9050919050565b60006040820190506116f5600083018561150a565b6117026020830184611561565b9392505050565b600081519050611718816114b1565b92915050565b600060208284031215611734576117336111b8565b5b600061174284828501611709565b91505092915050565b60008151905061175a816111c7565b92915050565b600060208284031215611776576117756111b8565b5b60006117848482850161174b565b91505092915050565b7f496e73756666696369656e7420616d6f756e742062616c616e63650000000000600082015250565b60006117c3601b8361158b565b91506117ce8261178d565b602082019050919050565b600060208201905081810360008301526117f2816117b6565b9050919050565b600081519050919050565b60005b83811015611822578082015181840152602081019050611807565b60008484015250505050565b6000601f19601f8301169050919050565b600061184a826117f9565b611854818561158b565b9350611864818560208601611804565b61186d8161182e565b840191505092915050565b60006060820190508181036000830152611892818661183f565b90506118a1602083018561150a565b6118ae604083018461150a565b949350505050565b600060608201905081810360008301526118d0818661183f565b90506118df6020830185611561565b6118ec6040830184611561565b949350505050565b6000606082019050611909600083018661150a565b611916602083018561150a565b6119236040830184611561565b949350505050565b6000604082019050611940600083018561150a565b61194d6020830184611447565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052605160045260246000fdfea26469706673582212205f723ba208747f8971e06602667c739ef517838fd44061393d41e9840242f8e264736f6c634300081c0033";

type VaultConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VaultConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Vault__factory extends ContractFactory {
  constructor(...args: VaultConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: string }): Promise<Vault> {
    return super.deploy(overrides || {}) as Promise<Vault>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Vault {
    return super.attach(address) as Vault;
  }
  override connect(signer: Signer): Vault__factory {
    return super.connect(signer) as Vault__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VaultInterface {
    return new utils.Interface(_abi) as VaultInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Vault {
    return new Contract(address, _abi, signerOrProvider) as Vault;
  }
}
