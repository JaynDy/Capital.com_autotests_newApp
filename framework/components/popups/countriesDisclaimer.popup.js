export class CountriesDisclaimerPopup {
  constructor(page) {
    this.page = page;

    page.on("close", () => {
      console.log("PAGE CLOSED EVENT");
    });
    page.on("framenavigated", (frame) => {
      console.log("NAVIGATED:", frame.url());
    });

    this.confirmButton = page.locator(
      '[data-type="closed_countries_disclaimer_confirm"]',
    );
  }

  async closeIfVisible() {
    const btn = this.page.locator(
      '[data-type="closed_countries_disclaimer_confirm"]',
    );

    console.log(
      "VISIBLE:",
      await btn.isVisible({ timeout: 1000 }).catch(() => false),
    );
    console.log("ENABLED:", await btn.isEnabled().catch(() => false));

    for (let i = 0; i < 3; i++) {
      try {
        await this.confirmButton.waitFor({
          state: "visible",
          timeout: 3000,
        });

        await expect(this.confirmButton).toBeEnabled({
          timeout: 10000,
        });

        await this.confirmButton.click();

        console.log(`DISCLAIMER CLOSED (${i + 1})`);
      } catch (e) {
        console.log(`ATTEMPT ${i + 1}:`, e.message);
        await this.page.waitForTimeout(1000);
      }
    }
  }
}
