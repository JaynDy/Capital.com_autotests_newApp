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

    if (!(await popup.isVisible().catch(() => false))) {
      console.log("DISCLAIMER NOT PRESENT");
      return;
    }

    try {
      await popup.waitFor({
        state: "visible",
        timeout: 5000,
      });

      await this.page.waitForTimeout(5000);

      console.log("DISABLED:", await btn.getAttribute("disabled"));

      await expect
        .poll(
          async () => {
            await popup.evaluate((popup) => {
              const scrollable = [...popup.querySelectorAll("*")].find(
                (el) => el.scrollHeight > el.clientHeight,
              );

              if (scrollable) {
                scrollable.scrollTop = scrollable.scrollHeight;
              }
            });

            return await btn.isEnabled();
          },
          {
            timeout: 5000,
          },
        )
        .toBe(true);

      console.log("DISABLED:", await btn.getAttribute("disabled"));

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
