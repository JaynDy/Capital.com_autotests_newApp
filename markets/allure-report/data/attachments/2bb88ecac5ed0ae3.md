# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cta/generated.cta.spec.js >> markets page | tradingInstrument | tradedBtn
- Location: tests/cta/generated.cta.spec.js:37:7

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
  - text: 差价合约 (CFD) 是一种复杂的金融工具，利用杠杆交易虽然可能放大收益，但同样也会加剧亏损风险，导致资金快速流失。数据显示，
  - strong: 79.75% 的散户投资者在使用该提供商服务进行差价合约交易时出现账户亏损。
  - text: 在进行交易之前，请确保您充分了解差价合约的运作机制，并仔细评估自己是否有能力承担资金亏损的高风险。
  - link:
    - /url: /zh-hans
    - img
  - navigation:
    - button "交易":
      - button "交易"
    - button "市场":
      - button "市场"
    - link "定价":
      - /url: /zh-hans/ways-to-trade/fees-and-charges
    - button "关于我们":
      - button "关于我们"
  - button "zh"
  - button "登录"
  - button "开立账户"
- paragraph:
  - link "首页":
    - /url: /zh-hans
  - text: •
  - link "市场":
    - /url: /zh-hans/markets
  - text: •
  - link "大宗商品":
    - /url: /zh-hans/markets/commodities
  - text: •Gold Spot
- heading "交易 Gold Spot 差价合约" [level=1]
- button "添加到收藏夹"
- strong: "4312.12"
- text: "-0.72%"
- link:
  - /url: ""
- button "1 分钟"
- button "5 分钟"
- button "15 分钟"
- button "30 分钟"
- button "1 小时"
- button "4 小时"
- button "1 天"
- button "1 周"
- img
- button "查看详细图表"
- link "卖出 4311.62":
  - /url: /instrument?id=27045129890124996
  - text: 卖出
  - paragraph: "4311.62"
- link "买入 4312.12":
  - /url: /instrument?id=27045129890124996
  - text: 买入
  - paragraph: "4312.12"
- text: "0.50 低点: 4311.39 高点: 4380.47"
- table
- text: 卖方： 23.55% 买方： 76.45%
- button "市场交易时间 (UTC)":
  - paragraph: 市场交易时间 (UTC)
  - strong: 立即开立
- strong: 過往表現並非未來業績的可靠指標. 所示股价仅供参考，可能与实时市价存在差异。
- button "内容概览"
- button "历史数据"
- strong: 交易条件
- table:
  - rowgroup:
    - 'row "类型 该金融市场可进行差价合约交易。 了解更多: 差价合约 差价合约"':
      - 'cell "类型 该金融市场可进行差价合约交易。 了解更多: 差价合约"':
        - text: "类型 该金融市场可进行差价合约交易。 了解更多:"
        - link "差价合约":
          - /url: /zh-hans/ways-to-trade/cfd-trading
      - cell "差价合约"
    - row "点差 0.5":
      - cell "点差"
      - cell "0.5"
    - row "长仓隔夜仓息调整 长仓隔夜仓息调整 保证金。您的投资 $1,000.00 隔夜仓息 来自头寸全值的费用 -0.015602 % (-$15.60) 使用杠杆的交易规模（大约值）$100,000.00 来自杠杆的资金 - 美元（大约值）$99,000.00 前往平台 -0.01560%":
      - cell "长仓隔夜仓息调整 长仓隔夜仓息调整 保证金。您的投资 $1,000.00 隔夜仓息 来自头寸全值的费用 -0.015602 % (-$15.60) 使用杠杆的交易规模（大约值）$100,000.00 来自杠杆的资金 - 美元（大约值）$99,000.00 前往平台":
        - text: 长仓隔夜仓息调整
        - strong: 长仓隔夜仓息调整
        - table
        - separator
        - table:
          - rowgroup:
            - row "保证金。您的投资 $1,000.00":
              - cell "保证金。您的投资"
              - cell "$1,000.00"
            - row "隔夜仓息 来自头寸全值的费用 -0.015602 % (-$15.60)":
              - cell "隔夜仓息 来自头寸全值的费用"
              - cell "-0.015602 % (-$15.60)"
        - paragraph:
          - strong: 使用杠杆的交易规模（大约值）$100,000.00
        - paragraph:
          - strong: 来自杠杆的资金 - 美元（大约值）$99,000.00
        - separator
        - link "前往平台":
          - /url: ""
      - cell "-0.01560%"
    - row "短仓隔夜仓息调整 短仓隔夜仓息调整 保证金。您的投资 $1,000.00 隔夜仓息 来自头寸全值的费用 0.007382 % ($7.38) 使用杠杆的交易规模（大约值）$100,000.00 来自杠杆的资金 - 美元（大约值）$99,000.00 前往平台 0.00738%":
      - cell "短仓隔夜仓息调整 短仓隔夜仓息调整 保证金。您的投资 $1,000.00 隔夜仓息 来自头寸全值的费用 0.007382 % ($7.38) 使用杠杆的交易规模（大约值）$100,000.00 来自杠杆的资金 - 美元（大约值）$99,000.00 前往平台":
        - text: 短仓隔夜仓息调整
        - strong: 短仓隔夜仓息调整
        - table
        - separator
        - table:
          - rowgroup:
            - row "保证金。您的投资 $1,000.00":
              - cell "保证金。您的投资"
              - cell "$1,000.00"
            - row "隔夜仓息 来自头寸全值的费用 0.007382 % ($7.38)":
              - cell "隔夜仓息 来自头寸全值的费用"
              - cell "0.007382 % ($7.38)"
        - paragraph:
          - strong: 使用杠杆的交易规模（大约值）$100,000.00
        - paragraph:
          - strong: 来自杠杆的资金 - 美元（大约值）$99,000.00
        - separator
        - link "前往平台":
          - /url: ""
      - cell "0.00738%"
    - row "隔夜调整仓息时间 21:00 (UTC)":
      - cell "隔夜调整仓息时间"
      - cell "21:00 (UTC)"
    - row "货币 USD":
      - cell "货币"
      - cell "USD"
    - row "最低成交量 0.01":
      - cell "最低成交量"
      - cell "0.01"
    - row "保证金 1.00%":
      - cell "保证金"
      - cell "1.00%"
    - row "证券交易所":
      - cell "证券交易所"
      - cell
    - row "交易佣金1 0%":
      - cell "交易佣金1":
        - text: 交易佣金
        - superscript: "1"
      - cell "0%"
    - row "保证止损溢价 保证止损 (GSL) 费用仅在 GSL 被触发时收取。更多详情请参阅我们网站的“服务费用”页面。 0.03%":
      - cell "保证止损溢价 保证止损 (GSL) 费用仅在 GSL 被触发时收取。更多详情请参阅我们网站的“服务费用”页面。":
        - text: 保证止损溢价 保证止损 (GSL) 费用仅在 GSL 被触发时收取。更多详情请参阅我们网站的
        - link "“服务费用”":
          - /url: /zh-hans/ways-to-trade/fees-and-charges
        - text: 页面。
      - cell "0.03%"
- paragraph:
  - superscript: "1"
  - text: 我们执行交易收取的费用是点差，即买入价和卖出价之间的差额。有关更多信息，请参阅我们网站上的
  - link "收费":
    - /url: https://capital.com/zh-hans/ways-to-trade/fees-and-charges
  - text: 页面
- main:
  - heading "交易 Gold Spot" [level=2]
  - heading "最新大宗商品文章" [level=2]
  - link "金价走势预测":
    - /url: /zh-hans/analysis/gold-price-forecast
    - img "金价走势预测"
  - link "黄金（XAU/USD）价格预测：美元走强、7月通胀":
    - /url: /zh-hans/analysis/gold-price-forecast
  - text: 黄金现货（XAU）于2026年8月27日UTC时间上午9:44报4,582.82美元，此前7月核心PCE通胀同比上涨3.3%。了解第三方黄金目标价及技术分析。过往表现并非未来业绩的可靠指标。 07:30, 3 九月 2026
  - link:
    - /url: /zh-hans/analysis/gold-eyes-5-000-as-warsh-takes-centre-stage
  - link "沃什成为市场焦点，黄金剑指5,000美元":
    - /url: /zh-hans/analysis/gold-eyes-5-000-as-warsh-takes-centre-stage
  - text: 美元走弱，加上市场对美联储加息的预期降温，继续为贵金属提供支持，推动金价进一步走高。 07:11, 25 八月 2026
  - link "黄金突破关键区间，市场信心成为核心交易主线":
    - /url: /zh-hans/analysis/gold-technical-breakout-analysis
    - img "黄金突破关键区间，市场信心成为核心交易主线"
  - link "黄金突破关键区间，市场信心成为核心交易主线":
    - /url: /zh-hans/analysis/gold-technical-breakout-analysis
  - text: 新年伊始，黄金市场呈现出一种“似曾相识却依然引人关注”的走势。 09:22, 13 一月 2026
  - link "黄金突破盘整区":
    - /url: /zh-hans/analysis/gold-breaks-the-coil
    - img "黄金突破盘整区"
  - link "黄金突破盘整区":
    - /url: /zh-hans/analysis/gold-breaks-the-coil
  - text: 经过超过一周的盘整震荡后，黄金周一终于向上突破，走出清晰的突破行情。本轮涨势突破了三角形整理形态的上轨，突破了上周与前一周的高点，并在当日收盘时站上全日高位。 18:27, 14 十一月 2025
  - strong
  - text: Reuters News • Europe
  - link "全球金市：金价持稳，投资者等候美联储官员讲话以及中东局势进展":
    - /url: /zh-hans/news/quan-qiu-jin-shi-jin-jia-chi-wen
    - strong: 全球金市：金价持稳，投资者等候美联储官员讲话以及中东局势进展
  - text: Reuters News • Europe
  - link "《全球市场》科技股引领亚股走高，加息前景提振美元":
    - /url: /zh-hans/news/quan-qiu-shi-chang-ke-ji-gu-yin
    - strong: 《全球市场》科技股引领亚股走高，加息前景提振美元
  - button
  - text: Reuters News • Europe
  - link "委内瑞拉代表团赴纽约展开磋商，寻求达成债务重组与能源合作协议":
    - /url: /zh-hans/news/wei-nei-rui-la-dai-biao-tuan-fu-niu-yue
    - strong: 委内瑞拉代表团赴纽约展开磋商，寻求达成债务重组与能源合作协议
  - text: Reuters News • Europe
  - link "《技术解析》主要商品盘中目标/关键技术位":
    - /url: /zh-hans/news/ji-shu-jie-xi-zhu-yao-shang-pin
    - strong: 《技术解析》主要商品盘中目标/关键技术位
  - text: Reuters News • Europe
  - link "全球金市：金价小涨受美债收益率回落提振，但利率前景限制涨幅":
    - /url: /zh-hans/news/quan-qiu-jin-shi-jin-jia-xiao-zhang-shou
    - strong: 全球金市：金价小涨受美债收益率回落提振，但利率前景限制涨幅
  - text: Reuters News • Europe
  - link "****《收盘快速浏览》--金属与能源等市场9月21日报导****":
    - /url: /zh-hans/news/shou-pan-kuai-su-liu
    - strong: "****《收盘快速浏览》--金属与能源等市场9月21日报导****"
  - text: Reuters News • Europe
  - link "全球金市：金价下跌，受累于央行鹰派信号提振美元":
    - /url: /zh-hans/news/quan-qiu-jin-shi-jin-jia-xia-die
    - strong: 全球金市：金价下跌，受累于央行鹰派信号提振美元
  - text: Reuters News • Europe
  - link "更新版 1-更新 1-消息人士称，由罗德里格斯率领的委内瑞拉代表团将赴美国商讨债务和能源问题":
    - /url: /zh-hans/news/geng-xin-ban-1-geng-xin-1
    - strong: 更新版 1-更新 1-消息人士称，由罗德里格斯率领的委内瑞拉代表团将赴美国商讨债务和能源问题
  - text: Reuters News • Europe 07:22 (UTC), 21 undefined 2026
  - link "全球金市：金价下跌，投资者关注中东局势及利率前景":
    - /url: /zh-hans/news/quan-qiu-jin-shi-jin-jia-xia-die
    - strong: 全球金市：金价下跌，投资者关注中东局势及利率前景
  - text: Reuters News • Europe 02:51 (UTC), 21 undefined 2026
  - link "《全球市场》科技股引领亚股走高，油价回落":
    - /url: /zh-hans/news/quan-qiu-shi-chang-ke-ji-gu-yin
    - strong: 《全球市场》科技股引领亚股走高，油价回落
- complementary
- heading "用户反馈与评分" [level=2]
- text: 阅读我们的客户反馈，无论他们的经验水平如何。
- region:
  - group "1 of 8":
    - link "2025-06-30 b************** 好，杠杆自由":
      - /url: https://www.tradingview.com/broker/Capitalcom/
      - text: 2025-06-30
      - strong: b**************
      - paragraph: 好，杠杆自由
  - group "2 of 8":
    - link "2025-02-15 j** 不错！页面简洁实用，用起来顺畅":
      - /url: https://www.trustpilot.com/review/capital.com
      - text: 2025-02-15
      - strong: j**
      - paragraph: 不错！页面简洁实用，用起来顺畅
  - group "3 of 8":
    - link "2024-06-22 Y****** 一个好喜欢平台，操作方便":
      - /url: https://www.trustpilot.com/review/capital.com
      - text: 2024-06-22
      - strong: Y******
      - paragraph: 一个好喜欢平台，操作方便
  - button "Go to last slide"
  - button "Next slide"
- paragraph: 展示我们的 4 星和 5 星好评。为遵守 GDPR 要求并保护用户隐私，用户的具体信息已被匿名处理
- link "4.6":
  - /url: https://www.tradingview.com/broker/Capitalcom/
  - strong: "4.6"
- link "评分与评论 4.7":
  - /url: https://app.appsflyer.com/id1230088754?cp_device_id=772332d3-038f-47b4-9c52-0f79ad176b31&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - strong: 评分与评论
  - strong: "4.7"
- link "评分与评论 4.6":
  - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=772332d3-038f-47b4-9c52-0f79ad176b31&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - strong: 评分与评论
  - strong: "4.6"
- link "4.6":
  - /url: https://www.trustpilot.com/review/capital.com
  - strong: "4.6"
- heading "三步即可开始交易" [level=2]
- button
- text: 1. 创建您的账户（须符合资格要求） 2. 按您的方式存款 3. 准备就绪后即可开始
- contentinfo:
  - link:
    - /url: /zh-hans
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
    - /url: https://app.appsflyer.com/id1230088754?cp_device_id=772332d3-038f-47b4-9c52-0f79ad176b31&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=772332d3-038f-47b4-9c52-0f79ad176b31&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=772332d3-038f-47b4-9c52-0f79ad176b31&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - text: "国家/地区:"
  - button
  - text: "• 语言:"
  - button
  - text: 您还可以联系：
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
  - link "交易差价合约 (CFD)":
    - /url: /zh-hans/ways-to-trade/cfd-trading
  - link "获取模拟账户":
    - /url: /zh-hans/trading-platforms/demo-account
  - link "获取专业账户":
    - /url: /zh-hans/professional
  - text: 平台
  - link "网页版平台":
    - /url: /zh-hans/trading-platforms/web-platform
  - link "手机 App":
    - /url: /zh-hans/trading-platforms/mobile-apps
  - link "TradingView":
    - /url: /zh-hans/trading-platforms/trading-view
  - link "MT4":
    - /url: /zh-hans/trading-platforms/mt4
  - link "MT5":
    - /url: /zh-hans/trading-platforms/mt5
  - link "AI 集成":
    - /url: /zh-hans/trading-platforms/ai-integration
  - text: 学习
  - link "交易策略":
    - /url: /zh-hans/learn/trading-strategies
  - link "技术分析":
    - /url: /zh-hans/learn/technical-analysis
  - link "交易心理":
    - /url: /zh-hans/learn/trading-psychology
  - link "学习":
    - /url: /zh-hans/learn
  - strong: 市场
  - text: 我们的市场
  - link "市场":
    - /url: /zh-hans/markets
  - link "股票":
    - /url: /zh-hans/markets/shares
  - link "外汇":
    - /url: /zh-hans/markets/forex
  - link "指数":
    - /url: /zh-hans/markets/indices
  - link "大宗商品":
    - /url: /zh-hans/markets/commodities
  - link "加密货币":
    - /url: /zh-hans/markets/cryptocurrencies
  - link "债券":
    - /url: /zh-hans/markets/bonds
  - link "利率":
    - /url: /zh-hans/markets/interest-rates
  - text: 市场信息
  - link "市场分析":
    - /url: /zh-hans/analysis
  - link "定价":
    - /url: /zh-hans/ways-to-trade/fees-and-charges
    - strong: 定价
  - strong: 关于我们
  - text: 关于我们
  - link "公司简介":
    - /url: /zh-hans/about-us
  - link "我们的办公室":
    - /url: /zh-hans/about-us/our-offices
  - link "Capital.com 安全吗？":
    - /url: /zh-hans/security-measures
  - link "我们的商业模式":
    - /url: /zh-hans/about-us/how-capital-makes-money
  - text: 加入我们
  - link "合作伙伴计划":
    - /url: /zh-hans/partnerships
  - link "推荐好友":
    - /url: /zh-hans/refer-a-friend
  - text: 帮助
  - link "帮助中心":
    - /url: /zh-hans/help
  - link "客户脆弱性":
    - /url: /zh-hans/help/client-vulnerability
  - link "联系我们":
    - /url: /zh-hans/contact-us
  - text: 法律信息
  - link "条款与政策":
    - /url: /zh-hans/terms-and-policies
  - link "投诉":
    - /url: /zh-hans/help/complaints
  - paragraph:
    - text: 差价合约 (CFD) 是一种复杂的金融工具，利用杠杆交易虽然可能放大收益，但同样也会加剧亏损风险，导致资金快速流失。数据显示，
    - strong: 79.75% 的散户投资者在使用该提供商服务进行差价合约交易时出现账户亏损。
    - text: 在进行交易之前，请确保您充分了解差价合约的运作机制，并仔细评估自己是否有能力承担资金亏损的高风险。
  - paragraph
  - paragraph: Capital Com Online Investments Ltd 是一家有限责任公司，公司注册号为 209236B。Capital Com Online Investments Ltd 在巴哈马国注册，由巴哈马证券委员会授权，许可证号为 SIA-F245。公司注册办事处地址是：#3 Bayside Executive Park, Blake Road and West Bay Street, P. O. Box CB 13012, Nassau, The Bahamas。
  - paragraph: © 2026 Capital Com Online Investments Ltd
  - link "网站地图":
    - /url: /zh-hans/sitemap
  - link "Cookie 设置":
    - /url: ""
  - link:
    - /url: /zh-hans
  - link "条款和政策":
    - /url: /zh-hans/terms-and-policies
  - link "投诉程序 (SCB)":
    - /url: /zh-hans/help/complaints
- button
- alert: Gold 实时价格图表 | 交易 Gold Spot | Capital.com
```

# Test source

```ts
  1   | import { expect } from "@playwright/test";
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
> 101 |     await expect(locator).toBeVisible();
      |                           ^ Error: expect(locator).toBeVisible() failed
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
  128 |     await locator.click({ timeout: 2000 });
  129 |     const newPage = newPagePromise ? await newPagePromise : null;
  130 | 
  131 |     return { skipped: false, locator, newPage };
  132 |   }
  133 | }
  134 | 
```