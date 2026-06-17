import { CTAComponent } from "../components/cta.component";
import { ctaRegistry } from "../test_data/CTA/markets.cta.registry";
import { PopupManager } from "../components/popups/popup.manager";

export class MarketsPage {
  constructor(page, pageKey) {
    this.page = page;
    this.pageKey = pageKey;
    this.popups = new PopupManager(page);

    const pageData = ctaRegistry[this.pageKey];
    this.pagePath = pageData.path;
    this.cta = {};

    for (const sectionName of Object.keys(pageData.config)) {
      this.cta[sectionName] = new CTAComponent(
        page,
        pageData.config[sectionName],
      );
    }
  }

  async open(baseURL) {
    await this.page.goto(`${baseURL}/${this.pagePath}`, {
      waitUntil: "domcontentloaded",
    });
    await this.popups.dismissAll();
  }
}
