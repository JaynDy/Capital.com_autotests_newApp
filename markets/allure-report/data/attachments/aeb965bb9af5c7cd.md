# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cta/generated.cta.spec.js >> shares page | tradingInstrument | tradedBtn
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
  - link "الأسهم":
    - /url: /ar-int/markets/shares
  - text: •SpaceX
- heading "تداول SpaceX - SPCX عقد الفروقات" [level=1]
- button "أضف إلى اللائحة المفضلة"
- strong: السوق غير متاح في الوقت الحالي
- text: يتم عرض معلومات السوق
- strong: شروط التداول
- table:
  - rowgroup:
    - 'row "النوع هذا السوق المالي متاح للتداول من خلال عقود الفروقات. اعرف المزيد عن: عقود الفروقات عقد الفروقات"':
      - 'cell "النوع هذا السوق المالي متاح للتداول من خلال عقود الفروقات. اعرف المزيد عن: عقود الفروقات"':
        - text: "النوع هذا السوق المالي متاح للتداول من خلال عقود الفروقات. اعرف المزيد عن:"
        - link "عقود الفروقات":
          - /url: /ar-int/ways-to-trade/cfd-trading
      - cell "عقد الفروقات"
    - row "السبريد 0.15":
      - cell "السبريد"
      - cell "0.15"
    - row "رسوم تمويل التبييت لصفقات الشراء رسوم تمويل التبييت لصفقات الشراء الهامش. استثمارك $1,000.00 رسوم التبييت الرسوم من قيمة الصفقة الكاملة -0.021485 % (-$4.30) حجم الصفقة بالرافعة المالية ~$20,000.00 الأموال من الرافعة المالية ~ دولار$19,000.00 انتقل إلى المنصة -0.02149%":
      - cell "رسوم تمويل التبييت لصفقات الشراء رسوم تمويل التبييت لصفقات الشراء الهامش. استثمارك $1,000.00 رسوم التبييت الرسوم من قيمة الصفقة الكاملة -0.021485 % (-$4.30) حجم الصفقة بالرافعة المالية ~$20,000.00 الأموال من الرافعة المالية ~ دولار$19,000.00 انتقل إلى المنصة":
        - text: رسوم تمويل التبييت لصفقات الشراء
        - strong: رسوم تمويل التبييت لصفقات الشراء
        - table
        - separator
        - table:
          - rowgroup:
            - row "الهامش. استثمارك $1,000.00":
              - cell "الهامش. استثمارك"
              - cell "$1,000.00"
            - row "رسوم التبييت الرسوم من قيمة الصفقة الكاملة -0.021485 % (-$4.30)":
              - cell "رسوم التبييت الرسوم من قيمة الصفقة الكاملة"
              - cell "-0.021485 % (-$4.30)"
        - paragraph:
          - strong: حجم الصفقة بالرافعة المالية ~$20,000.00
        - paragraph:
          - strong: الأموال من الرافعة المالية ~ دولار$19,000.00
        - separator
        - link "انتقل إلى المنصة":
          - /url: ""
      - cell "-0.02149%"
    - row "رسوم تمويل التبييت لصفقات البيع على المكشوف رسوم تمويل التبييت لصفقات البيع على المكشوف الهامش. استثمارك $1,000.00 رسوم التبييت الرسوم من قيمة الصفقة الكاملة -0.000738 % (-$0.15) حجم الصفقة بالرافعة المالية ~$20,000.00 الأموال من الرافعة المالية ~ دولار$19,000.00 انتقل إلى المنصة -0.00074%":
      - cell "رسوم تمويل التبييت لصفقات البيع على المكشوف رسوم تمويل التبييت لصفقات البيع على المكشوف الهامش. استثمارك $1,000.00 رسوم التبييت الرسوم من قيمة الصفقة الكاملة -0.000738 % (-$0.15) حجم الصفقة بالرافعة المالية ~$20,000.00 الأموال من الرافعة المالية ~ دولار$19,000.00 انتقل إلى المنصة":
        - text: رسوم تمويل التبييت لصفقات البيع على المكشوف
        - strong: رسوم تمويل التبييت لصفقات البيع على المكشوف
        - table
        - separator
        - table:
          - rowgroup:
            - row "الهامش. استثمارك $1,000.00":
              - cell "الهامش. استثمارك"
              - cell "$1,000.00"
            - row "رسوم التبييت الرسوم من قيمة الصفقة الكاملة -0.000738 % (-$0.15)":
              - cell "رسوم التبييت الرسوم من قيمة الصفقة الكاملة"
              - cell "-0.000738 % (-$0.15)"
        - paragraph:
          - strong: حجم الصفقة بالرافعة المالية ~$20,000.00
        - paragraph:
          - strong: الأموال من الرافعة المالية ~ دولار$19,000.00
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
    - row "الحد الأدنى للكمية المتداولة 0.1":
      - cell "الحد الأدنى للكمية المتداولة"
      - cell "0.1"
    - row "الهامش 5.00%":
      - cell "الهامش"
      - cell "5.00%"
    - row "بورصة الأسهم United States of America":
      - cell "بورصة الأسهم"
      - cell "United States of America"
    - row "عمولة الصفقة1 0%":
      - cell "عمولة الصفقة1":
        - text: عمولة الصفقة
        - superscript: "1"
      - cell "0%"
    - row "علاوة أمر وقف الخسارة المضمون يتم فرض رسوم أمر وقف الخسارة المضمون (GSL) فقط في حالة تفعيل الأمر. يُرجى الاطلاع على قسم الرسوم والتكاليف على موقعنا لمزيد من التفاصيل. 1%":
      - cell "علاوة أمر وقف الخسارة المضمون يتم فرض رسوم أمر وقف الخسارة المضمون (GSL) فقط في حالة تفعيل الأمر. يُرجى الاطلاع على قسم الرسوم والتكاليف على موقعنا لمزيد من التفاصيل."
      - cell "1%"
- paragraph:
  - superscript: "1"
  - text: إن الرسوم التي نتقاضاها مقابل تنفيذ صفقاتك هي السبريد، أي الفرق بين سعري الشراء والبيع. يُرجى مراجعة قسم
  - link "التكاليف والرسوم":
    - /url: https://capital.com/ar-int/ways-to-trade/fees-and-charges
  - text: على موقعنا لمزيد من المعلومات
- strong: الإحصائيات الرئيسية
- table:
  - rowgroup:
    - row "الإغلاق السابق 141.48":
      - cell "الإغلاق السابق"
      - cell "141.48"
    - row "مفتوح 141.75":
      - cell "مفتوح"
      - cell "141.75"
    - row "التغير خلال عام -9.13%":
      - cell "التغير خلال عام"
      - cell "-9.13%"
    - row "نطاق اليوم 135.96 - 143.7":
      - cell "نطاق اليوم"
      - cell "135.96 - 143.7"
- main:
  - heading "أحدث مقالات الأسهم" [level=2]
  - link "توقعات سهم تسلا":
    - /url: /ar-int/market-updates/tesla-stock-price-in-5-years-23-02-2026
    - img "توقعات سهم تسلا"
  - 'link "توقعات سهم تسلا: هل يمكن لأرباح الربع الأول 2026 رفع الأهداف؟"':
    - /url: /ar-int/market-updates/tesla-stock-price-in-5-years-23-02-2026
  - text: تسلا (TSLA) هي شركة أمريكية مدرجة في مجال السيارات والطاقة النظيفة، تتداول أسهمها في بورصة ناسداك وتخضع لمتابعة دقيقة من حيث الأداء المالي وبيانات التسليم والتطورات في التكنولوجيا والتصنيع. استكشف أهداف أسعار TSLA من طرف ثالث والتحليل الفني. 17:28, 23 فبراير 2026
  - link "التداول على مؤشر ناسداك 100 فوق مستوى 24,000":
    - /url: /ar-int/analysis/nasdaq-september152025-2
    - img "التداول على مؤشر ناسداك 100 فوق مستوى 24,000"
  - link "التداول على مؤشر ناسداك 100 فوق مستوى 24,000":
    - /url: /ar-int/analysis/nasdaq-september152025-2
  - text: تجاوز المؤشر التقني الثقيل محطة جديدة تعزز النظرة الفنية الصاعدة، لكن من حيث المعنويات فهي قصة انقسام في التوجه بين مضاربي CoT وعملاء Capital.com. 15:45, 15 سبتمبر 2025
  - link "التداول على سهم Nvidia بعد الاعلان عن نتائج الأرباح الفصلية":
    - /url: /ar-int/analysis/nvidia-august282025-2
    - img "التداول على سهم Nvidia بعد الاعلان عن نتائج الأرباح الفصلية"
  - link "التداول على سهم Nvidia بعد الاعلان عن نتائج الأرباح الفصلية":
    - /url: /ar-int/analysis/nvidia-august282025-2
  - text: تراجع السهم بأكثر من 3% في التداولات الممتدة بعد الحدث، دون أن يؤثر ذلك على معظم المؤشرات الفنية الرئيسية، حيث لا يزال انحياز عملاء المنصة في منطقة الشراء المفرط. 14:55, 28 أغسطس 2025
  - link "التداول على سهم تسلا بعد قفزة بنسبة 6%":
    - /url: /ar-int/analysis/tesla-august252025-2
    - img "التداول على سهم تسلا بعد قفزة بنسبة 6%"
  - link "التداول على سهم تسلا بعد قفزة بنسبة 6%":
    - /url: /ar-int/analysis/tesla-august252025-2
  - text: الحركة الإيجابية في الأسواق بعد خطاب جاكسون هول يوم الجمعة الماضي دفعت بعض المؤشرات الفنية لسهم تسلا إلى التحول للون الأخضر، لكن لم يحدث بعد تغيير شامل في النظرة الفنية سواء على الإطار اليومي أو الأسبوعي. 14:26, 25 أغسطس 2025
  - strong: أخبار مشابهة
  - text: Reuters News • Europe 20:35 (UTC), 11 أغسطس 2026
  - link "وول ستريت تغلق منخفضة مع تبدد آمال التوصل إلى اتفاق لوقف حرب إيران":
    - /url: /ar-int/news/wwl-stryt-tghlq-mnkhfdt-m-tbdd-amal-altwsl-aly-atfaq
    - strong: وول ستريت تغلق منخفضة مع تبدد آمال التوصل إلى اتفاق لوقف حرب إيران
  - text: Reuters News • Europe 17:53 (UTC), 11 أغسطس 2026
  - 'link "أمريكا: استمرار تعطل جزء من إنتاج نفط الشرق الأوسط طوال 2027"':
    - /url: /ar-int/news/amryka-astmrar-t-tl-jz-mn-antaj-nft-alshrq-alawst-twal
    - strong: "أمريكا: استمرار تعطل جزء من إنتاج نفط الشرق الأوسط طوال 2027"
  - text: Reuters News • Europe 22:57 (UTC), 10 أغسطس 2026
  - link "ارتفاع حاد لأسعار الديزل مع تقلص المعروض العالمي":
    - /url: /ar-int/news/artfa-had-las-ar-aldyzl-m-tqls-alm-rwd-al-almy
    - strong: ارتفاع حاد لأسعار الديزل مع تقلص المعروض العالمي
  - text: Reuters News • Europe 20:33 (UTC), 7 أغسطس 2026
  - link "ستاندرد اند بورز يغلق عند مستوى قياسي مع تراجع مخاوف رفع الفائدة":
    - /url: /ar-int/news/standrd-and-bwrz-yghlq-nd-mstwy-qyasy-m-traj-mkhawf
    - strong: ستاندرد اند بورز يغلق عند مستوى قياسي مع تراجع مخاوف رفع الفائدة
  - text: Reuters News • Europe 20:46 (UTC), 6 أغسطس 2026
  - link "داو جونز وستاندرد اند بورز يهبطان مع ترقب محادثات الشرق الأوسط":
    - /url: /ar-int/news/daw-jwnz-wstandrd-and-bwrz-yhbtan-m-trqb-mhadthat-alshrq
    - strong: داو جونز وستاندرد اند بورز يهبطان مع ترقب محادثات الشرق الأوسط
  - button
  - text: Reuters News • Europe 07:46 (UTC), 6 أغسطس 2026
  - link "نيكي الياباني يتراجع بضغط من انخفاض أسهم التكنولوجيا":
    - /url: /ar-int/news/nyky-alyabany-ytraj-bdght-mn-ankhfad-ashm-altknwlwjya
    - strong: نيكي الياباني يتراجع بضغط من انخفاض أسهم التكنولوجيا
  - button
  - text: Reuters News • Europe 03:10 (UTC), 6 أغسطس 2026
  - link "نيكي يهبط 2% مع تراجع أسهم شركات التكنولوجيا":
    - /url: /ar-int/news/nyky-yhbt-2-m-traj-ashm-shrkat-altknwlwjya
    - strong: نيكي يهبط 2% مع تراجع أسهم شركات التكنولوجيا
  - button
  - text: Reuters News • Europe 20:28 (UTC), 5 أغسطس 2026
  - link "داو جونز يغلق عند مستوى قياسي بفضل التفاؤل إزاء حرب الشرق الأوسط":
    - /url: /ar-int/news/daw-jwnz-yghlq-nd-mstwy-qyasy-bfdl-altfawl-aza-hrb
    - strong: داو جونز يغلق عند مستوى قياسي بفضل التفاؤل إزاء حرب الشرق الأوسط
  - button
  - text: Reuters News • Europe 20:20 (UTC), 4 أغسطس 2026
  - link "داو جونز وستاندرد اند بورز عند مستويات قياسية بفضل الذكاء الاصطناعي":
    - /url: /ar-int/news/daw-jwnz-wstandrd-and-bwrz-nd-mstwyat-qyasyt-bfdl-aldhka
    - strong: داو جونز وستاندرد اند بورز عند مستويات قياسية بفضل الذكاء الاصطناعي
  - button
  - text: Reuters News • Europe 20:29 (UTC), 3 أغسطس 2026
  - link "وول ستريت ترتفع بفضل التفاؤل إزاء محادثات إيران":
    - /url: /ar-int/news/wwl-stryt-trtf-bfdl-altfawl-aza-mhadthat-ayran
    - strong: وول ستريت ترتفع بفضل التفاؤل إزاء محادثات إيران
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
      - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=04bd8b20-caa8-4822-bece-bb4e5cad94d2&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
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
  - /url: https://app.appsflyer.com/id1230088754?cp_device_id=04bd8b20-caa8-4822-bece-bb4e5cad94d2&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - strong: التقييمات والمراجعات
  - strong: "4.7"
- link "التقييمات والمراجعات 4.6":
  - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=04bd8b20-caa8-4822-bece-bb4e5cad94d2&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
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
    - /url: https://app.appsflyer.com/id1230088754?cp_device_id=04bd8b20-caa8-4822-bece-bb4e5cad94d2&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=04bd8b20-caa8-4822-bece-bb4e5cad94d2&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=04bd8b20-caa8-4822-bece-bb4e5cad94d2&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
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
- alert: سعر سهم ورسوم بيانية من SPCX | تداول | Capital.com
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