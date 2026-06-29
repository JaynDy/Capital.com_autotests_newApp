# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: markets/markets.spec.js >> shares page | tradingInstrument | addToFavouriteBtn
- Location: tests/markets/markets.spec.js:16:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /trading\/platform/
Received string:  "https://capital.com/en-au/markets/shares/space-exploration-technologies-corp-share-price"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × unexpected value "https://capital.com/en-au/markets/shares/space-exploration-technologies-corp-share-price"

```

```yaml
- banner:
  - text: CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. You should consider whether you understand how CFDs work and can afford the risks.
  - link:
    - /url: /en-au
    - img
  - navigation:
    - button "Trading":
      - button "Trading"
    - button "Markets":
      - button "Markets"
    - link "Pricing":
      - /url: /en-au/ways-to-trade/fees-and-charges
    - button "About":
      - button "About"
  - button "en"
  - button "Log In"
  - button "Open account"
  - button "Search"
- paragraph:
  - link "Home":
    - /url: /en-au
  - text: •
  - link "Markets overview":
    - /url: /en-au/markets
  - text: •
  - link "Shares":
    - /url: /en-au/markets/shares
  - text: •SpaceX
- heading "Trade SpaceX - SPCX CFD" [level=1]
- button "Add to favourite"
- strong: "154.61"
- text: +1.65%
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
- link "Sell 154.43":
  - /url: /instrument?id=21674500919743684
  - text: Sell
  - paragraph: "154.43"
- link "Buy 154.61":
  - /url: /instrument?id=21674500919743684
  - text: Buy
  - paragraph: "154.61"
- text: "0.18 Low: 149.49 High: 157.66"
- table
- text: "Sellers: 8.15% Buyers: 91.85%"
- button "Market Trading Hours (UTC)":
  - paragraph: Market Trading Hours (UTC)
  - strong: Closed
- strong: Past performance is not a reliable indicator of future results. Share prices are indicative and may differ from live market prices.
- button "Summary"
- button "Historical Data"
- strong: Trading Conditions
- table:
  - rowgroup:
    - 'row "Type This financial market is available for CFD trading. Learn more about: CFDs CFD"':
      - 'cell "Type This financial market is available for CFD trading. Learn more about: CFDs"':
        - text: "Type This financial market is available for CFD trading. Learn more about:"
        - link "CFDs":
          - /url: /en-au/ways-to-trade/cfd-trading
      - cell "CFD"
    - row "Spread 0.18":
      - cell "Spread"
      - cell "0.18"
    - row "Long position overnight funding adjustment Long position overnight funding adjustment Margin. Your investment $1,000.00 Overnight funding adjustment Charges from full value of position -0.02154 % (-$1.08) Trade size with leverage ~ $5,000.00 Money from leverage ~ $4,000.00 Go to platform -0.02154%":
      - cell "Long position overnight funding adjustment Long position overnight funding adjustment Margin. Your investment $1,000.00 Overnight funding adjustment Charges from full value of position -0.02154 % (-$1.08) Trade size with leverage ~ $5,000.00 Money from leverage ~ $4,000.00 Go to platform":
        - text: Long position overnight funding adjustment
        - strong: Long position overnight funding adjustment
        - table
        - separator
        - table:
          - rowgroup:
            - row "Margin. Your investment $1,000.00":
              - cell "Margin. Your investment"
              - cell "$1,000.00"
            - row "Overnight funding adjustment Charges from full value of position -0.02154 % (-$1.08)":
              - cell "Overnight funding adjustment Charges from full value of position"
              - cell "-0.02154 % (-$1.08)"
        - paragraph:
          - strong: Trade size with leverage ~ $5,000.00
        - paragraph:
          - strong: Money from leverage ~ $4,000.00
        - separator
        - link "Go to platform":
          - /url: ""
      - cell "-0.02154%"
    - row "Short position overnight funding adjustment Short position overnight funding adjustment Margin. Your investment $1,000.00 Overnight funding adjustment Charges from full value of position -0.000682 % (-$0.03) Trade size with leverage ~ $5,000.00 Money from leverage ~ $4,000.00 Go to platform -0.00068%":
      - cell "Short position overnight funding adjustment Short position overnight funding adjustment Margin. Your investment $1,000.00 Overnight funding adjustment Charges from full value of position -0.000682 % (-$0.03) Trade size with leverage ~ $5,000.00 Money from leverage ~ $4,000.00 Go to platform":
        - text: Short position overnight funding adjustment
        - strong: Short position overnight funding adjustment
        - table
        - separator
        - table:
          - rowgroup:
            - row "Margin. Your investment $1,000.00":
              - cell "Margin. Your investment"
              - cell "$1,000.00"
            - row "Overnight funding adjustment Charges from full value of position -0.000682 % (-$0.03)":
              - cell "Overnight funding adjustment Charges from full value of position"
              - cell "-0.000682 % (-$0.03)"
        - paragraph:
          - strong: Trade size with leverage ~ $5,000.00
        - paragraph:
          - strong: Money from leverage ~ $4,000.00
        - separator
        - link "Go to platform":
          - /url: ""
      - cell "-0.00068%"
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
    - row "Stock exchange United States of America":
      - cell "Stock exchange"
      - cell "United States of America"
    - row "Commission on trade1 0%":
      - cell "Commission on trade1":
        - text: Commission on trade
        - superscript: "1"
      - cell "0%"
    - row "Guaranteed stop premium A guaranteed stop-loss (GSL) fee is only charged if the GSL is triggered. Please consult the Charges and Fees section of our website for more details. 1%":
      - cell "Guaranteed stop premium A guaranteed stop-loss (GSL) fee is only charged if the GSL is triggered. Please consult the Charges and Fees section of our website for more details.":
        - text: Guaranteed stop premium A guaranteed stop-loss (GSL) fee is only charged if the GSL is triggered. Please consult the
        - link "Charges and Fees":
          - /url: /en-au/ways-to-trade/fees-and-charges
        - text: section of our website for more details.
      - cell "1%"
- paragraph:
  - superscript: "1"
  - text: Our charge for executing your trade is the spread, the difference between the buy and sell price. Please consult the
  - link "Charges and Fees":
    - /url: https://capital.com/en-au/ways-to-trade/fees-and-charges
  - text: section of our website for further information
- strong: Key Stats
- table:
  - rowgroup:
    - row "Prev. Close 152.06":
      - cell "Prev. Close"
      - cell "152.06"
    - row "Open 155.27":
      - cell "Open"
      - cell "155.27"
    - row "1-Year Change -0.47%":
      - cell "1-Year Change"
      - cell "-0.47%"
    - row "Day's Range 154.95 - 157.07":
      - cell "Day's Range"
      - cell "154.95 - 157.07"
- main:
  - heading "Trade Space Exploration Technologies Corp - SPCX" [level=2]
  - text: SpaceX, or Space Exploration Technologies Corp., is a US aerospace and satellite communications company founded by Elon Musk in 2002. It develops reusable rockets, Dragon spacecraft, Starship, and the Starlink broadband network, serving commercial launch customers, government missions and satellite internet users worldwide.
  - heading "Latest shares articles" [level=2]
  - link "Federal Reserve Building":
    - /url: /en-au/analysis/market-mondays-warsh-s-first-fed-meeting-sets-the-tone-for-a-new-era
    - img "Federal Reserve Building"
  - 'link "Market Mondays: Warsh’s first Fed meeting sets the tone for a new era"':
    - /url: /en-au/analysis/market-mondays-warsh-s-first-fed-meeting-sets-the-tone-for-a-new-era
  - text: Markets adapt to the new Federal Reserve under Warsh leadership as he offers little information in regards to forward guidance. 11:34, 22 June 2026
  - link "Oil pipelines":
    - /url: /en-au/analysis/oil-drops-on-de-escalation-hopes-but-risks-remain
    - img "Oil pipelines"
  - link "Oil drops on de-escalation hopes, but risks remain":
    - /url: /en-au/analysis/oil-drops-on-de-escalation-hopes-but-risks-remain
  - text: Markets react to the ceasefire deal between the US and Iran with oil dropping over 10% from the recent highs 14:23, 8 April 2026
  - link "NVIDIA logo":
    - /url: /en-au/analysis/nvidia-ignites-risk-appetite-as-markets-close-the-week-on-a-stronger-footing
    - img "NVIDIA logo"
  - link "NVIDIA ignites risk appetite as markets close the week on a stronger footing":
    - /url: /en-au/analysis/nvidia-ignites-risk-appetite-as-markets-close-the-week-on-a-stronger-footing
  - text: NVIDIA's strong results drive sentiment higher as investors had began to doubt the AI narrative. 11:43, 26 February 2026
  - link "Tesla stock forecast":
    - /url: /en-au/market-updates/tesla-stock-price-in-5-years-23-02-2026
    - img "Tesla stock forecast"
  - 'link "Tesla stock forecast: Could Q1 2026 earnings lift targets?"':
    - /url: /en-au/market-updates/tesla-stock-price-in-5-years-23-02-2026
  - text: Tesla (TSLA) is a US-listed automotive and clean energy company whose shares trade on the Nasdaq and are closely monitored for earnings performance, delivery data and developments in technology and manufacturing. Explore third-party TSLA price targets and technical analysis. 17:23, 23 February 2026
  - strong: Related News
  - button
  - text: Reuters News • Europe 13 minutes ago
  - link "US STOCKS-Wall St indexes climb as US, Iran halt attacks; Comcast surges on spin-off plan":
    - /url: /en-au/news/us-stocks-wall-st-indexes-climb-as-us-iran-halt-attacks
    - strong: US STOCKS-Wall St indexes climb as US, Iran halt attacks; Comcast surges on spin-off plan
  - text: GlobeNewswire • Europe 20 minutes ago
  - link "Bitget Launches Third Year of Anti-Scam Month with New Report on Multi-Asset Fraud":
    - /url: /en-au/news/bitget-launches-third-year-of-anti-scam-month-with-new-report
    - strong: Bitget Launches Third Year of Anti-Scam Month with New Report on Multi-Asset Fraud
  - text: GlobeNewswire • Europe 20 minutes ago
  - link "Bitget Launches Third Year of Anti-Scam Month with New Report on Multi-Asset Fraud":
    - /url: /en-au/news/bitget-launches-third-year-of-anti-scam-month-with-new-report
    - strong: Bitget Launches Third Year of Anti-Scam Month with New Report on Multi-Asset Fraud
  - text: GlobeNewswire • Europe 46 minutes ago
  - link "Al Tamimi & Company Advises on Landmark Tokenized Securities Offering in ADGM Backed by SpaceX Shares":
    - /url: /en-au/news/al-tamimi-company-advises-on-landmark-tokenized-securities-offering
    - strong: Al Tamimi & Company Advises on Landmark Tokenized Securities Offering in ADGM Backed by SpaceX Shares
  - button
  - text: Public Technologies • Europe 57 minutes ago
  - link "Suntex Enterprises appoints former SpaceX executive technology specialist Vincent Ornelas to board":
    - /url: /en-au/news/suntex-enterprises-appoints-former-spacex-executive-technology-specialist-vincent-ornelas
    - strong: Suntex Enterprises appoints former SpaceX executive technology specialist Vincent Ornelas to board
  - button
  - text: GlobeNewswire • Europe 57 minutes ago
  - link "SUNTEX ENTERPRISES APPOINTS FORMER SPACEX EXECUTIVE TECHNOLOGY SPECIALIST VINCENT ORNELAS TO BOARD OF DIRECTORS":
    - /url: /en-au/news/suntex-enterprises-appoints-former-spacex-executive-technology-specialist-vincent-ornelas
    - strong: SUNTEX ENTERPRISES APPOINTS FORMER SPACEX EXECUTIVE TECHNOLOGY SPECIALIST VINCENT ORNELAS TO BOARD OF DIRECTORS
  - button
  - text: GlobeNewswire • Europe 57 minutes ago
  - link "SUNTEX ENTERPRISES APPOINTS FORMER SPACEX EXECUTIVE TECHNOLOGY SPECIALIST VINCENT ORNELAS TO BOARD OF DIRECTORS":
    - /url: /en-au/news/suntex-enterprises-appoints-former-spacex-executive-technology-specialist-vincent-ornelas
    - strong: SUNTEX ENTERPRISES APPOINTS FORMER SPACEX EXECUTIVE TECHNOLOGY SPECIALIST VINCENT ORNELAS TO BOARD OF DIRECTORS
  - text: Reuters News • Europe an hour ago
  - link "U.S. STOCKS ON THE MOVE-SpaceX, Charter, Gulfport Energy":
    - /url: /en-au/news/u-s-stocks-on-the-move-spacex-charter-gulfport-energy
    - strong: U.S. STOCKS ON THE MOVE-SpaceX, Charter, Gulfport Energy
  - button
  - text: Reuters News • Europe an hour ago
  - link "US STOCKS-Wall St set to climb as US, Iran halt attacks; Comcast surges on spin-off plan":
    - /url: /en-au/news/us-stocks-wall-st-set-to-climb-as-us-iran-halt
    - strong: US STOCKS-Wall St set to climb as US, Iran halt attacks; Comcast surges on spin-off plan
  - text: Reuters News • Europe 2 hours ago
  - link "Charter jumps after report of talks with SpaceX for phone partnership":
    - /url: /en-au/news/charter-jumps-after-report-of-talks-with-spacex-for-phone
    - strong: Charter jumps after report of talks with SpaceX for phone partnership
- complementary:
  - strong: Related markets
  - text: Tracking the stocks, indices, and assets making major moves.
  - button "Most traded markets"
  - button "Top risers"
  - button "Top fallers"
  - button "Most volatile"
  - link "SpaceX":
    - /url: /en-au/markets/shares/space-exploration-technologies-corp-share-price
  - text: "154.61"
  - button "Trade"
  - link "BlackBerry Limited":
    - /url: /en-au/markets/shares/blackberry-limited-share-price-1
  - text: "11.83"
  - button "Trade"
  - text: 4.05%
  - img
  - link "Critical Metals Corp":
    - /url: /en-au/markets/shares/critical-metals-corp-share-price
  - text: "9.93"
  - button "Trade"
  - link "Quantinuum Inc.":
    - /url: /en-au/markets/shares/quantinuum-inc-share-price
  - text: "72.38"
  - button "Trade"
  - text: Share prices are indicative and may differ from live market prices.
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
- heading "Ready to join a leading broker?" [level=2]
- text: Join our community of traders worldwide
- button
- text: 1. Create your account 2. Make your first deposit 3. Start trading CFDs
- paragraph:
  - text: Start trading CFDs
  - link "SPCX":
    - /url: /en-au/markets/shares/space-exploration-technologies-corp-share-price
- text: 154.43 154.61
- button "Get started"
- button "Close sticky trading bar"
- contentinfo:
  - link:
    - /url: /en-au
    - img
  - link:
    - /url: https://www.facebook.com/capitalcomau/
  - link:
    - /url: https://twitter.com/Capitalcomau
  - link:
    - /url: https://www.linkedin.com/company/capital.com
  - link:
    - /url: https://www.instagram.com/capitalcomau/
  - link:
    - /url: https://www.youtube.com/@capital.com.australia5770
  - link:
    - /url: https://app.appsflyer.com/id1230088754?cp_device_id=3972833f-e36b-4be3-9a7c-7594f863ce9c&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=3972833f-e36b-4be3-9a7c-7594f863ce9c&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=3972833f-e36b-4be3-9a7c-7594f863ce9c&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - text: "Country / Region:"
  - button "Australia"
  - text: "• Language:"
  - button "English"
  - text: "Also you can contact us:"
  - link "+61 3 8658 0539":
    - /url: tel:+61 3 8658 0539
    - strong: +61 3 8658 0539
    - strong
  - text: •
  - link "support.au@capital.com":
    - /url: mailto:support.au@capital.com
    - strong: support.au@capital.com
  - strong: Trading
  - text: Trading
  - link "Trade CFDs":
    - /url: /en-au/ways-to-trade/cfd-trading
  - link "Get demo account":
    - /url: /en-au/trading-platforms/demo-account
  - link "Get pro account":
    - /url: /en-au/professional
  - link "Corporate account":
    - /url: /en-au/corporate-accounts
  - link "Premium services":
    - /url: /en-au/ways-to-trade/premium-services
  - text: Platforms
  - link "Web platform":
    - /url: /en-au/trading-platforms/web-platform
  - link "Mobile app":
    - /url: /en-au/trading-platforms/mobile-apps
  - link "TradingView":
    - /url: /en-au/trading-platforms/trading-view
  - link "MT4":
    - /url: /en-au/trading-platforms/mt4
  - link "MT5":
    - /url: /en-au/trading-platforms/mt5
  - link "API access":
    - /url: /en-au/trading-platforms/api-development-guide
  - text: Learn
  - link "Trading strategies":
    - /url: /en-au/learn/trading-strategies
  - link "Technical analysis":
    - /url: /en-au/learn/technical-analysis
  - link "Trading psychology":
    - /url: /en-au/learn/trading-psychology
  - link "All resources":
    - /url: /en-au/learn
  - strong: Markets
  - text: Our markets
  - link "Markets overview":
    - /url: /en-au/markets
  - link "Shares":
    - /url: /en-au/markets/shares
  - link "Forex":
    - /url: /en-au/markets/forex
  - link "Indices":
    - /url: /en-au/markets/indices
  - link "Commodities":
    - /url: /en-au/markets/commodities
  - link "Cryptocurrencies":
    - /url: /en-au/markets/cryptocurrencies
  - link "Bonds":
    - /url: /en-au/markets/bonds
  - link "Interest rates":
    - /url: /en-au/markets/interest-rates
  - text: Market info
  - link "Market analysis":
    - /url: /en-au/analysis
  - link "Pricing":
    - /url: /en-au/ways-to-trade/fees-and-charges
    - strong: Pricing
  - strong: About
  - text: Who we are
  - link "Company":
    - /url: /en-au/about-us
  - link "Our offices":
    - /url: /en-au/about-us/our-offices
  - link "Press centre":
    - /url: /en-au/media-centre
  - link "Whitepaper":
    - /url: /whitepaper
  - link "Investor Relations":
    - /url: /en-au/about-us/investor-relations
  - link "Is Capital.com safe?":
    - /url: /en-au/security-measures
  - link "Our business model":
    - /url: /en-au/about-us/how-capital-makes-money
  - text: Work with us
  - link "Careers":
    - /url: /en-au/about-us/careers
  - text: Help
  - link "Help centre":
    - /url: /en-au/help
  - link "Client vulnerability":
    - /url: /en-au/help/client-vulnerability
  - link "Contact us":
    - /url: /en-au/contact-us
  - text: Legal
  - link "Terms & policies":
    - /url: /en-au/terms-and-policies
  - link "Complaints":
    - /url: /en-au/help/complaints
  - paragraph:
    - text: CFDs are complex leveraged instruments and come with a high risk of losing money. These products are not suitable for everyone and you should therefore consider your objectives, financial situation, needs and experience with these products before investing in them. Our
    - link "Product Disclosure Statement":
      - /url: https://capital.com/product-disclosure-statement-asic
    - text: (PDS) and
    - link "Target Market Determination":
      - /url: https://capital.com/target-market-determination-asic
    - text: provides important information about our products and who our products are more likely to be suited to. Capital.com does not provide financial or investment advice and you should seek independent advice if you are unsure of the risks or whether our products are suitable for you.
  - paragraph
  - paragraph: Capital Com Australia Pty Ltd (ABN 47 625 601 489) is a company registered in Australia and regulated by the Australian Securities and Investments Commission (ASIC) under AFSL 513393.
  - paragraph: © 2026 Capital Com Australia Pty Ltd
  - link "Sitemap":
    - /url: /en-au/sitemap
  - link "Cookie Settings":
    - /url: ""
  - link "Clients Funds":
    - /url: /en-au/about-us/what-capital-does-with-your-money
  - link "Terms and Policies":
    - /url: /en-au/terms-and-policies
  - link "Complaints Procedure CCAU":
    - /url: /en-au/help/complaints
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
      - /url: /en-au/terms-and-policies
- button
- alert: SpaceX (SPCX) Stock Price Quote Today & Current Price Chart | Capital.com Australia
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