export const socialMediaBar = {
  root: (page) => page.locator(".Kzxh mdGP JRRE YdLl"),

  actions: {
    logo: {
      locator: (page) => page.locator("a.cXA2 AMZV"),
      expectation: {
        authorised: "redirect to the main page",
        unauthorised: "redirect to the main page",
        unregistered: "redirect to the main page",
      },
    },

    facebookIcon: {
      locator: (page) => page.locator('.ne2J.UOsT a[href*="facebook.com"]'),
      expectedDomain: "facebook.com",
      expectation: {
        authorised: "opens external link",
        unauthorised: "opens external link",
        unregistered: "opens external link",
      },
    },
    twitterIcon: {
      locator: (page) => page.locator('.ne2J.UOsT a[href*="twitter.com"]'),
      expectedDomain: "twitter.com",
      expectation: {
        authorised: "opens external link",
        unauthorised: "opens external link",
        unregistered: "opens external link",
      },
    },
    linkedinIcon: {
      locator: (page) => page.locator('.ne2J.UOsT a[href*="linkedin.com"]'),
      expectedDomain: "linkedin.com",
      expectation: {
        authorised: "opens external link",
        unauthorised: "opens external link",
        unregistered: "opens external link",
      },
    },
    instagramIcon: {
      locator: (page) => page.locator('.ne2J.UOsT a[href*="instagram.com"]'),
      expectedDomain: "instagram.com",
      expectation: {
        authorised: "opens external link",
        unauthorised: "opens external link",
        unregistered: "opens external link",
      },
    },
    youtubeIcon: {
      locator: (page) => page.locator('.ne2J.UOsT a[href*="youtube.com"]'),
      expectedDomain: "youtube.com",
      expectation: {
        authorised: "opens external link",
        unauthorised: "opens external link",
        unregistered: "opens external link",
      },
    },
    tiktokIcon: {
      locator: (page) => page.locator('.ne2J.UOsT a[href*="tiktok.com"]'),
      expectedDomain: "tiktok.com",
      expectation: {
        authorised: "opens external link",
        unauthorised: "opens external link",
        unregistered: "opens external link",
      },
    },
    redditIcon: {
      locator: (page) => page.locator('.ne2J.UOsT a[href*="reddit.com"]'),
      expectedDomain: "reddit.com",
      expectation: {
        authorised: "opens external link",
        unauthorised: "opens external link",
        unregistered: "opens external link",
      },
    },

    downloadAppStoreBtn: {
      locator: (page) => page.locator(`data-type="footer_Ios" `),
      expectedDomain:
        "https://app.appsflyer.com/id1230088754?cp_device_id=c9c27236-061d-4532-aa3c-6d4c1741c351&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true",
      expectation: {
        authorised: "opens external link",
        unauthorised: "opens external link",
        unregistered: "opens external link",
      },
    },
    getGooglePlayBtn: {
      locator: (page) => page.locator(`data-type="footer_Googl"`),
      expectedDomain:
        "https://app.appsflyer.com/com.capital.trading?cp_device_id=c9c27236-061d-4532-aa3c-6d4c1741c351&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true",
      expectation: {
        authorised: "opens external link",
        unauthorised: "opens external link",
        unregistered: "opens external link",
      },
    },
    exploreAppGalleryBtn: {
      locator: (page) => page.locator(`data-type="footer_Huawei"`),
      expectedDomain:
        "https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=c9c27236-061d-4532-aa3c-6d4c1741c351&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true",
      expectation: {
        authorised: "opens external link",
        unauthorised: "opens external link",
        unregistered: "opens external link",
      },
    },
  },
};
