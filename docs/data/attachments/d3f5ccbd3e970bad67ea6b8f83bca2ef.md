# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: markets/markets.spec.js >> shares page | tradingInstrument | tradedBtn
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
        - link "الأسهم" [ref=e49] [cursor=pointer]:
          - /url: /ar-int/markets/shares
        - text: •
      - text: SpaceX
    - generic [ref=e50]:
      - generic [ref=e53]:
        - generic [ref=e55]:
          - heading "تداول SpaceX - SPCX عقد الفروقات" [level=1] [ref=e57]
          - button "أضف إلى اللائحة المفضلة" [ref=e58] [cursor=pointer]: أضف إلى اللائحة المفضلة
        - generic [ref=e59]:
          - generic [ref=e60]:
            - generic [ref=e61]:
              - generic [ref=e62]:
                - strong [ref=e63]: "160.95"
                - generic [ref=e64]: +4.64%
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
                - link "بيع 160.74" [ref=e82] [cursor=pointer]:
                  - /url: /instrument?id=21674500919743684
                  - text: بيع
                  - paragraph [ref=e83]: "160.74"
                - link "شراء 160.95" [ref=e84] [cursor=pointer]:
                  - /url: /instrument?id=21674500919743684
                  - text: شراء
                  - paragraph [ref=e85]: "160.95"
                - generic [ref=e86]: "0.21"
              - generic [ref=e87]:
                - generic [ref=e88]: "منخفضة: 152.25"
                - generic [ref=e89]: "مرتفعة: 162.38"
              - table [ref=e91]
              - generic [ref=e92]:
                - generic [ref=e93]:
                  - generic [ref=e94]: "البائعون:"
                  - generic [ref=e95]: 9.08%
                - generic [ref=e96]:
                  - generic [ref=e97]: "المشترون:"
                  - generic [ref=e98]: 90.92%
            - generic [ref=e99]:
              - button "ساعات التداول في السوق (التوقيت العالمي المُنسّق)" [ref=e102]:
                - generic [ref=e104] [cursor=pointer]:
                  - paragraph [ref=e105]: ساعات التداول في السوق (التوقيت العالمي المُنسّق)
                  - strong [ref=e106]: مغلق
              - strong [ref=e108]: الأداء السابق لا يعتبر مؤشرًا يعُتمد عليه للنتائج المستقبلية. الأسعار الموضحة للأسهم هي أرقام استرشادية، وقد تختلف عن الأسعار اللحظية في السوق.
          - generic [ref=e109]:
            - generic [ref=e111]:
              - button "الملخص" [ref=e112]: الملخص
              - button "البيانات التاريخية" [ref=e113] [cursor=pointer]: البيانات التاريخية
            - generic [ref=e115]:
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
                    - row "السبريد 0.18" [ref=e135]:
                      - cell "السبريد" [ref=e136]
                      - cell "0.18" [ref=e137]
                    - row "رسوم تمويل التبييت لصفقات الشراء رسوم تمويل التبييت لصفقات الشراء الهامش. استثمارك $1,000.00 رسوم التبييت الرسوم من قيمة الصفقة الكاملة -0.021485 % (-$4.30) حجم الصفقة بالرافعة المالية ~$20,000.00 الأموال من الرافعة المالية ~ دولار$19,000.00 انتقل إلى المنصة -0.02149%" [ref=e138]:
                      - cell "رسوم تمويل التبييت لصفقات الشراء رسوم تمويل التبييت لصفقات الشراء الهامش. استثمارك $1,000.00 رسوم التبييت الرسوم من قيمة الصفقة الكاملة -0.021485 % (-$4.30) حجم الصفقة بالرافعة المالية ~$20,000.00 الأموال من الرافعة المالية ~ دولار$19,000.00 انتقل إلى المنصة" [ref=e139]:
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
                                  - row "رسوم التبييت الرسوم من قيمة الصفقة الكاملة -0.021485 % (-$4.30)" [ref=e157]:
                                    - cell "رسوم التبييت الرسوم من قيمة الصفقة الكاملة" [ref=e158]:
                                      - generic [ref=e159]:
                                        - text: رسوم التبييت
                                        - generic [ref=e161]: الرسوم من قيمة الصفقة الكاملة
                                    - cell "-0.021485 % (-$4.30)" [ref=e162]:
                                      - generic [ref=e163]: "-0.021485 %"
                                      - generic [ref=e164]: (-$4.30)
                              - paragraph [ref=e165]:
                                - strong [ref=e166]: حجم الصفقة بالرافعة المالية ~$20,000.00
                              - paragraph [ref=e167]:
                                - strong [ref=e168]: الأموال من الرافعة المالية ~ دولار$19,000.00
                            - separator [ref=e169]
                            - link "انتقل إلى المنصة" [ref=e171]:
                              - /url: ""
                              - generic [ref=e172]: انتقل إلى المنصة
                      - cell "-0.02149%" [ref=e173]:
                        - generic [ref=e174]: "-0.02149%"
                    - row "رسوم تمويل التبييت لصفقات البيع على المكشوف رسوم تمويل التبييت لصفقات البيع على المكشوف الهامش. استثمارك $1,000.00 رسوم التبييت الرسوم من قيمة الصفقة الكاملة -0.000738 % (-$0.15) حجم الصفقة بالرافعة المالية ~$20,000.00 الأموال من الرافعة المالية ~ دولار$19,000.00 انتقل إلى المنصة -0.00074%" [ref=e175]:
                      - cell "رسوم تمويل التبييت لصفقات البيع على المكشوف رسوم تمويل التبييت لصفقات البيع على المكشوف الهامش. استثمارك $1,000.00 رسوم التبييت الرسوم من قيمة الصفقة الكاملة -0.000738 % (-$0.15) حجم الصفقة بالرافعة المالية ~$20,000.00 الأموال من الرافعة المالية ~ دولار$19,000.00 انتقل إلى المنصة" [ref=e176]:
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
                                  - row "رسوم التبييت الرسوم من قيمة الصفقة الكاملة -0.000738 % (-$0.15)" [ref=e194]:
                                    - cell "رسوم التبييت الرسوم من قيمة الصفقة الكاملة" [ref=e195]:
                                      - generic [ref=e196]:
                                        - text: رسوم التبييت
                                        - generic [ref=e198]: الرسوم من قيمة الصفقة الكاملة
                                    - cell "-0.000738 % (-$0.15)" [ref=e199]:
                                      - generic [ref=e200]: "-0.000738 %"
                                      - generic [ref=e201]: (-$0.15)
                              - paragraph [ref=e202]:
                                - strong [ref=e203]: حجم الصفقة بالرافعة المالية ~$20,000.00
                              - paragraph [ref=e204]:
                                - strong [ref=e205]: الأموال من الرافعة المالية ~ دولار$19,000.00
                            - separator [ref=e206]
                            - link "انتقل إلى المنصة" [ref=e208]:
                              - /url: ""
                              - generic [ref=e209]: انتقل إلى المنصة
                      - cell "-0.00074%" [ref=e210]:
                        - generic [ref=e211]: "-0.00074%"
                    - row "وقت تعديل رسوم التبييت 21:00 (UTC)" [ref=e212]:
                      - cell "وقت تعديل رسوم التبييت" [ref=e213]
                      - cell "21:00 (UTC)" [ref=e214]
                    - row "العملة USD" [ref=e215]:
                      - cell "العملة" [ref=e216]
                      - cell "USD" [ref=e217]
                    - row "الحد الأدنى للكمية المتداولة 0.1" [ref=e218]:
                      - cell "الحد الأدنى للكمية المتداولة" [ref=e219]
                      - cell "0.1" [ref=e220]
                    - row "الهامش 5.00%" [ref=e221]:
                      - cell "الهامش" [ref=e222]
                      - cell "5.00%" [ref=e223]:
                        - generic [ref=e224]: 5.00%
                    - row "بورصة الأسهم United States of America" [ref=e225]:
                      - cell "بورصة الأسهم" [ref=e226]
                      - cell "United States of America" [ref=e227]
                    - row "عمولة الصفقة1 0%" [ref=e228]:
                      - cell "عمولة الصفقة1" [ref=e229]:
                        - text: عمولة الصفقة
                        - superscript [ref=e230]: "1"
                      - cell "0%" [ref=e231]
                    - row "علاوة أمر وقف الخسارة المضمون يتم فرض رسوم أمر وقف الخسارة المضمون (GSL) فقط في حالة تفعيل الأمر. يُرجى الاطلاع على قسم الرسوم والتكاليف على موقعنا لمزيد من التفاصيل. 1%" [ref=e232]:
                      - cell "علاوة أمر وقف الخسارة المضمون يتم فرض رسوم أمر وقف الخسارة المضمون (GSL) فقط في حالة تفعيل الأمر. يُرجى الاطلاع على قسم الرسوم والتكاليف على موقعنا لمزيد من التفاصيل." [ref=e233]:
                        - generic [ref=e234] [cursor=pointer]:
                          - generic [ref=e236]: علاوة أمر وقف الخسارة المضمون
                          - generic [ref=e239]: يتم فرض رسوم أمر وقف الخسارة المضمون (GSL) فقط في حالة تفعيل الأمر. يُرجى الاطلاع على قسم الرسوم والتكاليف على موقعنا لمزيد من التفاصيل.
                      - cell "1%" [ref=e240]:
                        - generic [ref=e241]: 1%
                - paragraph [ref=e242]:
                  - generic [ref=e243]:
                    - superscript [ref=e244]: "1"
                    - text: إن الرسوم التي نتقاضاها مقابل تنفيذ صفقاتك هي السبريد، أي الفرق بين سعري الشراء والبيع. يُرجى مراجعة قسم
                    - link "التكاليف والرسوم" [ref=e245] [cursor=pointer]:
                      - /url: https://capital.com/ar-int/ways-to-trade/fees-and-charges
                    - text: على موقعنا لمزيد من المعلومات
              - generic [ref=e247]:
                - strong [ref=e248]: الإحصائيات الرئيسية
                - table [ref=e249]:
                  - rowgroup [ref=e250]:
                    - row "الإغلاق السابق 153.75" [ref=e251]:
                      - cell "الإغلاق السابق" [ref=e252]
                      - cell "153.75" [ref=e253]
                    - row "مفتوح 153.83" [ref=e254]:
                      - cell "مفتوح" [ref=e255]
                      - cell "153.83" [ref=e256]
                    - row "التغير خلال عام -1.39%" [ref=e257]:
                      - cell "التغير خلال عام" [ref=e258]
                      - cell "-1.39%" [ref=e259]
                    - row "نطاق اليوم 153.08 - 159.55" [ref=e260]:
                      - cell "نطاق اليوم" [ref=e261]
                      - cell "153.08 - 159.55" [ref=e262]
      - generic [ref=e264]:
        - main [ref=e265]:
          - generic [ref=e267]:
            - heading "أحدث مقالات الأسهم" [level=2] [ref=e270]
            - generic [ref=e271]:
              - link "توقعات سهم تسلا" [ref=e272] [cursor=pointer]:
                - /url: /ar-int/market-updates/tesla-stock-price-in-5-years-23-02-2026
                - img "توقعات سهم تسلا" [ref=e274]
              - generic [ref=e275]:
                - 'link "توقعات سهم تسلا: هل يمكن لأرباح الربع الأول 2026 رفع الأهداف؟" [ref=e276] [cursor=pointer]':
                  - /url: /ar-int/market-updates/tesla-stock-price-in-5-years-23-02-2026
                - generic [ref=e277]: تسلا (TSLA) هي شركة أمريكية مدرجة في مجال السيارات والطاقة النظيفة، تتداول أسهمها في بورصة ناسداك وتخضع لمتابعة دقيقة من حيث الأداء المالي وبيانات التسليم والتطورات في التكنولوجيا والتصنيع. استكشف أهداف أسعار TSLA من طرف ثالث والتحليل الفني.
                - generic [ref=e278]: 17:28, 23 فبراير 2026
            - generic [ref=e279]:
              - link "التداول على مؤشر ناسداك 100 فوق مستوى 24,000" [ref=e280] [cursor=pointer]:
                - /url: /ar-int/analysis/nasdaq-september152025-2
                - img "التداول على مؤشر ناسداك 100 فوق مستوى 24,000" [ref=e282]
              - generic [ref=e283]:
                - link "التداول على مؤشر ناسداك 100 فوق مستوى 24,000" [ref=e284] [cursor=pointer]:
                  - /url: /ar-int/analysis/nasdaq-september152025-2
                - generic [ref=e285]: تجاوز المؤشر التقني الثقيل محطة جديدة تعزز النظرة الفنية الصاعدة، لكن من حيث المعنويات فهي قصة انقسام في التوجه بين مضاربي CoT وعملاء Capital.com.
                - generic [ref=e286]: 15:45, 15 سبتمبر 2025
            - generic [ref=e287]:
              - link "التداول على سهم Nvidia بعد الاعلان عن نتائج الأرباح الفصلية" [ref=e288] [cursor=pointer]:
                - /url: /ar-int/analysis/nvidia-august282025-2
                - img "التداول على سهم Nvidia بعد الاعلان عن نتائج الأرباح الفصلية" [ref=e290]
              - generic [ref=e291]:
                - link "التداول على سهم Nvidia بعد الاعلان عن نتائج الأرباح الفصلية" [ref=e292] [cursor=pointer]:
                  - /url: /ar-int/analysis/nvidia-august282025-2
                - generic [ref=e293]: تراجع السهم بأكثر من 3% في التداولات الممتدة بعد الحدث، دون أن يؤثر ذلك على معظم المؤشرات الفنية الرئيسية، حيث لا يزال انحياز عملاء المنصة في منطقة الشراء المفرط.
                - generic [ref=e294]: 14:55, 28 أغسطس 2025
            - generic [ref=e295]:
              - link "التداول على سهم تسلا بعد قفزة بنسبة 6%" [ref=e296] [cursor=pointer]:
                - /url: /ar-int/analysis/tesla-august252025-2
                - img "التداول على سهم تسلا بعد قفزة بنسبة 6%" [ref=e298]
              - generic [ref=e299]:
                - link "التداول على سهم تسلا بعد قفزة بنسبة 6%" [ref=e300] [cursor=pointer]:
                  - /url: /ar-int/analysis/tesla-august252025-2
                - generic [ref=e301]: الحركة الإيجابية في الأسواق بعد خطاب جاكسون هول يوم الجمعة الماضي دفعت بعض المؤشرات الفنية لسهم تسلا إلى التحول للون الأخضر، لكن لم يحدث بعد تغيير شامل في النظرة الفنية سواء على الإطار اليومي أو الأسبوعي.
                - generic [ref=e302]: 14:26, 25 أغسطس 2025
          - generic [ref=e304]:
            - strong [ref=e306]: أخبار مشابهة
            - generic [ref=e308]:
              - generic [ref=e309]:
                - generic [ref=e311]:
                  - generic [ref=e312]: Reuters News
                  - generic [ref=e313]: •
                  - generic [ref=e314]: Europe
                - link "أسواق النفط ترى إشارات على فائض في المعروض مع خروج ناقلات من المضيق" [ref=e315] [cursor=pointer]:
                  - /url: /ar-int/news/aswaq-alnft-try-asharat-ly-fayd-fy-alm-rwd-m-khrwj
                  - strong [ref=e316]: أسواق النفط ترى إشارات على فائض في المعروض مع خروج ناقلات من المضيق
              - generic [ref=e317]:
                - generic [ref=e318]:
                  - generic [ref=e319]:
                    - generic [ref=e320]: Reuters News
                    - generic [ref=e321]: •
                    - generic [ref=e322]: Europe
                  - generic [ref=e323]: 20:34 (UTC), 23 يونيو 2026
                - link "تراجع ستاندرد اند بورز وناسداك بعد موجة بيع لأسهم أشباه الموصلات" [ref=e324] [cursor=pointer]:
                  - /url: /ar-int/news/traj-standrd-and-bwrz-wnasdak-b-d-mwjt-by-lashm-ashbah
                  - strong [ref=e325]: تراجع ستاندرد اند بورز وناسداك بعد موجة بيع لأسهم أشباه الموصلات
              - generic [ref=e326]:
                - generic [ref=e327]:
                  - generic [ref=e328]:
                    - button [ref=e330] [cursor=pointer]
                    - generic [ref=e331]: Reuters News
                    - generic [ref=e332]: •
                    - generic [ref=e333]: Europe
                  - generic [ref=e334]: 17:19 (UTC), 23 يونيو 2026
                - link "خسائر لأسهم شركات تصنيع الرقائق الأمريكية بعد موجة بيع حادة" [ref=e335] [cursor=pointer]:
                  - /url: /ar-int/news/khsayr-lashm-shrkat-tsny-alrqayq-alamrykyt-b-d-mwjt-by-hadt
                  - strong [ref=e336]: خسائر لأسهم شركات تصنيع الرقائق الأمريكية بعد موجة بيع حادة
              - generic [ref=e337]:
                - generic [ref=e338]:
                  - generic [ref=e339]:
                    - generic [ref=e340]: Reuters News
                    - generic [ref=e341]: •
                    - generic [ref=e342]: Europe
                  - generic [ref=e343]: 13:45 (UTC), 23 يونيو 2026
                - 'link "مقدمة 1-رئيس وزراء سابق: إسرائيل هربت أجهزة ستارلينك إلى إيران" [ref=e344] [cursor=pointer]':
                  - /url: /ar-int/news/mqdmt-1-ryys-wzra-sabq-asrayyl-hrbt-ajhzt-starlynk-aly-ayran
                  - strong [ref=e345]: "مقدمة 1-رئيس وزراء سابق: إسرائيل هربت أجهزة ستارلينك إلى إيران"
              - generic [ref=e346]:
                - generic [ref=e347]:
                  - generic [ref=e348]:
                    - generic [ref=e349]: Reuters News
                    - generic [ref=e350]: •
                    - generic [ref=e351]: Europe
                  - generic [ref=e352]: 11:23 (UTC), 23 يونيو 2026
                - 'link "رئيس وزراء سابق: إسرائيل هربت أجهزة ستارلينك إلى إيران" [ref=e353] [cursor=pointer]':
                  - /url: /ar-int/news/ryys-wzra-sabq-asrayyl-hrbt-ajhzt-starlynk-aly-ayran
                  - strong [ref=e354]: "رئيس وزراء سابق: إسرائيل هربت أجهزة ستارلينك إلى إيران"
              - generic [ref=e355]:
                - generic [ref=e356]:
                  - generic [ref=e357]:
                    - button [ref=e359] [cursor=pointer]
                    - generic [ref=e360]: Reuters News
                    - generic [ref=e361]: •
                    - generic [ref=e362]: Europe
                  - generic [ref=e363]: 20:35 (UTC), 22 يونيو 2026
                - link "تباين أداء أسهم وول ستريت وسط تراجع قطاع التكنولوجيا" [ref=e364] [cursor=pointer]:
                  - /url: /ar-int/news/tbayn-ada-ashm-wwl-stryt-wst-traj-qta-altknwlwjya
                  - strong [ref=e365]: تباين أداء أسهم وول ستريت وسط تراجع قطاع التكنولوجيا
              - generic [ref=e366]:
                - generic [ref=e367]:
                  - generic [ref=e368]:
                    - button [ref=e370] [cursor=pointer]
                    - generic [ref=e371]: Reuters News
                    - generic [ref=e372]: •
                    - generic [ref=e373]: Europe
                  - generic [ref=e374]: 16:49 (UTC), 22 يونيو 2026
                - link "بعد طرح أولي قياسي.. سبيس إكس تتجه إلى سوق السندات لجمع رأس المال" [ref=e375] [cursor=pointer]:
                  - /url: /ar-int/news/b-d-trh-awly-qyasy-sbys-aks-ttjh-aly-swq-alsndat
                  - strong [ref=e376]: بعد طرح أولي قياسي.. سبيس إكس تتجه إلى سوق السندات لجمع رأس المال
              - generic [ref=e377]:
                - generic [ref=e378]:
                  - generic [ref=e379]:
                    - button [ref=e381] [cursor=pointer]
                    - generic [ref=e382]: Reuters News
                    - generic [ref=e383]: •
                    - generic [ref=e384]: Europe
                  - generic [ref=e385]: 20:19 (UTC), 18 يونيو 2026
                - link "-صعود وول ستريت بدعم قطاع الرقائق والتفاؤل بشأن إيران" [ref=e386] [cursor=pointer]:
                  - /url: /ar-int/news/s-wd-wwl-stryt-bd-m-qta-alrqayq-waltfawl-bshan-ayran
                  - strong [ref=e387]: "-صعود وول ستريت بدعم قطاع الرقائق والتفاؤل بشأن إيران"
              - generic [ref=e388]:
                - generic [ref=e389]:
                  - generic [ref=e390]:
                    - generic [ref=e391]: Reuters News
                    - generic [ref=e392]: •
                    - generic [ref=e393]: Europe
                  - generic [ref=e394]: 20:21 (UTC), 16 يونيو 2026
                - link "تراجع ناسداك وستاندرد اند بورز وداو جونز يسجل مستوى قياسيا" [ref=e395] [cursor=pointer]:
                  - /url: /ar-int/news/traj-nasdak-wstandrd-and-bwrz-wdaw-jwnz-ysjl-mstwy-qyasya
                  - strong [ref=e396]: تراجع ناسداك وستاندرد اند بورز وداو جونز يسجل مستوى قياسيا
              - generic [ref=e397]:
                - generic [ref=e398]:
                  - generic [ref=e399]:
                    - generic [ref=e400]: Reuters News
                    - generic [ref=e401]: •
                    - generic [ref=e402]: Europe
                  - generic [ref=e403]: 20:07 (UTC), 15 يونيو 2026
                - link "-صعود الأسهم الأمريكية بعد الاتفاق مع إيران وتراجع النفط" [ref=e404] [cursor=pointer]:
                  - /url: /ar-int/news/s-wd-alashm-alamrykyt-b-d-alatfaq-m-ayran-wtraj-alnft
                  - strong [ref=e405]: "-صعود الأسهم الأمريكية بعد الاتفاق مع إيران وتراجع النفط"
        - complementary [ref=e406]
      - generic [ref=e407]:
        - generic [ref=e408]:
          - generic [ref=e410]:
            - heading "ملاحظات المستخدم وتقييماته" [level=2] [ref=e411]
            - generic [ref=e412]: تعرّف على آراء عملائنا من مختلف المستويات، من المبتدئين إلى الخبراء.
          - generic [ref=e413]:
            - region [ref=e414]:
              - generic [ref=e416]:
                - group [ref=e417]:
                  - link [ref=e418] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e421]: 2025-06-30
                    - strong [ref=e422]: K***** A*******
                    - paragraph [ref=e424]: سهولة السحب والإيداع متابعة ممتازة من قبل موظفين خدمة العملاء خلال الأربعة والعشرون ساعة
                - group [ref=e426]:
                  - link [ref=e427] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e430]: 2025-06-21
                    - strong [ref=e431]: k*** H*****
                    - paragraph [ref=e433]: من افضل البرامج اللتي رأيتها ، تعامل جيد ، منصة موثوقة ، فريق عمل اكثر من رائع
                - group [ref=e435]:
                  - link [ref=e436] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e439]: 2025-06-13
                    - strong [ref=e440]: ي **ن ***ل***
                    - paragraph [ref=e442]: اشكركم ع اجتهداتكم والله برنامج سهل في كل شيء وبالأخص في يحب الارباح اشكركم من أعماق قلبي ❤️❤️❤️
                - group [ref=e444]:
                  - link [ref=e445] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e448]: 2025-06-13
                    - strong [ref=e449]: h*******_a****_l***
                    - paragraph [ref=e451]: سريع في تنفيذ الاوامر مع الوسيط
                - group [ref=e453]:
                  - link [ref=e454] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e457]: 2025-05-24
                    - strong [ref=e458]: A****
                    - paragraph [ref=e460]: اولا لان الايداع و السحب سلس جدأ و الاهم يمكن ان تربط المنصة مع منصة tradingView .
                - group [ref=e462]:
                  - link [ref=e463] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e466]: 2025-05-15
                    - strong [ref=e467]: T**** M*******
                    - paragraph [ref=e469]: كانت المتابعه من طرفكم اخ زويا اكثر من رائعه اشكرك على عملك الدرؤب على حل المشاكل الكبيره والصغيره واتمنى لك التوفيق والنجاح
                - group [ref=e471]:
                  - link [ref=e472] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e475]: 2025-05-06
                    - strong [ref=e476]: س ***س *****س***
                    - paragraph [ref=e478]: مصداقية بالتعامل للامانه وأفضل عرض للشاشه والتطبيق بوضوح
                - group [ref=e480]:
                  - link [ref=e481] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e484]: 2025-04-20
                    - strong [ref=e485]: J****M*
                    - paragraph [ref=e487]: سهوله التطبيق والسحب والايداع والمصداقيه
                - group [ref=e489]:
                  - link [ref=e490] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e493]: 2025-04-28
                    - strong [ref=e494]: M***** A*****
                    - paragraph [ref=e496]: من افضل التطبيقات الي مرت عليا جميل جدا سهل للمبتدئين والمعلمين تستطيع ايداع وسحب أموال بدون الرجوع الى اي تطبيقات اخرى تطبيق متكامل وتحت إشراف خدمة عملاء رائعه متفاهمه مع المستخدمين
                - group [ref=e498]:
                  - link [ref=e499] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e502]: 2025-04-01
                    - strong [ref=e503]: A**** S**** A***
                    - paragraph [ref=e505]: نشكر جهودكم الجبارة لجعل المواطنين تزداد ثقتهم في منصتكم الرائعة
                - group [ref=e507]:
                  - link [ref=e508] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e511]: 2025-03-25
                    - strong [ref=e512]: S*******
                    - paragraph [ref=e514]: افضل منصة تداول على الإطلاق سهولة التداول في المنصه وخدمة عملاء تتجاوب معك بسرعة وامان شكراً لكم جميعا فريق منصة كابيتل
                - group [ref=e516]:
                  - link [ref=e517] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e520]: 2025-03-08
                    - strong [ref=e521]: ل *لر***ي***
                    - paragraph [ref=e523]: كابيتال كوم عنوان الفخامه وجوهر الأناقه سعيد بالانضمام لموسوعتكم الماليه . دمتم بود
                - group [ref=e525]:
                  - link [ref=e526] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e529]: 2025-02-17
                    - strong [ref=e530]: m******* h****
                    - paragraph [ref=e532]: تطبيق جيد جدا وسهل الاستخدام انصح المبتدئين بتجربته.
                - group [ref=e534]:
                  - link [ref=e535] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e538]: 2025-02-09
                    - strong [ref=e539]: n**********
                    - paragraph [ref=e541]: صراحة برنامج رائع اشكر القائمين علية ومزيدا من التقدم
                - group "1 of 14" [ref=e543]:
                  - link "2025-06-30 K***** A******* سهولة السحب والإيداع متابعة ممتازة من قبل موظفين خدمة العملاء خلال الأربعة والعشرون ساعة" [ref=e544] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e547]: 2025-06-30
                    - strong [ref=e548]: K***** A*******
                    - paragraph [ref=e550]: سهولة السحب والإيداع متابعة ممتازة من قبل موظفين خدمة العملاء خلال الأربعة والعشرون ساعة
                - group "2 of 14" [ref=e552]:
                  - link "2025-06-21 k*** H***** من افضل البرامج اللتي رأيتها ، تعامل جيد ، منصة موثوقة ، فريق عمل اكثر من رائع" [ref=e553] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e556]: 2025-06-21
                    - strong [ref=e557]: k*** H*****
                    - paragraph [ref=e559]: من افضل البرامج اللتي رأيتها ، تعامل جيد ، منصة موثوقة ، فريق عمل اكثر من رائع
                - group "3 of 14" [ref=e561]:
                  - link "2025-06-13 ي **ن ***ل*** اشكركم ع اجتهداتكم والله برنامج سهل في كل شيء وبالأخص في يحب الارباح اشكركم من أعماق قلبي ❤️❤️❤️" [ref=e562] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=eefe5d93-74d7-4f2b-8906-b75c19ad8924&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
                    - generic [ref=e565]: 2025-06-13
                    - strong [ref=e566]: ي **ن ***ل***
                    - paragraph [ref=e568]: اشكركم ع اجتهداتكم والله برنامج سهل في كل شيء وبالأخص في يحب الارباح اشكركم من أعماق قلبي ❤️❤️❤️
                - group [ref=e570]:
                  - link [ref=e571] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e574]: 2025-06-13
                    - strong [ref=e575]: h*******_a****_l***
                    - paragraph [ref=e577]: سريع في تنفيذ الاوامر مع الوسيط
                - group [ref=e579]:
                  - link [ref=e580] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e583]: 2025-05-24
                    - strong [ref=e584]: A****
                    - paragraph [ref=e586]: اولا لان الايداع و السحب سلس جدأ و الاهم يمكن ان تربط المنصة مع منصة tradingView .
                - group [ref=e588]:
                  - link [ref=e589] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e592]: 2025-05-15
                    - strong [ref=e593]: T**** M*******
                    - paragraph [ref=e595]: كانت المتابعه من طرفكم اخ زويا اكثر من رائعه اشكرك على عملك الدرؤب على حل المشاكل الكبيره والصغيره واتمنى لك التوفيق والنجاح
                - group [ref=e597]:
                  - link [ref=e598] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=eefe5d93-74d7-4f2b-8906-b75c19ad8924&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
                    - generic [ref=e601]: 2025-05-06
                    - strong [ref=e602]: س ***س *****س***
                    - paragraph [ref=e604]: مصداقية بالتعامل للامانه وأفضل عرض للشاشه والتطبيق بوضوح
                - group [ref=e606]:
                  - link [ref=e607] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e610]: 2025-04-20
                    - strong [ref=e611]: J****M*
                    - paragraph [ref=e613]: سهوله التطبيق والسحب والايداع والمصداقيه
                - group [ref=e615]:
                  - link [ref=e616] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e619]: 2025-04-28
                    - strong [ref=e620]: M***** A*****
                    - paragraph [ref=e622]: من افضل التطبيقات الي مرت عليا جميل جدا سهل للمبتدئين والمعلمين تستطيع ايداع وسحب أموال بدون الرجوع الى اي تطبيقات اخرى تطبيق متكامل وتحت إشراف خدمة عملاء رائعه متفاهمه مع المستخدمين
                - group [ref=e624]:
                  - link [ref=e625] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e628]: 2025-04-01
                    - strong [ref=e629]: A**** S**** A***
                    - paragraph [ref=e631]: نشكر جهودكم الجبارة لجعل المواطنين تزداد ثقتهم في منصتكم الرائعة
                - group [ref=e633]:
                  - link [ref=e634] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e637]: 2025-03-25
                    - strong [ref=e638]: S*******
                    - paragraph [ref=e640]: افضل منصة تداول على الإطلاق سهولة التداول في المنصه وخدمة عملاء تتجاوب معك بسرعة وامان شكراً لكم جميعا فريق منصة كابيتل
                - group [ref=e642]:
                  - link [ref=e643] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=eefe5d93-74d7-4f2b-8906-b75c19ad8924&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
                    - generic [ref=e646]: 2025-03-08
                    - strong [ref=e647]: ل *لر***ي***
                    - paragraph [ref=e649]: كابيتال كوم عنوان الفخامه وجوهر الأناقه سعيد بالانضمام لموسوعتكم الماليه . دمتم بود
                - group [ref=e651]:
                  - link [ref=e652] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=eefe5d93-74d7-4f2b-8906-b75c19ad8924&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
                    - generic [ref=e655]: 2025-02-17
                    - strong [ref=e656]: m******* h****
                    - paragraph [ref=e658]: تطبيق جيد جدا وسهل الاستخدام انصح المبتدئين بتجربته.
                - group [ref=e660]:
                  - link [ref=e661] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e664]: 2025-02-09
                    - strong [ref=e665]: n**********
                    - paragraph [ref=e667]: صراحة برنامج رائع اشكر القائمين علية ومزيدا من التقدم
                - group [ref=e669]:
                  - link [ref=e670] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e673]: 2025-06-30
                    - strong [ref=e674]: K***** A*******
                    - paragraph [ref=e676]: سهولة السحب والإيداع متابعة ممتازة من قبل موظفين خدمة العملاء خلال الأربعة والعشرون ساعة
                - group [ref=e678]:
                  - link [ref=e679] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e682]: 2025-06-21
                    - strong [ref=e683]: k*** H*****
                    - paragraph [ref=e685]: من افضل البرامج اللتي رأيتها ، تعامل جيد ، منصة موثوقة ، فريق عمل اكثر من رائع
                - group [ref=e687]:
                  - link [ref=e688] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e691]: 2025-06-13
                    - strong [ref=e692]: ي **ن ***ل***
                    - paragraph [ref=e694]: اشكركم ع اجتهداتكم والله برنامج سهل في كل شيء وبالأخص في يحب الارباح اشكركم من أعماق قلبي ❤️❤️❤️
                - group [ref=e696]:
                  - link [ref=e697] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e700]: 2025-06-13
                    - strong [ref=e701]: h*******_a****_l***
                    - paragraph [ref=e703]: سريع في تنفيذ الاوامر مع الوسيط
                - group [ref=e705]:
                  - link [ref=e706] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e709]: 2025-05-24
                    - strong [ref=e710]: A****
                    - paragraph [ref=e712]: اولا لان الايداع و السحب سلس جدأ و الاهم يمكن ان تربط المنصة مع منصة tradingView .
                - group [ref=e714]:
                  - link [ref=e715] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e718]: 2025-05-15
                    - strong [ref=e719]: T**** M*******
                    - paragraph [ref=e721]: كانت المتابعه من طرفكم اخ زويا اكثر من رائعه اشكرك على عملك الدرؤب على حل المشاكل الكبيره والصغيره واتمنى لك التوفيق والنجاح
                - group [ref=e723]:
                  - link [ref=e724] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e727]: 2025-05-06
                    - strong [ref=e728]: س ***س *****س***
                    - paragraph [ref=e730]: مصداقية بالتعامل للامانه وأفضل عرض للشاشه والتطبيق بوضوح
                - group [ref=e732]:
                  - link [ref=e733] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e736]: 2025-04-20
                    - strong [ref=e737]: J****M*
                    - paragraph [ref=e739]: سهوله التطبيق والسحب والايداع والمصداقيه
                - group [ref=e741]:
                  - link [ref=e742] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e745]: 2025-04-28
                    - strong [ref=e746]: M***** A*****
                    - paragraph [ref=e748]: من افضل التطبيقات الي مرت عليا جميل جدا سهل للمبتدئين والمعلمين تستطيع ايداع وسحب أموال بدون الرجوع الى اي تطبيقات اخرى تطبيق متكامل وتحت إشراف خدمة عملاء رائعه متفاهمه مع المستخدمين
                - group [ref=e750]:
                  - link [ref=e751] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e754]: 2025-04-01
                    - strong [ref=e755]: A**** S**** A***
                    - paragraph [ref=e757]: نشكر جهودكم الجبارة لجعل المواطنين تزداد ثقتهم في منصتكم الرائعة
                - group [ref=e759]:
                  - link [ref=e760] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e763]: 2025-03-25
                    - strong [ref=e764]: S*******
                    - paragraph [ref=e766]: افضل منصة تداول على الإطلاق سهولة التداول في المنصه وخدمة عملاء تتجاوب معك بسرعة وامان شكراً لكم جميعا فريق منصة كابيتل
                - group [ref=e768]:
                  - link [ref=e769] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e772]: 2025-03-08
                    - strong [ref=e773]: ل *لر***ي***
                    - paragraph [ref=e775]: كابيتال كوم عنوان الفخامه وجوهر الأناقه سعيد بالانضمام لموسوعتكم الماليه . دمتم بود
                - group [ref=e777]:
                  - link [ref=e778] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e781]: 2025-02-17
                    - strong [ref=e782]: m******* h****
                    - paragraph [ref=e784]: تطبيق جيد جدا وسهل الاستخدام انصح المبتدئين بتجربته.
                - group [ref=e786]:
                  - link [ref=e787] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e790]: 2025-02-09
                    - strong [ref=e791]: n**********
                    - paragraph [ref=e793]: صراحة برنامج رائع اشكر القائمين علية ومزيدا من التقدم
              - generic:
                - button "Go to last slide" [ref=e795] [cursor=pointer]
                - button "Next slide" [ref=e796] [cursor=pointer]
            - paragraph [ref=e797]: نستعرض هنا التقييمات المميزة ذات 4 و5 نجوم. حرصًا على خصوصية عملائنا، تم إخفاء التفاصيل الشخصية للمستخدمين عن عمد تماشيًا مع متطلبات لائحة حماية البيانات العامة (GDPR)
          - generic [ref=e799]:
            - link "4.6" [ref=e800] [cursor=pointer]:
              - /url: https://www.tradingview.com/broker/Capitalcom/
              - strong [ref=e803]: "4.6"
            - link "التقييمات والمراجعات 4.7" [ref=e806] [cursor=pointer]:
              - /url: https://app.appsflyer.com/id1230088754?cp_device_id=eefe5d93-74d7-4f2b-8906-b75c19ad8924&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
              - strong [ref=e808]: التقييمات والمراجعات
              - strong [ref=e810]: "4.7"
            - link "التقييمات والمراجعات 4.7" [ref=e813] [cursor=pointer]:
              - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=eefe5d93-74d7-4f2b-8906-b75c19ad8924&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
              - strong [ref=e815]: التقييمات والمراجعات
              - strong [ref=e817]: "4.7"
            - link "4.6" [ref=e820] [cursor=pointer]:
              - /url: https://www.trustpilot.com/review/capital.com
              - strong [ref=e823]: "4.6"
        - generic [ref=e827]:
          - heading "ثلاث خطوات للبدء" [level=2] [ref=e829]
          - generic [ref=e830]:
            - button [ref=e832] [cursor=pointer]
            - generic [ref=e835]: 1. أنشئ حسابك (وفقًا لمعايير الأهلية)
            - generic [ref=e836]: 2. أودع الأموال بالشروط التي تناسبك
            - generic [ref=e837]: 3. تداول عندما تكون مستعدًا
  - contentinfo [ref=e839]:
    - generic [ref=e840]:
      - link [ref=e841] [cursor=pointer]:
        - /url: /ar-int
        - img [ref=e842]
      - generic [ref=e846]:
        - link [ref=e847] [cursor=pointer]:
          - /url: https://twitter.com/capitalcom
        - link [ref=e848] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/capital.com/
        - link [ref=e849] [cursor=pointer]:
          - /url: https://www.instagram.com/capitalcom/
        - link [ref=e850] [cursor=pointer]:
          - /url: https://www.tiktok.com/@capitalcom_international
        - link [ref=e851] [cursor=pointer]:
          - /url: https://www.facebook.com/capitalcom/
        - link [ref=e852] [cursor=pointer]:
          - /url: https://www.reddit.com/r/capitalcom/
      - generic [ref=e853]:
        - link [ref=e854] [cursor=pointer]:
          - /url: https://app.appsflyer.com/id1230088754?cp_device_id=eefe5d93-74d7-4f2b-8906-b75c19ad8924&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e855] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=eefe5d93-74d7-4f2b-8906-b75c19ad8924&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e856] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=eefe5d93-74d7-4f2b-8906-b75c19ad8924&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
    - generic [ref=e857]:
      - generic [ref=e858]:
        - generic [ref=e859]:
          - generic [ref=e860]:
            - generic [ref=e861]: "البلد / المنطقة:"
            - button "Egypt" [ref=e862] [cursor=pointer]:
              - generic [ref=e864]: Egypt
          - generic [ref=e865]: •
          - generic [ref=e866]:
            - generic [ref=e867]: "اللغة:"
            - button "Arabic" [ref=e868] [cursor=pointer]:
              - generic [ref=e869]: Arabic
        - generic [ref=e870]:
          - generic [ref=e871]: "كما يمكنك الاتصال بنا على:"
          - link "+971 4 576 8641" [ref=e874] [cursor=pointer]:
            - /url: tel:+971 4 576 8641
            - strong [ref=e875]: +971 4 576 8641
            - strong
          - generic [ref=e876]: •
          - link "support@capital.com" [ref=e878] [cursor=pointer]:
            - /url: mailto:support@capital.com
            - strong [ref=e879]: support@capital.com
      - generic [ref=e880]:
        - generic [ref=e881]:
          - strong [ref=e883]: التداول
          - generic [ref=e884]:
            - generic [ref=e885]:
              - generic [ref=e886]: التداول
              - generic [ref=e887]:
                - generic [ref=e888]:
                  - link "تداول عقود الفروقات" [ref=e889] [cursor=pointer]:
                    - /url: /ar-int/ways-to-trade/cfd-trading
                  - link "حاسبة تداول عقود الفروقات" [ref=e892] [cursor=pointer]:
                    - /url: /ar-int/ways-to-trade/cfd-trading/cfd-calculator
                - link "التداول التجريبي" [ref=e894] [cursor=pointer]:
                  - /url: /ar-int/trading-platforms/demo-account
                - link "احترافي" [ref=e896] [cursor=pointer]:
                  - /url: /ar-int/professional
                - link "حسومات نقدية لجميع المتداولين" [ref=e898] [cursor=pointer]:
                  - /url: /ar-int/ways-to-trade/rebates
            - generic [ref=e899]:
              - generic [ref=e900]: المنصات
              - generic [ref=e901]:
                - link "منصة الويب" [ref=e903] [cursor=pointer]:
                  - /url: /ar-int/trading-platforms/web-platform
                - link "تطبيقات الهاتف المحمول للتداول" [ref=e905] [cursor=pointer]:
                  - /url: /ar-int/trading-platforms/mobile-apps
                - link "TradingView" [ref=e907] [cursor=pointer]:
                  - /url: /ar-int/trading-platforms/trading-view
                - link "MT4" [ref=e909] [cursor=pointer]:
                  - /url: /ar-int/trading-platforms/mt4
                - link "MT5" [ref=e911] [cursor=pointer]:
                  - /url: /ar-int/trading-platforms/mt5
            - generic [ref=e912]:
              - generic [ref=e913]: تعلّم التداول
              - generic [ref=e914]:
                - link "استراتيجيات التداول" [ref=e916] [cursor=pointer]:
                  - /url: /ar-int/learn/trading-strategies
                - link "التحليل الفني" [ref=e918] [cursor=pointer]:
                  - /url: /ar-int/learn/technical-analysis
                - link "سيكولوجية التداول" [ref=e920] [cursor=pointer]:
                  - /url: /ar-int/learn/trading-psychology
                - generic [ref=e921]:
                  - link "تعلّم التداول" [ref=e922] [cursor=pointer]:
                    - /url: /ar-int/learn
                  - link "التداول على الطروحات العامة الأولية (IPO)" [ref=e925] [cursor=pointer]:
                    - /url: /ar-int/learn/ipo
        - generic [ref=e926]:
          - strong [ref=e928]: الأسواق
          - generic [ref=e929]:
            - generic [ref=e930]:
              - generic [ref=e931]: أسواقنا
              - generic [ref=e932]:
                - link "الأسواق" [ref=e934] [cursor=pointer]:
                  - /url: /ar-int/markets
                - link "الأسهم" [ref=e936] [cursor=pointer]:
                  - /url: /ar-int/markets/shares
                - link "الفوركس" [ref=e938] [cursor=pointer]:
                  - /url: /ar-int/markets/forex
                - link "المؤشرات" [ref=e940] [cursor=pointer]:
                  - /url: /ar-int/markets/indices
                - link "السلع" [ref=e942] [cursor=pointer]:
                  - /url: /ar-int/markets/commodities
                - link "العملات المشفّرة" [ref=e944] [cursor=pointer]:
                  - /url: /ar-int/markets/cryptocurrencies
                - link "السندات" [ref=e946] [cursor=pointer]:
                  - /url: /ar-int/markets/bonds
                - link "أسعار الفائدة" [ref=e948] [cursor=pointer]:
                  - /url: /ar-int/markets/interest-rates
            - generic [ref=e949]:
              - generic [ref=e950]: رؤى السوق
              - link "تحليل السوق" [ref=e953] [cursor=pointer]:
                - /url: /ar-int/analysis
        - link "التسعير" [ref=e956] [cursor=pointer]:
          - /url: /ar-int/ways-to-trade/fees-and-charges
          - strong [ref=e957]: التسعير
        - generic [ref=e958]:
          - strong [ref=e960]: من نحن
          - generic [ref=e961]:
            - generic [ref=e962]:
              - generic [ref=e963]: من نحن
              - generic [ref=e964]:
                - link "من نحن" [ref=e966] [cursor=pointer]:
                  - /url: /ar-int/about-us
                - link "مكاتبنا" [ref=e968] [cursor=pointer]:
                  - /url: /ar-int/about-us/our-offices
                - link "هل capital.com آمن؟" [ref=e970] [cursor=pointer]:
                  - /url: /ar-int/security-measures
                - link "نموذج عملنا" [ref=e972] [cursor=pointer]:
                  - /url: /ar-int/about-us/how-capital-makes-money
            - generic [ref=e973]:
              - generic [ref=e974]: اعمل معنا
              - generic [ref=e975]:
                - link "برامج الشراكة" [ref=e977] [cursor=pointer]:
                  - /url: /ar-int/partnerships
                - link "احالة صديق" [ref=e979] [cursor=pointer]:
                  - /url: /ar-int/refer-a-friend
            - generic [ref=e980]:
              - generic [ref=e981]: المساعدة
              - generic [ref=e982]:
                - link "المساعدة" [ref=e984] [cursor=pointer]:
                  - /url: /ar-int/help
                - link "تعرّض العملاء للمخاطر" [ref=e986] [cursor=pointer]:
                  - /url: /ar-int/help/client-vulnerability
                - link "تواصل معنا" [ref=e988] [cursor=pointer]:
                  - /url: /ar-int/contact-us
            - generic [ref=e989]:
              - generic [ref=e990]: قانوني
              - generic [ref=e991]:
                - link "الشروط والسياسات" [ref=e993] [cursor=pointer]:
                  - /url: /ar-int/terms-and-policies
                - link "الشكاوى" [ref=e995] [cursor=pointer]:
                  - /url: /ar-int/help/complaints
    - generic [ref=e997]:
      - paragraph [ref=e998]:
        - text: عقود الفروقات هي أدوات مالية معقدة تنطوي على مخاطر عالية قد تؤدي إلى خسارة سريعة للأموال بسبب الرافعة المالية..
        - generic [ref=e999]:
          - generic [ref=e1000]:
            - strong [ref=e1001]: وتجدر الإشارة إلى أن %78.48 من حسابات المستثمرين الأفراد تخسر الأموال عند تداول عقود الفروقات مع مقدم الخدمة هذا
            - text: .
          - text: يجب أن تفكر مليّا فيما إذا كنت قادرًا على تحمّل مخاطر عالية قد تؤدي إلى خسارة أموالك. يُرجى قراءة بيان الإفصاح عن المخاطر الخاص بنا بعناية
      - paragraph
      - paragraph [ref=e1002]: شركة Capital Com Online Investments Ltd هي شركة ذات مسؤولية محدودة تحمل رقم 209236B، وهي مُسجلة في كومنولث جزر البهاما ومُرخصة من قبل هيئة الأوراق المالية في جزر البهاما تحت رقم ترخيص SIA-F245. يقع المكتب المُسجّل للشركة في 3 بايسايد إكزكيوتيف بارك، شارع بليك-ويست باي، ص. ب. 13012، ناسو، جزر البهاما.
    - generic [ref=e1003]:
      - paragraph [ref=e1004]: © 2026 Capital Com Online Investments Ltd
      - generic [ref=e1005]:
        - link "خريطة الموقع" [ref=e1006] [cursor=pointer]:
          - /url: /ar-int/sitemap
        - link "إعدادات ملفات تعريف الارتباط" [ref=e1007] [cursor=pointer]:
          - /url: ""
        - link:
          - /url: /ar-int
        - link "الشروط والسياسات" [ref=e1008] [cursor=pointer]:
          - /url: /ar-int/terms-and-policies
        - link "إجراءات تقديم الشكاوى (SCB)" [ref=e1009] [cursor=pointer]:
          - /url: /ar-int/help/complaints
  - button [ref=e1010] [cursor=pointer]
  - alert [ref=e1012]: سعر سهم ورسوم بيانية من SPCX | تداول | Capital.com
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