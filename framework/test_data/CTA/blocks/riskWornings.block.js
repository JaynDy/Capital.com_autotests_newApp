export const riskWarningBlock = {
  root: `[data-type="country_switcher_footer"]`,

  actions: {
    riskDisclosureStatementLink: {
      locator: `a[href*="risk-disclosure-statement"]`,
      expectedHrefContains: "risk-disclosure-statement",
      optional: true,
      expectation: {
        authorised: "opens external link",
        unauthorised: "opens external link",
        unregistered: "opens external link",
      },
    },
    licenseText: {
      locator: `#RW_bottom`,
      licenseText: {
        SCB: ["F245"],
        CySEC: ["354252"],
      },
      expectation: {
        authorised: "exist corresponding license",
        unauthorised: "exist corresponding license",
        unregistered: "exist corresponding license",
      },
    },
    cookieSettingsLink: {
      locator: `#cookie-settings-btn-handler`,
      expectation: {
        authorised: "opens cookie menu",
        unauthorised: "opens cookie menu",
        unregistered: "opens cookie menu",
      },
    },
    sitemapLink: {
      locator: `footer a[href*="/sitemap"]`,
      optional: true, // ONLY SCB (MN,VI)
      expectation: {
        authorised: { type: "redirect", page: "sitemap" },
        unauthorised: { type: "redirect", page: "sitemap" },
        unregistered: { type: "redirect", page: "sitemap" },
      },
    },
    termsAndPoliciesLink: {
      locator: `footer a[href$="/terms-and-policies"]`,
      locatorIndex: 0,
      expectation: {
        authorised: { type: "redirect", page: "termsAndPolicies" },
        unauthorised: { type: "redirect", page: "termsAndPolicies" },
        unregistered: { type: "redirect", page: "termsAndPolicies" },
      },
    },
    complaintsProcedureLink: {
      locator: `footer a[href*="/complaints"]`,
      locatorIndex: 1,
      expectation: {
        authorised: { type: "redirect", page: "complaints" },
        unauthorised: { type: "redirect", page: "complaints" },
        unregistered: { type: "redirect", page: "complaints" },
      },
    },
  },
};
