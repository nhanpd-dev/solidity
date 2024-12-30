import {
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre from "hardhat";

describe("Lock", function () {
  async function deployOneYearLockFixture() {
    const ONE_GWEI = 1_000_000_000;
    const lockedAmount = ONE_GWEI;
    const [owner, otherAccount, otherAccount2] = await hre.ethers.getSigners();

    const Lock = await hre.ethers.getContractFactory("Lock", owner);
    const lock = await Lock.deploy();
    const ownerAmount = await lock.balanceOf(owner.address);
    return { lock, lockedAmount, owner, otherAccount, ownerAmount, otherAccount2 };
  }

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { lock, owner, ownerAmount } = await loadFixture(deployOneYearLockFixture);
      console.log('====>ownerAmount: ', ownerAmount);
      expect(await lock.owner()).to.equal(owner.address);
      expect(await lock.totalSupply()).to.equal((ownerAmount));
    });

    it("Should transfer tokens beetwen account", async function () {
      const { lock, otherAccount, lockedAmount, otherAccount2 } = await loadFixture(deployOneYearLockFixture);
      await lock.transfer(otherAccount.address, lockedAmount);
      expect(await lock.balanceOf(otherAccount.address)).to.equal(lockedAmount);
      await lock.connect(otherAccount).transfer(otherAccount2.address, lockedAmount);
      expect(await lock.balanceOf(otherAccount2.address)).to.equal(lockedAmount);
    });
  });
});
