# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cta/generated.cta.spec.js >> GLOBAL | main page | footer | socialMediaBar | downloadAppStoreBtn
- Location: tests/cta/generated.cta.spec.js:37:7

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "https://app.appsflyer.com/id1230088754"
Received string:    "https://apps.apple.com/ie/app/capital-com-trading-finance/id1230088754"
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e7]:
      - text: CFD нь нарийн төвөгтэй хэрэгсэл бөгөөд хөшүүргийн улмаас мөнгөө хурдан алдах өндөр эрсдэлтэй байдаг. Жижиг хөрөнгө оруулагчдын
      - generic [ref=e8]:
        - strong [ref=e9]: 79.75%
        - text: нь CFD арилжаа хийх үедээ мөнгөө алддаг. Та CFD хэрхэн ажилладгийг ойлгож байгаа эсэх мөн мөнгөө алдах өндөр эрсдэл хүлээж чадах эсэхээ бодолцож үзэх хэрэгтэй.
    - generic [ref=e11]:
      - link [ref=e12] [cursor=pointer]:
        - /url: /mn-int
        - img [ref=e13]
      - generic [ref=e18]:
        - navigation [ref=e19]:
          - button "Арилжаа" [ref=e20]:
            - button "Арилжаа" [ref=e21]:
              - generic [ref=e22]: Арилжаа
          - button "Зах зээлүүд" [ref=e23]:
            - button "Зах зээлүүд" [ref=e24]:
              - generic [ref=e25]: Зах зээлүүд
          - button "Тухай" [ref=e26]:
            - button "Тухай" [ref=e27]:
              - generic [ref=e28]: Тухай
          - link "Үнэ" [ref=e31] [cursor=pointer]:
            - /url: /mn-int/ways-to-trade/fees-and-charges
        - button "mn" [ref=e32] [cursor=pointer]:
          - generic [ref=e34]: mn
      - generic [ref=e36]:
        - button "Нэвтрэх" [ref=e37] [cursor=pointer]: Нэвтрэх
        - button "Данс нээх" [ref=e38] [cursor=pointer]: Данс нээх
  - generic [ref=e41]:
    - generic [ref=e42]:
      - generic [ref=e43]:
        - generic [ref=e48]:
          - generic [ref=e50]:
            - heading "Дуулианд зориулагдсан зах зээлд бид илүү сайн шийдвэр гаргахын төлөө бүтээн байгуулалт хийдэг" [level=1] [ref=e51]
            - generic [ref=e53]:
              - text: Дэлхийн
              - text: CFD арилжааны платформ
              - text: 5,500+ хэрэгсэл
            - button "Данс нээх" [ref=e54] [cursor=pointer]: Данс нээх
          - generic [ref=e55]:
            - generic:
              - generic:
                - img "Hero slide 1 Bottom"
          - generic [ref=e57]:
            - link "Android" [ref=e58] [cursor=pointer]:
              - /url: /mn-int/trading-platforms/mobile-apps
            - link "IOS" [ref=e59] [cursor=pointer]:
              - /url: /mn-int/trading-platforms/mobile-apps
            - link "MT4" [ref=e60] [cursor=pointer]:
              - /url: /mn-int/trading-platforms/mt4
            - link "MT5" [ref=e61] [cursor=pointer]:
              - /url: /mn-int/trading-platforms/mt5
            - link "TradingView" [ref=e62] [cursor=pointer]:
              - /url: /mn-int/trading-platforms/trading-view
            - link "Вэб терминал" [ref=e63] [cursor=pointer]:
              - /url: /mn-int/trading-platforms/web-platform
        - generic [ref=e66]:
          - heading "Дотоод дэмжлэгтэй. Олон улстай холбогдсон." [level=2] [ref=e67]:
            - generic [ref=e68]: Дотоод дэмжлэгтэй.
            - text: Олон улстай холбогдсон.
          - paragraph [ref=e70]: Багамын Үнэт цаасны хорооноос (SCB) зөвшөөрөл авсан ба зохицуулагддаг.
      - generic [ref=e72]:
        - img "MarketsFeature background" [ref=e74]
        - generic [ref=e75]:
          - generic [ref=e76]:
            - heading "5,500+ хэрэгсэл. Нэг шийдвэрт суурилсан орчин" [level=2] [ref=e77]:
              - text: 5,500+ хэрэгсэл.
              - text: Нэг шийдвэрт суурилсан орчин
            - link "CFD зах зээлүүдийг судлах" [ref=e78] [cursor=pointer]:
              - /url: /mn-int/markets
          - list [ref=e82]:
            - listitem [ref=e83]:
              - button "Түүхий эдийн" [ref=e84] [cursor=pointer]:
                - heading "Түүхий эдийн" [level=3] [ref=e87]
            - listitem [ref=e88]:
              - button "Крипто" [ref=e89] [cursor=pointer]:
                - heading "Крипто" [level=3] [ref=e92]
            - listitem [ref=e93]:
              - button "Хувьцаа" [ref=e94] [cursor=pointer]:
                - heading "Хувьцаа" [level=3] [ref=e97]
            - listitem [ref=e98]:
              - button "Бондууд" [ref=e99] [cursor=pointer]:
                - heading "Бондууд" [level=3] [ref=e102]
            - listitem [ref=e103]:
              - button "ETF" [ref=e104] [cursor=pointer]:
                - heading "ETF" [level=3] [ref=e107]
            - listitem [ref=e108]:
              - button "Индексийн" [ref=e109] [cursor=pointer]:
                - heading "Индексийн" [level=3] [ref=e112]
            - listitem [ref=e113]:
              - button "Хүүгийн хувь хэмжээ" [ref=e114] [cursor=pointer]:
                - heading "Хүүгийн хувь хэмжээ" [level=3] [ref=e117]
            - listitem [ref=e118]:
              - button "Түүхий эдийн" [ref=e119] [cursor=pointer]:
                - heading "Түүхий эдийн" [level=3] [ref=e122]
            - listitem [ref=e123]:
              - button "Крипто" [ref=e124] [cursor=pointer]:
                - heading "Крипто" [level=3] [ref=e127]
            - listitem [ref=e128]:
              - button "Хувьцаа" [ref=e129] [cursor=pointer]:
                - heading "Хувьцаа" [level=3] [ref=e132]
            - listitem [ref=e133]:
              - button "Бондууд" [ref=e134] [cursor=pointer]:
                - heading "Бондууд" [level=3] [ref=e137]
            - listitem [ref=e138]:
              - button "ETF" [ref=e139] [cursor=pointer]:
                - heading "ETF" [level=3] [ref=e142]
            - listitem [ref=e143]:
              - button "Индексийн" [ref=e144] [cursor=pointer]:
                - heading "Индексийн" [level=3] [ref=e147]
            - listitem [ref=e148]:
              - button "Хүүгийн хувь хэмжээ" [ref=e149] [cursor=pointer]:
                - heading "Хүүгийн хувь хэмжээ" [level=3] [ref=e152]
            - listitem [ref=e153]:
              - button "Түүхий эдийн" [ref=e154] [cursor=pointer]:
                - heading "Түүхий эдийн" [level=3] [ref=e157]
            - listitem [ref=e158]:
              - button "Крипто" [ref=e159] [cursor=pointer]:
                - heading "Крипто" [level=3] [ref=e162]
            - listitem [ref=e163]:
              - button "Хувьцаа" [ref=e164] [cursor=pointer]:
                - heading "Хувьцаа" [level=3] [ref=e167]
            - listitem [ref=e168]:
              - button "Бондууд" [ref=e169] [cursor=pointer]:
                - heading "Бондууд" [level=3] [ref=e172]
            - listitem [ref=e173]:
              - button "ETF" [ref=e174] [cursor=pointer]:
                - heading "ETF" [level=3] [ref=e177]
            - listitem [ref=e178]:
              - button "Индексийн" [ref=e179] [cursor=pointer]:
                - heading "Индексийн" [level=3] [ref=e182]
            - listitem [ref=e183]:
              - button "Хүүгийн хувь хэмжээ" [ref=e184] [cursor=pointer]:
                - heading "Хүүгийн хувь хэмжээ" [level=3] [ref=e187]
    - generic [ref=e188]:
      - generic [ref=e190]:
        - heading "Бүх дэлгэцэн дээр. Нэг систем." [level=2] [ref=e191]:
          - text: Бүх дэлгэцэн дээр.
          - generic [ref=e192]: Нэг систем.
        - paragraph [ref=e194]: Олон платформ, бүх зах зээл, ямар ч төхөөрөмж. Таны арилжааны дэд бүтэц.
        - generic [ref=e196]:
          - button "Апп татах" [ref=e197] [cursor=pointer]: Апп татах
          - link "Ширээний компьютер дээр арилжаа хийх" [ref=e198] [cursor=pointer]:
            - /url: /trading/platform/
      - generic:
        - generic:
          - generic:
            - img "Mobile platform"
        - generic:
          - generic:
            - img "Web platform"
    - generic [ref=e199]:
      - img "PricingScreen background" [ref=e201]
      - generic [ref=e203]:
        - heading "Шийдвэр гаргахын өмнөх зардлын тодорхой бүтэц" [level=2] [ref=e204]
        - generic [ref=e205]:
          - list [ref=e206]:
            - listitem [ref=e207]:
              - heading "Бид гүйцэтгэсэн арилжааны спрэдээр орлого олдог" [level=3] [ref=e208]
              - paragraph [ref=e210]: Позицийн өмнө ил тод.
            - listitem [ref=e211]:
              - heading "Депозит эсвэл татан авалтын хураамж байхгүй" [level=3] [ref=e212]
              - paragraph [ref=e214]: Найдвартай төлөлтүүд. Банкны шилжүүлэг, карт, дижитал хэтэвчүүд.
          - generic [ref=e216]:
            - paragraph [ref=e217]: Манай бүрэн төлбөрийн бүтэц манай
            - paragraph [ref=e218]:
              - link "Хураамж, төлбөрийн хуудсанд байна." [ref=e219] [cursor=pointer]:
                - /url: /mn-int/ways-to-trade/fees-and-charges
    - generic [ref=e220]:
      - generic [ref=e222]:
        - img "risk graph 1" [ref=e224]
        - img "risk graph 2" [ref=e226]
      - generic [ref=e227]:
        - generic [ref=e229]:
          - heading "Ихэнх арилжаачид мөнгө алддаг" [level=2] [ref=e231]
          - heading "Зах зээл чухал үүрэг гүйцэтгэдэг" [level=2] [ref=e233]
          - heading "Шийдвэр нь өөрчлөлтийг авчирдаг" [level=2] [ref=e235]
        - generic [ref=e236]:
          - generic [ref=e238]:
            - heading "Тайван байхдаа тохируулаарай." [level=2] [ref=e239]
            - heading "Дарамтад тэсвэртэй." [level=2] [ref=e240]
          - generic [ref=e241]:
            - generic [ref=e242]:
              - heading "Арилжааны өмнө стоп-лоссоо тохируулаарай" [level=3] [ref=e243]
              - img "trading" [ref=e245]
            - generic [ref=e246]:
              - heading "Хөшүүрэг сонгоорой" [level=3] [ref=e247]
              - img "cfd" [ref=e249]
              - img "leverage" [ref=e251]
            - generic [ref=e252]:
              - heading "Захиалгыг баталгаажуулаарай" [level=3] [ref=e253]
              - img "bottomSheet" [ref=e255]
    - generic [ref=e256]:
      - generic [ref=e257]:
        - heading "Сахилга бат харагдана. Итгэл ч бас." [level=2] [ref=e259]:
          - text: Сахилга бат харагдана.
          - text: Итгэл ч бас.
        - generic [ref=e260]:
          - img "Secondary phone" [ref=e263]
          - img "Main phone" [ref=e266]
      - list [ref=e272]:
        - listitem [ref=e273]:
          - link "4.7 Үнэлгээ ба сэтгэгдлүүд" [ref=e274] [cursor=pointer]:
            - /url: https://app.appsflyer.com/id1230088754?cp_device_id=ac16a0c6-c6db-4f53-b983-7ba84e773d7b&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - generic [ref=e275]: "4.7"
            - generic [ref=e276]: Үнэлгээ ба сэтгэгдлүүд
        - listitem [ref=e277]:
          - link "4.6 Үнэлгээ ба сэтгэгдлүүд" [ref=e278] [cursor=pointer]:
            - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=ac16a0c6-c6db-4f53-b983-7ba84e773d7b&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - generic [ref=e279]: "4.6"
            - generic [ref=e280]: Үнэлгээ ба сэтгэгдлүүд
        - listitem [ref=e281]:
          - link "4.6 TradingView" [ref=e282] [cursor=pointer]:
            - /url: https://www.tradingview.com/broker/Capitalcom/
            - generic [ref=e283]: "4.6"
            - generic [ref=e284]: TradingView
        - listitem [ref=e285]:
          - link "4.6 Trustpilot" [ref=e286] [cursor=pointer]:
            - /url: https://www.trustpilot.com/review/capital.com
            - generic [ref=e287]: "4.6"
            - generic [ref=e288]: Trustpilot
        - listitem [ref=e289]:
          - link "4.7 Үнэлгээ ба сэтгэгдлүүд" [ref=e290] [cursor=pointer]:
            - /url: https://app.appsflyer.com/id1230088754?cp_device_id=ac16a0c6-c6db-4f53-b983-7ba84e773d7b&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - generic [ref=e291]: "4.7"
            - generic [ref=e292]: Үнэлгээ ба сэтгэгдлүүд
        - listitem [ref=e293]:
          - link "4.6 Үнэлгээ ба сэтгэгдлүүд" [ref=e294] [cursor=pointer]:
            - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=ac16a0c6-c6db-4f53-b983-7ba84e773d7b&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - generic [ref=e295]: "4.6"
            - generic [ref=e296]: Үнэлгээ ба сэтгэгдлүүд
        - listitem [ref=e297]:
          - link "4.6 TradingView" [ref=e298] [cursor=pointer]:
            - /url: https://www.tradingview.com/broker/Capitalcom/
            - generic [ref=e299]: "4.6"
            - generic [ref=e300]: TradingView
        - listitem [ref=e301]:
          - link "4.6 Trustpilot" [ref=e302] [cursor=pointer]:
            - /url: https://www.trustpilot.com/review/capital.com
            - generic [ref=e303]: "4.6"
            - generic [ref=e304]: Trustpilot
        - listitem [ref=e305]:
          - link "4.7 Үнэлгээ ба сэтгэгдлүүд" [ref=e306] [cursor=pointer]:
            - /url: https://app.appsflyer.com/id1230088754?cp_device_id=ac16a0c6-c6db-4f53-b983-7ba84e773d7b&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - generic [ref=e307]: "4.7"
            - generic [ref=e308]: Үнэлгээ ба сэтгэгдлүүд
        - listitem [ref=e309]:
          - link "4.6 Үнэлгээ ба сэтгэгдлүүд" [ref=e310] [cursor=pointer]:
            - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=ac16a0c6-c6db-4f53-b983-7ba84e773d7b&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - generic [ref=e311]: "4.6"
            - generic [ref=e312]: Үнэлгээ ба сэтгэгдлүүд
        - listitem [ref=e313]:
          - link "4.6 TradingView" [ref=e314] [cursor=pointer]:
            - /url: https://www.tradingview.com/broker/Capitalcom/
            - generic [ref=e315]: "4.6"
            - generic [ref=e316]: TradingView
        - listitem [ref=e317]:
          - link "4.6 Trustpilot" [ref=e318] [cursor=pointer]:
            - /url: https://www.trustpilot.com/review/capital.com
            - generic [ref=e319]: "4.6"
            - generic [ref=e320]: Trustpilot
  - contentinfo [ref=e322]:
    - generic [ref=e323]:
      - link [ref=e324] [cursor=pointer]:
        - /url: /mn-int
        - img [ref=e325]
      - generic [ref=e329]:
        - link [ref=e330] [cursor=pointer]:
          - /url: https://twitter.com/capitalcom
        - link [ref=e331] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/capital.com/
        - link [ref=e332] [cursor=pointer]:
          - /url: https://www.instagram.com/capitalcom/
        - link [ref=e333] [cursor=pointer]:
          - /url: https://www.tiktok.com/@capitalcom_international
        - link [ref=e334] [cursor=pointer]:
          - /url: https://www.facebook.com/capitalcom/
        - link [ref=e335] [cursor=pointer]:
          - /url: https://www.reddit.com/r/capitalcom/
      - generic [ref=e336]:
        - link [active] [ref=e337] [cursor=pointer]:
          - /url: https://app.appsflyer.com/id1230088754?cp_device_id=ac16a0c6-c6db-4f53-b983-7ba84e773d7b&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e338] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=ac16a0c6-c6db-4f53-b983-7ba84e773d7b&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e339] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=ac16a0c6-c6db-4f53-b983-7ba84e773d7b&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
    - generic [ref=e340]:
      - generic [ref=e341]:
        - generic [ref=e342]:
          - generic [ref=e343]:
            - generic [ref=e344]: "Улс орон:"
            - button "Mongolia" [ref=e345] [cursor=pointer]:
              - generic [ref=e347]: Mongolia
          - generic [ref=e348]: •
          - generic [ref=e349]:
            - generic [ref=e350]: "Хэл:"
            - button "Mongolian" [ref=e351] [cursor=pointer]:
              - generic [ref=e352]: Mongolian
        - generic [ref=e353]:
          - generic [ref=e354]: "Мөн бидэнтэй дараах байдлаар холбогдож болно:"
          - link "+442080899989" [ref=e357] [cursor=pointer]:
            - /url: tel:+442080899989
            - strong [ref=e358]: "+442080899989"
            - strong
          - generic [ref=e359]: •
          - link "support@capital.com" [ref=e361] [cursor=pointer]:
            - /url: mailto:support@capital.com
            - strong [ref=e362]: support@capital.com
      - generic [ref=e363]:
        - generic [ref=e364]:
          - strong [ref=e366]: Арилжаа
          - generic [ref=e367]:
            - generic [ref=e368]:
              - generic [ref=e369]: Арилжаа
              - generic [ref=e370]:
                - link "CFD арилжаа хийх" [ref=e372] [cursor=pointer]:
                  - /url: /mn-int/ways-to-trade/cfd-trading
                - link "Демо данстай болох" [ref=e374] [cursor=pointer]:
                  - /url: /mn-int/trading-platforms/demo-account
            - generic [ref=e375]:
              - generic [ref=e376]: Платформууд
              - generic [ref=e377]:
                - link "Вэб платформ" [ref=e379] [cursor=pointer]:
                  - /url: /mn-int/trading-platforms/web-platform
                - link "Гар утасны апп" [ref=e381] [cursor=pointer]:
                  - /url: /mn-int/trading-platforms/mobile-apps
                - link "TradingView" [ref=e383] [cursor=pointer]:
                  - /url: /mn-int/trading-platforms/trading-view
                - link "MT4" [ref=e385] [cursor=pointer]:
                  - /url: /mn-int/trading-platforms/mt4
                - link "MT5" [ref=e387] [cursor=pointer]:
                  - /url: /mn-int/trading-platforms/mt5
        - generic [ref=e388]:
          - strong [ref=e390]: Зах зээлүүд
          - generic [ref=e392]:
            - generic [ref=e393]: Манай зах зээлүүд
            - generic [ref=e394]:
              - link "Зах зээлүүд" [ref=e396] [cursor=pointer]:
                - /url: /mn-int/markets
              - link "Хувьцаа" [ref=e398] [cursor=pointer]:
                - /url: /mn-int/markets/shares
              - link "Форекс" [ref=e400] [cursor=pointer]:
                - /url: /mn-int/markets/forex
              - link "Индекс" [ref=e402] [cursor=pointer]:
                - /url: /mn-int/markets/indices
              - link "Түүхий эд" [ref=e404] [cursor=pointer]:
                - /url: /mn-int/markets/commodities
              - link "Криптовалютууд" [ref=e406] [cursor=pointer]:
                - /url: /mn-int/markets/cryptocurrencies
              - link "Бондууд" [ref=e408] [cursor=pointer]:
                - /url: /mn-int/markets/bonds
              - link "Хүүгийн хувь хэмжээ" [ref=e410] [cursor=pointer]:
                - /url: /mn-int/markets/interest-rates
        - generic [ref=e411]:
          - strong [ref=e413]: Тухай
          - generic [ref=e414]:
            - generic [ref=e415]:
              - generic [ref=e416]: Бид хэн бэ
              - generic [ref=e417]:
                - link "Тухай" [ref=e419] [cursor=pointer]:
                  - /url: /mn-int/about-us
                - link "Манай оффисууд" [ref=e421] [cursor=pointer]:
                  - /url: /mn-int/about-us/our-offices
                - link "Capital.com аюулгүй юу?" [ref=e423] [cursor=pointer]:
                  - /url: /mn-int/security-measures
                - link "Манай бизнесийн загвар" [ref=e425] [cursor=pointer]:
                  - /url: /mn-int/about-us/how-capital-makes-money
            - generic [ref=e426]:
              - generic [ref=e427]: Бидэнтэй ажиллах
              - link "Найзаа урих" [ref=e430] [cursor=pointer]:
                - /url: /mn-int/refer-a-friend
            - generic [ref=e431]:
              - generic [ref=e432]: Тусламж
              - generic [ref=e433]:
                - link "Тусламжийн төв" [ref=e435] [cursor=pointer]:
                  - /url: /mn-int/help
                - link "Үйлчлүүлэгчийн эмзэг байдал" [ref=e437] [cursor=pointer]:
                  - /url: /mn-int/help/client-vulnerability
                - link "Бидэнтэй холбоо барих" [ref=e439] [cursor=pointer]:
                  - /url: /mn-int/contact-us
            - generic [ref=e440]:
              - generic [ref=e441]: Хууль эрх зүй
              - generic [ref=e442]:
                - link "Нөхцөл ба бодлого" [ref=e444] [cursor=pointer]:
                  - /url: /mn-int/terms-and-policies
                - link "Санал гомдол" [ref=e446] [cursor=pointer]:
                  - /url: /mn-int/help/complaints
        - link "Үнэ" [ref=e449] [cursor=pointer]:
          - /url: /mn-int/ways-to-trade/fees-and-charges
          - strong [ref=e450]: Үнэ
    - generic [ref=e452]:
      - paragraph [ref=e453]:
        - text: CFD нь нарийн төвөгтэй хэрэгсэл бөгөөд хөшүүргийн улмаас мөнгөө хурдан алдах өндөр эрсдэлтэй байдаг. Жижиг хөрөнгө оруулагчдын
        - generic [ref=e454]:
          - strong [ref=e455]: 79.75%
          - text: нь CFD арилжаа хийх үедээ мөнгөө алддаг. Та CFD хэрхэн ажилладгийг ойлгож байгаа эсэх мөн мөнгөө алдах өндөр эрсдэл хүлээж чадах эсэхээ бодолцож үзэх хэрэгтэй.
      - paragraph
      - paragraph [ref=e456]: "Capital Com Online Investments Ltd нь 209236B тоот компанийн дугаартай хязгаарлагдмал хариуцлагатай компани юм. Capital Com Online Investments Ltd нь Багамын хамтын нөхөрлөлд бүртгэлтэй бөгөөд Багамын Үнэт цаасны хорооноос SIA-F245 тоот лицензийн дугаартай зөвшөөрлөөр баталгаажсан компани юм. Компанийн бүртгэлтэй оффис #3 Bayside Executive Park, Blake Road and West Bay Street, ш/х CB 13012, Nassau Багамын арал дээр байрладаг."
    - generic [ref=e457]:
      - paragraph [ref=e458]: © 2026 Capital Com Online Investments Ltd
      - generic [ref=e459]:
        - link:
          - /url: /mn-int
        - link "Күүки тохиргоо" [ref=e460] [cursor=pointer]:
          - /url: ""
        - link "Үйлчлүүлэгчдийн мөнгө" [ref=e461] [cursor=pointer]:
          - /url: /mn-int
        - link "Нөхцөл ба бодлого" [ref=e462] [cursor=pointer]:
          - /url: /mn-int/terms-and-policies
        - link "Санал гомдлын журам (SCB)" [ref=e463] [cursor=pointer]:
          - /url: /mn-int/help/complaints
  - button [ref=e464] [cursor=pointer]
  - alert [ref=e466]
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
  10  |   newPage,
  11  | ) {
  12  |   console.log("EXPECTATION ASSERTIONS", expectation);
  13  |   const currentUrl = testInfo.project.use.baseURL;
  14  |   const currentLicense = testInfo.project.use.licenseName;
  15  |   const currentLang = testInfo.project.use.langName;
  16  |   // console.log("Current URL: ", currentUrl);
  17  | 
  18  |   const expectationType =
  19  |     typeof expectation === "string" ? expectation : expectation.type;
  20  | 
  21  |   switch (expectationType) {
  22  |     case "redirects to platform":
  23  |       await expect(page).toHaveURL(/trading\/platform/);
  24  |       break;
  25  | 
  26  |     case "shows signup form":
  27  |       await expect(
  28  |         // page.locator('form[data-sentry-component="SignUp"]'),
  29  |         page.locator('[data-type="SIGN_UP_close"]'),
  30  |       ).toBeVisible();
  31  |       break;
  32  | 
  33  |     case "shows login form":
  34  |       await expect(page.locator('[data-testid="modal-title"]'));
  35  |       break;
  36  | 
  37  |     case "redirect": {
  38  |       const pageConfig = ctaRegistry[expectation.page].path;
  39  | 
  40  |       // const pagePath = ctaRegistry[expectation.page].path;
  41  |       const pagePath =
  42  |         typeof pageConfig === "function"
  43  |           ? pageConfig(currentLicense)
  44  |           : pageConfig;
  45  | 
  46  |       const expectedURL = pagePath ? `${currentUrl}/${pagePath}` : currentUrl;
  47  |       await expect(page).toHaveURL(new RegExp(`${expectedURL}/?$`));
  48  |       break;
  49  |     }
  50  | 
  51  |     case "opens external link": {
  52  |       const href = await locator.getAttribute("href");
  53  |       expect(href).toContain(action.expectedHrefContains);
  54  |       await expect(locator).toHaveAttribute("target", "_blank");
  55  | 
  56  |       await newPage.waitForLoadState("domcontentloaded");
> 57  |       expect(newPage.url()).toContain(action.expectedHrefContains);
      |                             ^ Error: expect(received).toContain(expected) // indexOf
  58  |       await expect(newPage).not.toHaveTitle("404 Not Found");
  59  |       break;
  60  |     }
  61  | 
  62  |     case "opens regional settings window": {
  63  |       await expect(page.locator('[data-sentry-component="CountryLangSelect"]'));
  64  |       break;
  65  |     }
  66  | 
  67  |     case "exist corresponding license": {
  68  |       const expectedLicenses = action.licenseText?.[currentLicense];
  69  | 
  70  |       if (expectedLicenses?.length) {
  71  |         for (const text of expectedLicenses) {
  72  |           await expect(locator).toContainText(text);
  73  |         }
  74  |       } else {
  75  |         await expect(locator).toContainText(currentLicense);
  76  |       }
  77  | 
  78  |       break;
  79  |     }
  80  | 
  81  |     case "opens cookie menu": {
  82  |       await expect(page.locator(".consent-pc-modal__content"));
  83  |       break;
  84  |     }
  85  | 
  86  |     case "opens pdf document": {
  87  |       const href = await locator.getAttribute("href");
  88  | 
  89  |       expect(href).toContain(action.expectedHrefContains);
  90  |       await expect(locator).toHaveAttribute("target", "_blank");
  91  | 
  92  |       const browserName = testInfo.project.use.browserName;
  93  | 
  94  |       if (browserName.includes("webkit")) {
  95  |         const [download] = await Promise.all([
  96  |           page.waitForEvent("download"),
  97  |           locator.click(),
  98  |         ]);
  99  | 
  100 |         const path = await download.path();
  101 |         expect(path).not.toBeNull();
  102 | 
  103 |         const fs = await import("node:fs/promises");
  104 |         const stat = await fs.stat(path);
  105 | 
  106 |         expect(
  107 |           stat.size,
  108 |           `Downloaded file "${download.suggestedFilename()}" is empty`,
  109 |         ).toBeGreaterThan(0);
  110 |       } else {
  111 |         const [pdfPage] = await Promise.all([
  112 |           page.context().waitForEvent("page"),
  113 |           locator.click(),
  114 |         ]);
  115 | 
  116 |         await pdfPage.waitForLoadState("domcontentloaded");
  117 | 
  118 |         expect(pdfPage.url()).toContain(action.expectedHrefContains);
  119 |         await expect(pdfPage.locator("body")).not.toContainText(
  120 |           "HTTP ERROR 404",
  121 |         );
  122 |       }
  123 |       break;
  124 |     }
  125 | 
  126 |     case "opens link on currentURL": {
  127 |       const currentUrl = page.url();
  128 | 
  129 |       console.log("EXPECTED:", await locator.getAttribute("href"));
  130 |       console.log("ACTUAL:", currentUrl);
  131 | 
  132 |       expect(currentUrl).toContain(action.expectedHrefContains);
  133 |       await expect(page.locator("body")).not.toContainText("HTTP ERROR 404");
  134 | 
  135 |       break;
  136 |     }
  137 | 
  138 |     default:
  139 |       throw new Error(`Unknown expectation: ${expectation}`);
  140 |   }
  141 | }
  142 | 
```