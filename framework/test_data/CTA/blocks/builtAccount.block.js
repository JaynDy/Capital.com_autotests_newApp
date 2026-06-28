export const builtAccountBlock = {
  root: `[data-type="plain_button"]`,
  actions: {
    signupBtn: {
      locator: `[data-type="plain_button"][href="/trading/signup"]`,
      expectation: {
        authorised: "redirects to platform",
        unauthorised: "shows signup form",
        unregistered: "shows signup form",
      },
    },
  },
};
