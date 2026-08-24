# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cta/generated.cta.spec.js >> indices page | tradingInstrument | tradedBtn
- Location: tests/cta/generated.cta.spec.js:40:7

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
  - text: عقود الفروقات هي أدوات مالية معقدة تنطوي على مخاطر عالية قد تؤدي إلى خسارة سريعة للأموال بسبب الرافعة المالية..
  - strong: وتجدر الإشارة إلى أن %79.75 من حسابات المستثمرين الأفراد تخسر الأموال عند تداول عقود الفروقات مع مقدم الخدمة هذا
  - text: . يجب أن تفكر مليّا فيما إذا كنت قادرًا على تحمّل مخاطر عالية قد تؤدي إلى خسارة أموالك. يُرجى قراءة بيان الإفصاح عن المخاطر الخاص بنا بعناية
  - link:
    - /url: /ar-int
    - img
  - navigation:
    - button "التداول":
      - button "التداول"
    - button "الأسواق":
      - button "الأسواق"
    - link "التسعير":
      - /url: /ar-int/ways-to-trade/fees-and-charges
    - button "من نحن":
      - button "من نحن"
  - button "ar"
  - button "تسجيل الدخول"
  - button "افتح حسابًا"
- paragraph:
  - link "الرئيسية":
    - /url: /ar-int
  - text: •
  - link "الأسواق":
    - /url: /ar-int/markets
  - text: •
  - link "المؤشرات":
    - /url: /ar-int/markets/indices
  - text: •US Tech 100
- heading "تداول US Tech 100 - US100 عقد الفروقات" [level=1]
- button "أضف إلى اللائحة المفضلة"
- strong: "29127.1"
- text: "-0.6%"
- link:
  - /url: ""
- button "1 شهر"
- button "5 دقائق"
- button "15 دقيقة"
- button "30 دقيقة"
- button "1 ساعة"
- button "4 ساعات"
- button "1 يوم"
- button "1 أسبوع"
- img
- button "عرض المخطط البياني التفصيلي"
- link "بيع 29125.3":
  - /url: /instrument?id=15839732013552836
  - text: بيع
  - paragraph: "29125.3"
- link "شراء 29127.1":
  - /url: /instrument?id=15839732013552836
  - text: شراء
  - paragraph: "29127.1"
- text: "1.8 منخفضة: 28896.6 مرتفعة: 29432.8"
- table
- text: "البائعون: 30.61% المشترون: 69.39%"
- button "ساعات التداول في السوق (التوقيت العالمي المُنسّق)":
  - paragraph: ساعات التداول في السوق (التوقيت العالمي المُنسّق)
  - strong: مفتوح الآن
- strong: الأداء السابق لا يعتبر مؤشرًا يعُتمد عليه للنتائج المستقبلية. الأسعار الموضحة للأسهم هي أرقام استرشادية، وقد تختلف عن الأسعار اللحظية في السوق.
- button "الملخص"
- button "البيانات التاريخية"
- strong: شروط التداول
- table:
  - rowgroup:
    - 'row "النوع هذا السوق المالي متاح للتداول من خلال عقود الفروقات. اعرف المزيد عن: عقود الفروقات عقد الفروقات"':
      - 'cell "النوع هذا السوق المالي متاح للتداول من خلال عقود الفروقات. اعرف المزيد عن: عقود الفروقات"':
        - text: "النوع هذا السوق المالي متاح للتداول من خلال عقود الفروقات. اعرف المزيد عن:"
        - link "عقود الفروقات":
          - /url: /ar-int/ways-to-trade/cfd-trading
      - cell "عقد الفروقات"
    - row "السبريد 1.8":
      - cell "السبريد"
      - cell "1.8"
    - row "رسوم تمويل التبييت لصفقات الشراء رسوم تمويل التبييت لصفقات الشراء الهامش. استثمارك $1,000.00 رسوم التبييت الرسوم من قيمة الصفقة الكاملة -0.021485 % (-$21.50) حجم الصفقة بالرافعة المالية ~$100,000.00 الأموال من الرافعة المالية ~ دولار$99,000.00 انتقل إلى المنصة -0.02149%":
      - cell "رسوم تمويل التبييت لصفقات الشراء رسوم تمويل التبييت لصفقات الشراء الهامش. استثمارك $1,000.00 رسوم التبييت الرسوم من قيمة الصفقة الكاملة -0.021485 % (-$21.50) حجم الصفقة بالرافعة المالية ~$100,000.00 الأموال من الرافعة المالية ~ دولار$99,000.00 انتقل إلى المنصة":
        - text: رسوم تمويل التبييت لصفقات الشراء
        - strong: رسوم تمويل التبييت لصفقات الشراء
        - table
        - separator
        - table:
          - rowgroup:
            - row "الهامش. استثمارك $1,000.00":
              - cell "الهامش. استثمارك"
              - cell "$1,000.00"
            - row "رسوم التبييت الرسوم من قيمة الصفقة الكاملة -0.021485 % (-$21.50)":
              - cell "رسوم التبييت الرسوم من قيمة الصفقة الكاملة"
              - cell "-0.021485 % (-$21.50)"
        - paragraph:
          - strong: حجم الصفقة بالرافعة المالية ~$100,000.00
        - paragraph:
          - strong: الأموال من الرافعة المالية ~ دولار$99,000.00
        - separator
        - link "انتقل إلى المنصة":
          - /url: ""
      - cell "-0.02149%"
    - row "رسوم تمويل التبييت لصفقات البيع على المكشوف رسوم تمويل التبييت لصفقات البيع على المكشوف الهامش. استثمارك $1,000.00 رسوم التبييت الرسوم من قيمة الصفقة الكاملة -0.000738 % (-$0.70) حجم الصفقة بالرافعة المالية ~$100,000.00 الأموال من الرافعة المالية ~ دولار$99,000.00 انتقل إلى المنصة -0.00074%":
      - cell "رسوم تمويل التبييت لصفقات البيع على المكشوف رسوم تمويل التبييت لصفقات البيع على المكشوف الهامش. استثمارك $1,000.00 رسوم التبييت الرسوم من قيمة الصفقة الكاملة -0.000738 % (-$0.70) حجم الصفقة بالرافعة المالية ~$100,000.00 الأموال من الرافعة المالية ~ دولار$99,000.00 انتقل إلى المنصة":
        - text: رسوم تمويل التبييت لصفقات البيع على المكشوف
        - strong: رسوم تمويل التبييت لصفقات البيع على المكشوف
        - table
        - separator
        - table:
          - rowgroup:
            - row "الهامش. استثمارك $1,000.00":
              - cell "الهامش. استثمارك"
              - cell "$1,000.00"
            - row "رسوم التبييت الرسوم من قيمة الصفقة الكاملة -0.000738 % (-$0.70)":
              - cell "رسوم التبييت الرسوم من قيمة الصفقة الكاملة"
              - cell "-0.000738 % (-$0.70)"
        - paragraph:
          - strong: حجم الصفقة بالرافعة المالية ~$100,000.00
        - paragraph:
          - strong: الأموال من الرافعة المالية ~ دولار$99,000.00
        - separator
        - link "انتقل إلى المنصة":
          - /url: ""
      - cell "-0.00074%"
    - row "وقت تعديل رسوم التبييت 21:00 (UTC)":
      - cell "وقت تعديل رسوم التبييت"
      - cell "21:00 (UTC)"
    - row "العملة USD":
      - cell "العملة"
      - cell "USD"
    - row "الحد الأدنى للكمية المتداولة 0.001":
      - cell "الحد الأدنى للكمية المتداولة"
      - cell "0.001"
    - row "الهامش 1.00%":
      - cell "الهامش"
      - cell "1.00%"
    - row "بورصة الأسهم":
      - cell "بورصة الأسهم"
      - cell
    - row "عمولة الصفقة1 0%":
      - cell "عمولة الصفقة1":
        - text: عمولة الصفقة
        - superscript: "1"
      - cell "0%"
    - row "علاوة أمر وقف الخسارة المضمون يتم فرض رسوم أمر وقف الخسارة المضمون (GSL) فقط في حالة تفعيل الأمر. يُرجى الاطلاع على قسم الرسوم والتكاليف على موقعنا لمزيد من التفاصيل. 0.02%":
      - cell "علاوة أمر وقف الخسارة المضمون يتم فرض رسوم أمر وقف الخسارة المضمون (GSL) فقط في حالة تفعيل الأمر. يُرجى الاطلاع على قسم الرسوم والتكاليف على موقعنا لمزيد من التفاصيل."
      - cell "0.02%"
- paragraph:
  - superscript: "1"
  - text: إن الرسوم التي نتقاضاها مقابل تنفيذ صفقاتك هي السبريد، أي الفرق بين سعري الشراء والبيع. يُرجى مراجعة قسم
  - link "التكاليف والرسوم":
    - /url: https://capital.com/ar-int/ways-to-trade/fees-and-charges
  - text: على موقعنا لمزيد من المعلومات
- main:
  - heading "تداول US Tech 100 - US100" [level=2]
  - heading "أحدث مقالات المؤشرات" [level=2]
  - link "التداول على مؤشر ناسداك 100 قبيل إعلان نتائج شركات التكنولوجيا الكبرى":
    - /url: /ar-int/analysis/nasdaq100-apr272026-2
    - img "التداول على مؤشر ناسداك 100 قبيل إعلان نتائج شركات التكنولوجيا الكبرى"
  - link "التداول على مؤشر ناسداك 100 قبيل إعلان نتائج شركات التكنولوجيا الكبرى":
    - /url: /ar-int/analysis/nasdaq100-apr272026-2
  - text: تشير المؤشرات الفنية إلى اتجاه إيجابي عبر الأطر الزمنية الرئيسية، بينما تظهر معنويات السوق أن كبار المضاربين لا يزالون في مراكز شراء، في حين يميل المتداولون الأفراد إلى البيع. 11:05, 27 أبريل 2026
  - link:
    - /url: /ar-int/trading-the-nasdaq-100-as-wti-flirts-with-100-again
  - link "التداول على مؤشر ناسداك 100 مع اقتراب خام غرب تكساس من مستوى 100 دولار مجددًا":
    - /url: /ar-int/trading-the-nasdaq-100-as-wti-flirts-with-100-again
  - text: تشير المؤشرات الفنية إلى تحول سلبي على الأطر الزمنية القصيرة، في حين تُظهر بيانات المعنويات عودة المضاربين الكبار وفق تقرير التزامات المتداولين (CoT) إلى مراكز الشراء الصافية. 09:15, 16 مارس 2026
  - link "Nasdaq":
    - /url: /ar-int/analysis/nasdaq100-february162026-2
    - img "Nasdaq"
  - link "التداول على مؤشر ناسداك 100 وسط «موجة الذعر من الذكاء الاصطناعي»":
    - /url: /ar-int/analysis/nasdaq100-february162026-2
  - text: أصبحت موضوعات التقييمات المرتفعة، والاضطراب التكنولوجي، وتدوير الاستثمارات بين القطاعات عوامل قصيرة الأجل تختبر المستويات الفنية قصيرة المدى، في حين لا يزال مزاج المتداولين يميل في غالبيته إلى الشراء. 13:10, 16 فبراير 2026
  - link "تداول مؤشر ناسداك 100 مع خضوع رئيس الاحتياطي الفيدرالي باول للتحقيق":
    - /url: /ar-int/analysis/nasdaq100-january122026-2
    - img "تداول مؤشر ناسداك 100 مع خضوع رئيس الاحتياطي الفيدرالي باول للتحقيق"
  - link "تداول مؤشر ناسداك 100 في ظل خضوع جيروم باول للتحقيق":
    - /url: /ar-int/analysis/nasdaq100-january122026-2
  - text: تشهد الأسواق المالية تحركات نحو تجنب المخاطر مع انخفاض العقود الآجلة، لكن الأمر يتطلب المزيد لزعزعة المؤشرات الفنية الإيجابية طويلة الأجل وميل الأغلبية من المتداولين نحو الشراء. 12:20, 12 يناير 2026
- complementary
- heading "ملاحظات المستخدم وتقييماته" [level=2]
- text: تعرّف على آراء عملائنا من مختلف المستويات، من المبتدئين إلى الخبراء.
- region:
  - group "1 of 14":
    - link "2025-06-30 K***** A******* سهولة السحب والإيداع متابعة ممتازة من قبل موظفين خدمة العملاء خلال الأربعة والعشرون ساعة":
      - /url: https://www.trustpilot.com/review/capital.com
      - text: 2025-06-30
      - strong: K***** A*******
      - paragraph: سهولة السحب والإيداع متابعة ممتازة من قبل موظفين خدمة العملاء خلال الأربعة والعشرون ساعة
  - group "2 of 14":
    - link "2025-06-21 k*** H***** من افضل البرامج اللتي رأيتها ، تعامل جيد ، منصة موثوقة ، فريق عمل اكثر من رائع":
      - /url: https://www.trustpilot.com/review/capital.com
      - text: 2025-06-21
      - strong: k*** H*****
      - paragraph: من افضل البرامج اللتي رأيتها ، تعامل جيد ، منصة موثوقة ، فريق عمل اكثر من رائع
  - group "3 of 14":
    - link "2025-06-13 ي **ن ***ل*** اشكركم ع اجتهداتكم والله برنامج سهل في كل شيء وبالأخص في يحب الارباح اشكركم من أعماق قلبي ❤️❤️❤️":
      - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=c622eb69-15f3-46ca-ae9e-8ae72cd8fd69&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
      - text: 2025-06-13
      - strong: ي **ن ***ل***
      - paragraph: اشكركم ع اجتهداتكم والله برنامج سهل في كل شيء وبالأخص في يحب الارباح اشكركم من أعماق قلبي ❤️❤️❤️
  - button "Go to last slide"
  - button "Next slide"
- paragraph: نستعرض هنا التقييمات المميزة ذات 4 و5 نجوم. حرصًا على خصوصية عملائنا، تم إخفاء التفاصيل الشخصية للمستخدمين عن عمد تماشيًا مع متطلبات لائحة حماية البيانات العامة (GDPR)
- link "4.6":
  - /url: https://www.tradingview.com/broker/Capitalcom/
  - strong: "4.6"
- link "التقييمات والمراجعات 4.7":
  - /url: https://app.appsflyer.com/id1230088754?cp_device_id=c622eb69-15f3-46ca-ae9e-8ae72cd8fd69&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - strong: التقييمات والمراجعات
  - strong: "4.7"
- link "التقييمات والمراجعات 4.6":
  - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=c622eb69-15f3-46ca-ae9e-8ae72cd8fd69&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - strong: التقييمات والمراجعات
  - strong: "4.6"
- link "4.6":
  - /url: https://www.trustpilot.com/review/capital.com
  - strong: "4.6"
- heading "ثلاث خطوات للبدء" [level=2]
- button
- text: 1. أنشئ حسابك (وفقًا لمعايير الأهلية) 2. أودع الأموال بالشروط التي تناسبك 3. ابدأ عندما تكون مستعدًا
- contentinfo:
  - link:
    - /url: /ar-int
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
    - /url: https://app.appsflyer.com/id1230088754?cp_device_id=c622eb69-15f3-46ca-ae9e-8ae72cd8fd69&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=c622eb69-15f3-46ca-ae9e-8ae72cd8fd69&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=c622eb69-15f3-46ca-ae9e-8ae72cd8fd69&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - text: "البلد / المنطقة:"
  - button "Egypt"
  - text: "• اللغة:"
  - button "Arabic"
  - text: "كما يمكنك الاتصال بنا على:"
  - link "+971 4 576 8641":
    - /url: tel:+971 4 576 8641
    - strong: +971 4 576 8641
    - strong
  - text: •
  - link "support@capital.com":
    - /url: mailto:support@capital.com
    - strong: support@capital.com
  - strong: التداول
  - text: التداول
  - link "تداول عقود الفروقات":
    - /url: /ar-int/ways-to-trade/cfd-trading
  - link "حاسبة تداول عقود الفروقات":
    - /url: /ar-int/ways-to-trade/cfd-trading/cfd-calculator
  - link "احصل على حساب تجريبي":
    - /url: /ar-int/trading-platforms/demo-account
  - link "الحسومات المستردة":
    - /url: /ar-int/ways-to-trade/rebates
  - link "احصل على حساب احترافي":
    - /url: /ar-int/professional
  - text: المنصات
  - link "منصة الويب":
    - /url: /ar-int/trading-platforms/web-platform
  - link "تطبيق الجوّال":
    - /url: /ar-int/trading-platforms/mobile-apps
  - link "TradingView":
    - /url: /ar-int/trading-platforms/trading-view
  - link "MT4":
    - /url: /ar-int/trading-platforms/mt4
  - link "MT5":
    - /url: /ar-int/trading-platforms/mt5
  - text: تعلّم التداول
  - link "استراتيجيات التداول":
    - /url: /ar-int/learn/trading-strategies
  - link "التحليل الفني":
    - /url: /ar-int/learn/technical-analysis
  - link "سيكولوجية التداول":
    - /url: /ar-int/learn/trading-psychology
  - link "تعلّم التداول":
    - /url: /ar-int/learn
  - link "التداول على الطروحات العامة الأولية (IPO)":
    - /url: /ar-int/learn/ipo
  - strong: الأسواق
  - text: أسواقنا
  - link "الأسواق":
    - /url: /ar-int/markets
  - link "الأسهم":
    - /url: /ar-int/markets/shares
  - link "الفوركس":
    - /url: /ar-int/markets/forex
  - link "المؤشرات":
    - /url: /ar-int/markets/indices
  - link "السلع":
    - /url: /ar-int/markets/commodities
  - link "العملات المشفّرة":
    - /url: /ar-int/markets/cryptocurrencies
  - link "السندات":
    - /url: /ar-int/markets/bonds
  - link "أسعار الفائدة":
    - /url: /ar-int/markets/interest-rates
  - text: معلومات السوق
  - link "تحليل السوق":
    - /url: /ar-int/analysis
  - link "التسعير":
    - /url: /ar-int/ways-to-trade/fees-and-charges
    - strong: التسعير
  - strong: من نحن
  - text: من نحن
  - link "من نحن":
    - /url: /ar-int/about-us
  - link "مكاتبنا":
    - /url: /ar-int/about-us/our-offices
  - link "هل capital.com آمن؟":
    - /url: /ar-int/security-measures
  - link "نموذج أعمالنا":
    - /url: /ar-int/about-us/how-capital-makes-money
  - text: اعمل معنا
  - link "برامج الشراكة":
    - /url: /ar-int/partnerships
  - link "دعوة الأصدقاء":
    - /url: /ar-int/refer-a-friend
  - text: المساعدة
  - link "مركز المساعدة":
    - /url: /ar-int/help
  - link "تعرّض العملاء للمخاطر":
    - /url: /ar-int/help/client-vulnerability
  - link "تواصل معنا":
    - /url: /ar-int/contact-us
  - text: قانوني
  - link "الشروط والسياسات":
    - /url: /ar-int/terms-and-policies
  - link "الشكاوى":
    - /url: /ar-int/help/complaints
  - paragraph:
    - text: عقود الفروقات هي أدوات مالية معقدة تنطوي على مخاطر عالية قد تؤدي إلى خسارة سريعة للأموال بسبب الرافعة المالية..
    - strong: وتجدر الإشارة إلى أن %79.75 من حسابات المستثمرين الأفراد تخسر الأموال عند تداول عقود الفروقات مع مقدم الخدمة هذا
    - text: . يجب أن تفكر مليّا فيما إذا كنت قادرًا على تحمّل مخاطر عالية قد تؤدي إلى خسارة أموالك. يُرجى قراءة بيان الإفصاح عن المخاطر الخاص بنا بعناية
  - paragraph
  - paragraph: شركة Capital Com Online Investments Ltd هي شركة ذات مسؤولية محدودة تحمل رقم 209236B، وهي مُسجلة في كومنولث جزر البهاما ومُرخصة من قبل هيئة الأوراق المالية في جزر البهاما تحت رقم ترخيص SIA-F245. يقع المكتب المُسجّل للشركة في 3 بايسايد إكزكيوتيف بارك، شارع بليك-ويست باي، ص. ب. 13012، ناسو، جزر البهاما.
  - paragraph: © 2026 Capital Com Online Investments Ltd
  - link "خريطة الموقع":
    - /url: /ar-int/sitemap
  - link "إعدادات ملفات تعريف الارتباط":
    - /url: ""
  - link:
    - /url: /ar-int
  - link "الشروط والسياسات":
    - /url: /ar-int/terms-and-policies
  - link "إجراءات تقديم الشكاوى (SCB)":
    - /url: /ar-int/help/complaints
- button
- alert: رسم بياني حي لمؤشر US100 | سعر مؤشر الأمريكي US Tech 100 | Capital.com
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
  105 |     console.log(
  106 |       await locator.evaluate((el) => {
  107 |         const rect = el.getBoundingClientRect();
  108 |         const center = {
  109 |           x: rect.left + rect.width / 2,
  110 |           y: rect.top + rect.height / 2,
  111 |         };
  112 | 
  113 |         return {
  114 |           text: el.textContent,
  115 |           center,
  116 |           elementAtPoint: document.elementFromPoint(center.x, center.y)
  117 |             ?.outerHTML,
  118 |         };
  119 |       }),
  120 |     );
  121 | 
  122 |     await locator.click({ timeout: 2000 });
  123 | 
  124 |     return { skipped: false, locator };
  125 |   }
  126 | }
  127 | 
```