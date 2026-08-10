export const socialMediaMyAccountBlock = {
  root: "footer",

  actions: {
    // SOCIAL ICON
    facebookIcon: {
      locator: (page) =>
        page.locator("footer").getByRole("link", {
          name: "Facebook",
        }),

      expectedHrefContains: "facebook.com",

      optional: true,
      tags: ["retest"],
      issue: "WEB 380",

      expectation: {
        authorised: "opens external link",
        unauthorised: "opens external link",
        unregistered: "opens external link",
      },
    },
    twitterIcon: {
      locator: (page) =>
        page.locator("footer").getByRole("link", {
          name: "twitter",
        }),
      expectedHrefContains: "twitter.com",
      optional: true,
      tags: ["retest"],
      issue: "WEB 380",
      expectation: {
        authorised: "opens external link",
        unauthorised: "opens external link",
        unregistered: "opens external link",
      },
    },
    youtubeIcon: {
      locator: (page) =>
        page.locator("footer").getByRole("link", {
          name: "youtube",
        }),
      expectedHrefContains: "youtube.com",
      optional: true,
      tags: ["retest"],
      issue: "WEB 380",
      expectation: {
        authorised: "opens external link",
        unauthorised: "opens external link",
        unregistered: "opens external link",
      },
    },
    linkedinIcon: {
      locator: (page) =>
        page.locator("footer").getByRole("link", {
          name: "linkedin",
        }),
      expectedHrefContains: "linkedin.com",
      optional: true,
      tags: ["retest"],
      issue: "WEB 380",
      expectation: {
        authorised: "opens external link",
        unauthorised: "opens external link",
        unregistered: "opens external link",
      },
    },
    instagramIcon: {
      locator: (page) =>
        page.locator("footer").getByRole("link", {
          name: "instagram",
        }),
      expectedHrefContains: "instagram.com",
      optional: true,
      tags: ["retest"],
      issue: "WEB 380",
      expectation: {
        authorised: "opens external link",
        unauthorised: "opens external link",
        unregistered: "opens external link",
      },
    },
  },
};
