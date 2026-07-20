# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cta/generated.cta.spec.js >> bonds page | tradingInstrument | viewDetailedChartBtn
- Location: tests/cta/generated.cta.spec.js:16:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('[data-type="SIGN_UP_close"]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('[data-type="SIGN_UP_close"]')

```

```yaml
- banner:
  - text: CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage.
  - strong: Between 74-89% of retail investor accounts lose money when trading CFDs
  - text: . You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money. Please refer to our
  - link "Risk Disclosure Statement":
    - /url: https://capital.com/risk-disclosure-policy-cceu
  - link:
    - /url: /en-eu
    - img
  - navigation:
    - button "Trading":
      - button "Trading"
    - button "Markets":
      - button "Markets"
    - link "Pricing":
      - /url: /en-eu/ways-to-trade/fees-and-charges
    - button "About":
      - button "About"
  - button "en"
  - button "Log In"
  - button "Open account"
  - button "Search"
- paragraph:
  - link "Home":
    - /url: /en-eu
  - text: •
  - link "Markets overview":
    - /url: /en-eu/markets
  - text: •
  - link "Bonds":
    - /url: /en-eu/markets/bonds
  - text: •US Treasury Bond Spot
- heading "Trade US Treasury Bond Spot - US CFD" [level=1]
- button "Add to favourite"
- strong: "110.85"
- text: "-0.43%"
- link:
  - /url: ""
- button "1m"
- button "5m"
- button "15m"
- button "30m"
- button "1h"
- button "4h"
- button "1d"
- button "1w"
- img
- button "View detailed chart"
- link "Sell 110.79":
  - /url: /instrument?id=7096806391502020
  - text: Sell
  - paragraph: "110.79"
- link "Buy 110.85":
  - /url: /instrument?id=7096806391502020
  - text: Buy
  - paragraph: "110.85"
- text: "0.06 Low: 110.69 High: 111.49"
- table
- text: "Sellers: 18.52% Buyers: 81.48%"
- button "Market Trading Hours (UTC)":
  - paragraph: Market Trading Hours (UTC)
  - strong: Open Now
- strong: Past performance is not a reliable indicator of future results. Share prices are indicative and may differ from live market prices.
- button "Summary"
- button "Historical Data"
- strong: Trading Conditions
- table:
  - rowgroup:
    - 'row "Type This financial instrument is available for trading through CFDs and Knock-outs. Knock-out options available only for selected countries. Learn more about: CFDs Knock-outs CFD Knock-out"':
      - 'cell "Type This financial instrument is available for trading through CFDs and Knock-outs. Knock-out options available only for selected countries. Learn more about: CFDs Knock-outs"':
        - text: "Type This financial instrument is available for trading through CFDs and Knock-outs. Knock-out options available only for selected countries. Learn more about:"
        - link "CFDs":
          - /url: /en-eu/ways-to-trade/cfd-trading
        - link "Knock-outs":
          - /url: /en-eu/ways-to-trade/knock-outs
      - cell "CFD Knock-out":
        - button "CFD"
        - button "Knock-out"
    - row "Spread 0.06":
      - cell "Spread"
      - cell "0.06"
    - row "Long position overnight funding adjustment Long position overnight funding adjustment Margin. Your investment $1,000.00 Overnight funding adjustment Charges from full value of position -0.01096 % (-$0.55) Trade size with leverage ~ $5,000.00 Money from leverage ~$4,000.00 Go to platform -0.01096%":
      - cell "Long position overnight funding adjustment Long position overnight funding adjustment Margin. Your investment $1,000.00 Overnight funding adjustment Charges from full value of position -0.01096 % (-$0.55) Trade size with leverage ~ $5,000.00 Money from leverage ~$4,000.00 Go to platform":
        - text: Long position overnight funding adjustment
        - strong: Long position overnight funding adjustment
        - table
        - separator
        - table:
          - rowgroup:
            - row "Margin. Your investment $1,000.00":
              - cell "Margin. Your investment"
              - cell "$1,000.00"
            - row "Overnight funding adjustment Charges from full value of position -0.01096 % (-$0.55)":
              - cell "Overnight funding adjustment Charges from full value of position"
              - cell "-0.01096 % (-$0.55)"
        - paragraph:
          - strong: Trade size with leverage ~ $5,000.00
        - paragraph:
          - strong: Money from leverage ~$4,000.00
        - separator
        - link "Go to platform":
          - /url: ""
      - cell "-0.01096%"
    - row "Short position overnight funding adjustment Short position overnight funding adjustment Margin. Your investment $1,000.00 Overnight funding adjustment Charges from full value of position -0.01096 % (-$0.55) Trade size with leverage ~ $5,000.00 Money from leverage ~$4,000.00 Go to platform -0.01096%":
      - cell "Short position overnight funding adjustment Short position overnight funding adjustment Margin. Your investment $1,000.00 Overnight funding adjustment Charges from full value of position -0.01096 % (-$0.55) Trade size with leverage ~ $5,000.00 Money from leverage ~$4,000.00 Go to platform":
        - text: Short position overnight funding adjustment
        - strong: Short position overnight funding adjustment
        - table
        - separator
        - table:
          - rowgroup:
            - row "Margin. Your investment $1,000.00":
              - cell "Margin. Your investment"
              - cell "$1,000.00"
            - row "Overnight funding adjustment Charges from full value of position -0.01096 % (-$0.55)":
              - cell "Overnight funding adjustment Charges from full value of position"
              - cell "-0.01096 % (-$0.55)"
        - paragraph:
          - strong: Trade size with leverage ~ $5,000.00
        - paragraph:
          - strong: Money from leverage ~$4,000.00
        - separator
        - link "Go to platform":
          - /url: ""
      - cell "-0.01096%"
    - row "Overnight funding adjustment time 21:00 (UTC)":
      - cell "Overnight funding adjustment time"
      - cell "21:00 (UTC)"
    - row "Currency USD":
      - cell "Currency"
      - cell "USD"
    - row "Min traded quantity 0.1":
      - cell "Min traded quantity"
      - cell "0.1"
    - row "Margin 20.00%":
      - cell "Margin"
      - cell "20.00%"
    - row "Stock exchange":
      - cell "Stock exchange"
      - cell
    - row "Commission on trade1 0%":
      - cell "Commission on trade1":
        - text: Commission on trade
        - superscript: "1"
      - cell "0%"
    - row "Guaranteed stop premium A guaranteed stop-loss (GSL) fee is only charged if the GSL is triggered. Please consult the Charges and Fees section of our website for more details. 0.1%":
      - cell "Guaranteed stop premium A guaranteed stop-loss (GSL) fee is only charged if the GSL is triggered. Please consult the Charges and Fees section of our website for more details.":
        - text: Guaranteed stop premium A guaranteed stop-loss (GSL) fee is only charged if the GSL is triggered. Please consult the
        - link "Charges and Fees":
          - /url: /en-eu/ways-to-trade/fees-and-charges
        - text: section of our website for more details.
      - cell "0.1%"
- paragraph:
  - superscript: "1"
  - text: Our charge for executing your trade is the spread, the difference between the buy and sell price. Please consult the
  - link "Charges and Fees":
    - /url: https://capital.com/en-eu/ways-to-trade/fees-and-charges
  - text: section of our website for further information
- main:
  - heading "Trade US Treasury Bond Spot - US" [level=2]
  - text: Price constructed using front two months of US Treasury Bond futures. Each day at 20:59:55 UTC, the undated commodity price is adjusted to reflect the difference between the settlement price of front- and back-month futures. At the same time, a matching cash adjustment is applied — ensuring the overall position remains neutral as the roll progresses. This cash adjustment is fully offset by the running profit or loss on the position. US T-Bond (30 year)
- complementary:
  - strong: Related markets
  - text: Tracking the stocks, indices, and assets making major moves.
  - button "Most traded markets"
  - button "Top risers"
  - button "Top fallers"
  - button "Most volatile"
  - link "US Treasury Bond":
    - /url: /en-eu/markets/bonds/us-treasury-bond-spot
  - text: "110.85"
  - button "Trade"
  - text: "-0.43%"
  - img
  - link "US 10-Year T-Note":
    - /url: /en-eu/markets/bonds/us-10-year-t-note-spot
  - text: "108.99"
  - button "Trade"
  - link "French OAT - Sep 2026":
    - /url: /en-eu/markets/bonds/french-oat-future-1
  - text: "117.34"
  - button "Trade"
  - link "German Bobl - Sep 2026":
    - /url: /en-eu/markets/bonds/german-bobl-future-1
  - text: "113.98"
  - button "Trade"
  - link "US 10-Year T-Note - Sep 2026":
    - /url: /en-eu/markets/bonds/us-10-year-t-note-future-1
  - text: "109.11"
  - button "Trade"
  - text: Share prices are indicative and may differ from live market prices.
- heading "User feedback and ratings" [level=2]
- text: Read the feedback from our clients
- superscript: "1"
- text: ", whatever their experience level."
- region:
  - group "1 of 13":
    - link "2025-07-01 P**** R****** I'm learning the basics of stock investing. This platform is clear and pretty good. I've been using it for over 6 months.":
      - /url: https://www.trustpilot.com/review/capital.com
      - text: 2025-07-01
      - strong: P**** R******
      - paragraph: I'm learning the basics of stock investing. This platform is clear and pretty good. I've been using it for over 6 months.
  - group "2 of 13":
    - link "2025-07-01 V***** F******* N***** S**** Great customer service I got to say that. They helped get my account back very fast, after i logged myself out by losing my old email, it was so fast you wouldn’t believe it thank you once again.":
      - /url: https://www.trustpilot.com/review/capital.com
      - text: 2025-07-01
      - strong: V***** F******* N***** S****
      - paragraph: Great customer service I got to say that. They helped get my account back very fast, after i logged myself out by losing my old email, it was so fast you wouldn’t believe it thank you once again.
  - group "3 of 13":
    - link "2025-06-30 B****** Everything worked as expected from the 1 day. I didn’t have to search how to use the platform, it’s intuitive. The support chat was there when I had a tiny issue.":
      - /url: https://www.trustpilot.com/review/capital.com
      - text: 2025-06-30
      - strong: B******
      - paragraph: Everything worked as expected from the 1 day. I didn’t have to search how to use the platform, it’s intuitive. The support chat was there when I had a tiny issue.
  - button "Go to last slide"
  - button "Next slide"
- paragraph: Showing our 4 & 5 star reviews. The specific details of the user have been intentionally anonymised to safeguard their privacy pursuant to GDPR requirements.
- link "4.6":
  - /url: https://www.tradingview.com/broker/Capitalcom/
  - strong: "4.6"
- link "Ratings and Reviews 4.7":
  - /url: https://app.appsflyer.com/id1230088754?cp_device_id=4ffa9454-af3b-42db-a8d7-28de94373cc3&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - strong: Ratings and Reviews
  - strong: "4.7"
- link "Ratings and Reviews 4.6":
  - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=4ffa9454-af3b-42db-a8d7-28de94373cc3&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - strong: Ratings and Reviews
  - strong: "4.6"
- link "4.6":
  - /url: https://www.trustpilot.com/review/capital.com
  - strong: "4.6"
- heading "Three steps to get started" [level=2]
- button
- text: 1. Create your account (subject to eligibility) 2. Deposit on your terms 3. Trade when you’re ready
- paragraph:
  - text: Start trading CFDs
  - link "US":
    - /url: /en-eu/markets/bonds/us-treasury-bond-spot
- text: 110.79 110.85
- button "Get started"
- button "Close sticky trading bar"
- contentinfo:
  - link:
    - /url: /en-eu
    - img
  - link:
    - /url: https://www.linkedin.com/company/capital.com/
  - link:
    - /url: https://www.youtube.com/@Capitaltrading/videos
  - link:
    - /url: https://app.appsflyer.com/id1230088754?cp_device_id=4ffa9454-af3b-42db-a8d7-28de94373cc3&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=4ffa9454-af3b-42db-a8d7-28de94373cc3&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=4ffa9454-af3b-42db-a8d7-28de94373cc3&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - text: "Country / Region:"
  - button "Germany"
  - text: "• Language:"
  - button "English"
  - text: "Also you can contact us:"
  - link "+357 25123646":
    - /url: tel:+357 25123646
    - strong: +357 25123646
    - strong
  - text: •
  - link "support@capital.com":
    - /url: mailto:support@capital.com
    - strong: support@capital.com
  - strong: Trading
  - text: Trading
  - link "Trade CFDs":
    - /url: /en-eu/ways-to-trade/cfd-trading
  - link "Trade knock-outs":
    - /url: /en-eu/ways-to-trade/knock-outs
  - link "Demo account":
    - /url: /en-eu/trading-platforms/demo-account
  - link "Pro account":
    - /url: /en-eu/professional-clients
  - text: Platforms
  - link "Web platform":
    - /url: /en-eu/trading-platforms/web-platform
  - link "Mobile app":
    - /url: /en-eu/trading-platforms/mobile-apps
  - link "TradingView":
    - /url: /en-eu/trading-platforms/trading-view
  - link "MT4":
    - /url: /en-eu/trading-platforms/mt4
  - link "MT5":
    - /url: /en-eu/trading-platforms/mt5
  - link "API access":
    - /url: /en-eu/trading-platforms/api-development-guide
  - text: Learn
  - link "Trading strategies":
    - /url: /en-eu/learn/trading-strategies
  - link "Technical analysis":
    - /url: /en-eu/learn/technical-analysis
  - link "Trading psychology":
    - /url: /en-eu/learn/trading-psychology
  - link "All resources":
    - /url: /en-eu/learn
  - strong: Markets
  - text: Our markets
  - link "Markets overview":
    - /url: /en-eu/markets
  - link "Forex":
    - /url: /en-eu/markets/forex
  - link "Shares":
    - /url: /en-eu/markets/shares
  - link "Indices":
    - /url: /en-eu/markets/indices
  - link "Commodities":
    - /url: /en-eu/markets/commodities
  - link "Cryptocurrencies":
    - /url: /en-eu/markets/cryptocurrencies
  - link "Bonds":
    - /url: /en-eu/markets/bonds
  - link "Interest rates":
    - /url: /en-eu/markets/interest-rates
  - text: Market info
  - link "Market analysis":
    - /url: /en-eu/analysis
  - link "Markets pricing":
    - /url: /en-eu/about-us/how-our-markets-are-priced
  - link "Pricing":
    - /url: /en-eu/ways-to-trade/fees-and-charges
    - strong: Pricing
  - strong: About
  - text: Who we are
  - link "Company":
    - /url: /en-eu/about-us
  - link "Our offices":
    - /url: /en-eu/about-us/our-offices
  - link "Press centre":
    - /url: /en-eu/media-centre
  - link "Whitepaper":
    - /url: /whitepaper
  - link "Investor Relations":
    - /url: /en-eu/about-us/investor-relations
  - link "Is capital.com safe?":
    - /url: /en-eu/security-measures
  - link "Our business model":
    - /url: /en-eu/about-us/how-capital-makes-money
  - text: Work with us
  - link "Careers":
    - /url: /en-eu/about-us/careers
  - text: Help
  - link "Help centre":
    - /url: /en-eu/help
  - link "Client vulnerability":
    - /url: /en-eu/help/client-vulnerability
  - link "Contact us":
    - /url: /en-eu/contact-us
  - text: Legal
  - link "Terms & policies":
    - /url: /en-eu/terms-and-policies
  - link "Complaints procedure - Capital Com Group Ltd":
    - /url: /en-eu/terms-and-policies/complaints-procedure-cceu
  - link "Complaints procedure - Capital Com SV Investments Limited":
    - /url: /en-eu/terms-and-policies/complaints-procedure
  - 'link "Compliance & legal: CFD trading"':
    - /url: /en-eu/terms-and-policies/compliance-and-legals
  - paragraph:
    - text: "Capital Com SV Investments Limited: CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage."
    - strong: "73"
    - strong: "% of retail investor accounts lose money when trading CFDs with this provider"
    - text: . You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money. Please refer to our
    - link "Risk Disclosure Statement":
      - /url: https://capital.com/risk-disclosure-policy
  - paragraph:
    - text: "Capital Com Group Ltd: CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage."
    - strong: Between 74-89% of retail investor accounts lose money when trading CFDs
    - text: . You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money. Please refer to our
    - link "Risk Disclosure Statement":
      - /url: https://capital.com/risk-disclosure-policy-cceu
  - paragraph: "Risk warning: The value of shares and ETFs bought through a share dealing account can fall as well as rise, which could mean getting back less than you originally put in. Past performance is no guarantee of future results. Transactions in non-deliverable over-the-counter instruments, such as knock-out options and CFDs are complex financial products that carry a high risk of losing all invested capital. Such products are not suitable for all investors, as they may lead to both gains and significant losses. Before engaging in this type of trading, you should carefully consider whether you understand how these instruments work and whether you can afford to take the high risk of losing your money. For professional clients, there is a risk of losing more than the initial deposit. The information on this website is general in nature and does not consider your financial situation, objectives or needs. Please review our legal documents and ensure you fully understand the risks before making any trading decisions. We encourage you to use the training services of our company to better understand the risks before engaging in trading operations."
  - paragraph: "Capital Com SV Investments Limited is a company incorporated in the Republic of Cyprus with registration number HE 354252 and is authorised and regulated by the Cyprus Securities and Exchange Commission (License Number 319/17). Registered Office: Vasileiou Makedonos 8, Kinnis Business Center, 2nd floor, 3040, Limassol, Cyprus."
  - paragraph: "Capital Com Group Ltd is a company incorporated in the Republic of Cyprus with registration number ΗΕ 446198 and is authorised and regulated by the Cyprus Securities and Exchange Commission (License Number 463/25). Registered Office: Vasileiou Makedonos 8, Kinnis Business Center, 2nd floor, 3040, Limassol, Cyprus."
  - paragraph: The information on this site is not directed at residents of the United States, Canada and Belgium or any particular country outside the EEA, and is not intended for distribution to or use by, any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.
  - paragraph: © 2026 Capital Com SV Investments Limited
  - link "Sitemap":
    - /url: /en-eu/sitemap
  - link "Cookie Settings":
    - /url: ""
  - link "Regulations":
    - /url: /en-eu/terms-and-policies/regulations
  - link "Terms and Policies":
    - /url: /en-eu/terms-and-policies
  - link "Complaints Procedure":
    - /url: /en-eu/terms-and-policies/complaints-procedures
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
  21 |       await expect(page).toHaveURL(/trading\/platform/);
  22 |       break;
  23 | 
  24 |     case "shows signup form":
  25 |       await expect(
  26 |         // page.locator('form[data-sentry-component="SignUp"]'),
  27 |         page.locator('[data-type="SIGN_UP_close"]'),
> 28 |       ).toBeVisible();
     |         ^ Error: expect(locator).toBeVisible() failed
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