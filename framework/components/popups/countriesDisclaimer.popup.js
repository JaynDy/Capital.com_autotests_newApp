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
  }

  async closeIfVisible() {
    await this.confirmButton.waitFor({
      state: "visible",
      timeout: 10000,
    });

    await expect
      .poll(
        async () => {
          await this.popup.evaluate((popup) => {
            const scrollable = [...popup.querySelectorAll("*")].find(
              (el) => el.scrollHeight > el.clientHeight,
            );

            if (!scrollable) {
              throw new Error("Scrollable element not found");
            }

            scrollable.scrollTop = scrollable.scrollHeight;
            scrollable.dispatchEvent(new Event("scroll", { bubbles: true }));
          });

          const enabled = await this.confirmButton.isEnabled();
          return enabled;
        },
        {
          timeout: 10000,
          intervals: [500],
        },
      )
      .toBe(true);

    await this.confirmButton.click();

    // console.log("Countries Disclaimer closed");
  }
}
