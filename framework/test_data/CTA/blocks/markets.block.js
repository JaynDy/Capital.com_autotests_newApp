export const marketsBlock = {
  root: `[data-type="markets_list"]`,

  actions: {
    addToFavouriteBtn: {
      locator: `[data-type="market_add_fav"]`,
      expectation: {
        authorised: "redirects to platform",
        unauthorised: "shows signup form", // "shows login form" (in Checklist)
        unregistered: "shows signup form",
      },
    },

    goToPlatformBtn: {
      locator: `[data-type="market_go_to_platform_btn"]`,
      expectation: {
        authorised: "redirects to platform",
        unauthorised: "shows signup form", // "shows login form" (in Checklist)
        unregistered: "shows signup form",
      },
    },

    viewDetailedChartBtn: {
      locator: `[data-type="market_view_chart"]`,
      expectation: {
        authorised: "redirects to platform",
        unauthorised: "shows signup form", // "shows login form" (in Checklist)
        unregistered: "shows signup form",
      },
    },
    sellBtn: {
      locator: `[data-type="market_sell_btn"]`,
      expectation: {
        authorised: "redirects to platform",
        unauthorised: "shows login form",
        unregistered: "shows login form", // "shows signup form" (in Checklist)
      },
    },
    buyBtn: {
      locator: `[data-type="market_buy_btn"]`,
      expectation: {
        authorised: "redirects to platform",
        unauthorised: "shows login form",
        unregistered: "shows login form", // "shows signup form" (in Checklist)
      },
    },
    alertBtn: {
      locator: `[data-type="market_alerts"]`,
      expectation: {
        authorised: "redirects to platform",
        unauthorised: "shows signup form", // "shows login form" (in Checklist)
        unregistered: "shows signup form",
      },
    },

    tradedBtn: {
      locator: `[data-type="wdg_most_traded_btn"]`,
      expectation: {
        authorised: "redirects to platform",
        unauthorised: "shows signup form", // "shows login form" (in Checklist)
        unregistered: "shows signup form",
      },
    },
  },

  helpers: {
    marketLink: `[data-type="markets_list_deep"]`,

    longPositionToolTip: (root) =>
      root.locator("tr", {
        hasText: "Long position overnight funding adjustment",
      }),

    shortPositionToolTip: (root) =>
      root.locator("tr", {
        hasText: "Short position overnight funding adjustment",
      }),

    relatedMarketWidget: `[data-type="wdg_most_traded"]`,
  },
};
