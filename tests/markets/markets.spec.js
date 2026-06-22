/* eslint-disable playwright/no-conditional-in-test */
import { test } from "@playwright/test";
import { Page } from "../../framework/pages/Page.class";
import { expectPageState } from "../../framework/assertions/actions.assertions";
import { ctaRegistry } from "../../framework/test_data/CTA/pages.cta.registry";
// import { generateCTATestCases } from "../../framework/CTA/generateCTATestCases";
import { isAllowed } from "../../framework/helpers/isAllowed";
import { generateAllCTATestCases } from "../../framework/CTA/generateAllCTATestCases";
import { CTAComponent } from "../../framework/components/cta.component";
import { globalCtaRegistry } from "../../framework/test_data/CTA/global.cta.registry";

// const CTA_TEST_CASES = generateCTATestCases(ctaRegistry);
const CTA_TEST_CASES = generateAllCTATestCases();

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

    // SKIP by license
    test.skip(
      !isAllowed(projectLicense, testCase.allowedLicenses),
      `Not available for ${projectLicense}`,
    );

    // SKIP by language
    test.skip(
      !isAllowed(projectLang, testCase.allowedLanguages),
      `Not available for ${projectLang}`,
    );

    const marketPage = new Page(page, testCase.pageName);
    await marketPage.open(baseURL);

    // await marketPage.cta[testCase.sectionName].click(testCase.actionName);

    let component;
    let action;

    if (testCase.scope === "global") {
      const cta =
        globalCtaRegistry[testCase.blockName].config[testCase.ctaName];

      component = new CTAComponent(page, cta);
      action = cta.actions[testCase.actionName];
    } else {
      component = marketPage.cta[testCase.sectionName];

      action =
        ctaRegistry[testCase.pageName].config[testCase.sectionName].actions[
          testCase.actionName
        ];
    }

    // await component.click(testCase.actionName);

    // const locator = component.getActionLocator(testCase.actionName);
    const result = await component.click(testCase.actionName);

    if (result.skipped) {
      return testInfo.skip(`${testCase.actionName} absent on page`);
    }

    const expectation = action.expectation[projectUser];
    console.log("USER:", projectUser);
    console.log("EXPtestCase.allowedLicenses &&ECTATION: ", expectation);

    await expectPageState(page, action, expectation, testInfo, result.locator);
  });
}
