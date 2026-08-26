# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cta/generated.cta.spec.js >> GLOBAL | main page | footer | socialMediaBar | youtubeIcon
- Location: tests/cta/generated.cta.spec.js:37:7

# Error details

```
Error: expect(page).not.toHaveTitle(expected) failed

Expected: not "404 Not Found"
Received: "404 Not Found"
Timeout:  5000ms

Call log:
  - Expect "not toHaveTitle" with timeout 5000ms
    14 × unexpected value "404 Not Found"

```

```yaml
- iframe
```

# Test source

```ts
  1   | import { expect } from "@playwright/test";
  2   | import { ctaRegistry } from "../test_data/CTA/pages.cta.registry";
  3   | 
  4   | export async function expectPageState(
  5   |   page,
  6   |   action,
  7   |   expectation,
  8   |   testInfo,
  9   |   locator,
  10  |   newPage,
  11  | ) {
  12  |   console.log("EXPECTATION ASSERTIONS", expectation);
  13  |   const currentUrl = testInfo.project.use.baseURL;
  14  |   const currentLicense = testInfo.project.use.licenseName;
  15  |   const currentLang = testInfo.project.use.langName;
  16  |   // console.log("Current URL: ", currentUrl);
  17  | 
  18  |   const expectationType =
  19  |     typeof expectation === "string" ? expectation : expectation.type;
  20  | 
  21  |   switch (expectationType) {
  22  |     case "redirects to platform":
  23  |       await expect(page).toHaveURL(/trading\/platform/);
  24  |       break;
  25  | 
  26  |     case "shows signup form":
  27  |       await expect(
  28  |         // page.locator('form[data-sentry-component="SignUp"]'),
  29  |         page.locator('[data-type="SIGN_UP_close"]'),
  30  |       ).toBeVisible();
  31  |       break;
  32  | 
  33  |     case "shows login form":
  34  |       await expect(page.locator('[data-testid="modal-title"]'));
  35  |       break;
  36  | 
  37  |     case "redirect": {
  38  |       const pageConfig = ctaRegistry[expectation.page].path;
  39  | 
  40  |       // const pagePath = ctaRegistry[expectation.page].path;
  41  |       const pagePath =
  42  |         typeof pageConfig === "function"
  43  |           ? pageConfig(currentLicense)
  44  |           : pageConfig;
  45  | 
  46  |       const expectedURL = pagePath ? `${currentUrl}/${pagePath}` : currentUrl;
  47  |       await expect(page).toHaveURL(new RegExp(`${expectedURL}/?$`));
  48  |       break;
  49  |     }
  50  | 
  51  |     case "opens external link": {
  52  |       const href = await locator.getAttribute("href");
  53  |       expect(href).toContain(action.expectedHrefContains);
  54  |       await expect(locator).toHaveAttribute("target", "_blank");
  55  | 
  56  |       await newPage.waitForLoadState("domcontentloaded");
  57  |       expect(newPage.url()).toContain(action.expectedHrefContains);
> 58  |       await expect(newPage).not.toHaveTitle("404 Not Found");
      |                                 ^ Error: expect(page).not.toHaveTitle(expected) failed
  59  |       break;
  60  |     }
  61  | 
  62  |     case "opens regional settings window": {
  63  |       await expect(page.locator('[data-sentry-component="CountryLangSelect"]'));
  64  |       break;
  65  |     }
  66  | 
  67  |     case "exist corresponding license": {
  68  |       const expectedLicenses = action.licenseText?.[currentLicense];
  69  | 
  70  |       if (expectedLicenses?.length) {
  71  |         for (const text of expectedLicenses) {
  72  |           await expect(locator).toContainText(text);
  73  |         }
  74  |       } else {
  75  |         await expect(locator).toContainText(currentLicense);
  76  |       }
  77  | 
  78  |       break;
  79  |     }
  80  | 
  81  |     case "opens cookie menu": {
  82  |       await expect(page.locator(".consent-pc-modal__content"));
  83  |       break;
  84  |     }
  85  | 
  86  |     case "opens pdf document": {
  87  |       const href = await locator.getAttribute("href");
  88  | 
  89  |       expect(href).toContain(action.expectedHrefContains);
  90  |       await expect(locator).toHaveAttribute("target", "_blank");
  91  | 
  92  |       const browserName = testInfo.project.use.browserName;
  93  | 
  94  |       if (browserName.includes("webkit")) {
  95  |         const [download] = await Promise.all([
  96  |           page.waitForEvent("download"),
  97  |           locator.click(),
  98  |         ]);
  99  | 
  100 |         const path = await download.path();
  101 |         expect(path).not.toBeNull();
  102 | 
  103 |         const fs = await import("node:fs/promises");
  104 |         const stat = await fs.stat(path);
  105 | 
  106 |         expect(
  107 |           stat.size,
  108 |           `Downloaded file "${download.suggestedFilename()}" is empty`,
  109 |         ).toBeGreaterThan(0);
  110 |       } else {
  111 |         const [pdfPage] = await Promise.all([
  112 |           page.context().waitForEvent("page"),
  113 |           locator.click(),
  114 |         ]);
  115 | 
  116 |         await pdfPage.waitForLoadState("domcontentloaded");
  117 | 
  118 |         expect(pdfPage.url()).toContain(action.expectedHrefContains);
  119 |         await expect(pdfPage.locator("body")).not.toContainText(
  120 |           "HTTP ERROR 404",
  121 |         );
  122 |       }
  123 |       break;
  124 |     }
  125 | 
  126 |     case "opens link on currentURL": {
  127 |       const currentUrl = page.url();
  128 | 
  129 |       console.log("EXPECTED:", await locator.getAttribute("href"));
  130 |       console.log("ACTUAL:", currentUrl);
  131 | 
  132 |       expect(currentUrl).toContain(action.expectedHrefContains);
  133 |       await expect(page.locator("body")).not.toContainText("HTTP ERROR 404");
  134 | 
  135 |       break;
  136 |     }
  137 | 
  138 |     default:
  139 |       throw new Error(`Unknown expectation: ${expectation}`);
  140 |   }
  141 | }
  142 | 
```