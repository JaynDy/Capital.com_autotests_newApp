import { expect } from "@playwright/test";
import { ctaRegistry } from "../test_data/CTA/pages.cta.registry";

export async function expectPageState(
  page,
  action,
  expectation,
  testInfo,
  locator,
) {
  console.log("EXPECTATION ASSERTIONS", expectation);
  const currentUrl = testInfo.project.use.baseURL;
  const currentLicense = testInfo.project.use.licenseName;
  // console.log("Current URL: ", currentUrl);

  const expectationType =
    typeof expectation === "string" ? expectation : expectation.type;

  switch (expectationType) {
    case "redirects to platform":
      await expect(page).toHaveURL(/trading\/platform/);
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
        typeof pageConfig.path === "function"
          ? pageConfig.path(currentLicense)
          : pageConfig.path;

      const expectedURL = pagePath ? `${currentUrl}/${pagePath}` : currentUrl;
      await expect(page).toHaveURL(new RegExp(`${expectedURL}/?$`));
      break;
    }

    case "opens external link": {
      const href = await locator.getAttribute("href");
      await expect(locator).toHaveAttribute("target", "_blank");
      expect(href).toContain(action.expectedHrefContains);
      break;
    }

    case "opens regional settings window": {
      await expect(page.locator('[data-sentry-component="CountryLangSelect"]'));
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
      break;
    }

    default:
      throw new Error(`Unknown expectation: ${expectation}`);
  }
}
