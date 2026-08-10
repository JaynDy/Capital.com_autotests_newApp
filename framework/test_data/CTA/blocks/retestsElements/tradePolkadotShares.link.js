export const tradePolkadotSharesLink = {
  root: `[data-type="tiles_w_img_link2_anchor"], [data-type="tiles_w_img_link2_custom"]`,

  actions: {
    tradePolkadotSharesLink: {
      locator:
        '[data-type="tiles_w_img_link2_anchor"], [data-type="tiles_w_img_link2_custom"]',

      expectedHrefContains: "learn/market-guides/trade-polkadot",

      optional: true,
      tags: ["retest"],
      issue: "WEB 247",

      expectation: {
        authorised: "opens pdf document",
        unauthorised: "opens pdf document",
        unregistered: "opens pdf document",
      },
    },
  },
};
