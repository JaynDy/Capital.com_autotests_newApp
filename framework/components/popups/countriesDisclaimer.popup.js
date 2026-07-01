import { expect } from "@playwright/test";

export class CountriesDisclaimerPopup {
  constructor(page) {
    this.page = page;

    this.popup = page.locator(
      'div:has(> [data-type="closed_countries_disclaimer_confirm"])',
    );
    this.confirmButton = page.locator(
      '[data-type="closed_countries_disclaimer_confirm"]',
    );

    this.page.on("framenavigated", (frame) => {
      console.log("NAVIGATED:", frame.url());
    });

    this.page.on("domcontentloaded", () => {
      console.log("DOMCONTENTLOADED");
    });
  }

  async closeIfVisible() {
    const btn = this.confirmButton;

    try {
      await this.page.waitForLoadState("domcontentloaded");
      await this.page.waitForTimeout(4000);

      await btn.waitFor({
        state: "visible",
        timeout: 10000,
      });

      console.log("DISCLAIMER APPEARED");

      const popup = btn.locator("..");

      await expect
        .poll(async () => {
          await popup.evaluate((popup) => {
            const el = popup.firstElementChild;
            if (el) {
              console.log(el.scrollHeight);
              console.log(el.clientHeight);
            }
          });
          console.log("BUTTON ENABLED:");
          return btn.isEnabled();
        })
        .toBe(true);

      await btn.click();

      console.log("DISCLAIMER CLOSED");
    } catch (e) {
      console.log("DISCLAIMER ERROR:", e.message);
    }
  }
}
