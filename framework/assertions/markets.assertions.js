import { expect } from "@playwright/test";

export async function expectMarketsState(page, expectation, testInfo) {
  console.log("EXPECTATION ASSERTIONS", expectation);
  const currentUrl = testInfo.project.use.baseURL;
  console.log("Current URL: ", currentUrl);

  switch (expectation) {
    case "redirects to platform":
      await expect(page).toHaveURL(/trading\/platform/);
      break;

    case "shows signup form":
      await expect(
        page.locator('form[data-sentry-component="SignUp"]'),
      ).toBeVisible();
      break;

    case "shows login form":
      await expect(page.locator('[data-testid="modal-title"]'));
      break;

    case "redirect to the main page":
      await expect(page).toHaveURL(currentUrl);
      break;

    case "opens external page":
      expect(await expect(page.locator.getAttribute("target")).toBe("_blank"));
      expect(await expect(page.locator.getAttribute("href")).toBeTruthy());
      break;

    default:
      throw new Error(`Unknown expectation: ${expectation}`);
  }
}
