# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cta/generated.cta.spec.js >> indices page | tradingInstrument | longPositionGoToPlatformBtn
- Location: tests/cta/generated.cta.spec.js:37:7

# Error details

```
TimeoutError: locator.click: Timeout 2000ms exceeded.
Call log:
  - waiting for locator('tbody tr').nth(2).locator('[data-type="market_go_to_platform_btn"]')
    - locator resolved to <a href="" target="_blank" rel="noopener noreferrer nofollow" data-type="market_go_to_platform_btn" class="rZW9e cCezE qIlmS l_btn_to_platform js-analyticsClick qAcWB">…</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action
    - <div class="PeyjO anxPy">…</div> intercepts pointer events
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
    - <div class="PeyjO gD3Op a1Ftw">…</div> from <tr>…</tr> subtree intercepts pointer events
  2 × retrying click action
      - waiting 100ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <span class="">…</span> from <header id="header" class="SqFoe" data-height-observer-attached="true">…</header> subtree intercepts pointer events
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
    - <div class="PeyjO gD3Op a1Ftw">…</div> from <tr>…</tr> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e7]:
      - text: Spread bets and CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage.
      - strong [ref=e8]: 65% of retail investor accounts lose money when trading spread bets and CFDs with this provider
      - text: . You should consider whether you understand how spread bets and CFDs work and whether you can afford to take the high risk of losing your money.
    - generic [ref=e10]:
      - link [ref=e11] [cursor=pointer]:
        - /url: /en-gb
        - img [ref=e12]
      - generic [ref=e17]:
        - navigation [ref=e18]:
          - button "Trading" [ref=e19]:
            - button "Trading" [ref=e20]:
              - generic [ref=e21]: Trading
          - button "Markets" [ref=e22]:
            - button "Markets" [ref=e23]:
              - generic [ref=e24]: Markets
          - link "Pricing" [ref=e27] [cursor=pointer]:
            - /url: /en-gb/ways-to-trade/fees-and-charges
          - button "About" [ref=e28]:
            - button "About" [ref=e29]:
              - generic [ref=e30]: About
        - button "en" [ref=e31] [cursor=pointer]:
          - generic [ref=e33]: en
      - generic [ref=e35]:
        - button "Log In" [ref=e36] [cursor=pointer]: Log In
        - button "Open account" [ref=e37] [cursor=pointer]: Open account
      - button "Search" [ref=e38] [cursor=pointer]
  - generic [ref=e39]:
    - paragraph [ref=e42]:
      - generic [ref=e43]:
        - link "Home" [ref=e44] [cursor=pointer]:
          - /url: /en-gb
        - text: •
      - generic [ref=e45]:
        - link "Markets overview" [ref=e46] [cursor=pointer]:
          - /url: /en-gb/markets
        - text: •
      - generic [ref=e47]:
        - link "Indices" [ref=e48] [cursor=pointer]:
          - /url: /en-gb/markets/indices
        - text: •
      - text: US Tech 100
    - generic [ref=e49]:
      - generic [ref=e52]:
        - generic [ref=e54]:
          - heading "Trade US Tech 100 - US100 CFD" [level=1] [ref=e56]
          - button "Add to favourite" [ref=e57] [cursor=pointer]: Add to favourite
        - generic [ref=e58]:
          - generic [ref=e60]:
            - strong [ref=e61]: Market is not available at the moment
            - generic [ref=e62]:
              - text: Market information is presented
              - text: as of 2026-10-23T20:45:35+00:00
          - generic [ref=e67]:
            - strong [ref=e68]: Trading Conditions
            - table [ref=e69]:
              - rowgroup [ref=e70]:
                - 'row "Type This financial market is available for CFD trading. Learn more about: CFDs CFD" [ref=e71]':
                  - 'cell "Type This financial market is available for CFD trading. Learn more about: CFDs" [ref=e72]':
                    - generic [ref=e73] [cursor=pointer]:
                      - generic [ref=e75]: Type
                      - generic [ref=e78]:
                        - generic [ref=e79]: This financial market is available for CFD trading.
                        - generic [ref=e80]:
                          - generic [ref=e81]: "Learn more about:"
                          - link "CFDs" [ref=e82]:
                            - /url: /en-gb/ways-to-trade/cfd-trading
                            - generic [ref=e83]: CFDs
                  - cell "CFD" [ref=e84]
                - row "Spread 1.8" [ref=e85]:
                  - cell "Spread" [ref=e86]
                  - cell "1.8" [ref=e87]
                - row "Long position overnight funding adjustment Long position overnight funding adjustment Margin. Your investment $1,000.00 Overnight funding adjustment Charges from full value of position -0.02226 % (-$4.50) Trade size with leverage ~ $20,000.00 Money from leverage ~$19,000.00 Go to platform -0.02226%" [ref=e88]:
                  - cell "Long position overnight funding adjustment Long position overnight funding adjustment Margin. Your investment $1,000.00 Overnight funding adjustment Charges from full value of position -0.02226 % (-$4.50) Trade size with leverage ~ $20,000.00 Money from leverage ~$19,000.00 Go to platform" [ref=e89]:
                    - generic [ref=e90] [cursor=pointer]:
                      - generic [ref=e92]: Long position overnight funding adjustment
                      - generic [ref=e94]:
                        - strong [ref=e95]: Long position overnight funding adjustment
                        - table [ref=e97]
                        - separator [ref=e98]
                        - generic [ref=e99]:
                          - table [ref=e100]:
                            - rowgroup [ref=e101]:
                              - row "Margin. Your investment $1,000.00" [ref=e102]:
                                - cell "Margin. Your investment" [ref=e103]:
                                  - generic [ref=e104]: Margin. Your investment
                                - cell "$1,000.00" [ref=e106]
                              - row "Overnight funding adjustment Charges from full value of position -0.02226 % (-$4.50)" [ref=e107]:
                                - cell "Overnight funding adjustment Charges from full value of position" [ref=e108]:
                                  - generic [ref=e109]:
                                    - text: Overnight funding adjustment
                                    - generic [ref=e111]: Charges from full value of position
                                - cell "-0.02226 % (-$4.50)" [ref=e112]:
                                  - generic [ref=e113]: "-0.02226 %"
                                  - generic [ref=e114]: (-$4.50)
                          - paragraph [ref=e115]:
                            - strong [ref=e116]: Trade size with leverage ~ $20,000.00
                          - paragraph [ref=e117]:
                            - strong [ref=e118]: Money from leverage ~$19,000.00
                        - separator [ref=e119]
                        - link "Go to platform" [ref=e121]:
                          - /url: ""
                          - generic [ref=e122]: Go to platform
                  - cell "-0.02226%" [ref=e123]:
                    - generic [ref=e124]: "-0.02226%"
                - row "Short position overnight funding adjustment Short position overnight funding adjustment Margin. Your investment $1,000.00 Overnight funding adjustment Charges from full value of position 0.00004 % ($0.00) Trade size with leverage ~ $20,000.00 Money from leverage ~$19,000.00 Go to platform 0.00004%" [ref=e125]:
                  - cell "Short position overnight funding adjustment Short position overnight funding adjustment Margin. Your investment $1,000.00 Overnight funding adjustment Charges from full value of position 0.00004 % ($0.00) Trade size with leverage ~ $20,000.00 Money from leverage ~$19,000.00 Go to platform" [ref=e126]:
                    - generic [ref=e127] [cursor=pointer]:
                      - generic [ref=e129]: Short position overnight funding adjustment
                      - generic [ref=e131]:
                        - strong [ref=e132]: Short position overnight funding adjustment
                        - table [ref=e134]
                        - separator [ref=e135]
                        - generic [ref=e136]:
                          - table [ref=e137]:
                            - rowgroup [ref=e138]:
                              - row "Margin. Your investment $1,000.00" [ref=e139]:
                                - cell "Margin. Your investment" [ref=e140]:
                                  - generic [ref=e141]: Margin. Your investment
                                - cell "$1,000.00" [ref=e143]
                              - row "Overnight funding adjustment Charges from full value of position 0.00004 % ($0.00)" [ref=e144]:
                                - cell "Overnight funding adjustment Charges from full value of position" [ref=e145]:
                                  - generic [ref=e146]:
                                    - text: Overnight funding adjustment
                                    - generic [ref=e148]: Charges from full value of position
                                - cell "0.00004 % ($0.00)" [ref=e149]:
                                  - generic [ref=e150]: 0.00004 %
                                  - generic [ref=e151]: ($0.00)
                          - paragraph [ref=e152]:
                            - strong [ref=e153]: Trade size with leverage ~ $20,000.00
                          - paragraph [ref=e154]:
                            - strong [ref=e155]: Money from leverage ~$19,000.00
                        - separator [ref=e156]
                        - link "Go to platform" [ref=e158]:
                          - /url: ""
                          - generic [ref=e159]: Go to platform
                  - cell "0.00004%" [ref=e160]:
                    - generic [ref=e161]: 0.00004%
                - row "Overnight funding adjustment time 21:00 (UTC)" [ref=e162]:
                  - cell "Overnight funding adjustment time" [ref=e163]
                  - cell "21:00 (UTC)" [ref=e164]
                - row "Currency USD" [ref=e165]:
                  - cell "Currency" [ref=e166]
                  - cell "USD" [ref=e167]
                - row "Min traded quantity 0.001" [ref=e168]:
                  - cell "Min traded quantity" [ref=e169]
                  - cell "0.001" [ref=e170]
                - row "Margin 5.00%" [ref=e171]:
                  - cell "Margin" [ref=e172]
                  - cell "5.00%" [ref=e173]:
                    - generic [ref=e174]: 5.00%
                - row "Stock exchange" [ref=e175]:
                  - cell "Stock exchange" [ref=e176]
                  - cell [ref=e177]
                - row "Commission on trade1 0%" [ref=e178]:
                  - cell "Commission on trade1" [ref=e179]:
                    - text: Commission on trade
                    - superscript [ref=e180]: "1"
                  - cell "0%" [ref=e181]
                - row "Guaranteed stop premium A guaranteed stop-loss (GSL) fee is only charged if the GSL is triggered. Please consult the Charges and Fees section of our website for more details. 0.02%" [ref=e182]:
                  - cell "Guaranteed stop premium A guaranteed stop-loss (GSL) fee is only charged if the GSL is triggered. Please consult the Charges and Fees section of our website for more details." [ref=e183]:
                    - generic [ref=e184] [cursor=pointer]:
                      - generic [ref=e186]: Guaranteed stop premium
                      - generic [ref=e189]:
                        - text: A guaranteed stop-loss (GSL) fee is only charged if the GSL is triggered. Please consult the
                        - link "Charges and Fees" [ref=e190]:
                          - /url: /en-gb/ways-to-trade/fees-and-charges
                        - text: section of our website for more details.
                  - cell "0.02%" [ref=e191]:
                    - generic [ref=e192]: 0.02%
            - paragraph [ref=e193]:
              - generic [ref=e194]:
                - superscript [ref=e195]: "1"
                - text: Our charge for executing your trade is the spread, the difference between the buy and sell price. Please consult the
                - link "Charges and Fees" [ref=e196] [cursor=pointer]:
                  - /url: https://capital.com/en-gb/ways-to-trade/fees-and-charges
                - text: section of our website for further information
      - generic [ref=e198]:
        - main [ref=e199]:
          - generic [ref=e201]:
            - heading "Trade US Tech 100 - US100" [level=2] [ref=e202]
            - paragraph [ref=e203]:
              - strong [ref=e204]: The US Tech 100 is a tradeable market with Capital.com, enabling you to take a position on an index comprising the most highly capitalised US tech companies using CFDs.
            - generic [ref=e205]:
              - text: It is available for
              - strong [ref=e206]: 24/5 index CFD trading
              - text: ", following the global technology market sessions."
            - paragraph [ref=e207]: The US Tech 100 is a US stock market index which tracks the performance of the top 100 blue-chip companies listed on the Nasdaq stock exchange.
            - paragraph [ref=e208]: Reviewed every quarter, the index comprises non-financial companies and arranges them with market capitalisation as a key criteria, meaning the most capitalised stocks are placed higher in the list. Inclusion is also dependent on liquidity.
            - paragraph [ref=e209]: As a closely-followed index, the US Tech 100 is often seen as a proxy for US stock market health and the domestic economy.
            - paragraph [ref=e210]:
              - text: Some of the largest companies included in the US Tech 100 index at the time of writing are
              - link "Apple" [ref=e211] [cursor=pointer]:
                - /url: https://capital.com/en-au/markets/shares/apple-inc-share-price
              - text: (AAPL),
              - link "Microsoft" [ref=e212] [cursor=pointer]:
                - /url: https://capital.com/en-au/markets/shares/microsoft-corp-share-price-1
              - text: (MSFT) and
              - link "Nvidia" [ref=e213] [cursor=pointer]:
                - /url: https://capital.com/en-au/markets/shares/nvidia-corp-share-price-1
              - text: (NVDA). Given their size, these companies retain top index spots, but lesser-capitalised companies are more likely to change position in the index, or even drop out to be replaced by new stocks that have become sufficiently capitalised to join.
            - paragraph [ref=e214]:
              - text: To learn more about the US Tech 100, you can visit our
              - link "guide to trading the US Tech 100" [ref=e215] [cursor=pointer]:
                - /url: https://capital.com/en-au/learn/market-guides/trade-nasdaq
              - text: . To trade our US Tech 100 market, you can open an account with us – or practise trading the other
              - link "indices markets" [ref=e216] [cursor=pointer]:
                - /url: https://capital.com/en-au/markets/indices
              - text: on a
              - link "demo account" [ref=e217] [cursor=pointer]:
                - /url: https://capital.com/en-au/trading-platforms/demo-account
              - text: .
            - heading "Trade US Tech 100 (US100) CFDs" [level=2] [ref=e218]
            - paragraph [ref=e219]: "US Tech 100 (ticker: US100) is an index that reflects the performance of a selected group of shares, usually tied to a specific market, region or sector. On Capital.com, it’s available to trade as a contract for difference (CFD), allowing you to speculate on price movements without owning any of the underlying shares. This means you can trade in either direction – rising or falling – depending on your view.*"
            - paragraph [ref=e220]: "*CFDs are traded on margin, leverage amplifies both profits and losses."
            - heading "US Tech 100 price today" [level=2] [ref=e221]
            - paragraph [ref=e222]: The index is quoted in $ and is currently trading around 29006.6.
            - heading "Live price overview" [level=2] [ref=e223]
            - paragraph [ref=e224]: Here’s an overview of the current US Tech 100 price and its recent trading ranges.
            - list [ref=e225]:
              - listitem [ref=e226]:
                - text: •
                - strong [ref=e227]: "Daily range:"
                - text: 28816 – 29160.6
              - listitem [ref=e228]:
                - text: •
                - strong [ref=e229]: "Daily movement:"
                - text: +93 (+0.3217)
              - listitem [ref=e230]:
                - text: •
                - strong [ref=e231]: "Weekly range:"
                - text: 28816 – 30021.5
              - listitem [ref=e232]:
                - text: •
                - strong [ref=e233]: "Monthly range:"
                - text: 28816 – 31365.3
              - listitem [ref=e234]:
                - text: •
                - strong [ref=e235]: "Yearly range:"
                - text: 22779.3 – 31365.3
            - heading "Why trade index CFDs on the price of US Tech 100 with Capital.com?" [level=2] [ref=e236]
            - paragraph [ref=e237]: Capital.com provides a technology-driven trading experience that supports informed decision-making.
            - paragraph [ref=e238]:
              - strong [ref=e239]: Advanced charting and analysis
            - paragraph [ref=e240]: Use interactive tools to study the US Tech 100 price chart in detail.
            - list [ref=e241]:
              - listitem [ref=e242]: • Access 100 technical indicators
              - listitem [ref=e243]: • Choose from 12 chart types
              - listitem [ref=e244]: • Analyse fast, intuitive charts powered by industry-leading tools
            - paragraph [ref=e245]:
              - strong [ref=e246]: Wide market offering
            - paragraph [ref=e247]: "Join over 890,000 global traders and explore more than:"
            - list [ref=e248]:
              - listitem [ref=e249]: • 4,500 stock CFDs
              - listitem [ref=e250]: • 65 commodity CFDs
              - listitem [ref=e251]: • 35 index CFDs
              - listitem [ref=e252]: • 120 forex pairs
            - paragraph [ref=e253]:
              - strong [ref=e254]: User-rated platforms
            - list [ref=e255]:
              - listitem [ref=e256]:
                - text: •
                - strong [ref=e257]: "TradingView rating:"
                - text: "4.5"
              - listitem [ref=e258]:
                - text: •
                - strong [ref=e259]: "App Store rating:"
                - text: "4.7"
              - listitem [ref=e260]:
                - text: •
                - strong [ref=e261]: "Google Play rating:"
                - text: "4.6"
              - listitem [ref=e262]:
                - text: •
                - strong [ref=e263]: "Trustpilot score:"
                - text: "4.6"
            - heading "What influences the price of US Tech 100?" [level=2] [ref=e264]
            - paragraph [ref=e265]: "The US Tech 100 (US100) price may be influenced by various market factors, including:"
            - list [ref=e266]:
              - listitem [ref=e267]:
                - text: •
                - strong [ref=e268]: Performance of the companies within the index
              - listitem [ref=e269]:
                - text: •
                - strong [ref=e270]: Macroeconomic indicators such as GDP, inflation, and employment data
              - listitem [ref=e271]:
                - text: •
                - strong [ref=e272]: Central bank policy decisions
              - listitem [ref=e273]:
                - text: •
                - strong [ref=e274]: Broader market sentiment and risk appetite
              - listitem [ref=e275]:
                - text: •
                - strong [ref=e276]: Geopolitical events or global news
            - heading "US Tech 100 forecasts" [level=2] [ref=e277]
            - paragraph [ref=e278]: US Tech 100 forecasts commonly focus on news, sector updates, and broader market conditions rather than fixed price targets. Traders can combine technical analysis with fundamental insights to form expectations about future price movement.
            - paragraph [ref=e279]: Instead of relying on a single prediction, many traders monitor ongoing analysis and real-time data to adapt to changing market conditions.*
            - paragraph [ref=e280]: "*Analyst forecasts are often inaccurate and past performance isn’t a reliable indicator of future results."
            - heading "How to trade US Tech 100 index CFDs" [level=2] [ref=e281]
            - paragraph [ref=e282]: "Trading index CFDs allows you to speculate on price direction without owning the underlying shares:"
            - list [ref=e283]:
              - listitem [ref=e284]: • Go long (buy) if you think the index may rise
              - listitem [ref=e285]: • Go short (sell) if you think it may fall
            - paragraph [ref=e286]: As CFDs use leverage, both gains and losses are magnified.
            - heading "Risks of trading index CFDs" [level=2] [ref=e287]
            - paragraph [ref=e288]: "CFD trading carries a high level of risk. Key risks include:"
            - list [ref=e289]:
              - listitem [ref=e290]:
                - text: •
                - strong [ref=e291]: Market volatility
              - listitem [ref=e292]:
                - text: •
                - strong [ref=e293]: Leverage amplifying losses as well as profits
              - listitem [ref=e294]:
                - text: •
                - strong [ref=e295]: Potential funding costs for overnight positions
              - listitem [ref=e296]:
                - text: •
                - strong [ref=e297]: No ownership of any underlying assets
          - generic [ref=e299]:
            - heading "Latest indices articles" [level=2] [ref=e302]
            - generic [ref=e303]:
              - link "Bull and Bear statues" [ref=e304] [cursor=pointer]:
                - /url: /en-gb/analysis/markets-brace-for-a-critical-week-as-geopolitics-and-macro-risks-collide
                - img "Bull and Bear statues" [ref=e306]
              - generic [ref=e307]:
                - link "Markets brace for a critical week as geopolitics and macro risks collide" [ref=e308] [cursor=pointer]:
                  - /url: /en-gb/analysis/markets-brace-for-a-critical-week-as-geopolitics-and-macro-risks-collide
                - generic [ref=e309]: Markets face the latest US CPI data and Warsh's testimony before Congress as tensions in the Middle East continue to rise.
                - generic [ref=e310]: 13:09, 13 July 2026
            - generic [ref=e311]:
              - link "US flag, wall street" [ref=e312] [cursor=pointer]:
                - /url: /en-gb/analysis/market-mondays-markets-finally-find-a-reason-to-pull-back
                - img "US flag, wall street" [ref=e314]
              - generic [ref=e315]:
                - 'link "Market Mondays: Markets finally find a reason to pull back" [ref=e316] [cursor=pointer]':
                  - /url: /en-gb/analysis/market-mondays-markets-finally-find-a-reason-to-pull-back
                - generic [ref=e317]: Markets pull back from recent highs as positioning, rate expectations and geopolitics play into the momentum change.
                - generic [ref=e318]: 12:40, 8 June 2026
            - generic [ref=e319]:
              - link "wall street" [ref=e320] [cursor=pointer]:
                - /url: /en-gb/analysis/markets-pause-for-breath-after-a-relentless-rally
                - img "wall street" [ref=e322]
              - generic [ref=e323]:
                - link "Markets pause for breath after a relentless rally" [ref=e324] [cursor=pointer]:
                  - /url: /en-gb/analysis/markets-pause-for-breath-after-a-relentless-rally
                - generic [ref=e325]: Global equities pull away from recent highs as markets reassess the latest moves and the developments in data, geopolitics, and earnings.
                - generic [ref=e326]: 09:15, 5 June 2026
            - generic [ref=e327]:
              - link "Markets enter a correction phase as volatility rises and geopolitical risks re-emerge" [ref=e328] [cursor=pointer]:
                - /url: /en-gb/analysis/markets-enter-a-correction-phase-as-volatility-rises-and-geopolitical-risks-re-emerge
                - img "Markets enter a correction phase as volatility rises and geopolitical risks re-emerge" [ref=e330]
              - generic [ref=e331]:
                - link "Markets enter a correction phase as volatility rises and geopolitical risks re-emerge" [ref=e332] [cursor=pointer]:
                  - /url: /en-gb/analysis/markets-enter-a-correction-phase-as-volatility-rises-and-geopolitical-risks-re-emerge
                - generic [ref=e333]: Markets selloff across the board as investors de-risk and balance their portfolios heading into the weekend
                - generic [ref=e334]: 11:53, 30 January 2026
          - generic [ref=e336]:
            - strong [ref=e338]: Related News
            - generic [ref=e340]:
              - generic [ref=e341]:
                - generic [ref=e342]:
                  - generic [ref=e344]: Newsfile
                  - generic [ref=e345]: 13:04 (UTC), 23 October 2026
                - 'link "Seeking Income Without Written Calls, a Hedge Reset Daily: Tuttle Capital Launches the Innovation 100 Income and Hedge ETF (QQDH)" [ref=e346] [cursor=pointer]':
                  - /url: /en-gb/news/seeking-income-without-written-calls-a-hedge-reset-daily-tuttle
                  - strong [ref=e347]: "Seeking Income Without Written Calls, a Hedge Reset Daily: Tuttle Capital Launches the Innovation 100 Income and Hedge ETF (QQDH)"
              - generic [ref=e348]:
                - generic [ref=e349]:
                  - generic [ref=e351]: Reuters News
                  - generic [ref=e352]: 17:31 (UTC), 22 October 2026
                - link "Moderna falls as social media posts flag potential cancer vaccine data leak" [ref=e353] [cursor=pointer]:
                  - /url: /en-gb/news/moderna-falls-as-social-media-posts-flag-potential-cancer-vaccine
                  - strong [ref=e354]: Moderna falls as social media posts flag potential cancer vaccine data leak
              - generic [ref=e355]:
                - generic [ref=e356]:
                  - generic [ref=e358]: Reuters News
                  - generic [ref=e359]: 20:31 (UTC), 20 October 2026
                - link "Asia Morning Call-Global Markets" [ref=e360] [cursor=pointer]:
                  - /url: /en-gb/news/asia-morning-call-global-markets-2
                  - strong [ref=e361]: Asia Morning Call-Global Markets
              - generic [ref=e362]:
                - generic [ref=e363]:
                  - generic [ref=e364]:
                    - button [ref=e366] [cursor=pointer]
                    - generic [ref=e367]: Reuters News
                  - generic [ref=e368]: 10:30 (UTC), 19 October 2026
                - link "MORNING BID AMERICAS-Wavering waiver?" [ref=e369] [cursor=pointer]:
                  - /url: /en-gb/news/morning-bid-americas-wavering-waiver
                  - strong [ref=e370]: MORNING BID AMERICAS-Wavering waiver?
              - generic [ref=e371]:
                - generic [ref=e372]:
                  - generic [ref=e374]: Reuters News
                  - generic [ref=e375]: 15:42 (UTC), 16 October 2026
                - link "Moderna retreats from 52-week high, wiping out $10 bln in value" [ref=e376] [cursor=pointer]:
                  - /url: /en-gb/news/moderna-retreats-from-52-week-high-wiping-out-10-bln-in
                  - strong [ref=e377]: Moderna retreats from 52-week high, wiping out $10 bln in value
              - generic [ref=e378]:
                - generic [ref=e379]:
                  - generic [ref=e380]:
                    - button [ref=e382] [cursor=pointer]
                    - generic [ref=e383]: Reuters News
                  - generic [ref=e384]: 07:55 (UTC), 16 October 2026
                - link "LIVE MARKETS-STOXX 600 heads for weekly gain" [ref=e385] [cursor=pointer]:
                  - /url: /en-gb/news/live-markets-stoxx-600-heads-for-weekly-gain
                  - strong [ref=e386]: LIVE MARKETS-STOXX 600 heads for weekly gain
              - generic [ref=e387]:
                - generic [ref=e388]:
                  - generic [ref=e389]:
                    - button [ref=e391] [cursor=pointer]
                    - generic [ref=e392]: Reuters News
                  - generic [ref=e393]: 12:35 (UTC), 14 October 2026
                - link "US STOCKS SNAPSHOT-S&P 500 futures turn negative after Sept inflation data" [ref=e394] [cursor=pointer]:
                  - /url: /en-gb/news/us-stocks-snapshot-s-p-500-futures-turn-negative-after-sept-inflation
                  - strong [ref=e395]: US STOCKS SNAPSHOT-S&P 500 futures turn negative after Sept inflation data
              - generic [ref=e396]:
                - generic [ref=e397]:
                  - generic [ref=e399]: CoinDesk
                  - generic [ref=e400]: 09:46 (UTC), 14 October 2026
                - 'link "Live updates: Bitcoin tumbles from near $84,000 ahead of U.S. inflation data" [ref=e401] [cursor=pointer]':
                  - /url: /en-gb/news/live-updates-bitcoin-tumbles-from-near-84-000-ahead-of-u-s
                  - strong [ref=e402]: "Live updates: Bitcoin tumbles from near $84,000 ahead of U.S. inflation data"
              - generic [ref=e403]:
                - generic [ref=e404]:
                  - generic [ref=e405]:
                    - button [ref=e407] [cursor=pointer]
                    - generic [ref=e408]: GlobeNewswire
                  - generic [ref=e409]: 13:00 (UTC), 13 October 2026
                - 'link "DAT: Truckload rates rise in September as diesel tops $6 a gallon" [ref=e410] [cursor=pointer]':
                  - /url: /en-gb/news/dat-truckload-rates-rise-in-september-as-diesel-tops-6
                  - strong [ref=e411]: "DAT: Truckload rates rise in September as diesel tops $6 a gallon"
              - generic [ref=e412]:
                - generic [ref=e413]:
                  - generic [ref=e414]:
                    - button [ref=e416] [cursor=pointer]
                    - generic [ref=e417]: Reuters News
                  - generic [ref=e418]: 11:34 (UTC), 12 October 2026
                - link "US STOCKS-US stock futures steady as oil jumps to two-week high ahead of key earnings" [ref=e419] [cursor=pointer]:
                  - /url: /en-gb/news/us-stocks-us-stock-futures-steady-as-oil-jumps-to-two-week
                  - strong [ref=e420]: US STOCKS-US stock futures steady as oil jumps to two-week high ahead of key earnings
        - complementary [ref=e421]:
          - generic [ref=e422]:
            - generic [ref=e424]:
              - strong [ref=e425]: Related markets
              - generic [ref=e426]: Tracking the stocks, indices, and assets making major moves.
              - generic [ref=e430]:
                - button "Most traded markets" [ref=e431]: Most traded markets
                - button "Top risers" [ref=e432] [cursor=pointer]: Top risers
                - button "Top fallers" [ref=e433] [cursor=pointer]: Top fallers
                - button "Most volatile" [ref=e434] [cursor=pointer]: Most volatile
              - generic [ref=e435]:
                - generic [ref=e437]:
                  - generic [ref=e440]:
                    - link "US Tech 100" [ref=e441] [cursor=pointer]:
                      - /url: /en-gb/markets/indices/us-tech-100-index
                    - generic [ref=e442]: "29023.4"
                  - generic [ref=e445]: 0.1%
                - generic [ref=e452]:
                  - link "Japan 225" [ref=e453] [cursor=pointer]:
                    - /url: /en-gb/markets/indices/japan-225-index
                  - generic [ref=e454]: "62729.0"
                - generic [ref=e459]:
                  - link "US Wall Street 30" [ref=e460] [cursor=pointer]:
                    - /url: /en-gb/markets/indices/us-wall-street-30-index-1
                  - generic [ref=e461]: "52463.7"
                - generic [ref=e466]:
                  - link "Germany 40" [ref=e467] [cursor=pointer]:
                    - /url: /en-gb/markets/indices/germany-40-index-1
                  - generic [ref=e468]: "25399.4"
                - generic [ref=e473]:
                  - link "US 500" [ref=e474] [cursor=pointer]:
                    - /url: /en-gb/markets/indices/sp-500-index
                  - generic [ref=e475]: "7646.6"
            - text: Share prices are indicative and may differ from live market prices.
      - generic [ref=e476]:
        - generic [ref=e477]:
          - heading "User feedback and ratings" [level=2] [ref=e480]
          - generic [ref=e481]:
            - region [ref=e482]:
              - generic [ref=e484]:
                - group [ref=e485]:
                  - link [ref=e486] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e489]: 2025-07-01
                    - strong [ref=e490]: Victor Flemming Nandwa Søder
                    - paragraph [ref=e492]: Great customer service I got to say that. They helped get my account back very fast, after i logged myself out by losing my old email, it was so fast you wouldn’t believe it thank you once again.
                - group [ref=e494]:
                  - link [ref=e495] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e498]: 2025-07-01
                    - strong [ref=e499]: Perry Reineke
                    - paragraph [ref=e501]: I'm learning the basics of stock investing. This platform is clear and pretty good. I've been using it for over 6 months.
                - group [ref=e503]:
                  - link [ref=e504] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e507]: 2025-06-30
                    - strong [ref=e508]: Brigman
                    - paragraph [ref=e510]: Everything worked as expected from the 1 day. I didn’t have to search how to use the platform, it’s intuitive. The support chat was there when I had a tiny issue.
                - group [ref=e512]:
                  - link [ref=e513] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e516]: 2025-06-29
                    - strong [ref=e517]: proinpro
                    - paragraph [ref=e519]: Capital is really great to be used on start, also beginner friendly broker! Great costumer support and it is quick!
                - group [ref=e521]:
                  - link [ref=e522] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e525]: 2025-06-27
                    - strong [ref=e526]: Gio Gvazava
                    - paragraph [ref=e528]: Capital.com has been great for both learning and trading. The app is clean, fast, and packed with useful tools. Customer support has been solid too. Definitely recommended for beginners and active traders alike.
                - group [ref=e530]:
                  - link [ref=e531] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e534]: 2025-06-22
                    - strong [ref=e535]: Douglas
                    - paragraph [ref=e537]: Deposits and withdrawals work without issues. Very low spreads. No noticeable fees. Easy to follow.
                - group [ref=e539]:
                  - link [ref=e540] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e543]: 2025-06-19
                    - strong [ref=e544]: dgogidze7
                    - paragraph [ref=e546]: I would like to express a huge thank you to Evgeniya Logvinovich, customer service manager. For your attention and heartfelt attitude to your clients.❤️
                - group [ref=e548]:
                  - link [ref=e549] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e552]: 2025-06-19
                    - strong [ref=e553]: foobarbeer
                    - paragraph [ref=e555]: I am extremely happy with this broker. Great spreads, good selection of instruments, well coded toolbox.
                - group [ref=e557]:
                  - link [ref=e558] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e561]: 2025-04-16
                    - strong [ref=e562]: LUCAS ONWUCHEKWA
                    - paragraph [ref=e564]: This site is always active and accessible 24hrs, every day
                - group [ref=e566]:
                  - link [ref=e567] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e570]: 2025-05-29
                    - strong [ref=e571]: Casaubon70
                    - paragraph [ref=e573]: Love the TV integration. Makes traders life smooth and comfortable.
                - group [ref=e575]:
                  - link [ref=e576] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e579]: 2025-05-24
                    - strong [ref=e580]: Radioilluminati
                    - paragraph [ref=e582]: I trade every day and Capital is my beloved home. I also create music and you can always feel when something has been created from the heart. Capital has soul!
                - group [ref=e584]:
                  - link [ref=e585] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e588]: 2025-05-20
                    - strong [ref=e589]: GemzT
                    - paragraph [ref=e591]: I’d been paper trading for 2yrs now, went live and this platform is easy for beginners to understand and navigate all important tools to execute all that I learned. Earning now!
                - group [ref=e593]:
                  - link [ref=e594] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e597]: 2025-06-17
                    - strong [ref=e598]: BINSAYYAR
                    - paragraph [ref=e600]: Secure and responsive
                - group [ref=e602]:
                  - link [ref=e603] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e606]: 2025-05-06
                    - strong [ref=e607]: Mahran Rahim Bakhsh Rasool Bakhsh Al Balushi
                    - paragraph [ref=e609]: It's a great app, and it's safe to practice with the demo. Then, when you're ready for the real thing, I'd suggest installing it.
                - group [ref=e611]:
                  - link [ref=e612] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e615]: 2025-04-29
                    - strong [ref=e616]: dmjnoor
                    - paragraph [ref=e618]: This application is perfect.. simple, easy to use, run smoothly and fast and it has an accurate graphics.. be careful to use only one credit card and one bank account to prevent any withdrawal problem.. overnight fees and spread variation will be repaid for you by the next month.. I used many application but this is the best one
                - group [ref=e620]:
                  - link [ref=e621] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e624]: 2025-03-24
                    - strong [ref=e625]: Debbie P
                    - paragraph [ref=e627]: The best trading company I've found so far and so easy to use.
                - group [ref=e629]:
                  - link [ref=e630] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e633]: 2025-11-07
                    - strong [ref=e634]: Neill
                    - paragraph [ref=e636]: Your platform always works and is extremely reliable and now that you have added Alarms to the to the Desktop version, I am very happy
                - group [ref=e638]:
                  - link [ref=e639] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e642]: 2025-02-06
                    - strong [ref=e643]: Nouman Butt
                    - paragraph [ref=e645]: User friendly app & interface and good support team. Funds transfer ease & Leverage is an advantage but crypto is highly risky be responsible of your loss limits and risks appetite.
                - group [ref=e647]:
                  - link [ref=e648] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e651]: 2025-01-30
                    - strong [ref=e652]: Claus-Bernhard Schuetze
                    - paragraph [ref=e654]: Awesome trading platform On both desktop and mobile and u can start with low budget as the contracts can be adjusted and when u have confidence u can start full trading - being integrated in tradingview is absolutely awesome as well
                - group [ref=e656]:
                  - link [ref=e657] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e660]: 2025-04-18
                    - strong [ref=e661]: ROBERT AMBANI
                    - paragraph [ref=e663]: Great platform. Fast deposit and withdrawals
                - group [ref=e665]:
                  - link [ref=e666] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e669]: 2025-08-29
                    - strong [ref=e670]: ERROL CLIVE
                    - paragraph [ref=e672]: Capital.com software is very easy to use and is very informative.
                - group "1 of 21" [ref=e674]:
                  - link "2025-07-01 Victor Flemming Nandwa Søder Great customer service I got to say that. They helped get my account back very fast, after i logged myself out by losing my old email, it was so fast you wouldn’t believe it thank you once again." [ref=e675] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e678]: 2025-07-01
                    - strong [ref=e679]: Victor Flemming Nandwa Søder
                    - paragraph [ref=e681]: Great customer service I got to say that. They helped get my account back very fast, after i logged myself out by losing my old email, it was so fast you wouldn’t believe it thank you once again.
                - group "2 of 21" [ref=e683]:
                  - link "2025-07-01 Perry Reineke I'm learning the basics of stock investing. This platform is clear and pretty good. I've been using it for over 6 months." [ref=e684] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e687]: 2025-07-01
                    - strong [ref=e688]: Perry Reineke
                    - paragraph [ref=e690]: I'm learning the basics of stock investing. This platform is clear and pretty good. I've been using it for over 6 months.
                - group "3 of 21" [ref=e692]:
                  - link "2025-06-30 Brigman Everything worked as expected from the 1 day. I didn’t have to search how to use the platform, it’s intuitive. The support chat was there when I had a tiny issue." [ref=e693] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e696]: 2025-06-30
                    - strong [ref=e697]: Brigman
                    - paragraph [ref=e699]: Everything worked as expected from the 1 day. I didn’t have to search how to use the platform, it’s intuitive. The support chat was there when I had a tiny issue.
                - group [ref=e701]:
                  - link [ref=e702] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e705]: 2025-06-29
                    - strong [ref=e706]: proinpro
                    - paragraph [ref=e708]: Capital is really great to be used on start, also beginner friendly broker! Great costumer support and it is quick!
                - group [ref=e710]:
                  - link [ref=e711] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e714]: 2025-06-27
                    - strong [ref=e715]: Gio Gvazava
                    - paragraph [ref=e717]: Capital.com has been great for both learning and trading. The app is clean, fast, and packed with useful tools. Customer support has been solid too. Definitely recommended for beginners and active traders alike.
                - group [ref=e719]:
                  - link [ref=e720] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e723]: 2025-06-22
                    - strong [ref=e724]: Douglas
                    - paragraph [ref=e726]: Deposits and withdrawals work without issues. Very low spreads. No noticeable fees. Easy to follow.
                - group [ref=e728]:
                  - link [ref=e729] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e732]: 2025-06-19
                    - strong [ref=e733]: dgogidze7
                    - paragraph [ref=e735]: I would like to express a huge thank you to Evgeniya Logvinovich, customer service manager. For your attention and heartfelt attitude to your clients.❤️
                - group [ref=e737]:
                  - link [ref=e738] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e741]: 2025-06-19
                    - strong [ref=e742]: foobarbeer
                    - paragraph [ref=e744]: I am extremely happy with this broker. Great spreads, good selection of instruments, well coded toolbox.
                - group [ref=e746]:
                  - link [ref=e747] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e750]: 2025-04-16
                    - strong [ref=e751]: LUCAS ONWUCHEKWA
                    - paragraph [ref=e753]: This site is always active and accessible 24hrs, every day
                - group [ref=e755]:
                  - link [ref=e756] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e759]: 2025-05-29
                    - strong [ref=e760]: Casaubon70
                    - paragraph [ref=e762]: Love the TV integration. Makes traders life smooth and comfortable.
                - group [ref=e764]:
                  - link [ref=e765] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e768]: 2025-05-24
                    - strong [ref=e769]: Radioilluminati
                    - paragraph [ref=e771]: I trade every day and Capital is my beloved home. I also create music and you can always feel when something has been created from the heart. Capital has soul!
                - group [ref=e773]:
                  - link [ref=e774] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e777]: 2025-05-20
                    - strong [ref=e778]: GemzT
                    - paragraph [ref=e780]: I’d been paper trading for 2yrs now, went live and this platform is easy for beginners to understand and navigate all important tools to execute all that I learned. Earning now!
                - group [ref=e782]:
                  - link [ref=e783] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e786]: 2025-06-17
                    - strong [ref=e787]: BINSAYYAR
                    - paragraph [ref=e789]: Secure and responsive
                - group [ref=e791]:
                  - link [ref=e792] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e795]: 2025-05-06
                    - strong [ref=e796]: Mahran Rahim Bakhsh Rasool Bakhsh Al Balushi
                    - paragraph [ref=e798]: It's a great app, and it's safe to practice with the demo. Then, when you're ready for the real thing, I'd suggest installing it.
                - group [ref=e800]:
                  - link [ref=e801] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e804]: 2025-04-29
                    - strong [ref=e805]: dmjnoor
                    - paragraph [ref=e807]: This application is perfect.. simple, easy to use, run smoothly and fast and it has an accurate graphics.. be careful to use only one credit card and one bank account to prevent any withdrawal problem.. overnight fees and spread variation will be repaid for you by the next month.. I used many application but this is the best one
                - group [ref=e809]:
                  - link [ref=e810] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e813]: 2025-03-24
                    - strong [ref=e814]: Debbie P
                    - paragraph [ref=e816]: The best trading company I've found so far and so easy to use.
                - group [ref=e818]:
                  - link [ref=e819] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e822]: 2025-11-07
                    - strong [ref=e823]: Neill
                    - paragraph [ref=e825]: Your platform always works and is extremely reliable and now that you have added Alarms to the to the Desktop version, I am very happy
                - group [ref=e827]:
                  - link [ref=e828] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e831]: 2025-02-06
                    - strong [ref=e832]: Nouman Butt
                    - paragraph [ref=e834]: User friendly app & interface and good support team. Funds transfer ease & Leverage is an advantage but crypto is highly risky be responsible of your loss limits and risks appetite.
                - group [ref=e836]:
                  - link [ref=e837] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e840]: 2025-01-30
                    - strong [ref=e841]: Claus-Bernhard Schuetze
                    - paragraph [ref=e843]: Awesome trading platform On both desktop and mobile and u can start with low budget as the contracts can be adjusted and when u have confidence u can start full trading - being integrated in tradingview is absolutely awesome as well
                - group [ref=e845]:
                  - link [ref=e846] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e849]: 2025-04-18
                    - strong [ref=e850]: ROBERT AMBANI
                    - paragraph [ref=e852]: Great platform. Fast deposit and withdrawals
                - group [ref=e854]:
                  - link [ref=e855] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e858]: 2025-08-29
                    - strong [ref=e859]: ERROL CLIVE
                    - paragraph [ref=e861]: Capital.com software is very easy to use and is very informative.
                - group [ref=e863]:
                  - link [ref=e864] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e867]: 2025-07-01
                    - strong [ref=e868]: Victor Flemming Nandwa Søder
                    - paragraph [ref=e870]: Great customer service I got to say that. They helped get my account back very fast, after i logged myself out by losing my old email, it was so fast you wouldn’t believe it thank you once again.
                - group [ref=e872]:
                  - link [ref=e873] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e876]: 2025-07-01
                    - strong [ref=e877]: Perry Reineke
                    - paragraph [ref=e879]: I'm learning the basics of stock investing. This platform is clear and pretty good. I've been using it for over 6 months.
                - group [ref=e881]:
                  - link [ref=e882] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e885]: 2025-06-30
                    - strong [ref=e886]: Brigman
                    - paragraph [ref=e888]: Everything worked as expected from the 1 day. I didn’t have to search how to use the platform, it’s intuitive. The support chat was there when I had a tiny issue.
                - group [ref=e890]:
                  - link [ref=e891] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e894]: 2025-06-29
                    - strong [ref=e895]: proinpro
                    - paragraph [ref=e897]: Capital is really great to be used on start, also beginner friendly broker! Great costumer support and it is quick!
                - group [ref=e899]:
                  - link [ref=e900] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e903]: 2025-06-27
                    - strong [ref=e904]: Gio Gvazava
                    - paragraph [ref=e906]: Capital.com has been great for both learning and trading. The app is clean, fast, and packed with useful tools. Customer support has been solid too. Definitely recommended for beginners and active traders alike.
                - group [ref=e908]:
                  - link [ref=e909] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e912]: 2025-06-22
                    - strong [ref=e913]: Douglas
                    - paragraph [ref=e915]: Deposits and withdrawals work without issues. Very low spreads. No noticeable fees. Easy to follow.
                - group [ref=e917]:
                  - link [ref=e918] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e921]: 2025-06-19
                    - strong [ref=e922]: dgogidze7
                    - paragraph [ref=e924]: I would like to express a huge thank you to Evgeniya Logvinovich, customer service manager. For your attention and heartfelt attitude to your clients.❤️
                - group [ref=e926]:
                  - link [ref=e927] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e930]: 2025-06-19
                    - strong [ref=e931]: foobarbeer
                    - paragraph [ref=e933]: I am extremely happy with this broker. Great spreads, good selection of instruments, well coded toolbox.
                - group [ref=e935]:
                  - link [ref=e936] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e939]: 2025-04-16
                    - strong [ref=e940]: LUCAS ONWUCHEKWA
                    - paragraph [ref=e942]: This site is always active and accessible 24hrs, every day
                - group [ref=e944]:
                  - link [ref=e945] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e948]: 2025-05-29
                    - strong [ref=e949]: Casaubon70
                    - paragraph [ref=e951]: Love the TV integration. Makes traders life smooth and comfortable.
                - group [ref=e953]:
                  - link [ref=e954] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e957]: 2025-05-24
                    - strong [ref=e958]: Radioilluminati
                    - paragraph [ref=e960]: I trade every day and Capital is my beloved home. I also create music and you can always feel when something has been created from the heart. Capital has soul!
                - group [ref=e962]:
                  - link [ref=e963] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e966]: 2025-05-20
                    - strong [ref=e967]: GemzT
                    - paragraph [ref=e969]: I’d been paper trading for 2yrs now, went live and this platform is easy for beginners to understand and navigate all important tools to execute all that I learned. Earning now!
                - group [ref=e971]:
                  - link [ref=e972] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e975]: 2025-06-17
                    - strong [ref=e976]: BINSAYYAR
                    - paragraph [ref=e978]: Secure and responsive
                - group [ref=e980]:
                  - link [ref=e981] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e984]: 2025-05-06
                    - strong [ref=e985]: Mahran Rahim Bakhsh Rasool Bakhsh Al Balushi
                    - paragraph [ref=e987]: It's a great app, and it's safe to practice with the demo. Then, when you're ready for the real thing, I'd suggest installing it.
                - group [ref=e989]:
                  - link [ref=e990] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e993]: 2025-04-29
                    - strong [ref=e994]: dmjnoor
                    - paragraph [ref=e996]: This application is perfect.. simple, easy to use, run smoothly and fast and it has an accurate graphics.. be careful to use only one credit card and one bank account to prevent any withdrawal problem.. overnight fees and spread variation will be repaid for you by the next month.. I used many application but this is the best one
                - group [ref=e998]:
                  - link [ref=e999] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e1002]: 2025-03-24
                    - strong [ref=e1003]: Debbie P
                    - paragraph [ref=e1005]: The best trading company I've found so far and so easy to use.
                - group [ref=e1007]:
                  - link [ref=e1008] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e1011]: 2025-11-07
                    - strong [ref=e1012]: Neill
                    - paragraph [ref=e1014]: Your platform always works and is extremely reliable and now that you have added Alarms to the to the Desktop version, I am very happy
                - group [ref=e1016]:
                  - link [ref=e1017] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e1020]: 2025-02-06
                    - strong [ref=e1021]: Nouman Butt
                    - paragraph [ref=e1023]: User friendly app & interface and good support team. Funds transfer ease & Leverage is an advantage but crypto is highly risky be responsible of your loss limits and risks appetite.
                - group [ref=e1025]:
                  - link [ref=e1026] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e1029]: 2025-01-30
                    - strong [ref=e1030]: Claus-Bernhard Schuetze
                    - paragraph [ref=e1032]: Awesome trading platform On both desktop and mobile and u can start with low budget as the contracts can be adjusted and when u have confidence u can start full trading - being integrated in tradingview is absolutely awesome as well
                - group [ref=e1034]:
                  - link [ref=e1035] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e1038]: 2025-04-18
                    - strong [ref=e1039]: ROBERT AMBANI
                    - paragraph [ref=e1041]: Great platform. Fast deposit and withdrawals
                - group [ref=e1043]:
                  - link [ref=e1044] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e1047]: 2025-08-29
                    - strong [ref=e1048]: ERROL CLIVE
                    - paragraph [ref=e1050]: Capital.com software is very easy to use and is very informative.
              - generic:
                - button "Go to last slide" [ref=e1052] [cursor=pointer]
                - button "Next slide" [ref=e1053] [cursor=pointer]
            - paragraph [ref=e1054]: Showing our 4 & 5 star reviews.
          - generic [ref=e1056]:
            - link "4.5" [ref=e1057] [cursor=pointer]:
              - /url: https://www.tradingview.com/broker/Capitalcom/
              - strong [ref=e1060]: "4.5"
            - link "Ratings and Reviews 4.7" [ref=e1063] [cursor=pointer]:
              - /url: https://app.appsflyer.com/id1230088754?cp_device_id=e6dd747c-c3e5-4a3b-a0cd-fa021dd58389&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
              - strong [ref=e1065]: Ratings and Reviews
              - strong [ref=e1067]: "4.7"
            - link "Ratings and Reviews 4.6" [ref=e1070] [cursor=pointer]:
              - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=e6dd747c-c3e5-4a3b-a0cd-fa021dd58389&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
              - strong [ref=e1072]: Ratings and Reviews
              - strong [ref=e1074]: "4.6"
            - link "4.6" [ref=e1077] [cursor=pointer]:
              - /url: https://www.trustpilot.com/review/capital.com
              - strong [ref=e1080]: "4.6"
        - generic [ref=e1084]:
          - generic [ref=e1085]:
            - heading "Ready to join a leading broker?" [level=2] [ref=e1086]
            - generic [ref=e1087]: Join our community of traders worldwide
          - generic [ref=e1088]:
            - button [ref=e1090] [cursor=pointer]
            - generic [ref=e1093]: 1. Create your account
            - generic [ref=e1094]: 2. Make your first deposit
            - generic [ref=e1095]: 3. Start when you’re ready
        - generic [ref=e1097]:
          - paragraph [ref=e1098]:
            - text: Start trading CFDs
            - link "US100" [ref=e1099] [cursor=pointer]:
              - /url: /en-gb/markets/indices/us-tech-100-index
          - generic [ref=e1100]:
            - generic [ref=e1102]: "29021.6"
            - generic [ref=e1104]: "29023.4"
          - button "Get started" [ref=e1105] [cursor=pointer]
          - button "Close sticky trading bar" [ref=e1106] [cursor=pointer]
  - contentinfo [ref=e1108]:
    - generic [ref=e1109]:
      - link [ref=e1110] [cursor=pointer]:
        - /url: /en-gb
        - img [ref=e1111]
      - generic [ref=e1115]:
        - link [ref=e1116] [cursor=pointer]:
          - /url: https://app.appsflyer.com/id1230088754?cp_device_id=e6dd747c-c3e5-4a3b-a0cd-fa021dd58389&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e1117] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=e6dd747c-c3e5-4a3b-a0cd-fa021dd58389&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e1118] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=e6dd747c-c3e5-4a3b-a0cd-fa021dd58389&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
    - generic [ref=e1119]:
      - generic [ref=e1120]:
        - generic [ref=e1121]:
          - generic [ref=e1122]:
            - generic [ref=e1123]: "Country / Region:"
            - button "United Kingdom" [ref=e1124] [cursor=pointer]:
              - generic [ref=e1126]: United Kingdom
          - generic [ref=e1127]: •
          - generic [ref=e1128]:
            - generic [ref=e1129]: "Language:"
            - button "English" [ref=e1130] [cursor=pointer]:
              - generic [ref=e1131]: English
        - generic [ref=e1132]:
          - generic [ref=e1133]: "Also you can contact us:"
          - link "+442030978888" [ref=e1136] [cursor=pointer]:
            - /url: tel:+442030978888
            - strong [ref=e1137]: "+442030978888"
            - strong
          - generic [ref=e1138]: •
          - link "support@capital.com" [ref=e1140] [cursor=pointer]:
            - /url: mailto:support@capital.com
            - strong [ref=e1141]: support@capital.com
      - generic [ref=e1142]:
        - generic [ref=e1143]:
          - strong [ref=e1145]: Trading
          - generic [ref=e1146]:
            - generic [ref=e1147]:
              - generic [ref=e1148]: Trading
              - generic [ref=e1149]:
                - link "Trade CFDs" [ref=e1151] [cursor=pointer]:
                  - /url: /en-gb//ways-to-trade/cfd-trading
                - link "Spread betting" [ref=e1153] [cursor=pointer]:
                  - /url: /en-gb/ways-to-trade/spread-betting
                - link "Get pro account" [ref=e1155] [cursor=pointer]:
                  - /url: /en-gb/professional
                - link "Get demo account" [ref=e1157] [cursor=pointer]:
                  - /url: /en-gb/trading-platforms/demo-account
                - link "1X" [ref=e1159] [cursor=pointer]:
                  - /url: /en-gb/ways-to-trade/1x
                - link "24/5 index CFD trading" [ref=e1161] [cursor=pointer]:
                  - /url: /en-gb/ways-to-trade/24h-trading
            - generic [ref=e1162]:
              - generic [ref=e1163]: Platforms
              - generic [ref=e1164]:
                - link "Mobile app" [ref=e1166] [cursor=pointer]:
                  - /url: /en-gb/trading-platforms/mobile-apps
                - link "Web platform" [ref=e1168] [cursor=pointer]:
                  - /url: /en-gb/trading-platforms/web-platform
            - generic [ref=e1169]:
              - generic [ref=e1170]: Integrations
              - generic [ref=e1171]:
                - link "TradingView" [ref=e1173] [cursor=pointer]:
                  - /url: /en-gb/trading-platforms/trading-view
                - link "MT4" [ref=e1175] [cursor=pointer]:
                  - /url: /en-gb/trading-platforms/mt4
                - link "API access" [ref=e1177] [cursor=pointer]:
                  - /url: /en-gb/trading-platforms/api-development-guide
                - link "AI Integration" [ref=e1179] [cursor=pointer]:
                  - /url: /en-gb/trading-platforms/ai-integration
            - generic [ref=e1180]:
              - generic [ref=e1181]: Learn
              - generic [ref=e1182]:
                - link "Trading strategies" [ref=e1184] [cursor=pointer]:
                  - /url: /en-gb/learn/trading-strategies
                - link "Technical analysis" [ref=e1186] [cursor=pointer]:
                  - /url: /en-gb/learn/technical-analysis
                - link "Trading psychology" [ref=e1188] [cursor=pointer]:
                  - /url: /en-gb/learn/trading-psychology
                - link "All resources" [ref=e1190] [cursor=pointer]:
                  - /url: /en-gb/learn
                - link "Market guides" [ref=e1192] [cursor=pointer]:
                  - /url: /en-gb/learn/market-guides
                - link "Glossary" [ref=e1194] [cursor=pointer]:
                  - /url: /en-gb/learn/glossary
                - link "IPO Trading" [ref=e1196] [cursor=pointer]:
                  - /url: /en-gb/learn/ipo
        - generic [ref=e1197]:
          - strong [ref=e1199]: Markets
          - generic [ref=e1200]:
            - generic [ref=e1201]:
              - generic [ref=e1202]: Our markets
              - generic [ref=e1203]:
                - link "Markets overview" [ref=e1205] [cursor=pointer]:
                  - /url: /en-gb/markets
                - link "Shares" [ref=e1207] [cursor=pointer]:
                  - /url: /en-gb/markets/shares
                - link "Forex" [ref=e1209] [cursor=pointer]:
                  - /url: /en-gb/markets/forex
                - link "Indices" [ref=e1211] [cursor=pointer]:
                  - /url: /en-gb/markets/indices
                - link "Commodities" [ref=e1213] [cursor=pointer]:
                  - /url: /en-gb/markets/commodities
                - link "Bonds" [ref=e1215] [cursor=pointer]:
                  - /url: /en-gb/markets/bonds
                - link "Interest rates" [ref=e1217] [cursor=pointer]:
                  - /url: /en-gb/markets/interest-rates
            - generic [ref=e1218]:
              - generic [ref=e1219]: Market info
              - generic [ref=e1220]:
                - link "Market analysis" [ref=e1222] [cursor=pointer]:
                  - /url: /en-gb/analysis
                - link "Markets pricing" [ref=e1224] [cursor=pointer]:
                  - /url: /en-gb//about-us/how-our-markets-are-priced
        - link "Pricing" [ref=e1227] [cursor=pointer]:
          - /url: /en-gb/ways-to-trade/fees-and-charges
          - strong [ref=e1228]: Pricing
        - generic [ref=e1229]:
          - strong [ref=e1231]: About
          - generic [ref=e1232]:
            - generic [ref=e1233]:
              - generic [ref=e1234]: Who we are
              - generic [ref=e1235]:
                - link "Company" [ref=e1237] [cursor=pointer]:
                  - /url: /en-gb/about-us
                - link "Our offices" [ref=e1239] [cursor=pointer]:
                  - /url: /en-gb/about-us/our-offices
                - link "Press centre" [ref=e1241] [cursor=pointer]:
                  - /url: /en-gb/media-centre
                - link "Investor Relations" [ref=e1243] [cursor=pointer]:
                  - /url: /en-gb/about-us/investor-relations
                - link "Is capital.com safe?" [ref=e1245] [cursor=pointer]:
                  - /url: /en-gb/security-measures
                - link "Our business model" [ref=e1247] [cursor=pointer]:
                  - /url: /en-gb/about-us/how-capital-makes-money
            - generic [ref=e1248]:
              - generic [ref=e1249]: Work with us
              - generic [ref=e1250]:
                - link "Careers" [ref=e1252] [cursor=pointer]:
                  - /url: /en-gb/about-us/careers
                - link "Partnerships" [ref=e1254] [cursor=pointer]:
                  - /url: /en-gb/partnerships
            - generic [ref=e1255]:
              - generic [ref=e1256]: Help
              - generic [ref=e1257]:
                - link "Help centre" [ref=e1259] [cursor=pointer]:
                  - /url: /en-gb/help
                - link "Client vulnerability" [ref=e1261] [cursor=pointer]:
                  - /url: /en-gb/help/client-vulnerability
                - link "Contact us" [ref=e1263] [cursor=pointer]:
                  - /url: /en-gb/contact-us
            - generic [ref=e1264]:
              - generic [ref=e1265]: Legal
              - generic [ref=e1266]:
                - link "Terms & policies" [ref=e1268] [cursor=pointer]:
                  - /url: /en-gb/terms-and-policies
                - link "Complaints" [ref=e1270] [cursor=pointer]:
                  - /url: /en-gb/help/complaints
    - generic [ref=e1272]:
      - paragraph [ref=e1273]: Risk warning
      - paragraph [ref=e1274]:
        - strong [ref=e1275]: All Trading involves risk.
        - text: Spread bets and CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage.
        - strong [ref=e1276]: 65% of retail investor accounts lose money when trading spread bets and CFDs with this provider
        - text: . You should consider whether you understand how spread bets and CFDs work and whether you can afford to take the high risk of losing your money. Professional clients can lose more than they deposit. Please refer to our
        - link "Risk Disclosure Statement" [ref=e1277] [cursor=pointer]:
          - /url: https://capital.com/risk-disclosure-statement-fca
      - paragraph [ref=e1278]:
        - text: 1X is a non-leveraged CFD. It is a derivative, and is therefore a complex product. The value of your investment can go down as well as up, and you may get back less than you invest.
        - text: Crypto Derivatives are not available to Retail clients registered with Capital Com (UK) Ltd.
        - text: The value of shares and ETFs bought through a share dealing account can fall as well as rise, which could mean getting back less than you originally put in. Past performance is no guarantee of future results.
        - text: The information contained herein is not intended for distribution to residents in any country where such distribution or use would contravene any local law or regulatory requirement.
      - paragraph [ref=e1279]
      - paragraph [ref=e1280]: Capital Com (UK) Limited (“CCUK”) is registered in England and Wales with company registration number 10506220. CCUK is Authorised and regulated by the Financial Conduct Authority (“FCA”), under registration number 793714.
    - generic [ref=e1281]:
      - paragraph [ref=e1282]: © 2026 Capital Com (UK) Limited
      - generic [ref=e1283]:
        - link "Sitemap" [ref=e1284] [cursor=pointer]:
          - /url: /en-gb/sitemap
        - link "Cookie settings" [ref=e1285] [cursor=pointer]:
          - /url: ""
        - link "Clients Funds" [ref=e1286] [cursor=pointer]:
          - /url: /en-gb/about-us/what-capital-does-with-your-money
        - link "Terms and Policies" [ref=e1287] [cursor=pointer]:
          - /url: /en-gb/terms-and-policies
        - link "Complaints Procedure (CCUK)" [ref=e1288] [cursor=pointer]:
          - /url: /en-gb/help/complaints
  - button [ref=e1289] [cursor=pointer]
  - alert [ref=e1291]: Trade US Tech 100 - US100 CFD
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