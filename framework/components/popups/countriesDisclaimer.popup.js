import { expect } from "@playwright/test";

export class CountriesDisclaimerPopup {
  constructor(page) {
    this.page = page;

    this.modalBox = page.locator(
      'div:has(> [data-type="closed_countries_disclaimer_confirm"])',
    );
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

      const hasScrollable = await this.modalBox.evaluate((modal) => {
        const scrollable = [...modal.querySelectorAll("*")].find(
          (el) => el.scrollHeight > el.clientHeight,
        );

        if (scrollable) {
          scrollable.scrollTop = scrollable.scrollHeight;
          return true;
        }

        return false;
      });

      console.log("SCROLLABLE FOUND:", hasScrollable);

      await this.page.waitForTimeout(300);

      console.log(
        "DISABLED:",
        await this.confirmButton.getAttribute("disabled"),
      );

      await expect(this.confirmButton).toBeEnabled({
        timeout: 5000,
      });

      await this.confirmButton.click();

      console.log("COUNTRIES DISCLAIMER CLOSED");
    } catch (e) {
      console.log("COUNTRIES DISCLAIMER ERROR:", e.message);
    }
  }
}

// export class CountriesDisclaimerPopup {
//   constructor(page) {
//     this.page = page;

//     page.on("close", () => {
//       console.log("PAGE CLOSED EVENT");
//     });
//     page.on("framenavigated", (frame) => {
//       console.log("NAVIGATED:", frame.url());
//     });

//     this.confirmButton = page.locator(
//       '[data-type="closed_countries_disclaimer_confirm"]',
//     );
//   }

//   async closeIfVisible() {
//     const btn = this.page.locator(
//       '[data-type="closed_countries_disclaimer_confirm"]',
//     );

//     console.log(
//       "VISIBLE:",
//       await btn.isVisible({ timeout: 1000 }).catch(() => false),
//     );
//     console.log("ENABLED:", await btn.isEnabled().catch(() => false));

//     for (let i = 0; i < 3; i++) {
//       try {
//         await this.confirmButton.waitFor({
//           state: "visible",
//           timeout: 3000,
//         });

//         await expect(this.confirmButton).toBeEnabled({
//           timeout: 10000,
//         });

//         await this.confirmButton.click();

//         console.log(`DISCLAIMER CLOSED (${i + 1})`);
//       } catch (e) {
//         console.log(`ATTEMPT ${i + 1}:`, e.message);
//         await this.page.waitForTimeout(1000);
//       }
//     }
//   }
// }
