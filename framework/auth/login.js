import { expect } from "@playwright/test";
import { PopupManager } from "../components/popups/popup.manager";

export async function login(page, baseURL, user) {
  page.on("response", (res) => {
    if (res.url().includes("login")) {
      console.log("LOGIN RESPONSE:", res.status(), res.url());
    }
  });

  await page.goto(baseURL, { waitUntil: "domcontentloaded" });

  const popup = new PopupManager(page);
  await popup.dismissAll();

  await page.locator('[data-type="btn_header_login"]:visible').click();

  const email = page.locator('[name="email"]');
  const password = page.locator('[name="password"]');

  await expect(email).toBeVisible();

  await email.fill(user.email);
  await password.fill(user.password);

  // await page.getByRole("button", { name: "Continue" }).click(); // First click

  // try {
  //   await expect(page).toHaveURL(/trading\/platform/, { timeout: 5000 });
  //   return;
  // } catch (e) {
  //   console.log("First login attempt failed → retrying click");
  // }

  const continueBtn = page.getByRole("button", { name: "Continue" });
  await expect(continueBtn).toBeEnabled();

  // await expect(page).toHaveURL(/trading\/platform/, {
  //   timeout: 3000,
  // });

  await Promise.all([
    page.waitForURL(/trading\/platform/, { timeout: 15000 }),
    continueBtn.click(),
  ]);
}
