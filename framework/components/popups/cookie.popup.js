export class CookiePopup {
  constructor(page) {
    this.page = page;
    // this.rejectButton = page.locator(`[data-type="cb_reject_btn"]`);
    this.acceptButton = page.locator(`[data-type="cb_accept_btn"]`);
  }

  async closeIfVisible() {
    try {
      // await this.rejectButton.waitFor({
      //   state: "visible",
      //   timeout: 2000,
      // });
      // await this.rejectButton.click();

      await this.acceptButton.waitFor({
        state: "visible",
        timeout: 2000,
      });
      await this.acceptButton.click();

      console.log("COOKIE POPUP CLOSED");
    } catch {
      console.log("COOKIE POPUP NOT FOUND");
    }
  }
}
