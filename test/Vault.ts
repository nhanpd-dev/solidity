import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import chai, { expect } from "chai";
import { ethers } from "hardhat";
import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";
import chaiAsPromised from "chai-as-promised";
import { Vault, Lock } from "../typechain-types";

chai.use(chaiAsPromised);

function formatEther(amount: number | bigint) {
  return ethers.formatEther(amount.toString());
}

function parseUnits(amount: number) {
  return ethers.parseUnits(amount.toString(), 18);
}

describe("Vault", () => {
  let owner: HardhatEthersSigner;
  let alice: HardhatEthersSigner;
  let bob: HardhatEthersSigner;
  let carol: HardhatEthersSigner;
  let vault: Vault;
  let token: Lock;

  async function deployOneYearLockFixture() {
    // const [owner, alice, bob, carol]: HardhatEthersSigner[] =
    //   await ethers.getSigners();
    // const Token = await ethers.getContractFactory("Lock", owner);
    // const token = await Token.deploy();
    // const VaultContract = await ethers.getContractFactory("Vault");
    // const vault = await VaultContract.deploy();
    // vault.setToken(token.getAddress());
    // return { owner, alice, bob, carol, token, vault };
  }
  beforeEach(async () => {
    await ethers.provider.send("hardhat_reset", []);
    const [getOwner, getAlice, getBob, getCarol]: HardhatEthersSigner[] =
      await ethers.getSigners();
    owner= getOwner;
    alice= getAlice;
    bob= getBob;
    carol= getCarol;

    const Token = await ethers.getContractFactory("Lock", owner);
    token = await Token.deploy();
    const VaultContract = await ethers.getContractFactory("Vault");
    vault = await VaultContract.deploy();
    vault.setToken(token.getAddress());
  });

  it("Should deposit into the Vault", async function () {
    await token.transfer(alice.address, parseUnits(1 * 10 ** 6));

    const aliceAmount = await token.balanceOf(alice.address);
    await token.connect(alice).approve(vault, aliceAmount);
    const amountDeposit = parseUnits(500 * 10 ** 3);
    await vault.connect(alice).deposit(amountDeposit);
    console.log("=====> alice: ", alice.address);

    const vaultAmount = await token.balanceOf(vault.getAddress());
    expect(formatEther(vaultAmount)).equal(formatEther(amountDeposit));
  });

  it("Should withdraw", async function () {
    await vault.setPermissionWithdraw(bob.address);
    await vault.setWithdrawEnable(true);

    const withdrawAmaount = parseUnits(1 * 10 ** 6);
    await vault.setMaxWithdrawAmount(withdrawAmaount);
    await token.transfer(alice.address, parseUnits(1 * 10 ** 6));
    const aliceAmount = await token.balanceOf(alice.address);
    await token.connect(alice).approve(vault, aliceAmount);
    const amountDeposit = parseUnits(500 * 10 ** 3);
    await vault.connect(alice).deposit(amountDeposit);
    await vault.connect(bob).withdraw(parseUnits(300 * 10 ** 3), alice.address);
    const vaultAddress = await token.balanceOf(vault.getAddress());
    expect(vaultAddress).equal(parseUnits(200 * 10 ** 3));
    expect(await token.balanceOf(alice.address)).equal(
      parseUnits(800 * 10 ** 3)
    );
  });
});
