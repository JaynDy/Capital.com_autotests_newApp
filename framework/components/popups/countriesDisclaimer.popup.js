export class CountriesDisclaimerPopup {
  constructor(page) {
    this.page = page;
    this.confirmButton = page.locator(
      '[data-type="closed_countries_disclaimer_confirm"]',
    );
  }

  async closeIfVisible() {
    try {
      await this.confirmButton.waitFor({
        state: "visible",
        timeout: 5000,
      });

      await this.page.screenshot({
        path: "artifacts/closed-countries-disclaimer.png",
        fullPage: true,
      });

      await this.confirmButton.click();
      // console.log("CLOSED COUNTRIES DISCLAIMER CLOSED");
    } catch {
      console.log("CLOSED COUNTRIES DISCLAIMER NOT FOUND");
    }
  }
}
