export const projectedUSInterestRatesLink = {
  root: `div:has(h2[data-id="part_2"])`,

  actions: {
    projectedUSInterestRatesLink: {
      locator: 'a[href*="analysis/projected-interest-rates-in-5-years"]',

      expectedHrefContains: "analysis/projected-interest-rates-in-5-years",

      optional: true,
      tags: ["retest"],
      issue: "Loc 388",

      expectation: {
        authorised: "opens link on currentURL",
        unauthorised: "opens link on currentURL",
        unregistered: "opens link on currentURL",
      },
    },
  },
};
