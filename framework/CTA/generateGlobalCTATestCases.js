export function generateGlobalCTATestCases(globalRegistry) {
  const cases = [];

  const ctaFilter = process.env.TEST_CTA
    ? process.env.TEST_CTA.split(",").map((c) => c.trim())
    : null;

  const actionFilter = process.env.TEST_ACTION
    ? process.env.TEST_ACTION.split(",").map((c) => c.trim())
    : null;

  for (const [blockName, block] of Object.entries(globalRegistry)) {
    if (ctaFilter && !ctaFilter.includes(blockName)) continue;

    for (const pageName of block.pages) {
      for (const [ctaName, cta] of Object.entries(block.config)) {
        for (const [actionName, actionConfig] of Object.entries(cta.actions)) {
          if (actionFilter && !actionFilter.includes(actionName)) continue;

          cases.push({
            scope: "global",
            pageName,
            blockName,
            ctaName,
            actionName,
            expectations: actionConfig.expectation,
            testName: `GLOBAL | ${pageName} page | ${blockName} | ${ctaName} | ${actionName}`,
          });
        }
      }
    }
  }

  return cases;
}
