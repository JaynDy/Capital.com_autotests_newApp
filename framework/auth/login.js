import { expect } from "@playwright/test";
import { PopupManager } from "../components/popups/popup.manager";

async function waitForPlatform(page, timeout) {
  try {
    await expect(page).toHaveURL(/trading\/platform/, { timeout });
    return true;
  } catch {
    return false;
  }
}

async function recoverLogin(page) {
  const email = page.locator('[name="email"]');

  if (!(await email.isVisible().catch(() => false))) {
    const loginBtn = page.locator('[data-type="btn_header_login"]:visible');
    if (await loginBtn.isVisible().catch(() => false)) {
      await loginBtn.click();
    }
  }

  const popupBtn = page.getByRole("button", { name: "Continue" });
  await popupBtn.waitFor({ state: "visible", timeout: 3000 }).catch(() => {});
}

export async function login(page, baseURL, user) {
  await page.goto(baseURL, { waitUntil: "domcontentloaded" });

  const popup = new PopupManager(page);
  await popup.dismissAll();

  await page.locator('[data-type="btn_header_login"]:visible').click();

  const email = page.locator('[name="email"]');
  const password = page.locator('[name="password"]');

  await expect(email).toBeVisible();

  await email.fill(user.email);
  await password.fill(user.password);

  const continueBtn = page.getByRole("button", { name: "Continue" });

  const maxAttempts = 3;

  for (let i = 0; i < maxAttempts; i++) {
    await continueBtn.click();

    const success = await waitForPlatform(page, 6000);

    if (success) return;

    console.log(`Login attempt ${i + 1} failed → retry`);

    await recoverLogin(page);
  }

  throw new Error("Login failed after retries");
}

// export async function login(page, baseURL, user) {
//   await page.goto(baseURL, { waitUntil: "domcontentloaded" });

//   const popup = new PopupManager(page);
//   await popup.dismissAll();

//   await page.locator('[data-type="btn_header_login"]:visible').click();

//   const email = page.locator('[name="email"]');
//   const password = page.locator('[name="password"]');

//   await expect(email).toBeVisible();

//   await email.fill(user.email);
//   await password.fill(user.password);

//   await page.getByRole("button", { name: "Continue" }).click(); // First click

//   try {
//     await expect(page).toHaveURL(/trading\/platform/, { timeout: 5000 });
//     return;
//   } catch (e) {
//     console.log("First login attempt failed → retrying click");
//   }

//   const continueBtn = page.getByRole("button", { name: "Continue" });
//   await continueBtn.click();

//   await expect(page).toHaveURL(/trading\/platform/);
// }
