import { sharesPageConfig } from "./pageConfigs/ourMarketsTitle/shares.page.js";
import { forexPageConfig } from "./pageConfigs/ourMarketsTitle/forex.page.js";
import { indicesPageConfig } from "./pageConfigs/ourMarketsTitle/indices.page.js";
import { commoditiesPageConfig } from "./pageConfigs/ourMarketsTitle/commodities.page.js";
import { cryptocurrenciesPageConfig } from "./pageConfigs/ourMarketsTitle/cryptocurrencies.page.js";
import { marketsPageConfig } from "./pageConfigs/ourMarketsTitle/markets.page.js";
import { bondsPageConfig } from "./pageConfigs/ourMarketsTitle/bonds.page.js";

import { interestRatesPageConfig } from "./pageConfigs/ourMarketsTitle/interestRates.page.js";
import { marketAnalysisPageConfig } from "./pageConfigs/marketInfoTitle/marketAnalysis.page.js";
import { financeNewsPageConfig } from "./pageConfigs/marketInfoTitle/financeNews.page.js";
import { marketPricingPageConfig } from "./pageConfigs/marketInfoTitle/marketPricing.page.js";

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
  bonds: {
    path: "markets/bonds",
    licenses: ["FCA", "ASIC", "SCB", "CYSEC", "CMA"],
    config: bondsPageConfig,
  },
  interestRates: {
    path: "markets/interest-rates",
    licenses: ["FCA", "ASIC", "SCB", "CYSEC", "CMA"],
    config: interestRatesPageConfig,
  },
  marketAnalysis: {
    path: "analysis",
    licenses: ["FCA", "ASIC", "SCB", "CYSEC", "CMA"],
    config: marketAnalysisPageConfig,
  },
  financeNews: {
    path: "news",
    licenses: ["SCB"],
    config: financeNewsPageConfig, // There is only for SCB
  },
  marketPricing: {
    path: "about-us/how-our-markets-are-priced",
    licenses: ["FCA", "CYSEC"],
    config: marketPricingPageConfig, // There is only for FCA & CYSEC
  },
};
