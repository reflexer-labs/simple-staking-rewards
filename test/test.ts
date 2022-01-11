import { ethers } from "hardhat";

import { takeSnapshot, restoreSnapshot } from "./helpers";

describe("SimpleStakingRewards", function () {
  let snapshotId: string;
  let accounts: any[];

  before(async () => {
    accounts = await ethers.getSigners();

    snapshotId = await takeSnapshot();
  });

  afterEach(async () => {
    await restoreSnapshot(snapshotId);
    snapshotId = await takeSnapshot();
  });
});
