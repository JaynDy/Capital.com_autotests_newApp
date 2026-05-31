export const readyToJoinBlock = {
  root: `div:has(h2:has-text("Ready to join a leading broker?"))`,
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
