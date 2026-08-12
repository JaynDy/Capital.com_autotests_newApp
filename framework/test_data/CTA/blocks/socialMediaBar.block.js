export const socialMediaBar = {
  root: "footer",

  actions: {
    logo: {
      locator: `footer > div a`,
      locatorIndex: 0,
      expectation: {
        authorised: { type: "redirect", page: "main" },
        unauthorised: { type: "redirect", page: "main" },
        unregistered: { type: "redirect", page: "main" },
      },
      tags: "footer",
    },

    // SOCIAL ICON
    facebookIcon: {
      locator: 'footer a[href*="facebook.com"]',
      expectedHrefContains: "facebook.com",
      optional: true,
      expectation: {
        authorised: "opens external link",
        unauthorised: "opens external link",
        unregistered: "opens external link",
      },
      tags: "footer",
    },
    twitterIcon: {
      locator: 'footer a[href*="twitter.com"]',
      expectedHrefContains: "twitter.com",
      optional: true,
      expectation: {
        authorised: "opens external link",
        unauthorised: "opens external link",
        unregistered: "opens external link",
      },
      tags: "footer",
    },
    linkedinIcon: {
      locator: 'footer a[href*="linkedin.com"]',
      expectedHrefContains: "linkedin.com",
      optional: true,
      expectation: {
        authorised: "opens external link",
        unauthorised: "opens external link",
        unregistered: "opens external link",
      },
      tags: "footer",
    },
    instagramIcon: {
      locator: 'footer a[href*="instagram.com"]',
      expectedHrefContains: "instagram.com",
      optional: true,
      expectation: {
        authorised: "opens external link",
        unauthorised: "opens external link",
        unregistered: "opens external link",
      },
      tags: "footer",
    },
    youtubeIcon: {
      locator: 'footer a[href*="youtube.com"]',
      expectedHrefContains: "youtube.com",
      optional: true,
      expectation: {
        authorised: "opens external link",
        unauthorised: "opens external link",
        unregistered: "opens external link",
      },
      tags: "footer",
    },
    tiktokIcon: {
      locator: 'footer a[href*="tiktok.com"]',
      expectedHrefContains: "tiktok.com",
      optional: true,
      expectation: {
        authorised: "opens external link",
        unauthorised: "opens external link",
        unregistered: "opens external link",
      },
      tags: "footer",
    },
    redditIcon: {
      locator: 'footer a[href*="reddit.com"]',
      expectedHrefContains: "reddit.com",
      optional: true,
      expectation: {
        authorised: "opens external link",
        unauthorised: "opens external link",
        unregistered: "opens external link",
      },
      tags: "footer",
    },

    // MEDIA BTN
    downloadAppStoreBtn: {
      locator: `footer [data-type="footer_Ios"]`,
      expectedHrefContains: "https://app.appsflyer.com/id1230088754",
      expectation: {
        authorised: "opens external link",
        unauthorised: "opens external link",
        unregistered: "opens external link",
      },
      tags: "footer",
    },
    getGooglePlayBtn: {
      locator: `footer [data-type="footer_Googl"]`,
      expectedHrefContains: "https://app.appsflyer.com/com.capital.trading",
      expectation: {
        authorised: "opens external link",
        unauthorised: "opens external link",
        unregistered: "opens external link",
      },
      tags: "footer",
    },
    exploreAppGalleryBtn: {
      locator: `footer [data-type="footer_Huawei"]`,
      expectedHrefContains:
        "https://app.appsflyer.com/com.capital.trading.huawei-huawei",
      expectation: {
        authorised: "opens external link",
        unauthorised: "opens external link",
        unregistered: "opens external link",
      },
      tags: "footer",
    },
  },
};
