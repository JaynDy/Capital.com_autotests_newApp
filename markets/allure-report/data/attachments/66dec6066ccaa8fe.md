# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cta/generated.cta.spec.js >> forex page | tradingInstrument | tradedBtn
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
  - text: تخضع شركة Capital Com MENA لتداول الأوراق المالية ذ.م.م لرقابة وإشراف هيئة السوق المالية.
  - link:
    - /url: /ar-ae
    - img
  - navigation:
    - button "التداول":
      - button "التداول"
    - button "الأسواق":
      - button "الأسواق"
    - link "التسعير":
      - /url: /ar-ae/ways-to-trade/fees-and-charges
    - button "من نحن":
      - button "من نحن"
  - button "ar"
  - button "تسجيل الدخول"
  - button "افتح حسابًا"
- paragraph:
  - link "الرئيسية":
    - /url: /ar-ae
  - text: •
  - link "الأسواق":
    - /url: /ar-ae/markets
  - text: •
  - link "الفوركس":
    - /url: /ar-ae/markets/forex
  - text: •Euro / US Dollar
- heading "تداول Euro / US Dollar عقد الفروقات" [level=1]
- button "أضف إلى اللائحة المفضلة"
- strong: "1.15550"
- text: 0%
- link:
  - /url: ""
- button "1 د"
- button "5 د"
- button "15 د"
- button "30 د"
- button "1 س"
- button "4 س"
- button "1 د"
- button "1 أ"
- img
- button "View detailed chart"
- link "البيع 1.15543":
  - /url: /instrument?id=93810675766468
  - text: البيع
  - paragraph: "1.15543"
- link "الشراء 1.15550":
  - /url: /instrument?id=93810675766468
  - text: الشراء
  - paragraph: "1.15550"
- text: "0.00007 منخفض: 1.15198 عالي: 1.15763"
- table
- text: "البائعون: 50.15% المشترون: 49.85%"
- button "ساعات التداول في السوق":
  - paragraph: ساعات التداول في السوق
  - strong: مفتوحًا الآن
- strong: الأداء السابق لا يعتبر مؤشرًا يعُتمد عليه للنتائج المستقبلية. الأسعار الموضحة للأسهم هي أرقام استرشادية، وقد تختلف عن الأسعار اللحظية في السوق.
- button "الملخص"
- button "بيانات الفترات السابقة"
- strong: شروط التداول
- table:
  - rowgroup:
    - 'row "النوع هذا السوق المالي متاح للتداول من خلال عقود الفروقات. اعرف المزيد عن: عقود الفروقات عقد الفروقات"':
      - 'cell "النوع هذا السوق المالي متاح للتداول من خلال عقود الفروقات. اعرف المزيد عن: عقود الفروقات"':
        - text: "النوع هذا السوق المالي متاح للتداول من خلال عقود الفروقات. اعرف المزيد عن:"
        - link "عقود الفروقات":
          - /url: /ar-ae/ways-to-trade/cfd-trading
      - cell "عقد الفروقات"
    - row "الفارق 0.00007":
      - cell "الفارق"
      - cell "0.00007"
    - row "رسوم التبييت على مركز الشراء رسوم التبييت على مركز الشراء الهامش. استثمارك $1,000.00 رسم المبيت -0.0081 % (-$16.20) حجم التداول مع الرافعة المالية ~ $$200,000.00 المال من الرافعة المالية ~ $199,000.00 الذهاب إلى المنصة -0.00810%":
      - cell "رسوم التبييت على مركز الشراء رسوم التبييت على مركز الشراء الهامش. استثمارك $1,000.00 رسم المبيت -0.0081 % (-$16.20) حجم التداول مع الرافعة المالية ~ $$200,000.00 المال من الرافعة المالية ~ $199,000.00 الذهاب إلى المنصة":
        - text: رسوم التبييت على مركز الشراء
        - strong: رسوم التبييت على مركز الشراء
        - table
        - separator
        - table:
          - rowgroup:
            - row "الهامش. استثمارك $1,000.00":
              - cell "الهامش. استثمارك"
              - cell "$1,000.00"
            - row "رسم المبيت -0.0081 % (-$16.20)":
              - cell "رسم المبيت"
              - cell "-0.0081 % (-$16.20)"
        - paragraph:
          - strong: حجم التداول مع الرافعة المالية ~ $$200,000.00
        - paragraph:
          - strong: المال من الرافعة المالية ~ $199,000.00
        - separator
        - link "الذهاب إلى المنصة":
          - /url: ""
      - cell "-0.00810%"
    - row "رسوم التبييت على مركز البيع رسوم التبييت على مركز البيع الهامش. استثمارك $1,000.00 رسم المبيت -0.00012 % (-$0.24) حجم التداول مع الرافعة المالية ~ $$200,000.00 المال من الرافعة المالية ~ $199,000.00 الذهاب إلى المنصة -0.00012%":
      - cell "رسوم التبييت على مركز البيع رسوم التبييت على مركز البيع الهامش. استثمارك $1,000.00 رسم المبيت -0.00012 % (-$0.24) حجم التداول مع الرافعة المالية ~ $$200,000.00 المال من الرافعة المالية ~ $199,000.00 الذهاب إلى المنصة":
        - text: رسوم التبييت على مركز البيع
        - strong: رسوم التبييت على مركز البيع
        - table
        - separator
        - table:
          - rowgroup:
            - row "الهامش. استثمارك $1,000.00":
              - cell "الهامش. استثمارك"
              - cell "$1,000.00"
            - row "رسم المبيت -0.00012 % (-$0.24)":
              - cell "رسم المبيت"
              - cell "-0.00012 % (-$0.24)"
        - paragraph:
          - strong: حجم التداول مع الرافعة المالية ~ $$200,000.00
        - paragraph:
          - strong: المال من الرافعة المالية ~ $199,000.00
        - separator
        - link "الذهاب إلى المنصة":
          - /url: ""
      - cell "-0.00012%"
    - row "اوقات رسوم التبييت 21:00 (UTC)":
      - cell "اوقات رسوم التبييت"
      - cell "21:00 (UTC)"
    - row "العملة USD":
      - cell "العملة"
      - cell "USD"
    - row "الحد الأدنى للكمية المتداولة 100":
      - cell "الحد الأدنى للكمية المتداولة"
      - cell "100"
    - row "الهامش 0.50%":
      - cell "الهامش"
      - cell "0.50%"
    - row "التداول بالاسهم":
      - cell "التداول بالاسهم"
      - cell
    - row "عمولة الصفقة1 0%":
      - cell "عمولة الصفقة1":
        - text: عمولة الصفقة
        - superscript: "1"
      - cell "0%"
    - row "علاوة أمر وقف الخسارة المضمون يتم فرض رسوم أمر وقف الخسارة المضمون (GSL) فقط في حالة تفعيل الأمر. يُرجى الاطلاع على قسم الرسوم والتكاليف على موقعنا لمزيد من التفاصيل. 0.01%":
      - cell "علاوة أمر وقف الخسارة المضمون يتم فرض رسوم أمر وقف الخسارة المضمون (GSL) فقط في حالة تفعيل الأمر. يُرجى الاطلاع على قسم الرسوم والتكاليف على موقعنا لمزيد من التفاصيل."
      - cell "0.01%"
- paragraph:
  - superscript: "1"
  - text: إن الرسوم التي نتقاضاها مقابل تنفيذ صفقاتك هي السبريد، أي الفرق بين سعري الشراء والبيع. يُرجى مراجعة قسم
  - link "التكاليف والرسوم":
    - /url: https://capital.com/ar-ae/ways-to-trade/fees-and-charges
  - text: على موقعنا لمزيد من المعلومات
- main:
  - heading "تداول Euro / US Dollar" [level=2]
  - heading "Latest currencies articles" [level=2]
  - link:
    - /url: /ar-ae/analysis/usd-forecast
  - 'link "التوقعات للدولار الأمريكي: مؤشر الدولار الامريكي (DXY) ينخفض في ظل مشاعر السوق الحذرة"':
    - /url: /ar-ae/analysis/usd-forecast
  - text: وصل مؤشر الدولار الامريكي DXY إلى أدنى مستوى له في سبعة أشهر في يناير، بعد بضعة أشهر فقط من بلوغ ذروة استمرت لعقود في أواخر سبتمبر. 15:28, 8 مايو 2024
  - link:
    - /url: /ar-ae/analysis/euro-forecast
  - 'link "توقعات اليورو: هل سيستمر اليورو في الارتفاع؟"':
    - /url: /ar-ae/analysis/euro-forecast
  - text: كان عام 2022 عامًا صعبًا لليورو، بسبب غزو روسيا لأوكرانيا والتضخم المتفشي، فهل سيكون أفضل في عام 2023؟ 13:18, 6 مايو 2024
  - link "رموز العملات للولايات المتحدة الأمريكية (USD) وسريلانكا (LKR) على أعلامهما الوطنية":
    - /url: /ar-ae/analysis/usd-lkr-forecast-will-the-sri-lankan-rupee-keep-falling
    - img "رموز العملات للولايات المتحدة الأمريكية (USD) وسريلانكا (LKR) على أعلامهما الوطنية"
  - 'link "توقعات USD/LKR: هل ستستمر الروبية السريلانكية في الانخفاض؟"':
    - /url: /ar-ae/analysis/usd-lkr-forecast-will-the-sri-lankan-rupee-keep-falling
  - text: مع تعمق الأزمة الاقتصادية والسياسية، هل يمكن أن يرتفع USD/LKR إلى مستوى قياسي جديد في عام 2023 وما بعده؟ 10:09, 21 مايو 2024
  - link:
    - /url: /ar-ae/analysis/usd-to-pkr-forecast
  - 'link "توقعات USD/PKR: هل ستستمر الروبية الباكستانية في الانخفاض؟"':
    - /url: /ar-ae/analysis/usd-to-pkr-forecast
  - text: لقد ارتدت عملة الروبية الباكستانية مقابل الدولار في الأشهر الأخيرة، فهل يستمر هذا الاتجاه؟ 12:31, 8 مايو 2024
  - strong
  - text: Reuters News • Europe
  - link "الدولار قرب قاع شهرين مع ترقب بيانات التضخم الأمريكية":
    - /url: /ar-ae/news/aldwlar-qrb-qa-shhryn-m-trqb-byanat-altdkhm-alamrykyt
    - strong: الدولار قرب قاع شهرين مع ترقب بيانات التضخم الأمريكية
  - text: Reuters News • Europe 09:29 (UTC), 7 أغسطس 2026
  - link "مقدمة 1-الدولار يتجه لمكاسب أسبوعية مع ترقب محادثات إيران وبيانات أمريكية":
    - /url: /ar-ae/news/mqdmt-1-aldwlar-ytjh-lmkasb-asbw-yt-m-trqb-mhadthat-ayran-wbyanat
    - strong: مقدمة 1-الدولار يتجه لمكاسب أسبوعية مع ترقب محادثات إيران وبيانات أمريكية
  - text: Reuters News • Europe 03:09 (UTC), 7 أغسطس 2026
  - link "الدولار يرتفع قبيل صدور بيانات الوظائف الأمريكية":
    - /url: /ar-ae/news/aldwlar-yrtf-qbyl-sdwr-byanat-alwzayf-alamrykyt
    - strong: الدولار يرتفع قبيل صدور بيانات الوظائف الأمريكية
  - text: Reuters News • Europe 09:07 (UTC), 6 أغسطس 2026
  - link "مقدمة 1- الين يتراجع والدولار قرب مستويات متدنية مع ترقب تطورات حرب إيران":
    - /url: /ar-ae/news/mqdmt-1-alyn-ytraj-waldwlar-qrb-mstwyat-mtdnyt-m-trqb-ttwrat
    - strong: مقدمة 1- الين يتراجع والدولار قرب مستويات متدنية مع ترقب تطورات حرب إيران
  - text: Reuters News • Europe 02:51 (UTC), 6 أغسطس 2026
  - link "تراجع الين والدولار مع متابعة تطورات صراع إيران وأمريكا وترقب تقرير الوظائف":
    - /url: /ar-ae/news/traj-alyn-waldwlar-m-mtab-t-ttwrat-sra-ayran-wamryka-wtrqb
    - strong: تراجع الين والدولار مع متابعة تطورات صراع إيران وأمريكا وترقب تقرير الوظائف
  - text: Reuters News • Europe 16:57 (UTC), 5 أغسطس 2026
  - link "مقدمة 1-الين يستقر بعد تدخل حكومي والدولار قرب قاع 6 أسابيع":
    - /url: /ar-ae/news/mqdmt-1-alyn-ystqr-b-d-tdkhl-hkwmy-waldwlar-qrb-qa-6
    - strong: مقدمة 1-الين يستقر بعد تدخل حكومي والدولار قرب قاع 6 أسابيع
  - text: Reuters News • Europe 02:23 (UTC), 5 أغسطس 2026
  - link "الين يستعيد توازنه والدولار يقترب من أدنى مستوى في 6 أسابيع":
    - /url: /ar-ae/news/alyn-yst-yd-twaznh-waldwlar-yqtrb-mn-adny-mstwy-fy-6
    - strong: الين يستعيد توازنه والدولار يقترب من أدنى مستوى في 6 أسابيع
  - text: Reuters News • Europe 16:11 (UTC), 4 أغسطس 2026
  - 'link "وزير الخزانة الأمريكي: سنبذل كل ما يلزم لدعم عملة اليابان"':
    - /url: /ar-ae/news/wzyr-alkhzant-alamryky-snbdhl-kl-ma-ylzm-ld-m-mlt-alyaban
    - strong: "وزير الخزانة الأمريكي: سنبذل كل ما يلزم لدعم عملة اليابان"
  - text: Reuters News • Europe 12:35 (UTC), 4 أغسطس 2026
  - link "مقدمة 1-الين ينخفض لكنه يحتفظ بمكاسبه بعد التدخل وسط حذر المتعاملين":
    - /url: /ar-ae/news/mqdmt-1-alyn-ynkhfd-lknh-yhtfz-bmkasbh-b-d-altdkhl-wst-hdhr
    - strong: مقدمة 1-الين ينخفض لكنه يحتفظ بمكاسبه بعد التدخل وسط حذر المتعاملين
  - text: Reuters News • Europe 06:09 (UTC), 4 أغسطس 2026
  - link "الين يحافظ على مكاسبه بعد التدخل وسط حذر المتعاملين":
    - /url: /ar-ae/news/alyn-yhafz-ly-mkasbh-b-d-altdkhl-wst-hdhr-almt-amlyn
    - strong: الين يحافظ على مكاسبه بعد التدخل وسط حذر المتعاملين
- complementary
- heading "ملاحظات المستخدم وتقييماته" [level=2]
- text: اقرأ تعليقات عملائنا، مهما كان مستوى خبرتهم
- region:
  - group "1 of 14":
    - link "2025-06-30 Khaled Almadani سهولة السحب والإيداع متابعة ممتازة من قبل موظفين خدمة العملاء خلال الأربعة والعشرون ساعة":
      - /url: https://www.trustpilot.com/review/capital.com
      - text: 2025-06-30
      - strong: Khaled Almadani
      - paragraph: سهولة السحب والإيداع متابعة ممتازة من قبل موظفين خدمة العملاء خلال الأربعة والعشرون ساعة
  - group "2 of 14":
    - link "2025-06-21 kawa Hassan من افضل البرامج اللتي رأيتها ، تعامل جيد ، منصة موثوقة ، فريق عمل اكثر من رائع":
      - /url: https://www.trustpilot.com/review/capital.com
      - text: 2025-06-21
      - strong: kawa Hassan
      - paragraph: من افضل البرامج اللتي رأيتها ، تعامل جيد ، منصة موثوقة ، فريق عمل اكثر من رائع
  - group "3 of 14":
    - link "2025-06-13 مجودي ابن سيال اشكركم ع اجتهداتكم والله برنامج سهل في كل شيء وبالأخص في يحب الارباح اشكركم من أعماق قلبي ❤️❤️❤️":
      - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=852ae4cd-48be-4c5d-87bd-d0c2c054b2bf&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
      - text: 2025-06-13
      - strong: مجودي ابن سيال
      - paragraph: اشكركم ع اجتهداتكم والله برنامج سهل في كل شيء وبالأخص في يحب الارباح اشكركم من أعماق قلبي ❤️❤️❤️
  - button "Go to last slide"
  - button "Next slide"
- paragraph: عرض تقييمات 4 و 5 نجوم
- link "4.6":
  - /url: https://www.tradingview.com/broker/Capitalcom/
  - strong: "4.6"
- link "التقييمات والمراجعات 4.7":
  - /url: https://app.appsflyer.com/id1230088754?cp_device_id=852ae4cd-48be-4c5d-87bd-d0c2c054b2bf&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - strong: التقييمات والمراجعات
  - strong: "4.7"
- link "التقييمات والمراجعات 4.6":
  - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=852ae4cd-48be-4c5d-87bd-d0c2c054b2bf&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
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
    - /url: /ar-ae
    - img
  - link:
    - /url: https://twitter.com/capital_arabia
  - link:
    - /url: https://www.linkedin.com/company/capital.com
  - link:
    - /url: https://www.instagram.com/capitalcomarabia
  - link:
    - /url: https://www.youtube.com/@capital.com.287
  - link:
    - /url: https://www.tiktok.com/@capitalcomarabia?lang=en
  - link:
    - /url: https://app.appsflyer.com/id1230088754?cp_device_id=852ae4cd-48be-4c5d-87bd-d0c2c054b2bf&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=852ae4cd-48be-4c5d-87bd-d0c2c054b2bf&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=852ae4cd-48be-4c5d-87bd-d0c2c054b2bf&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - text: "البلد / المنطقة:"
  - button "United Arab Emirates"
  - text: "• اللغة:"
  - button "Arabic"
  - text: "كما يمكنك الاتصال بنا:"
  - link "+971 4 496 8000":
    - /url: tel:+971 4 496 8000
    - strong: +971 4 496 8000
    - strong
  - text: •
  - link "support@capital.com":
    - /url: mailto:support@capital.com
    - strong: support@capital.com
  - strong: التداول
  - text: التداول
  - link "تداول عقود الفروقات":
    - /url: /ar-ae/ways-to-trade/cfd-trading
  - link "احصل على حساب تجريبي":
    - /url: /ar-ae/trading-platforms/demo-account
  - text: منصات التداول
  - link "منصة الويب":
    - /url: /ar-ae/trading-platforms/web-platform
  - link "تطبيق الجوّال":
    - /url: /ar-ae/trading-platforms/mobile-apps
  - link "TradingView":
    - /url: /ar-ae/trading-platforms/trading-view
  - link "MT4":
    - /url: /ar-ae/trading-platforms/mt4
  - link "MT5":
    - /url: /ar-ae/trading-platforms/mt5
  - text: تعلّم التداول
  - link "استراتيجيات التداول":
    - /url: /ar-ae/learn/trading-strategies
  - link "التحليل الفني":
    - /url: /ar-ae/learn/technical-analysis
  - link "سيكولوجية التداول":
    - /url: /ar-ae/learn/trading-psychology
  - link "تعلّم التداول":
    - /url: /ar-ae/learn
  - strong: الأسواق
  - text: الأسواق المتاحة
  - link "الأسواق":
    - /url: /ar-ae/markets
  - link "الأسهم":
    - /url: /ar-ae/markets/shares
  - link "الفوركس":
    - /url: /ar-ae/markets/forex
  - link "المؤشرات":
    - /url: /ar-ae/markets/indices
  - link "السلع":
    - /url: /ar-ae/markets/commodities
  - link "العملات المشفّرة":
    - /url: /ar-ae/markets/cryptocurrencies
  - link "السندات":
    - /url: /ar-ae/markets/bonds
  - link "أسعار الفائدة":
    - /url: /ar-ae/markets/interest-rates
  - text: معلومات السوق
  - link "تحليل السوق":
    - /url: /ar-ae/analysis
  - link "التسعير":
    - /url: /ar-ae/ways-to-trade/fees-and-charges
    - strong: التسعير
  - strong: من نحن
  - text: عنّا
  - link "من نحن":
    - /url: /ar-ae/about-us
  - link "مكاتبنا":
    - /url: /ar-ae/about-us/our-offices
  - link "هل capital.com آمن؟":
    - /url: /ar-ae/security-measures
  - link "نموذج أعمالنا":
    - /url: /ar-ae/about-us/how-capital-makes-money
  - text: اعمل معنا
  - link "برامج الشراكة":
    - /url: /ar-ae/partnerships
  - text: احصل على المساعدة
  - link "مركز المساعدة":
    - /url: /ar-ae/help
  - link "تعرّض العملاء للمخاطر":
    - /url: /ar-ae/help/client-vulnerability
  - link "تواصل معنا":
    - /url: /ar-ae/contact-us
  - text: قانوني
  - link "الشروط والسياسات":
    - /url: /ar-ae/terms-and-policies
  - link "الشكاوى":
    - /url: /ar-ae/help/complaints
  - paragraph:
    - strong: عقود المشتقات غير المنظمة، بما في ذلك عقود الفروقات ومنتجات والعملات في السوق الفوري.، هي أدوات مالية معقدة وتنطوي على درجة عالية من المخاطرة لخسارة الأموال بسرعة بسبب الرافعة المالية. قد لا يكون تداول عقود المشتقات غير المنظمة مناسبًا لجميع المستثمرين. قبل الانخراط في أي أنشطة تداول، يجب عليك التفكير بعناية في أهداف الاستثمار الخاصة بك ومدى تحمل المخاطر ووضعك المالي. يرجى البحث عن المشورة المالية المستقلة قبل التداول إذا كان ذلك ضروريًا.
  - paragraph: "شركة كابيتال كوم مينا سيكيوريتيز تريدينج ش.ذ.م.م (CAPITAL COM MENA SECURITIES TRADING L.L.C) هي شركة ذات مسؤولية محدودة مُسجّلة تحت رقم التسجيل 1994695. شركة كابيتال كوم مينا سيكيوريتيز تريدينج ش.ذ.م.م (CAPITAL COM MENA SECURITIES TRADING L.L.C) هي شركة ذات مسؤولية محدودة مُسجّلة في دبي بالإمارات العربية المتحدة، ومرخصة ومنظمة من قبل هيئة سوق المال (CMA) بموجب الرخصة رقم 20200000176. تزاول الشركة أنشطة مالية واستثمارية تندرج تحت تصنيف \"الفئة الأولى - التعامل في الأوراق المالية\"، والتي تشمل: (أ) نشاط تاجر منتجات مالية، (ب) نشاط وسيط تداول في الأسواق العالمية، و(ج) وسيط تداول للمشتقات المالية خارج المقصورة والعملات في السوق الفورية. يقع المقر المسجّل للشركة في أبراج الجميرة الإمارات، مكاتب أبراج الإمارات، الطابق الرابع عشر (L14)، الوحدة 14C، دبي، الإمارات العربية المتحدة. تُعد شركة كابيتال كوم مينا سيكيوريتيز تريدينج ش.ذ.م.م (CAPITAL COM MENA SECURITIES TRADING L.L.C) مزود خدمة يقتصر دوره على تنفيذ الأوامر فقط، ولا تقدم أي مشورة استثمارية. قد تقوم الشركة بنشر تعليقات عامة حول السوق من حين لآخر. وفي حال نشرها، فإن هذه المواد لا ترقى لمرتبة المشورة، ولا تُعد بأي حال حثًا أو دعوة أو توصية لإبرام أي معاملة في أي أداة مالية. تخلي شركة كابيتال كوم مينا سيكيوريتيز تريدينج ش.ذ.م.م (CAPITAL COM MENA SECURITIES TRADING L.L.C) مسؤوليتها القانونية تمامًا عن أي استخدام للمحتوى المعروض وعن أي تبعات قد تترتب على هذا الاستخدام. كما لا يتم تقديم أي إقرار أو ضمان، صريحًا أو ضمنيًا، بشأن اكتمال أو شمولية هذه المعلومات. ويتحمل أي شخص يتصرف بناءً على المعلومات المقدمة كامل المسؤولية والمخاطر المترتبة على قراره بصفة شخصية. المعلومات الواردة في هذه الوثيقة غير مُعدة للتوزيع على المقيمين في أي دولة يكون فيها مثل هذا التوزيع أو الاستخدام مخالفًا للقوانين المحلية أو المتطلبات التنظيمية السارية. ننوه بأن منتجاتنا وخدماتنا غير متاحة للدول الخاضعة للحظر أو العقوبات الدولية. كما أن هذه المعلومات ليست مخصصة للتوزيع أو الاستخدام من قبل أي شخص في أي دولة أو ولاية قضائية يكون فيها هذا التوزيع أو الاستخدام متعارضًا مع القوانين أو اللوائح المحلية."
  - paragraph: © 2026 كابيتال كوم مينا سيكيوريتيز تريدينج ش. ذ. م. م*
  - link "خريطة الموقع":
    - /url: /ar-ae/sitemap
  - link "إعدادات ملفات تعريف الارتباط":
    - /url: ""
  - link "أموال العملاء":
    - /url: /ar-ae/about-us/what-capital-does-with-your-money
  - link "الشروط والسياسات":
    - /url: /ar-ae/terms-and-policies
  - link "إجراءات الشكاوى CCMENA":
    - /url: /ar-ae/help/complaints
- button
- alert: مخطط تداول EUR/USD | سعر الصرف لـ Euro / US Dollar | Capital.com
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