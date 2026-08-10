export const fyLink = {
  root: `p:has-text("However, the COVID-19")`,

  actions: {
    fyLink: {
      locator: ':scope a[data-doc-link="IS_LINK_TO_DOC"]',

      expectedHrefContains:
        "interim-management-report-for-full-year-to-december-31-2020.pdf",

      optional: true,
      tags: ["retest"],
      issue: "WEB 32",

      expectation: {
        authorised: "opens pdf document",
        unauthorised: "opens pdf document",
        unregistered: "opens pdf document",
      },
    },
  },
};
