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
    const popup = this.popup;

    try {
      await this.page.waitForLoadState("domcontentloaded");
      await this.page.waitForLoadState("networkidle").catch(() => {});

      const visible = await btn.isVisible({ timeout: 5000 }).catch(() => false);

      if (!visible) {
        console.log("DISCLAIMER NOT PRESENT");
        return;
      }

      console.log("DISCLAIMER APPEARED");

      await expect
        .poll(
          async () => {
            await popup.evaluate((popup) => {
              const el = popup.firstElementChild;
              if (el) {
                el.scrollTop = el.scrollHeight;
              }
            });
            console.log("BUTTON ENABLED:");
            return btn.isEnabled();
          },
          {
            timeout: 10000,
          },
        )
        .toBe(true);

      await btn.click();

      console.log("DISCLAIMER CLOSED");
    } catch (e) {
      console.log("DISCLAIMER ERROR:", e.message);
    }
  }
}
