# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cta/generated.cta.spec.js >> tradeBitcoin page | tradePolkadotSharesLink | tradePolkadotSharesLink
- Location: tests/cta/generated.cta.spec.js:40:7

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Matcher error: received value must not be null nor undefined

Received has value: null
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e7]:
      - text: CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage.
      - generic [ref=e8]:
        - strong [ref=e9]: 79.75% of retail investor accounts lose money when trading CFDs with this provider.
        - text: You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.
    - generic [ref=e11]:
      - link [ref=e12] [cursor=pointer]:
        - /url: /en-int
        - img [ref=e13]
      - generic [ref=e18]:
        - navigation [ref=e19]:
          - button "Trading" [ref=e20]:
            - button "Trading" [ref=e21]:
              - generic [ref=e22]: Trading
          - button "Markets" [ref=e23]:
            - button "Markets" [ref=e24]:
              - generic [ref=e25]: Markets
          - link "Pricing" [ref=e28] [cursor=pointer]:
            - /url: /en-int/ways-to-trade/fees-and-charges
          - button "About" [ref=e29]:
            - button "About" [ref=e30]:
              - generic [ref=e31]: About
        - button "en" [ref=e32] [cursor=pointer]:
          - generic [ref=e34]: en
      - generic [ref=e36]:
        - button "Log In" [ref=e37] [cursor=pointer]: Log In
        - button "Open account" [ref=e38] [cursor=pointer]: Open account
  - generic [ref=e39]:
    - paragraph [ref=e42]:
      - generic [ref=e43]:
        - link "Home" [ref=e44] [cursor=pointer]:
          - /url: /en-int
        - text: •
      - generic [ref=e45]:
        - link "All resources" [ref=e46] [cursor=pointer]:
          - /url: /en-int/learn
        - text: •
      - generic [ref=e47]:
        - link "Market guides" [ref=e48] [cursor=pointer]:
          - /url: /en-int/learn/market-guides
        - text: •
      - text: What is bitcoin and how to trade it
    - generic [ref=e49]:
      - generic [ref=e51]:
        - main [ref=e52]:
          - generic [ref=e54]:
            - generic [ref=e55]:
              - heading "What is Bitcoin? A trader’s guide" [level=1] [ref=e57]
              - generic [ref=e60]:
                - button "share on Twitter" [ref=e61] [cursor=pointer]
                - button "share on Facebook" [ref=e62] [cursor=pointer]
                - button "share on Linkedin" [ref=e63] [cursor=pointer]
                - button "Copy the url of the current page." [ref=e64] [cursor=pointer]:
                  - button "Copy the url of the current page." [ref=e65]
            - figure [ref=e66]
          - generic [ref=e69]:
            - paragraph [ref=e70]: Learn all about Bitcoin and the BTC price history, including how it works, and how to trade BTC/USD via CFDs.
            - paragraph [ref=e71]:
              - link "Go to market page" [ref=e72] [cursor=pointer]:
                - /url: /en-int/markets/cryptocurrencies/bitcoin-to-us-dollar-chart
          - generic [ref=e74]:
            - heading "What is Bitcoin?" [level=2] [ref=e75]
            - paragraph [ref=e76]: Bitcoin (BTC) is the first-ever cryptocurrency, created in 2009 by an anonymous person, or group, known as Satoshi Nakamoto. BTC runs on a decentralised, peer-to-peer network called Bitcoin, where users can send and receive digital currency without intermediaries like governments or banks.
            - paragraph [ref=e77]:
              - text: As the first cryptocurrency, BTC introduced blockchain technology, a distributed ledger enforced by a network of computers, which ensures the security and integrity of transactions. Bitcoin's protocol limits its total supply to 21 million BTC, creating a sense of scarcity akin to precious metals like
              - link "gold" [ref=e78] [cursor=pointer]:
                - /url: /en-int/markets/commodities/gold-spot-commodity
              - text: .
            - paragraph [ref=e79]: Bitcoin serves both as a medium of exchange and a store of value. Its decentralised nature and finite supply have led many to view it as ‘digital gold.’ Over the years, Bitcoin has paved the way for thousands of alternative cryptocurrencies, commonly referred to as altcoins.
            - paragraph [ref=e80]: As of December 2024, BTC consistently ranks as the largest cryptocurrency by market capitalisation.
          - generic [ref=e82]:
            - 'heading "Bitcoin vs Bitcoin Cash: what are the key differences?" [level=2] [ref=e83]'
            - paragraph [ref=e84]: Bitcoin Cash is a 2017 Bitcoin hard fork, meaning a split in the blockchain due to incompatible rule changes, that resulted from scalability disagreements in the Bitcoin community regarding block size.
            - paragraph [ref=e85]:
              - text: Here’s an overview of the key similarities and differences between
              - link "bitcoin cash (BCH)" [ref=e86] [cursor=pointer]:
                - /url: /en-int/markets/cryptocurrencies/bitcoin-cash-to-us-dollar-chart
              - text: and
              - link "BTC" [ref=e87] [cursor=pointer]:
                - /url: /en-int/markets/cryptocurrencies/bitcoin-to-us-dollar-chart
              - text: ":"
            - table [ref=e89]:
              - rowgroup [ref=e90]:
                - row "Feature Bitcoin Bitcoin Cash" [ref=e91]:
                  - cell "Feature" [ref=e92]:
                    - paragraph [ref=e93]:
                      - strong [ref=e94]: Feature
                  - cell "Bitcoin" [ref=e95]:
                    - paragraph [ref=e96]:
                      - strong [ref=e97]: Bitcoin
                  - cell "Bitcoin Cash" [ref=e98]:
                    - paragraph [ref=e99]:
                      - strong [ref=e100]: Bitcoin Cash
                - row "Origin Created by Satoshi Nakamoto in 2009 A hard fork of Bitcoin, created in 2017" [ref=e101]:
                  - cell "Origin" [ref=e102]:
                    - paragraph [ref=e103]:
                      - strong [ref=e104]: Origin
                  - cell "Created by Satoshi Nakamoto in 2009" [ref=e105]:
                    - paragraph [ref=e106]: Created by Satoshi Nakamoto in 2009
                  - cell "A hard fork of Bitcoin, created in 2017" [ref=e107]:
                    - paragraph [ref=e108]: A hard fork of Bitcoin, created in 2017
                - row "Block size limit 1 MB Initially 8 MB, now up to 32 MB" [ref=e109]:
                  - cell "Block size limit" [ref=e110]:
                    - paragraph [ref=e111]:
                      - strong [ref=e112]: Block size limit
                  - cell "1 MB" [ref=e113]:
                    - paragraph [ref=e114]: 1 MB
                  - cell "Initially 8 MB, now up to 32 MB" [ref=e115]:
                    - paragraph [ref=e116]: Initially 8 MB, now up to 32 MB
                - row "Transactions (per second) 7 Roughly 116" [ref=e117]:
                  - cell "Transactions (per second)" [ref=e118]:
                    - paragraph [ref=e119]:
                      - strong [ref=e120]: Transactions (per second)
                  - cell "7" [ref=e121]:
                    - paragraph [ref=e122]: "7"
                  - cell "Roughly 116" [ref=e123]:
                    - paragraph [ref=e124]: Roughly 116
                - row "Transaction fees More expensive due to network congestion Cheaper due to larger blocks" [ref=e125]:
                  - cell "Transaction fees" [ref=e126]:
                    - paragraph [ref=e127]:
                      - strong [ref=e128]: Transaction fees
                  - cell "More expensive due to network congestion" [ref=e129]:
                    - paragraph [ref=e130]: More expensive due to network congestion
                  - cell "Cheaper due to larger blocks" [ref=e131]:
                    - paragraph [ref=e132]: Cheaper due to larger blocks
                - row "Maximum token supply 21 million BTC 21 million BCH" [ref=e133]:
                  - cell "Maximum token supply" [ref=e134]:
                    - paragraph [ref=e135]:
                      - strong [ref=e136]: Maximum token supply
                  - cell "21 million BTC" [ref=e137]:
                    - paragraph [ref=e138]: 21 million BTC
                  - cell "21 million BCH" [ref=e139]:
                    - paragraph [ref=e140]: 21 million BCH
                - row "Consensus mechanism Proof-of-work (PoW) using SHA–256 algorithm Proof-of-work (PoW) using SHA–256 algorithm" [ref=e141]:
                  - cell "Consensus mechanism" [ref=e142]:
                    - paragraph [ref=e143]:
                      - strong [ref=e144]: Consensus mechanism
                  - cell "Proof-of-work (PoW) using SHA–256 algorithm" [ref=e145]:
                    - paragraph [ref=e146]: Proof-of-work (PoW) using SHA–256 algorithm
                  - cell "Proof-of-work (PoW) using SHA–256 algorithm" [ref=e147]:
                    - paragraph [ref=e148]: Proof-of-work (PoW) using SHA–256 algorithm
                - 'row "Market capitalisation #1 cryptocurrency by market cap Often ranks in the top #20" [ref=e149]':
                  - cell "Market capitalisation" [ref=e150]:
                    - paragraph [ref=e151]:
                      - strong [ref=e152]: Market capitalisation
                  - cell "#1 cryptocurrency by market cap" [ref=e153]:
                    - paragraph [ref=e154]: "#1 cryptocurrency by market cap"
                  - 'cell "Often ranks in the top #20" [ref=e155]':
                    - paragraph [ref=e156]: "Often ranks in the top #20"
                - row "Philosophy Decentralised money, store of value, ‘digital gold’ Peer-to-peer electronic cash, used for payments." [ref=e157]:
                  - cell "Philosophy" [ref=e158]:
                    - paragraph [ref=e159]:
                      - strong [ref=e160]: Philosophy
                  - cell "Decentralised money, store of value, ‘digital gold’" [ref=e161]:
                    - paragraph [ref=e162]: Decentralised money, store of value, ‘digital gold’
                  - cell "Peer-to-peer electronic cash, used for payments." [ref=e163]:
                    - paragraph [ref=e164]: Peer-to-peer electronic cash, used for payments.
                - row "Development focus Layer 2 solutions, such as lightning network On-chain scaling via larger blocks" [ref=e165]:
                  - cell "Development focus" [ref=e166]:
                    - paragraph [ref=e167]:
                      - strong [ref=e168]: Development focus
                  - cell "Layer 2 solutions, such as lightning network" [ref=e169]:
                    - paragraph [ref=e170]: Layer 2 solutions, such as lightning network
                  - cell "On-chain scaling via larger blocks" [ref=e171]:
                    - paragraph [ref=e172]: On-chain scaling via larger blocks
            - paragraph [ref=e173]:
              - text: Beyond
              - strong [ref=e174]: Bitcoin Cash
              - text: ", other notable hard forks related to the original Bitcoin blockchain include Bitcoin SV, Bitcoin Classic and Bitcoin Gold."
            - paragraph [ref=e175]:
              - strong [ref=e176]: Discover more about bitcoin cash (BCH)
              - text: ", including its origins, how it works, its price history and trading hours – read our"
              - link "comprehensive trader’s guide to bitcoin cash (BCH)" [ref=e177] [cursor=pointer]:
                - /url: /en-int/learn/market-guides/trade-bitcoin-cash
              - text: .
          - generic [ref=e179]:
            - heading "How does Bitcoin work?" [level=2] [ref=e180]
            - paragraph [ref=e181]:
              - text: Bitcoin is a blockchain, a publicly accessible digital ledger, and its native cryptocurrency is called
              - link "BTC" [ref=e182] [cursor=pointer]:
                - /url: /en-int/markets/cryptocurrencies/bitcoin-to-us-dollar-chart
              - text: A decentralised network of computers called nodes record and verify all transactions to its distributed ledger to ensure transparency and immutability. This means that once a transaction is recorded, it can’t be altered or deleted.
            - paragraph [ref=e183]: Proof-of-work (PoW) is the consensus mechanism on Bitcoin. Consensus mechanisms are a set of rules which govern and maintain a blockchain’s integrity. With PoW blockchains like Bitcoin, users called ‘miners’ validate transactions and secure the network. New BTC is generated every time a miner creates a new block, which they’re rewarded as an incentive.
            - paragraph [ref=e184]: "Here's how the Bitcoin mining process works:"
            - list [ref=e185]:
              - listitem [ref=e186]:
                - text: •
                - paragraph [ref=e187]:
                  - strong [ref=e188]: Transaction initiation
                  - text: ": A user initiates a transaction by sending BTC from their wallet to another user's wallet. This transaction is broadcast to the Bitcoin network, where it joins a pool of unconfirmed transactions."
              - listitem [ref=e189]:
                - text: •
                - paragraph [ref=e190]:
                  - strong [ref=e191]: Mining and validation
                  - text: ": Miners collect these unconfirmed transactions and assemble them into a block. Using specialised hardware, miners compete to solve a complex mathematical puzzle associated with the block. This involves finding a unique value that – when hashed along with the block's data – produces a hash value that meets the network's difficulty criteria."
              - listitem [ref=e192]:
                - text: •
                - paragraph [ref=e193]:
                  - strong [ref=e194]: Block addition
                  - text: ": The first miner to solve the puzzle broadcasts the newly mined block to the network. Other nodes verify the validity of the block and the transactions within it. If accepted, the block is added to the blockchain."
              - listitem [ref=e195]:
                - text: •
                - paragraph [ref=e196]:
                  - strong [ref=e197]: Reward and fees
                  - text: ": The successful miner is rewarded with newly minted bitcoins, known as the block reward, as well as any transaction fees included in the block. This provides an incentive for miners to continue validating transactions."
              - listitem [ref=e198]:
                - text: •
                - paragraph [ref=e199]:
                  - strong [ref=e200]: Confirmation
                  - text: ": The transaction receives confirmations as new blocks are added on top of the block containing it. More confirmations increase the security and finality of the transaction."
            - paragraph [ref=e201]:
              - text: Bitcoin has a fixed supply cap of 21 million BTC, embedded into its protocol to create scarcity and prevent inflation. ‘
              - strong [ref=e202]: Bitcoin halving
              - text: ’ occurs approximately every four years, reducing the block reward for miners by half. This could influence long-term price rises due to decreasing mining supply, due to potential for overdependence on secondary markets.
            - paragraph [ref=e203]:
              - text: There is no central authority controlling the Bitcoin network. Instead, it’s maintained by a global community of users, miners and developers who adhere to the protocol's rules. Altering the blockchain would require overwhelming the majority of the network's computational power, which helps make
              - link "BTC" [ref=e204] [cursor=pointer]:
                - /url: /en-int/markets/cryptocurrencies/bitcoin-to-us-dollar-chart
              - text: more resistant to censorship and fraud – relative to traditional financial systems.
          - generic [ref=e206]:
            - heading "What is the BTC price history?" [level=2] [ref=e207]
            - paragraph [ref=e208]:
              - text: The
              - link "BTC price" [ref=e209] [cursor=pointer]:
                - /url: /en-int/markets/cryptocurrencies/bitcoin-to-us-dollar-chart
              - text: history tells a tale of significant volatility, influenced by technological advancements, regulatory developments and market sentiment since its 2009 launch.
            - paragraph [ref=e210]: Bitcoin was relatively worthless in its early days, traded among enthusiasts for fractions of a cent. In 2010, the famous ‘Bitcoin Pizza Day’ marked the first real-world transaction, when 10,000 BTC were exchanged for two pizzas.
            - paragraph [ref=e211]:
              - text: Mainstream attention escalated when BTC surpassed $1,000 for the first time in December 2013, influenced by media coverage and growing adoption. But this momentum was short-lived when hackers stole 850,000 BTC from Mt Gox – which was the largest BTC exchange at the time –leading to a significant price drop, and decreased market
              - link "sentiment" [ref=e212] [cursor=pointer]:
                - /url: /en-int/learn/trading-psychology/sentiment-in-trading
              - text: .
          - generic [ref=e214]:
            - generic [ref=e215]:
              - button "1m" [ref=e216]
              - button "5m" [ref=e217] [cursor=pointer]
              - button "15m" [ref=e218] [cursor=pointer]
              - button "30m" [ref=e219] [cursor=pointer]
              - button "1h" [ref=e220] [cursor=pointer]
              - button "4h" [ref=e221] [cursor=pointer]
              - button "1d" [ref=e222] [cursor=pointer]
              - button "1w" [ref=e223] [cursor=pointer]
            - img [ref=e225]
          - paragraph [ref=e228]:
            - strong [ref=e229]: Past performance isn’t a reliable indicator of future results
          - generic [ref=e231]:
            - paragraph [ref=e232]: The BTC price accelerated in 2017 during the ‘crypto boom’ – rising to $20,000 in December as the cryptocurrency market experienced its first major bull run. Retail trader enthusiasm contributed to the boom, fueled by the rise of initial coin offerings (ICOs) and widespread media coverage. The CME and CBOE also launched Bitcoin futures trading in December 2017, introducing legitimate crypto derivatives products to the US market. The bubble burst in early 2018, leading to a prolonged bear market known as the ‘crypto winter,’ with Bitcoin's price dropping below $4,000 by the end of the year.
            - paragraph [ref=e233]: The onset of the COVID-19 pandemic in 2020 triggered global economic uncertainty, and many traders sought alternatives to traditional financial markets. Institutional adoption increased, with companies like MicroStrategy, Square and Tesla pouring billions into BTC – which climbed to a high of around $64,000 in April 2021.
            - paragraph [ref=e234]: Bitcoin (BTC) faced significant headwinds in 2021 as macroeconomic factors such as rising inflation, interest rate hikes by central banks and geopolitical tensions led to a broader market downturn. High-profile events like the bankruptcy of crypto exchange FTX eroded trader confidence, causing Bitcoin's price to fall below $20,000 in June 2022.
            - paragraph [ref=e235]: By 2023, the market showed signs of stabilising. Institutional traders cautiously returned, and technological advancements like the Lightning Network improved transaction speeds and efficiency. These developments helped restore some confidence in the cryptocurrency market.
            - paragraph [ref=e236]: "Now let’s look at 2024 in a little more detail:"
            - list [ref=e237]:
              - listitem [ref=e238]:
                - text: •
                - paragraph [ref=e239]:
                  - strong [ref=e240]: January 2024
                  - text: ": The U.S. Securities and Exchange Commission (SEC) approved 11 spot bitcoin ETFs, marking a significant milestone for institutional adoption. This approval provided regulated avenues for traders to gain exposure to bitcoin, boosting market confidence."
              - listitem [ref=e241]:
                - text: •
                - paragraph [ref=e242]:
                  - strong [ref=e243]: April 2024
                  - text: ": BTC underwent its latest"
                  - link "halving event" [ref=e244] [cursor=pointer]:
                    - /url: /en-int/learn/market-guides/bitcoin-halving
                  - text: ", reducing the mining reward from 6.25 BTC to 3.125 BTC. Historically, halving events have led to price increases due to decreased supply. However, the 2024 halving did not immediately trigger a significant price surge, suggesting that market dynamics may be evolving."
              - listitem [ref=e245]:
                - text: •
                - paragraph [ref=e246]:
                  - strong [ref=e247]: November 2024
                  - text: ": BTC achieved a new milestone by surpassing $90,000 for the first time on November 14. The momentum continued as it reached $94,800 on November 20 and surged to around $99,655.50 by November 22. This rapid appreciation intensified speculation about when bitcoin would hit the $100,000 mark, drawing significant media attention and trader interest."
          - generic [ref=e249]:
            - heading "Which factors might influence the BTC live price?" [level=2] [ref=e250]
            - paragraph [ref=e251]:
              - text: The
              - link "BTC live price" [ref=e252] [cursor=pointer]:
                - /url: /en-int/markets/cryptocurrencies/bitcoin-to-us-dollar-chart
              - text: "is influenced by factors unique to the Bitcoin blockchain, cryptocurrency market and broader economic trends. Here are some key elements that could contribute to its price movements:"
            - heading "Halving events and supply scarcity" [level=3] [ref=e253]
            - paragraph [ref=e254]: BTC has a fixed supply cap of 21 million coins. Approximately every four years, the reward for mining new blocks is halved in an event known as Bitcoin halving, which reduces the rate at which new bitcoins are mined, increasing scarcity.
            - paragraph [ref=e255]: Historically, halving events have often preceded significant price surges, as – if BTC demand continues to grow as its supply shrinks – it could push BTC higher.*
            - paragraph [ref=e256]:
              - strong [ref=e257]: "*Past performance is not an indicator of future results."
            - heading "Technological advancements and network upgrades" [level=3] [ref=e258]
            - paragraph [ref=e259]: While Bitcoin's core protocol remains relatively stable, developments aimed at improving scalability and transaction efficiency can possibly impact its price.
            - paragraph [ref=e260]:
              - text: Technologies like the Lightning Network accelerate transaction-speeds and minimise fees, which enhances Bitcoin's appeal as a medium of exchange. Conversely, unsuccessful implementations or a lack of adoption could decrease network usage and demand, influencing the
              - link "BTC price" [ref=e261] [cursor=pointer]:
                - /url: /en-int/markets/cryptocurrencies/bitcoin-to-us-dollar-chart
              - text: to decrease.
            - heading "Macroeconomic factors and economic uncertainty" [level=3] [ref=e262]
            - paragraph [ref=e263]:
              - text: Bitcoin is often viewed as a hedge against
              - link "inflation" [ref=e264] [cursor=pointer]:
                - /url: /en-int/learn/glossary/inflation-definition
              - text: and economic instability. During periods of economic uncertainty, currency devaluation, or geopolitical tensions, traders may turn to Bitcoin as a store of value, increasing demand.
            - paragraph [ref=e265]: Conversely, factors such as high-interest rates, quantitative tightening policies and increased market confidence in traditional financial systems – like the stock market – could push some traders away from cryptocurrencies like BTC.
            - heading "Market sentiment and media influence" [level=3] [ref=e266]
            - paragraph [ref=e267]:
              - text: Public perception and media coverage may cause
              - link "BTC price" [ref=e268] [cursor=pointer]:
                - /url: /en-int/markets/cryptocurrencies/bitcoin-to-us-dollar-chart
              - text: fluctuations. Positive news can boost market sentiment and drive prices higher, such as endorsements from influential figures and announcements of major companies accepting BTC.
            - paragraph [ref=e269]: Conversely, negative news, such as security breaches, fraud or critical remarks from regulators and public figures may erode confidence and influence BTC price decreases.
            - heading "Mining dynamics and energy consumption" [level=3] [ref=e270]
            - paragraph [ref=e271]: Bitcoin's proof-of-work (PoW) consensus mechanism requires substantial computational power and energy. Changes in mining difficulty, hash rate and energy costs can affect miners' profitability and network security.
            - paragraph [ref=e272]:
              - text: Events like mining bans in countries – such as China – and shifts towards renewable energy sources can lead to lower hash rates, which could erode trader confidence. Environmental concerns regarding Bitcoin's energy consumption might also affect trader perception and could lead to regulatory actions impacting the
              - link "BTC price" [ref=e273] [cursor=pointer]:
                - /url: /en-int/markets/cryptocurrencies/bitcoin-to-us-dollar-chart
              - text: .
            - paragraph [ref=e274]:
              - strong [ref=e275]: Learn more about the potential future of Bitcoin prices
            - paragraph [ref=e276]:
              - text: Discover price targets and analysts’ commentary in our guide to
              - link "BTC price predictions" [ref=e277] [cursor=pointer]:
                - /url: /en-int/analysis/bitcoin-price-prediction-2030-2050
              - text: .
          - generic [ref=e279]:
            - heading "What are the BTC trading hours?" [level=2] [ref=e280]
            - paragraph [ref=e281]: Bitcoin (BTC) runs on a decentralised blockchain network that is active 24 hours a day, seven days a week. This means you can trade BTC at any time, including weekends and holidays.
            - list [ref=e282]:
              - listitem [ref=e283]:
                - text: •
                - paragraph [ref=e284]:
                  - strong [ref=e285]: Cryptocurrency exchanges
                  - text: – many exchanges facilitate 24/7 trading, allowing for continuous market participation.
              - listitem [ref=e286]:
                - text: •
                - paragraph [ref=e287]:
                  - strong [ref=e288]: Online trading platforms
                  - text: – some reliable and trusted brokerages provide BTC trading via CFDs.
            - paragraph [ref=e289]:
              - text: If you choose to trade CFDs, you can follow the BTC performance live in US dollars with our comprehensive
              - link "BTC/USD price chart" [ref=e290] [cursor=pointer]:
                - /url: /en-int/markets/cryptocurrencies/bitcoin-to-us-dollar-chart
              - text: .
            - paragraph [ref=e291]:
              - text: Alternatively, you can check out our
              - link "ETH/BTC" [ref=e292] [cursor=pointer]:
                - /url: /en-int/markets/cryptocurrencies/ethereum-to-bitcoin-chart
              - text: ", BTC/GBP and"
              - link "BTC/EUR price charts" [ref=e293] [cursor=pointer]:
                - /url: /en-int/markets/cryptocurrencies/bitcoin-to-euro-chart-1
              - text: .
            - paragraph [ref=e294]: Monitoring the cryptocurrency’s activity can help you to keep an eye out for any key fundamental or technical events that may affect short-term movements in its value.
            - paragraph [ref=e295]:
              - link "Create an account" [ref=e296] [cursor=pointer]:
                - /url: /trading/signup
              - link "Open a demo account" [ref=e297] [cursor=pointer]:
                - /url: /trading/signup?go=demo
          - generic [ref=e299]:
            - heading "How to trade BTC" [level=2] [ref=e300]
            - paragraph [ref=e301]: Bitcoin (BTC) is a cryptocurrency, meaning that it can be traded directly on a cryptocurrency exchange or through peer-to-peer transactions. Traders may also choose to trade BTC via a derivative, a financial product that takes (or ‘derives’) its value from the price of the underlying asset.
            - paragraph [ref=e302]:
              - text: You could use a
              - link "contract for difference, or CFD" [ref=e303] [cursor=pointer]:
                - /url: /en-int/ways-to-trade/cfd-trading
              - text: ", to trade on the price of BTC pairs. A CFD is a contract, typically between a broker and a trader, where one party agrees to pay the other the difference in the value of a security, between the opening and closing of the trade."
            - paragraph [ref=e304]:
              - text: You can use
              - link "CFDs" [ref=e305] [cursor=pointer]:
                - /url: /en-int/ways-to-trade/cfd-trading/what-is-cfd-trading
              - text: to trade on whether you think an BTC pair will rise (called ‘going long’) or fall (‘going short’). CFDs give you access to leverage, allowing larger positions with a relatively small outlay. This amplifies your potential profits, but also your potential losses, making CFD trading risky.
            - paragraph [ref=e306]:
              - text: You can learn more about trading
              - link "cryptocurrencies" [ref=e307] [cursor=pointer]:
                - /url: /en-int/markets/cryptocurrencies
              - text: with Capital.com in our comprehensive
              - link "guide to cryptocurrency trading" [ref=e308] [cursor=pointer]:
                - /url: https://capital.com/en-int/learn/market-guides/what-is-cryptocurrency-trading
              - text: .
            - paragraph [ref=e309]:
              - text: Aside from CFDs, you can also trade BTC pairs through instruments like futures, options, ETFs and mutual funds. Each offers an alternative to the leveraged trading of CFDs, suiting different risk profiles and
              - link "strategies" [ref=e310] [cursor=pointer]:
                - /url: /en-int/learn/technical-analysis
              - text: .
            - paragraph [ref=e311]:
              - link "Create an account" [ref=e312] [cursor=pointer]:
                - /url: /trading/signup
              - link "Open a demo account" [ref=e313] [cursor=pointer]:
                - /url: /trading/signup?go=demo
            - paragraph [ref=e314]:
              - text: Explore potential profits and losses on your Bitcoin CFD trades with our free CFD
              - link "Bitcoin profit calculator" [ref=e315] [cursor=pointer]:
                - /url: /en-int/tools-and-calculators/bitcoin-calculator
              - text: .
            - paragraph [ref=e316]:
              - text: Need more support to trading crypto? Try our step-by-step
              - link "crypto course" [ref=e317] [cursor=pointer]:
                - /url: /en-int/learn/crypto-course
              - text: to guide you through the basics to the advanced concepts and explore potential profits and losses on your crypto CFD trades with our free
              - link "crypto profit calculator." [ref=e318] [cursor=pointer]:
                - /url: /en-int/tools-and-calculators/crypto-profit-calculator
            - paragraph [ref=e319]:
              - text: "* Source:"
              - link "https://coinmarketcap.com/" [ref=e320] [cursor=pointer]:
                - /url: https://coinmarketcap.com/
          - heading "FAQs" [level=2] [ref=e323]
          - generic [ref=e325]:
            - group [ref=e326]:
              - generic "What is BTC trading?" [ref=e327] [cursor=pointer]:
                - heading "What is BTC trading?" [level=3] [ref=e328]
            - group [ref=e329]:
              - generic "What is wrapped bitcoin (WBTC)?" [ref=e330] [cursor=pointer]:
                - heading "What is wrapped bitcoin (WBTC)?" [level=3] [ref=e331]
            - group [ref=e332]:
              - generic "How does bitcoin trading work?" [ref=e333] [cursor=pointer]:
                - heading "How does bitcoin trading work?" [level=3] [ref=e334]
            - group [ref=e335]:
              - generic "What are the best platforms to trade bitcoin?" [ref=e336] [cursor=pointer]:
                - heading "What are the best platforms to trade bitcoin?" [level=3] [ref=e337]
              - text: • • •
          - generic [ref=e340]:
            - heading "Visit our other complete guides" [level=2] [ref=e342]
            - generic [ref=e343]:
              - generic [ref=e346]:
                - heading "How to trade Ethereum" [level=3] [ref=e347]
                - generic [ref=e348]: Learn all about Ethereum and the ether (ETH) price history, including dApps, NFTs, and how to trade ETH/USD via CFDs on Capital.com
                - link "Trade Ethereum shares" [ref=e349] [cursor=pointer]:
                  - /url: https://capital.com/en-int/learn/market-guides/trade-ethereum
                  - generic [ref=e350]: Trade Ethereum shares
              - generic [ref=e353]:
                - heading "How to trade Polkadot" [level=3] [ref=e354]
                - generic [ref=e355]: Learn about Polkadot and the DOT price history, how it compares with Ethereum, and how to trade DOT/USD via CFDs on Capital.com
                - button "Trade Polkadot shares" [active] [ref=e356] [cursor=pointer]:
                  - generic [ref=e357]: Trade Polkadot shares
        - complementary [ref=e358]:
          - navigation [ref=e362]:
            - strong [ref=e363]: Contents
            - separator
            - generic [ref=e364]:
              - link "What is Bitcoin?" [ref=e366] [cursor=pointer]:
                - /url: "#part_0"
              - 'link "Bitcoin vs Bitcoin Cash: what are the key differences?" [ref=e368] [cursor=pointer]':
                - /url: "#part_1"
              - link "How does Bitcoin work?" [ref=e370] [cursor=pointer]:
                - /url: "#part_2"
              - link "What is the BTC price history?" [ref=e372] [cursor=pointer]:
                - /url: "#part_3"
              - link "Which factors might influence the BTC live price?" [ref=e374] [cursor=pointer]:
                - /url: "#part_4"
              - link "What are the BTC trading hours?" [ref=e376] [cursor=pointer]:
                - /url: "#part_5"
              - link "How to trade BTC" [ref=e378] [cursor=pointer]:
                - /url: "#part_6"
              - link "FAQs" [ref=e380] [cursor=pointer]:
                - /url: "#part_7"
          - generic [ref=e381]:
            - generic [ref=e383]:
              - strong [ref=e384]: Most traded markets
              - generic [ref=e385]: Tracking the stocks, indices, and assets making major moves.
              - generic [ref=e389]:
                - button "Most traded markets" [ref=e390]: Most traded markets
                - button "Top risers" [ref=e391] [cursor=pointer]: Top risers
                - button "Top fallers" [ref=e392] [cursor=pointer]: Top fallers
                - button "Most volatile" [ref=e393] [cursor=pointer]: Most volatile
              - generic [ref=e394]:
                - generic [ref=e397]:
                  - generic [ref=e399]:
                    - link "Gold" [ref=e400] [cursor=pointer]:
                      - /url: /en-int/markets/commodities/gold-spot-commodity
                    - generic [ref=e401]: "4410.99"
                  - button "Trade" [ref=e402] [cursor=pointer]
                - generic [ref=e404]:
                  - generic [ref=e405]:
                    - generic [ref=e407]:
                      - link "US Tech 100" [ref=e408] [cursor=pointer]:
                        - /url: /en-int/markets/indices/us-tech-100-index-1
                      - generic [ref=e409]: "29720.6"
                    - button "Trade" [ref=e410] [cursor=pointer]
                  - generic [ref=e411]:
                    - generic [ref=e413]: 0.6%
                    - img [ref=e417]
                - generic [ref=e420]:
                  - generic [ref=e422]:
                    - link "Bitcoin/USD" [ref=e423] [cursor=pointer]:
                      - /url: /en-int/markets/cryptocurrencies/bitcoin-to-us-dollar-chart
                    - generic [ref=e424]: "64104.05"
                  - button "Trade" [ref=e425] [cursor=pointer]
                - generic [ref=e428]:
                  - generic [ref=e430]:
                    - link "Ripple/USD" [ref=e431] [cursor=pointer]:
                      - /url: /en-int/markets/cryptocurrencies/ripple-to-us-dollar-chart
                    - generic [ref=e432]: "1.02270"
                  - button "Trade" [ref=e433] [cursor=pointer]
                - generic [ref=e436]:
                  - generic [ref=e438]:
                    - link "Ethereum/USD" [ref=e439] [cursor=pointer]:
                      - /url: /en-int/markets/cryptocurrencies/ethereum-to-us-dollar-chart
                    - generic [ref=e440]: "1908.77"
                  - button "Trade" [ref=e441] [cursor=pointer]
            - text: Share prices are indicative and may differ from live market prices.
          - generic [ref=e443]:
            - heading "Quick links" [level=2] [ref=e445]
            - generic [ref=e447]:
              - link "#Gold" [ref=e448] [cursor=pointer]:
                - /url: /en-int/analysis/gold-news
              - link "#Silver" [ref=e449] [cursor=pointer]:
                - /url: /en-int/analysis/silver-news
              - link "#Oil" [ref=e450] [cursor=pointer]:
                - /url: /en-int/analysis/oil-price-news
              - link "#Forecasts & predictions" [ref=e451] [cursor=pointer]:
                - /url: /en-int/analysis/forecasts-and-predictions
              - link "#Capital.com Data" [ref=e452] [cursor=pointer]:
                - /url: /en-int/analysis/data-and-insights
              - link "#Press releases" [ref=e453] [cursor=pointer]:
                - /url: /en-int/analysis/press-release
              - link "#NASDAQ" [ref=e454] [cursor=pointer]:
                - /url: /en-int/analysis/nasdaq-news
              - link "#DAX" [ref=e455] [cursor=pointer]:
                - /url: /en-int/analysis/dax-news
              - link "#Platinum" [ref=e456] [cursor=pointer]:
                - /url: /en-int/analysis/platinum-news
              - link "#CAD news" [ref=e457] [cursor=pointer]:
                - /url: /en-int/analysis/cad-news
              - link "#Dow Jones" [ref=e458] [cursor=pointer]:
                - /url: /en-int/analysis/dow-jones-news
              - link "#NVIDIA" [ref=e459] [cursor=pointer]:
                - /url: /en-int/analysis/nvidia-news
              - link "#Technical analysis" [ref=e460] [cursor=pointer]:
                - /url: /en-int/analysis/technical-analysis
      - generic [ref=e464]:
        - heading "Ready to join a leading broker?" [level=2] [ref=e466]
        - generic [ref=e467]:
          - button [ref=e469] [cursor=pointer]
          - generic [ref=e472]: 1. Create your account
          - generic [ref=e473]: 2. Make your first deposit
          - generic [ref=e474]: 3. Start when you’re ready
  - contentinfo [ref=e476]:
    - generic [ref=e477]:
      - link [ref=e478] [cursor=pointer]:
        - /url: /en-int
        - img [ref=e479]
      - generic [ref=e483]:
        - link [ref=e484] [cursor=pointer]:
          - /url: https://twitter.com/capitalcom
        - link [ref=e485] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/capital.com/
        - link [ref=e486] [cursor=pointer]:
          - /url: https://www.instagram.com/capitalcom/
        - link [ref=e487] [cursor=pointer]:
          - /url: https://www.tiktok.com/@capitalcom_international
        - link [ref=e488] [cursor=pointer]:
          - /url: https://www.facebook.com/capitalcom/
        - link [ref=e489] [cursor=pointer]:
          - /url: https://www.reddit.com/r/capitalcom/
      - generic [ref=e490]:
        - link [ref=e491] [cursor=pointer]:
          - /url: https://app.appsflyer.com/id1230088754?cp_device_id=e2deb2f1-5bc0-446b-9416-8e0922fe0e32&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e492] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=e2deb2f1-5bc0-446b-9416-8e0922fe0e32&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e493] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=e2deb2f1-5bc0-446b-9416-8e0922fe0e32&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
    - generic [ref=e494]:
      - generic [ref=e495]:
        - generic [ref=e496]:
          - generic [ref=e497]:
            - generic [ref=e498]: "Country / Region:"
            - button "Hong Kong" [ref=e499] [cursor=pointer]:
              - generic [ref=e501]: Hong Kong
          - generic [ref=e502]: •
          - generic [ref=e503]:
            - generic [ref=e504]: "Language:"
            - button "English" [ref=e505] [cursor=pointer]:
              - generic [ref=e506]: English
        - generic [ref=e507]:
          - generic [ref=e508]: "Also you can contact us:"
          - link "+442080899989" [ref=e511] [cursor=pointer]:
            - /url: tel:+442080899989
            - strong [ref=e512]: "+442080899989"
            - strong
          - generic [ref=e513]: •
          - link "support@capital.com" [ref=e515] [cursor=pointer]:
            - /url: mailto:support@capital.com
            - strong [ref=e516]: support@capital.com
      - generic [ref=e517]:
        - generic [ref=e518]:
          - strong [ref=e520]: Trading
          - generic [ref=e521]:
            - generic [ref=e522]:
              - generic [ref=e523]: Trading
              - generic [ref=e524]:
                - link "Trade CFDs" [ref=e526] [cursor=pointer]:
                  - /url: /en-int/ways-to-trade/cfd-trading
                - link "Get demo account" [ref=e528] [cursor=pointer]:
                  - /url: /en-int/trading-platforms/demo-account
                - link "Get pro account" [ref=e530] [cursor=pointer]:
                  - /url: /en-int/professional
            - generic [ref=e531]:
              - generic [ref=e532]: Platforms
              - generic [ref=e533]:
                - link "Web platform" [ref=e535] [cursor=pointer]:
                  - /url: /en-int/trading-platforms/web-platform
                - link "Mobile app" [ref=e537] [cursor=pointer]:
                  - /url: /en-int/trading-platforms/mobile-apps
                - link "TradingView" [ref=e539] [cursor=pointer]:
                  - /url: /en-int/trading-platforms/trading-view
                - link "MT4" [ref=e541] [cursor=pointer]:
                  - /url: /en-int/trading-platforms/mt4
                - link "MT5" [ref=e543] [cursor=pointer]:
                  - /url: /en-int/trading-platforms/mt5
                - link "API access" [ref=e545] [cursor=pointer]:
                  - /url: /en-int/trading-platforms/api-development-guide
            - generic [ref=e546]:
              - generic [ref=e547]: Learn
              - generic [ref=e548]:
                - link "Trading strategies" [ref=e550] [cursor=pointer]:
                  - /url: /en-int/learn/trading-strategies
                - link "Technical analysis" [ref=e552] [cursor=pointer]:
                  - /url: /en-int/learn/technical-analysis
                - link "Trading psychology" [ref=e554] [cursor=pointer]:
                  - /url: /en-int/learn/trading-psychology
                - link "All resources" [ref=e556] [cursor=pointer]:
                  - /url: /en-int/learn
        - generic [ref=e557]:
          - strong [ref=e559]: Markets
          - generic [ref=e560]:
            - generic [ref=e561]:
              - generic [ref=e562]: Our markets
              - generic [ref=e563]:
                - link "Markets overview" [ref=e565] [cursor=pointer]:
                  - /url: /en-int/markets
                - link "Shares" [ref=e567] [cursor=pointer]:
                  - /url: /en-int/markets/shares
                - link "Forex" [ref=e569] [cursor=pointer]:
                  - /url: /en-int/markets/forex
                - link "Indices" [ref=e571] [cursor=pointer]:
                  - /url: /en-int/markets/indices
                - link "Commodities" [ref=e573] [cursor=pointer]:
                  - /url: /en-int/markets/commodities
                - link "Cryptocurrencies" [ref=e575] [cursor=pointer]:
                  - /url: /en-int/markets/cryptocurrencies
                - link "Bonds" [ref=e577] [cursor=pointer]:
                  - /url: /en-int/markets/bonds
                - link "Interest rates" [ref=e579] [cursor=pointer]:
                  - /url: /en-int/markets/interest-rates
            - generic [ref=e580]:
              - generic [ref=e581]: Market info
              - generic [ref=e582]:
                - link "Market analysis" [ref=e584] [cursor=pointer]:
                  - /url: /en-int/analysis
                - link "Finance news" [ref=e586] [cursor=pointer]:
                  - /url: /en-int/news
        - link "Pricing" [ref=e589] [cursor=pointer]:
          - /url: /en-int/ways-to-trade/fees-and-charges
          - strong [ref=e590]: Pricing
        - generic [ref=e591]:
          - strong [ref=e593]: About
          - generic [ref=e594]:
            - generic [ref=e595]:
              - generic [ref=e596]: Who we are
              - generic [ref=e597]:
                - link "Company" [ref=e599] [cursor=pointer]:
                  - /url: /en-int/about-us
                - link "Our offices" [ref=e601] [cursor=pointer]:
                  - /url: /en-int/about-us/our-offices
                - link "Press centre" [ref=e603] [cursor=pointer]:
                  - /url: /en-int/media-centre
                - link "Investor Relations" [ref=e605] [cursor=pointer]:
                  - /url: /en-int/about-us/investor-relations
                - link "Is Capital.com safe?" [ref=e607] [cursor=pointer]:
                  - /url: /en-int/security-measures
                - link "Our business model" [ref=e609] [cursor=pointer]:
                  - /url: /en-int/about-us/how-capital-makes-money
            - generic [ref=e610]:
              - generic [ref=e611]: Work with us
              - generic [ref=e612]:
                - link "Careers" [ref=e614] [cursor=pointer]:
                  - /url: /en-int/about-us/careers
                - link "Partnerships" [ref=e616] [cursor=pointer]:
                  - /url: /en-int/partnerships
                - link "Refer a friend" [ref=e618] [cursor=pointer]:
                  - /url: /en-int/refer-a-friend
            - generic [ref=e619]:
              - generic [ref=e620]: Help
              - generic [ref=e621]:
                - link "Help centre" [ref=e623] [cursor=pointer]:
                  - /url: /en-int/help
                - link "Client vulnerability" [ref=e625] [cursor=pointer]:
                  - /url: /en-int/help/client-vulnerability
                - link "Contact us" [ref=e627] [cursor=pointer]:
                  - /url: /en-int/contact-us
            - generic [ref=e628]:
              - generic [ref=e629]: Legal
              - generic [ref=e630]:
                - link "Terms & policies" [ref=e632] [cursor=pointer]:
                  - /url: /en-int/terms-and-policies
                - link "Complaints" [ref=e634] [cursor=pointer]:
                  - /url: /en-int/help/complaints
    - generic [ref=e636]:
      - paragraph [ref=e637]:
        - text: CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage.
        - generic [ref=e638]:
          - strong [ref=e639]: 79.75% of retail investor accounts lose money when trading CFDs with this provider.
          - text: You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.
      - paragraph [ref=e640]
      - paragraph [ref=e641]: "Capital Com Online Investments Ltd is a limited liability company with company number 209236B. Capital Com Online Investments Ltd is a Company registered in the Commonwealth of The Bahamas and authorised by the Securities Commission of The Bahamas with license number SIA-F245. The Company’s registered office is at #3 Bayside Executive Park, Blake Road and West Bay Street, P. O. Box CB 13012, Nassau, The Bahamas."
    - generic [ref=e642]:
      - paragraph [ref=e643]: © 2026 Capital Com Online Investments Ltd
      - generic [ref=e644]:
        - link "Sitemap" [ref=e645] [cursor=pointer]:
          - /url: /en-int/sitemap
        - link "Cookie Settings" [ref=e646] [cursor=pointer]:
          - /url: ""
        - link:
          - /url: /en-int
        - link "Terms and Policies" [ref=e647] [cursor=pointer]:
          - /url: /en-int/terms-and-policies
        - link "Complaints Procedure (SCB)" [ref=e648] [cursor=pointer]:
          - /url: /en-int/help/complaints
  - button [ref=e649] [cursor=pointer]
  - alert [ref=e651]
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
  53  |       expect(href).toContain(action.expectedHrefContains);
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
> 84  |       expect(href).toContain(action.expectedHrefContains);
      |                    ^ Error: expect(received).toContain(expected) // indexOf
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