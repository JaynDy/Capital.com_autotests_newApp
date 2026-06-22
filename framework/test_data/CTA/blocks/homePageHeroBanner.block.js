export const homePageHeroBanner = {
  root: `[data-sentry-component="HeroWidget"]`,
  actions: {
    signupBtn: {
      locator: `[data-type="homepage_hero_banner_btn"]`,
      expectation: {
        authorised: "redirects to platform",
        unauthorised: "shows signup form",
        unregistered: "shows signup form",
      },
    },
  },
};
