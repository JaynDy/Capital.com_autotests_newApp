import { expect } from "@playwright/test";
import { ctaRegistry } from "../test_data/CTA/pages.cta.registry";
import { expectNoPageError } from "../helpers/expectNoPageError";

export async function expectPageState(
  page,
  action,
  expectation,
  testInfo,
  locator,
  newPage,
) {
  console.log("EXPECTATION ASSERTIONS", expectation);
  const currentUrl = testInfo.project.use.baseURL;
  const currentLicense = testInfo.project.use.licenseName;
  const currentLang = testInfo.project.use.langName;
  // console.log("Current URL: ", currentUrl);

  const expectationType =
    typeof expectation === "string" ? expectation : expectation.type;

  switch (expectationType) {
    case "redirects to platform":
      await expect(page).toHaveURL(/trading\/platform/);
      await expectNoPageError(page);
      break;

    case "shows signup form":
      await expect(
        // page.locator('form[data-sentry-component="SignUp"]'),
        page.locator('[data-type="SIGN_UP_close"]'),
      ).toBeVisible();
      break;

    case "shows login form":
      await expect(page.locator('[data-testid="modal-title"]'));
      break;

    case "redirect": {
      const pageConfig = ctaRegistry[expectation.page].path;

      // const pagePath = ctaRegistry[expectation.page].path;
      const pagePath =
        typeof pageConfig === "function"
          ? pageConfig(currentLicense)
          : pageConfig;

      const expectedURL = pagePath ? `${currentUrl}/${pagePath}` : currentUrl;
      await expect(page).toHaveURL(new RegExp(`${expectedURL}/?$`));
      await expectNoPageError(page);
      break;
    }

    case "opens external link": {
      const href = await locator.getAttribute("href");
      expect(href).toContain(action.expectedHrefContains);
      await expect(locator).toHaveAttribute("target", "_blank");

      expect(newPage, "External link did not open a new page").toBeTruthy();

      await newPage
        .waitForLoadState("domcontentloaded", {
          timeout: 5000,
        })
        .catch(() => {});
      // expect(newPage.url()).toContain(action.expectedHrefContains);
      await expectNoPageError(newPage);
      break;
    }

    case "opens regional settings window": {
      await expect(page.locator('[data-sentry-component="CountryLangSelect"]'));
      await expectNoPageError(page);
      break;
    }

    case "exist corresponding license": {
      const expectedLicenses = action.licenseText?.[currentLicense];

      if (expectedLicenses?.length) {
        for (const text of expectedLicenses) {
          await expect(locator).toContainText(text);
        }
      } else {
        await expect(locator).toContainText(currentLicense);
      }

      break;
    }

    case "opens cookie menu": {
      await expect(page.locator(".consent-pc-modal__content"));
      await expectNoPageError(page);
      break;
    }

    case "opens pdf document": {
      const href = await locator.getAttribute("href");

      expect(href).toContain(action.expectedHrefContains);
      await expect(locator).toHaveAttribute("target", "_blank");

      const browserName = testInfo.project.use.browserName;

      if (browserName.includes("webkit")) {
        const [download] = await Promise.all([
          page.waitForEvent("download"),
          locator.click(),
        ]);

        const path = await download.path();
        expect(path).not.toBeNull();

        const fs = await import("node:fs/promises");
        const stat = await fs.stat(path);

        expect(
          stat.size,
          `Downloaded file "${download.suggestedFilename()}" is empty`,
        ).toBeGreaterThan(0);
      } else {
        const [pdfPage] = await Promise.all([
          page.context().waitForEvent("page"),
          locator.click(),
        ]);

        await pdfPage.waitForLoadState("domcontentloaded");

        expect(pdfPage.url()).toContain(action.expectedHrefContains);
        await expect(pdfPage.locator("body")).not.toContainText(
          "HTTP ERROR 404",
        );
        await expectNoPageError(pdfPage);
      }
      break;
    }

    case "opens link on currentURL": {
      const currentUrl = page.url();

      console.log("EXPECTED:", await locator.getAttribute("href"));
      console.log("ACTUAL:", currentUrl);

      expect(currentUrl).toContain(action.expectedHrefContains);
      await expectNoPageError(page);

      break;
    }

    default:
      throw new Error(`Unknown expectation: ${expectation}`);
  }
}
