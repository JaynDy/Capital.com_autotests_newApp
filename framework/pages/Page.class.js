import { CTAComponent } from "../components/cta.component";
import { ctaRegistry } from "../test_data/CTA/pages.cta.registry";
import { PopupManager } from "../components/popups/popup.manager";
import { globalCtaRegistry } from "../test_data/CTA/global.cta.registry";

export class Page {
  constructor(page, pageKey, options = {}) {
    this.page = page;
    this.pageKey = pageKey;
    this.license = options.license;
    this.scope = options.scope ?? "page";
    this.popups = new PopupManager(page);

    // const registry = this.scope === "global" ? globalCtaRegistry : ctaRegistry;

    const pageData = ctaRegistry[this.pageKey];

    if (!pageData) {
      throw new Error(
        `No pageData found for key="${this.pageKey}" scope="${this.scope}"`,
      );
    }
    this.pageData = pageData;
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
    await this.page.goto(this.pageData?.urls?.[this.license], {
      waitUntil: "domcontentloaded",
    });

    await this.page.screenshot({
      path: `after-goto-${this.license}.png`,
      fullPage: true,
    });

    if (this.pageData.urls) {
      // console.log("License:", this.license);
      // console.log("Urls:", this.pageData.urls);

      await this.page.goto(this.pageData?.urls?.[this.license], {
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
