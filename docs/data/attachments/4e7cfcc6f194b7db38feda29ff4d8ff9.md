# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: markets/markets.spec.js >> interestRates page | tradingInstrument | tradedBtn
- Location: tests/markets/markets.spec.js:16:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('[data-type="wdg_most_traded_btn"]').first() to be visible

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e7]:
      - text: عقود الفروقات هي أدوات مالية معقدة تنطوي على مخاطر عالية قد تؤدي إلى خسارة سريعة للأموال بسبب الرافعة المالية..
      - generic [ref=e8]:
        - generic [ref=e9]:
          - strong [ref=e10]: وتجدر الإشارة إلى أن %78.48 من حسابات المستثمرين الأفراد تخسر الأموال عند تداول عقود الفروقات مع مقدم الخدمة هذا
          - text: .
        - text: يجب أن تفكر مليّا فيما إذا كنت قادرًا على تحمّل مخاطر عالية قد تؤدي إلى خسارة أموالك. يُرجى قراءة بيان الإفصاح عن المخاطر الخاص بنا بعناية
    - generic [ref=e12]:
      - link [ref=e13] [cursor=pointer]:
        - /url: /ar-int
        - img [ref=e14]
      - generic [ref=e19]:
        - navigation [ref=e20]:
          - button "التداول" [ref=e21]:
            - button "التداول" [ref=e22]:
              - generic [ref=e23]: التداول
          - button "الأسواق" [ref=e24]:
            - button "الأسواق" [ref=e25]:
              - generic [ref=e26]: الأسواق
          - link "التسعير" [ref=e29] [cursor=pointer]:
            - /url: /ar-int/ways-to-trade/fees-and-charges
          - button "من نحن" [ref=e30]:
            - button "من نحن" [ref=e31]:
              - generic [ref=e32]: من نحن
        - button "ar" [ref=e33] [cursor=pointer]:
          - generic [ref=e35]: ar
      - generic [ref=e37]:
        - button "تسجيل الدخول" [ref=e38] [cursor=pointer]: تسجيل الدخول
        - button "افتح حسابًا" [ref=e39] [cursor=pointer]: افتح حسابًا
  - generic [ref=e40]:
    - paragraph [ref=e43]:
      - generic [ref=e44]:
        - link "الرئيسية" [ref=e45] [cursor=pointer]:
          - /url: /ar-int
        - text: •
      - generic [ref=e46]:
        - link "الأسواق" [ref=e47] [cursor=pointer]:
          - /url: /ar-int/markets
        - text: •
      - generic [ref=e48]:
        - link "أسعار الفائدة" [ref=e49] [cursor=pointer]:
          - /url: /ar-int/markets/interest-rates
        - text: •
      - text: Euribor Future
    - generic [ref=e50]:
      - generic [ref=e53]:
        - generic [ref=e55]:
          - heading "تداول Euribor Future - FEIU2026 عقد الفروقات" [level=1] [ref=e57]
          - button "أضف إلى اللائحة المفضلة" [ref=e58] [cursor=pointer]: أضف إلى اللائحة المفضلة
        - generic [ref=e59]:
          - generic [ref=e60]:
            - generic [ref=e61]:
              - generic [ref=e62]:
                - strong [ref=e63]: "97.50"
                - generic [ref=e64]: +0.02%
              - link [ref=e65] [cursor=pointer]:
                - /url: ""
            - generic [ref=e66]:
              - generic [ref=e67]:
                - generic [ref=e68]:
                  - button "1 شهر" [ref=e69]
                  - button "5 دقائق" [ref=e70] [cursor=pointer]
                  - button "15 دقيقة" [ref=e71] [cursor=pointer]
                  - button "30 دقيقة" [ref=e72] [cursor=pointer]
                  - button "1 ساعة" [ref=e73] [cursor=pointer]
                  - button "4 ساعات" [ref=e74] [cursor=pointer]
                  - button "1 يوم" [ref=e75] [cursor=pointer]
                  - button "1 أسبوع" [ref=e76] [cursor=pointer]
                - img [ref=e78]
              - button "عرض المخطط البياني التفصيلي" [ref=e79] [cursor=pointer]
            - generic [ref=e80]:
              - generic [ref=e81]:
                - link "بيع 97.48" [ref=e82] [cursor=pointer]:
                  - /url: /instrument?id=5952184722150738
                  - text: بيع
                  - paragraph [ref=e83]: "97.48"
                - link "شراء 97.50" [ref=e84] [cursor=pointer]:
                  - /url: /instrument?id=5952184722150738
                  - text: شراء
                  - paragraph [ref=e85]: "97.50"
                - generic [ref=e86]: "0.02"
              - generic [ref=e87]:
                - generic [ref=e88]: "منخفضة: 97.45"
                - generic [ref=e89]: "مرتفعة: 97.48"
              - table [ref=e91]
              - generic [ref=e92]:
                - generic [ref=e93]:
                  - generic [ref=e94]: "البائعون:"
                  - generic [ref=e95]: 15.63%
                - generic [ref=e96]:
                  - generic [ref=e97]: "المشترون:"
                  - generic [ref=e98]: 84.38%
            - generic [ref=e99]:
              - button "ساعات التداول في السوق (التوقيت العالمي المُنسّق)" [ref=e102]:
                - generic [ref=e104] [cursor=pointer]:
                  - paragraph [ref=e105]: ساعات التداول في السوق (التوقيت العالمي المُنسّق)
                  - strong [ref=e106]: مفتوح الآن
              - strong [ref=e108]: الأداء السابق لا يعتبر مؤشرًا يعُتمد عليه للنتائج المستقبلية. الأسعار الموضحة للأسهم هي أرقام استرشادية، وقد تختلف عن الأسعار اللحظية في السوق.
          - generic [ref=e109]:
            - generic [ref=e111]:
              - button "الملخص" [ref=e112]: الملخص
              - button "البيانات التاريخية" [ref=e113] [cursor=pointer]: البيانات التاريخية
            - generic [ref=e117]:
              - strong [ref=e118]: شروط التداول
              - table [ref=e119]:
                - rowgroup [ref=e120]:
                  - 'row "النوع هذا السوق المالي متاح للتداول من خلال عقود الفروقات. اعرف المزيد عن: عقود الفروقات عقد الفروقات" [ref=e121]':
                    - 'cell "النوع هذا السوق المالي متاح للتداول من خلال عقود الفروقات. اعرف المزيد عن: عقود الفروقات" [ref=e122]':
                      - generic [ref=e123] [cursor=pointer]:
                        - generic [ref=e125]: النوع
                        - generic [ref=e128]:
                          - generic [ref=e129]: هذا السوق المالي متاح للتداول من خلال عقود الفروقات.
                          - generic [ref=e130]:
                            - generic [ref=e131]: "اعرف المزيد عن:"
                            - link "عقود الفروقات" [ref=e132]:
                              - /url: /ar-int/ways-to-trade/cfd-trading
                              - generic [ref=e133]: عقود الفروقات
                    - cell "عقد الفروقات" [ref=e134]
                  - row "السبريد 0.02" [ref=e135]:
                    - cell "السبريد" [ref=e136]
                    - cell "0.02" [ref=e137]
                  - row "رسوم تمويل التبييت لصفقات الشراء رسوم تمويل التبييت لصفقات الشراء الهامش. استثمارك €1,000.00 رسوم التبييت الرسوم من قيمة الصفقة الكاملة -0.01096 % (-€21.92) حجم الصفقة بالرافعة المالية ~€200,000.00 الأموال من الرافعة المالية ~ دولار€199,000.00 انتقل إلى المنصة -0.01096%" [ref=e138]:
                    - cell "رسوم تمويل التبييت لصفقات الشراء رسوم تمويل التبييت لصفقات الشراء الهامش. استثمارك €1,000.00 رسوم التبييت الرسوم من قيمة الصفقة الكاملة -0.01096 % (-€21.92) حجم الصفقة بالرافعة المالية ~€200,000.00 الأموال من الرافعة المالية ~ دولار€199,000.00 انتقل إلى المنصة" [ref=e139]:
                      - generic [ref=e140] [cursor=pointer]:
                        - generic [ref=e142]: رسوم تمويل التبييت لصفقات الشراء
                        - generic [ref=e144]:
                          - strong [ref=e145]: رسوم تمويل التبييت لصفقات الشراء
                          - table [ref=e147]
                          - separator [ref=e148]
                          - generic [ref=e149]:
                            - table [ref=e150]:
                              - rowgroup [ref=e151]:
                                - row "الهامش. استثمارك €1,000.00" [ref=e152]:
                                  - cell "الهامش. استثمارك" [ref=e153]:
                                    - generic [ref=e154]: الهامش. استثمارك
                                  - cell "€1,000.00" [ref=e156]
                                - row "رسوم التبييت الرسوم من قيمة الصفقة الكاملة -0.01096 % (-€21.92)" [ref=e157]:
                                  - cell "رسوم التبييت الرسوم من قيمة الصفقة الكاملة" [ref=e158]:
                                    - generic [ref=e159]:
                                      - text: رسوم التبييت
                                      - generic [ref=e161]: الرسوم من قيمة الصفقة الكاملة
                                  - cell "-0.01096 % (-€21.92)" [ref=e162]:
                                    - generic [ref=e163]: "-0.01096 %"
                                    - generic [ref=e164]: (-€21.92)
                            - paragraph [ref=e165]:
                              - strong [ref=e166]: حجم الصفقة بالرافعة المالية ~€200,000.00
                            - paragraph [ref=e167]:
                              - strong [ref=e168]: الأموال من الرافعة المالية ~ دولار€199,000.00
                          - separator [ref=e169]
                          - link "انتقل إلى المنصة" [ref=e171]:
                            - /url: ""
                            - generic [ref=e172]: انتقل إلى المنصة
                    - cell "-0.01096%" [ref=e173]:
                      - generic [ref=e174]: "-0.01096%"
                  - row "رسوم تمويل التبييت لصفقات البيع على المكشوف رسوم تمويل التبييت لصفقات البيع على المكشوف الهامش. استثمارك €1,000.00 رسوم التبييت الرسوم من قيمة الصفقة الكاملة -0.01096 % (-€21.92) حجم الصفقة بالرافعة المالية ~€200,000.00 الأموال من الرافعة المالية ~ دولار€199,000.00 انتقل إلى المنصة -0.01096%" [ref=e175]:
                    - cell "رسوم تمويل التبييت لصفقات البيع على المكشوف رسوم تمويل التبييت لصفقات البيع على المكشوف الهامش. استثمارك €1,000.00 رسوم التبييت الرسوم من قيمة الصفقة الكاملة -0.01096 % (-€21.92) حجم الصفقة بالرافعة المالية ~€200,000.00 الأموال من الرافعة المالية ~ دولار€199,000.00 انتقل إلى المنصة" [ref=e176]:
                      - generic [ref=e177] [cursor=pointer]:
                        - generic [ref=e179]: رسوم تمويل التبييت لصفقات البيع على المكشوف
                        - generic [ref=e181]:
                          - strong [ref=e182]: رسوم تمويل التبييت لصفقات البيع على المكشوف
                          - table [ref=e184]
                          - separator [ref=e185]
                          - generic [ref=e186]:
                            - table [ref=e187]:
                              - rowgroup [ref=e188]:
                                - row "الهامش. استثمارك €1,000.00" [ref=e189]:
                                  - cell "الهامش. استثمارك" [ref=e190]:
                                    - generic [ref=e191]: الهامش. استثمارك
                                  - cell "€1,000.00" [ref=e193]
                                - row "رسوم التبييت الرسوم من قيمة الصفقة الكاملة -0.01096 % (-€21.92)" [ref=e194]:
                                  - cell "رسوم التبييت الرسوم من قيمة الصفقة الكاملة" [ref=e195]:
                                    - generic [ref=e196]:
                                      - text: رسوم التبييت
                                      - generic [ref=e198]: الرسوم من قيمة الصفقة الكاملة
                                  - cell "-0.01096 % (-€21.92)" [ref=e199]:
                                    - generic [ref=e200]: "-0.01096 %"
                                    - generic [ref=e201]: (-€21.92)
                            - paragraph [ref=e202]:
                              - strong [ref=e203]: حجم الصفقة بالرافعة المالية ~€200,000.00
                            - paragraph [ref=e204]:
                              - strong [ref=e205]: الأموال من الرافعة المالية ~ دولار€199,000.00
                          - separator [ref=e206]
                          - link "انتقل إلى المنصة" [ref=e208]:
                            - /url: ""
                            - generic [ref=e209]: انتقل إلى المنصة
                    - cell "-0.01096%" [ref=e210]:
                      - generic [ref=e211]: "-0.01096%"
                  - row "وقت تعديل رسوم التبييت 21:00 (UTC)" [ref=e212]:
                    - cell "وقت تعديل رسوم التبييت" [ref=e213]
                    - cell "21:00 (UTC)" [ref=e214]
                  - row "العملة EUR" [ref=e215]:
                    - cell "العملة" [ref=e216]
                    - cell "EUR" [ref=e217]
                  - row "الحد الأدنى للكمية المتداولة 0.1" [ref=e218]:
                    - cell "الحد الأدنى للكمية المتداولة" [ref=e219]
                    - cell "0.1" [ref=e220]
                  - row "الهامش 0.50%" [ref=e221]:
                    - cell "الهامش" [ref=e222]
                    - cell "0.50%" [ref=e223]:
                      - generic [ref=e224]: 0.50%
                  - row "بورصة الأسهم" [ref=e225]:
                    - cell "بورصة الأسهم" [ref=e226]
                    - cell [ref=e227]
                  - row "عمولة الصفقة1 0%" [ref=e228]:
                    - cell "عمولة الصفقة1" [ref=e229]:
                      - text: عمولة الصفقة
                      - superscript [ref=e230]: "1"
                    - cell "0%" [ref=e231]
                  - row "علاوة أمر وقف الخسارة المضمون يتم فرض رسوم أمر وقف الخسارة المضمون (GSL) فقط في حالة تفعيل الأمر. يُرجى الاطلاع على قسم الرسوم والتكاليف على موقعنا لمزيد من التفاصيل. 0.1%" [ref=e232]:
                    - cell "علاوة أمر وقف الخسارة المضمون يتم فرض رسوم أمر وقف الخسارة المضمون (GSL) فقط في حالة تفعيل الأمر. يُرجى الاطلاع على قسم الرسوم والتكاليف على موقعنا لمزيد من التفاصيل." [ref=e233]:
                      - generic [ref=e234] [cursor=pointer]:
                        - generic [ref=e236]: علاوة أمر وقف الخسارة المضمون
                        - generic [ref=e239]: يتم فرض رسوم أمر وقف الخسارة المضمون (GSL) فقط في حالة تفعيل الأمر. يُرجى الاطلاع على قسم الرسوم والتكاليف على موقعنا لمزيد من التفاصيل.
                    - cell "0.1%" [ref=e240]:
                      - generic [ref=e241]: 0.1%
              - paragraph [ref=e242]:
                - generic [ref=e243]:
                  - superscript [ref=e244]: "1"
                  - text: إن الرسوم التي نتقاضاها مقابل تنفيذ صفقاتك هي السبريد، أي الفرق بين سعري الشراء والبيع. يُرجى مراجعة قسم
                  - link "التكاليف والرسوم" [ref=e245] [cursor=pointer]:
                    - /url: https://capital.com/ar-int/ways-to-trade/fees-and-charges
                  - text: على موقعنا لمزيد من المعلومات
      - generic:
        - generic:
          - main
          - complementary
      - generic [ref=e246]:
        - generic [ref=e247]:
          - generic [ref=e249]:
            - heading "ملاحظات المستخدم وتقييماته" [level=2] [ref=e250]
            - generic [ref=e251]: تعرّف على آراء عملائنا من مختلف المستويات، من المبتدئين إلى الخبراء.
          - generic [ref=e252]:
            - region [ref=e253]:
              - generic [ref=e255]:
                - group [ref=e256]:
                  - link [ref=e257] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e260]: 2025-06-30
                    - strong [ref=e261]: K***** A*******
                    - paragraph [ref=e263]: سهولة السحب والإيداع متابعة ممتازة من قبل موظفين خدمة العملاء خلال الأربعة والعشرون ساعة
                - group [ref=e265]:
                  - link [ref=e266] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e269]: 2025-06-21
                    - strong [ref=e270]: k*** H*****
                    - paragraph [ref=e272]: من افضل البرامج اللتي رأيتها ، تعامل جيد ، منصة موثوقة ، فريق عمل اكثر من رائع
                - group [ref=e274]:
                  - link [ref=e275] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e278]: 2025-06-13
                    - strong [ref=e279]: ي **ن ***ل***
                    - paragraph [ref=e281]: اشكركم ع اجتهداتكم والله برنامج سهل في كل شيء وبالأخص في يحب الارباح اشكركم من أعماق قلبي ❤️❤️❤️
                - group [ref=e283]:
                  - link [ref=e284] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e287]: 2025-06-13
                    - strong [ref=e288]: h*******_a****_l***
                    - paragraph [ref=e290]: سريع في تنفيذ الاوامر مع الوسيط
                - group [ref=e292]:
                  - link [ref=e293] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e296]: 2025-05-24
                    - strong [ref=e297]: A****
                    - paragraph [ref=e299]: اولا لان الايداع و السحب سلس جدأ و الاهم يمكن ان تربط المنصة مع منصة tradingView .
                - group [ref=e301]:
                  - link [ref=e302] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e305]: 2025-05-15
                    - strong [ref=e306]: T**** M*******
                    - paragraph [ref=e308]: كانت المتابعه من طرفكم اخ زويا اكثر من رائعه اشكرك على عملك الدرؤب على حل المشاكل الكبيره والصغيره واتمنى لك التوفيق والنجاح
                - group [ref=e310]:
                  - link [ref=e311] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e314]: 2025-05-06
                    - strong [ref=e315]: س ***س *****س***
                    - paragraph [ref=e317]: مصداقية بالتعامل للامانه وأفضل عرض للشاشه والتطبيق بوضوح
                - group [ref=e319]:
                  - link [ref=e320] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e323]: 2025-04-20
                    - strong [ref=e324]: J****M*
                    - paragraph [ref=e326]: سهوله التطبيق والسحب والايداع والمصداقيه
                - group [ref=e328]:
                  - link [ref=e329] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e332]: 2025-04-28
                    - strong [ref=e333]: M***** A*****
                    - paragraph [ref=e335]: من افضل التطبيقات الي مرت عليا جميل جدا سهل للمبتدئين والمعلمين تستطيع ايداع وسحب أموال بدون الرجوع الى اي تطبيقات اخرى تطبيق متكامل وتحت إشراف خدمة عملاء رائعه متفاهمه مع المستخدمين
                - group [ref=e337]:
                  - link [ref=e338] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e341]: 2025-04-01
                    - strong [ref=e342]: A**** S**** A***
                    - paragraph [ref=e344]: نشكر جهودكم الجبارة لجعل المواطنين تزداد ثقتهم في منصتكم الرائعة
                - group [ref=e346]:
                  - link [ref=e347] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e350]: 2025-03-25
                    - strong [ref=e351]: S*******
                    - paragraph [ref=e353]: افضل منصة تداول على الإطلاق سهولة التداول في المنصه وخدمة عملاء تتجاوب معك بسرعة وامان شكراً لكم جميعا فريق منصة كابيتل
                - group [ref=e355]:
                  - link [ref=e356] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e359]: 2025-03-08
                    - strong [ref=e360]: ل *لر***ي***
                    - paragraph [ref=e362]: كابيتال كوم عنوان الفخامه وجوهر الأناقه سعيد بالانضمام لموسوعتكم الماليه . دمتم بود
                - group [ref=e364]:
                  - link [ref=e365] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e368]: 2025-02-17
                    - strong [ref=e369]: m******* h****
                    - paragraph [ref=e371]: تطبيق جيد جدا وسهل الاستخدام انصح المبتدئين بتجربته.
                - group [ref=e373]:
                  - link [ref=e374] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e377]: 2025-02-09
                    - strong [ref=e378]: n**********
                    - paragraph [ref=e380]: صراحة برنامج رائع اشكر القائمين علية ومزيدا من التقدم
                - group "1 of 14" [ref=e382]:
                  - link "2025-06-30 K***** A******* سهولة السحب والإيداع متابعة ممتازة من قبل موظفين خدمة العملاء خلال الأربعة والعشرون ساعة" [ref=e383] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e386]: 2025-06-30
                    - strong [ref=e387]: K***** A*******
                    - paragraph [ref=e389]: سهولة السحب والإيداع متابعة ممتازة من قبل موظفين خدمة العملاء خلال الأربعة والعشرون ساعة
                - group "2 of 14" [ref=e391]:
                  - link "2025-06-21 k*** H***** من افضل البرامج اللتي رأيتها ، تعامل جيد ، منصة موثوقة ، فريق عمل اكثر من رائع" [ref=e392] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e395]: 2025-06-21
                    - strong [ref=e396]: k*** H*****
                    - paragraph [ref=e398]: من افضل البرامج اللتي رأيتها ، تعامل جيد ، منصة موثوقة ، فريق عمل اكثر من رائع
                - group "3 of 14" [ref=e400]:
                  - link "2025-06-13 ي **ن ***ل*** اشكركم ع اجتهداتكم والله برنامج سهل في كل شيء وبالأخص في يحب الارباح اشكركم من أعماق قلبي ❤️❤️❤️" [ref=e401] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=8da48ff9-ccda-45f2-9e59-c3ecc66fbee9&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
                    - generic [ref=e404]: 2025-06-13
                    - strong [ref=e405]: ي **ن ***ل***
                    - paragraph [ref=e407]: اشكركم ع اجتهداتكم والله برنامج سهل في كل شيء وبالأخص في يحب الارباح اشكركم من أعماق قلبي ❤️❤️❤️
                - group [ref=e409]:
                  - link [ref=e410] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e413]: 2025-06-13
                    - strong [ref=e414]: h*******_a****_l***
                    - paragraph [ref=e416]: سريع في تنفيذ الاوامر مع الوسيط
                - group [ref=e418]:
                  - link [ref=e419] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e422]: 2025-05-24
                    - strong [ref=e423]: A****
                    - paragraph [ref=e425]: اولا لان الايداع و السحب سلس جدأ و الاهم يمكن ان تربط المنصة مع منصة tradingView .
                - group [ref=e427]:
                  - link [ref=e428] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e431]: 2025-05-15
                    - strong [ref=e432]: T**** M*******
                    - paragraph [ref=e434]: كانت المتابعه من طرفكم اخ زويا اكثر من رائعه اشكرك على عملك الدرؤب على حل المشاكل الكبيره والصغيره واتمنى لك التوفيق والنجاح
                - group [ref=e436]:
                  - link [ref=e437] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=8da48ff9-ccda-45f2-9e59-c3ecc66fbee9&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
                    - generic [ref=e440]: 2025-05-06
                    - strong [ref=e441]: س ***س *****س***
                    - paragraph [ref=e443]: مصداقية بالتعامل للامانه وأفضل عرض للشاشه والتطبيق بوضوح
                - group [ref=e445]:
                  - link [ref=e446] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e449]: 2025-04-20
                    - strong [ref=e450]: J****M*
                    - paragraph [ref=e452]: سهوله التطبيق والسحب والايداع والمصداقيه
                - group [ref=e454]:
                  - link [ref=e455] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e458]: 2025-04-28
                    - strong [ref=e459]: M***** A*****
                    - paragraph [ref=e461]: من افضل التطبيقات الي مرت عليا جميل جدا سهل للمبتدئين والمعلمين تستطيع ايداع وسحب أموال بدون الرجوع الى اي تطبيقات اخرى تطبيق متكامل وتحت إشراف خدمة عملاء رائعه متفاهمه مع المستخدمين
                - group [ref=e463]:
                  - link [ref=e464] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e467]: 2025-04-01
                    - strong [ref=e468]: A**** S**** A***
                    - paragraph [ref=e470]: نشكر جهودكم الجبارة لجعل المواطنين تزداد ثقتهم في منصتكم الرائعة
                - group [ref=e472]:
                  - link [ref=e473] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e476]: 2025-03-25
                    - strong [ref=e477]: S*******
                    - paragraph [ref=e479]: افضل منصة تداول على الإطلاق سهولة التداول في المنصه وخدمة عملاء تتجاوب معك بسرعة وامان شكراً لكم جميعا فريق منصة كابيتل
                - group [ref=e481]:
                  - link [ref=e482] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=8da48ff9-ccda-45f2-9e59-c3ecc66fbee9&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
                    - generic [ref=e485]: 2025-03-08
                    - strong [ref=e486]: ل *لر***ي***
                    - paragraph [ref=e488]: كابيتال كوم عنوان الفخامه وجوهر الأناقه سعيد بالانضمام لموسوعتكم الماليه . دمتم بود
                - group [ref=e490]:
                  - link [ref=e491] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=8da48ff9-ccda-45f2-9e59-c3ecc66fbee9&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
                    - generic [ref=e494]: 2025-02-17
                    - strong [ref=e495]: m******* h****
                    - paragraph [ref=e497]: تطبيق جيد جدا وسهل الاستخدام انصح المبتدئين بتجربته.
                - group [ref=e499]:
                  - link [ref=e500] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e503]: 2025-02-09
                    - strong [ref=e504]: n**********
                    - paragraph [ref=e506]: صراحة برنامج رائع اشكر القائمين علية ومزيدا من التقدم
                - group [ref=e508]:
                  - link [ref=e509] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e512]: 2025-06-30
                    - strong [ref=e513]: K***** A*******
                    - paragraph [ref=e515]: سهولة السحب والإيداع متابعة ممتازة من قبل موظفين خدمة العملاء خلال الأربعة والعشرون ساعة
                - group [ref=e517]:
                  - link [ref=e518] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e521]: 2025-06-21
                    - strong [ref=e522]: k*** H*****
                    - paragraph [ref=e524]: من افضل البرامج اللتي رأيتها ، تعامل جيد ، منصة موثوقة ، فريق عمل اكثر من رائع
                - group [ref=e526]:
                  - link [ref=e527] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e530]: 2025-06-13
                    - strong [ref=e531]: ي **ن ***ل***
                    - paragraph [ref=e533]: اشكركم ع اجتهداتكم والله برنامج سهل في كل شيء وبالأخص في يحب الارباح اشكركم من أعماق قلبي ❤️❤️❤️
                - group [ref=e535]:
                  - link [ref=e536] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e539]: 2025-06-13
                    - strong [ref=e540]: h*******_a****_l***
                    - paragraph [ref=e542]: سريع في تنفيذ الاوامر مع الوسيط
                - group [ref=e544]:
                  - link [ref=e545] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e548]: 2025-05-24
                    - strong [ref=e549]: A****
                    - paragraph [ref=e551]: اولا لان الايداع و السحب سلس جدأ و الاهم يمكن ان تربط المنصة مع منصة tradingView .
                - group [ref=e553]:
                  - link [ref=e554] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e557]: 2025-05-15
                    - strong [ref=e558]: T**** M*******
                    - paragraph [ref=e560]: كانت المتابعه من طرفكم اخ زويا اكثر من رائعه اشكرك على عملك الدرؤب على حل المشاكل الكبيره والصغيره واتمنى لك التوفيق والنجاح
                - group [ref=e562]:
                  - link [ref=e563] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e566]: 2025-05-06
                    - strong [ref=e567]: س ***س *****س***
                    - paragraph [ref=e569]: مصداقية بالتعامل للامانه وأفضل عرض للشاشه والتطبيق بوضوح
                - group [ref=e571]:
                  - link [ref=e572] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e575]: 2025-04-20
                    - strong [ref=e576]: J****M*
                    - paragraph [ref=e578]: سهوله التطبيق والسحب والايداع والمصداقيه
                - group [ref=e580]:
                  - link [ref=e581] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e584]: 2025-04-28
                    - strong [ref=e585]: M***** A*****
                    - paragraph [ref=e587]: من افضل التطبيقات الي مرت عليا جميل جدا سهل للمبتدئين والمعلمين تستطيع ايداع وسحب أموال بدون الرجوع الى اي تطبيقات اخرى تطبيق متكامل وتحت إشراف خدمة عملاء رائعه متفاهمه مع المستخدمين
                - group [ref=e589]:
                  - link [ref=e590] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e593]: 2025-04-01
                    - strong [ref=e594]: A**** S**** A***
                    - paragraph [ref=e596]: نشكر جهودكم الجبارة لجعل المواطنين تزداد ثقتهم في منصتكم الرائعة
                - group [ref=e598]:
                  - link [ref=e599] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e602]: 2025-03-25
                    - strong [ref=e603]: S*******
                    - paragraph [ref=e605]: افضل منصة تداول على الإطلاق سهولة التداول في المنصه وخدمة عملاء تتجاوب معك بسرعة وامان شكراً لكم جميعا فريق منصة كابيتل
                - group [ref=e607]:
                  - link [ref=e608] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e611]: 2025-03-08
                    - strong [ref=e612]: ل *لر***ي***
                    - paragraph [ref=e614]: كابيتال كوم عنوان الفخامه وجوهر الأناقه سعيد بالانضمام لموسوعتكم الماليه . دمتم بود
                - group [ref=e616]:
                  - link [ref=e617] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e620]: 2025-02-17
                    - strong [ref=e621]: m******* h****
                    - paragraph [ref=e623]: تطبيق جيد جدا وسهل الاستخدام انصح المبتدئين بتجربته.
                - group [ref=e625]:
                  - link [ref=e626] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e629]: 2025-02-09
                    - strong [ref=e630]: n**********
                    - paragraph [ref=e632]: صراحة برنامج رائع اشكر القائمين علية ومزيدا من التقدم
              - generic:
                - button "Go to last slide" [ref=e634] [cursor=pointer]
                - button "Next slide" [ref=e635] [cursor=pointer]
            - paragraph [ref=e636]: نستعرض هنا التقييمات المميزة ذات 4 و5 نجوم. حرصًا على خصوصية عملائنا، تم إخفاء التفاصيل الشخصية للمستخدمين عن عمد تماشيًا مع متطلبات لائحة حماية البيانات العامة (GDPR)
          - generic [ref=e638]:
            - link "4.6" [ref=e639] [cursor=pointer]:
              - /url: https://www.tradingview.com/broker/Capitalcom/
              - strong [ref=e642]: "4.6"
            - link "التقييمات والمراجعات 4.7" [ref=e645] [cursor=pointer]:
              - /url: https://app.appsflyer.com/id1230088754?cp_device_id=8da48ff9-ccda-45f2-9e59-c3ecc66fbee9&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
              - strong [ref=e647]: التقييمات والمراجعات
              - strong [ref=e649]: "4.7"
            - link "التقييمات والمراجعات 4.7" [ref=e652] [cursor=pointer]:
              - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=8da48ff9-ccda-45f2-9e59-c3ecc66fbee9&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
              - strong [ref=e654]: التقييمات والمراجعات
              - strong [ref=e656]: "4.7"
            - link "4.6" [ref=e659] [cursor=pointer]:
              - /url: https://www.trustpilot.com/review/capital.com
              - strong [ref=e662]: "4.6"
        - generic [ref=e666]:
          - heading "ثلاث خطوات للبدء" [level=2] [ref=e668]
          - generic [ref=e669]:
            - button [ref=e671] [cursor=pointer]
            - generic [ref=e674]: 1. أنشئ حسابك (وفقًا لمعايير الأهلية)
            - generic [ref=e675]: 2. أودع الأموال بالشروط التي تناسبك
            - generic [ref=e676]: 3. تداول عندما تكون مستعدًا
  - contentinfo [ref=e678]:
    - generic [ref=e679]:
      - link [ref=e680] [cursor=pointer]:
        - /url: /ar-int
        - img [ref=e681]
      - generic [ref=e685]:
        - link [ref=e686] [cursor=pointer]:
          - /url: https://twitter.com/capitalcom
        - link [ref=e687] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/capital.com/
        - link [ref=e688] [cursor=pointer]:
          - /url: https://www.instagram.com/capitalcom/
        - link [ref=e689] [cursor=pointer]:
          - /url: https://www.tiktok.com/@capitalcom_international
        - link [ref=e690] [cursor=pointer]:
          - /url: https://www.facebook.com/capitalcom/
        - link [ref=e691] [cursor=pointer]:
          - /url: https://www.reddit.com/r/capitalcom/
      - generic [ref=e692]:
        - link [ref=e693] [cursor=pointer]:
          - /url: https://app.appsflyer.com/id1230088754?cp_device_id=8da48ff9-ccda-45f2-9e59-c3ecc66fbee9&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e694] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=8da48ff9-ccda-45f2-9e59-c3ecc66fbee9&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e695] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=8da48ff9-ccda-45f2-9e59-c3ecc66fbee9&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
    - generic [ref=e696]:
      - generic [ref=e697]:
        - generic [ref=e698]:
          - generic [ref=e699]:
            - generic [ref=e700]: "البلد / المنطقة:"
            - button "Egypt" [ref=e701] [cursor=pointer]:
              - generic [ref=e703]: Egypt
          - generic [ref=e704]: •
          - generic [ref=e705]:
            - generic [ref=e706]: "اللغة:"
            - button "Arabic" [ref=e707] [cursor=pointer]:
              - generic [ref=e708]: Arabic
        - generic [ref=e709]:
          - generic [ref=e710]: "كما يمكنك الاتصال بنا على:"
          - link "+971 4 576 8641" [ref=e713] [cursor=pointer]:
            - /url: tel:+971 4 576 8641
            - strong [ref=e714]: +971 4 576 8641
            - strong
          - generic [ref=e715]: •
          - link "support@capital.com" [ref=e717] [cursor=pointer]:
            - /url: mailto:support@capital.com
            - strong [ref=e718]: support@capital.com
      - generic [ref=e719]:
        - generic [ref=e720]:
          - strong [ref=e722]: التداول
          - generic [ref=e723]:
            - generic [ref=e724]:
              - generic [ref=e725]: التداول
              - generic [ref=e726]:
                - generic [ref=e727]:
                  - link "تداول عقود الفروقات" [ref=e728] [cursor=pointer]:
                    - /url: /ar-int/ways-to-trade/cfd-trading
                  - link "حاسبة تداول عقود الفروقات" [ref=e731] [cursor=pointer]:
                    - /url: /ar-int/ways-to-trade/cfd-trading/cfd-calculator
                - link "التداول التجريبي" [ref=e733] [cursor=pointer]:
                  - /url: /ar-int/trading-platforms/demo-account
                - link "احترافي" [ref=e735] [cursor=pointer]:
                  - /url: /ar-int/professional
                - link "حسومات نقدية لجميع المتداولين" [ref=e737] [cursor=pointer]:
                  - /url: /ar-int/ways-to-trade/rebates
            - generic [ref=e738]:
              - generic [ref=e739]: المنصات
              - generic [ref=e740]:
                - link "منصة الويب" [ref=e742] [cursor=pointer]:
                  - /url: /ar-int/trading-platforms/web-platform
                - link "تطبيقات الهاتف المحمول للتداول" [ref=e744] [cursor=pointer]:
                  - /url: /ar-int/trading-platforms/mobile-apps
                - link "TradingView" [ref=e746] [cursor=pointer]:
                  - /url: /ar-int/trading-platforms/trading-view
                - link "MT4" [ref=e748] [cursor=pointer]:
                  - /url: /ar-int/trading-platforms/mt4
                - link "MT5" [ref=e750] [cursor=pointer]:
                  - /url: /ar-int/trading-platforms/mt5
            - generic [ref=e751]:
              - generic [ref=e752]: تعلّم التداول
              - generic [ref=e753]:
                - link "استراتيجيات التداول" [ref=e755] [cursor=pointer]:
                  - /url: /ar-int/learn/trading-strategies
                - link "التحليل الفني" [ref=e757] [cursor=pointer]:
                  - /url: /ar-int/learn/technical-analysis
                - link "سيكولوجية التداول" [ref=e759] [cursor=pointer]:
                  - /url: /ar-int/learn/trading-psychology
                - generic [ref=e760]:
                  - link "تعلّم التداول" [ref=e761] [cursor=pointer]:
                    - /url: /ar-int/learn
                  - link "التداول على الطروحات العامة الأولية (IPO)" [ref=e764] [cursor=pointer]:
                    - /url: /ar-int/learn/ipo
        - generic [ref=e765]:
          - strong [ref=e767]: الأسواق
          - generic [ref=e768]:
            - generic [ref=e769]:
              - generic [ref=e770]: أسواقنا
              - generic [ref=e771]:
                - link "الأسواق" [ref=e773] [cursor=pointer]:
                  - /url: /ar-int/markets
                - link "الأسهم" [ref=e775] [cursor=pointer]:
                  - /url: /ar-int/markets/shares
                - link "الفوركس" [ref=e777] [cursor=pointer]:
                  - /url: /ar-int/markets/forex
                - link "المؤشرات" [ref=e779] [cursor=pointer]:
                  - /url: /ar-int/markets/indices
                - link "السلع" [ref=e781] [cursor=pointer]:
                  - /url: /ar-int/markets/commodities
                - link "العملات المشفّرة" [ref=e783] [cursor=pointer]:
                  - /url: /ar-int/markets/cryptocurrencies
                - link "السندات" [ref=e785] [cursor=pointer]:
                  - /url: /ar-int/markets/bonds
                - link "أسعار الفائدة" [ref=e787] [cursor=pointer]:
                  - /url: /ar-int/markets/interest-rates
            - generic [ref=e788]:
              - generic [ref=e789]: رؤى السوق
              - link "تحليل السوق" [ref=e792] [cursor=pointer]:
                - /url: /ar-int/analysis
        - link "التسعير" [ref=e795] [cursor=pointer]:
          - /url: /ar-int/ways-to-trade/fees-and-charges
          - strong [ref=e796]: التسعير
        - generic [ref=e797]:
          - strong [ref=e799]: من نحن
          - generic [ref=e800]:
            - generic [ref=e801]:
              - generic [ref=e802]: من نحن
              - generic [ref=e803]:
                - link "من نحن" [ref=e805] [cursor=pointer]:
                  - /url: /ar-int/about-us
                - link "مكاتبنا" [ref=e807] [cursor=pointer]:
                  - /url: /ar-int/about-us/our-offices
                - link "هل capital.com آمن؟" [ref=e809] [cursor=pointer]:
                  - /url: /ar-int/security-measures
                - link "نموذج عملنا" [ref=e811] [cursor=pointer]:
                  - /url: /ar-int/about-us/how-capital-makes-money
            - generic [ref=e812]:
              - generic [ref=e813]: اعمل معنا
              - generic [ref=e814]:
                - link "برامج الشراكة" [ref=e816] [cursor=pointer]:
                  - /url: /ar-int/partnerships
                - link "احالة صديق" [ref=e818] [cursor=pointer]:
                  - /url: /ar-int/refer-a-friend
            - generic [ref=e819]:
              - generic [ref=e820]: المساعدة
              - generic [ref=e821]:
                - link "المساعدة" [ref=e823] [cursor=pointer]:
                  - /url: /ar-int/help
                - link "تعرّض العملاء للمخاطر" [ref=e825] [cursor=pointer]:
                  - /url: /ar-int/help/client-vulnerability
                - link "تواصل معنا" [ref=e827] [cursor=pointer]:
                  - /url: /ar-int/contact-us
            - generic [ref=e828]:
              - generic [ref=e829]: قانوني
              - generic [ref=e830]:
                - link "الشروط والسياسات" [ref=e832] [cursor=pointer]:
                  - /url: /ar-int/terms-and-policies
                - link "الشكاوى" [ref=e834] [cursor=pointer]:
                  - /url: /ar-int/help/complaints
    - generic [ref=e836]:
      - paragraph [ref=e837]:
        - text: عقود الفروقات هي أدوات مالية معقدة تنطوي على مخاطر عالية قد تؤدي إلى خسارة سريعة للأموال بسبب الرافعة المالية..
        - generic [ref=e838]:
          - generic [ref=e839]:
            - strong [ref=e840]: وتجدر الإشارة إلى أن %78.48 من حسابات المستثمرين الأفراد تخسر الأموال عند تداول عقود الفروقات مع مقدم الخدمة هذا
            - text: .
          - text: يجب أن تفكر مليّا فيما إذا كنت قادرًا على تحمّل مخاطر عالية قد تؤدي إلى خسارة أموالك. يُرجى قراءة بيان الإفصاح عن المخاطر الخاص بنا بعناية
      - paragraph
      - paragraph [ref=e841]: شركة Capital Com Online Investments Ltd هي شركة ذات مسؤولية محدودة تحمل رقم 209236B، وهي مُسجلة في كومنولث جزر البهاما ومُرخصة من قبل هيئة الأوراق المالية في جزر البهاما تحت رقم ترخيص SIA-F245. يقع المكتب المُسجّل للشركة في 3 بايسايد إكزكيوتيف بارك، شارع بليك-ويست باي، ص. ب. 13012، ناسو، جزر البهاما.
    - generic [ref=e842]:
      - paragraph [ref=e843]: © 2026 Capital Com Online Investments Ltd
      - generic [ref=e844]:
        - link "خريطة الموقع" [ref=e845] [cursor=pointer]:
          - /url: /ar-int/sitemap
        - link "إعدادات ملفات تعريف الارتباط" [ref=e846] [cursor=pointer]:
          - /url: ""
        - link:
          - /url: /ar-int
        - link "الشروط والسياسات" [ref=e847] [cursor=pointer]:
          - /url: /ar-int/terms-and-policies
        - link "إجراءات تقديم الشكاوى (SCB)" [ref=e848] [cursor=pointer]:
          - /url: /ar-int/help/complaints
  - button [ref=e849] [cursor=pointer]
  - alert [ref=e851]: Euribor Future Live Chart | FEIU2026 Interest Rate | Capital.com
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
  77  |     console.log("ACTION SETUP DONE:", actionName);
  78  |     console.log("URL:", this.page.url());
  79  |   }
  80  | 
  81  |   async click(actionName) {
  82  |     await this.runSetup();
  83  |     await this.runActionSetup(actionName);
  84  | 
  85  |     const action = this.actions[actionName];
  86  |     let locator = this.getActionLocator(actionName);
  87  | 
  88  |     if (action.locatorIndex !== undefined) {
  89  |       locator = locator.nth(action.locatorIndex);
  90  |     }
  91  | 
  92  |     const count = await locator.count();
  93  |     console.log(actionName, count);
  94  | 
  95  |     if (action.optional && count === 0) {
  96  |       return { skipped: true };
  97  |     }
  98  | 
> 99  |     await locator.waitFor({
      |                   ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  100 |       state: "visible",
  101 |       // timeout: 5000,
  102 |     });
  103 | 
  104 |     await locator.click();
  105 | 
  106 |     return { skipped: false, locator };
  107 |   }
  108 | }
  109 | 
```