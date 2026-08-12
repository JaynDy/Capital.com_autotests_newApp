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

Expected substring: "learn/market-guides/trade-polkadot"
Received string:    "/zh-hant/learn/market-guides/trade-cardano"
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e7]:
      - text: 差價合約 (CFD) 是一種複雜的金融工具，利用槓桿交易雖然可能放大收益，但同樣也會加劇虧損風險，導致資金快速流失。
      - generic [ref=e8]:
        - text: 數據顯示，
        - strong [ref=e9]: 79.75% 的散戶投資者在使用該提供商服務進行差價合約交易時出現帳戶虧損。
        - text: 在進行交易之前，請確保您充分了解差價合約的運作機制，並仔細評估自己是否有能力承擔資金虧損的高風險。
    - generic [ref=e11]:
      - link [ref=e12] [cursor=pointer]:
        - /url: /zh-hant
        - img [ref=e13]
      - generic [ref=e18]:
        - navigation [ref=e19]:
          - button "交易" [ref=e20]:
            - button "交易" [ref=e21]:
              - generic [ref=e22]: 交易
          - button "市場" [ref=e23]:
            - button "市場" [ref=e24]:
              - generic [ref=e25]: 市場
          - link "定價" [ref=e28] [cursor=pointer]:
            - /url: /zh-hant/ways-to-trade/fees-and-charges
          - button "關於我們" [ref=e29]:
            - button "關於我們" [ref=e30]:
              - generic [ref=e31]: 關於我們
        - button "zh" [ref=e32] [cursor=pointer]:
          - generic [ref=e34]: zh
      - generic [ref=e36]:
        - button "登入" [ref=e37] [cursor=pointer]: 登入
        - button "開設賬戶" [ref=e38] [cursor=pointer]: 開設賬戶
  - generic [ref=e39]:
    - paragraph [ref=e42]:
      - generic [ref=e43]:
        - link "首頁" [ref=e44] [cursor=pointer]:
          - /url: /zh-hant
        - text: •
      - generic [ref=e45]:
        - link "學習" [ref=e46] [cursor=pointer]:
          - /url: /zh-hant/learn
        - text: •
      - generic [ref=e47]:
        - link "市場指南" [ref=e48] [cursor=pointer]:
          - /url: /zh-hant/learn/market-guides
        - text: •
      - text: 什麼是波卡 (Polkadot)？
    - generic [ref=e49]:
      - generic [ref=e51]:
        - main [ref=e52]:
          - generic [ref=e54]:
            - generic [ref=e55]:
              - heading "什麼是波卡 (Polkadot)？" [level=1] [ref=e57]
              - generic [ref=e60]:
                - button "share on Twitter" [ref=e61] [cursor=pointer]
                - button "share on Facebook" [ref=e62] [cursor=pointer]
                - button "share on Linkedin" [ref=e63] [cursor=pointer]
                - button "Copy the url of the current page." [ref=e64] [cursor=pointer]:
                  - button "Copy the url of the current page." [ref=e65]
            - figure [ref=e66]
          - generic [ref=e69]:
            - paragraph [ref=e70]: 了解 Polkadot 的相關資訊，DOT 的歷史價格走勢，Polkadot 與以太坊的比較情況，並了解如何在 Capital.com 透過差價合約交易 DOT/USD
            - paragraph [ref=e71]:
              - link "前往市場頁面" [ref=e72] [cursor=pointer]:
                - /url: /zh-hant/markets/cryptocurrencies/dot-to-us-dollar-chart
            - heading "什麼是波卡 (Polkadot)？" [level=2] [ref=e73]
            - paragraph [ref=e74]: Polkadot 是一個開源、去中心化的區塊鏈平台，旨在實現跨鏈互通性與高效可擴展性。Polkadot 於 2020 年推出，旨在將多個區塊鏈連接成一個統一的網路，使其能夠並行處理交易並安全交換數據。Polkadot 的原生加密貨幣為 「DOT」，用於交易和支付與平台上應用建構相關的網路費用。
            - paragraph [ref=e75]: Polkadot 由 Web3 基金會創建，並由 Gavin Wood、Robert Habermeier 和 Peter Czaban 領導的團隊開發。三位領導者致力於將 Polkadot 打造成卓越的平台，克服現有區塊鏈網路的局限性，例如可擴展性不足和缺乏互通性的問題。Polkadot 為區塊鏈提供了一個框架，使其能夠互聯互通、共用資訊，並實現無縫協作。DOT 一直是市值最高的加密貨幣之一。截至 2024 年 10 月，DOT 在 CoinMarketCap 等平台上排名前 15 名。
          - generic [ref=e77]:
            - heading "Polkadot 與以太坊 (Ethereum)：有哪些主要區別？" [level=2] [ref=e78]
            - paragraph [ref=e79]: Polkadot是為了克服以太坊的一些局限性而建立的。然而，自以太坊完成「合併」 (The Merge) 並轉向權益證明 (Proof-of-Stake) 機制後，Polkadot 與以太坊之間的相似之處和差異也發生了新的變化。
            - paragraph [ref=e80]: 以下是一些關鍵差異：
            - table [ref=e82]:
              - rowgroup [ref=e83]:
                - row "波卡 (Polkadot) 以太坊 (Ethereum)" [ref=e84]:
                  - cell [ref=e85]
                  - cell "波卡 (Polkadot)" [ref=e86]:
                    - strong [ref=e87]: 波卡 (Polkadot)
                  - cell "以太坊 (Ethereum)" [ref=e88]:
                    - strong [ref=e89]: 以太坊 (Ethereum)
                - row "推出年份 2020 年 2015 年" [ref=e90]:
                  - cell "推出年份" [ref=e91]:
                    - strong [ref=e92]: 推出年份
                  - cell "2020 年" [ref=e93]
                  - cell "2015 年" [ref=e94]
                - row "創辦人 Gavin Wood、Robert Habermeier 和 Peter Czaban Vitalik Buterin、Gavin Wood 等" [ref=e95]:
                  - cell "創辦人" [ref=e96]:
                    - strong [ref=e97]: 創辦人
                  - cell "Gavin Wood、Robert Habermeier 和 Peter Czaban" [ref=e98]
                  - cell "Vitalik Buterin、Gavin Wood 等" [ref=e99]
                - row "加密貨幣 DOT 以太幣 (Ether, ETH)" [ref=e100]:
                  - cell "加密貨幣" [ref=e101]:
                    - strong [ref=e102]: 加密貨幣
                  - cell "DOT" [ref=e103]
                  - cell "以太幣 (Ether, ETH)" [ref=e104]
                - row "共識機制 「提名權益證明」(Nominated Proof-of-Stake, NPoS) 的共識機制。 權益證明 (Proof-of-Stake, PoS)，自 2022 年起" [ref=e105]:
                  - cell "共識機制" [ref=e106]:
                    - strong [ref=e107]: 共識機制
                  - cell "「提名權益證明」(Nominated Proof-of-Stake, NPoS) 的共識機制。" [ref=e108]
                  - cell "權益證明 (Proof-of-Stake, PoS)，自 2022 年起" [ref=e109]
                - row "可擴展性 高，因平行鏈的並行處理 合併後有所改善，擴展工作仍在進行" [ref=e110]:
                  - cell "可擴展性" [ref=e111]:
                    - strong [ref=e112]: 可擴展性
                  - cell "高，因平行鏈的並行處理" [ref=e113]
                  - cell "合併後有所改善，擴展工作仍在進行" [ref=e114]
                - row "互通性 為跨鏈通信設計 有限，但正在開發潛在方案" [ref=e115]:
                  - cell "互通性" [ref=e116]:
                    - strong [ref=e117]: 互通性
                  - cell "為跨鏈通信設計" [ref=e118]
                  - cell "有限，但正在開發潛在方案" [ref=e119]
                - row "智能合約和去中心化應用程式 (dApp) 透過平行鏈不斷增長的生態系統提供支持 原生支持；擁有規模最大的 dApp 生態系統" [ref=e120]:
                  - cell "智能合約和去中心化應用程式 (dApp)" [ref=e121]:
                    - strong [ref=e122]: 智能合約和去中心化應用程式 (dApp)
                  - cell "透過平行鏈不斷增長的生態系統提供支持" [ref=e123]
                  - cell "原生支持；擁有規模最大的 dApp 生態系統" [ref=e124]
                - row "治理 由 DOT 持有者進行鏈上治理 鏈上和鏈下機制結合" [ref=e125]:
                  - cell "治理" [ref=e126]:
                    - strong [ref=e127]: 治理
                  - cell "由 DOT 持有者進行鏈上治理" [ref=e128]
                  - cell "鏈上和鏈下機制結合" [ref=e129]
                - row "網路速度 透過平行鏈最高可達到 1,000+ TPS 基礎層約 20-30 TPS；使用第二層解決方案後顯著提高" [ref=e130]:
                  - cell "網路速度" [ref=e131]:
                    - strong [ref=e132]: 網路速度
                  - cell "透過平行鏈最高可達到 1,000+ TPS" [ref=e133]
                  - cell "基礎層約 20-30 TPS；使用第二層解決方案後顯著提高" [ref=e134]
                - row "交易費用 通常而言更低且更可預測 從以往來看更高且波動性更大；但使用第二層解決方案後有所改善" [ref=e135]:
                  - cell "交易費用" [ref=e136]:
                    - strong [ref=e137]: 交易費用
                  - cell "通常而言更低且更可預測" [ref=e138]
                  - cell "從以往來看更高且波動性更大；但使用第二層解決方案後有所改善" [ref=e139]
                - row "最大代幣供應量 無限；通脹模式 無限；由於採用 EIP-1559，可轉為通縮模式" [ref=e140]:
                  - cell "最大代幣供應量" [ref=e141]:
                    - strong [ref=e142]: 最大代幣供應量
                  - cell "無限；通脹模式" [ref=e143]
                  - cell "無限；由於採用 EIP-1559，可轉為通縮模式" [ref=e144]
                - row "理念 透過多鏈框架實現互通性和可擴展性 用於 dApp 和智能合約的區塊鏈" [ref=e145]:
                  - cell "理念" [ref=e146]:
                    - strong [ref=e147]: 理念
                  - cell "透過多鏈框架實現互通性和可擴展性" [ref=e148]
                  - cell "用於 dApp 和智能合約的區塊鏈" [ref=e149]
          - generic [ref=e151]:
            - heading "Polkadot 的運作方式是怎樣的？" [level=2] [ref=e152]
            - paragraph [ref=e153]:
              - text: Polkadot 旨在將各種區塊鏈連接成統一的生態系統。其核心是
              - strong [ref=e154]: 中繼鏈 (Relay Chain)
              - text: ，作為網路安全性、共識機制和跨鏈互通性的中央樞紐。中繼鏈負責協調整個系統，確保所有互聯的區塊鏈能夠無縫通信與共用資訊。
            - paragraph [ref=e155]:
              - text: 與中繼鏈並行運行的還有
              - strong [ref=e156]: 平行鏈 (Parachain)
              - text: ，這些是為特定用途量身定制的獨立區塊鏈。每個平行鏈可以擁有獨特的功能、代幣和治理結構，並可針對金融、遊戲或供應鏈管理等特定用例進行定制與優化。透過在多個平行鏈中同時處理交易，Polkadot 相較於傳統的單鏈網路顯著提高了可擴展性，減少了瓶頸，並改善了整體網路性能。
            - paragraph [ref=e157]:
              - text: Polkadot採用了一種稱為
              - strong [ref=e158]: 「提名權益證明」(Nominated Proof-of-Stake, NPoS) 的共識機制。
              - text: 。在該系統中，驗證者質押 DOT 代幣作為擔保（以此激勵誠實行為），並負責驗證交易及向中繼鏈添加新區塊。提名者可以質押自己的 DOT 以支持驗證者，從而為網路安全貢獻力量並獲得獎勵。
            - paragraph [ref=e159]:
              - text: Polkadot 的一大特色是其
              - strong [ref=e160]: 跨鏈互通性
              - text: 。透過稱為
              - strong [ref=e161]: 「橋」(Bridge)
              - text: 的專有協議，Polkadot 能連接
              - link "以太坊" [ref=e162] [cursor=pointer]:
                - /url: /zh-hant/learn/market-guides/trade-ethereum
              - text: 、
              - link "比特幣" [ref=e163] [cursor=pointer]:
                - /url: /zh-hant/learn/market-guides/trade-bitcoin
              - text: 等外部網路，實現不同區塊鏈之間的數據傳輸和資產轉移。得益於這種互通性，開發人員建構的去中心化應用 (dApp) 能夠利用多個區塊鏈提供的服務，從而使區塊鏈生態系統更加緊密互聯。
          - generic [ref=e165]:
            - heading "Polkadot (DOT) 的歷史價格走勢如何？" [level=2] [ref=e166]
            - paragraph [ref=e167]: Polkadot (DOT) 在 2017 年的首次代幣發行 (ICO) 中籌集了約 1.45 億美元。然而，由於 Parity 多重簽名錢包漏洞，超過一半的資金遭受損失，這為 DOT 的早期發展蒙上了一層陰影。
            - paragraph [ref=e168]: 在 2018 年和 2019 年，Polkadot 專注於開發，發布了多個測試網，並不斷完善核心架構。這些進展吸引了開發者和交易者的關注，為 2020 年主網的成功推出奠定了堅實基礎。
          - generic [ref=e172]:
            - paragraph [ref=e173]:
              - strong [ref=e174]: 過去的表現並不能代表未來的業績。
            - paragraph [ref=e175]: 2022 年，全球經濟面臨通貨膨脹、加息和監管變化等不確定性，導致整個加密市場下跌，DOT 的價格也因此受到影響。儘管如此，Polkadot 在 2023 年仍持續發展，其平行鏈和跨鏈消息功能的採用率不斷提升，即便在經濟持續不確定的情況下亦是如此。
            - paragraph [ref=e176]: 到 2024 年，儘管價格波動顯著，DOT 在加密市場中的排名仍保持穩定。Polkadot 對互通性和多鏈架構的專注持續贏得開發者和投資者的青睞。
            - heading "哪些因素可能影響 Polkadot (DOT) 的即時價格？" [level=2] [ref=e177]
            - paragraph [ref=e178]: Polkadot 受多種因素影響，這些因素可能改變 DOT 在加密貨幣市場的價格。了解這些因素有助於交易者做出更明智的交易決策。
            - paragraph [ref=e179]: 以下列出了一些可能影響 DOT 價格走勢的主要因素。
            - paragraph [ref=e180]:
              - strong [ref=e181]: 技術進步和網路升級
              - text: —— 成功實施網路升級（如新平行鏈的推出和互通性的改進）可能增強交易者信心，從而提高 DOT 的需求。然而，如果升級出現延遲或技術問題，可能導致前景不明朗，從而引發價格下跌。
            - paragraph [ref=e182]:
              - strong [ref=e183]: 市場情緒和加密貨幣趨勢
              - text: ——DOT 的走勢通常與整體加密貨幣市場保持一致。當整體市場情緒看漲，尤其是
              - link "比特幣 (BTC)" [ref=e184] [cursor=pointer]:
                - /url: /zh-hant/markets/cryptocurrencies/bitcoin-to-us-dollar-chart
              - text: 等主要加密貨幣價格上漲時，DOT 的價格往往也會隨之上升。積極趨勢（如機構採用率提升或有利的監管消息）可能推動整個市場價格大幅上漲。相反，看跌的市場環境或負面消息可能對 DOT 價格造成下行壓力。
            - paragraph [ref=e185]:
              - strong [ref=e186]: 監管環境
              - text: —— 政府政策和監管變化可能對 DOT 價格產生顯著影響。支持區塊鏈創新的法規可能促進投資和採用，從而推高 DOT 的價格。與此同時，出台限制性政策、禁止加密貨幣交易或增加合規要求，可能降低市場的可進入性，從而導致價格下跌。
            - paragraph [ref=e187]:
              - strong [ref=e188]: 質押和供應動態
              - text: —— Polkadot 採用提名權益證明 (NPoS) 共識機制，其中質押起著至關重要的作用。當大量 DOT 被質押時，流通中的供應量減少，此時如果需求保持穩定或增加，可能會對價格產生上行壓力。相反，如果大量 DOT 被解押並重新流通，那麼供應量就會增加，而需求未能相應增長，則可能導致 DOT 價格下跌。
            - paragraph [ref=e189]:
              - strong [ref=e190]: 開發者和項目的採用
              - text: —— 採用率的提高表明平台具有較高實用性，可能吸引更多用戶和交易者參與。如果建立了備受矚目的合作夥伴關係，或成功舉辦了平行鏈拍賣會，為網路引入創新解決方案，那麼平台聲譽將得到提升，DOT 需求也會隨之增長。
            - paragraph [ref=e191]:
              - strong [ref=e192]: 宏觀經濟因素和全球事件
              - text: ——牽涉面更廣的經濟形勢，如通脹率、利率變化和地緣政治事件，可能會影響
              - link "加密貨幣市場" [ref=e193] [cursor=pointer]:
                - /url: /zh-hant/markets/cryptocurrencies
              - text: 的交易行為。在經濟前景不明朗的時期，交易者可能轉向 DOT 等加密貨幣作為避險資產，從而推高其價格。相反，在全球經濟強勁的情況下，交易者可能更傾向於投資傳統資產，從而減少對加密貨幣的需求。
            - paragraph [ref=e194]:
              - link "建立賬戶" [ref=e195] [cursor=pointer]:
                - /url: /trading/signup
              - link "開立模擬賬戶" [ref=e196] [cursor=pointer]:
                - /url: /trading/signup?go=demo
          - generic [ref=e198]:
            - heading "Polkadot (DOT) 的交易時段" [level=2] [ref=e199]
            - paragraph [ref=e200]: Polkadot (DOT) 運行於去中心化的區塊鏈網路上，該網路全年無休，全天 24 小時運作，這意味著，無論是平日、週末還是假期，您都可以隨時交易 DOT。
            - list [ref=e201]:
              - listitem [ref=e202]:
                - text: •
                - strong [ref=e203]: 加密貨幣交易所
                - text: – 許多交易所提供 24/7 全天候交易，允許交易者持續參與市場。
              - listitem [ref=e204]:
                - text: •
                - strong [ref=e205]: 線上交易平台
                - text: —— 一些可靠且值得信賴的經紀商透過差價合約 (CFD) 提供 DOT/USD 的交易服務，方便投資者隨時參與市場交易。
            - paragraph [ref=e206]:
              - text: 如果您選擇交易差價合約 (CFD)，您可以造訪我們全面的
              - link "DOT/USD 價格走勢圖" [ref=e207] [cursor=pointer]:
                - /url: /zh-hant/markets/commodities/us-crude-oil-spot-commodity-1
              - text: ，即時追蹤 DOT 的表現（單位為美元）。
            - paragraph [ref=e208]: 密切關注與該加密貨幣有關的市場活動將幫助您隨時了解可能影響其價格短期變動的關鍵基本面或技術面事件。
            - paragraph [ref=e209]:
              - link "建立賬戶" [ref=e210] [cursor=pointer]:
                - /url: /trading/signup
              - link "開立模擬賬戶" [ref=e211] [cursor=pointer]:
                - /url: /trading/signup?go=demo
          - generic [ref=e213]:
            - heading "如何保管和存儲 Polkadot (DOT)" [level=2] [ref=e214]
            - paragraph [ref=e215]: 購買 DOT 後，您可以將其存儲在加密貨幣錢包中。可用選項包括：
            - list [ref=e216]:
              - listitem [ref=e217]:
                - text: •
                - strong [ref=e218]: 軟件錢包
                - text: ——如 Nova Wallet、Polkawallet 和 imToken 等專業桌面端或流動錢包。
              - listitem [ref=e219]:
                - text: •
                - strong [ref=e220]: 硬件錢包
                - text: —— Ledger Nano S/X 和 Trezor 等物理裝置提供安全的離線存儲功能，可保護您的 DOT 免受線上威脅。
            - paragraph [ref=e221]: 確保錢包的安全並妥善保管您的私鑰至關重要。
            - paragraph [ref=e222]: 此外，如果您透過差價合約 (CFD) 基於 DOT/USD 價格進行交易，則無需擔心存儲或保護基礎資產的問題。
          - generic [ref=e224]:
            - heading "如何交易 Polkadot (DOT)" [level=2] [ref=e225]
            - paragraph [ref=e226]: Polkadot (DOT) 是一種加密貨幣，可以直接透過加密貨幣交易所或點對點方式進行交易。交易者還可以選擇透過衍生品交易 DOT。衍生品是一種金融工具，即從基礎資產的價格中獲取（或「衍生」）其價值的金融產品。
            - paragraph [ref=e227]: 交易者還可以選擇透過衍生品交易 DOT。衍生品是一種金融工具，即從基礎資產的價格中獲取（或「衍生」）其價值的金融產品。差價合約 (CFD) 作為一種合約，通常在券商和交易者之間簽訂，其中一方同意在交易開倉至平倉期間向另一方支付證券價值的差額。
            - paragraph [ref=e228]:
              - text: 無論您認為 DOT/USD 將上漲（「做多」）還是下跌（「做空」），您都可以使用
              - link "差價合約" [ref=e229] [cursor=pointer]:
                - /url: /zh-hant/ways-to-trade/cfd-trading/what-is-cfd-trading
              - text: 來進行交易。借助差價合約，您可以使用杠杆或
              - link "保證金參與交易" [ref=e230] [cursor=pointer]:
                - /url: /zh-hant/learn/trading-strategies/margin-trading
              - text: ，以較少的資金控制更大的頭寸。杠杆在放大潛在盈利的同時也放大了潛在虧損，這使得差價合約交易具有風險。
            - paragraph [ref=e231]:
              - text: 您可以透過 Capital.com 查看我們的
              - link "加密貨幣交易全面指南" [ref=e232] [cursor=pointer]:
                - /url: /zh-hant/learn/market-guides/what-is-cryptocurrency-trading
              - text: ，了解更多關於
              - link "加密貨幣" [ref=e233] [cursor=pointer]:
                - /url: /zh-hant/markets/cryptocurrencies
              - text: 交易的詳細資訊。
            - paragraph [ref=e234]: 除差價合約之外，您還可以透過期貨、期權、ETF 和共同基金等工具交易 DOT。每種產品都是差價合約杠杆交易的替代選項，以滿足不同的風險偏好和投資策略。
            - paragraph [ref=e235]:
              - link "建立賬戶" [ref=e236] [cursor=pointer]:
                - /url: /trading/signup
              - link "開立模擬賬戶" [ref=e237] [cursor=pointer]:
                - /url: /trading/signup?go=demo
          - heading "FAQ" [level=2] [ref=e240]
          - generic [ref=e242]:
            - group [ref=e243]:
              - generic "什麼是波卡 (Polkadot)？" [ref=e244] [cursor=pointer]:
                - heading "什麼是波卡 (Polkadot)？" [level=3] [ref=e245]
            - group [ref=e246]:
              - generic "Polkadot 是否優於以太坊？" [ref=e247] [cursor=pointer]:
                - heading "Polkadot 是否優於以太坊？" [level=3] [ref=e248]
            - group [ref=e249]:
              - generic "Polkadot 的運作方式是怎樣的？" [ref=e250] [cursor=pointer]:
                - heading "Polkadot 的運作方式是怎樣的？" [level=3] [ref=e251]
            - group [ref=e252]:
              - generic "誰擁有的 Polkadot 最多？" [ref=e253] [cursor=pointer]:
                - heading "誰擁有的 Polkadot 最多？" [level=3] [ref=e254]
            - group [ref=e255]:
              - generic "Polkadot (DOT) 有什麼用途？" [ref=e256] [cursor=pointer]:
                - heading "Polkadot (DOT) 有什麼用途？" [level=3] [ref=e257]
              - text: • • •
          - generic [ref=e260]:
            - heading "瀏覽其他完整指南" [level=2] [ref=e262]
            - generic [ref=e263]:
              - generic [ref=e266]:
                - heading "如何交易以太幣" [level=3] [ref=e267]
                - generic [ref=e268]: 了解以太坊及其原生加密貨幣以太幣 (ETH) 的歷史價格走勢，包括去中心化應用 (dApps)、NFT 等，以及如何透過 Capital.com 的差價合約 (CFD) 交易 ETH/USD。
                - link "交易以太幣" [ref=e269] [cursor=pointer]:
                  - /url: /zh-hant/learn/market-guides/trade-ethereum
                  - generic [ref=e270]: 交易以太幣
              - generic [ref=e273]:
                - heading "如何交易 Cardano" [level=3] [ref=e274]
                - generic [ref=e275]: 深入了解 Cardano 及其原生代幣 ADA 的歷史價格走勢，並探索如何在 Capital.com 透過差價合約 (CFD) 交易 ADA/BTC
                - link "交易 Cardano" [ref=e276] [cursor=pointer]:
                  - /url: /zh-hant/learn/market-guides/trade-cardano
                  - generic [ref=e277]: 交易 Cardano
        - complementary [ref=e278]:
          - navigation [ref=e282]:
            - strong [ref=e283]: 目錄
            - separator
            - generic [ref=e284]:
              - link "什麼是波卡 (Polkadot)？" [ref=e286] [cursor=pointer]:
                - /url: "#part_0"
              - link "Polkadot 與以太坊 (Ethereum)：有哪些主要區別？" [ref=e288] [cursor=pointer]:
                - /url: "#part_1"
              - link "Polkadot 的運作方式是怎樣的？" [ref=e290] [cursor=pointer]:
                - /url: "#part_2"
              - link "Polkadot (DOT) 的歷史價格走勢如何？" [ref=e292] [cursor=pointer]:
                - /url: "#part_3"
              - link "哪些因素可能影響 Polkadot (DOT) 的即時價格？" [ref=e294] [cursor=pointer]:
                - /url: "#part_4"
              - link "Polkadot (DOT) 的交易時段" [ref=e296] [cursor=pointer]:
                - /url: "#part_5"
              - link "如何保管和存儲 Polkadot (DOT)" [ref=e298] [cursor=pointer]:
                - /url: "#part_6"
              - link "如何交易 Polkadot (DOT)" [ref=e300] [cursor=pointer]:
                - /url: "#part_7"
              - link "FAQ" [ref=e302] [cursor=pointer]:
                - /url: "#part_8"
          - generic [ref=e303]:
            - generic [ref=e305]:
              - strong [ref=e306]: 最常交易
              - generic [ref=e310]:
                - button "最常交易" [ref=e311]: 最常交易
                - button "漲幅最高" [ref=e312] [cursor=pointer]: 漲幅最高
                - button "跌幅最高" [ref=e313] [cursor=pointer]: 跌幅最高
                - button "波幅最大" [ref=e314] [cursor=pointer]: 波幅最大
            - text: 所示股價僅供參考，可能與實時市價存在差異。
      - generic [ref=e318]:
        - heading "三步即可開始交易" [level=2] [ref=e320]
        - generic [ref=e321]:
          - button [ref=e323] [cursor=pointer]
          - generic [ref=e326]: 1. 建立您的帳戶（須符合資格要求）
          - generic [ref=e327]: 2. 按您的方式入金
          - generic [ref=e328]: 3. 準備就緒後即可開始
  - contentinfo [ref=e330]:
    - generic [ref=e331]:
      - link [ref=e332] [cursor=pointer]:
        - /url: /zh-hant
        - img [ref=e333]
      - generic [ref=e337]:
        - link [ref=e338] [cursor=pointer]:
          - /url: https://twitter.com/capitalcom
        - link [ref=e339] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/capital.com/
        - link [ref=e340] [cursor=pointer]:
          - /url: https://www.instagram.com/capitalcom/
        - link [ref=e341] [cursor=pointer]:
          - /url: https://www.tiktok.com/@capitalcom_international
        - link [ref=e342] [cursor=pointer]:
          - /url: https://www.facebook.com/capitalcom/
        - link [ref=e343] [cursor=pointer]:
          - /url: https://www.reddit.com/r/capitalcom/
      - generic [ref=e344]:
        - link [ref=e345] [cursor=pointer]:
          - /url: https://app.appsflyer.com/id1230088754
        - link [ref=e346] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading
        - link [ref=e347] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei
    - generic [ref=e348]:
      - generic [ref=e349]:
        - generic [ref=e350]:
          - generic [ref=e351]:
            - generic [ref=e352]: "國家 / 地區:"
            - button "Hong Kong" [ref=e353] [cursor=pointer]:
              - generic [ref=e355]: Hong Kong
          - generic [ref=e356]: •
          - generic [ref=e357]:
            - generic [ref=e358]: "語言:"
            - button "Traditional Chinese" [ref=e359] [cursor=pointer]:
              - generic [ref=e360]: Traditional Chinese
        - generic [ref=e361]:
          - generic [ref=e362]: 您還可以聯絡：
          - link "+65 3125 2302" [ref=e365] [cursor=pointer]:
            - /url: tel:+65 3125 2302
            - strong [ref=e366]: +65 3125 2302
            - strong
          - generic [ref=e367]: •
          - link "support@capital.com" [ref=e369] [cursor=pointer]:
            - /url: mailto:support@capital.com
            - strong [ref=e370]: support@capital.com
      - generic [ref=e371]:
        - generic [ref=e372]:
          - strong [ref=e374]: 交易
          - generic [ref=e375]:
            - generic [ref=e376]:
              - generic [ref=e377]: 交易
              - generic [ref=e378]:
                - link "交易差價合約 (CFD)" [ref=e380] [cursor=pointer]:
                  - /url: /zh-hant/ways-to-trade/cfd-trading
                - link "獲取模擬帳戶" [ref=e382] [cursor=pointer]:
                  - /url: /zh-hant/trading-platforms/demo-account
                - link "獲取專業帳戶" [ref=e384] [cursor=pointer]:
                  - /url: /zh-hant/professional
            - generic [ref=e385]:
              - generic [ref=e386]: 平台
              - generic [ref=e387]:
                - link "網頁版平台" [ref=e389] [cursor=pointer]:
                  - /url: /zh-hant/trading-platforms/web-platform
                - link "流動版 App" [ref=e391] [cursor=pointer]:
                  - /url: /zh-hant/trading-platforms/mobile-apps
                - link "TradingView" [ref=e393] [cursor=pointer]:
                  - /url: /zh-hant/trading-platforms/trading-view
                - link "MT4" [ref=e395] [cursor=pointer]:
                  - /url: /zh-hant/trading-platforms/mt4
                - link "MT5" [ref=e397] [cursor=pointer]:
                  - /url: /zh-hant/trading-platforms/mt5
            - generic [ref=e398]:
              - generic [ref=e399]: 學習
              - generic [ref=e400]:
                - link "交易策略" [ref=e402] [cursor=pointer]:
                  - /url: /zh-hant/learn/trading-strategies
                - link "技術分析" [ref=e404] [cursor=pointer]:
                  - /url: /zh-hant/learn/technical-analysis
                - link "交易心理" [ref=e406] [cursor=pointer]:
                  - /url: /zh-hant/learn/trading-psychology
                - link "學習" [ref=e408] [cursor=pointer]:
                  - /url: /zh-hant/learn
        - generic [ref=e409]:
          - strong [ref=e411]: 市場
          - generic [ref=e412]:
            - generic [ref=e413]:
              - generic [ref=e414]: 我們的市場
              - generic [ref=e415]:
                - link "市場" [ref=e417] [cursor=pointer]:
                  - /url: /zh-hant/markets
                - link "股票" [ref=e419] [cursor=pointer]:
                  - /url: /zh-hant/markets/shares
                - link "外匯" [ref=e421] [cursor=pointer]:
                  - /url: /zh-hant/markets/forex
                - link "指數" [ref=e423] [cursor=pointer]:
                  - /url: /zh-hant/markets/indices
                - link "大宗商品" [ref=e425] [cursor=pointer]:
                  - /url: /zh-hant/markets/commodities
                - link "加密貨幣" [ref=e427] [cursor=pointer]:
                  - /url: /zh-hant/markets/cryptocurrencies
                - link "債券" [ref=e429] [cursor=pointer]:
                  - /url: /zh-hant/markets/bonds
                - link "利率" [ref=e431] [cursor=pointer]:
                  - /url: /zh-hant/markets/interest-rates
            - generic [ref=e432]:
              - generic [ref=e433]: 市場資訊
              - link "市場分析" [ref=e436] [cursor=pointer]:
                - /url: /zh-hant/analysis
        - link "定價" [ref=e439] [cursor=pointer]:
          - /url: /zh-hant/ways-to-trade/fees-and-charges
          - strong [ref=e440]: 定價
        - generic [ref=e441]:
          - strong [ref=e443]: 關於我們
          - generic [ref=e444]:
            - generic [ref=e445]:
              - generic [ref=e446]: 關於我們
              - generic [ref=e447]:
                - link "公司簡介" [ref=e449] [cursor=pointer]:
                  - /url: /zh-hant/about-us
                - link "我們的辦公室" [ref=e451] [cursor=pointer]:
                  - /url: /zh-hant/about-us/our-offices
                - link "Capital.com 安全嗎？" [ref=e453] [cursor=pointer]:
                  - /url: /zh-hant/security-measures
                - link "我們的商業模式" [ref=e455] [cursor=pointer]:
                  - /url: /zh-hant/about-us/how-capital-makes-money
            - generic [ref=e456]:
              - generic [ref=e457]: 加入我們
              - generic [ref=e458]:
                - link "合作夥伴計劃" [ref=e460] [cursor=pointer]:
                  - /url: /zh-hant/partnerships
                - link "推薦好友" [ref=e462] [cursor=pointer]:
                  - /url: /zh-hant/refer-a-friend
            - generic [ref=e463]:
              - generic [ref=e464]: 幫助
              - generic [ref=e465]:
                - link "說明中心" [ref=e467] [cursor=pointer]:
                  - /url: /zh-hant/help
                - link "客戶脆弱性" [ref=e469] [cursor=pointer]:
                  - /url: /zh-hant/help/client-vulnerability
                - link "聯絡我們" [ref=e471] [cursor=pointer]:
                  - /url: /zh-hant/contact-us
            - generic [ref=e472]:
              - generic [ref=e473]: 法律資訊
              - generic [ref=e474]:
                - link "條款與政策" [ref=e476] [cursor=pointer]:
                  - /url: /zh-hant/terms-and-policies
                - link "投訴" [ref=e478] [cursor=pointer]:
                  - /url: /zh-hant/help/complaints
    - generic [ref=e480]:
      - paragraph [ref=e481]:
        - text: 差價合約 (CFD) 是一種複雜的金融工具，利用槓桿交易雖然可能放大收益，但同樣也會加劇虧損風險，導致資金快速流失。
        - generic [ref=e482]:
          - text: 數據顯示，
          - strong [ref=e483]: 79.75% 的散戶投資者在使用該提供商服務進行差價合約交易時出現帳戶虧損。
          - text: 在進行交易之前，請確保您充分了解差價合約的運作機制，並仔細評估自己是否有能力承擔資金虧損的高風險。
      - paragraph
      - paragraph [ref=e484]: Capital Com Online Investments Ltd 是一家有限責任公司，公司註冊號碼為 209236B。 Capital Com Online Investments Ltd 在巴哈馬國註冊，由巴哈馬證券委員會授權，許可證號為 SIA-F245。公司註冊辦公室地址是：#3 Bayside Executive Park, Blake Road and West Bay Street, P. O. Box CB 13012, Nassau, The Bahamas。
    - generic [ref=e485]:
      - paragraph [ref=e486]: © 2026 Capital Com Online Investments Ltd
      - generic [ref=e487]:
        - link "網站地圖" [ref=e488] [cursor=pointer]:
          - /url: /zh-hant/sitemap
        - link "Cookie 設定" [ref=e489] [cursor=pointer]:
          - /url: ""
        - link:
          - /url: /zh-hant
        - link "條款及條件" [ref=e490] [cursor=pointer]:
          - /url: /zh-hant/terms-and-policies
        - link "投訴程序 (SCB)" [ref=e491] [cursor=pointer]:
          - /url: /zh-hant/help/complaints
  - button [ref=e492] [cursor=pointer]
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