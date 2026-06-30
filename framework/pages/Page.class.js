import { CTAComponent } from "../components/cta.component";
import { ctaRegistry } from "../test_data/CTA/pages.cta.registry";
import { PopupManager } from "../components/popups/popup.manager";
import { globalCtaRegistry } from "../test_data/CTA/global.cta.registry";

export class Page {
  constructor(page, pageKey, license, scope = "page") {
    this.page = page;
    this.pageKey = pageKey;
    this.license = license;
    this.scope = scope;
    this.popups = new PopupManager(page);

    const registry = scope === "global" ? globalCtaRegistry : ctaRegistry;

    const pageData = registry[this.pageKey];

    if (!pageData) {
      throw new Error(
        `No pageData found for key="${this.pageKey}" scope="${scope}"`,
      );
    }

    this.pagePath = pageData.path;
    this.cta = {};

    if (pageData.config) {
      for (const sectionName of Object.keys(pageData.config)) {
        this.cta[sectionName] = new CTAComponent(
          page,
          pageData.config[sectionName],
        );
      }
    }
  }

  async open(baseURL) {
    // console.log("BASE URL:", baseURL);
    // console.log("PATH:", this.pagePath);
    // if (!this.pagePath) return;

    if (this.pageData.urls) {
      await this.page.goto(this.pageData.urls[this.license], {
        waitUntil: "domcontentloaded",
      });
      await this.popups.dismissAll();
      return;
    }

    await this.page.goto(`${baseURL}/${this.pagePath}`, {
      waitUntil: "domcontentloaded",
    });
    await this.popups.dismissAll();
    await this.page.waitForTimeout(2000);
  }
}
