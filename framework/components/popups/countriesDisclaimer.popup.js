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
    const popup = this.popup;
    const btn = this.confirmButton;

    try {
      await popup.waitFor({
        state: "visible",
        timeout: 8000,
      });

      console.log("DISCLAIMER APPEARED");

      await expect
        .poll(
          async () => {
            if (this.page.isClosed()) {
              return false;
            }

            await popup.evaluate((popup) => {
              const scrollable = popup.firstElementChild;

              if (scrollable) {
                scrollable.scrollTop = scrollable.scrollHeight;
              }
            });

            console.log("BUTTON DISABLED:", await btn.getAttribute("disabled"));

            return await btn.isEnabled();
          },
          {
            timeout: 15000,
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
