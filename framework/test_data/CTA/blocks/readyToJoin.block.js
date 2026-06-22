export const readyToJoinBlock = {
  root: `[data-type="banner_with_steps"]`,

  availability: {
    marketPricing: { licenses: ["FCA", "CySEC"] },
    marketAnalysis: {
      licenses: ["SCB"],
      languages: ["en", "ar", "de", "es", "fr", "ru", "zh"], // SCB except MN,VI
    },
  },

  actions: {
    signupBtn: {
      locator: `[data-type="banner_with_steps"]`,
      expectation: {
        authorised: "redirects to platform",
        unauthorised: "shows signup form",
        unregistered: "shows signup form",
      },
    },
  },
};
