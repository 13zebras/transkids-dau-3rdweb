import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x7Ee255F2A1856ebDf2e104D2A816902dE51eE539",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Trans Kids Pride",
        description: "This NFT will give you access to OurTransKidsDAO!",
        image: readFileSync("scripts/assets/our-trans-kids-dao-nft.gif"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()