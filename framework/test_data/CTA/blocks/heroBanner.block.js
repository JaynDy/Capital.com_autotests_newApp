export const heroBanner = {
  root: `[data-type="homepage_hero_banner"]`,
  actions: {
    signupBtn: {
      locator: `[data-type="homepage_hero_banner_btn2_signup"]`,
      expectation: {
        authorised: "redirects to platform",
        unauthorised: "shows signup form",
        unregistered: "shows signup form",
      },
    },
  },
};
