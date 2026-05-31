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

// import { BannerComponent } from "../components/banner.component";
// // import { BlockComponent } from "../components/block.component";
// import { PopupManager } from "../components/popups/popup.manager";

// export class MarketsPage {
//   constructor(page, bannerLocator) {
//     this.page = page;
//     this.banner = new BannerComponent(page, bannerLocator);
//     this.popups = new PopupManager(page);
//   }

//   async open(baseURL) {
//     await this.page.goto(`${baseURL}/markets`, {
//       waitUntil: "domcontentloaded",
//     });

//     await this.page.waitForURL(/markets/);
//     console.log("URL after goto:", this.page.url());

//     await this.popups.dismissAll();
//     await this.banner.expectVisible();
//   }
// }
