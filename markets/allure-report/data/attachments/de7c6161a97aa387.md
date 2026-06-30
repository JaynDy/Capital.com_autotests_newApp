# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cta/generated.cta.spec.js >> marketAnalysis page | mostTradedMarketsBlock | tradedBtn
- Location: tests/cta/generated.cta.spec.js:16:7

# Error details

```
TypeError: Cannot read properties of undefined (reading 'urls')
```

# Test source

```ts
  1  | import { CTAComponent } from "../components/cta.component";
  2  | import { ctaRegistry } from "../test_data/CTA/pages.cta.registry";
  3  | import { PopupManager } from "../components/popups/popup.manager";
  4  | import { globalCtaRegistry } from "../test_data/CTA/global.cta.registry";
  5  | 
  6  | export class Page {
  7  |   constructor(page, pageKey, license, scope = "page") {
  8  |     this.page = page;
  9  |     this.pageKey = pageKey;
  10 |     this.license = license;
  11 |     this.scope = scope;
  12 |     this.popups = new PopupManager(page);
  13 | 
  14 |     const registry = scope === "global" ? globalCtaRegistry : ctaRegistry;
  15 | 
  16 |     const pageData = registry[this.pageKey];
  17 | 
  18 |     if (!pageData) {
  19 |       throw new Error(
  20 |         `No pageData found for key="${this.pageKey}" scope="${scope}"`,
  21 |       );
  22 |     }
  23 | 
  24 |     this.pagePath = pageData.path;
  25 |     this.cta = {};
  26 | 
  27 |     if (pageData.config) {
  28 |       for (const sectionName of Object.keys(pageData.config)) {
  29 |         this.cta[sectionName] = new CTAComponent(
  30 |           page,
  31 |           pageData.config[sectionName],
  32 |         );
  33 |       }
  34 |     }
  35 |   }
  36 | 
  37 |   async open(baseURL) {
  38 |     // console.log("BASE URL:", baseURL);
  39 |     // console.log("PATH:", this.pagePath);
  40 |     // if (!this.pagePath) return;
  41 | 
> 42 |     if (this.pageData.urls) {
     |                       ^ TypeError: Cannot read properties of undefined (reading 'urls')
  43 |       await this.page.goto(this.pageData.urls[this.license], {
  44 |         waitUntil: "domcontentloaded",
  45 |       });
  46 |       await this.popups.dismissAll();
  47 |       return;
  48 |     }
  49 | 
  50 |     await this.page.goto(`${baseURL}/${this.pagePath}`, {
  51 |       waitUntil: "domcontentloaded",
  52 |     });
  53 |     await this.popups.dismissAll();
  54 |     await this.page.waitForTimeout(2000);
  55 |   }
  56 | }
  57 | 
```