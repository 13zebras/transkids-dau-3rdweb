import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0xfd120CB0faC5A023DfCEe63b8f6533eEfd4a9134");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      
      name: "OurTransKidsDAO Membership",
      description: "A DAO devoted to supporting trans kids everywhere!",
      image: readFileSync("scripts/assets/our-trans-kids-dao-nft.gif"),
      
      // We're planning on not charging people for the drop, so we'll pass in the 0x0 address: AddressZero
      // you can set this to your own wallet address if you want to charge for the drop.
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });
    
    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address,
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata(),
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})()