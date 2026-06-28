export const mostTradedMarketsBlock = {
  root: `[data-sentry-component="MarketMovers"]`,

  availability: {
    marketAnalysis: {
      licenses: ["ASIC", "SCB", "CySEC", "CMA"],
      languages: [
        "en",
        "ar",
        "de",
        "es",
        "fr",
        "ru",
        "zh",
        "nl",
        "it",
        "ro",
        "pl",
        "hu",
        "el",
      ], // SCB except MN,VI
    },
    financeNews: { licenses: ["SCB"], languages: ["en"] },
  },

  actions: {
    tradedBtn: {
      locator: `[data-type="wdg_most_traded_btn"]`,
      locatorIndex: 0, // There are some buttons with the same data-type, we get the first one

      expectation: {
        authorised: "redirects to platform",
        unauthorised: "shows signup form", // "shows login form" (in Checklist)
        unregistered: "shows signup form",
      },
    },
  },
};
