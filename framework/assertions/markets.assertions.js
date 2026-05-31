import { expect } from "@playwright/test";

export async function expectMarketsState(page, expectation) {
  console.log("EXPECTATION ASSERTIONS", expectation);
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
      await expect(page.locator('[data-testid="modal-title"]')).toHaveText(
        "Log in",
      );
      break;

    default:
      throw new Error(`Unknown expectation: ${expectation}`);
  }
}

// export async function expectMarketsState(page, userState) {
//   console.log("USER STATE ASSERTIONS", userState);

//   switch (userState) {
//     case "authorised":
//       await expect(page).toHaveURL(/trading\/platform/);
//       break;

//     case "unauthorised":
//       await expect(
//         page.locator('[data-sentry-component="SignUp"]'),
//       ).toBeVisible();
//       break;

//     case "unregistered":
//       await expect(
//         page.locator('[data-sentry-component="SignUp"]'),
//       ).toBeVisible();
//       break;

//     default:
//       throw new Error(`Unknown userState: ${userState}`);
//   }
// }
