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

    // Debug listeners
    this.page.on("close", () => {
      console.log("PAGE CLOSED");
    });

    this.page.context().on("close", () => {
      console.log("CONTEXT CLOSED");
    });

    this.page.context().on("page", (page) => {
      console.log("NEW PAGE:", page.url());

      page.on("close", () => {
        console.log("NEW PAGE CLOSED");
      });
    });

    this.page.on("framenavigated", (frame) => {
      console.log("NAVIGATED:", frame.url());
    });

    this.page.on("domcontentloaded", () => {
      console.log("DOMCONTENTLOADED");
    });
  }

  async closeIfVisible() {
    try {
      console.log("Waiting for Countries Disclaimer...");

      await this.confirmButton.waitFor({
        state: "visible",
        timeout: 10000,
      });

      console.log("Countries Disclaimer appeared");

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

            console.log("Button enabled:", enabled);

            return enabled;
          },
          {
            timeout: 10000,
            intervals: [500],
          },
        )
        .toBe(true);

      await this.confirmButton.click();

      console.log("Countries Disclaimer closed");
    } catch (e) {
      console.log("Countries Disclaimer skipped:", e.message);
    }
  }
}
