# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cta/generated.cta.spec.js >> helpCentreMyAccount page | socialMediaMyAccountBlock | instagramIcon
- Location: tests/cta/generated.cta.spec.js:40:7

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "instagram.com"
Received string:    ""
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - link "Skip to main content" [ref=e2] [cursor=pointer]:
    - /url: "#main-content"
  - generic [ref=e4]:
    - text: CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage.
    - strong [ref=e5]: 79.75% of retail investor accounts lose money when trading CFDs with this provider.
    - text: You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.
  - generic [ref=e7]:
    - banner [ref=e8]:
      - generic [ref=e9]:
        - link "Logo" [ref=e11] [cursor=pointer]:
          - /url: /hc/en-us
          - img "Logo" [ref=e12]
        - navigation [ref=e13]:
          - button "Categories " [ref=e16] [cursor=pointer]
          - generic [ref=e17]:
            - link "Submit a request" [ref=e18] [cursor=pointer]:
              - /url: /hc/en-us/requests/new
            - generic [ref=e20] [cursor=pointer]: English (United States)
    - main [ref=e23]:
      - generic [ref=e25]:
        - list [ref=e27]:
          - listitem "Capital.com" [ref=e28]:
            - link "Capital.com" [ref=e29] [cursor=pointer]:
              - /url: /hc/en-us
          - listitem "My account" [ref=e30]: › My account
        - generic [ref=e31]:
          - search [ref=e33]:
            - searchbox "guide_search" [ref=e34]
          - heading "My account" [level=1] [ref=e36]
      - generic [ref=e40]:
        - generic [ref=e41]:
          - heading "Account settings" [level=2] [ref=e42]:
            - link "Account settings" [ref=e43] [cursor=pointer]:
              - /url: /hc/en-us/sections/9623468554514-Account-settings
          - generic [ref=e44]:
            - list [ref=e45]:
              - listitem [ref=e46]:
                - link "Why can't I log in?" [ref=e47] [cursor=pointer]:
                  - /url: /hc/en-us/articles/30866804796946-Why-can-t-I-log-in
              - listitem [ref=e48]:
                - link "How to resolve a technical issue on Capital.com" [ref=e49] [cursor=pointer]:
                  - /url: /hc/en-us/articles/30442748810386-How-to-resolve-a-technical-issue-on-Capital-com
              - listitem [ref=e50]:
                - link "How do we protect you if there’s a new device login on your account?" [ref=e51] [cursor=pointer]:
                  - /url: /hc/en-us/articles/29099636066706-How-do-we-protect-you-if-there-s-a-new-device-login-on-your-account
              - listitem [ref=e52]:
                - link "How to enable push notifications in the app" [ref=e53] [cursor=pointer]:
                  - /url: /hc/en-us/articles/28988762935954-How-to-enable-push-notifications-in-the-app
              - listitem [ref=e54]:
                - link "How to change language" [ref=e55] [cursor=pointer]:
                  - /url: /hc/en-us/articles/28422751723666-How-to-change-language
              - listitem [ref=e56]:
                - link "Login via Liveness (live selfie) as 2FA alternative" [ref=e57] [cursor=pointer]:
                  - /url: /hc/en-us/articles/28327171792274-Login-via-Liveness-live-selfie-as-2FA-alternative
            - link "See all 16 articles" [ref=e58] [cursor=pointer]:
              - /url: /hc/en-us/sections/9623468554514-Account-settings
        - generic [ref=e59]:
          - heading "Account types" [level=2] [ref=e60]:
            - link "Account types" [ref=e61] [cursor=pointer]:
              - /url: /hc/en-us/sections/19759378600722-Account-types
          - list [ref=e63]:
            - listitem [ref=e64]:
              - link "How to downgrade from Professional to Retail client?" [ref=e65] [cursor=pointer]:
                - /url: /hc/en-us/articles/30586623366290-How-to-downgrade-from-Professional-to-Retail-client
            - listitem [ref=e66]:
              - link "What are swap-free accounts? Do you offer swap-free accounts?" [ref=e67] [cursor=pointer]:
                - /url: /hc/en-us/articles/20084223103890-What-are-swap-free-accounts-Do-you-offer-swap-free-accounts
            - listitem [ref=e68]:
              - link "What account types are available?" [ref=e69] [cursor=pointer]:
                - /url: /hc/en-us/articles/19743428512914-What-account-types-are-available
            - listitem [ref=e70]:
              - link "What is a retail client?" [ref=e71] [cursor=pointer]:
                - /url: /hc/en-us/articles/19743465623954-What-is-a-retail-client
            - listitem [ref=e72]:
              - link "What would I need to qualify as a professional client?" [ref=e73] [cursor=pointer]:
                - /url: /hc/en-us/articles/19743484565650-What-would-I-need-to-qualify-as-a-professional-client
        - generic [ref=e74]:
          - heading "Closing your account" [level=2] [ref=e75]:
            - link "Closing your account" [ref=e76] [cursor=pointer]:
              - /url: /hc/en-us/sections/19761189218834-Closing-your-account
          - list [ref=e78]:
            - listitem [ref=e79]:
              - link "How can I delete my personal information after closing my account?" [ref=e80] [cursor=pointer]:
                - /url: /hc/en-us/articles/29194946887314-How-can-I-delete-my-personal-information-after-closing-my-account
            - listitem [ref=e81]:
              - link "How can I close my account?" [ref=e82] [cursor=pointer]:
                - /url: /hc/en-us/articles/9626336922130-How-can-I-close-my-account
        - generic [ref=e83]:
          - heading "Opening an account" [level=2] [ref=e84]:
            - link "Opening an account" [ref=e85] [cursor=pointer]:
              - /url: /hc/en-us/sections/12207063998994-Opening-an-account
          - list [ref=e87]:
            - listitem [ref=e88]:
              - link "Can I open an account for my child?" [ref=e89] [cursor=pointer]:
                - /url: /hc/en-us/articles/27732894704786-Can-I-open-an-account-for-my-child
            - listitem [ref=e90]:
              - link "Is Capital.com available in my country?" [ref=e91] [cursor=pointer]:
                - /url: /hc/en-us/articles/27040348915090-Is-Capital-com-available-in-my-country
            - listitem [ref=e92]:
              - link "Can I have more than one account?" [ref=e93] [cursor=pointer]:
                - /url: /hc/en-us/articles/9626333397266-Can-I-have-more-than-one-account
            - listitem [ref=e94]:
              - link "In which currencies can I open an account?" [ref=e95] [cursor=pointer]:
                - /url: /hc/en-us/articles/9626331659794-In-which-currencies-can-I-open-an-account
            - listitem [ref=e96]:
              - link "How do I open an account?" [ref=e97] [cursor=pointer]:
                - /url: /hc/en-us/articles/9626035370386-How-do-I-open-an-account
            - listitem [ref=e98]:
              - link "What is the minimum age to start trading?" [ref=e99] [cursor=pointer]:
                - /url: /hc/en-us/articles/9625876939922-What-is-the-minimum-age-to-start-trading
        - generic [ref=e100]:
          - heading "Update account details" [level=2] [ref=e101]:
            - link "Update account details" [ref=e102] [cursor=pointer]:
              - /url: /hc/en-us/sections/19762072241298-Update-account-details
          - list [ref=e104]:
            - listitem [ref=e105]:
              - link "How can I update my personal details on my account? I'm now married and changed my name/surname" [ref=e106] [cursor=pointer]:
                - /url: /hc/en-us/articles/19765225838994-How-can-I-update-my-personal-details-on-my-account-I-m-now-married-and-changed-my-name-surname
            - listitem [ref=e107]:
              - link "How can I update my address?" [ref=e108] [cursor=pointer]:
                - /url: /hc/en-us/articles/19765104443794-How-can-I-update-my-address
            - listitem [ref=e109]:
              - link "I've moved countries. I now live abroad. How do I update my details?" [ref=e110] [cursor=pointer]:
                - /url: /hc/en-us/articles/19765082527122-I-ve-moved-countries-I-now-live-abroad-How-do-I-update-my-details
            - listitem [ref=e111]:
              - link "How can I change the phone number on my account?" [ref=e112] [cursor=pointer]:
                - /url: /hc/en-us/articles/9625812005266-How-can-I-change-the-phone-number-on-my-account
            - listitem [ref=e113]:
              - link "How can I change my email address?" [ref=e114] [cursor=pointer]:
                - /url: /hc/en-us/articles/9625828852882-How-can-I-change-my-email-address
        - generic [ref=e115]:
          - heading "Verification" [level=2] [ref=e116]:
            - link "Verification" [ref=e117] [cursor=pointer]:
              - /url: /hc/en-us/sections/9623674528658-Verification
          - generic [ref=e118]:
            - list [ref=e119]:
              - listitem [ref=e120]:
                - link "How to confirm your email address" [ref=e121] [cursor=pointer]:
                  - /url: /hc/en-us/articles/30443900423826-How-to-confirm-your-email-address
              - listitem [ref=e122]:
                - link "Who is considered a ‘US person’?" [ref=e123] [cursor=pointer]:
                  - /url: /hc/en-us/articles/29088997242514-Who-is-considered-a-US-person
              - listitem [ref=e124]:
                - link "What if I don’t have all my address details?" [ref=e125] [cursor=pointer]:
                  - /url: /hc/en-us/articles/28449877767058-What-if-I-don-t-have-all-my-address-details
              - listitem [ref=e126]:
                - link "Why was my proof of identity rejected?" [ref=e127] [cursor=pointer]:
                  - /url: /hc/en-us/articles/27280502043666-Why-was-my-proof-of-identity-rejected
              - listitem [ref=e128]:
                - link "Why was my proof of address rejected?" [ref=e129] [cursor=pointer]:
                  - /url: /hc/en-us/articles/27012726906386-Why-was-my-proof-of-address-rejected
              - listitem [ref=e130]:
                - link "What is my post/zip code?" [ref=e131] [cursor=pointer]:
                  - /url: /hc/en-us/articles/27011558579986-What-is-my-post-zip-code
            - link "See all 16 articles" [ref=e132] [cursor=pointer]:
              - /url: /hc/en-us/sections/9623674528658-Verification
        - generic [ref=e133]:
          - heading "Affiliate partnership programme" [level=2] [ref=e134]:
            - link "Affiliate partnership programme" [ref=e135] [cursor=pointer]:
              - /url: /hc/en-us/sections/29151969320082-Affiliate-partnership-programme
          - list [ref=e137]:
            - listitem [ref=e138]:
              - link "What is the Capital.com affiliate partnership programme?" [ref=e139] [cursor=pointer]:
                - /url: /hc/en-us/articles/29152402098578-What-is-the-Capital-com-affiliate-partnership-programme
            - listitem [ref=e140]:
              - link "What level of commissions can I get?" [ref=e141] [cursor=pointer]:
                - /url: /hc/en-us/articles/29152358673298-What-level-of-commissions-can-I-get
            - listitem [ref=e142]:
              - link "How often is commission paid?" [ref=e143] [cursor=pointer]:
                - /url: /hc/en-us/articles/29152363472658-How-often-is-commission-paid
            - listitem [ref=e144]:
              - link "How can I withdraw my commission?" [ref=e145] [cursor=pointer]:
                - /url: /hc/en-us/articles/29152355418642-How-can-I-withdraw-my-commission
            - listitem [ref=e146]:
              - link "What documents do you need for me to be approved as an affiliate?" [ref=e147] [cursor=pointer]:
                - /url: /hc/en-us/articles/29152344652178-What-documents-do-you-need-for-me-to-be-approved-as-an-affiliate
            - listitem [ref=e148]:
              - link "Are there any countries where I cannot promote Capital.com?" [ref=e149] [cursor=pointer]:
                - /url: /hc/en-us/articles/29152337930898-Are-there-any-countries-where-I-cannot-promote-Capital-com
    - contentinfo [ref=e150]:
      - generic [ref=e151]:
        - paragraph [ref=e153]: © Capital.com
        - generic [ref=e154]:
          - link " Facebook" [ref=e155] [cursor=pointer]:
            - /url: ""
            - text: 
            - generic [ref=e156]: Facebook
          - link " Twitter" [ref=e157] [cursor=pointer]:
            - /url: ""
            - text: 
            - generic [ref=e158]: Twitter
          - link " YouTube" [ref=e159] [cursor=pointer]:
            - /url: ""
            - text: 
            - generic [ref=e160]: YouTube
          - link " LinkedIn" [ref=e161] [cursor=pointer]:
            - /url: ""
            - text: 
            - generic [ref=e162]: LinkedIn
          - link " Instagram" [active] [ref=e163] [cursor=pointer]:
            - /url: ""
            - text: 
            - generic [ref=e164]: Instagram
  - button " Return to top" [ref=e165]:
    - text: 
    - generic [ref=e166]: Return to top
  - generic:
    - generic:
      - generic [ref=e168]:
        - iframe [ref=e169]:
          - button "Close message from company" [ref=f2e3] [cursor=pointer]:
            - img [ref=f2e4]
        - iframe [ref=e170]:
          - button "Hi! Need any help?" [ref=f3e4] [cursor=pointer]
      - iframe [ref=e171]:
        - button "Open messaging window" [ref=f4e4] [cursor=pointer]:
          - img [ref=f4e6]
          - img [ref=f4e9]
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
  10  | ) {
  11  |   console.log("EXPECTATION ASSERTIONS", expectation);
  12  |   const currentUrl = testInfo.project.use.baseURL;
  13  |   const currentLicense = testInfo.project.use.licenseName;
  14  |   const currentLang = testInfo.project.use.langName;
  15  |   // console.log("Current URL: ", currentUrl);
  16  | 
  17  |   const expectationType =
  18  |     typeof expectation === "string" ? expectation : expectation.type;
  19  | 
  20  |   switch (expectationType) {
  21  |     case "redirects to platform":
  22  |       await expect(page).toHaveURL(/trading\/platform/);
  23  |       break;
  24  | 
  25  |     case "shows signup form":
  26  |       await expect(
  27  |         // page.locator('form[data-sentry-component="SignUp"]'),
  28  |         page.locator('[data-type="SIGN_UP_close"]'),
  29  |       ).toBeVisible();
  30  |       break;
  31  | 
  32  |     case "shows login form":
  33  |       await expect(page.locator('[data-testid="modal-title"]'));
  34  |       break;
  35  | 
  36  |     case "redirect": {
  37  |       const pageConfig = ctaRegistry[expectation.page].path;
  38  | 
  39  |       // const pagePath = ctaRegistry[expectation.page].path;
  40  |       const pagePath =
  41  |         typeof pageConfig === "function"
  42  |           ? pageConfig(currentLicense)
  43  |           : pageConfig;
  44  | 
  45  |       const expectedURL = pagePath ? `${currentUrl}/${pagePath}` : currentUrl;
  46  |       await expect(page).toHaveURL(new RegExp(`${expectedURL}/?$`));
  47  |       break;
  48  |     }
  49  | 
  50  |     case "opens external link": {
  51  |       const href = await locator.getAttribute("href");
  52  |       // await expect(locator).toHaveAttribute("target", "_blank");
> 53  |       expect(href).toContain(action.expectedHrefContains);
      |                    ^ Error: expect(received).toContain(expected) // indexOf
  54  |       break;
  55  |     }
  56  | 
  57  |     case "opens regional settings window": {
  58  |       await expect(page.locator('[data-sentry-component="CountryLangSelect"]'));
  59  |       break;
  60  |     }
  61  | 
  62  |     case "exist corresponding license": {
  63  |       const expectedLicenses = action.licenseText?.[currentLicense];
  64  | 
  65  |       if (expectedLicenses?.length) {
  66  |         for (const text of expectedLicenses) {
  67  |           await expect(locator).toContainText(text);
  68  |         }
  69  |       } else {
  70  |         await expect(locator).toContainText(currentLicense);
  71  |       }
  72  | 
  73  |       break;
  74  |     }
  75  | 
  76  |     case "opens cookie menu": {
  77  |       await expect(page.locator(".consent-pc-modal__content"));
  78  |       break;
  79  |     }
  80  | 
  81  |     case "opens pdf document": {
  82  |       const href = await locator.getAttribute("href");
  83  | 
  84  |       expect(href).toContain(action.expectedHrefContains);
  85  |       await expect(locator).toHaveAttribute("target", "_blank");
  86  | 
  87  |       const browserName = testInfo.project.use.browserName;
  88  | 
  89  |       if (browserName.includes("webkit")) {
  90  |         const [download] = await Promise.all([
  91  |           page.waitForEvent("download"),
  92  |           locator.click(),
  93  |         ]);
  94  | 
  95  |         const path = await download.path();
  96  |         expect(path).not.toBeNull();
  97  | 
  98  |         const fs = await import("node:fs/promises");
  99  |         const stat = await fs.stat(path);
  100 | 
  101 |         expect(
  102 |           stat.size,
  103 |           `Downloaded file "${download.suggestedFilename()}" is empty`,
  104 |         ).toBeGreaterThan(0);
  105 |       } else {
  106 |         const [pdfPage] = await Promise.all([
  107 |           page.context().waitForEvent("page"),
  108 |           locator.click(),
  109 |         ]);
  110 | 
  111 |         await pdfPage.waitForLoadState("domcontentloaded");
  112 | 
  113 |         expect(pdfPage.url()).toContain(action.expectedHrefContains);
  114 |         await expect(pdfPage.locator("body")).not.toContainText(
  115 |           "HTTP ERROR 404",
  116 |         );
  117 |       }
  118 |       break;
  119 |     }
  120 | 
  121 |     case "opens link on currentURL": {
  122 |       const currentUrl = page.url();
  123 | 
  124 |       console.log("EXPECTED:", await locator.getAttribute("href"));
  125 |       console.log("ACTUAL:", currentUrl);
  126 | 
  127 |       expect(currentUrl).toContain(action.expectedHrefContains);
  128 |       await expect(page.locator("body")).not.toContainText("HTTP ERROR 404");
  129 | 
  130 |       break;
  131 |     }
  132 | 
  133 |     default:
  134 |       throw new Error(`Unknown expectation: ${expectation}`);
  135 |   }
  136 | }
  137 | 
```