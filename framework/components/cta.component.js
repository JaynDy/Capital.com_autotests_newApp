import { expect } from "@playwright/test";

export class CTAComponent {
  constructor(page, sectionConfig) {
    this.page = page;
    this.root = page.locator(sectionConfig.root);

    this.actions = sectionConfig.actions || {};
    this.helpers = sectionConfig.helpers || {};
  }

  async expectVisible() {
    await expect(this.root).toBeVisible({ timeout: 20000 });
  }

  resolveLocator(locatorConfig) {
    if (!locatorConfig) {
      throw new Error("Locator is undefined in CTA config");
    }

    if (
      typeof locatorConfig !== "string" &&
      typeof locatorConfig !== "function"
    ) {
      throw new Error(
        `Invalid locator type: ${typeof locatorConfig}. Value: ${JSON.stringify(locatorConfig)}`,
      );
    }

    if (typeof locatorConfig === "function") {
      return locatorConfig(this.root);
    }

    if (
      locatorConfig.startsWith(":scope") ||
      locatorConfig.startsWith("xpath=")
    ) {
      return this.root.locator(locatorConfig);
    }

    return this.page.locator(locatorConfig);
  }

  getActionLocator(actionName) {
    return this.resolveLocator(this.actions[actionName].locator);
  }

  getHelper(helperName) {
    return this.resolveLocator(this.helpers[helperName]);
  }

  async click(actionName) {
    await this.expectVisible();
    const locator = this.getActionLocator(actionName);
    await locator.click();
  }
}

// import { expect } from "@playwright/test";

// export class BannerComponent {
//   constructor(page, bannerLocator) {
//     this.page = page;
//     this.banner = page.locator(bannerLocator);

//     this.createAccountButton = page.locator(
//       `[data-type="fullscreen_banner_block_btn1_signup"]`,
//     );

//     this.tryDemoAccountButton = page.locator(
//       `[data-type="fullscreen_banner_block_btn2_demo"]`,
//     );
//   }

//   async expectVisible() {
//     await expect(this.banner).toBeVisible({
//       timeout: 20000,
//     });
//   }
//   async clickCreateAccount() {
//     await this.banner.waitFor({ state: "visible" });
//     await this.createAccountButton.click();
//   }
//   async clickTryDemoAccount() {
//     await this.banner.waitFor({ state: "visible" });
//     await this.tryDemoAccountButton.click();
//   }
// }
