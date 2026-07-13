# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cta/generated.cta.spec.js >> forex page | tradingInstrument | tradedBtn
- Location: tests/cta/generated.cta.spec.js:16:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('[data-type="wdg_most_traded_btn"]').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('[data-type="wdg_most_traded_btn"]').first()

```

```yaml
- banner:
  - text: 差價合約 (CFD) 是一種複雜的金融工具，利用槓桿交易雖然可能放大收益，但同樣也會加劇虧損風險，導致資金快速流失。數據顯示，
  - strong: 78.48% 的散戶投資者在使用該提供商服務進行差價合約交易時出現帳戶虧損。
  - text: 在進行交易之前，請確保您充分了解差價合約的運作機制，並仔細評估自己是否有能力承擔資金虧損的高風險。
  - link:
    - /url: /zh-hant
    - img
  - navigation:
    - button "交易":
      - button "交易"
    - button "市場":
      - button "市場"
    - link "定價":
      - /url: /zh-hant/ways-to-trade/fees-and-charges
    - button "關於我們":
      - button "關於我們"
  - button "zh"
  - button "登入"
  - button "開設賬戶"
- paragraph:
  - link "首頁":
    - /url: /zh-hant
  - text: •
  - link "市場":
    - /url: /zh-hant/markets
  - text: •
  - link "外匯":
    - /url: /zh-hant/markets/forex
  - text: •Euro / US Dollar
- heading "交易 Euro / US Dollar 差價合約" [level=1]
- button "新增到我的最愛"
- strong: "1.14317"
- text: +0%
- link:
  - /url: ""
- button "1 分鐘"
- button "5 分鐘"
- button "15 分鐘"
- button "30 分鐘"
- button "1 小時"
- button "4 小時"
- button "1 天"
- button "1 周"
- img
- button "查看詳細圖表"
- link "賣出 1.14310":
  - /url: /instrument?id=93810675766468
  - text: 賣出
  - paragraph: "1.14310"
- link "買入 1.14317":
  - /url: /instrument?id=93810675766468
  - text: 買入
  - paragraph: "1.14317"
- text: "0.00007 低點: 1.13863 高點: 1.14581"
- table
- text: 賣方： 41.08% 買方： 58.92%
- button "市場交易時間 (UTC)":
  - paragraph: 市場交易時間 (UTC)
  - strong: 立即開立
- strong: 過往表現並非未來業績的可靠指標. 所示股價僅供參考，可能與實時市價存在差異。
- button "內容概覽"
- button "歷史數據"
- strong: 交易條件
- table:
  - rowgroup:
    - row "類型 該金融市場可進行差價合約交易。 了解更多： 差價合約 差價合約":
      - cell "類型 該金融市場可進行差價合約交易。 了解更多： 差價合約":
        - text: 類型 該金融市場可進行差價合約交易。 了解更多：
        - link "差價合約":
          - /url: /zh-hant/ways-to-trade/cfd-trading
      - cell "差價合約"
    - row "點差 0.00007":
      - cell "點差"
      - cell "0.00007"
    - row "長倉隔夜倉息調整 長倉隔夜倉息調整 保證金。您的投資 $1,000.00 隔夜倉息 來自頭寸全值的費用 -0.00805 % (-$8.05) 使用杠杆的交易規模（大約值）$100,000.00 來自杠杆的資金 - 美元（大約值）$99,000.00 前往平台 -0.00805%":
      - cell "長倉隔夜倉息調整 長倉隔夜倉息調整 保證金。您的投資 $1,000.00 隔夜倉息 來自頭寸全值的費用 -0.00805 % (-$8.05) 使用杠杆的交易規模（大約值）$100,000.00 來自杠杆的資金 - 美元（大約值）$99,000.00 前往平台":
        - text: 長倉隔夜倉息調整
        - strong: 長倉隔夜倉息調整
        - table
        - separator
        - table:
          - rowgroup:
            - row "保證金。您的投資 $1,000.00":
              - cell "保證金。您的投資"
              - cell "$1,000.00"
            - row "隔夜倉息 來自頭寸全值的費用 -0.00805 % (-$8.05)":
              - cell "隔夜倉息 來自頭寸全值的費用"
              - cell "-0.00805 % (-$8.05)"
        - paragraph:
          - strong: 使用杠杆的交易規模（大約值）$100,000.00
        - paragraph:
          - strong: 來自杠杆的資金 - 美元（大約值）$99,000.00
        - separator
        - link "前往平台":
          - /url: ""
      - cell "-0.00805%"
    - row "短倉隔夜倉息調整 短倉隔夜倉息調整 保證金。您的投資 $1,000.00 隔夜倉息 來自頭寸全值的費用 -0.00017 % (-$0.17) 使用杠杆的交易規模（大約值）$100,000.00 來自杠杆的資金 - 美元（大約值）$99,000.00 前往平台 -0.00017%":
      - cell "短倉隔夜倉息調整 短倉隔夜倉息調整 保證金。您的投資 $1,000.00 隔夜倉息 來自頭寸全值的費用 -0.00017 % (-$0.17) 使用杠杆的交易規模（大約值）$100,000.00 來自杠杆的資金 - 美元（大約值）$99,000.00 前往平台":
        - text: 短倉隔夜倉息調整
        - strong: 短倉隔夜倉息調整
        - table
        - separator
        - table:
          - rowgroup:
            - row "保證金。您的投資 $1,000.00":
              - cell "保證金。您的投資"
              - cell "$1,000.00"
            - row "隔夜倉息 來自頭寸全值的費用 -0.00017 % (-$0.17)":
              - cell "隔夜倉息 來自頭寸全值的費用"
              - cell "-0.00017 % (-$0.17)"
        - paragraph:
          - strong: 使用杠杆的交易規模（大約值）$100,000.00
        - paragraph:
          - strong: 來自杠杆的資金 - 美元（大約值）$99,000.00
        - separator
        - link "前往平台":
          - /url: ""
      - cell "-0.00017%"
    - row "隔夜倉息調整時間 21:00 (UTC)":
      - cell "隔夜倉息調整時間"
      - cell "21:00 (UTC)"
    - row "貨幣 USD":
      - cell "貨幣"
      - cell "USD"
    - row "最低成交量 100":
      - cell "最低成交量"
      - cell "100"
    - row "保證金 1.00%":
      - cell "保證金"
      - cell "1.00%"
    - row "證券交易所":
      - cell "證券交易所"
      - cell
    - row "交易佣金1 0%":
      - cell "交易佣金1":
        - text: 交易佣金
        - superscript: "1"
      - cell "0%"
    - row "保證止損溢價 保證止損 (GSL) 費用僅在 GSL 被觸發時收取。更多詳情請參閱我們網站的「服務費用」 頁面。 0.01%":
      - cell "保證止損溢價 保證止損 (GSL) 費用僅在 GSL 被觸發時收取。更多詳情請參閱我們網站的「服務費用」 頁面。":
        - text: 保證止損溢價 保證止損 (GSL) 費用僅在 GSL 被觸發時收取。更多詳情請參閱我們網站的
        - link "「服務費用」":
          - /url: /zh-hant/ways-to-trade/fees-and-charges
        - text: 頁面。
      - cell "0.01%"
- paragraph:
  - superscript: "1"
  - text: 我們執行交易收取的費用是點差，即買入價和賣出價之間的差額。有關更多資訊，請參閱我們網站上的
  - link "收費":
    - /url: https://capital.com/zh-hant/ways-to-trade/fees-and-charges
  - text: 頁面
- main:
  - heading "交易 Euro / US Dollar" [level=2]
  - heading "最新貨幣文章" [level=2]
  - link "日圓走勢預測":
    - /url: /zh-hant/analysis/usd-to-jpy-forecast
    - img "日圓走勢預測"
  - link "日圓走勢預測：第三方價格目標":
    - /url: /zh-hant/analysis/usd-to-jpy-forecast
  - text: 2025年截至目前，美元兌日圓（USD/JPY）匯率年內下跌約9.41%。2025年4月25日，日圓兌美元收於142.8790，創下自2024年9月以來的最強水平之一，較2024年7月的高點161.942下跌約11.77%。 11:17, 19 6月 2025
  - strong
  - text: Reuters News • Europe
  - link "歐洲匯市：英鎊走低，因伊朗襲擊推高油價及美元":
    - /url: /zh-hant/news/ou-zhou-hui-shi-ying-bang-zou-di
    - strong: 歐洲匯市：英鎊走低，因伊朗襲擊推高油價及美元
  - text: Reuters News • Europe
  - link "《全球匯市》美伊衝突再度升級之際美元震盪，養老基金相關疑慮打壓日圓":
    - /url: /zh-hant/news/quan-qiu-hui-shi-mei-yi-chong-tu
    - strong: 《全球匯市》美伊衝突再度升級之際美元震盪，養老基金相關疑慮打壓日圓
  - text: Reuters News • Europe
  - link "《分析》全球養老基金縮減外匯對沖，支撐美元進一步走強":
    - /url: /zh-hant/news/fen-xi-quan-qiu-yang-lao-ji-jin
    - strong: 《分析》全球養老基金縮減外匯對沖，支撐美元進一步走強
  - text: Reuters News • Europe
  - link "《匯市短評》美元看漲押注接近紀錄高位，正日益成為隱憂":
    - /url: /zh-hant/news/hui-shi-duan-ping-mei-yuan-kan-zhang
    - strong: 《匯市短評》美元看漲押注接近紀錄高位，正日益成為隱憂
  - text: Reuters News • Europe
  - link "《匯市簡訊》歐元兌美元反彈乏力，可能預示著更深幅度的下跌":
    - /url: /zh-hant/news/hui-shi-jian-xun-ou-yuan-dui-mei
    - strong: 《匯市簡訊》歐元兌美元反彈乏力，可能預示著更深幅度的下跌
  - text: Reuters News • Europe
  - link "《全球匯市》美元走高，受中東及霍爾木茲海峽局勢再度升級刺激":
    - /url: /zh-hant/news/quan-qiu-hui-shi-mei-yuan-zou-gao
    - strong: 《全球匯市》美元走高，受中東及霍爾木茲海峽局勢再度升級刺激
  - text: Reuters News • Europe
  - link "《匯市簡訊》歐元兌多數貨幣在亞洲時段承壓，唯歐元/瑞郎逆勢上行":
    - /url: /zh-hant/news/hui-shi-jian-xun-ou-yuan-dui-duo
    - strong: 《匯市簡訊》歐元兌多數貨幣在亞洲時段承壓，唯歐元/瑞郎逆勢上行
  - text: Reuters News • Europe
  - link "《全球匯市》美元上漲，因中東戰火再起、霍爾木茲海峽關閉":
    - /url: /zh-hant/news/quan-qiu-hui-shi-mei-yuan-shang-zhang
    - strong: 《全球匯市》美元上漲，因中東戰火再起、霍爾木茲海峽關閉
  - text: Reuters News • Europe 19:03 (UTC), 10 undefined 2026
  - link "《全球匯市》日圓全線上漲，日本計劃鼓勵養老基金增投國內資產":
    - /url: /zh-hant/news/quan-qiu-hui-shi-ri-yuan-quan-xian
    - strong: 《全球匯市》日圓全線上漲，日本計劃鼓勵養老基金增投國內資產
  - text: Reuters News • Europe 09:57 (UTC), 10 undefined 2026
  - link "新興市場-受中東局勢緊張及科技股回調影響，新興市場股票本周料將下跌":
    - /url: /zh-hant/news/xin-xing-shi-chang-shou-zhong-dong-ju-shi
    - strong: 新興市場-受中東局勢緊張及科技股回調影響，新興市場股票本周料將下跌
- complementary
- heading "用戶意見與評分" [level=2]
- text: 閱讀我們的客戶回饋，無論他們的經驗水平如何。
- region:
  - group "1 of 7":
    - link "2024-08-29 d********** 操作簡單，安全可靠！對新手太友好啦~已經推薦給周圍的朋友啦":
      - /url: https://www.tradingview.com/broker/Capitalcom/
      - text: 2024-08-29
      - strong: d**********
      - paragraph: 操作簡單，安全可靠！對新手太友好啦~已經推薦給周圍的朋友啦
  - group "2 of 7":
    - link "2022-06-20 黃** 順滑介面":
      - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=7bf54fed-0d82-44ae-a9b5-c833e563c34a&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
      - text: 2022-06-20
      - strong: 黃**
      - paragraph: 順滑介面
  - group "3 of 7":
    - link "2024-06-15 孫****** 很簡單":
      - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=7bf54fed-0d82-44ae-a9b5-c833e563c34a&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
      - text: 2024-06-15
      - strong: 孫******
      - paragraph: 很簡單
  - button "Go to last slide"
  - button "Next slide"
- paragraph: 展示我們的 4 星和 5 星好評。為遵守 GDPR 要求並保護用戶隱私，用戶的具體資料已被匿名處理
- link "4.6":
  - /url: https://www.tradingview.com/broker/Capitalcom/
  - strong: "4.6"
- link "評級和評論 4.7":
  - /url: https://app.appsflyer.com/id1230088754?cp_device_id=7bf54fed-0d82-44ae-a9b5-c833e563c34a&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - strong: 評級和評論
  - strong: "4.7"
- link "評級和評論 4.6":
  - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=7bf54fed-0d82-44ae-a9b5-c833e563c34a&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - strong: 評級和評論
  - strong: "4.6"
- link "4.6":
  - /url: https://www.trustpilot.com/review/capital.com
  - strong: "4.6"
- heading "三步即可開始交易" [level=2]
- button
- text: 1. 建立您的帳戶（須符合資格要求） 2. 按您的方式入金 3. 準備就緒後即可開始交易
- contentinfo:
  - link:
    - /url: /zh-hant
    - img
  - link:
    - /url: https://twitter.com/capitalcom
  - link:
    - /url: https://www.linkedin.com/company/capital.com/
  - link:
    - /url: https://www.instagram.com/capitalcom/
  - link:
    - /url: https://www.tiktok.com/@capitalcom_international
  - link:
    - /url: https://www.facebook.com/capitalcom/
  - link:
    - /url: https://www.reddit.com/r/capitalcom/
  - link:
    - /url: https://app.appsflyer.com/id1230088754?cp_device_id=7bf54fed-0d82-44ae-a9b5-c833e563c34a&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=7bf54fed-0d82-44ae-a9b5-c833e563c34a&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=7bf54fed-0d82-44ae-a9b5-c833e563c34a&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - text: "國家 / 地區:"
  - button "Hong Kong"
  - text: "• 語言:"
  - button "Traditional Chinese"
  - text: 您還可以聯絡：
  - link "+65 3125 2302":
    - /url: tel:+65 3125 2302
    - strong: +65 3125 2302
    - strong
  - text: •
  - link "support@capital.com":
    - /url: mailto:support@capital.com
    - strong: support@capital.com
  - strong: 交易
  - text: 交易
  - link "交易差價合約 (CFD)":
    - /url: /zh-hant/ways-to-trade/cfd-trading
  - link "獲取模擬帳戶":
    - /url: /zh-hant/trading-platforms/demo-account
  - link "獲取專業帳戶":
    - /url: /zh-hant/professional
  - text: 平台
  - link "網頁版平台":
    - /url: /zh-hant/trading-platforms/web-platform
  - link "流動版 App":
    - /url: /zh-hant/trading-platforms/mobile-apps
  - link "TradingView":
    - /url: /zh-hant/trading-platforms/trading-view
  - link "MT4":
    - /url: /zh-hant/trading-platforms/mt4
  - link "MT5":
    - /url: /zh-hant/trading-platforms/mt5
  - text: 學習
  - link "交易策略":
    - /url: /zh-hant/learn/trading-strategies
  - link "技術分析":
    - /url: /zh-hant/learn/technical-analysis
  - link "交易心理":
    - /url: /zh-hant/learn/trading-psychology
  - link "學習":
    - /url: /zh-hant/learn
  - strong: 市場
  - text: 我們的市場
  - link "市場":
    - /url: /zh-hant/markets
  - link "股票":
    - /url: /zh-hant/markets/shares
  - link "外匯":
    - /url: /zh-hant/markets/forex
  - link "指數":
    - /url: /zh-hant/markets/indices
  - link "大宗商品":
    - /url: /zh-hant/markets/commodities
  - link "加密貨幣":
    - /url: /zh-hant/markets/cryptocurrencies
  - link "債券":
    - /url: /zh-hant/markets/bonds
  - link "利率":
    - /url: /zh-hant/markets/interest-rates
  - text: 市場資訊
  - link "市場分析":
    - /url: /zh-hant/analysis
  - link "定價":
    - /url: /zh-hant/ways-to-trade/fees-and-charges
    - strong: 定價
  - strong: 關於我們
  - text: 關於我們
  - link "公司簡介":
    - /url: /zh-hant/about-us
  - link "我們的辦公室":
    - /url: /zh-hant/about-us/our-offices
  - link "Capital.com 安全嗎？":
    - /url: /zh-hant/security-measures
  - link "我們的商業模式":
    - /url: /zh-hant/about-us/how-capital-makes-money
  - text: 加入我們
  - link "合作夥伴計劃":
    - /url: /zh-hant/partnerships
  - link "推薦朋友":
    - /url: /zh-hant/refer-a-friend
  - text: 幫助
  - link "說明中心":
    - /url: /zh-hant/help
  - link "客戶脆弱性":
    - /url: /zh-hant/help/client-vulnerability
  - link "聯絡我們":
    - /url: /zh-hant/contact-us
  - text: 法律資訊
  - link "條款與政策":
    - /url: /zh-hant/terms-and-policies
  - link "投訴":
    - /url: /zh-hant/help/complaints
  - paragraph:
    - text: 差價合約 (CFD) 是一種複雜的金融工具，利用槓桿交易雖然可能放大收益，但同樣也會加劇虧損風險，導致資金快速流失。數據顯示，
    - strong: 78.48% 的散戶投資者在使用該提供商服務進行差價合約交易時出現帳戶虧損。
    - text: 在進行交易之前，請確保您充分了解差價合約的運作機制，並仔細評估自己是否有能力承擔資金虧損的高風險。
  - paragraph
  - paragraph: Capital Com Online Investments Ltd 是一家有限責任公司，公司註冊號碼為 209236B。 Capital Com Online Investments Ltd 在巴哈馬國註冊，由巴哈馬證券委員會授權，許可證號為 SIA-F245。公司註冊辦公室地址是：#3 Bayside Executive Park, Blake Road and West Bay Street, P. O. Box CB 13012, Nassau, The Bahamas。
  - paragraph: © 2026 Capital Com Online Investments Ltd
  - link "網站地圖":
    - /url: /zh-hant/sitemap
  - link "Cookie 設定":
    - /url: ""
  - link:
    - /url: /zh-hant
  - link "條款及條件":
    - /url: /zh-hant/terms-and-policies
  - link "投訴程序 (SCB)":
    - /url: /zh-hant/help/complaints
- button
- alert
```

# Test source

```ts
  2   | 
  3   | export class CTAComponent {
  4   |   constructor(page, sectionConfig) {
  5   |     this.page = page;
  6   |     // this.root = page.locator(sectionConfig.root);
  7   |     this.actions = sectionConfig.actions || {};
  8   |     this.helpers = sectionConfig.helpers || {};
  9   |     this.setup = sectionConfig.setup;
  10  |     // this.skipRootValidation = sectionConfig.skipRootValidation;
  11  |     this.root = this.resolveLocator(sectionConfig.root);
  12  |   }
  13  | 
  14  |   async expectVisible() {
  15  |     await expect(this.root).toBeVisible({ timeout: 20000 });
  16  |   }
  17  | 
  18  |   resolveLocator(locatorConfig) {
  19  |     if (!locatorConfig) {
  20  |       throw new Error("Locator is undefined in CTA config");
  21  |     }
  22  | 
  23  |     if (
  24  |       typeof locatorConfig !== "string" &&
  25  |       typeof locatorConfig !== "function"
  26  |     ) {
  27  |       throw new Error(
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
  81  |   async click(actionName) {
  82  |     console.log("START CLICK", actionName);
  83  | 
  84  |     await this.runSetup();
  85  | 
  86  |     await this.runActionSetup(actionName);
  87  | 
  88  |     const action = this.actions[actionName];
  89  |     let locator = this.getActionLocator(actionName);
  90  | 
  91  |     if (action.locatorIndex !== undefined) {
  92  |       locator = locator.nth(action.locatorIndex);
  93  |     }
  94  | 
  95  |     const count = await locator.count();
  96  |     console.log("COUNT", actionName, count);
  97  | 
  98  |     if (action.optional && count === 0) {
  99  |       return { skipped: true };
  100 |     }
  101 | 
> 102 |     await expect(locator).toBeVisible();
      |                           ^ Error: expect(locator).toBeVisible() failed
  103 |     await expect(locator).toBeEnabled();
  104 | 
  105 |     await locator.click({ timeout: 2000 });
  106 | 
  107 |     return { skipped: false, locator };
  108 |   }
  109 | }
  110 | 
```