import { expect } from "@playwright/test";

export const tradingInstrument = {
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

    longPositionGoToPlatformBtn: {
      locator: (page) =>
        page
          .locator("tbody tr")
          .nth(2)
          .locator('[data-type="market_go_to_platform_btn"]'),

      setup: async ({ getHelper, page }) => {
        const row = getHelper("longPositionToolTip");
        await row.scrollIntoViewIfNeeded();
        await page.mouse.wheel(0, 400); // Extra scroll is needed because the tooltip is taller than the viewport and the CTA button becomes visible only after additional scrolling.
        await row.hover();
      },

      expectation: {
        authorised: "redirects to platform",
        unauthorised: "shows signup form",
        unregistered: "shows signup form",
      },
    },

    shortPositionGoToPlatformBtn: {
      locator: (page) =>
        page
          .locator("tbody > tr")
          .nth(5)
          .locator('[data-type="market_go_to_platform_btn"]'),

      setup: async ({ getHelper, page }) => {
        const row = getHelper("shortPositionToolTip");
        await row.scrollIntoViewIfNeeded();
        await page.mouse.wheel(0, 450);
        await row.hover();
      },

      expectation: {
        authorised: "redirects to platform",
        unauthorised: "shows signup form",
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
      locatorIndex: 0,
      licenses: ["ASIC", "SCB", "CYSEC", "CMA"],
      expectation: {
        authorised: "redirects to platform",
        unauthorised: "shows signup form", // "shows login form" (in Checklist)
        unregistered: "shows signup form",
      },
    },
    readyToJoinSignUpBtn: {
      locator: `[data-type="banner_with_steps"]`,
      expectation: {
        authorised: "redirects to platform",
        unauthorised: "shows signup form",
        unregistered: "shows signup form",
      },
    },
  },

  helpers: {
    marketLink: `[data-type="markets_list_deep"]`, // On the market page

    longPositionToolTip: (page) =>
      page.locator("tbody tr").nth(2).locator("td").first(), //  On the trading instrument page

    shortPositionToolTip: (page) =>
      page.locator("tbody tr").nth(5).locator("td").first(), //  On the trading instrument page

    relatedMarketWidget: `[data-type="wdg_most_traded"]`, //  On the trading instrument page
  },

  // Redirect to the first trading instrument page
  setup: async ({ getHelper, page }) => {
    const link = getHelper("marketLink").first();
    const href = await link.getAttribute("href");

    await Promise.all([page.waitForURL(new RegExp(href)), link.click()]);

    await expect(page).toHaveURL(
      new RegExp(href.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
    );
  },
};
