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
    13 × unexpected value "404 Not Found"

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
  56  |       expect(newPage, "External link did not open a new page").toBeTruthy();
  57  | 
  58  |       await newPage
  59  |         .waitForLoadState("domcontentloaded", {
  60  |           timeout: 5000,
  61  |         })
  62  |         .catch(() => {});
  63  |       // expect(newPage.url()).toContain(action.expectedHrefContains);
> 64  |       await expect(newPage).not.toHaveTitle("404 Not Found");
      |                                 ^ Error: expect(page).not.toHaveTitle(expected) failed
  65  |       break;
  66  |     }
  67  | 
  68  |     case "opens regional settings window": {
  69  |       await expect(page.locator('[data-sentry-component="CountryLangSelect"]'));
  70  |       break;
  71  |     }
  72  | 
  73  |     case "exist corresponding license": {
  74  |       const expectedLicenses = action.licenseText?.[currentLicense];
  75  | 
  76  |       if (expectedLicenses?.length) {
  77  |         for (const text of expectedLicenses) {
  78  |           await expect(locator).toContainText(text);
  79  |         }
  80  |       } else {
  81  |         await expect(locator).toContainText(currentLicense);
  82  |       }
  83  | 
  84  |       break;
  85  |     }
  86  | 
  87  |     case "opens cookie menu": {
  88  |       await expect(page.locator(".consent-pc-modal__content"));
  89  |       break;
  90  |     }
  91  | 
  92  |     case "opens pdf document": {
  93  |       const href = await locator.getAttribute("href");
  94  | 
  95  |       expect(href).toContain(action.expectedHrefContains);
  96  |       await expect(locator).toHaveAttribute("target", "_blank");
  97  | 
  98  |       const browserName = testInfo.project.use.browserName;
  99  | 
  100 |       if (browserName.includes("webkit")) {
  101 |         const [download] = await Promise.all([
  102 |           page.waitForEvent("download"),
  103 |           locator.click(),
  104 |         ]);
  105 | 
  106 |         const path = await download.path();
  107 |         expect(path).not.toBeNull();
  108 | 
  109 |         const fs = await import("node:fs/promises");
  110 |         const stat = await fs.stat(path);
  111 | 
  112 |         expect(
  113 |           stat.size,
  114 |           `Downloaded file "${download.suggestedFilename()}" is empty`,
  115 |         ).toBeGreaterThan(0);
  116 |       } else {
  117 |         const [pdfPage] = await Promise.all([
  118 |           page.context().waitForEvent("page"),
  119 |           locator.click(),
  120 |         ]);
  121 | 
  122 |         await pdfPage.waitForLoadState("domcontentloaded");
  123 | 
  124 |         expect(pdfPage.url()).toContain(action.expectedHrefContains);
  125 |         await expect(pdfPage.locator("body")).not.toContainText(
  126 |           "HTTP ERROR 404",
  127 |         );
  128 |       }
  129 |       break;
  130 |     }
  131 | 
  132 |     case "opens link on currentURL": {
  133 |       const currentUrl = page.url();
  134 | 
  135 |       console.log("EXPECTED:", await locator.getAttribute("href"));
  136 |       console.log("ACTUAL:", currentUrl);
  137 | 
  138 |       expect(currentUrl).toContain(action.expectedHrefContains);
  139 |       await expect(page.locator("body")).not.toContainText("HTTP ERROR 404");
  140 | 
  141 |       break;
  142 |     }
  143 | 
  144 |     default:
  145 |       throw new Error(`Unknown expectation: ${expectation}`);
  146 |   }
  147 | }
  148 | 
```