# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: markets/markets.spec.js >> shares page | tradingInstrument | viewDetailedChartBtn
- Location: tests/markets/markets.spec.js:16:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /trading\/platform/
Received string:  "https://capital.com/en-gb/markets/shares/space-exploration-technologies-corp-share-price"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    12 × unexpected value "https://capital.com/en-gb/markets/shares/space-exploration-technologies-corp-share-price"

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
  - text: •
  - link "Shares":
    - /url: /en-gb/markets/shares
  - text: •SpaceX
- heading "Trade SpaceX - SPCX CFD" [level=1]
- button "Add to favourite"
- strong: "154.72"
- text: +1.72%
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
- link "Sell 154.59":
  - /url: /instrument?id=21674500919743684
  - text: Sell
  - paragraph: "154.59"
- link "Buy 154.72":
  - /url: /instrument?id=21674500919743684
  - text: Buy
  - paragraph: "154.72"
- text: "0.13 Low: 149.49 High: 158.3"
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
          - /url: /en-gb/ways-to-trade/cfd-trading
      - cell "CFD"
    - row "Spread 0.27":
      - cell "Spread"
      - cell "0.27"
    - row "Long position overnight funding adjustment Long position overnight funding adjustment Margin. Your investment $1,000.00 Overnight funding adjustment Charges from full value of position -0.02154 % (-$1.08) Trade size with leverage ~ $5,000.00 Money from leverage ~$4,000.00 Go to platform -0.02154%":
      - cell "Long position overnight funding adjustment Long position overnight funding adjustment Margin. Your investment $1,000.00 Overnight funding adjustment Charges from full value of position -0.02154 % (-$1.08) Trade size with leverage ~ $5,000.00 Money from leverage ~$4,000.00 Go to platform":
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
          - strong: Money from leverage ~$4,000.00
        - separator
        - link "Go to platform":
          - /url: ""
      - cell "-0.02154%"
    - row "Short position overnight funding adjustment Short position overnight funding adjustment Margin. Your investment $1,000.00 Overnight funding adjustment Charges from full value of position -0.000682 % (-$0.03) Trade size with leverage ~ $5,000.00 Money from leverage ~$4,000.00 Go to platform -0.00068%":
      - cell "Short position overnight funding adjustment Short position overnight funding adjustment Margin. Your investment $1,000.00 Overnight funding adjustment Charges from full value of position -0.000682 % (-$0.03) Trade size with leverage ~ $5,000.00 Money from leverage ~$4,000.00 Go to platform":
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
          - strong: Money from leverage ~$4,000.00
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
          - /url: /en-gb/ways-to-trade/fees-and-charges
        - text: section of our website for more details.
      - cell "1%"
- paragraph:
  - superscript: "1"
  - text: Our charge for executing your trade is the spread, the difference between the buy and sell price. Please consult the
  - link "Charges and Fees":
    - /url: https://capital.com/en-gb/ways-to-trade/fees-and-charges
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
    - row "Day's Range 154.95 - 157.23":
      - cell "Day's Range"
      - cell "154.95 - 157.23"
- main:
  - heading "Trade Space Exploration Technologies Corp - SPCX" [level=2]
  - text: SpaceX, or Space Exploration Technologies Corp., is a US aerospace and satellite communications company founded by Elon Musk in 2002. It develops reusable rockets, Dragon spacecraft, Starship, and the Starlink broadband network, serving commercial launch customers, government missions and satellite internet users worldwide.
  - heading "Latest shares articles" [level=2]
  - link "Federal Reserve Building":
    - /url: /en-gb/analysis/market-mondays-warsh-s-first-fed-meeting-sets-the-tone-for-a-new-era
    - img "Federal Reserve Building"
  - 'link "Market Mondays: Warsh’s first Fed meeting sets the tone for a new era"':
    - /url: /en-gb/analysis/market-mondays-warsh-s-first-fed-meeting-sets-the-tone-for-a-new-era
  - text: Markets adapt to the new Federal Reserve under Warsh leadership as he offers little information in regards to forward guidance. 11:34, 22 June 2026
  - link "Press Release by Capital.com":
    - /url: /en-gb/press/capital-com-uk-ceo-joins-house-of-lords-summit-on-ai-and-the-future-of-the-uk-economy
    - img "Press Release by Capital.com"
  - link "Capital.com UK CEO joins House of Lords summit on AI and the future of the UK economy":
    - /url: /en-gb/press/capital-com-uk-ceo-joins-house-of-lords-summit-on-ai-and-the-future-of-the-uk-economy
  - text: Rupert Osborne, CEO of Capital.com UK, participates in private Palace of Westminster gathering convened by Lord Elliott of Mickle Fell to discuss AI adoption, workforce readiness, and the UK’s path to becoming an AI-first economy. 09:26, 21 April 2026
  - link "Oil pipelines":
    - /url: /en-gb/analysis/oil-drops-on-de-escalation-hopes-but-risks-remain
    - img "Oil pipelines"
  - link "Oil drops on de-escalation hopes, but risks remain":
    - /url: /en-gb/analysis/oil-drops-on-de-escalation-hopes-but-risks-remain
  - text: Markets react to the ceasefire deal between the US and Iran with oil dropping over 10% from the recent highs 14:18, 8 April 2026
  - link "NVIDIA logo":
    - /url: /en-gb/analysis/nvidia-ignites-risk-appetite-as-markets-close-the-week-on-a-stronger-footing
    - img "NVIDIA logo"
  - link "NVIDIA ignites risk appetite as markets close the week on a stronger footing":
    - /url: /en-gb/analysis/nvidia-ignites-risk-appetite-as-markets-close-the-week-on-a-stronger-footing
  - text: NVIDIA's strong results drive sentiment higher as investors had began to doubt the AI narrative. 11:38, 26 February 2026
  - strong: Related News
  - button
  - text: Reuters News • Europe 9 minutes ago
  - link "US STOCKS-Wall St indexes climb as US, Iran halt attacks; Comcast surges on spin-off plan":
    - /url: /en-gb/news/us-stocks-wall-st-indexes-climb-as-us-iran-halt-attacks
    - strong: US STOCKS-Wall St indexes climb as US, Iran halt attacks; Comcast surges on spin-off plan
  - text: GlobeNewswire • Europe 16 minutes ago
  - link "Bitget Launches Third Year of Anti-Scam Month with New Report on Multi-Asset Fraud":
    - /url: /en-gb/news/bitget-launches-third-year-of-anti-scam-month-with-new-report
    - strong: Bitget Launches Third Year of Anti-Scam Month with New Report on Multi-Asset Fraud
  - text: GlobeNewswire • Europe 16 minutes ago
  - link "Bitget Launches Third Year of Anti-Scam Month with New Report on Multi-Asset Fraud":
    - /url: /en-gb/news/bitget-launches-third-year-of-anti-scam-month-with-new-report
    - strong: Bitget Launches Third Year of Anti-Scam Month with New Report on Multi-Asset Fraud
  - text: GlobeNewswire • Europe 42 minutes ago
  - link "Al Tamimi & Company Advises on Landmark Tokenized Securities Offering in ADGM Backed by SpaceX Shares":
    - /url: /en-gb/news/al-tamimi-company-advises-on-landmark-tokenized-securities-offering
    - strong: Al Tamimi & Company Advises on Landmark Tokenized Securities Offering in ADGM Backed by SpaceX Shares
  - button
  - text: Public Technologies • Europe 53 minutes ago
  - link "Suntex Enterprises appoints former SpaceX executive technology specialist Vincent Ornelas to board":
    - /url: /en-gb/news/suntex-enterprises-appoints-former-spacex-executive-technology-specialist-vincent-ornelas
    - strong: Suntex Enterprises appoints former SpaceX executive technology specialist Vincent Ornelas to board
  - button
  - text: GlobeNewswire • Europe 53 minutes ago
  - link "SUNTEX ENTERPRISES APPOINTS FORMER SPACEX EXECUTIVE TECHNOLOGY SPECIALIST VINCENT ORNELAS TO BOARD OF DIRECTORS":
    - /url: /en-gb/news/suntex-enterprises-appoints-former-spacex-executive-technology-specialist-vincent-ornelas
    - strong: SUNTEX ENTERPRISES APPOINTS FORMER SPACEX EXECUTIVE TECHNOLOGY SPECIALIST VINCENT ORNELAS TO BOARD OF DIRECTORS
  - button
  - text: GlobeNewswire • Europe 53 minutes ago
  - link "SUNTEX ENTERPRISES APPOINTS FORMER SPACEX EXECUTIVE TECHNOLOGY SPECIALIST VINCENT ORNELAS TO BOARD OF DIRECTORS":
    - /url: /en-gb/news/suntex-enterprises-appoints-former-spacex-executive-technology-specialist-vincent-ornelas
    - strong: SUNTEX ENTERPRISES APPOINTS FORMER SPACEX EXECUTIVE TECHNOLOGY SPECIALIST VINCENT ORNELAS TO BOARD OF DIRECTORS
  - text: Reuters News • Europe an hour ago
  - link "U.S. STOCKS ON THE MOVE-SpaceX, Charter, Gulfport Energy":
    - /url: /en-gb/news/u-s-stocks-on-the-move-spacex-charter-gulfport-energy
    - strong: U.S. STOCKS ON THE MOVE-SpaceX, Charter, Gulfport Energy
  - button
  - text: Reuters News • Europe an hour ago
  - link "US STOCKS-Wall St set to climb as US, Iran halt attacks; Comcast surges on spin-off plan":
    - /url: /en-gb/news/us-stocks-wall-st-set-to-climb-as-us-iran-halt
    - strong: US STOCKS-Wall St set to climb as US, Iran halt attacks; Comcast surges on spin-off plan
  - text: Reuters News • Europe 2 hours ago
  - link "Charter jumps after report of talks with SpaceX for phone partnership":
    - /url: /en-gb/news/charter-jumps-after-report-of-talks-with-spacex-for-phone
    - strong: Charter jumps after report of talks with SpaceX for phone partnership
- complementary:
  - strong: Related markets
  - text: Tracking the stocks, indices, and assets making major moves.
  - button "Most traded markets"
  - button "Top risers"
  - button "Top fallers"
  - button "Most volatile"
  - link "SpaceX":
    - /url: /en-gb/markets/shares/space-exploration-technologies-corp-share-price
  - text: 154.72 1.72%
  - img
  - link "BlackBerry Limited":
    - /url: /en-gb/markets/shares/blackberry-limited-share-price-1
  - text: "11.84"
  - link "Critical Metals Corp":
    - /url: /en-gb/markets/shares/critical-metals-corp-share-price
  - text: "9.96"
  - link "Quantinuum Inc.":
    - /url: /en-gb/markets/shares/quantinuum-inc-share-price
  - text: 72.53 Share prices are indicative and may differ from live market prices.
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
- heading "Ready to join a leading broker?" [level=2]
- text: Join our community of traders worldwide
- button
- text: 1. Create your account 2. Make your first deposit 3. Start trading
- paragraph:
  - text: Start trading CFDs
  - link "SPCX":
    - /url: /en-gb/markets/shares/space-exploration-technologies-corp-share-price
- text: 154.59 154.72
- button "Get started"
- button "Close sticky trading bar"
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
- alert: SpaceX (SPCX) Stock Price Quote Today & Current Price Chart | Capital.com UK
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