export function generateGlobalCTATestCases(globalRegistry) {
  const cases = [];

  const ctaFilter = process.env.TEST_CTA
    ? process.env.TEST_CTA.split(",").map((c) => c.trim())
    : null;

  const actionFilter = process.env.TEST_ACTION
    ? process.env.TEST_ACTION.split(",").map((c) => c.trim())
    : null;

  const tagFilter = process.env.TEST_TAG
    ? process.env.TEST_TAG.split(",").map((t) => t.trim())
    : null;

  for (const [blockName, block] of Object.entries(globalRegistry)) {
    if (ctaFilter && !ctaFilter.includes(blockName)) continue;

    for (const pageName of block.pages) {
      for (const [ctaName, cta] of Object.entries(block.config)) {
        for (const [actionName, actionConfig] of Object.entries(cta.actions)) {
          if (actionFilter && !actionFilter.includes(actionName)) continue;
          if (
            tagFilter &&
            !actionConfig.tags?.some((tag) => tagFilter.includes(tag))
          ) {
            continue;
          }

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
