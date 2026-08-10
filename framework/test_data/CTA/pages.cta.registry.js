import { mainPageConfig } from "../../pages/Main.page.js";

// MARKETS
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

// FOOTER
import { sitemapConfig } from "../../pages/sitemap.page.js";
import { termsAndPoliciesConfig } from "../../pages/termsAndPolicies.page.js";
import { complaintsConfig } from "../../pages/complaints.page.js";

// Retests
import { helpCentreMyAccountConfig } from "../../pages/RetestPages/helpCentreMyAccount.page.js";
import { iagCfdInstrumentConfig } from "../../pages/RetestPages/iagCfdInstrument.page.js";
import { rollsRoycePriceConfig } from "../../pages/RetestPages/rollsRoycePrice.page.js";
import { tradeBitcoinConfig } from "../../pages/RetestPages/tradeBitcoin.page.js";
import { projectedEcbRateRiseIn5YearsConfig } from "../../pages/RetestPages/projectedEcbRateRiseIn5Years.page.js";

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
    path: (license) => {
      if (license === "CySEC") {
        return "terms-and-policies/complaints-procedure";
      }
      return "help/complaints";
    },
    licenses: ["FCA", "ASIC", "SCB", "CySEC", "CMA"],
    config: complaintsConfig,
  },

  // RETEST PAGES

  //WEB 380
  helpCentreMyAccount: {
    urls: {
      CMA: "https://help.capitalccbah.com/hc/en-us/categories/9622507722258-My-account",
      CySEC:
        "https://help.capitalccsv.com/hc/en-us/categories/4416956531474-YOUR-ACCOUNT",
    },
    licenses: ["CySEC", "CMA"],
    languages: ["en"],
    config: helpCentreMyAccountConfig,
  },

  //WEB 32
  iagCfdInstrument: {
    path: "markets/shares/international-consolidated-airlines-group-sa-gbp-share-price-1",
    licenses: ["SCB", "CySEC"],
    languages: ["en"],
    // availability: [
    //   { license: "SCB", language: "en" },
    //   { license: "CySEC", language: "en" },
    // ],
    config: iagCfdInstrumentConfig,
  },

  //WEB 240
  rollsRoycePrice: {
    path: "analysis/rolls-royce-share-price-prediction",
    licenses: ["ASIC", "CMA", "SCB", "CySEC"],
    languages: ["en"],
    config: rollsRoycePriceConfig,
  },

  //WEB 247
  tradeBitcoin: {
    path: "learn/market-guides/trade-bitcoin",
    licenses: ["FCA", "ASIC", "SCB", "CySEC", "CMA"],
    config: tradeBitcoinConfig,
  },

  //------ web 297 - complaints link is not working in PDF document, so I can not locate the "link" in PDF document.
  // complaintsHandlingProcedureWebsite: {
  //   urls: "https://img.capital.com/docs/Complaints-Handling-Procedure-Website-June-2025-.pdf",
  //   licenses: ["FCA"],
  //   config: complaintsConfig,
  // },

  //LOC 388
  projectedEcbRateRiseIn5Years: {
    path: "analysis/projected-ecb-rate-rise-in-5-years",
    licenses: ["SCB"],
    languages: ["ru"],
    config: projectedEcbRateRiseIn5YearsConfig,
  },
};
