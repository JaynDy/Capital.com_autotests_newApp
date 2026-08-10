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

const PROJECT_LICENSES = process.env.TEST_LICENSE?.split(",");
const PROJECT_LANGS = process.env.TEST_LANG?.split(",");

const FILTERED_TEST_CASES = CTA_TEST_CASES.filter((testCase) => {
  if (
    PROJECT_LICENSES &&
    testCase.pageLicenses &&
    !testCase.pageLicenses.some((l) => PROJECT_LICENSES.includes(l))
  ) {
    return false;
  }

  if (
    PROJECT_LANGS &&
    testCase.pageLanguages &&
    !testCase.pageLanguages.some((l) => PROJECT_LANGS.includes(l))
  ) {
    return false;
  }

  return true;
});

for (const testCase of FILTERED_TEST_CASES) {
  // for (const testCase of CTA_TEST_CASES) {
  test(testCase.testName, async ({ page, baseURL }, testInfo) => {
    const projectUser = testInfo.project.use.userState;
    const projectLicense = testInfo.project.use.licenseName;
    const projectLang = testInfo.project.use.lang;

    // console.log({
    //   page: testCase.pageName,
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

    const marketPage = new Page(page, testCase.pageName, {
      license: projectLicense,
      scope: testCase.scope,
    });
    await marketPage.open(baseURL);

    await page
      .locator("footer")
      .waitFor({
        state: "visible",
        // timeout: 15000,
      })
      .catch(() => {});

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

    // FOR description RETESTS
    if (action.tags?.includes("retest")) {
      testInfo.annotations.push({
        type: "tag",
        description: "retest",
      });
      console.log(testInfo.annotations);
    }
    if (action.issue) {
      testInfo.annotations.push({
        type: "issue",
        description: action.issue,
      });
      console.log(testInfo.annotations);
    }

    // await component.click(testCase.actionName);

    // const locator = component.getActionLocator(testCase.actionName);

    const result = await component.click(testCase.actionName);

    console.log("URL AFTER CLICK:", page.url());

    if (result.skipped) {
      return testInfo.skip(`${testCase.actionName} absent on page`);
    }

    const expectation = action.expectation[projectUser];
    console.log("USER:", projectUser);
    console.log("EXPECTATION: ", expectation);

    await expectPageState(page, action, expectation, testInfo, result.locator);
  });
}
