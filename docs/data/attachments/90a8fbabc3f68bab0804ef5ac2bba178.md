# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: markets/markets.spec.js >> forex page | tradingInstrument | tradedBtn
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
        - link "الفوركس" [ref=e49] [cursor=pointer]:
          - /url: /ar-int/markets/forex
        - text: •
      - text: Euro / US Dollar
    - generic [ref=e50]:
      - generic [ref=e53]:
        - generic [ref=e55]:
          - heading "تداول Euro / US Dollar عقد الفروقات" [level=1] [ref=e57]
          - button "أضف إلى اللائحة المفضلة" [ref=e58] [cursor=pointer]: أضف إلى اللائحة المفضلة
        - generic [ref=e59]:
          - generic [ref=e60]:
            - generic [ref=e61]:
              - generic [ref=e62]:
                - strong [ref=e63]: "1.13395"
                - generic [ref=e64]: 0%
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
                - link "بيع 1.13388" [ref=e82] [cursor=pointer]:
                  - /url: /instrument?id=93810675766468
                  - text: بيع
                  - paragraph [ref=e83]: "1.13388"
                - link "شراء 1.13395" [ref=e84] [cursor=pointer]:
                  - /url: /instrument?id=93810675766468
                  - text: شراء
                  - paragraph [ref=e85]: "1.13395"
                - generic [ref=e86]: "0.00007"
              - generic [ref=e87]:
                - generic [ref=e88]: "منخفضة: 1.13281"
                - generic [ref=e89]: "مرتفعة: 1.13819"
              - table [ref=e91]
              - generic [ref=e92]:
                - generic [ref=e93]:
                  - generic [ref=e94]: "البائعون:"
                  - generic [ref=e95]: 38.09%
                - generic [ref=e96]:
                  - generic [ref=e97]: "المشترون:"
                  - generic [ref=e98]: 61.91%
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
                  - row "السبريد 0.00007" [ref=e135]:
                    - cell "السبريد" [ref=e136]
                    - cell "0.00007" [ref=e137]
                  - row "رسوم تمويل التبييت لصفقات الشراء رسوم تمويل التبييت لصفقات الشراء الهامش. استثمارك $1,000.00 رسوم التبييت الرسوم من قيمة الصفقة الكاملة -0.00825 % (-$8.25) حجم الصفقة بالرافعة المالية ~$100,000.00 الأموال من الرافعة المالية ~ دولار$99,000.00 انتقل إلى المنصة -0.00825%" [ref=e138]:
                    - cell "رسوم تمويل التبييت لصفقات الشراء رسوم تمويل التبييت لصفقات الشراء الهامش. استثمارك $1,000.00 رسوم التبييت الرسوم من قيمة الصفقة الكاملة -0.00825 % (-$8.25) حجم الصفقة بالرافعة المالية ~$100,000.00 الأموال من الرافعة المالية ~ دولار$99,000.00 انتقل إلى المنصة" [ref=e139]:
                      - generic [ref=e140] [cursor=pointer]:
                        - generic [ref=e142]: رسوم تمويل التبييت لصفقات الشراء
                        - generic [ref=e144]:
                          - strong [ref=e145]: رسوم تمويل التبييت لصفقات الشراء
                          - table [ref=e147]
                          - separator [ref=e148]
                          - generic [ref=e149]:
                            - table [ref=e150]:
                              - rowgroup [ref=e151]:
                                - row "الهامش. استثمارك $1,000.00" [ref=e152]:
                                  - cell "الهامش. استثمارك" [ref=e153]:
                                    - generic [ref=e154]: الهامش. استثمارك
                                  - cell "$1,000.00" [ref=e156]
                                - row "رسوم التبييت الرسوم من قيمة الصفقة الكاملة -0.00825 % (-$8.25)" [ref=e157]:
                                  - cell "رسوم التبييت الرسوم من قيمة الصفقة الكاملة" [ref=e158]:
                                    - generic [ref=e159]:
                                      - text: رسوم التبييت
                                      - generic [ref=e161]: الرسوم من قيمة الصفقة الكاملة
                                  - cell "-0.00825 % (-$8.25)" [ref=e162]:
                                    - generic [ref=e163]: "-0.00825 %"
                                    - generic [ref=e164]: (-$8.25)
                            - paragraph [ref=e165]:
                              - strong [ref=e166]: حجم الصفقة بالرافعة المالية ~$100,000.00
                            - paragraph [ref=e167]:
                              - strong [ref=e168]: الأموال من الرافعة المالية ~ دولار$99,000.00
                          - separator [ref=e169]
                          - link "انتقل إلى المنصة" [ref=e171]:
                            - /url: ""
                            - generic [ref=e172]: انتقل إلى المنصة
                    - cell "-0.00825%" [ref=e173]:
                      - generic [ref=e174]: "-0.00825%"
                  - row "رسوم تمويل التبييت لصفقات البيع على المكشوف رسوم تمويل التبييت لصفقات البيع على المكشوف الهامش. استثمارك $1,000.00 رسوم التبييت الرسوم من قيمة الصفقة الكاملة 0.00003 % ($0.03) حجم الصفقة بالرافعة المالية ~$100,000.00 الأموال من الرافعة المالية ~ دولار$99,000.00 انتقل إلى المنصة 0.00003%" [ref=e175]:
                    - cell "رسوم تمويل التبييت لصفقات البيع على المكشوف رسوم تمويل التبييت لصفقات البيع على المكشوف الهامش. استثمارك $1,000.00 رسوم التبييت الرسوم من قيمة الصفقة الكاملة 0.00003 % ($0.03) حجم الصفقة بالرافعة المالية ~$100,000.00 الأموال من الرافعة المالية ~ دولار$99,000.00 انتقل إلى المنصة" [ref=e176]:
                      - generic [ref=e177] [cursor=pointer]:
                        - generic [ref=e179]: رسوم تمويل التبييت لصفقات البيع على المكشوف
                        - generic [ref=e181]:
                          - strong [ref=e182]: رسوم تمويل التبييت لصفقات البيع على المكشوف
                          - table [ref=e184]
                          - separator [ref=e185]
                          - generic [ref=e186]:
                            - table [ref=e187]:
                              - rowgroup [ref=e188]:
                                - row "الهامش. استثمارك $1,000.00" [ref=e189]:
                                  - cell "الهامش. استثمارك" [ref=e190]:
                                    - generic [ref=e191]: الهامش. استثمارك
                                  - cell "$1,000.00" [ref=e193]
                                - row "رسوم التبييت الرسوم من قيمة الصفقة الكاملة 0.00003 % ($0.03)" [ref=e194]:
                                  - cell "رسوم التبييت الرسوم من قيمة الصفقة الكاملة" [ref=e195]:
                                    - generic [ref=e196]:
                                      - text: رسوم التبييت
                                      - generic [ref=e198]: الرسوم من قيمة الصفقة الكاملة
                                  - cell "0.00003 % ($0.03)" [ref=e199]:
                                    - generic [ref=e200]: 0.00003 %
                                    - generic [ref=e201]: ($0.03)
                            - paragraph [ref=e202]:
                              - strong [ref=e203]: حجم الصفقة بالرافعة المالية ~$100,000.00
                            - paragraph [ref=e204]:
                              - strong [ref=e205]: الأموال من الرافعة المالية ~ دولار$99,000.00
                          - separator [ref=e206]
                          - link "انتقل إلى المنصة" [ref=e208]:
                            - /url: ""
                            - generic [ref=e209]: انتقل إلى المنصة
                    - cell "0.00003%" [ref=e210]:
                      - generic [ref=e211]: 0.00003%
                  - row "وقت تعديل رسوم التبييت 21:00 (UTC)" [ref=e212]:
                    - cell "وقت تعديل رسوم التبييت" [ref=e213]
                    - cell "21:00 (UTC)" [ref=e214]
                  - row "العملة USD" [ref=e215]:
                    - cell "العملة" [ref=e216]
                    - cell "USD" [ref=e217]
                  - row "الحد الأدنى للكمية المتداولة 100" [ref=e218]:
                    - cell "الحد الأدنى للكمية المتداولة" [ref=e219]
                    - cell "100" [ref=e220]
                  - row "الهامش 1.00%" [ref=e221]:
                    - cell "الهامش" [ref=e222]
                    - cell "1.00%" [ref=e223]:
                      - generic [ref=e224]: 1.00%
                  - row "بورصة الأسهم" [ref=e225]:
                    - cell "بورصة الأسهم" [ref=e226]
                    - cell [ref=e227]
                  - row "عمولة الصفقة1 0%" [ref=e228]:
                    - cell "عمولة الصفقة1" [ref=e229]:
                      - text: عمولة الصفقة
                      - superscript [ref=e230]: "1"
                    - cell "0%" [ref=e231]
                  - row "علاوة أمر وقف الخسارة المضمون يتم فرض رسوم أمر وقف الخسارة المضمون (GSL) فقط في حالة تفعيل الأمر. يُرجى الاطلاع على قسم الرسوم والتكاليف على موقعنا لمزيد من التفاصيل. 0.01%" [ref=e232]:
                    - cell "علاوة أمر وقف الخسارة المضمون يتم فرض رسوم أمر وقف الخسارة المضمون (GSL) فقط في حالة تفعيل الأمر. يُرجى الاطلاع على قسم الرسوم والتكاليف على موقعنا لمزيد من التفاصيل." [ref=e233]:
                      - generic [ref=e234] [cursor=pointer]:
                        - generic [ref=e236]: علاوة أمر وقف الخسارة المضمون
                        - generic [ref=e239]: يتم فرض رسوم أمر وقف الخسارة المضمون (GSL) فقط في حالة تفعيل الأمر. يُرجى الاطلاع على قسم الرسوم والتكاليف على موقعنا لمزيد من التفاصيل.
                    - cell "0.01%" [ref=e240]:
                      - generic [ref=e241]: 0.01%
              - paragraph [ref=e242]:
                - generic [ref=e243]:
                  - superscript [ref=e244]: "1"
                  - text: إن الرسوم التي نتقاضاها مقابل تنفيذ صفقاتك هي السبريد، أي الفرق بين سعري الشراء والبيع. يُرجى مراجعة قسم
                  - link "التكاليف والرسوم" [ref=e245] [cursor=pointer]:
                    - /url: https://capital.com/ar-int/ways-to-trade/fees-and-charges
                  - text: على موقعنا لمزيد من المعلومات
      - generic [ref=e247]:
        - main [ref=e248]:
          - heading "تداول Euro / US Dollar عقد الفروقات" [level=2] [ref=e251]
          - generic [ref=e253]:
            - heading "أحدث مقالات العملات" [level=2] [ref=e256]
            - generic [ref=e257]:
              - link "Trading EUR/USD Amidst ECB and US CPI Events" [ref=e258] [cursor=pointer]:
                - /url: /ar-int/analysis/eurusd-september112025-2
                - img "Trading EUR/USD Amidst ECB and US CPI Events" [ref=e260]
              - generic [ref=e261]:
                - link "التداول على زوج اليورو/الدولار (EUR/USD) في ظل أحداث البنك المركزي الأوروبي وبيانات التضخم الأميركية" [ref=e262] [cursor=pointer]:
                  - /url: /ar-int/analysis/eurusd-september112025-2
                - generic [ref=e263]: شهد الزوج هدوءًا نسبيًا مع ميل فني إيجابي طفيف قبيل الأحداث الأساسية، حيث يحتفظ المضاربون وفق تقارير CoT بمراكز شراء صافية، في حين تحرك عملاء Capital.com نحو الحياد.
                - generic [ref=e264]: 12:50, 11 سبتمبر 2025
          - generic [ref=e266]:
            - strong [ref=e268]: أخبار مشابهة
            - generic [ref=e270]:
              - generic [ref=e271]:
                - generic [ref=e273]:
                  - generic [ref=e274]: Reuters News
                  - generic [ref=e275]: •
                  - generic [ref=e276]: Europe
                - link "الدولار يصعد بفضل توقعات رفع الفائدة الأمريكية" [ref=e277] [cursor=pointer]:
                  - /url: /ar-int/news/aldwlar-ys-d-bfdl-twq-at-rf-alfaydt-alamrykyt
                  - strong [ref=e278]: الدولار يصعد بفضل توقعات رفع الفائدة الأمريكية
              - generic [ref=e279]:
                - generic [ref=e280]:
                  - generic [ref=e281]:
                    - generic [ref=e282]: Reuters News
                    - generic [ref=e283]: •
                    - generic [ref=e284]: Europe
                  - generic [ref=e285]: 09:46 (UTC), 24 يونيو 2026
                - link "مقدمة 1-الدولار يسجل أعلى مستوى في 13 شهرا وسط رهانات رفع الفائدة" [ref=e286] [cursor=pointer]:
                  - /url: /ar-int/news/mqdmt-1-aldwlar-ysjl-a-ly-mstwy-fy-13-shhra-wst-rhanat
                  - strong [ref=e287]: مقدمة 1-الدولار يسجل أعلى مستوى في 13 شهرا وسط رهانات رفع الفائدة
              - generic [ref=e288]:
                - generic [ref=e289]:
                  - generic [ref=e290]:
                    - generic [ref=e291]: Reuters News
                    - generic [ref=e292]: •
                    - generic [ref=e293]: Europe
                  - generic [ref=e294]: 02:23 (UTC), 24 يونيو 2026
                - link "الدولار يسجل أعلى مستوى في 13 شهرا وسط رهانات رفع الفائدة" [ref=e295] [cursor=pointer]:
                  - /url: /ar-int/news/aldwlar-ysjl-a-ly-mstwy-fy-13-shhra-wst-rhanat-rf
                  - strong [ref=e296]: الدولار يسجل أعلى مستوى في 13 شهرا وسط رهانات رفع الفائدة
              - generic [ref=e297]:
                - generic [ref=e298]:
                  - generic [ref=e299]:
                    - generic [ref=e300]: Reuters News
                    - generic [ref=e301]: •
                    - generic [ref=e302]: Europe
                  - generic [ref=e303]: 12:47 (UTC), 23 يونيو 2026
                - link "مقدمة 1-الدولار عند أعلى مستوى في عام والين قرب أدنى مستوى في 40 عاما" [ref=e304] [cursor=pointer]:
                  - /url: /ar-int/news/mqdmt-1-aldwlar-nd-a-ly-mstwy-fy-am-walyn-qrb-adny
                  - strong [ref=e305]: مقدمة 1-الدولار عند أعلى مستوى في عام والين قرب أدنى مستوى في 40 عاما
              - generic [ref=e306]:
                - generic [ref=e307]:
                  - generic [ref=e308]:
                    - generic [ref=e309]: Reuters News
                    - generic [ref=e310]: •
                    - generic [ref=e311]: Europe
                  - generic [ref=e312]: 02:12 (UTC), 23 يونيو 2026
                - link "الدولار يتماسك وسط توقعات رفع الفائدة الأمريكية وانتعاش النفط" [ref=e313] [cursor=pointer]:
                  - /url: /ar-int/news/aldwlar-ytmask-wst-twq-at-rf-alfaydt-alamrykyt-want-ash-alnft
                  - strong [ref=e314]: الدولار يتماسك وسط توقعات رفع الفائدة الأمريكية وانتعاش النفط
              - generic [ref=e315]:
                - generic [ref=e316]:
                  - generic [ref=e317]:
                    - generic [ref=e318]: Reuters News
                    - generic [ref=e319]: •
                    - generic [ref=e320]: Europe
                  - generic [ref=e321]: 13:14 (UTC), 22 يونيو 2026
                - link "مقدمة 1-استقرار الدولار مع انتهاء الجولة الأولى من محادثات أمريكا وإيران" [ref=e322] [cursor=pointer]:
                  - /url: /ar-int/news/mqdmt-1-astqrar-aldwlar-m-antha-aljwlt-alawly-mn-mhadthat-amryka
                  - strong [ref=e323]: مقدمة 1-استقرار الدولار مع انتهاء الجولة الأولى من محادثات أمريكا وإيران
              - generic [ref=e324]:
                - generic [ref=e325]:
                  - generic [ref=e326]:
                    - generic [ref=e327]: Reuters News
                    - generic [ref=e328]: •
                    - generic [ref=e329]: Europe
                  - generic [ref=e330]: 05:27 (UTC), 22 يونيو 2026
                - link "الدولار على استقرار مع انتهاء الجولة الأولى من محادثات أمريكا وإيران" [ref=e331] [cursor=pointer]:
                  - /url: /ar-int/news/aldwlar-ly-astqrar-m-antha-aljwlt-alawly-mn-mhadthat-amryka
                  - strong [ref=e332]: الدولار على استقرار مع انتهاء الجولة الأولى من محادثات أمريكا وإيران
              - generic [ref=e333]:
                - generic [ref=e334]:
                  - generic [ref=e335]:
                    - generic [ref=e336]: Reuters News
                    - generic [ref=e337]: •
                    - generic [ref=e338]: Europe
                  - generic [ref=e339]: 15:48 (UTC), 19 يونيو 2026
                - link "مقدمة 1-الين يقترب من أدنى مستوى في 40 عاما" [ref=e340] [cursor=pointer]:
                  - /url: /ar-int/news/mqdmt-1-alyn-yqtrb-mn-adny-mstwy-fy-40-ama
                  - strong [ref=e341]: مقدمة 1-الين يقترب من أدنى مستوى في 40 عاما
              - generic [ref=e342]:
                - generic [ref=e343]:
                  - generic [ref=e344]:
                    - generic [ref=e345]: Reuters News
                    - generic [ref=e346]: •
                    - generic [ref=e347]: Europe
                  - generic [ref=e348]: 01:11 (UTC), 19 يونيو 2026
                - link "الين قرب أدنى مستوى في 40 عاما وتحرك المركزي الياباني لرفع الفائدة يفشل في دعمه" [ref=e349] [cursor=pointer]:
                  - /url: /ar-int/news/alyn-qrb-adny-mstwy-fy-40-ama-wthrk-almrkzy-alyabany
                  - strong [ref=e350]: الين قرب أدنى مستوى في 40 عاما وتحرك المركزي الياباني لرفع الفائدة يفشل في دعمه
              - generic [ref=e351]:
                - generic [ref=e352]:
                  - generic [ref=e353]:
                    - generic [ref=e354]: Reuters News
                    - generic [ref=e355]: •
                    - generic [ref=e356]: Europe
                  - generic [ref=e357]: 11:16 (UTC), 18 يونيو 2026
                - link "مقدمة 1-الدولار عند أعلى مستوى في عام وسط رهانات على رفع الفائدة" [ref=e358] [cursor=pointer]:
                  - /url: /ar-int/news/mqdmt-1-aldwlar-nd-a-ly-mstwy-fy-am-wst-rhanat-ly
                  - strong [ref=e359]: مقدمة 1-الدولار عند أعلى مستوى في عام وسط رهانات على رفع الفائدة
        - complementary [ref=e360]
      - generic [ref=e361]:
        - generic [ref=e362]:
          - generic [ref=e364]:
            - heading "ملاحظات المستخدم وتقييماته" [level=2] [ref=e365]
            - generic [ref=e366]: تعرّف على آراء عملائنا من مختلف المستويات، من المبتدئين إلى الخبراء.
          - generic [ref=e367]:
            - region [ref=e368]:
              - generic [ref=e370]:
                - group [ref=e371]:
                  - link [ref=e372] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e375]: 2025-06-30
                    - strong [ref=e376]: K***** A*******
                    - paragraph [ref=e378]: سهولة السحب والإيداع متابعة ممتازة من قبل موظفين خدمة العملاء خلال الأربعة والعشرون ساعة
                - group [ref=e380]:
                  - link [ref=e381] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e384]: 2025-06-21
                    - strong [ref=e385]: k*** H*****
                    - paragraph [ref=e387]: من افضل البرامج اللتي رأيتها ، تعامل جيد ، منصة موثوقة ، فريق عمل اكثر من رائع
                - group [ref=e389]:
                  - link [ref=e390] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e393]: 2025-06-13
                    - strong [ref=e394]: ي **ن ***ل***
                    - paragraph [ref=e396]: اشكركم ع اجتهداتكم والله برنامج سهل في كل شيء وبالأخص في يحب الارباح اشكركم من أعماق قلبي ❤️❤️❤️
                - group [ref=e398]:
                  - link [ref=e399] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e402]: 2025-06-13
                    - strong [ref=e403]: h*******_a****_l***
                    - paragraph [ref=e405]: سريع في تنفيذ الاوامر مع الوسيط
                - group [ref=e407]:
                  - link [ref=e408] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e411]: 2025-05-24
                    - strong [ref=e412]: A****
                    - paragraph [ref=e414]: اولا لان الايداع و السحب سلس جدأ و الاهم يمكن ان تربط المنصة مع منصة tradingView .
                - group [ref=e416]:
                  - link [ref=e417] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e420]: 2025-05-15
                    - strong [ref=e421]: T**** M*******
                    - paragraph [ref=e423]: كانت المتابعه من طرفكم اخ زويا اكثر من رائعه اشكرك على عملك الدرؤب على حل المشاكل الكبيره والصغيره واتمنى لك التوفيق والنجاح
                - group [ref=e425]:
                  - link [ref=e426] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e429]: 2025-05-06
                    - strong [ref=e430]: س ***س *****س***
                    - paragraph [ref=e432]: مصداقية بالتعامل للامانه وأفضل عرض للشاشه والتطبيق بوضوح
                - group [ref=e434]:
                  - link [ref=e435] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e438]: 2025-04-20
                    - strong [ref=e439]: J****M*
                    - paragraph [ref=e441]: سهوله التطبيق والسحب والايداع والمصداقيه
                - group [ref=e443]:
                  - link [ref=e444] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e447]: 2025-04-28
                    - strong [ref=e448]: M***** A*****
                    - paragraph [ref=e450]: من افضل التطبيقات الي مرت عليا جميل جدا سهل للمبتدئين والمعلمين تستطيع ايداع وسحب أموال بدون الرجوع الى اي تطبيقات اخرى تطبيق متكامل وتحت إشراف خدمة عملاء رائعه متفاهمه مع المستخدمين
                - group [ref=e452]:
                  - link [ref=e453] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e456]: 2025-04-01
                    - strong [ref=e457]: A**** S**** A***
                    - paragraph [ref=e459]: نشكر جهودكم الجبارة لجعل المواطنين تزداد ثقتهم في منصتكم الرائعة
                - group [ref=e461]:
                  - link [ref=e462] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e465]: 2025-03-25
                    - strong [ref=e466]: S*******
                    - paragraph [ref=e468]: افضل منصة تداول على الإطلاق سهولة التداول في المنصه وخدمة عملاء تتجاوب معك بسرعة وامان شكراً لكم جميعا فريق منصة كابيتل
                - group [ref=e470]:
                  - link [ref=e471] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e474]: 2025-03-08
                    - strong [ref=e475]: ل *لر***ي***
                    - paragraph [ref=e477]: كابيتال كوم عنوان الفخامه وجوهر الأناقه سعيد بالانضمام لموسوعتكم الماليه . دمتم بود
                - group [ref=e479]:
                  - link [ref=e480] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e483]: 2025-02-17
                    - strong [ref=e484]: m******* h****
                    - paragraph [ref=e486]: تطبيق جيد جدا وسهل الاستخدام انصح المبتدئين بتجربته.
                - group [ref=e488]:
                  - link [ref=e489] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e492]: 2025-02-09
                    - strong [ref=e493]: n**********
                    - paragraph [ref=e495]: صراحة برنامج رائع اشكر القائمين علية ومزيدا من التقدم
                - group "1 of 14" [ref=e497]:
                  - link "2025-06-30 K***** A******* سهولة السحب والإيداع متابعة ممتازة من قبل موظفين خدمة العملاء خلال الأربعة والعشرون ساعة" [ref=e498] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e501]: 2025-06-30
                    - strong [ref=e502]: K***** A*******
                    - paragraph [ref=e504]: سهولة السحب والإيداع متابعة ممتازة من قبل موظفين خدمة العملاء خلال الأربعة والعشرون ساعة
                - group "2 of 14" [ref=e506]:
                  - link "2025-06-21 k*** H***** من افضل البرامج اللتي رأيتها ، تعامل جيد ، منصة موثوقة ، فريق عمل اكثر من رائع" [ref=e507] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e510]: 2025-06-21
                    - strong [ref=e511]: k*** H*****
                    - paragraph [ref=e513]: من افضل البرامج اللتي رأيتها ، تعامل جيد ، منصة موثوقة ، فريق عمل اكثر من رائع
                - group "3 of 14" [ref=e515]:
                  - link "2025-06-13 ي **ن ***ل*** اشكركم ع اجتهداتكم والله برنامج سهل في كل شيء وبالأخص في يحب الارباح اشكركم من أعماق قلبي ❤️❤️❤️" [ref=e516] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=48d365a0-35fb-4fe9-a2c6-8c2c04615485&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
                    - generic [ref=e519]: 2025-06-13
                    - strong [ref=e520]: ي **ن ***ل***
                    - paragraph [ref=e522]: اشكركم ع اجتهداتكم والله برنامج سهل في كل شيء وبالأخص في يحب الارباح اشكركم من أعماق قلبي ❤️❤️❤️
                - group [ref=e524]:
                  - link [ref=e525] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e528]: 2025-06-13
                    - strong [ref=e529]: h*******_a****_l***
                    - paragraph [ref=e531]: سريع في تنفيذ الاوامر مع الوسيط
                - group [ref=e533]:
                  - link [ref=e534] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e537]: 2025-05-24
                    - strong [ref=e538]: A****
                    - paragraph [ref=e540]: اولا لان الايداع و السحب سلس جدأ و الاهم يمكن ان تربط المنصة مع منصة tradingView .
                - group [ref=e542]:
                  - link [ref=e543] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e546]: 2025-05-15
                    - strong [ref=e547]: T**** M*******
                    - paragraph [ref=e549]: كانت المتابعه من طرفكم اخ زويا اكثر من رائعه اشكرك على عملك الدرؤب على حل المشاكل الكبيره والصغيره واتمنى لك التوفيق والنجاح
                - group [ref=e551]:
                  - link [ref=e552] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=48d365a0-35fb-4fe9-a2c6-8c2c04615485&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
                    - generic [ref=e555]: 2025-05-06
                    - strong [ref=e556]: س ***س *****س***
                    - paragraph [ref=e558]: مصداقية بالتعامل للامانه وأفضل عرض للشاشه والتطبيق بوضوح
                - group [ref=e560]:
                  - link [ref=e561] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e564]: 2025-04-20
                    - strong [ref=e565]: J****M*
                    - paragraph [ref=e567]: سهوله التطبيق والسحب والايداع والمصداقيه
                - group [ref=e569]:
                  - link [ref=e570] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e573]: 2025-04-28
                    - strong [ref=e574]: M***** A*****
                    - paragraph [ref=e576]: من افضل التطبيقات الي مرت عليا جميل جدا سهل للمبتدئين والمعلمين تستطيع ايداع وسحب أموال بدون الرجوع الى اي تطبيقات اخرى تطبيق متكامل وتحت إشراف خدمة عملاء رائعه متفاهمه مع المستخدمين
                - group [ref=e578]:
                  - link [ref=e579] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e582]: 2025-04-01
                    - strong [ref=e583]: A**** S**** A***
                    - paragraph [ref=e585]: نشكر جهودكم الجبارة لجعل المواطنين تزداد ثقتهم في منصتكم الرائعة
                - group [ref=e587]:
                  - link [ref=e588] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e591]: 2025-03-25
                    - strong [ref=e592]: S*******
                    - paragraph [ref=e594]: افضل منصة تداول على الإطلاق سهولة التداول في المنصه وخدمة عملاء تتجاوب معك بسرعة وامان شكراً لكم جميعا فريق منصة كابيتل
                - group [ref=e596]:
                  - link [ref=e597] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=48d365a0-35fb-4fe9-a2c6-8c2c04615485&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
                    - generic [ref=e600]: 2025-03-08
                    - strong [ref=e601]: ل *لر***ي***
                    - paragraph [ref=e603]: كابيتال كوم عنوان الفخامه وجوهر الأناقه سعيد بالانضمام لموسوعتكم الماليه . دمتم بود
                - group [ref=e605]:
                  - link [ref=e606] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=48d365a0-35fb-4fe9-a2c6-8c2c04615485&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
                    - generic [ref=e609]: 2025-02-17
                    - strong [ref=e610]: m******* h****
                    - paragraph [ref=e612]: تطبيق جيد جدا وسهل الاستخدام انصح المبتدئين بتجربته.
                - group [ref=e614]:
                  - link [ref=e615] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e618]: 2025-02-09
                    - strong [ref=e619]: n**********
                    - paragraph [ref=e621]: صراحة برنامج رائع اشكر القائمين علية ومزيدا من التقدم
                - group [ref=e623]:
                  - link [ref=e624] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e627]: 2025-06-30
                    - strong [ref=e628]: K***** A*******
                    - paragraph [ref=e630]: سهولة السحب والإيداع متابعة ممتازة من قبل موظفين خدمة العملاء خلال الأربعة والعشرون ساعة
                - group [ref=e632]:
                  - link [ref=e633] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e636]: 2025-06-21
                    - strong [ref=e637]: k*** H*****
                    - paragraph [ref=e639]: من افضل البرامج اللتي رأيتها ، تعامل جيد ، منصة موثوقة ، فريق عمل اكثر من رائع
                - group [ref=e641]:
                  - link [ref=e642] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e645]: 2025-06-13
                    - strong [ref=e646]: ي **ن ***ل***
                    - paragraph [ref=e648]: اشكركم ع اجتهداتكم والله برنامج سهل في كل شيء وبالأخص في يحب الارباح اشكركم من أعماق قلبي ❤️❤️❤️
                - group [ref=e650]:
                  - link [ref=e651] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e654]: 2025-06-13
                    - strong [ref=e655]: h*******_a****_l***
                    - paragraph [ref=e657]: سريع في تنفيذ الاوامر مع الوسيط
                - group [ref=e659]:
                  - link [ref=e660] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e663]: 2025-05-24
                    - strong [ref=e664]: A****
                    - paragraph [ref=e666]: اولا لان الايداع و السحب سلس جدأ و الاهم يمكن ان تربط المنصة مع منصة tradingView .
                - group [ref=e668]:
                  - link [ref=e669] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e672]: 2025-05-15
                    - strong [ref=e673]: T**** M*******
                    - paragraph [ref=e675]: كانت المتابعه من طرفكم اخ زويا اكثر من رائعه اشكرك على عملك الدرؤب على حل المشاكل الكبيره والصغيره واتمنى لك التوفيق والنجاح
                - group [ref=e677]:
                  - link [ref=e678] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e681]: 2025-05-06
                    - strong [ref=e682]: س ***س *****س***
                    - paragraph [ref=e684]: مصداقية بالتعامل للامانه وأفضل عرض للشاشه والتطبيق بوضوح
                - group [ref=e686]:
                  - link [ref=e687] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e690]: 2025-04-20
                    - strong [ref=e691]: J****M*
                    - paragraph [ref=e693]: سهوله التطبيق والسحب والايداع والمصداقيه
                - group [ref=e695]:
                  - link [ref=e696] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e699]: 2025-04-28
                    - strong [ref=e700]: M***** A*****
                    - paragraph [ref=e702]: من افضل التطبيقات الي مرت عليا جميل جدا سهل للمبتدئين والمعلمين تستطيع ايداع وسحب أموال بدون الرجوع الى اي تطبيقات اخرى تطبيق متكامل وتحت إشراف خدمة عملاء رائعه متفاهمه مع المستخدمين
                - group [ref=e704]:
                  - link [ref=e705] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e708]: 2025-04-01
                    - strong [ref=e709]: A**** S**** A***
                    - paragraph [ref=e711]: نشكر جهودكم الجبارة لجعل المواطنين تزداد ثقتهم في منصتكم الرائعة
                - group [ref=e713]:
                  - link [ref=e714] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e717]: 2025-03-25
                    - strong [ref=e718]: S*******
                    - paragraph [ref=e720]: افضل منصة تداول على الإطلاق سهولة التداول في المنصه وخدمة عملاء تتجاوب معك بسرعة وامان شكراً لكم جميعا فريق منصة كابيتل
                - group [ref=e722]:
                  - link [ref=e723] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e726]: 2025-03-08
                    - strong [ref=e727]: ل *لر***ي***
                    - paragraph [ref=e729]: كابيتال كوم عنوان الفخامه وجوهر الأناقه سعيد بالانضمام لموسوعتكم الماليه . دمتم بود
                - group [ref=e731]:
                  - link [ref=e732] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e735]: 2025-02-17
                    - strong [ref=e736]: m******* h****
                    - paragraph [ref=e738]: تطبيق جيد جدا وسهل الاستخدام انصح المبتدئين بتجربته.
                - group [ref=e740]:
                  - link [ref=e741] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e744]: 2025-02-09
                    - strong [ref=e745]: n**********
                    - paragraph [ref=e747]: صراحة برنامج رائع اشكر القائمين علية ومزيدا من التقدم
              - generic:
                - button "Go to last slide" [ref=e749] [cursor=pointer]
                - button "Next slide" [ref=e750] [cursor=pointer]
            - paragraph [ref=e751]: نستعرض هنا التقييمات المميزة ذات 4 و5 نجوم. حرصًا على خصوصية عملائنا، تم إخفاء التفاصيل الشخصية للمستخدمين عن عمد تماشيًا مع متطلبات لائحة حماية البيانات العامة (GDPR)
          - generic [ref=e753]:
            - link "4.6" [ref=e754] [cursor=pointer]:
              - /url: https://www.tradingview.com/broker/Capitalcom/
              - strong [ref=e757]: "4.6"
            - link "التقييمات والمراجعات 4.7" [ref=e760] [cursor=pointer]:
              - /url: https://app.appsflyer.com/id1230088754?cp_device_id=48d365a0-35fb-4fe9-a2c6-8c2c04615485&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
              - strong [ref=e762]: التقييمات والمراجعات
              - strong [ref=e764]: "4.7"
            - link "التقييمات والمراجعات 4.7" [ref=e767] [cursor=pointer]:
              - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=48d365a0-35fb-4fe9-a2c6-8c2c04615485&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
              - strong [ref=e769]: التقييمات والمراجعات
              - strong [ref=e771]: "4.7"
            - link "4.6" [ref=e774] [cursor=pointer]:
              - /url: https://www.trustpilot.com/review/capital.com
              - strong [ref=e777]: "4.6"
        - generic [ref=e781]:
          - heading "ثلاث خطوات للبدء" [level=2] [ref=e783]
          - generic [ref=e784]:
            - button [ref=e786] [cursor=pointer]
            - generic [ref=e789]: 1. أنشئ حسابك (وفقًا لمعايير الأهلية)
            - generic [ref=e790]: 2. أودع الأموال بالشروط التي تناسبك
            - generic [ref=e791]: 3. تداول عندما تكون مستعدًا
  - contentinfo [ref=e793]:
    - generic [ref=e794]:
      - link [ref=e795] [cursor=pointer]:
        - /url: /ar-int
        - img [ref=e796]
      - generic [ref=e800]:
        - link [ref=e801] [cursor=pointer]:
          - /url: https://twitter.com/capitalcom
        - link [ref=e802] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/capital.com/
        - link [ref=e803] [cursor=pointer]:
          - /url: https://www.instagram.com/capitalcom/
        - link [ref=e804] [cursor=pointer]:
          - /url: https://www.tiktok.com/@capitalcom_international
        - link [ref=e805] [cursor=pointer]:
          - /url: https://www.facebook.com/capitalcom/
        - link [ref=e806] [cursor=pointer]:
          - /url: https://www.reddit.com/r/capitalcom/
      - generic [ref=e807]:
        - link [ref=e808] [cursor=pointer]:
          - /url: https://app.appsflyer.com/id1230088754?cp_device_id=48d365a0-35fb-4fe9-a2c6-8c2c04615485&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e809] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=48d365a0-35fb-4fe9-a2c6-8c2c04615485&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e810] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=48d365a0-35fb-4fe9-a2c6-8c2c04615485&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
    - generic [ref=e811]:
      - generic [ref=e812]:
        - generic [ref=e813]:
          - generic [ref=e814]:
            - generic [ref=e815]: "البلد / المنطقة:"
            - button "Egypt" [ref=e816] [cursor=pointer]:
              - generic [ref=e818]: Egypt
          - generic [ref=e819]: •
          - generic [ref=e820]:
            - generic [ref=e821]: "اللغة:"
            - button "Arabic" [ref=e822] [cursor=pointer]:
              - generic [ref=e823]: Arabic
        - generic [ref=e824]:
          - generic [ref=e825]: "كما يمكنك الاتصال بنا على:"
          - link "+971 4 576 8641" [ref=e828] [cursor=pointer]:
            - /url: tel:+971 4 576 8641
            - strong [ref=e829]: +971 4 576 8641
            - strong
          - generic [ref=e830]: •
          - link "support@capital.com" [ref=e832] [cursor=pointer]:
            - /url: mailto:support@capital.com
            - strong [ref=e833]: support@capital.com
      - generic [ref=e834]:
        - generic [ref=e835]:
          - strong [ref=e837]: التداول
          - generic [ref=e838]:
            - generic [ref=e839]:
              - generic [ref=e840]: التداول
              - generic [ref=e841]:
                - generic [ref=e842]:
                  - link "تداول عقود الفروقات" [ref=e843] [cursor=pointer]:
                    - /url: /ar-int/ways-to-trade/cfd-trading
                  - link "حاسبة تداول عقود الفروقات" [ref=e846] [cursor=pointer]:
                    - /url: /ar-int/ways-to-trade/cfd-trading/cfd-calculator
                - link "التداول التجريبي" [ref=e848] [cursor=pointer]:
                  - /url: /ar-int/trading-platforms/demo-account
                - link "احترافي" [ref=e850] [cursor=pointer]:
                  - /url: /ar-int/professional
                - link "حسومات نقدية لجميع المتداولين" [ref=e852] [cursor=pointer]:
                  - /url: /ar-int/ways-to-trade/rebates
            - generic [ref=e853]:
              - generic [ref=e854]: المنصات
              - generic [ref=e855]:
                - link "منصة الويب" [ref=e857] [cursor=pointer]:
                  - /url: /ar-int/trading-platforms/web-platform
                - link "تطبيقات الهاتف المحمول للتداول" [ref=e859] [cursor=pointer]:
                  - /url: /ar-int/trading-platforms/mobile-apps
                - link "TradingView" [ref=e861] [cursor=pointer]:
                  - /url: /ar-int/trading-platforms/trading-view
                - link "MT4" [ref=e863] [cursor=pointer]:
                  - /url: /ar-int/trading-platforms/mt4
                - link "MT5" [ref=e865] [cursor=pointer]:
                  - /url: /ar-int/trading-platforms/mt5
            - generic [ref=e866]:
              - generic [ref=e867]: تعلّم التداول
              - generic [ref=e868]:
                - link "استراتيجيات التداول" [ref=e870] [cursor=pointer]:
                  - /url: /ar-int/learn/trading-strategies
                - link "التحليل الفني" [ref=e872] [cursor=pointer]:
                  - /url: /ar-int/learn/technical-analysis
                - link "سيكولوجية التداول" [ref=e874] [cursor=pointer]:
                  - /url: /ar-int/learn/trading-psychology
                - generic [ref=e875]:
                  - link "تعلّم التداول" [ref=e876] [cursor=pointer]:
                    - /url: /ar-int/learn
                  - link "التداول على الطروحات العامة الأولية (IPO)" [ref=e879] [cursor=pointer]:
                    - /url: /ar-int/learn/ipo
        - generic [ref=e880]:
          - strong [ref=e882]: الأسواق
          - generic [ref=e883]:
            - generic [ref=e884]:
              - generic [ref=e885]: أسواقنا
              - generic [ref=e886]:
                - link "الأسواق" [ref=e888] [cursor=pointer]:
                  - /url: /ar-int/markets
                - link "الأسهم" [ref=e890] [cursor=pointer]:
                  - /url: /ar-int/markets/shares
                - link "الفوركس" [ref=e892] [cursor=pointer]:
                  - /url: /ar-int/markets/forex
                - link "المؤشرات" [ref=e894] [cursor=pointer]:
                  - /url: /ar-int/markets/indices
                - link "السلع" [ref=e896] [cursor=pointer]:
                  - /url: /ar-int/markets/commodities
                - link "العملات المشفّرة" [ref=e898] [cursor=pointer]:
                  - /url: /ar-int/markets/cryptocurrencies
                - link "السندات" [ref=e900] [cursor=pointer]:
                  - /url: /ar-int/markets/bonds
                - link "أسعار الفائدة" [ref=e902] [cursor=pointer]:
                  - /url: /ar-int/markets/interest-rates
            - generic [ref=e903]:
              - generic [ref=e904]: رؤى السوق
              - link "تحليل السوق" [ref=e907] [cursor=pointer]:
                - /url: /ar-int/analysis
        - link "التسعير" [ref=e910] [cursor=pointer]:
          - /url: /ar-int/ways-to-trade/fees-and-charges
          - strong [ref=e911]: التسعير
        - generic [ref=e912]:
          - strong [ref=e914]: من نحن
          - generic [ref=e915]:
            - generic [ref=e916]:
              - generic [ref=e917]: من نحن
              - generic [ref=e918]:
                - link "من نحن" [ref=e920] [cursor=pointer]:
                  - /url: /ar-int/about-us
                - link "مكاتبنا" [ref=e922] [cursor=pointer]:
                  - /url: /ar-int/about-us/our-offices
                - link "هل capital.com آمن؟" [ref=e924] [cursor=pointer]:
                  - /url: /ar-int/security-measures
                - link "نموذج عملنا" [ref=e926] [cursor=pointer]:
                  - /url: /ar-int/about-us/how-capital-makes-money
            - generic [ref=e927]:
              - generic [ref=e928]: اعمل معنا
              - generic [ref=e929]:
                - link "برامج الشراكة" [ref=e931] [cursor=pointer]:
                  - /url: /ar-int/partnerships
                - link "احالة صديق" [ref=e933] [cursor=pointer]:
                  - /url: /ar-int/refer-a-friend
            - generic [ref=e934]:
              - generic [ref=e935]: المساعدة
              - generic [ref=e936]:
                - link "المساعدة" [ref=e938] [cursor=pointer]:
                  - /url: /ar-int/help
                - link "تعرّض العملاء للمخاطر" [ref=e940] [cursor=pointer]:
                  - /url: /ar-int/help/client-vulnerability
                - link "تواصل معنا" [ref=e942] [cursor=pointer]:
                  - /url: /ar-int/contact-us
            - generic [ref=e943]:
              - generic [ref=e944]: قانوني
              - generic [ref=e945]:
                - link "الشروط والسياسات" [ref=e947] [cursor=pointer]:
                  - /url: /ar-int/terms-and-policies
                - link "الشكاوى" [ref=e949] [cursor=pointer]:
                  - /url: /ar-int/help/complaints
    - generic [ref=e951]:
      - paragraph [ref=e952]:
        - text: عقود الفروقات هي أدوات مالية معقدة تنطوي على مخاطر عالية قد تؤدي إلى خسارة سريعة للأموال بسبب الرافعة المالية..
        - generic [ref=e953]:
          - generic [ref=e954]:
            - strong [ref=e955]: وتجدر الإشارة إلى أن %78.48 من حسابات المستثمرين الأفراد تخسر الأموال عند تداول عقود الفروقات مع مقدم الخدمة هذا
            - text: .
          - text: يجب أن تفكر مليّا فيما إذا كنت قادرًا على تحمّل مخاطر عالية قد تؤدي إلى خسارة أموالك. يُرجى قراءة بيان الإفصاح عن المخاطر الخاص بنا بعناية
      - paragraph
      - paragraph [ref=e956]: شركة Capital Com Online Investments Ltd هي شركة ذات مسؤولية محدودة تحمل رقم 209236B، وهي مُسجلة في كومنولث جزر البهاما ومُرخصة من قبل هيئة الأوراق المالية في جزر البهاما تحت رقم ترخيص SIA-F245. يقع المكتب المُسجّل للشركة في 3 بايسايد إكزكيوتيف بارك، شارع بليك-ويست باي، ص. ب. 13012، ناسو، جزر البهاما.
    - generic [ref=e957]:
      - paragraph [ref=e958]: © 2026 Capital Com Online Investments Ltd
      - generic [ref=e959]:
        - link "خريطة الموقع" [ref=e960] [cursor=pointer]:
          - /url: /ar-int/sitemap
        - link "إعدادات ملفات تعريف الارتباط" [ref=e961] [cursor=pointer]:
          - /url: ""
        - link:
          - /url: /ar-int
        - link "الشروط والسياسات" [ref=e962] [cursor=pointer]:
          - /url: /ar-int/terms-and-policies
        - link "إجراءات تقديم الشكاوى (SCB)" [ref=e963] [cursor=pointer]:
          - /url: /ar-int/help/complaints
  - button [ref=e964] [cursor=pointer]
  - alert [ref=e966]: مخطط تداول EUR/USD | سعر الصرف لـ Euro / US Dollar | Capital.com
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