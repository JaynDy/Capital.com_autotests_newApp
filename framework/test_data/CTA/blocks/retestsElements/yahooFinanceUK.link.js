export const yahooFinanceUKLink = {
  root: `div:has(h2[data-id="part_1"])`,

  actions: {
    yahooFinanceUKLink: {
      locator: ':scope a:has-text("Yahoo Finance UK")',

      expectedHrefContains:
        "finance.yahoo.com/news/latest-rolls-royce-share-price-065013450.htm",

      optional: true,
      tags: ["retest"],
      issue: "WEB 240",

      expectation: {
        authorised: "opens link on currentURL",
        unauthorised: "opens link on currentURL",
        unregistered: "opens link on currentURL",
      },
    },
  },
};
