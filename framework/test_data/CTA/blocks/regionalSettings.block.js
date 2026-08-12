export const regionalSettingsModalWindow = {
  root: `[data-type="country_switcher_footer"]`,

  actions: {
    countrySwitcherBtn: {
      locator: `button[data-type="country_switcher_footer"] >> nth=0`,
      expectation: {
        authorised: "opens regional settings window",
        unauthorised: "opens regional settings window",
        unregistered: "opens regional settings window",
      },
      tags: "footer",
    },
    langSwitcherBtn: {
      locator: `button[data-type="country_switcher_footer"] >> nth=1`,
      expectation: {
        authorised: "opens regional settings window",
        unauthorised: "opens regional settings window",
        unregistered: "opens regional settings window",
      },
      tags: "footer",
    },

    // countries: [
    //   {
    //     license: "CMA",
    //     locator: `[data-type="nav_country_united_arab_emirates"]`,
    //   },
    //   { license: "FCA", locator: `[data-type="nav_country_united_kingdom"]` },
    //   { license: "ASIC", locator: `[data-type="nav_country_australia""]` },
    // ],

    // helper: {
    //   countrySwitcher: `[data-type="country_switcher_ctry"]`,
    //   langSwitcher: `[data-type="country_switcher_lng"]`,
    //   countrySearch: `[placeholder="Country search"]`,
    // },
  },
};
