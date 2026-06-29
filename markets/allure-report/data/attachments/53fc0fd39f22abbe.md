# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: markets/markets.spec.js >> shares page | heroBanner | signupBtn
- Location: tests/markets/markets.spec.js:16:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /trading\/platform/
Received string:  "https://capital.com/en-gb/markets/shares"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × unexpected value "https://capital.com/en-gb/markets/shares"

```

```yaml
- banner:
  - text: Spread bets and CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage.
  - strong: 61% of retail investor accounts lose money when trading spread bets and CFDs with this provider
  - text: . You should consider whether you understand how spread bets and CFDs work and whether you can afford to take the high risk of losing your money.
  - link:
    - /url: /en-gb
    - img
  - navigation:
    - button "Trading":
      - button "Trading"
    - button "Markets":
      - button "Markets"
    - link "Pricing":
      - /url: /en-gb/ways-to-trade/fees-and-charges
    - button "About":
      - button "About"
  - button "en"
  - button "Log In"
  - button "Open account"
  - button "Search"
- paragraph:
  - link "Home":
    - /url: /en-gb
  - text: •
  - link "Markets overview":
    - /url: /en-gb/markets
  - text: •Shares
- heading "Shares and ETF trading" [level=1]
- paragraph: Thousands of global shares and ETFs across CFDs and spread betting. Extended hours trading on selected assets, with 100+ analytical tools.
- button "Explore shares trading"
- img "laptop"
- heading "Shares and ETF markets" [level=2]
- link "Overview Page":
  - /url: /en-gb/markets/shares
- link "Most traded":
  - /url: /en-gb/markets/shares/most-active-shares
- link "Top risers":
  - /url: /en-gb/markets/shares/top-risers
- link "Top fallers":
  - /url: /en-gb/markets/shares/top-fallers
- button "Region Great Britain Norway Germany Switzerland Sweden France Poland Italy Singapore Ireland United Arab Emirates Netherlands Spain Hong Kong United States of America Greece Canada Australia Japan Saudi Arabia":
  - button "Region":
    - textbox "Region":
      - /placeholder: " "
    - text: Region
  - button "Great Britain":
    - checkbox "Great Britain"
    - text: Great Britain
  - button "Norway":
    - checkbox "Norway"
    - text: Norway
  - button "Germany":
    - checkbox "Germany"
    - text: Germany
  - button "Switzerland":
    - checkbox "Switzerland"
    - text: Switzerland
  - button "Sweden":
    - checkbox "Sweden"
    - text: Sweden
  - button "France":
    - checkbox "France"
    - text: France
  - button "Poland":
    - checkbox "Poland"
    - text: Poland
  - button "Italy":
    - checkbox "Italy"
    - text: Italy
  - button "Singapore":
    - checkbox "Singapore"
    - text: Singapore
  - button "Ireland":
    - checkbox "Ireland"
    - text: Ireland
  - button "United Arab Emirates":
    - checkbox "United Arab Emirates"
    - text: United Arab Emirates
  - button "Netherlands":
    - checkbox "Netherlands"
    - text: Netherlands
  - button "Spain":
    - checkbox "Spain"
    - text: Spain
  - button "Hong Kong":
    - checkbox "Hong Kong"
    - text: Hong Kong
  - button "United States of America":
    - checkbox "United States of America"
    - text: United States of America
  - button "Greece":
    - checkbox "Greece"
    - text: Greece
  - button "Canada":
    - checkbox "Canada"
    - text: Canada
  - button "Australia":
    - checkbox "Australia"
    - text: Australia
  - button "Japan":
    - checkbox "Japan"
    - text: Japan
  - button "Saudi Arabia":
    - checkbox "Saudi Arabia"
    - text: Saudi Arabia
- button "Sector ETFs Technology Non-Cyclical Consumer Goods & Services Financials Cyclical Consumer Goods & Services Industrials Basic Materials Healthcare Telecommunications Services Energy Utilities":
  - button "Sector":
    - textbox "Sector":
      - /placeholder: " "
    - text: Sector
  - button "ETFs":
    - checkbox "ETFs"
    - text: ETFs
  - button "Technology":
    - checkbox "Technology"
    - text: Technology
  - button "Non-Cyclical Consumer Goods & Services":
    - checkbox "Non-Cyclical Consumer Goods & Services"
    - text: Non-Cyclical Consumer Goods & Services
  - button "Financials":
    - checkbox "Financials"
    - text: Financials
  - button "Cyclical Consumer Goods & Services":
    - checkbox "Cyclical Consumer Goods & Services"
    - text: Cyclical Consumer Goods & Services
  - button "Industrials":
    - checkbox "Industrials"
    - text: Industrials
  - button "Basic Materials":
    - checkbox "Basic Materials"
    - text: Basic Materials
  - button "Healthcare":
    - checkbox "Healthcare"
    - text: Healthcare
  - button "Telecommunications Services":
    - checkbox "Telecommunications Services"
    - text: Telecommunications Services
  - button "Energy":
    - checkbox "Energy"
    - text: Energy
  - button "Utilities":
    - checkbox "Utilities"
    - text: Utilities
- separator
- button:
  - textbox "marketlist_search":
    - /placeholder: Search
- text: Sell Buy Spread 1D Chg 1D Charts Sellers Buyers
- link "SPCX SpaceX 155.23 155.44 0.21 +2.200% 8.15% 91.85%":
  - /url: /en-gb/markets/shares/space-exploration-technologies-corp-share-price
  - text: SPCX SpaceX 155.23 155.44 0.21 +2.200%
  - img
  - text: 8.15% 91.85%
- link "MU Micron Technology Inc 1061.27 1063.02 1.75 -5.920% 18.63% 81.37%":
  - /url: /en-gb/markets/shares/micron-technology-inc-share-price-1
  - text: MU Micron Technology Inc 1061.27 1063.02 1.75 -5.920%
  - img
  - text: 18.63% 81.37%
- link "TSLA Tesla Inc 391.64 391.68 0.04 +3.690% 12.49% 87.51%":
  - /url: /en-gb/markets/shares/tesla-share-price
  - text: TSLA Tesla Inc 391.64 391.68 0.04 +3.690%
  - img
  - text: 12.49% 87.51%
- link "MSTR Strategy Inc 85.46 85.61 0.15 +4.670% 8.15% 91.85%":
  - /url: /en-gb/markets/shares/microstrategy-incorporated-share-price-1
  - text: MSTR Strategy Inc 85.46 85.61 0.15 +4.670%
  - img
  - text: 8.15% 91.85%
- link "SOXL Direxion Daily Semiconductor Bull 3X Shares 208.65 209.14 0.49 -1.050% 0% 100%":
  - /url: /en-gb/markets/shares/direxion-daily-semiconductor-bull-3x-shares-share-price-1
  - text: SOXL Direxion Daily Semiconductor Bull 3X Shares 208.65 209.14 0.49 -1.050%
  - img
  - text: 0% 100%
- link "NVDA NVIDIA Corp 193.25 193.38 0.13 +0.590% 6.11% 93.89%":
  - /url: /en-gb/markets/shares/nvidia-share-price
  - text: NVDA NVIDIA Corp 193.25 193.38 0.13 +0.590%
  - img
  - text: 6.11% 93.89%
- link "SNDK SanDisk Corp 1920.50 1921.54 1.04 -7.750% 35.33% 64.67%":
  - /url: /en-gb/markets/shares/sandisk-corp-share-price
  - text: SNDK SanDisk Corp 1920.50 1921.54 1.04 -7.750%
  - img
  - text: 35.33% 64.67%
- link "PLTR Palantir Technologies Inc 118.14 118.29 0.15 +5.240% 6.61% 93.39%":
  - /url: /en-gb/markets/shares/palantir-share-price
  - text: PLTR Palantir Technologies Inc 118.14 118.29 0.15 +5.240%
  - img
  - text: 6.61% 93.39%
- link "AMD Advanced Micro Devices Inc 512.64 513.91 1.27 -0.780% 17.55% 82.45%":
  - /url: /en-gb/markets/shares/advanced-micro-devices-amd-share-price
  - text: AMD Advanced Micro Devices Inc 512.64 513.91 1.27 -0.780%
  - img
  - text: 17.55% 82.45%
- link "MSFT Microsoft Corp 379.09 379.26 0.17 +1.910% 3.37% 96.63%":
  - /url: /en-gb/markets/shares/microsoft-share-price
  - text: MSFT Microsoft Corp 379.09 379.26 0.17 +1.910%
  - img
  - text: 3.37% 96.63%
- text: Share prices are indicative and may differ from live market prices.
- navigation "pagination":
  - link "1":
    - /url: /en-gb/markets/shares?page=1
  - link "2":
    - /url: /en-gb/markets/shares?page=2
  - link "3":
    - /url: /en-gb/markets/shares?page=3
  - text: ...
  - link "602":
    - /url: /en-gb/markets/shares?page=602
  - link "603":
    - /url: /en-gb/markets/shares?page=603
  - link "Go to the next page":
    - /url: /en-gb/markets/shares?page=2
- heading "Built into every account" [level=2]
- heading "Every data point, one place" [level=3]
- paragraph: Stock market data, analysis tools and portfolio context. Structured for the trade, not the transaction.
- link "Explore web platform":
  - /url: https://capital.com/en-gb/trading-platforms/web-platform
- heading "Clear costs, full visibility" [level=3]
- paragraph: Transparent spreads and no hidden charges. A clear cost structure before you commit.
- link "Go to Pricing":
  - /url: https://capital.com/en-gb/ways-to-trade/pricing
- heading "Extended hours on key shares" [level=3]
- paragraph: Positions on selected US shares available through earnings announcements, after the close.
- heading "Global standards, local delivery" [level=3]
- paragraph: Regulated across five jurisdictions. Local support available in your language.
- heading "All the tools, no capital required" [level=3]
- paragraph: Virtual funds, live prices. The features of a live account, before the commitment.
- link "Go to Demo":
  - /url: https://capital.com/en-gb/trading-platforms/demo-account
- heading "Intelligence and risk tools, built in" [level=3]
- paragraph: AI assistant and analysis tools before the trade. Stop-losses* and take-profit orders throughout.
- paragraph: "*Stop losses are not guaranteed. Guaranteed stop-loss orders are available but incur a fee if triggered."
- heading "User feedback and ratings" [level=2]
- region:
  - group "1 of 22":
    - link "2025-07-01 Victor Flemming Nandwa Søder Great customer service I got to say that. They helped get my account back very fast, after i logged myself out by losing my old email, it was so fast you wouldn’t believe it thank you once again.":
      - /url: https://www.trustpilot.com/review/capital.com
      - text: 2025-07-01
      - strong: Victor Flemming Nandwa Søder
      - paragraph: Great customer service I got to say that. They helped get my account back very fast, after i logged myself out by losing my old email, it was so fast you wouldn’t believe it thank you once again.
  - group "2 of 22":
    - link "2025-07-01 Perry Reineke I'm learning the basics of stock investing. This platform is clear and pretty good. I've been using it for over 6 months.":
      - /url: https://www.trustpilot.com/review/capital.com
      - text: 2025-07-01
      - strong: Perry Reineke
      - paragraph: I'm learning the basics of stock investing. This platform is clear and pretty good. I've been using it for over 6 months.
  - group "3 of 22":
    - link "2025-06-30 Brigman Everything worked as expected from the 1 day. I didn’t have to search how to use the platform, it’s intuitive. The support chat was there when I had a tiny issue.":
      - /url: https://www.trustpilot.com/review/capital.com
      - text: 2025-06-30
      - strong: Brigman
      - paragraph: Everything worked as expected from the 1 day. I didn’t have to search how to use the platform, it’s intuitive. The support chat was there when I had a tiny issue.
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
- heading "Shares FAQs" [level=2]
- group:
  - heading "How shares and ETF trading works" [level=3]
- group:
  - heading "What the shares and ETF markets offer" [level=3]
- group:
  - heading "Shares and ETF trading on Capital·com" [level=3]
- contentinfo:
  - link:
    - /url: /en-gb
    - img
  - link:
    - /url: https://app.appsflyer.com/id1230088754?cp_device_id=3972833f-e36b-4be3-9a7c-7594f863ce9c&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=3972833f-e36b-4be3-9a7c-7594f863ce9c&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=3972833f-e36b-4be3-9a7c-7594f863ce9c&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - text: "Country / Region:"
  - button "United Kingdom"
  - text: "• Language:"
  - button "English"
  - text: "Also you can contact us:"
  - link "+442030978888":
    - /url: tel:+442030978888
    - strong: "+442030978888"
    - strong
  - text: •
  - link "support@capital.com":
    - /url: mailto:support@capital.com
    - strong: support@capital.com
  - strong: Trading
  - text: Trading
  - link "Trade CFDs":
    - /url: /en-gb/ways-to-trade/cfd-trading
  - link "Spread betting":
    - /url: /en-gb/ways-to-trade/spread-betting
  - link "Get pro account":
    - /url: /en-gb/professional
  - link "Get demo account":
    - /url: /en-gb/trading-platforms/demo-account
  - link "1X":
    - /url: /en-gb/ways-to-trade/1x
  - text: Platforms
  - link "Mobile app":
    - /url: /en-gb/trading-platforms/mobile-apps
  - link "Web platform":
    - /url: /en-gb/trading-platforms/web-platform
  - link "TradingView":
    - /url: /en-gb/trading-platforms/trading-view
  - link "MT4":
    - /url: /en-gb/trading-platforms/mt4
  - link "API access":
    - /url: /en-gb/trading-platforms/api-development-guide
  - text: Learn
  - link "Trading strategies":
    - /url: /en-gb/learn/trading-strategies
  - link "Technical analysis":
    - /url: /en-gb/learn/technical-analysis
  - link "Trading psychology":
    - /url: /en-gb/learn/trading-psychology
  - link "All resources":
    - /url: /en-gb/learn
  - strong: Markets
  - text: Our markets
  - link "Markets overview":
    - /url: /en-gb/markets
  - link "Shares":
    - /url: /en-gb/markets/shares
  - link "Forex":
    - /url: /en-gb/markets/forex
  - link "Indices":
    - /url: /en-gb/markets/indices
  - link "Commodities":
    - /url: /en-gb/markets/commodities
  - link "Bonds":
    - /url: /en-gb/markets/bonds
  - link "Interest rates":
    - /url: /en-gb/markets/interest-rates
  - text: Market info
  - link "Market analysis":
    - /url: /en-gb/analysis
  - link "Markets pricing":
    - /url: /en-gb/about-us/how-our-markets-are-priced
  - link "Pricing":
    - /url: /en-gb/ways-to-trade/fees-and-charges
    - strong: Pricing
  - strong: About
  - text: Who we are
  - link "Company":
    - /url: /en-gb/about-us
  - link "Our offices":
    - /url: /en-gb/about-us/our-offices
  - link "Press centre":
    - /url: /en-gb/media-centre
  - link "Investor Relations":
    - /url: /en-gb/about-us/investor-relations
  - link "Is capital.com safe?":
    - /url: /en-gb/security-measures
  - link "Our business model":
    - /url: /en-gb/about-us/how-capital-makes-money
  - text: Work with us
  - link "Careers":
    - /url: /en-gb/about-us/careers
  - link "Partnerships":
    - /url: /en-gb/partnerships
  - text: Help
  - link "Help centre":
    - /url: /en-gb/help
  - link "Client vulnerability":
    - /url: /en-gb/help/client-vulnerability
  - link "Contact us":
    - /url: /en-gb/contact-us
  - text: Legal
  - link "Terms & policies":
    - /url: /en-gb/terms-and-policies
  - link "Complaints":
    - /url: /en-gb/help/complaints
  - paragraph: Risk warning
  - paragraph:
    - strong: All Trading involves risk.
    - text: Spread bets and CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage.
    - strong: 61% of retail investor accounts lose money when trading spread bets and CFDs with this provider
    - text: . You should consider whether you understand how spread bets and CFDs work and whether you can afford to take the high risk of losing your money. Professional clients can lose more than they deposit. Please refer to our
    - link "Risk Disclosure Statement":
      - /url: https://capital.com/risk-disclosure-statement-fca
  - paragraph: 1X is a non-leveraged CFD. It is a derivative, and is therefore a complex product. The value of your investment can go down as well as up, and you may get back less than you invest. Crypto Derivatives are not available to Retail clients registered with Capital Com (UK) Ltd. The value of shares and ETFs bought through a share dealing account can fall as well as rise, which could mean getting back less than you originally put in. Past performance is no guarantee of future results. The information contained herein is not intended for distribution to residents in any country where such distribution or use would contravene any local law or regulatory requirement.
  - paragraph
  - paragraph: Capital Com (UK) Limited (“CCUK”) is registered in England and Wales with company registration number 10506220. CCUK is Authorised and regulated by the Financial Conduct Authority (“FCA”), under registration number 793714.
  - paragraph: © 2026 Capital Com (UK) Limited
  - link "Sitemap":
    - /url: /en-gb/sitemap
  - link "Cookie settings":
    - /url: ""
  - link "Clients Funds":
    - /url: /en-gb/about-us/what-capital-does-with-your-money
  - link "Terms and Policies":
    - /url: /en-gb/terms-and-policies
  - link "Complaints Procedure (CCUK)":
    - /url: /en-gb/help/complaints
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
      - /url: /en-gb/terms-and-policies
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