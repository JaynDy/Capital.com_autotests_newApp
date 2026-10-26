# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cta/generated.cta.spec.js >> markets page | tradingInstrument | shortPositionGoToPlatformBtn
- Location: tests/cta/generated.cta.spec.js:37:7

# Error details

```
TimeoutError: locator.click: Timeout 2000ms exceeded.
Call log:
  - waiting for locator('tbody > tr').nth(5).locator('[data-type="market_go_to_platform_btn"]')
    - locator resolved to <a href="" target="_blank" rel="noopener noreferrer nofollow" data-type="market_go_to_platform_btn" class="rZW9e cCezE qIlmS l_btn_to_platform js-analyticsClick qAcWB">…</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <span class="g0082 xsTf">…</span> from <p>…</p> subtree intercepts pointer events
  - retrying click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div class="ekW64">…</div> from <div class="HB5ks componentsContainer">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <span class="g0082 xsTf">…</span> from <p>…</p> subtree intercepts pointer events
  2 × retrying click action
      - waiting 100ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <span class="text-accord">CFDs are complex instruments and come with a high…</span> from <header id="header" class="SqFoe" data-height-observer-attached="true">…</header> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div class="ekW64">…</div> from <div class="HB5ks componentsContainer">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <span class="g0082 xsTf">…</span> from <p>…</p> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e7]: CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. You should consider whether you understand how CFDs work and can afford the risks.
    - generic [ref=e9]:
      - link [ref=e10] [cursor=pointer]:
        - /url: /en-au
        - img [ref=e11]
      - generic [ref=e16]:
        - navigation [ref=e17]:
          - button "Trading" [ref=e18]:
            - button "Trading" [ref=e19]:
              - generic [ref=e20]: Trading
          - button "Markets" [ref=e21]:
            - button "Markets" [ref=e22]:
              - generic [ref=e23]: Markets
          - link "Pricing" [ref=e26] [cursor=pointer]:
            - /url: /en-au/ways-to-trade/fees-and-charges
          - button "About" [ref=e27]:
            - button "About" [ref=e28]:
              - generic [ref=e29]: About
        - button "en" [ref=e30] [cursor=pointer]:
          - generic [ref=e32]: en
      - generic [ref=e34]:
        - button "Log In" [ref=e35] [cursor=pointer]: Log In
        - button "Open account" [ref=e36] [cursor=pointer]: Open account
      - button "Search" [ref=e37] [cursor=pointer]
  - generic [ref=e38]:
    - paragraph [ref=e41]:
      - generic [ref=e42]:
        - link "Home" [ref=e43] [cursor=pointer]:
          - /url: /en-au
        - text: •
      - generic [ref=e44]:
        - link "Markets overview" [ref=e45] [cursor=pointer]:
          - /url: /en-au/markets
        - text: •
      - generic [ref=e46]:
        - link "Commodities" [ref=e47] [cursor=pointer]:
          - /url: /en-au/markets/commodities
        - text: •
      - text: Gold Spot
    - generic [ref=e48]:
      - generic [ref=e51]:
        - generic [ref=e53]:
          - heading "Trade Gold Spot CFD" [level=1] [ref=e55]
          - button "Add to favourite" [ref=e56] [cursor=pointer]: Add to favourite
        - generic [ref=e57]:
          - generic [ref=e59]:
            - strong [ref=e60]: Market is not available at the moment
            - generic [ref=e61]:
              - text: Market information is presented
              - text: as of 2026-10-23T20:45:39+00:00
          - generic [ref=e66]:
            - strong [ref=e67]: Trading Conditions
            - table [ref=e68]:
              - rowgroup [ref=e69]:
                - 'row "Type This financial market is available for CFD trading. Learn more about: CFDs CFD" [ref=e70]':
                  - 'cell "Type This financial market is available for CFD trading. Learn more about: CFDs" [ref=e71]':
                    - generic [ref=e72] [cursor=pointer]:
                      - generic [ref=e74]: Type
                      - generic [ref=e77]:
                        - generic [ref=e78]: This financial market is available for CFD trading.
                        - generic [ref=e79]:
                          - generic [ref=e80]: "Learn more about:"
                          - link "CFDs" [ref=e81]:
                            - /url: /en-au/ways-to-trade/cfd-trading
                            - generic [ref=e82]: CFDs
                  - cell "CFD" [ref=e83]
                - row "Spread 0.5" [ref=e84]:
                  - cell "Spread" [ref=e85]
                  - cell "0.5" [ref=e86]
                - row "Long position overnight funding adjustment Long position overnight funding adjustment Margin. Your investment $1,000.00 Overnight funding adjustment Charges from full value of position -0.01523 % (-$3.05) Trade size with leverage ~ $20,000.00 Money from leverage ~ $19,000.00 Go to platform -0.01523%" [ref=e87]:
                  - cell "Long position overnight funding adjustment Long position overnight funding adjustment Margin. Your investment $1,000.00 Overnight funding adjustment Charges from full value of position -0.01523 % (-$3.05) Trade size with leverage ~ $20,000.00 Money from leverage ~ $19,000.00 Go to platform" [ref=e88]:
                    - generic [ref=e89] [cursor=pointer]:
                      - generic [ref=e91]: Long position overnight funding adjustment
                      - generic [ref=e93]:
                        - strong [ref=e94]: Long position overnight funding adjustment
                        - table [ref=e96]
                        - separator [ref=e97]
                        - generic [ref=e98]:
                          - table [ref=e99]:
                            - rowgroup [ref=e100]:
                              - row "Margin. Your investment $1,000.00" [ref=e101]:
                                - cell "Margin. Your investment" [ref=e102]:
                                  - generic [ref=e103]: Margin. Your investment
                                - cell "$1,000.00" [ref=e105]
                              - row "Overnight funding adjustment Charges from full value of position -0.01523 % (-$3.05)" [ref=e106]:
                                - cell "Overnight funding adjustment Charges from full value of position" [ref=e107]:
                                  - generic [ref=e108]:
                                    - text: Overnight funding adjustment
                                    - generic [ref=e110]: Charges from full value of position
                                - cell "-0.01523 % (-$3.05)" [ref=e111]:
                                  - generic [ref=e112]: "-0.01523 %"
                                  - generic [ref=e113]: (-$3.05)
                          - paragraph [ref=e114]:
                            - strong [ref=e115]: Trade size with leverage ~ $20,000.00
                          - paragraph [ref=e116]:
                            - strong [ref=e117]: Money from leverage ~ $19,000.00
                        - separator [ref=e118]
                        - link "Go to platform" [ref=e120]:
                          - /url: ""
                          - generic [ref=e121]: Go to platform
                  - cell "-0.01523%" [ref=e122]:
                    - generic [ref=e123]: "-0.01523%"
                - row "Short position overnight funding adjustment Short position overnight funding adjustment Margin. Your investment $1,000.00 Overnight funding adjustment Charges from full value of position 0.00701 % ($1.40) Trade size with leverage ~ $20,000.00 Money from leverage ~ $19,000.00 Go to platform 0.00701%" [ref=e124]:
                  - cell "Short position overnight funding adjustment Short position overnight funding adjustment Margin. Your investment $1,000.00 Overnight funding adjustment Charges from full value of position 0.00701 % ($1.40) Trade size with leverage ~ $20,000.00 Money from leverage ~ $19,000.00 Go to platform" [ref=e125]:
                    - generic [ref=e126] [cursor=pointer]:
                      - generic [ref=e128]: Short position overnight funding adjustment
                      - generic [ref=e130]:
                        - strong [ref=e131]: Short position overnight funding adjustment
                        - table [ref=e133]
                        - separator [ref=e134]
                        - generic [ref=e135]:
                          - table [ref=e136]:
                            - rowgroup [ref=e137]:
                              - row "Margin. Your investment $1,000.00" [ref=e138]:
                                - cell "Margin. Your investment" [ref=e139]:
                                  - generic [ref=e140]: Margin. Your investment
                                - cell "$1,000.00" [ref=e142]
                              - row "Overnight funding adjustment Charges from full value of position 0.00701 % ($1.40)" [ref=e143]:
                                - cell "Overnight funding adjustment Charges from full value of position" [ref=e144]:
                                  - generic [ref=e145]:
                                    - text: Overnight funding adjustment
                                    - generic [ref=e147]: Charges from full value of position
                                - cell "0.00701 % ($1.40)" [ref=e148]:
                                  - generic [ref=e149]: 0.00701 %
                                  - generic [ref=e150]: ($1.40)
                          - paragraph [ref=e151]:
                            - strong [ref=e152]: Trade size with leverage ~ $20,000.00
                          - paragraph [ref=e153]:
                            - strong [ref=e154]: Money from leverage ~ $19,000.00
                        - separator [ref=e155]
                        - link "Go to platform" [ref=e157]:
                          - /url: ""
                          - generic [ref=e158]: Go to platform
                  - cell "0.00701%" [ref=e159]:
                    - generic [ref=e160]: 0.00701%
                - row "Overnight funding adjustment time 21:00 (UTC)" [ref=e161]:
                  - cell "Overnight funding adjustment time" [ref=e162]
                  - cell "21:00 (UTC)" [ref=e163]
                - row "Currency USD" [ref=e164]:
                  - cell "Currency" [ref=e165]
                  - cell "USD" [ref=e166]
                - row "Min traded quantity 0.01" [ref=e167]:
                  - cell "Min traded quantity" [ref=e168]
                  - cell "0.01" [ref=e169]
                - row "Margin 5.00%" [ref=e170]:
                  - cell "Margin" [ref=e171]
                  - cell "5.00%" [ref=e172]:
                    - generic [ref=e173]: 5.00%
                - row "Stock exchange" [ref=e174]:
                  - cell "Stock exchange" [ref=e175]
                  - cell [ref=e176]
                - row "Commission on trade1 0%" [ref=e177]:
                  - cell "Commission on trade1" [ref=e178]:
                    - text: Commission on trade
                    - superscript [ref=e179]: "1"
                  - cell "0%" [ref=e180]
                - row "Guaranteed stop premium A guaranteed stop-loss (GSL) fee is only charged if the GSL is triggered. Please consult the Charges and Fees section of our website for more details. 0.03%" [ref=e181]:
                  - cell "Guaranteed stop premium A guaranteed stop-loss (GSL) fee is only charged if the GSL is triggered. Please consult the Charges and Fees section of our website for more details." [ref=e182]:
                    - generic [ref=e183] [cursor=pointer]:
                      - generic [ref=e185]: Guaranteed stop premium
                      - generic [ref=e188]:
                        - text: A guaranteed stop-loss (GSL) fee is only charged if the GSL is triggered. Please consult the
                        - link "Charges and Fees" [ref=e189]:
                          - /url: /en-au/ways-to-trade/fees-and-charges
                        - text: section of our website for more details.
                  - cell "0.03%" [ref=e190]:
                    - generic [ref=e191]: 0.03%
            - paragraph [ref=e192]:
              - generic [ref=e193]:
                - superscript [ref=e194]: "1"
                - text: Our charge for executing your trade is the spread, the difference between the buy and sell price. Please consult the
                - link "Charges and Fees" [ref=e195] [cursor=pointer]:
                  - /url: https://capital.com/en-au/ways-to-trade/fees-and-charges
                - text: section of our website for further information
      - generic [ref=e197]:
        - main [ref=e198]:
          - generic [ref=e200]:
            - heading "Trade Gold Spot" [level=2] [ref=e201]
            - paragraph [ref=e202]: Gold is a lustrous precious metal with many unique properties. It is attractive in colour and brightness, highly malleable, durable and usually found in nature in a relatively pure form. Appreciated far beyond its industrial usage, gold is one of the most widely-traded metal commodities.
            - paragraph [ref=e203]: Gold has a lower correlation to many asset classes, making it a widely used tool for diversification. Over the decades, the metal has attracted international investors keen to balance their portfolio and hedge against any financial uncertainty, inflation, deflation or currency devaluation. Compared to other precious metals used for investment, gold has the most effective safe haven properties across a number of countries.
            - paragraph [ref=e204]: Like most commodities, the gold spot price is driven by the laws of supply and demand.
            - paragraph [ref=e205]: Gold deposits are rare and difficult to find, making its extraction from mines a time-consuming and expensive activity. China, Australia, Russia, the US, Canada, Indonesia, Peru and South Africa are the world’s largest producers of the metal.
            - paragraph [ref=e206]: However, most of the gold ever mined still exists in an accessible form, such as jewellery or bullion, and can be brought back onto the market. Given the large quantity of the metal stored above ground compared to its annual production, the gold price is mainly affected by changes in sentiment, which, in turn, influences market supply and demand accordingly.
            - paragraph [ref=e207]: The gold market is subject to speculation and volatility as any other market. The demand for jewellery is fairly constant. However, economic downturns may lead to some temporary reductions in demand from this industry.
            - heading "Trade Gold Spot (Gold) CFDs" [level=2] [ref=e208]
            - paragraph [ref=e209]: "Gold Spot (ticker: Gold) is a commodity market instrument that reflects the price of a specific raw material or natural resource. On Capital.com, it can be traded as a contract for difference (CFD) which lets you speculate on price changes without taking ownership of the physical asset. This means you can go long or short depending on how you think the market will move.*"
            - paragraph [ref=e210]: Many traders follow the Gold Spot price today to stay alert to short-term shifts in market sentiment.
            - paragraph [ref=e211]: "*CFDs are traded on margin. Leverage amplifies both profits and losses."
            - heading "Gold Spot price today" [level=2] [ref=e212]
            - paragraph [ref=e213]: The instrument is quoted in $ and is currently trading around 3993.48.
            - heading "Live price overview" [level=2] [ref=e214]
            - paragraph [ref=e215]: Below is an overview of the current Gold Spot price and its recent trading ranges.
            - list [ref=e216]:
              - listitem [ref=e217]:
                - text: •
                - strong [ref=e218]: "Daily range:"
                - text: 3975.24 – 4033.99
              - listitem [ref=e219]:
                - text: •
                - strong [ref=e220]: "Daily movement:"
                - text: "-28.22 (-0.7012%)"
              - listitem [ref=e221]:
                - text: •
                - strong [ref=e222]: "Weekly range:"
                - text: 3975.24 – 4198.69
              - listitem [ref=e223]:
                - text: •
                - strong [ref=e224]: "Monthly range:"
                - text: 3975.24 – 4369.04
              - listitem [ref=e225]:
                - text: •
                - strong [ref=e226]: "Yearly range:"
                - text: 3886.57 – 5595.25
            - heading "Why trade commodity CFDs on the price of Gold Spot with Capital.com?" [level=2] [ref=e227]
            - paragraph [ref=e228]: Capital.com provides tools and features designed to support informed decision-making when analysing live market prices.
            - paragraph [ref=e229]:
              - strong [ref=e230]: Advanced charting and analysis
            - paragraph [ref=e231]: Use interactive tools to study the Gold Spot price chart in detail.
            - list [ref=e232]:
              - listitem [ref=e233]: • Access 100 technical indicators
              - listitem [ref=e234]: • Choose from 12 chart types
              - listitem [ref=e235]: • Analyse fast, interactive charting tools
            - paragraph [ref=e236]:
              - strong [ref=e237]: Wide market offering
            - paragraph [ref=e238]: "Join over 890 global traders and explore a wide range of markets:"
            - list [ref=e239]:
              - listitem [ref=e240]: • 4,500 stock CFDs
              - listitem [ref=e241]: • 65 commodity CFDs
              - listitem [ref=e242]: • 35 index CFDs
              - listitem [ref=e243]: • 120 forex pairs
              - listitem [ref=e244]: • 450 crypto CFDs
            - paragraph [ref=e245]:
              - strong [ref=e246]: User-rated platforms
            - list [ref=e247]:
              - listitem [ref=e248]:
                - text: •
                - strong [ref=e249]: "TradingView rating:"
                - text: "4.5"
              - listitem [ref=e250]:
                - text: •
                - strong [ref=e251]: "App Store rating:"
                - text: "4.7"
              - listitem [ref=e252]:
                - text: •
                - strong [ref=e253]: "Google Play rating:"
                - text: "4.6"
              - listitem [ref=e254]:
                - text: •
                - strong [ref=e255]: "Trustpilot score:"
                - text: "4.6"
            - heading "What influences the price of Gold Spot?" [level=2] [ref=e256]
            - paragraph [ref=e257]: "The Gold Spot (Gold) price may be influenced by several market factors, including:"
            - list [ref=e258]:
              - listitem [ref=e259]:
                - text: •
                - strong [ref=e260]: Supply and demand dynamics
              - listitem [ref=e261]:
                - text: •
                - strong [ref=e262]: Global economic conditions
              - listitem [ref=e263]:
                - text: •
                - strong [ref=e264]: Geopolitical events affecting production or transport
              - listitem [ref=e265]:
                - text: •
                - strong [ref=e266]: Seasonal trends
              - listitem [ref=e267]:
                - text: •
                - strong [ref=e268]: Market sentiment and risk appetite
              - listitem [ref=e269]:
                - text: •
                - strong [ref=e270]: Currency fluctuations
            - paragraph [ref=e271]: These factors can interact in complex ways, contributing to both short-term movements and longer-term trends.
            - heading "Gold Spot price forecasts" [level=2] [ref=e272]
            - paragraph [ref=e273]: Gold Spot price forecasts commonly reference recent news, company updates, and broader economic factors rather than fixed price targets. You can use a combination of technical analysis and fundamental insights to form a view of potential future price movements. However, analyst forecasts are often inaccurate and past performance is not a reliable indicator of future results.
            - paragraph [ref=e274]: Instead of relying on a single outlook, some traders monitor ongoing analysis and real-time data to respond to changing market conditions.
            - heading "How to trade Gold Spot commodity CFDs" [level=2] [ref=e275]
            - paragraph [ref=e276]: "With CFDs, you can trade without owning the underlying physical commodity:"
            - list [ref=e277]:
              - listitem [ref=e278]: • Go long (buy) if you expect prices to rise
              - listitem [ref=e279]: • Go short (sell) if you expect prices to fall
            - paragraph [ref=e280]: Leverage allows increased exposure but also magnifies losses.
            - heading "Risks of trading commodity CFDs" [level=2] [ref=e281]
            - paragraph [ref=e282]: "Key risks include:"
            - list [ref=e283]:
              - listitem [ref=e284]:
                - text: •
                - strong [ref=e285]: High market volatility
              - listitem [ref=e286]:
                - text: •
                - strong [ref=e287]: Leverage amplifying both losses and gains
              - listitem [ref=e288]:
                - text: •
                - strong [ref=e289]: Funding costs for holding positions overnight
              - listitem [ref=e290]:
                - text: •
                - strong [ref=e291]: No ownership of the underlying commodity
          - generic [ref=e293]:
            - heading "Latest commodities articles" [level=2] [ref=e296]
            - generic [ref=e297]:
              - link "Gold price forecast" [ref=e298] [cursor=pointer]:
                - /url: /en-au/analysis/gold-price-forecast
                - img "Gold price forecast" [ref=e300]
              - generic [ref=e301]:
                - 'link "Gold forecast: Third-party price targets" [ref=e302] [cursor=pointer]':
                  - /url: /en-au/analysis/gold-price-forecast
                - generic [ref=e303]: Gold spot (XAU) traded at $4,582.82 at 9:44am UTC on 27 August 2026, after July core PCE inflation rose 3.3% year on year. Explore third-party Gold price targets and technical analysis. Past performance is not a reliable indicator of future results.
                - generic [ref=e304]: 11:12, 2 September 2026
            - generic [ref=e305]:
              - link "Gold breaks below $4,000 as Warsh's Fed rewrites the narrative" [ref=e306] [cursor=pointer]:
                - /url: /en-au/analysis/gold-breaks-below-4-000-as-warsh-s-fed-rewrites-the-narrative
                - img "Gold breaks below $4,000 as Warsh's Fed rewrites the narrative" [ref=e308]
              - generic [ref=e309]:
                - link "Gold breaks below $4,000 as Warsh's Fed rewrites the narrative" [ref=e310] [cursor=pointer]:
                  - /url: /en-au/analysis/gold-breaks-below-4-000-as-warsh-s-fed-rewrites-the-narrative
                - generic [ref=e311]: Gold has fallen below the psychologically important $4,000 level for the first time in seven months, extending its correction as investors increasingly embrace a stronger dollar and a higher-for-longer interest-rate outlook.
                - generic [ref=e312]: 11:05, 25 June 2026
            - generic [ref=e313]:
              - link "Federal Reserve Building" [ref=e314] [cursor=pointer]:
                - /url: /en-au/analysis/gold-equities-and-the-dollar-face-a-major-test-from-warsh-s-fed-debut
                - img "Federal Reserve Building" [ref=e316]
              - generic [ref=e317]:
                - link "Gold, equities and the dollar face a major test from Warsh’s Fed debut" [ref=e318] [cursor=pointer]:
                  - /url: /en-au/analysis/gold-equities-and-the-dollar-face-a-major-test-from-warsh-s-fed-debut
                - generic [ref=e319]: Markets await the first meeting from Governor Warsh to determine the likely path for interest rates.
                - generic [ref=e320]: 08:40, 17 June 2026
            - generic [ref=e321]:
              - link "gold bar concept" [ref=e322] [cursor=pointer]:
                - /url: /en-au/analysis/the-real-driver-behind-gold-central-bank-demand
                - img "gold bar concept" [ref=e324]
              - generic [ref=e325]:
                - 'link "The real driver behind gold: central bank demand" [ref=e326] [cursor=pointer]':
                  - /url: /en-au/analysis/the-real-driver-behind-gold-central-bank-demand
                - generic [ref=e327]: Central Banks across the globe are leaning into gold as a reserve asset as greater fragmentation, political risks, and fiscal deficits threaten the stability of international monetary systems.
                - generic [ref=e328]: 11:49, 3 June 2026
          - generic [ref=e330]:
            - strong [ref=e332]: Related News
            - generic [ref=e334]:
              - generic [ref=e335]:
                - generic [ref=e336]:
                  - generic [ref=e338]: Newsfile
                  - generic [ref=e339]: 22 minutes ago
                - link "Regency Silver to Exhibit at the 2026 New Orleans Investment Conference" [ref=e340] [cursor=pointer]:
                  - /url: /en-au/news/regency-silver-to-exhibit-at-the-2026-new-orleans-investment
                  - strong [ref=e341]: Regency Silver to Exhibit at the 2026 New Orleans Investment Conference
              - generic [ref=e342]:
                - generic [ref=e343]:
                  - generic [ref=e344]:
                    - button [ref=e346] [cursor=pointer]
                    - generic [ref=e347]: Reuters News
                  - generic [ref=e348]: an hour ago
                - link "Gold gains on softer oil prices; Fed decision in focus" [ref=e349] [cursor=pointer]:
                  - /url: /en-au/news/gold-gains-on-softer-oil-prices-fed-decision-in-focus
                  - strong [ref=e350]: Gold gains on softer oil prices; Fed decision in focus
              - generic [ref=e351]:
                - generic [ref=e352]:
                  - generic [ref=e354]: Reuters News
                  - generic [ref=e355]: an hour ago
                - link "No technical reports from Wang Tao during October 27-30" [ref=e356] [cursor=pointer]:
                  - /url: /en-au/news/no-technical-reports-from-wang-tao-during-october-27-30
                  - strong [ref=e357]: No technical reports from Wang Tao during October 27-30
              - generic [ref=e358]:
                - generic [ref=e359]:
                  - generic [ref=e361]: Zawya
                  - generic [ref=e362]: 3 hours ago
                - 'link "SNG: Gold prices in Egypt collectively drop on October 25" [ref=e363] [cursor=pointer]':
                  - /url: /en-au/news/sng-gold-prices-in-egypt-collectively-drop-on-october-25
                  - strong [ref=e364]: "SNG: Gold prices in Egypt collectively drop on October 25"
              - generic [ref=e365]:
                - generic [ref=e366]:
                  - generic [ref=e367]:
                    - button [ref=e369] [cursor=pointer]
                    - generic [ref=e370]: Newsfile
                  - generic [ref=e371]: 3 hours ago
                - link "Results for First Quarter Ended August 31, 2026" [ref=e372] [cursor=pointer]:
                  - /url: /en-au/news/results-for-first-quarter-ended-august-31-2026
                  - strong [ref=e373]: Results for First Quarter Ended August 31, 2026
              - generic [ref=e374]:
                - generic [ref=e375]:
                  - generic [ref=e376]:
                    - button [ref=e378] [cursor=pointer]
                    - generic [ref=e379]: Reuters News
                  - generic [ref=e380]: 3 hours ago
                - link "Currency markets subdued ahead of busy central bank week" [ref=e381] [cursor=pointer]:
                  - /url: /en-au/news/currency-markets-subdued-ahead-of-busy-central-bank-week
                  - strong [ref=e382]: Currency markets subdued ahead of busy central bank week
              - generic [ref=e383]:
                - generic [ref=e384]:
                  - generic [ref=e385]:
                    - button [ref=e387] [cursor=pointer]
                    - generic [ref=e388]: Reuters News
                  - generic [ref=e389]: 3 hours ago
                - link "Gold gains on softer oil prices; Fed decision in focus" [ref=e390] [cursor=pointer]:
                  - /url: /en-au/news/gold-gains-on-softer-oil-prices-fed-decision-in-focus
                  - strong [ref=e391]: Gold gains on softer oil prices; Fed decision in focus
              - generic [ref=e392]:
                - generic [ref=e393]:
                  - generic [ref=e395]: Reuters News
                  - generic [ref=e396]: 4 hours ago
                - link "South African Markets - Factors to watch on October 26" [ref=e397] [cursor=pointer]:
                  - /url: /en-au/news/south-african-markets-factors-to-watch-on-october-26
                  - strong [ref=e398]: South African Markets - Factors to watch on October 26
              - generic [ref=e399]:
                - generic [ref=e400]:
                  - generic [ref=e401]:
                    - button [ref=e403] [cursor=pointer]
                    - generic [ref=e404]: Reuters News
                  - generic [ref=e405]: 5 hours ago
                - link "Gold gains on softer oil prices; Fed decision in focus" [ref=e406] [cursor=pointer]:
                  - /url: /en-au/news/gold-gains-on-softer-oil-prices-fed-decision-in-focus
                  - strong [ref=e407]: Gold gains on softer oil prices; Fed decision in focus
              - generic [ref=e408]:
                - generic [ref=e409]:
                  - generic [ref=e411]: Reuters News
                  - generic [ref=e412]: 7 hours ago
                - link "Thai baht/US dollar weaker on Monday" [ref=e413] [cursor=pointer]:
                  - /url: /en-au/news/thai-baht/us-dollar-weaker-on-monday
                  - strong [ref=e414]: Thai baht/US dollar weaker on Monday
        - complementary [ref=e415]:
          - generic [ref=e416]:
            - generic [ref=e418]:
              - strong [ref=e419]: Related markets
              - generic [ref=e420]: Tracking the stocks, indices, and assets making major moves.
              - generic [ref=e424]:
                - button "Most traded markets" [ref=e425]: Most traded markets
                - button "Top risers" [ref=e426] [cursor=pointer]: Top risers
                - button "Top fallers" [ref=e427] [cursor=pointer]: Top fallers
                - button "Most volatile" [ref=e428] [cursor=pointer]: Most volatile
              - generic [ref=e429]:
                - generic [ref=e431]:
                  - generic [ref=e432]:
                    - generic [ref=e434]:
                      - link "Gold" [ref=e435] [cursor=pointer]:
                        - /url: /en-au/markets/commodities/gold-spot-commodity
                      - generic [ref=e436]: "4015.70"
                    - button "Trade" [ref=e437] [cursor=pointer]
                  - generic [ref=e440]: 0.49%
                - generic [ref=e445]:
                  - generic [ref=e447]:
                    - link "Crude Oil Spot" [ref=e448] [cursor=pointer]:
                      - /url: /en-au/markets/commodities/us-crude-oil-spot-commodity-1
                    - generic [ref=e449]: "100.084"
                  - button "Trade" [ref=e450] [cursor=pointer]
                - generic [ref=e453]:
                  - generic [ref=e455]:
                    - link "Brent Oil Spot" [ref=e456] [cursor=pointer]:
                      - /url: /en-au/markets/commodities/brent-crude-oil-spot-commodity-1
                    - generic [ref=e457]: "109.610"
                  - button "Trade" [ref=e458] [cursor=pointer]
                - generic [ref=e461]:
                  - generic [ref=e463]:
                    - link "Silver" [ref=e464] [cursor=pointer]:
                      - /url: /en-au/markets/commodities/silver-spot-commodity
                    - generic [ref=e465]: "54.048"
                  - button "Trade" [ref=e466] [cursor=pointer]
                - generic [ref=e469]:
                  - generic [ref=e471]:
                    - link "Natural Gas" [ref=e472] [cursor=pointer]:
                      - /url: /en-au/markets/commodities/us-natural-gas-spot-commodity-1
                    - generic [ref=e473]: "3.0852"
                  - button "Trade" [ref=e474] [cursor=pointer]
            - text: Share prices are indicative and may differ from live market prices.
      - generic [ref=e475]:
        - generic [ref=e476]:
          - heading "User feedback and ratings" [level=2] [ref=e479]
          - generic [ref=e480]:
            - region [ref=e481]:
              - generic [ref=e483]:
                - group [ref=e484]:
                  - link [ref=e485] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e488]: 2025-07-01
                    - strong [ref=e489]: Victor Flemming Nandwa Søder
                    - paragraph [ref=e491]: Great customer service I got to say that. They helped get my account back very fast, after i logged myself out by losing my old email, it was so fast you wouldn’t believe it thank you once again.
                - group [ref=e493]:
                  - link [ref=e494] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e497]: 2025-07-01
                    - strong [ref=e498]: Perry Reineke
                    - paragraph [ref=e500]: I'm learning the basics of stock investing. This platform is clear and pretty good. I've been using it for over 6 months.
                - group [ref=e502]:
                  - link [ref=e503] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e506]: 2025-06-29
                    - strong [ref=e507]: proinpro
                    - paragraph [ref=e509]: Capital is really great to be used on start, also beginner friendly broker! Great costumer support and it is quick!
                - group [ref=e511]:
                  - link [ref=e512] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e515]: 2025-06-27
                    - strong [ref=e516]: Gio Gvazava
                    - paragraph [ref=e518]: Capital.com has been great for both learning and trading. The app is clean, fast, and packed with useful tools. Customer support has been solid too. Definitely recommended for beginners and active traders alike.
                - group [ref=e520]:
                  - link [ref=e521] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e524]: 2025-06-22
                    - strong [ref=e525]: Douglas
                    - paragraph [ref=e527]: Deposits and withdrawals work without issues. Very low spreads. No noticeable fees. Easy to follow.
                - group [ref=e529]:
                  - link [ref=e530] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e533]: 2025-06-19
                    - strong [ref=e534]: foobarbeer
                    - paragraph [ref=e536]: I am extremely happy with this broker. Great spreads, good selection of instruments, well coded toolbox.
                - group [ref=e538]:
                  - link [ref=e539] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e542]: 2025-06-19
                    - strong [ref=e543]: Casaubon70
                    - paragraph [ref=e545]: Love the TV integration. Makes traders life smooth and comfortable.
                - group [ref=e547]:
                  - link [ref=e548] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e551]: 2025-06-19
                    - strong [ref=e552]: dgogidze7
                    - paragraph [ref=e554]: I would like to express a huge thank you to Evgeniya Logvinovich, customer service manager. For your attention and heartfelt attitude to your clients.❤️
                - group [ref=e556]:
                  - link [ref=e557] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e560]: 2025-05-30
                    - strong [ref=e561]: Brigman
                    - paragraph [ref=e563]: Everything worked as expected from the 1 day. I didn’t have to search how to use the platform, it’s intuitive. The support chat was there when I had a tiny issue.
                - group [ref=e565]:
                  - link [ref=e566] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e569]: 2025-05-24
                    - strong [ref=e570]: Radioilluminati
                    - paragraph [ref=e572]: I trade every day and Capital is my beloved home. I also create music and you can always feel when something has been created from the heart. Capital has soul!
                - group [ref=e574]:
                  - link [ref=e575] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e578]: 2025-04-29
                    - strong [ref=e579]: dmjnoor
                    - paragraph [ref=e581]: This application is perfect.. simple, easy to use, run smoothly and fast and it has an accurate graphics.. be careful to use only one credit card and one bank account to prevent any withdrawal problem.. overnight fees and spread variation will be repaid for you by the next month.. I used many application but this is the best one
                - group [ref=e583]:
                  - link [ref=e584] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e587]: 2025-05-20
                    - strong [ref=e588]: GemzT
                    - paragraph [ref=e590]: I’d been paper trading for 2yrs now, went live and this platform is easy for beginners to understand and navigate all important tools to execute all that I learned. Earning now!
                - group [ref=e592]:
                  - link [ref=e593] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e596]: 2025-03-24
                    - strong [ref=e597]: Debbie P
                    - paragraph [ref=e599]: The best trading company I've found so far and so easy to use.
                - group [ref=e601]:
                  - link [ref=e602] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e605]: 2025-02-06
                    - strong [ref=e606]: Nouman Butt
                    - paragraph [ref=e608]: User friendly app & interface and good support team. Funds transfer ease & Leverage is an advantage but crypto is highly risky be responsible of your loss limits and risks appetite.
                - group "1 of 14" [ref=e610]:
                  - link "2025-07-01 Victor Flemming Nandwa Søder Great customer service I got to say that. They helped get my account back very fast, after i logged myself out by losing my old email, it was so fast you wouldn’t believe it thank you once again." [ref=e611] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e614]: 2025-07-01
                    - strong [ref=e615]: Victor Flemming Nandwa Søder
                    - paragraph [ref=e617]: Great customer service I got to say that. They helped get my account back very fast, after i logged myself out by losing my old email, it was so fast you wouldn’t believe it thank you once again.
                - group "2 of 14" [ref=e619]:
                  - link "2025-07-01 Perry Reineke I'm learning the basics of stock investing. This platform is clear and pretty good. I've been using it for over 6 months." [ref=e620] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e623]: 2025-07-01
                    - strong [ref=e624]: Perry Reineke
                    - paragraph [ref=e626]: I'm learning the basics of stock investing. This platform is clear and pretty good. I've been using it for over 6 months.
                - group "3 of 14" [ref=e628]:
                  - link "2025-06-29 proinpro Capital is really great to be used on start, also beginner friendly broker! Great costumer support and it is quick!" [ref=e629] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e632]: 2025-06-29
                    - strong [ref=e633]: proinpro
                    - paragraph [ref=e635]: Capital is really great to be used on start, also beginner friendly broker! Great costumer support and it is quick!
                - group [ref=e637]:
                  - link [ref=e638] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e641]: 2025-06-27
                    - strong [ref=e642]: Gio Gvazava
                    - paragraph [ref=e644]: Capital.com has been great for both learning and trading. The app is clean, fast, and packed with useful tools. Customer support has been solid too. Definitely recommended for beginners and active traders alike.
                - group [ref=e646]:
                  - link [ref=e647] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e650]: 2025-06-22
                    - strong [ref=e651]: Douglas
                    - paragraph [ref=e653]: Deposits and withdrawals work without issues. Very low spreads. No noticeable fees. Easy to follow.
                - group [ref=e655]:
                  - link [ref=e656] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e659]: 2025-06-19
                    - strong [ref=e660]: foobarbeer
                    - paragraph [ref=e662]: I am extremely happy with this broker. Great spreads, good selection of instruments, well coded toolbox.
                - group [ref=e664]:
                  - link [ref=e665] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e668]: 2025-06-19
                    - strong [ref=e669]: Casaubon70
                    - paragraph [ref=e671]: Love the TV integration. Makes traders life smooth and comfortable.
                - group [ref=e673]:
                  - link [ref=e674] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e677]: 2025-06-19
                    - strong [ref=e678]: dgogidze7
                    - paragraph [ref=e680]: I would like to express a huge thank you to Evgeniya Logvinovich, customer service manager. For your attention and heartfelt attitude to your clients.❤️
                - group [ref=e682]:
                  - link [ref=e683] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e686]: 2025-05-30
                    - strong [ref=e687]: Brigman
                    - paragraph [ref=e689]: Everything worked as expected from the 1 day. I didn’t have to search how to use the platform, it’s intuitive. The support chat was there when I had a tiny issue.
                - group [ref=e691]:
                  - link [ref=e692] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e695]: 2025-05-24
                    - strong [ref=e696]: Radioilluminati
                    - paragraph [ref=e698]: I trade every day and Capital is my beloved home. I also create music and you can always feel when something has been created from the heart. Capital has soul!
                - group [ref=e700]:
                  - link [ref=e701] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e704]: 2025-04-29
                    - strong [ref=e705]: dmjnoor
                    - paragraph [ref=e707]: This application is perfect.. simple, easy to use, run smoothly and fast and it has an accurate graphics.. be careful to use only one credit card and one bank account to prevent any withdrawal problem.. overnight fees and spread variation will be repaid for you by the next month.. I used many application but this is the best one
                - group [ref=e709]:
                  - link [ref=e710] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e713]: 2025-05-20
                    - strong [ref=e714]: GemzT
                    - paragraph [ref=e716]: I’d been paper trading for 2yrs now, went live and this platform is easy for beginners to understand and navigate all important tools to execute all that I learned. Earning now!
                - group [ref=e718]:
                  - link [ref=e719] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e722]: 2025-03-24
                    - strong [ref=e723]: Debbie P
                    - paragraph [ref=e725]: The best trading company I've found so far and so easy to use.
                - group [ref=e727]:
                  - link [ref=e728] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e731]: 2025-02-06
                    - strong [ref=e732]: Nouman Butt
                    - paragraph [ref=e734]: User friendly app & interface and good support team. Funds transfer ease & Leverage is an advantage but crypto is highly risky be responsible of your loss limits and risks appetite.
                - group [ref=e736]:
                  - link [ref=e737] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e740]: 2025-07-01
                    - strong [ref=e741]: Victor Flemming Nandwa Søder
                    - paragraph [ref=e743]: Great customer service I got to say that. They helped get my account back very fast, after i logged myself out by losing my old email, it was so fast you wouldn’t believe it thank you once again.
                - group [ref=e745]:
                  - link [ref=e746] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e749]: 2025-07-01
                    - strong [ref=e750]: Perry Reineke
                    - paragraph [ref=e752]: I'm learning the basics of stock investing. This platform is clear and pretty good. I've been using it for over 6 months.
                - group [ref=e754]:
                  - link [ref=e755] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e758]: 2025-06-29
                    - strong [ref=e759]: proinpro
                    - paragraph [ref=e761]: Capital is really great to be used on start, also beginner friendly broker! Great costumer support and it is quick!
                - group [ref=e763]:
                  - link [ref=e764] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e767]: 2025-06-27
                    - strong [ref=e768]: Gio Gvazava
                    - paragraph [ref=e770]: Capital.com has been great for both learning and trading. The app is clean, fast, and packed with useful tools. Customer support has been solid too. Definitely recommended for beginners and active traders alike.
                - group [ref=e772]:
                  - link [ref=e773] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e776]: 2025-06-22
                    - strong [ref=e777]: Douglas
                    - paragraph [ref=e779]: Deposits and withdrawals work without issues. Very low spreads. No noticeable fees. Easy to follow.
                - group [ref=e781]:
                  - link [ref=e782] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e785]: 2025-06-19
                    - strong [ref=e786]: foobarbeer
                    - paragraph [ref=e788]: I am extremely happy with this broker. Great spreads, good selection of instruments, well coded toolbox.
                - group [ref=e790]:
                  - link [ref=e791] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e794]: 2025-06-19
                    - strong [ref=e795]: Casaubon70
                    - paragraph [ref=e797]: Love the TV integration. Makes traders life smooth and comfortable.
                - group [ref=e799]:
                  - link [ref=e800] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e803]: 2025-06-19
                    - strong [ref=e804]: dgogidze7
                    - paragraph [ref=e806]: I would like to express a huge thank you to Evgeniya Logvinovich, customer service manager. For your attention and heartfelt attitude to your clients.❤️
                - group [ref=e808]:
                  - link [ref=e809] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e812]: 2025-05-30
                    - strong [ref=e813]: Brigman
                    - paragraph [ref=e815]: Everything worked as expected from the 1 day. I didn’t have to search how to use the platform, it’s intuitive. The support chat was there when I had a tiny issue.
                - group [ref=e817]:
                  - link [ref=e818] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e821]: 2025-05-24
                    - strong [ref=e822]: Radioilluminati
                    - paragraph [ref=e824]: I trade every day and Capital is my beloved home. I also create music and you can always feel when something has been created from the heart. Capital has soul!
                - group [ref=e826]:
                  - link [ref=e827] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e830]: 2025-04-29
                    - strong [ref=e831]: dmjnoor
                    - paragraph [ref=e833]: This application is perfect.. simple, easy to use, run smoothly and fast and it has an accurate graphics.. be careful to use only one credit card and one bank account to prevent any withdrawal problem.. overnight fees and spread variation will be repaid for you by the next month.. I used many application but this is the best one
                - group [ref=e835]:
                  - link [ref=e836] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e839]: 2025-05-20
                    - strong [ref=e840]: GemzT
                    - paragraph [ref=e842]: I’d been paper trading for 2yrs now, went live and this platform is easy for beginners to understand and navigate all important tools to execute all that I learned. Earning now!
                - group [ref=e844]:
                  - link [ref=e845] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e848]: 2025-03-24
                    - strong [ref=e849]: Debbie P
                    - paragraph [ref=e851]: The best trading company I've found so far and so easy to use.
                - group [ref=e853]:
                  - link [ref=e854] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e857]: 2025-02-06
                    - strong [ref=e858]: Nouman Butt
                    - paragraph [ref=e860]: User friendly app & interface and good support team. Funds transfer ease & Leverage is an advantage but crypto is highly risky be responsible of your loss limits and risks appetite.
              - generic:
                - button "Go to last slide" [ref=e862] [cursor=pointer]
                - button "Next slide" [ref=e863] [cursor=pointer]
            - paragraph [ref=e864]: Showing our 4 & 5 star reviews.
          - generic [ref=e866]:
            - link "4.5" [ref=e867] [cursor=pointer]:
              - /url: https://www.tradingview.com/broker/Capitalcom/
              - strong [ref=e870]: "4.5"
            - link "Ratings and Reviews 4.7" [ref=e873] [cursor=pointer]:
              - /url: https://app.appsflyer.com/id1230088754?cp_device_id=c339340b-ecdc-476f-9788-2eae7d33193b&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
              - strong [ref=e875]: Ratings and Reviews
              - strong [ref=e877]: "4.7"
            - link "Ratings and Reviews 4.6" [ref=e880] [cursor=pointer]:
              - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=c339340b-ecdc-476f-9788-2eae7d33193b&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
              - strong [ref=e882]: Ratings and Reviews
              - strong [ref=e884]: "4.6"
            - link "4.6" [ref=e887] [cursor=pointer]:
              - /url: https://www.trustpilot.com/review/capital.com
              - strong [ref=e890]: "4.6"
        - generic [ref=e894]:
          - generic [ref=e895]:
            - heading "Ready to join a leading broker?" [level=2] [ref=e896]
            - generic [ref=e897]: Join our community of traders worldwide
          - generic [ref=e898]:
            - button [ref=e900] [cursor=pointer]
            - generic [ref=e903]: 1. Create your account
            - generic [ref=e904]: 2. Make your first deposit
            - generic [ref=e905]: 3. Start when you’re ready
        - generic [ref=e907]:
          - paragraph [ref=e908]:
            - text: Start trading CFDs
            - link "Gold" [ref=e909] [cursor=pointer]:
              - /url: /en-au/markets/commodities/gold-spot-commodity
          - generic [ref=e910]:
            - generic [ref=e912]: "4015.20"
            - generic [ref=e914]: "4015.70"
          - button "Get started" [ref=e915] [cursor=pointer]
          - button "Close sticky trading bar" [ref=e916] [cursor=pointer]
  - contentinfo [ref=e918]:
    - generic [ref=e919]:
      - link [ref=e920] [cursor=pointer]:
        - /url: /en-au
        - img [ref=e921]
      - generic [ref=e925]:
        - link [ref=e926] [cursor=pointer]:
          - /url: https://www.facebook.com/capitalcomau/
        - link [ref=e927] [cursor=pointer]:
          - /url: https://twitter.com/Capitalcomau
        - link [ref=e928] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/capital.com
        - link [ref=e929] [cursor=pointer]:
          - /url: https://www.instagram.com/capitalcomau/
        - link [ref=e930] [cursor=pointer]:
          - /url: https://www.youtube.com/@capital.com.australia5770
      - generic [ref=e931]:
        - link [ref=e932] [cursor=pointer]:
          - /url: https://app.appsflyer.com/id1230088754?cp_device_id=c339340b-ecdc-476f-9788-2eae7d33193b&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e933] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=c339340b-ecdc-476f-9788-2eae7d33193b&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e934] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=c339340b-ecdc-476f-9788-2eae7d33193b&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
    - generic [ref=e935]:
      - generic [ref=e936]:
        - generic [ref=e937]:
          - generic [ref=e938]:
            - generic [ref=e939]: "Country / Region:"
            - button "Australia" [ref=e940] [cursor=pointer]:
              - generic [ref=e942]: Australia
          - generic [ref=e943]: •
          - generic [ref=e944]:
            - generic [ref=e945]: "Language:"
            - button "English" [ref=e946] [cursor=pointer]:
              - generic [ref=e947]: English
        - generic [ref=e948]:
          - generic [ref=e949]: "Also you can contact us:"
          - link "+61 3 8658 0539" [ref=e952] [cursor=pointer]:
            - /url: tel:+61 3 8658 0539
            - strong [ref=e953]: +61 3 8658 0539
            - strong
          - generic [ref=e954]: •
          - link "support.au@capital.com" [ref=e956] [cursor=pointer]:
            - /url: mailto:support.au@capital.com
            - strong [ref=e957]: support.au@capital.com
      - generic [ref=e958]:
        - generic [ref=e959]:
          - strong [ref=e961]: Trading
          - generic [ref=e962]:
            - generic [ref=e963]:
              - generic [ref=e964]: Trading
              - generic [ref=e965]:
                - link "Trade CFDs" [ref=e967] [cursor=pointer]:
                  - /url: /en-au/ways-to-trade/cfd-trading
                - link "Get demo account" [ref=e969] [cursor=pointer]:
                  - /url: /en-au/trading-platforms/demo-account
                - link "Get pro account" [ref=e971] [cursor=pointer]:
                  - /url: /en-au//professional
                - link "Corporate account" [ref=e973] [cursor=pointer]:
                  - /url: /en-au/corporate-accounts
                - link "Premium services" [ref=e975] [cursor=pointer]:
                  - /url: /en-au/ways-to-trade/premium-services
                - link "24/5 index CFD trading" [ref=e977] [cursor=pointer]:
                  - /url: /en-au/ways-to-trade/24h-trading
            - generic [ref=e978]:
              - generic [ref=e979]: Platforms
              - generic [ref=e980]:
                - link "Web platform" [ref=e982] [cursor=pointer]:
                  - /url: /en-au/trading-platforms/web-platform
                - link "Mobile app" [ref=e984] [cursor=pointer]:
                  - /url: /en-au/trading-platforms/mobile-apps
            - generic [ref=e985]:
              - generic [ref=e986]: Integrations
              - generic [ref=e987]:
                - link "TradingView" [ref=e989] [cursor=pointer]:
                  - /url: /en-au/trading-platforms/trading-view
                - link "MT5" [ref=e991] [cursor=pointer]:
                  - /url: /en-au/trading-platforms/mt5
                - link "AI Integration" [ref=e993] [cursor=pointer]:
                  - /url: /en-au/trading-platforms/ai-integration
                - link "MT4" [ref=e995] [cursor=pointer]:
                  - /url: /en-au/trading-platforms/mt4
                - link "API access" [ref=e997] [cursor=pointer]:
                  - /url: /en-au/trading-platforms/api-development-guide
            - generic [ref=e998]:
              - generic [ref=e999]: Learn
              - generic [ref=e1000]:
                - link "Trading strategies" [ref=e1002] [cursor=pointer]:
                  - /url: /en-au/learn/trading-strategies
                - link "Technical analysis" [ref=e1004] [cursor=pointer]:
                  - /url: /en-au/learn/technical-analysis
                - link "Trading psychology" [ref=e1006] [cursor=pointer]:
                  - /url: /en-au/learn/trading-psychology
                - link "All resources" [ref=e1008] [cursor=pointer]:
                  - /url: /en-au/learn
                - link "Glossary" [ref=e1010] [cursor=pointer]:
                  - /url: /en-au/learn/glossary
                - link "IPO trading" [ref=e1012] [cursor=pointer]:
                  - /url: /en-au/learn/ipo
                - link "Market guides" [ref=e1014] [cursor=pointer]:
                  - /url: /en-au/learn/market-guides
        - generic [ref=e1015]:
          - strong [ref=e1017]: Markets
          - generic [ref=e1018]:
            - generic [ref=e1019]:
              - generic [ref=e1020]: Our markets
              - generic [ref=e1021]:
                - link "Markets overview" [ref=e1023] [cursor=pointer]:
                  - /url: /en-au/markets
                - link "Shares" [ref=e1025] [cursor=pointer]:
                  - /url: /en-au/markets/shares
                - link "Forex" [ref=e1027] [cursor=pointer]:
                  - /url: /en-au/markets/forex
                - link "Indices" [ref=e1029] [cursor=pointer]:
                  - /url: /en-au/markets/indices
                - link "Commodities" [ref=e1031] [cursor=pointer]:
                  - /url: /en-au/markets/commodities
                - link "Cryptocurrencies" [ref=e1033] [cursor=pointer]:
                  - /url: /en-au/markets/cryptocurrencies
                - link "Bonds" [ref=e1035] [cursor=pointer]:
                  - /url: /en-au/markets/bonds
                - link "Interest rates" [ref=e1037] [cursor=pointer]:
                  - /url: /en-au/markets/interest-rates
            - generic [ref=e1038]:
              - generic [ref=e1039]: Market info
              - link "Market analysis" [ref=e1042] [cursor=pointer]:
                - /url: /en-au/analysis
        - link "Pricing" [ref=e1045] [cursor=pointer]:
          - /url: /en-au/ways-to-trade/fees-and-charges
          - strong [ref=e1046]: Pricing
        - generic [ref=e1047]:
          - strong [ref=e1049]: About
          - generic [ref=e1050]:
            - generic [ref=e1051]:
              - generic [ref=e1052]: Who we are
              - generic [ref=e1053]:
                - link "Company" [ref=e1055] [cursor=pointer]:
                  - /url: /en-au/about-us
                - link "Our offices" [ref=e1057] [cursor=pointer]:
                  - /url: /en-au/about-us/our-offices
                - link "Press centre" [ref=e1059] [cursor=pointer]:
                  - /url: /en-au/media-centre
                - link "Whitepaper" [ref=e1061] [cursor=pointer]:
                  - /url: /whitepaper
                - link "Investor Relations" [ref=e1063] [cursor=pointer]:
                  - /url: /en-au/about-us/investor-relations
                - link "Is Capital.com safe?" [ref=e1065] [cursor=pointer]:
                  - /url: /en-au/security-measures
                - link "Our business model" [ref=e1067] [cursor=pointer]:
                  - /url: /en-au/about-us/how-capital-makes-money
            - generic [ref=e1068]:
              - generic [ref=e1069]: Work with us
              - link "Careers" [ref=e1072] [cursor=pointer]:
                - /url: /en-au/about-us/careers
            - generic [ref=e1073]:
              - generic [ref=e1074]: Help
              - generic [ref=e1075]:
                - link "Help centre" [ref=e1077] [cursor=pointer]:
                  - /url: /en-au/help
                - link "Client vulnerability" [ref=e1079] [cursor=pointer]:
                  - /url: /en-au/help/client-vulnerability
                - link "Contact us" [ref=e1081] [cursor=pointer]:
                  - /url: /en-au/contact-us
            - generic [ref=e1082]:
              - generic [ref=e1083]: Legal
              - generic [ref=e1084]:
                - link "Terms & policies" [ref=e1086] [cursor=pointer]:
                  - /url: /en-au/terms-and-policies
                - link "Complaints" [ref=e1088] [cursor=pointer]:
                  - /url: /en-au/help/complaints
    - generic [ref=e1090]:
      - paragraph [ref=e1091]:
        - text: CFDs are complex leveraged instruments and come with a high risk of losing money. These products are not suitable for everyone and you should therefore consider your objectives, financial situation, needs and experience with these products before investing in them. Our
        - link "Product Disclosure Statement" [ref=e1092] [cursor=pointer]:
          - /url: https://capital.com/product-disclosure-statement-asic
        - text: (PDS) and
        - link "Target Market Determination" [ref=e1093] [cursor=pointer]:
          - /url: https://capital.com/target-market-determination-asic
        - text: provides important information about our products and who our products are more likely to be suited to. Capital.com does not provide financial or investment advice and you should seek independent advice if you are unsure of the risks or whether our products are suitable for you.
      - paragraph [ref=e1094]
      - paragraph [ref=e1095]: Capital Com Australia Pty Ltd (ABN 47 625 601 489) is a company registered in Australia and regulated by the Australian Securities and Investments Commission (ASIC) under AFSL 513393.
    - generic [ref=e1096]:
      - paragraph [ref=e1097]: © 2026 Capital Com Australia Pty Ltd
      - generic [ref=e1098]:
        - link "Sitemap" [ref=e1099] [cursor=pointer]:
          - /url: /en-au/sitemap
        - link "Cookie Settings" [ref=e1100] [cursor=pointer]:
          - /url: ""
        - link "Clients Funds" [ref=e1101] [cursor=pointer]:
          - /url: /en-au/about-us/what-capital-does-with-your-money
        - link "Terms and Policies" [ref=e1102] [cursor=pointer]:
          - /url: /en-au/terms-and-policies
        - link "Complaints Procedure CCAU" [ref=e1103] [cursor=pointer]:
          - /url: /en-au/help/complaints
  - button [ref=e1104] [cursor=pointer]
  - alert [ref=e1106]: Trade Gold Spot CFD
```

# Test source

```ts
  28  |         `Invalid locator type: ${typeof locatorConfig}. Value: ${JSON.stringify(locatorConfig)}`,
  29  |       );
  30  |     }
  31  | 
  32  |     if (typeof locatorConfig === "function") {
  33  |       return locatorConfig(this.page);
  34  |     }
  35  | 
  36  |     if (
  37  |       locatorConfig.startsWith(":scope") ||
  38  |       locatorConfig.startsWith("xpath=")
  39  |     ) {
  40  |       return this.root.locator(locatorConfig);
  41  |     }
  42  | 
  43  |     return this.page.locator(locatorConfig);
  44  |   }
  45  | 
  46  |   getActionLocator(actionName) {
  47  |     return this.resolveLocator(this.actions[actionName].locator);
  48  |   }
  49  | 
  50  |   getHelper(helperName) {
  51  |     return this.resolveLocator(this.helpers[helperName]);
  52  |   }
  53  | 
  54  |   async runSetup() {
  55  |     if (!this.setup) {
  56  |       return;
  57  |     }
  58  | 
  59  |     await this.setup({
  60  |       page: this.page,
  61  |       getHelper: this.getHelper.bind(this),
  62  |     });
  63  |   }
  64  | 
  65  |   async runActionSetup(actionName) {
  66  |     const action = this.actions[actionName];
  67  | 
  68  |     if (!action?.setup) {
  69  |       return;
  70  |     }
  71  | 
  72  |     await action.setup({
  73  |       page: this.page,
  74  |       getHelper: this.getHelper.bind(this),
  75  |     });
  76  | 
  77  |     // console.log("ACTION SETUP DONE:", actionName);
  78  |     // console.log("URL:", this.page.url());
  79  |   }
  80  | 
  81  |   async click(actionName, { waitForNewPage = false } = {}) {
  82  |     console.log("START CLICK", actionName);
  83  | 
  84  |     await this.runSetup();
  85  |     await this.runActionSetup(actionName);
  86  | 
  87  |     const action = this.actions[actionName];
  88  |     let locator = this.getActionLocator(actionName);
  89  | 
  90  |     if (action.locatorIndex !== undefined) {
  91  |       locator = locator.nth(action.locatorIndex);
  92  |     }
  93  | 
  94  |     const count = await locator.count();
  95  |     console.log("COUNT", actionName, count);
  96  | 
  97  |     if (action.optional && count === 0) {
  98  |       return { skipped: true };
  99  |     }
  100 | 
  101 |     await expect(locator).toBeVisible();
  102 |     await expect(locator).toBeEnabled();
  103 | 
  104 |     let newPagePromise;
  105 | 
  106 |     if (waitForNewPage) {
  107 |       // newPagePromise = this.page.context().waitForEvent("page");
  108 |       newPagePromise = this.page.waitForEvent("popup");
  109 |     }
  110 | 
  111 |     // console.log(
  112 |     //   await locator.evaluate((el) => {
  113 |     //     const rect = el.getBoundingClientRect();
  114 |     //     const center = {
  115 |     //       x: rect.left + rect.width / 2,
  116 |     //       y: rect.top + rect.height / 2,
  117 |     //     };
  118 | 
  119 |     //     return {
  120 |     //       text: el.textContent,
  121 |     //       center,
  122 |     //       elementAtPoint: document.elementFromPoint(center.x, center.y)
  123 |     //         ?.outerHTML,
  124 |     //     };
  125 |     //   }),
  126 |     // );
  127 | 
> 128 |     await locator.click({ timeout: 2000 });
      |                   ^ TimeoutError: locator.click: Timeout 2000ms exceeded.
  129 |     const newPage = newPagePromise ? await newPagePromise : null;
  130 | 
  131 |     return { skipped: false, locator, newPage };
  132 |   }
  133 | }
  134 | 
```