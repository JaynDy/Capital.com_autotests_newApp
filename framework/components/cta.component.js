import { expect } from "@playwright/test";

export class CTAComponent {
  constructor(page, sectionConfig) {
    this.page = page;
    // this.root = page.locator(sectionConfig.root);
    this.actions = sectionConfig.actions || {};
    this.helpers = sectionConfig.helpers || {};
    this.setup = sectionConfig.setup;
    // this.skipRootValidation = sectionConfig.skipRootValidation;
    this.root = this.resolveLocator(sectionConfig.root);
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
      return locatorConfig(this.page);
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

  async runSetup() {
    if (!this.setup) {
      return;
    }

    await this.setup({
      page: this.page,
      getHelper: this.getHelper.bind(this),
    });
  }

  async runActionSetup(actionName) {
    const action = this.actions[actionName];

    if (!action?.setup) {
      return;
    }

    await action.setup({
      page: this.page,
      getHelper: this.getHelper.bind(this),
    });

    // console.log("ACTION SETUP DONE:", actionName);
    // console.log("URL:", this.page.url());
  }

  async click(actionName) {
    console.log("START CLICK", actionName);

    await this.runSetup();

    await this.runActionSetup(actionName);

    const action = this.actions[actionName];
    let locator = this.getActionLocator(actionName);

    if (action.locatorIndex !== undefined) {
      locator = locator.nth(action.locatorIndex);
    }

    const count = await locator.count();
    console.log("COUNT", actionName, count);

    if (action.optional && count === 0) {
      return { skipped: true };
    }

    await expect(locator).toBeVisible();
    await expect(locator).toBeEnabled();

    await locator.click({
      timeout: 5000,
    });

    return { skipped: false, locator };
  }
}
