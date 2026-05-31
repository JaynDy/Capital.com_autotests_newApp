import { sharesPageConfig } from "./pageConfigs/shares.page.js";
import { forexPageConfig } from "./pageConfigs/forex.page.js";
import { indicesPageConfig } from "./pageConfigs/indices.page.js";
import { commoditiesPageConfig } from "./pageConfigs/commodities.page.js";
import { cryptocurrenciesPageConfig } from "./pageConfigs/cryptocurrencies.page.js";
import { marketsPageConfig } from "./pageConfigs/markets.page.js";

export const ctaRegistry = {
  markets: {
    path: "markets",
    licenses: ["FCA", "ASIC", "SCB", "CYSEC", "CMA"],
    config: marketsPageConfig,
  },

  shares: {
    path: "markets/shares",
    licenses: ["FCA", "ASIC", "SCB", "CYSEC", "CMA"],
    config: sharesPageConfig,
  },

  forex: {
    path: "markets/forex",
    licenses: ["FCA", "ASIC", "SCB", "CYSEC", "CMA"],
    config: forexPageConfig,
  },

  indices: {
    path: "markets/indices",
    licenses: ["FCA", "ASIC", "SCB", "CYSEC", "CMA"],
    config: indicesPageConfig,
  },

  commodities: {
    path: "markets/commodities",
    licenses: ["FCA", "ASIC", "SCB", "CYSEC", "CMA"],
    config: commoditiesPageConfig,
  },

  cryptocurrencies: {
    path: "markets/cryptocurrencies",
    licenses: ["ASIC", "SCB", "CYSEC", "CMA"], // There is no cryptocurrencies page for FCA
    config: cryptocurrenciesPageConfig,
  },
};
