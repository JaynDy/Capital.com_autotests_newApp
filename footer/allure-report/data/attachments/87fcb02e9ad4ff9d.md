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
      - text: CFD's zijn complexe instrumenten en houden vanwege de hefboomwerking een hoog risico in op grote verliezen.
      - generic [ref=e8]:
        - generic [ref=e9]:
          - strong [ref=e10]: Tussen 74% en 89% van de rekeningen van particuliere beleggers verliest geld bij het handelen in CFD's
          - text: .
        - text: U moet nagaan of u wel degelijk begrijpt hoe CFD's werken en of u zich het hoge risico op geldverlies kunt veroorloven. Raadpleeg onze
        - link "risicoverklaring" [ref=e11] [cursor=pointer]:
          - /url: https://capital.com/risk-disclosure-policy-cceu
    - generic [ref=e13]:
      - link [ref=e14] [cursor=pointer]:
        - /url: /nl-nl
        - img [ref=e15]
      - generic [ref=e20]:
        - navigation [ref=e21]:
          - button "Handelen & beleggen" [ref=e22]:
            - button "Handelen & beleggen" [ref=e23]:
              - generic [ref=e24]: Handelen & beleggen
          - button "Markten" [ref=e25]:
            - button "Markten" [ref=e26]:
              - generic [ref=e27]: Markten
          - link "Prijzen" [ref=e30] [cursor=pointer]:
            - /url: /nl-nl/ways-to-trade/fees-and-charges/stocks
          - button "Informatie" [ref=e31]:
            - button "Informatie" [ref=e32]:
              - generic [ref=e33]: Informatie
        - button "nl" [ref=e34] [cursor=pointer]:
          - generic [ref=e36]: nl
      - generic [ref=e38]:
        - button "Aanmelden" [ref=e39] [cursor=pointer]: Aanmelden
        - button "Maak een account aan" [ref=e40] [cursor=pointer]: Maak een account aan
  - generic [ref=e43]:
    - generic [ref=e44]:
      - generic [ref=e45]:
        - generic [ref=e50]:
          - generic [ref=e52]:
            - heading "In rumoerige markten, bouwen wij aan betere beslissingen" [level=1] [ref=e53]
            - generic [ref=e55]:
              - text: Wereldwijd
              - text: Beleggings- en handelsplatform voor CFD’s
              - text: 5.500+ instrumenten
            - button "Account openen" [ref=e56] [cursor=pointer]: Account openen
          - generic [ref=e57]:
            - generic:
              - generic:
                - img "Hero slide 1 Bottom"
          - generic [ref=e59]:
            - link "Android" [ref=e60] [cursor=pointer]:
              - /url: /nl-nl/trading-platforms/mobile-apps
            - link "iOS" [ref=e61] [cursor=pointer]:
              - /url: /nl-nl/trading-platforms/mobile-apps
            - link "MT4" [ref=e62] [cursor=pointer]:
              - /url: /nl-nl/trading-platforms/mt4
            - link "MT5" [ref=e63] [cursor=pointer]:
              - /url: /nl-nl/trading-platforms/mt5
            - link "TradingView" [ref=e64] [cursor=pointer]:
              - /url: /nl-nl/trading-platforms/trading-view
            - link "Webterminal" [ref=e65] [cursor=pointer]:
              - /url: /nl-nl/trading-platforms/web-platform
        - generic [ref=e68]:
          - heading "Lokale ondersteuning. Wereldwijd netwerk." [level=2] [ref=e69]:
            - generic [ref=e70]: Lokale ondersteuning.
            - text: Wereldwijd netwerk.
          - paragraph [ref=e72]: Erkend en onder toezicht van de Cyprus Securities and Exchange Commission (CySEC)
      - generic [ref=e74]:
        - img [ref=e75]
        - generic [ref=e76]:
          - generic [ref=e77]:
            - heading "5.500+ instrumenten Eén centrale omgeving" [level=2] [ref=e78]:
              - text: 5.500+ instrumenten
              - text: Eén centrale omgeving
            - link "Ontdek de CFD-markten" [ref=e79] [cursor=pointer]:
              - /url: /nl-nl/markets
          - list [ref=e83]:
            - listitem [ref=e84]:
              - button "Grondstoffen" [ref=e85] [cursor=pointer]:
                - heading "Grondstoffen" [level=3] [ref=e88]
            - listitem [ref=e89]:
              - button "Crypto" [ref=e90] [cursor=pointer]:
                - heading "Crypto" [level=3] [ref=e93]
            - listitem [ref=e94]:
              - button "Aandelen" [ref=e95] [cursor=pointer]:
                - heading "Aandelen" [level=3] [ref=e98]
            - listitem [ref=e99]:
              - button "Obligaties" [ref=e100] [cursor=pointer]:
                - heading "Obligaties" [level=3] [ref=e103]
            - listitem [ref=e104]:
              - button "ETF" [ref=e105] [cursor=pointer]:
                - heading "ETF" [level=3] [ref=e108]
            - listitem [ref=e109]:
              - button "Indexen" [ref=e110] [cursor=pointer]:
                - heading "Indexen" [level=3] [ref=e113]
            - listitem [ref=e114]:
              - button "Rentetarieven" [ref=e115] [cursor=pointer]:
                - heading "Rentetarieven" [level=3] [ref=e118]
            - listitem [ref=e119]:
              - button "Grondstoffen" [ref=e120] [cursor=pointer]:
                - heading "Grondstoffen" [level=3] [ref=e123]
            - listitem [ref=e124]:
              - button "Crypto" [ref=e125] [cursor=pointer]:
                - heading "Crypto" [level=3] [ref=e128]
            - listitem [ref=e129]:
              - button "Aandelen" [ref=e130] [cursor=pointer]:
                - heading "Aandelen" [level=3] [ref=e133]
            - listitem [ref=e134]:
              - button "Obligaties" [ref=e135] [cursor=pointer]:
                - heading "Obligaties" [level=3] [ref=e138]
            - listitem [ref=e139]:
              - button "ETF" [ref=e140] [cursor=pointer]:
                - heading "ETF" [level=3] [ref=e143]
            - listitem [ref=e144]:
              - button "Indexen" [ref=e145] [cursor=pointer]:
                - heading "Indexen" [level=3] [ref=e148]
            - listitem [ref=e149]:
              - button "Rentetarieven" [ref=e150] [cursor=pointer]:
                - heading "Rentetarieven" [level=3] [ref=e153]
            - listitem [ref=e154]:
              - button "Grondstoffen" [ref=e155] [cursor=pointer]:
                - heading "Grondstoffen" [level=3] [ref=e158]
            - listitem [ref=e159]:
              - button "Crypto" [ref=e160] [cursor=pointer]:
                - heading "Crypto" [level=3] [ref=e163]
            - listitem [ref=e164]:
              - button "Aandelen" [ref=e165] [cursor=pointer]:
                - heading "Aandelen" [level=3] [ref=e168]
            - listitem [ref=e169]:
              - button "Obligaties" [ref=e170] [cursor=pointer]:
                - heading "Obligaties" [level=3] [ref=e173]
            - listitem [ref=e174]:
              - button "ETF" [ref=e175] [cursor=pointer]:
                - heading "ETF" [level=3] [ref=e178]
            - listitem [ref=e179]:
              - button "Indexen" [ref=e180] [cursor=pointer]:
                - heading "Indexen" [level=3] [ref=e183]
            - listitem [ref=e184]:
              - button "Rentetarieven" [ref=e185] [cursor=pointer]:
                - heading "Rentetarieven" [level=3] [ref=e188]
    - generic [ref=e189]:
      - generic [ref=e191]:
        - heading "Op elk scherm. Eén systeem." [level=2] [ref=e192]:
          - text: Op elk scherm.
          - generic [ref=e193]: Eén systeem.
        - paragraph [ref=e195]: Meerdere platforms, alle markten, elk apparaat. Uw handelsinfrastructuur.
        - generic [ref=e197]:
          - button "Download de app" [ref=e198] [cursor=pointer]: Download de app
          - link "Handel op desktop" [ref=e199] [cursor=pointer]:
            - /url: /trading/platform/
      - generic:
        - generic:
          - generic:
            - img "Mobile platform"
        - generic:
          - generic:
            - img "Web platform"
    - generic [ref=e200]:
      - img [ref=e201]
      - generic [ref=e203]:
        - heading "Een duidelijke kostenstructuur voordat u beslist" [level=2] [ref=e204]
        - generic [ref=e205]:
          - list [ref=e206]:
            - listitem [ref=e207]:
              - heading "Wij verdienen aan de spreads op uitgevoerde transacties" [level=3] [ref=e208]
              - paragraph [ref=e210]: Eerst duidelijkheid. Dan pas uw positie.
            - listitem [ref=e211]:
              - heading "Geen stortings- of opnamekosten" [level=3] [ref=e212]
              - paragraph [ref=e214]: Betrouwbare betalingen. Bankoverschrijvingen, kaarten, digitale wallets.
          - generic [ref=e216]:
            - paragraph [ref=e217]: Onze volledige kostenstructuur is beschikbaar op onze
            - paragraph [ref=e218]:
              - link "pagina Kosten en vergoedingen." [ref=e219] [cursor=pointer]:
                - /url: /nl-nl/ways-to-trade/fees-and-charges
    - generic [ref=e220]:
      - generic [ref=e222]:
        - img "risk graph 1" [ref=e224]
        - img "risk graph 2" [ref=e226]
      - generic [ref=e227]:
        - generic [ref=e229]:
          - heading "De meeste handelaren verliezen geld" [level=2] [ref=e231]
          - heading "De markt speelt een rol" [level=2] [ref=e233]
          - heading "Uw beslissingen maken het verschil" [level=2] [ref=e235]
        - generic [ref=e236]:
          - generic [ref=e238]:
            - heading "Ingesteld in volle rust." [level=2] [ref=e239]
            - heading "Actief onder druk." [level=2] [ref=e240]
          - generic [ref=e241]:
            - generic [ref=e242]:
              - heading "Stel uw stop-loss op voorhand in" [level=3] [ref=e243]
              - img "trading" [ref=e245]
            - generic [ref=e246]:
              - heading "Kies uw hefboom" [level=3] [ref=e247]
              - img "cfd" [ref=e249]
              - img "leverage" [ref=e251]
            - generic [ref=e252]:
              - heading "Bevestig uw order" [level=3] [ref=e253]
              - img "bottomSheet" [ref=e255]
    - generic [ref=e256]:
      - generic [ref=e257]:
        - heading "Discipline zie je. Vertrouwen ook." [level=2] [ref=e259]:
          - text: Discipline zie je.
          - text: Vertrouwen ook.
        - generic [ref=e260]:
          - img "Secondary phone" [ref=e263]
          - img "Main phone" [ref=e266]
      - list [ref=e272]:
        - listitem [ref=e273]:
          - link "4.7 Beoordelingen en recensies" [ref=e274] [cursor=pointer]:
            - /url: https://app.appsflyer.com/id1230088754?cp_device_id=23e4e875-3f4a-4894-8a9c-6341e04ef610&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - generic [ref=e275]: "4.7"
            - generic [ref=e276]: Beoordelingen en recensies
        - listitem [ref=e277]:
          - link "4.6 Beoordelingen en recensies" [ref=e278] [cursor=pointer]:
            - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=23e4e875-3f4a-4894-8a9c-6341e04ef610&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - generic [ref=e279]: "4.6"
            - generic [ref=e280]: Beoordelingen en recensies
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
          - link "4.7 Beoordelingen en recensies" [ref=e290] [cursor=pointer]:
            - /url: https://app.appsflyer.com/id1230088754?cp_device_id=23e4e875-3f4a-4894-8a9c-6341e04ef610&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - generic [ref=e291]: "4.7"
            - generic [ref=e292]: Beoordelingen en recensies
        - listitem [ref=e293]:
          - link "4.6 Beoordelingen en recensies" [ref=e294] [cursor=pointer]:
            - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=23e4e875-3f4a-4894-8a9c-6341e04ef610&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - generic [ref=e295]: "4.6"
            - generic [ref=e296]: Beoordelingen en recensies
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
          - link "4.7 Beoordelingen en recensies" [ref=e306] [cursor=pointer]:
            - /url: https://app.appsflyer.com/id1230088754?cp_device_id=23e4e875-3f4a-4894-8a9c-6341e04ef610&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - generic [ref=e307]: "4.7"
            - generic [ref=e308]: Beoordelingen en recensies
        - listitem [ref=e309]:
          - link "4.6 Beoordelingen en recensies" [ref=e310] [cursor=pointer]:
            - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=23e4e875-3f4a-4894-8a9c-6341e04ef610&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
            - generic [ref=e311]: "4.6"
            - generic [ref=e312]: Beoordelingen en recensies
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
        - /url: /nl-nl
        - img [ref=e325]
      - generic [ref=e329]:
        - link [ref=e330] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/capital.com/
        - link [ref=e331] [cursor=pointer]:
          - /url: https://www.youtube.com/@Capitaltrading/videos
      - generic [ref=e332]:
        - link [active] [ref=e333] [cursor=pointer]:
          - /url: https://app.appsflyer.com/id1230088754?cp_device_id=23e4e875-3f4a-4894-8a9c-6341e04ef610&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e334] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=23e4e875-3f4a-4894-8a9c-6341e04ef610&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e335] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=23e4e875-3f4a-4894-8a9c-6341e04ef610&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
    - generic [ref=e336]:
      - generic [ref=e337]:
        - generic [ref=e338]:
          - generic [ref=e339]:
            - generic [ref=e340]: "Land / Regio:"
            - button "Netherlands" [ref=e341] [cursor=pointer]:
              - generic [ref=e343]: Netherlands
          - generic [ref=e344]: •
          - generic [ref=e345]:
            - generic [ref=e346]: "Taal:"
            - button "Dutch" [ref=e347] [cursor=pointer]:
              - generic [ref=e348]: Dutch
        - generic [ref=e349]:
          - generic [ref=e350]: "Ook kunt u contact met ons opnemen:"
          - link "+31 97010282820" [ref=e353] [cursor=pointer]:
            - /url: tel:+31 97010282820
            - strong [ref=e354]: +31 97010282820
            - strong
          - generic [ref=e355]: •
          - link "support@capital.com" [ref=e357] [cursor=pointer]:
            - /url: mailto:support@capital.com
            - strong [ref=e358]: support@capital.com
      - generic [ref=e359]:
        - generic [ref=e360]:
          - strong [ref=e362]: Handelen & beleggen
          - generic [ref=e363]:
            - generic [ref=e364]:
              - generic [ref=e365]: Beleggen
              - link "Beleg in aandelen" [ref=e368] [cursor=pointer]:
                - /url: /nl-nl/ways-to-trade/stocks-and-etfs
            - generic [ref=e369]:
              - generic [ref=e370]: Handelen
              - generic [ref=e371]:
                - link "Handel in CFD's" [ref=e373] [cursor=pointer]:
                  - /url: /nl-nl/ways-to-trade/cfd-trading
                - link "Handel in knock-outs" [ref=e375] [cursor=pointer]:
                  - /url: /nl-nl/ways-to-trade/knock-outs
                - link "Handelen met een demorekening" [ref=e377] [cursor=pointer]:
                  - /url: /nl-nl/trading-platforms/demo-account
                - link "Pro-account" [ref=e379] [cursor=pointer]:
                  - /url: /nl-nl/professional-clients
            - generic [ref=e380]:
              - generic [ref=e381]: Handelsplatformen
              - generic [ref=e382]:
                - link "Webplatform" [ref=e384] [cursor=pointer]:
                  - /url: /nl-nl/trading-platforms/web-platform
                - link "Mobiele app" [ref=e386] [cursor=pointer]:
                  - /url: /nl-nl/trading-platforms/mobile-apps
                - link "TradingView" [ref=e388] [cursor=pointer]:
                  - /url: /nl-nl/trading-platforms/trading-view
                - link "MT4" [ref=e390] [cursor=pointer]:
                  - /url: /nl-nl/trading-platforms/mt4
                - link "MT5" [ref=e392] [cursor=pointer]:
                  - /url: /nl-nl/trading-platforms/mt5
            - generic [ref=e393]:
              - generic [ref=e394]: Leer
              - generic [ref=e395]:
                - link "Handelsstrategieën" [ref=e397] [cursor=pointer]:
                  - /url: /nl-nl/learn/trading-strategies
                - link "Technische analyse" [ref=e399] [cursor=pointer]:
                  - /url: /nl-nl/learn/technical-analysis
                - link "Handelspsychologie" [ref=e401] [cursor=pointer]:
                  - /url: /nl-nl/learn/trading-psychology
                - link "Leer" [ref=e403] [cursor=pointer]:
                  - /url: /nl-nl/learn
        - generic [ref=e404]:
          - strong [ref=e406]: Markten
          - generic [ref=e407]:
            - generic [ref=e408]:
              - generic [ref=e409]: Onze markten
              - generic [ref=e410]:
                - link "Markten" [ref=e412] [cursor=pointer]:
                  - /url: /nl-nl/markets
                - link "Forex" [ref=e414] [cursor=pointer]:
                  - /url: /nl-nl/markets/forex
                - link "Aandelen" [ref=e416] [cursor=pointer]:
                  - /url: /nl-nl/markets/shares
                - link "Indexen" [ref=e418] [cursor=pointer]:
                  - /url: /nl-nl/markets/indices
                - link "Grondstoffen" [ref=e420] [cursor=pointer]:
                  - /url: /nl-nl/markets/commodities
                - link "Cryptocurrencies" [ref=e422] [cursor=pointer]:
                  - /url: /nl-nl/markets/cryptocurrencies
                - link "Obligaties" [ref=e424] [cursor=pointer]:
                  - /url: /nl-nl/markets/bonds
                - link "Rentetarieven" [ref=e426] [cursor=pointer]:
                  - /url: /nl-nl/markets/interest-rates
            - generic [ref=e427]:
              - generic [ref=e428]: Marktinformatie
              - generic [ref=e429]:
                - link "Marktanalyse" [ref=e431] [cursor=pointer]:
                  - /url: /nl-nl/analysis
                - link "Markten prijsstelling" [ref=e433] [cursor=pointer]:
                  - /url: /nl-nl/about-us/how-our-markets-are-priced
        - link "Prijzen" [ref=e436] [cursor=pointer]:
          - /url: /nl-nl/ways-to-trade/fees-and-charges/stocks
          - strong [ref=e437]: Prijzen
        - generic [ref=e438]:
          - strong [ref=e440]: Informatie
          - generic [ref=e441]:
            - generic [ref=e442]:
              - generic [ref=e443]: Wie zijn wij
              - generic [ref=e444]:
                - link "Over" [ref=e446] [cursor=pointer]:
                  - /url: /nl-nl/about-us
                - link "Onze kantoren" [ref=e448] [cursor=pointer]:
                  - /url: /nl-nl/about-us/our-offices
                - link "Is Capital.com veilig?" [ref=e450] [cursor=pointer]:
                  - /url: /nl-nl/security-measures
                - link "Ons bedrijfsmodel" [ref=e452] [cursor=pointer]:
                  - /url: /nl-nl/about-us/how-capital-makes-money
            - generic [ref=e453]:
              - generic [ref=e454]: Kom bij ons werken
              - link "Carrières" [ref=e457] [cursor=pointer]:
                - /url: /nl-nl/about-us/careers
            - generic [ref=e458]:
              - generic [ref=e459]: Hulp nodig?
              - generic [ref=e460]:
                - link "Hulpcentrum" [ref=e462] [cursor=pointer]:
                  - /url: /nl-nl/help
                - link "Kwetsbaarheid van de klant" [ref=e464] [cursor=pointer]:
                  - /url: /nl-nl/help/client-vulnerability
                - link "Neem contact op" [ref=e466] [cursor=pointer]:
                  - /url: /nl-nl/contact-us
            - generic [ref=e467]:
              - generic [ref=e468]: Juridische informatie
              - generic [ref=e469]:
                - link "Juridische documenten" [ref=e471] [cursor=pointer]:
                  - /url: /nl-nl/terms-and-policies
                - link "Klachtenprocedure - Capital Com Group Ltd" [ref=e473] [cursor=pointer]:
                  - /url: /nl-nl/terms-and-policies/complaints-procedure-cceu
                - link "Klachtenprocedure - Capital Com SV Investments Limited" [ref=e475] [cursor=pointer]:
                  - /url: /nl-nl/terms-and-policies/complaints-procedure
                - 'link "Compliance en regelgeving: Handel in CFD''s" [ref=e477] [cursor=pointer]':
                  - /url: /nl-nl/terms-and-policies/compliance-and-legals
    - generic [ref=e479]:
      - paragraph [ref=e480]:
        - text: "Capital Com SV Investments Limited:"
        - text: CFD's zijn complexe instrumenten en houden vanwege de hefboomwerking een hoog risico in op grote verliezen.
        - generic [ref=e481]:
          - generic [ref=e482]:
            - strong [ref=e483]: 74% van de particuliere beleggers verliest geld bij de handel in CFD's met deze aanbieder
            - text: .
          - text: U moet nagaan of u wel degelijk begrijpt hoe CFD's werken en of u zich het hoge risico op geldverlies kunt veroorloven. Raadpleeg onze
          - link "risicoverklaring" [ref=e484] [cursor=pointer]:
            - /url: https://capital.com/risk-disclosure-policy
      - paragraph [ref=e485]:
        - text: "Capital Com Group Ltd:"
        - text: CFD's zijn complexe instrumenten en brengen een hoog risico met zich mee om snel geld te verliezen door hefboomwerking.
        - strong [ref=e486]: Tussen 74% en 89% van de rekeningen van particuliere beleggers verliest geld bij het handelen in CFD's
        - text: . Je zou moeten overwegen of je begrijpt hoe CFD's werken en of je het hoge risico kunt dragen om je geld te verliezen.
        - generic [ref=e487]:
          - text: Raadpleeg onze
          - link "risicoverklaring" [ref=e488] [cursor=pointer]:
            - /url: https://capital.com/risk-disclosure-policy-cceu
      - paragraph [ref=e489]:
        - text: "Waarschuwing: De waarde van aandelen en ETF's die u via een effectenrekening koopt, kan zowel dalen als stijgen. Dit betekent dat u mogelijk minder terugkrijgt dan u oorspronkelijk hebt ingelegd. Prestaties uit het verleden bieden geen garantie voor de toekomst."
        - text: Transacties in niet-leverbare over-the-counter-instrumenten, zoals knock-outopties en CFD's, zijn complexe financiële producten met een hoog risico op verlies van het volledige geïnvesteerde kapitaal. Aangezien deze producten zowel winsten als aanzienlijke verliezen kunnen opleveren, zijn ze niet geschikt voor elke belegger. U moet nagaan of u wel degelijk begrijpt hoe CFD's werken en of u zich het hoge risico op verlies kunt veroorloven.
        - text: Professionele klanten lopen het risico om meer te verliezen dan hun oorspronkelijke inleg. De informatie op deze website is van algemene aard en is niet afgestemd op uw financiële situatie, doelstellingen of behoeften. Raadpleeg onze juridische documenten en zorg ervoor dat u de risico's volledig begrijpt voordat u besluit om te handelen. Wij raden u aan om onze trainingen te volgen om een beter inzicht te krijgen in de risico's.
      - paragraph [ref=e490]:
        - strong [ref=e491]: Waarschuwing
        - text: ": capital.com is het enige officiële websitedomein van beide bovengenoemde bedrijven en kan worden geverifieerd op de officiële website van CySEC (www.cysec.gov.cy). Alle officiële webpagina’s en diensten van Capital.com, inclusief de verschillende lokale versies (bijvoorbeeld capital.com/it-it/), worden gehost op capital.com of de bijbehorende subdomeinen (webadressen die eindigen op '.capital.com', bijvoorbeeld help.capital.com). Geen van beide bedrijven is gelieerd aan, noch verantwoordelijk voor, enig ander domein of enige andere website die beweert hen te vertegenwoordigen."
      - paragraph [ref=e492]: "Capital Com SV Investments Limited is een in Cyprus gevestigde onderneming met ondernemingsnummer HE 354252. Het bedrijf is erkend en staat onder toezicht van de Cyprus Securities and Exchange Commission (licentienummer 319/17). De maatschappelijke zetel bevindt zich op: Vasileiou Makedonos: Vasileiou Makedonos 8, Kinnis Business Center, 2nd floor, 3040, Limassol, Cyprus."
      - paragraph [ref=e493]: "Capital Com Group Ltd is een in Cyprus gevestigde onderneming met ondernemingsnummer ΗΕ 446198. Het bedrijf is erkend en staat onder toezicht van de Cyprus Securities and Exchange Commission (licentienummer 463/25). De maatschappelijke zetel bevindt zich op: Vasileiou Makedonos: Vasileiou Makedonos 8, Kinnis Business Center, 2nd floor, 3040, Limassol, Cyprus."
      - paragraph [ref=e494]: De informatie op deze site is niet bestemd voor inwoners van de Verenigde Staten, Canada en België of enig ander land buiten de EER, en is niet bedoeld voor distributie aan of gebruik door personen in enig land of rechtsgebied waar deze distributie of dit gebruik in strijd zou zijn met de plaatselijke wet- of regelgeving.
    - generic [ref=e495]:
      - paragraph [ref=e496]: © 2026 Capital Com SV Investments Limited
      - generic [ref=e497]:
        - link "Sitemap" [ref=e498] [cursor=pointer]:
          - /url: /nl-nl/sitemap
        - link "Cookie-instellingen" [ref=e499] [cursor=pointer]:
          - /url: ""
        - link "Regelgeving" [ref=e500] [cursor=pointer]:
          - /url: /nl-nl/terms-and-policies/regulations
        - link "Voorwaarden en beleid" [ref=e501] [cursor=pointer]:
          - /url: /nl-nl/terms-and-policies
        - link "Klachtenprocedure" [ref=e502] [cursor=pointer]:
          - /url: /nl-nl/terms-and-policies/complaints-procedures
  - button [ref=e503] [cursor=pointer]
  - alert [ref=e505]
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