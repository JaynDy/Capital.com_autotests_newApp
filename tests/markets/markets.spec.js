import { test } from "@playwright/test";
import { MarketsPage } from "../../framework/pages/MarketsPage";
import { expectMarketsState } from "../../framework/assertions/markets.assertions";
import { ctaRegistry } from "../../framework/test_data/CTA/markets.cta.registry";
import { generateCTATestCases } from "../../framework/test_data/CTA/generateCTATestCases";

const CTA_TEST_CASES = generateCTATestCases(ctaRegistry);

for (const testCase of CTA_TEST_CASES) {
  test(testCase.testName, async ({ page, baseURL }, testInfo) => {
    const projectUser = testInfo.project.use.userState;

    const marketPage = new MarketsPage(page, testCase.pageName);

    await marketPage.open(baseURL);

    await marketPage.cta[testCase.sectionName].click(testCase.actionName);

    const action =
      ctaRegistry[testCase.pageName].config[testCase.sectionName].actions[
        testCase.actionName
      ];

    const expectation = action.expectation[projectUser];
    console.log("USER:", projectUser);
    // console.log("EXPECTATION: ", expectation);

    await expectMarketsState(page, expectation);
  });
}
// const bannerLocator = `[data-type="fullscreen_banner_block"]`; // "Access thousands of global markets" banner
// const blockLocator = `h2:has-text("Why choose Capital.com for your trading?")`; // "Why choose Capital.com for your trading?" block

// test(`Markets "Access thousands of global markets" banner - Create Account btn`, async ({
//   page,
//   baseURL,
// }, testInfo) => {
//   const project = testInfo.project.use;
//   const markets = new MarketsPage(page, bannerLocator);
//   await markets.open(baseURL);
//   console.log("BASE URL:", page.url());

// await markets.banner.clickCreateAccount();
// console.log("AFTER CLICK URL:", page.url());
// console.log("USER STATE: ", project.userState);

// await expectMarketsState(page, project.userState);
// });

// test(`Markets "Access thousands of global markets" banner - Try Demo Account btn`, async ({
//   page,
//   baseURL,
// }, testInfo) => {
//   const project = testInfo.project.use;

//   const markets = new MarketsPage(page, bannerLocator);
//   await markets.open(baseURL);
//   console.log("BASE URL:", page.url());

//   await markets.banner.clickTryDemoAccount();
//   console.log("AFTER CLICK URL:", page.url());
//   console.log("USER STATE: ", project.userState);

//   await expectMarketsState(page, project.userState);
// });

// test(`Markets "Why choose Capital.com for your trading?" block - Create Account btn`, async ({
//   page,
//   baseURL,
// }, testInfo) => {
//   const project = testInfo.project.use;
//   const markets = new MarketsPage(page, blockLocator);
//   await markets.open(baseURL);
//   console.log("BASE URL:", page.url());

//   await markets.block.clickCreateAccount();
//   console.log("AFTER CLICK URL:", page.url());
//   console.log("USER STATE: ", project.userState);

//   await expectMarketsState(page, project.userState);
// });

// test(`Markets "Why choose Capital.com for your trading?" block - Try Demo Account btn`, async ({
//   page,
//   baseURL,
// }, testInfo) => {
//   const project = testInfo.project.use;

//   const markets = new MarketsPage(page, blockLocator);
//   await markets.open(baseURL);
//   console.log("BASE URL:", page.url());

//   await markets.block.clickTryDemoAccount();
//   console.log("AFTER CLICK URL:", page.url());
//   console.log("USER STATE: ", project.userState);

//   await expectMarketsState(page, project.userState);
// });
