export class CookiePopup {
  constructor(page) {
    this.page = page;
    this.rejectButton = page.locator(`[data-type="cb_reject_btn"]`);
  }

  async closeIfVisible() {
    try {
      await this.rejectButton.waitFor({
        state: "visible",
        timeout: 2000,
      });
      await this.rejectButton.click();
      // console.log("COOKIE POPUP CLOSED");
    } catch {
      // console.log("COOKIE POPUP NOT FOUND");
    }
  }
}
