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

    // page.on("close", () => {
    //   console.log("PAGE EVENT: close");
    // });

    // page.on("crash", () => {
    //   console.log("PAGE EVENT: crash");
    // });

    // page.on("pageerror", (error) => {
    //   console.log("PAGE ERROR:", error.message);
    // });

    // page.on("console", (msg) => {
    //   console.log(`BROWSER ${msg.type()}:`, msg.text());
    // });
    // page.on("framenavigated", (frame) => {
    //   if (frame === page.mainFrame()) {
    //     console.log("NAVIGATION:", frame.url());
    //   }
    // });

    await page
      .locator("footer")
      .waitFor({
        state: "visible",
        timeout: 15000,
      })
      .catch(() => {});

    // await marketPage.cta[testCase.sectionName].click(testCase.actionName);

    // ===== DEBUG ONLY FOR SCB + zh-hans =====
    // if (projectLicense === "SCB" && projectLang === "zh-hans") {
    //   console.log("PAGE CLOSED:", page.isClosed());

    //   try {
    //     console.log("TITLE:", await page.title());
    //   } catch (e) {
    //     console.log("TITLE ERROR:", e.message);
    //   }

    //   try {
    //     const bodyText = await page.locator("body").innerText();
    //     console.log("BODY (first 1000 chars):", bodyText.slice(0, 1000));
    //   } catch (e) {
    //     console.log("BODY ERROR:", e.message);
    //   }

    //   try {
    //     await page.screenshot({
    //       path: `debug-${testInfo.project.name}.png`,
    //       fullPage: true,
    //     });

    //     await fs.writeFile(
    //       `debug-${testInfo.project.name}.html`,
    //       await page.content(),
    //     );
    //   } catch (e) {
    //     console.log("SCREENSHOT/HTML ERROR:", e.message);
    //   }
    // }

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
