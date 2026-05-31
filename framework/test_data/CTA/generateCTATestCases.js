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

  if (licenseFilter && licenseFilter.length === 0) {
    throw new Error("No licenses provided");
  }

  for (const [pageName, pageData] of Object.entries(allPagesConfig)) {
    // LICENSE FILTER
    if (
      licenseFilter &&
      pageData.licenses &&
      !licenseFilter.some((license) => pageData.licenses.includes(license))
    ) {
      continue;
    }

    // PAGE FILTER
    if (pageFilter && !pageFilter.includes(pageName)) {
      continue;
    }

    for (const [sectionName, section] of Object.entries(pageData.config)) {
      // CTA FILTER
      if (ctaFilter && !ctaFilter.includes(sectionName)) {
        continue;
      }

      for (const [actionName] of Object.entries(section.actions)) {
        cases.push({
          pageName,
          pagePath: pageData.path,
          sectionName,
          actionName,
          testName: `${pageName} | ${sectionName} | ${actionName}`,
        });
      }
    }
  }

  return cases;
}
