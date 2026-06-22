import { mostTradedMarketsBlock } from "../../../test_data/CTA/blocks/mostTradedMarkets.block.js";
import { readyToJoinBlock } from "../../../test_data/CTA/blocks/readyToJoin.block.js";

// console.log("mostTradedMarketsBlock =", mostTradedMarketsBlock);
// console.log("readyToJoinBlock =", readyToJoinBlock);

export const marketAnalysisPageConfig = {
  mostTradedMarketsBlock, // CYSEC +, ASIC +, FCA -, CMA +, SCB +
  readyToJoinBlock, // CYSEC -, ASIC -, FCA -, CMA -, SCB +
};

// heroBanner - not on SCB
