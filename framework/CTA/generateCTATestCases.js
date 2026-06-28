import { normalizeAvailability } from "../helpers/normalizeAvailability";

export function generateCTATestCases(allPagesConfig) {
  const cases = [];

  const licenseFilter = process.env.TEST_LICENSE
    ? process.env.TEST_LICENSE.split(",").map((l) => l.trim())
    : null;

  const pageFilter = process.env.TEST_PAGE
    ? process.env.TEST_PAGE.split(",").map((p) => p.trim())
    : null;

  const ctaFilter = process.env.TEST_CTA
    ? process.env.TEST_CTA.split(",").map((c) => c.trim())
    : null;

  const actionFilter = process.env.TEST_ACTION
    ? process.env.TEST_ACTION.split(",").map((c) => c.trim())
    : null;

  const langFilter = process.env.TEST_LANG
    ? process.env.TEST_LANG.split(",").map((l) => l.trim())
    : null;

  if (licenseFilter && licenseFilter.length === 0) {
    throw new Error("No licenses provided");
  }

  for (const [pageName, pageData] of Object.entries(allPagesConfig)) {
    // PAGE FILTER
    if (licenseFilter) {
      const isPageAllowed = pageData.licenses?.some((l) =>
        licenseFilter.includes(l),
      );

      if (!isPageAllowed) continue;
    }

    // PAGE NAME FILTER
    if (pageFilter && !pageFilter.includes(pageName)) continue;

    for (const [sectionName, section] of Object.entries(pageData.config)) {
      // CTA FILTER
      if (ctaFilter && !ctaFilter.includes(sectionName)) continue;

      const {
        licenses: sectionAllowedLicenses,
        languages: sectionAllowedLanguages,
      } = normalizeAvailability(section.availability?.[pageName]);

      if (licenseFilter && sectionAllowedLicenses) {
        const isSectionAllowed = sectionAllowedLicenses.some((l) =>
          licenseFilter.includes(l),
        );
        if (!isSectionAllowed) continue;
      }
      if (langFilter && sectionAllowedLanguages) {
        const isSectionAllowed = sectionAllowedLanguages.some((l) =>
          langFilter.includes(l),
        );
        if (!isSectionAllowed) continue;
      }

      for (const [actionName, actionConfig] of Object.entries(
        section.actions,
      )) {
        // ACTION NAME FILTER
        if (actionFilter && !actionFilter.includes(actionName)) continue;

        // ACTION LICENSE OVERRIDE (if exists)
        const actionAllowedLicenses =
          actionConfig.licenses ?? sectionAllowedLicenses;

        // ACTION LANGUAGE OVERRIDE (if exists)
        const actionAllowedLanguages =
          actionConfig.languages ?? sectionAllowedLanguages;

        if (licenseFilter && actionAllowedLicenses) {
          const isAllowed = actionAllowedLicenses.some((l) =>
            licenseFilter.includes(l),
          );
          if (!isAllowed) continue;
        }
        if (langFilter && actionAllowedLanguages) {
          const isAllowed = actionAllowedLanguages.some((l) =>
            langFilter.includes(l),
          );
          if (!isAllowed) continue;
        }
        // console.log({
        //   pageName,
        //   sectionName,
        //   sectionAllowedLicenses,
        //   sectionAllowedLanguages,
        // });

        cases.push({
          scope: "page",
          pageName,
          pagePath: pageData.path,
          sectionName,
          actionName,
          allowedLicenses: actionAllowedLicenses,
          allowedLanguages: actionAllowedLanguages,
          expectations: actionConfig.expectation,
          testName: `${pageName} page | ${sectionName} | ${actionName}`,
        });
      }
    }
  }

  return cases;
}
