// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const LockModule = buildModule("LockModule", (m) => {

  const lock = m.contract("Lock");
  const vault = m.contract("Vault");

  return { lock, vault };
});

export default LockModule;
