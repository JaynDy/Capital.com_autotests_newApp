import { expect } from "@playwright/test";
import { PopupManager } from "../components/popups/popup.manager";

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

  await page.getByRole("button", { name: "Continue" }).click(); // First click

  try {
    await expect(page).toHaveURL(/trading\/platform/, { timeout: 5000 });
    return;
  } catch (e) {
    console.log("First login attempt failed → retrying click");
  }

  const continueBtn = page.getByRole("button", { name: "Continue" });
  await continueBtn.click();

  await expect(page).toHaveURL(/trading\/platform/);
}
