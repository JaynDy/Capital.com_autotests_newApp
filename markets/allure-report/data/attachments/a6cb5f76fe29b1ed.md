# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cta/generated.cta.spec.js >> forex page | tradingInstrument | alertBtn
- Location: tests/cta/generated.cta.spec.js:16:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('[data-type="SIGN_UP_close"]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('[data-type="SIGN_UP_close"]')

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
- strong: "1.14312"
- text: +0%
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
- link "البيع 1.14305":
  - /url: /instrument?id=93810675766468
  - text: البيع
  - paragraph: "1.14305"
- link "الشراء 1.14312":
  - /url: /instrument?id=93810675766468
  - text: الشراء
  - paragraph: "1.14312"
- text: "0.00007 منخفض: 1.13896 عالي: 1.14581"
- table
- text: "البائعون: 41.44% المشترون: 58.56%"
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
    - row "رسوم التبييت على مركز الشراء رسوم التبييت على مركز الشراء الهامش. استثمارك $1,000.00 رسم المبيت -0.00805 % (-$16.10) حجم التداول مع الرافعة المالية ~ $$200,000.00 المال من الرافعة المالية ~ $199,000.00 الذهاب إلى المنصة -0.00805%":
      - cell "رسوم التبييت على مركز الشراء رسوم التبييت على مركز الشراء الهامش. استثمارك $1,000.00 رسم المبيت -0.00805 % (-$16.10) حجم التداول مع الرافعة المالية ~ $$200,000.00 المال من الرافعة المالية ~ $199,000.00 الذهاب إلى المنصة":
        - text: رسوم التبييت على مركز الشراء
        - strong: رسوم التبييت على مركز الشراء
        - table
        - separator
        - table:
          - rowgroup:
            - row "الهامش. استثمارك $1,000.00":
              - cell "الهامش. استثمارك"
              - cell "$1,000.00"
            - row "رسم المبيت -0.00805 % (-$16.10)":
              - cell "رسم المبيت"
              - cell "-0.00805 % (-$16.10)"
        - paragraph:
          - strong: حجم التداول مع الرافعة المالية ~ $$200,000.00
        - paragraph:
          - strong: المال من الرافعة المالية ~ $199,000.00
        - separator
        - link "الذهاب إلى المنصة":
          - /url: ""
      - cell "-0.00805%"
    - row "رسوم التبييت على مركز البيع رسوم التبييت على مركز البيع الهامش. استثمارك $1,000.00 رسم المبيت -0.00017 % (-$0.34) حجم التداول مع الرافعة المالية ~ $$200,000.00 المال من الرافعة المالية ~ $199,000.00 الذهاب إلى المنصة -0.00017%":
      - cell "رسوم التبييت على مركز البيع رسوم التبييت على مركز البيع الهامش. استثمارك $1,000.00 رسم المبيت -0.00017 % (-$0.34) حجم التداول مع الرافعة المالية ~ $$200,000.00 المال من الرافعة المالية ~ $199,000.00 الذهاب إلى المنصة":
        - text: رسوم التبييت على مركز البيع
        - strong: رسوم التبييت على مركز البيع
        - table
        - separator
        - table:
          - rowgroup:
            - row "الهامش. استثمارك $1,000.00":
              - cell "الهامش. استثمارك"
              - cell "$1,000.00"
            - row "رسم المبيت -0.00017 % (-$0.34)":
              - cell "رسم المبيت"
              - cell "-0.00017 % (-$0.34)"
        - paragraph:
          - strong: حجم التداول مع الرافعة المالية ~ $$200,000.00
        - paragraph:
          - strong: المال من الرافعة المالية ~ $199,000.00
        - separator
        - link "الذهاب إلى المنصة":
          - /url: ""
      - cell "-0.00017%"
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
  - link "مقدمة 1-الدولار يتذبذب وسط تجدد الهجمات بالشرق الأوسط والين يتراجع":
    - /url: /ar-ae/news/mqdmt-1-aldwlar-ytdhbdhb-wst-tjdd-alhjmat-balshrq-alawst-walyn-ytraj
    - strong: مقدمة 1-الدولار يتذبذب وسط تجدد الهجمات بالشرق الأوسط والين يتراجع
  - text: Reuters News • Europe
  - link "الدولار يرتفع وسط تجدد الهجمات بالشرق الأوسط وإغلاق مضيق هرمز":
    - /url: /ar-ae/news/aldwlar-yrtf-wst-tjdd-alhjmat-balshrq-alawst-waghlaq-mdyq-hrmz
    - strong: الدولار يرتفع وسط تجدد الهجمات بالشرق الأوسط وإغلاق مضيق هرمز
  - text: Reuters News • Europe 15:29 (UTC), 10 يوليو 2026
  - link "مقدمة 1-الين يرتفع مع بحث اليابان توجيه استثمارات نحو الأصول المحلية":
    - /url: /ar-ae/news/mqdmt-1-alyn-yrtf-m-bhth-alyaban-twjyh-astthmarat-nhw-alaswl
    - strong: مقدمة 1-الين يرتفع مع بحث اليابان توجيه استثمارات نحو الأصول المحلية
  - text: Reuters News • Europe 01:30 (UTC), 10 يوليو 2026
  - link "الين يتجه نحو خسائر أسبوعية مع تزايد احتمال تدخل السلطات اليابانية لدعمه":
    - /url: /ar-ae/news/alyn-ytjh-nhw-khsayr-asbw-yt-m-tzayd-ahtmal-tdkhl-alsltat
    - strong: الين يتجه نحو خسائر أسبوعية مع تزايد احتمال تدخل السلطات اليابانية لدعمه
  - text: Reuters News • Europe 16:01 (UTC), 9 يوليو 2026
  - link "مقدمة 1-تراجع الدولار مع استقرار سوق العمل وتصاعد التوتر بين أمريكا وإيران":
    - /url: /ar-ae/news/mqdmt-1-traj-aldwlar-m-astqrar-swq-al-ml-wtsa-d-altwtr-byn
    - strong: مقدمة 1-تراجع الدولار مع استقرار سوق العمل وتصاعد التوتر بين أمريكا وإيران
  - text: Reuters News • Europe 02:25 (UTC), 9 يوليو 2026
  - link "الدولار يحافظ على قوته مع صعود النفط بسبب التوتر في الخليج":
    - /url: /ar-ae/news/aldwlar-yhafz-ly-qwth-m-s-wd-alnft-bsbb-altwtr-fy
    - strong: الدولار يحافظ على قوته مع صعود النفط بسبب التوتر في الخليج
  - text: Reuters News • Europe 09:10 (UTC), 8 يوليو 2026
  - link "مقدمة 1-الدولار ينخفض مع تصاعد التوتر بين أمريكا وإيران":
    - /url: /ar-ae/news/mqdmt-1-aldwlar-ynkhfd-m-tsa-d-altwtr-byn-amryka-wayran
    - strong: مقدمة 1-الدولار ينخفض مع تصاعد التوتر بين أمريكا وإيران
  - text: Reuters News • Europe 00:58 (UTC), 8 يوليو 2026
  - link "الدولار عند أعلى مستوى في أسبوع بعد استئناف أمريكا هجماتها على إيران":
    - /url: /ar-ae/news/aldwlar-nd-a-ly-mstwy-fy-asbw-b-d-astynaf-amryka-hjmatha
    - strong: الدولار عند أعلى مستوى في أسبوع بعد استئناف أمريكا هجماتها على إيران
  - text: Reuters News • Europe 06:23 (UTC), 7 يوليو 2026
  - link "الين قرب أدنى مستوى منذ 40 عاما وسط حذر من تدخل السلطات":
    - /url: /ar-ae/news/alyn-qrb-adny-mstwy-mndh-40-ama-wst-hdhr-mn
    - strong: الين قرب أدنى مستوى منذ 40 عاما وسط حذر من تدخل السلطات
  - text: Reuters News • Europe 16:09 (UTC), 6 يوليو 2026
  - link "مقدمة 1-الدولار يرتفع والين يحوم قرب أدنى مستوياته في 40 عاما":
    - /url: /ar-ae/news/mqdmt-1-aldwlar-yrtf-walyn-yhwm-qrb-adny-mstwyath-fy-40
    - strong: مقدمة 1-الدولار يرتفع والين يحوم قرب أدنى مستوياته في 40 عاما
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
      - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=f59b04c4-ea8e-4894-8943-a9a215ae8be8&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
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
  - /url: https://app.appsflyer.com/id1230088754?cp_device_id=f59b04c4-ea8e-4894-8943-a9a215ae8be8&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - strong: التقييمات والمراجعات
  - strong: "4.7"
- link "التقييمات والمراجعات 4.6":
  - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=f59b04c4-ea8e-4894-8943-a9a215ae8be8&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - strong: التقييمات والمراجعات
  - strong: "4.6"
- link "4.6":
  - /url: https://www.trustpilot.com/review/capital.com
  - strong: "4.6"
- heading "ثلاث خطوات للبدء" [level=2]
- button
- text: 1. أنشئ حسابك (وفقًا لمعايير الأهلية) 2. أودع الأموال بالشروط التي تناسبك 3. تداول عندما تكون مستعدًا
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
    - /url: https://app.appsflyer.com/id1230088754?cp_device_id=f59b04c4-ea8e-4894-8943-a9a215ae8be8&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=f59b04c4-ea8e-4894-8943-a9a215ae8be8&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=f59b04c4-ea8e-4894-8943-a9a215ae8be8&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - text: "البلد / المنطقة:"
  - button "United Arab Emirates"
  - text: "• اللغة:"
  - button "Arabic"
  - text: "كما يمكنك الاتصال بنا:"
  - link "+97145768641":
    - /url: tel:+97145768641
    - strong: "+97145768641"
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
  - link "الفوركس":
    - /url: /ar-ae/markets/forex
  - link "الأسهم":
    - /url: /ar-ae/markets/shares
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
- alert
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
  21 |       await expect(page).toHaveURL(/trading\/platform/);
  22 |       break;
  23 | 
  24 |     case "shows signup form":
  25 |       await expect(
  26 |         // page.locator('form[data-sentry-component="SignUp"]'),
  27 |         page.locator('[data-type="SIGN_UP_close"]'),
> 28 |       ).toBeVisible();
     |         ^ Error: expect(locator).toBeVisible() failed
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