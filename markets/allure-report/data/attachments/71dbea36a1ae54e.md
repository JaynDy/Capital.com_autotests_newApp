# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: markets/markets.spec.js >> forex page | heroBanner | signupBtn
- Location: tests/markets/markets.spec.js:16:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /trading\/platform/
Received string:  "https://capital.com/en-gb/markets/forex"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × unexpected value "https://capital.com/en-gb/markets/forex"

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
  - text: •Forex
- heading "Forex and forex forwards trading" [level=1]
- paragraph: Forex CFDs and spread betting across 120+ major, minor and exotic pairs. 100+ analytical tools on a 24/5 market.
- button "Explore forex trading"
- img "laptop"
- heading "Our forex and forex forward markets" [level=2]
- link "Overview Page":
  - /url: /en-gb/markets/forex
- link "Most traded":
  - /url: /en-gb/markets/forex/most-traded
- link "Top risers":
  - /url: /en-gb/markets/forex/top-risers
- link "Top fallers":
  - /url: /en-gb/markets/forex/top-fallers
- separator
- button:
  - textbox "marketlist_search":
    - /placeholder: Search
- text: Sell Buy Spread 1D Chg 1D Charts Sellers Buyers
- link "EUR/USD Euro / US Dollar 1.14160 1.14167 0.00007 - 36.57% 63.43%":
  - /url: /en-gb/markets/forex/eur-usd-rate
  - text: EUR/USD Euro / US Dollar 1.14160 1.14167 0.00007 -
  - img
  - text: 36.57% 63.43%
- link "USD/JPY US Dollar / Japanese Yen 161.886 161.898 0.012 +0.090% 71.03% 28.97%":
  - /url: /en-gb/markets/forex/usd-jpy-rate
  - text: USD/JPY US Dollar / Japanese Yen 161.886 161.898 0.012 +0.090%
  - img
  - text: 71.03% 28.97%
- link "AUD/USD Australian Dollar / US Dollar 0.68821 0.68827 0.00006 - 34.41% 65.59%":
  - /url: /en-gb/markets/forex/aud-usd-rate
  - text: AUD/USD Australian Dollar / US Dollar 0.68821 0.68827 0.00006 -
  - img
  - text: 34.41% 65.59%
- link "GBP/USD British Pound / US Dollar 1.32401 1.32414 0.00013 - 32.12% 67.88%":
  - /url: /en-gb/markets/forex/gbp-usd-rate
  - text: GBP/USD British Pound / US Dollar 1.32401 1.32414 0.00013 -
  - img
  - text: 32.12% 67.88%
- link "USD/MXN US Dollar / Mexican Peso 17.50674 17.50878 0.00204 - 24.81% 75.19%":
  - /url: /en-gb/markets/forex/usd-mxn-rate
  - text: USD/MXN US Dollar / Mexican Peso 17.50674 17.50878 0.00204 -
  - img
  - text: 24.81% 75.19%
- link "USD/CHF US Dollar / Swiss Franc 0.80819 0.80834 0.00015 - 29.81% 70.19%":
  - /url: /en-gb/markets/forex/usd-chf-rate
  - text: USD/CHF US Dollar / Swiss Franc 0.80819 0.80834 0.00015 -
  - img
  - text: 29.81% 70.19%
- link "USD/CAD US Dollar / Canadian Dollar 1.42133 1.42153 0.00020 - 51.77% 48.23%":
  - /url: /en-gb/markets/forex/usd-cad-rate
  - text: USD/CAD US Dollar / Canadian Dollar 1.42133 1.42153 0.00020 -
  - img
  - text: 51.77% 48.23%
- link "EUR/JPY Euro / Japanese Yen 184.807 184.829 0.022 +0.400% 45.7% 54.3%":
  - /url: /en-gb/markets/forex/eur-jpy-rate
  - text: EUR/JPY Euro / Japanese Yen 184.807 184.829 0.022 +0.400%
  - img
  - text: 45.7% 54.3%
- link "GBP/JPY British Pound / Japanese Yen 214.341 214.368 0.027 +0.460% 38.1% 61.9%":
  - /url: /en-gb/markets/forex/gbp-jpy-rate
  - text: GBP/JPY British Pound / Japanese Yen 214.341 214.368 0.027 +0.460%
  - img
  - text: 38.1% 61.9%
- link "AUD/JPY Australian Dollar / Japanese Yen 111.416 111.424 0.008 -0.040% 37.21% 62.79%":
  - /url: /en-gb/markets/forex/aud-jpy-rate
  - text: AUD/JPY Australian Dollar / Japanese Yen 111.416 111.424 0.008 -0.040%
  - img
  - text: 37.21% 62.79%
- text: Share prices are indicative and may differ from live market prices.
- navigation "pagination":
  - link "1":
    - /url: /en-gb/markets/forex?page=1
  - link "2":
    - /url: /en-gb/markets/forex?page=2
  - link "3":
    - /url: /en-gb/markets/forex?page=3
  - text: ...
  - link "14":
    - /url: /en-gb/markets/forex?page=14
  - link "15":
    - /url: /en-gb/markets/forex?page=15
  - link "Go to the next page":
    - /url: /en-gb/markets/forex?page=2
- heading "Built into every account" [level=2]
- heading "Every data point, one place" [level=3]
- paragraph: Market data and analysis tools across all four forex sessions. Structured for the trade, not the transaction.
- link "Explore web platform":
  - /url: /en-gb/trading-platforms/web-platform
- heading "Clear costs, full visibility" [level=3]
- paragraph: Transparent spreads and no hidden charges. A clear cost structure before you commit.
- link "Go to Pricing":
  - /url: /en-gb/ways-to-trade/fees-and-charges
- heading "TradingView and MT4/MT5" [level=3]
- paragraph: The tools you already use, with the pricing and support of Capital.com.
- link "Go to Platforms":
  - /url: /en-gb/trading-platforms
- heading "Global standards, local delivery" [level=3]
- paragraph: Regulated across five jurisdictions. Local support available in your language.
- heading "120+ forex CFD pairs" [level=3]
- paragraph: Majors, minors and exotics. The full range of currency markets, 24/5.
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
- heading "Forex FAQs" [level=2]
- group:
  - heading "How forex trading works" [level=3]
- group:
  - heading "What the forex market offers" [level=3]
- group:
  - heading "Forex trading on Capital.com" [level=3]
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