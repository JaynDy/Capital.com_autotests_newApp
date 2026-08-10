// NOT working - there is not HTML elements in PDF document, so I can locate the "link".

export const complaintsLink = {
  root: `embed name="plugin"`,

  actions: {
    complaintsLink: {
      locator: 'embed name="plugin"',

      expectedHrefContains: "help/complaints",

      optional: true,
      tags: ["retest"],
      issue: "WEB 297",

      expectation: {
        authorised: "opens pdf document",
        unauthorised: "opens pdf document",
        unregistered: "opens pdf document",
      },
    },
  },
};
