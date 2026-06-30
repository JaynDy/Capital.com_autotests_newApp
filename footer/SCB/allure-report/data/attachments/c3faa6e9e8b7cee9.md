# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cta/generated.cta.spec.js >> GLOBAL | main page | footer | socialMediaBar | tiktokIcon
- Location: tests/cta/generated.cta.spec.js:16:7

# Error details

```
Error: page.goto: url: expected string, got undefined
```

# Test source

```ts
  1  | import { CTAComponent } from "../components/cta.component";
  2  | import { ctaRegistry } from "../test_data/CTA/pages.cta.registry";
  3  | import { PopupManager } from "../components/popups/popup.manager";
  4  | import { globalCtaRegistry } from "../test_data/CTA/global.cta.registry";
  5  | 
  6  | export class Page {
  7  |   constructor(page, pageKey, options = {}) {
  8  |     this.page = page;
  9  |     this.pageKey = pageKey;
  10 |     this.license = options.license;
  11 |     this.scope = options.scope ?? "page";
  12 |     this.popups = new PopupManager(page);
  13 | 
  14 |     // const registry = this.scope === "global" ? globalCtaRegistry : ctaRegistry;
  15 | 
  16 |     const pageData = ctaRegistry[this.pageKey];
  17 | 
  18 |     if (!pageData) {
  19 |       throw new Error(
  20 |         `No pageData found for key="${this.pageKey}" scope="${this.scope}"`,
  21 |       );
  22 |     }
  23 |     this.pageData = pageData;
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
> 38 |     await this.page.goto(this.pageData?.urls?.[this.license], {
     |                     ^ Error: page.goto: url: expected string, got undefined
  39 |       waitUntil: "domcontentloaded",
  40 |     });
  41 | 
  42 |     await this.page.screenshot({
  43 |       path: `after-goto-${this.license}.png`,
  44 |       fullPage: true,
  45 |     });
  46 | 
  47 |     if (this.pageData.urls) {
  48 |       // console.log("License:", this.license);
  49 |       // console.log("Urls:", this.pageData.urls);
  50 | 
  51 |       await this.page.goto(this.pageData?.urls?.[this.license], {
  52 |         waitUntil: "domcontentloaded",
  53 |       });
  54 |       await this.popups.dismissAll();
  55 |       return;
  56 |     }
  57 | 
  58 |     await this.page.goto(`${baseURL}/${this.pagePath}`, {
  59 |       waitUntil: "domcontentloaded",
  60 |     });
  61 |     await this.popups.dismissAll();
  62 |     await this.page.waitForTimeout(2000);
  63 |   }
  64 | }
  65 | 
```