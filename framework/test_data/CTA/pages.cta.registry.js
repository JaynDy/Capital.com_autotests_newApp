import { mainPageConfig } from "../../pages/Main.page.js";

import { sharesPageConfig } from "../../pages/Markets/ourMarketsTitle/shares.page.js";
import { forexPageConfig } from "../../pages/Markets/ourMarketsTitle/forex.page.js";
import { indicesPageConfig } from "../../pages/Markets/ourMarketsTitle/indices.page.js";
import { commoditiesPageConfig } from "../../pages/Markets/ourMarketsTitle/commodities.page.js";
import { cryptocurrenciesPageConfig } from "../../pages/Markets/ourMarketsTitle/cryptocurrencies.page.js";
import { marketsPageConfig } from "../../pages/Markets/ourMarketsTitle/markets.page.js";
import { bondsPageConfig } from "../../pages/Markets/ourMarketsTitle/bonds.page.js";
import { interestRatesPageConfig } from "../../pages/Markets/ourMarketsTitle/interestRates.page.js";

import { marketAnalysisPageConfig } from "../../pages/Markets/marketInfoTitle/marketAnalysis.page.js";
import { financeNewsPageConfig } from "../../pages/Markets/marketInfoTitle/financeNews.page.js";
import { marketPricingPageConfig } from "../../pages/Markets/marketInfoTitle/marketPricing.page.js";

import { sitemapConfig } from "../../pages/sitemap.page.js";
import { termsAndPoliciesConfig } from "../../pages/termsAndPolicies.page.js";
import { complaintsConfig } from "../../pages/complaints.page.js";

export const ctaRegistry = {
  main: {
    path: "",
    licenses: ["FCA", "ASIC", "SCB", "CySEC", "CMA"],
    config: mainPageConfig,
  },

  // MARKETS
  markets: {
    path: "markets",
    licenses: ["FCA", "ASIC", "SCB", "CySEC", "CMA"],
    config: marketsPageConfig,
  },

  shares: {
    path: "markets/shares",
    licenses: ["FCA", "ASIC", "SCB", "CySEC", "CMA"],
    config: sharesPageConfig,
  },

  forex: {
    path: "markets/forex",
    licenses: ["FCA", "ASIC", "SCB", "CySEC", "CMA"],
    config: forexPageConfig,
  },

  indices: {
    path: "markets/indices",
    licenses: ["FCA", "ASIC", "SCB", "CySEC", "CMA"],
    config: indicesPageConfig,
  },

  commodities: {
    path: "markets/commodities",
    licenses: ["FCA", "ASIC", "SCB", "CySEC", "CMA"],
    config: commoditiesPageConfig,
  },

  cryptocurrencies: {
    path: "markets/cryptocurrencies",
    licenses: ["ASIC", "SCB", "CySEC", "CMA"], // There is no cryptocurrencies page for FCA
    config: cryptocurrenciesPageConfig,
  },
  bonds: {
    path: "markets/bonds",
    licenses: ["FCA", "ASIC", "SCB", "CySEC", "CMA"],
    config: bondsPageConfig,
  },
  interestRates: {
    path: "markets/interest-rates",
    licenses: ["FCA", "ASIC", "SCB", "CySEC", "CMA"],
    config: interestRatesPageConfig,
  },
  marketAnalysis: {
    path: "analysis",
    licenses: ["FCA", "ASIC", "SCB", "CySEC", "CMA"],
    config: marketAnalysisPageConfig,
  },
  financeNews: {
    path: "news",
    licenses: ["SCB"],
    config: financeNewsPageConfig, // There is only for SCB
  },
  marketPricing: {
    path: "about-us/how-our-markets-are-priced",
    licenses: ["FCA", "CySEC"],
    config: marketPricingPageConfig, // There is only for FCA & CYSEC
  },

  // FOOTER
  sitemap: {
    path: "sitemap",
    licenses: ["FCA", "ASIC", "SCB", "CySEC", "CMA"],
    config: sitemapConfig,
  },
  termsAndPolicies: {
    path: "terms-and-policies",
    licenses: ["FCA", "ASIC", "SCB", "CySEC", "CMA"],
    config: termsAndPoliciesConfig,
  },
  complaints: {
    path: "help/complaints",
    licenses: ["FCA", "ASIC", "SCB", "CySEC", "CMA"],
    config: complaintsConfig,
  },
};
