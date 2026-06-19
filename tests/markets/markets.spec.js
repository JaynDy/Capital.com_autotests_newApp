/* eslint-disable playwright/no-conditional-in-test */
import { test } from "@playwright/test";
import { MarketsPage } from "../../framework/pages/MarketsPage";
import { expectMarketsState } from "../../framework/assertions/markets.assertions";
import { ctaRegistry } from "../../framework/test_data/CTA/markets.cta.registry";
import { generateCTATestCases } from "../../framework/test_data/CTA/generateCTATestCases";
import { isAllowed } from "../../framework/helpers/isAllowed";

const CTA_TEST_CASES = generateCTATestCases(ctaRegistry);

for (const testCase of CTA_TEST_CASES) {
  test(testCase.testName, async ({ page, baseURL }, testInfo) => {
    const projectUser = testInfo.project.use.userState;
    const projectLicense = testInfo.project.use.licenseName;
    const projectLang = testInfo.project.use.lang;

    // console.log({
    //   projectLicense,
    //   allowedLicenses: testCase.allowedLicenses,
    //   allowedLanguages: testCase.allowedLanguages,
    // });

    test.skip(
      !isAllowed(projectLicense, testCase.allowedLicenses),
      `Not available for ${projectLicense}`,
    );

    test.skip(
      !isAllowed(projectLang, testCase.allowedLanguages),
      `Not available for ${projectLang}`,
    );

    const marketPage = new MarketsPage(page, testCase.pageName);

    await marketPage.open(baseURL);

    await marketPage.cta[testCase.sectionName].click(testCase.actionName);

    const action =
      ctaRegistry[testCase.pageName].config[testCase.sectionName].actions[
        testCase.actionName
      ];

    const expectation = action.expectation[projectUser];
    console.log("USER:", projectUser);
    console.log("EXPtestCase.allowedLicenses &&ECTATION: ", expectation);

    await expectMarketsState(page, expectation, testInfo);
  });
}
