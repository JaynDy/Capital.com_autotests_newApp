# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: markets/markets.spec.js >> bonds page | heroBanner | signupBtn
- Location: tests/markets/markets.spec.js:16:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /trading\/platform/
Received string:  "https://capital.com/en-ae/markets/bonds"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    12 × unexpected value "https://capital.com/en-ae/markets/bonds"

```

```yaml
- banner:
  - text: Capital Com MENA Securities Trading LLC is regulated by the Capital Market Authority.
  - link:
    - /url: /en-ae
    - img
  - navigation:
    - button "Trading":
      - button "Trading"
    - button "Markets":
      - button "Markets"
    - link "Pricing":
      - /url: /en-ae/ways-to-trade/fees-and-charges
    - button "About":
      - button "About"
  - button "en"
  - button "Log In"
  - button "Open account"
  - button "Search"
- paragraph:
  - link "Home":
    - /url: /en-ae
  - text: •
  - link "Markets overview":
    - /url: /en-ae/markets
  - text: •Bonds
- heading "Bond and bond futures trading" [level=1]
- paragraph: Government and corporate debt across major economies. CFD trading on bonds with transparent spreads and 100+ analytical tools.
- button "Explore bonds trading"
- img "laptop"
- heading "Our bond and bond futures markets" [level=2]
- separator
- button:
  - textbox "marketlist_search":
    - /placeholder: Search
- text: Sell Buy Spread 1D Chg 1D Charts Sellers Buyers
- link "US US Treasury Bond Spot 114.03 114.09 0.06 +0.130% 12.77% 87.23%":
  - /url: /en-ae/markets/bonds/us-treasury-bond-spot
  - text: US US Treasury Bond Spot 114.03 114.09 0.06 +0.130%
  - img
  - text: 12.77% 87.23%
- link "TY US 10-Year T-Note Spot 110.17 110.23 0.06 +0.050% 18.18% 81.82%":
  - /url: /en-ae/markets/bonds/us-10-year-t-note-spot
  - text: TY US 10-Year T-Note Spot 110.17 110.23 0.06 +0.050%
  - img
  - text: 18.18% 81.82%
- link "FOATU2026 French OAT Future 120.07 120.12 0.05 +0.030% 0% 100%":
  - /url: /en-ae/markets/bonds/french-oat-future-1
  - text: FOATU2026 French OAT Future 120.07 120.12 0.05 +0.030%
  - img
  - text: 0% 100%
- link "FLGU6 UK Long Gilt Future 89.52 89.54 0.02 +0.060% 25% 75%":
  - /url: /en-ae/markets/bonds/uk-long-gilt-future-1
  - text: FLGU6 UK Long Gilt Future 89.52 89.54 0.02 +0.060%
  - img
  - text: 25% 75%
- link "FGBLU2026 German Bund Future 127.40 127.43 0.03 +0.020% 66.67% 33.33%":
  - /url: /en-ae/markets/bonds/german-bund-future-1
  - text: FGBLU2026 German Bund Future 127.40 127.43 0.03 +0.020%
  - img
  - text: 66.67% 33.33%
- link "TYU2026 US 10-Year T-Note Future 110.22 110.28 0.06 +0.050% 0% 100%":
  - /url: /en-ae/markets/bonds/us-10-year-t-note-future-1
  - text: TYU2026 US 10-Year T-Note Future 110.22 110.28 0.06 +0.050%
  - img
  - text: 0% 100%
- link "FGBXU2026 German Buxl Future 111.29 111.33 0.04 -0.110% 0% 100%":
  - /url: /en-ae/markets/bonds/german-buxl-future-1
  - text: FGBXU2026 German Buxl Future 111.29 111.33 0.04 -0.110%
  - img
  - text: 0% 100%
- link "USU2026 US Treasury Bond Future 114.15 114.21 0.06 +0.140% 0% 100%":
  - /url: /en-ae/markets/bonds/us-treasury-bond-future-1
  - text: USU2026 US Treasury Bond Future 114.15 114.21 0.06 +0.140%
  - img
  - text: 0% 100%
- link "FGBSU2026 German Schatz Future 105.97 105.99 0.02 +0.020% 0% 100%":
  - /url: /en-ae/markets/bonds/german-schatz-future-1
  - text: FGBSU2026 German Schatz Future 105.97 105.99 0.02 +0.020%
  - img
  - text: 0% 100%
- link "FGBMU2026 German Bobl Future 115.41 115.44 0.03 +0.030% 0% 100%":
  - /url: /en-ae/markets/bonds/german-bobl-future-1
  - text: FGBMU2026 German Bobl Future 115.41 115.44 0.03 +0.030%
  - img
  - text: 0% 100%
- text: Share prices are indicative and may differ from live market prices.
- navigation "pagination":
  - link "1":
    - /url: /en-ae/markets/bonds?page=1
  - link "2":
    - /url: /en-ae/markets/bonds?page=2
  - link "Go to the next page":
    - /url: /en-ae/markets/bonds?page=2
- heading "Built into every account" [level=2]
- heading "Every data point, one place" [level=3]
- paragraph: Market data, analysis tools and portfolio context. Structured for the trade, not the transaction.
- link "Explore web platform":
  - /url: https://capital.com/en-ae/trading-platforms/web-platform
- heading "Clear costs, full visibility" [level=3]
- paragraph: Transparent spreads and no hidden charges. A clear cost structure before you commit.
- link "Go to Pricing":
  - /url: https://capital.com/en-int/ways-to-trade/pricing
- heading "TradingView and MT4/MT5" [level=3]
- paragraph: The tools you already use, with the pricing and support of Capital·com.
- link "Go to Platforms":
  - /url: https://capital.com/en-ae/trading-platforms
- heading "Global standards, local delivery" [level=3]
- paragraph: Regulated across five jurisdictions. Local support available in your language.
- heading "All the tools, no capital required" [level=3]
- paragraph: Virtual funds, live prices. The features of a live account, before the commitment.
- link "Go to Demo":
  - /url: https://capital.com/en-int/trading-platforms/demo-account
- heading "Intelligence and risk tools, built in" [level=3]
- paragraph: AI assistant and analysis tools before the trade. Stop-losses* and take-profit orders throughout.
- paragraph: "*Stop losses are not guaranteed. Guaranteed stop-loss orders are available but incur a fee if triggered."
- heading "User feedback and ratings" [level=2]
- region:
  - group "1 of 15":
    - link "2025-07-01 Victor Flemming Nandwa Søder Great customer service I got to say that. They helped get my account back very fast, after i logged myself out by losing my old email, it was so fast you wouldn’t believe it thank you once again.":
      - /url: https://www.trustpilot.com/review/capital.com
      - text: 2025-07-01
      - strong: Victor Flemming Nandwa Søder
      - paragraph: Great customer service I got to say that. They helped get my account back very fast, after i logged myself out by losing my old email, it was so fast you wouldn’t believe it thank you once again.
  - group "2 of 15":
    - link "2025-07-01 Perry Reineke I'm learning the basics of stock investing. This platform is clear and pretty good. I've been using it for over 6 months.":
      - /url: https://www.trustpilot.com/review/capital.com
      - text: 2025-07-01
      - strong: Perry Reineke
      - paragraph: I'm learning the basics of stock investing. This platform is clear and pretty good. I've been using it for over 6 months.
  - group "3 of 15":
    - link "2025-06-29 proinpro Capital is really great to be used on start, also beginner friendly broker! Great costumer support and it is quick!":
      - /url: https://www.trustpilot.com/review/capital.com
      - text: 2025-06-29
      - strong: proinpro
      - paragraph: Capital is really great to be used on start, also beginner friendly broker! Great costumer support and it is quick!
  - button "Go to last slide"
  - button "Next slide"
- paragraph: Showing our 4 & 5 star reviews.
- link "4.6":
  - /url: https://www.tradingview.com/broker/Capitalcom/
  - strong: "4.6"
- link "Ratings and Reviews 4.7":
  - /url: https://app.appsflyer.com/id1230088754?cp_device_id=3972833f-e36b-4be3-9a7c-7594f863ce9c&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - strong: Ratings and Reviews
  - strong: "4.7"
- link "Ratings and Reviews 4.7":
  - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=3972833f-e36b-4be3-9a7c-7594f863ce9c&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - strong: Ratings and Reviews
  - strong: "4.7"
- link "4.6":
  - /url: https://www.trustpilot.com/review/capital.com
  - strong: "4.6"
- heading "Bonds FAQs" [level=2]
- group:
  - heading "How bond trading works" [level=3]
- group:
  - heading "What the bonds market offers" [level=3]
- group:
  - heading "Bond trading on Capital·com" [level=3]
- contentinfo:
  - link:
    - /url: /en-ae
    - img
  - link:
    - /url: https://twitter.com/capital_arabia
  - link:
    - /url: https://www.linkedin.com/company/capital.com
  - link:
    - /url: https://www.instagram.com/capitalcomarabia
  - link:
    - /url: https://www.youtube.com/@capital.com.287
  - link:
    - /url: https://www.tiktok.com/@capitalcomarabia?lang=en
  - link:
    - /url: https://app.appsflyer.com/id1230088754?cp_device_id=3972833f-e36b-4be3-9a7c-7594f863ce9c&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=3972833f-e36b-4be3-9a7c-7594f863ce9c&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=3972833f-e36b-4be3-9a7c-7594f863ce9c&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - text: "Country / Region:"
  - button "United Arab Emirates"
  - text: "• Language:"
  - button "English"
  - text: "Also you can contact us:"
  - link "+971 4 576 8641":
    - /url: tel:+971 4 576 8641
    - strong: +971 4 576 8641
    - strong
  - text: •
  - link "support@capital.com":
    - /url: mailto:support@capital.com
    - strong: support@capital.com
  - strong: Trading
  - text: Trading
  - link "Trade CFDs":
    - /url: /en-ae/ways-to-trade/cfd-trading
  - link "Get demo account":
    - /url: /en-ae/trading-platforms/demo-account
  - text: Platforms
  - link "Web platform":
    - /url: /en-ae/trading-platforms/web-platform
  - link "Mobile app":
    - /url: /en-ae/trading-platforms/mobile-apps
  - link "TradingView":
    - /url: /en-ae/trading-platforms/trading-view
  - link "MT4":
    - /url: /en-ae/trading-platforms/mt4
  - link "MT5":
    - /url: /en-ae/trading-platforms/mt5
  - link "API access":
    - /url: /en-ae/trading-platforms/api-development-guide
  - text: Learn
  - link "Trading strategies":
    - /url: /en-ae/learn/trading-strategies
  - link "Technical analysis":
    - /url: /en-ae/learn/technical-analysis
  - link "Trading psychology":
    - /url: /en-ae/learn/trading-psychology
  - link "All resources":
    - /url: /en-ae/learn
  - strong: Markets
  - text: Our markets
  - link "Markets overview":
    - /url: /en-ae/markets
  - link "Shares":
    - /url: /en-ae/markets/shares
  - link "Forex":
    - /url: /en-ae/markets/forex
  - link "Indices":
    - /url: /en-ae/markets/indices
  - link "Commodities":
    - /url: /en-ae/markets/commodities
  - link "Cryptocurrencies":
    - /url: /en-ae/markets/cryptocurrencies
  - link "Bonds":
    - /url: /en-ae/markets/bonds
  - link "Interest rates":
    - /url: /en-ae/markets/interest-rates
  - text: Market info
  - link "Market analysis":
    - /url: /en-ae/analysis
  - link "Pricing":
    - /url: /en-ae/ways-to-trade/fees-and-charges
    - strong: Pricing
  - strong: About
  - text: Who we are
  - link "Company":
    - /url: /en-ae/about-us
  - link "Our offices":
    - /url: /en-ae/about-us/our-offices
  - link "Press centre":
    - /url: /en-ae/media-centre
  - link "Whitepaper":
    - /url: /whitepaper
  - link "Investor Relations":
    - /url: /en-ae/about-us/investor-relations
  - link "Is capital.com safe?":
    - /url: /en-ae/security-measures
  - link "Our business model":
    - /url: /en-ae/about-us/how-capital-makes-money
  - text: Work with us
  - link "Careers":
    - /url: /en-ae/about-us/careers
  - link "Partnerships":
    - /url: /en-ae/partnerships
  - text: Help
  - link "Help centre":
    - /url: /en-ae/help
  - link "Client vulnerability":
    - /url: /en-ae/help/client-vulnerability
  - link "Contact us":
    - /url: /en-ae/contact-us
  - text: Legal
  - link "Terms & policies":
    - /url: /en-ae/terms-and-policies
  - link "Complaints":
    - /url: /en-ae/help/complaints
  - paragraph:
    - strong: Over-the-counter leveraged derivative contracts, including contracts for difference and spot foreign exchange products are complex financial instruments and carries a high degree of risk of losing money rapidly due to leverage. Trading Over-the-Counter leveraged derivatives may not be suitable for all investors. Before engaging in any trading activities, you should carefully consider your investment objectives, risk tolerance, and financial situation. Please seek independent financial advice before trading if necessary.
  - paragraph: Capital Com MENA Securities Trading L.L.C. is a limited liability company with company number 1994695. Capital Com MENA Securities Trading L.L.C. is a Company registered in Dubai, United Arab Emirates, and authorised by the CMA (Capital Market Authority) with license number 20200000176. The company engages in financial and investment activities under Category One – Dealing in Securities which include (a)Financial Products dealer, (b)Trading broker in the international markets and (c)Trading broker of OTC derivatives and currencies in the spot market. The Company’s registered office is at Jumeirah Emirates Towers, Emirates Towers Offices, Level L14, Unit 14C, Dubai, UAE. Capital Com MENA Securities Trading L.L.C. is an execution only service provider and does not provide investment advice. Capital Com MENA Securities Trading L.L.C. may publish general market commentary from time to time. Where it does, the material published does not constitute advice, or a solicitation, or a recommendation to a transaction in any financial instrument. Capital Com MENA Securities Trading L.L.C. accepts no responsibility for any use of the content presented and any consequences of that use. No representation or warranty is given as to the completeness of this information. Anyone acting on the information provided does so at their own risk. The information contained herein is not intended for distribution to residents in any country where such distribution or use would contravene any local law or regulatory requirement. Our products and services are not available to embargoed or sanctioned countries. The information is not intended for distribution to, or use by, any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.
  - paragraph: © 2026 Capital Com Mena Securities Trading LLC
  - link "Sitemap":
    - /url: /en-ae/sitemap
  - link "Cookie Settings":
    - /url: ""
  - link "Clients Funds":
    - /url: /en-ae/about-us/what-capital-does-with-your-money
  - link "Terms and Policies":
    - /url: /en-ae/terms-and-policies
  - link "Complaints Procedure CCMENA":
    - /url: /en-ae/help/complaints
- button "Close modal"
- img
- list:
  - listitem: One app. 5,500+ markets
  - listitem: 24/7 support to assist you in 10+ languages
  - listitem: 75+ technical analysis indicators
  - listitem: Free trading education to build your skills
- strong: Sign up
- paragraph:
  - text: Already have an account?
  - button "Login"
- button "Email address Please enter a valid Email":
  - button "Email address":
    - textbox "email":
      - /placeholder: " "
    - text: Email address
  - listitem: Please enter a valid Email
- button "Password • At least one digit • At least one lower case letter • At least one special character • At least one upper case letter • Minimum 8 characters":
  - button "Password":
    - textbox "password":
      - /placeholder: " "
    - text: Password
  - listitem: • At least one digit
  - listitem: • At least one lower case letter
  - listitem: • At least one special character
  - listitem: • At least one upper case letter
  - listitem: • Minimum 8 characters
- button "Continue"
- separator
- text: OR
- iframe
- button
- paragraph:
  - text: By creating an account, I confirm that I have read and understood the
  - strong:
    - link "Privacy Policy":
      - /url: /en-ae/terms-and-policies
- button
- alert
```

# Test source

```ts
  1  | import { expect } from "@playwright/test";
  2  | import { ctaRegistry } from "../test_data/CTA/pages.cta.registry";
  3  | 
  4  | export async function expectPageState(
  5  |   page,
  6  |   action,
  7  |   expectation,
  8  |   testInfo,
  9  |   locator,
  10 | ) {
  11 |   console.log("EXPECTATION ASSERTIONS", expectation);
  12 |   const currentUrl = testInfo.project.use.baseURL;
  13 |   const currentLicense = testInfo.project.use.licenseName;
  14 |   // console.log("Current URL: ", currentUrl);
  15 | 
  16 |   const expectationType =
  17 |     typeof expectation === "string" ? expectation : expectation.type;
  18 | 
  19 |   switch (expectationType) {
  20 |     case "redirects to platform":
> 21 |       await expect(page).toHaveURL(/trading\/platform/);
     |                          ^ Error: expect(page).toHaveURL(expected) failed
  22 |       break;
  23 | 
  24 |     case "shows signup form":
  25 |       await expect(
  26 |         // page.locator('form[data-sentry-component="SignUp"]'),
  27 |         page.locator('[data-type="SIGN_UP_close"]'),
  28 |       ).toBeVisible();
  29 |       break;
  30 | 
  31 |     case "shows login form":
  32 |       await expect(page.locator('[data-testid="modal-title"]'));
  33 |       break;
  34 | 
  35 |     case "redirect": {
  36 |       const pageConfig = ctaRegistry[expectation.page].path;
  37 | 
  38 |       // const pagePath = ctaRegistry[expectation.page].path;
  39 |       const pagePath =
  40 |         typeof pageConfig === "function"
  41 |           ? pageConfig(currentLicense)
  42 |           : pageConfig;
  43 | 
  44 |       const expectedURL = pagePath ? `${currentUrl}/${pagePath}` : currentUrl;
  45 |       await expect(page).toHaveURL(new RegExp(`${expectedURL}/?$`));
  46 |       break;
  47 |     }
  48 | 
  49 |     case "opens external link": {
  50 |       const href = await locator.getAttribute("href");
  51 |       await expect(locator).toHaveAttribute("target", "_blank");
  52 |       expect(href).toContain(action.expectedHrefContains);
  53 |       break;
  54 |     }
  55 | 
  56 |     case "opens regional settings window": {
  57 |       await expect(page.locator('[data-sentry-component="CountryLangSelect"]'));
  58 |       break;
  59 |     }
  60 | 
  61 |     case "exist corresponding license": {
  62 |       const expectedLicenses = action.licenseText?.[currentLicense];
  63 | 
  64 |       if (expectedLicenses?.length) {
  65 |         for (const text of expectedLicenses) {
  66 |           await expect(locator).toContainText(text);
  67 |         }
  68 |       } else {
  69 |         await expect(locator).toContainText(currentLicense);
  70 |       }
  71 | 
  72 |       break;
  73 |     }
  74 | 
  75 |     case "opens cookie menu": {
  76 |       await expect(page.locator(".consent-pc-modal__content"));
  77 |       break;
  78 |     }
  79 | 
  80 |     default:
  81 |       throw new Error(`Unknown expectation: ${expectation}`);
  82 |   }
  83 | }
  84 | 
```