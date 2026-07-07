export class GeoPopup {
  constructor(page) {
    this.page = page;
    this.stayHereButton = page.locator('[data-type="wrong_location_cancel"]');
  }

  async closeIfVisible() {
    try {
      await this.stayHereButton.waitFor({
        state: "visible",
        timeout: 2000,
      });

      await this.stayHereButton.click();
      // console.log("GEO POPUP CLOSED");
    } catch {
      // console.log("GEO POPUP NOT FOUND");
    }
  }
}
