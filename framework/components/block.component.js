// import { expect } from "@playwright/test";

// export class BlockComponent {
//   constructor(page, blockLocator) {
//     this.page = page;
//     this.block = page.locator(blockLocator);

//     this.createAccountButton = page.locator(
//       `[data-type="tiles_w_img_btn1_signup"]`,
//     );

//     this.tryDemoAccountButton = page.locator(
//       `[data-type="tiles_w_img_btn2_signup"]`,
//     );
//   }

//   async expectVisible() {
//     await expect(this.block).toBeVisible({
//       timeout: 20000,
//     });
//   }
//   async clickCreateAccount() {
//     await this.block.waitFor({ state: "visible" });
//     await this.createAccountButton.click();
//   }
//   async clickTryDemoAccount() {
//     await this.block.waitFor({ state: "visible" });
//     await this.tryDemoAccountButton.click();
//   }
// }
