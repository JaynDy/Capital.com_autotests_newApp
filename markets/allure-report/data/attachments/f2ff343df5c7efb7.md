# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cta/generated.cta.spec.js >> indices page | tradingInstrument | alertBtn
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
  - text: I CFD sono strumenti complessi e presentano un rischio significativo di perdere denaro rapidamente a causa della leva finanziaria.
  - strong: Il 74-89 % dei conti degli investitori al dettaglio subisce perdite monetarie in seguito a negoziazione in CFD
  - text: . Valuti se comprende il funzionamento dei CFD e se può permettersi di correre l’elevato rischio di perdere il suo denaro.
  - link "Informativa sui rischi.":
    - /url: https://capital.com/risk-disclosure-policy-cceu
  - link:
    - /url: /it-it
    - img
  - navigation:
    - button "Trading":
      - button "Trading"
    - button "Mercati":
      - button "Mercati"
    - link "Costi":
      - /url: /it-it/ways-to-trade/fees-and-charges
    - button "Chi siamo":
      - button "Chi siamo"
  - button "it"
  - button "Accedi"
  - button "Apri un conto"
- paragraph:
  - link "Inizia":
    - /url: /it-it
  - text: •
  - link "Mercati":
    - /url: /it-it/markets
  - text: •
  - link "Indici":
    - /url: /it-it/markets/indices
  - text: •US Tech 100
- heading "Negozia US Tech 100 - US100 CFD" [level=1]
- button "Aggiungi a Preferiti"
- strong: "28640.3"
- text: +0.2%
- link:
  - /url: ""
- button "1m"
- button "5m"
- button "15m"
- button "30m"
- button "1h"
- button "4h"
- button "1G"
- button "1s"
- img
- button "Visualizza il grafico dettagliato"
- link "Vendi 28638.5":
  - /url: /instrument?id=15839732013552836
  - text: Vendi
  - paragraph: "28638.5"
- link "Acquista 28640.3":
  - /url: /instrument?id=15839732013552836
  - text: Acquista
  - paragraph: "28640.3"
- text: "1.8 Basso: 28307 Alto: 29024.6"
- table
- text: "Seller: 28.88% Buyer: 71.12%"
- button "Orari di contrattazione dei mercati (UTC)":
  - paragraph: Orari di contrattazione dei mercati (UTC)
  - strong: Apri ora
- strong: Le performance passate non costituiscono un indicatore affidabile dell’andamento futuro. I prezzi delle azioni sono indicativi e possono differire dai prezzi di mercato live.
- button "Riepilogo"
- button "Dati Storici"
- strong: Condizioni di Trading
- table:
  - rowgroup:
    - 'row "Tipologia Questo strumento finanziario è disponibile per il trading di CFD e knock-out. Scopri di più su: CFD Knock-out CFD Knock-out"':
      - 'cell "Tipologia Questo strumento finanziario è disponibile per il trading di CFD e knock-out. Scopri di più su: CFD Knock-out"':
        - text: "Tipologia Questo strumento finanziario è disponibile per il trading di CFD e knock-out. Scopri di più su:"
        - link "CFD":
          - /url: /it-it/ways-to-trade/cfd-trading
        - link "Knock-out":
          - /url: /it-it/ways-to-trade/knock-outs
      - cell "CFD Knock-out":
        - button "CFD"
        - button "Knock-out"
    - row "Spread 1.8":
      - cell "Spread"
      - cell "1.8"
    - row "Adeguamento degli interessi overnight per posizioni long Adeguamento degli interessi overnight per posizioni long Margine. Il tuo investimento $1,000.00 Adeguamento finanziamento overnight Oneri per l'intero valore della posizione -0.021485 % (-$4.30) Dimensione dell'operazione a leva ~$20,000.00 Denaro da leva ~$19,000.00 Vai alla piattaforma -0.02149%":
      - cell "Adeguamento degli interessi overnight per posizioni long Adeguamento degli interessi overnight per posizioni long Margine. Il tuo investimento $1,000.00 Adeguamento finanziamento overnight Oneri per l'intero valore della posizione -0.021485 % (-$4.30) Dimensione dell'operazione a leva ~$20,000.00 Denaro da leva ~$19,000.00 Vai alla piattaforma":
        - text: Adeguamento degli interessi overnight per posizioni long
        - strong: Adeguamento degli interessi overnight per posizioni long
        - table
        - separator
        - table:
          - rowgroup:
            - row "Margine. Il tuo investimento $1,000.00":
              - cell "Margine. Il tuo investimento"
              - cell "$1,000.00"
            - row "Adeguamento finanziamento overnight Oneri per l'intero valore della posizione -0.021485 % (-$4.30)":
              - cell "Adeguamento finanziamento overnight Oneri per l'intero valore della posizione"
              - cell "-0.021485 % (-$4.30)"
        - paragraph:
          - strong: Dimensione dell'operazione a leva ~$20,000.00
        - paragraph:
          - strong: Denaro da leva ~$19,000.00
        - separator
        - link "Vai alla piattaforma":
          - /url: ""
      - cell "-0.02149%"
    - row "Adeguamento degli interessi overnight per posizioni short Adeguamento degli interessi overnight per posizioni short Margine. Il tuo investimento $1,000.00 Adeguamento finanziamento overnight Oneri per l'intero valore della posizione -0.000738 % (-$0.10) Dimensione dell'operazione a leva ~$20,000.00 Denaro da leva ~$19,000.00 Vai alla piattaforma -0.00074%":
      - cell "Adeguamento degli interessi overnight per posizioni short Adeguamento degli interessi overnight per posizioni short Margine. Il tuo investimento $1,000.00 Adeguamento finanziamento overnight Oneri per l'intero valore della posizione -0.000738 % (-$0.10) Dimensione dell'operazione a leva ~$20,000.00 Denaro da leva ~$19,000.00 Vai alla piattaforma":
        - text: Adeguamento degli interessi overnight per posizioni short
        - strong: Adeguamento degli interessi overnight per posizioni short
        - table
        - separator
        - table:
          - rowgroup:
            - row "Margine. Il tuo investimento $1,000.00":
              - cell "Margine. Il tuo investimento"
              - cell "$1,000.00"
            - row "Adeguamento finanziamento overnight Oneri per l'intero valore della posizione -0.000738 % (-$0.10)":
              - cell "Adeguamento finanziamento overnight Oneri per l'intero valore della posizione"
              - cell "-0.000738 % (-$0.10)"
        - paragraph:
          - strong: Dimensione dell'operazione a leva ~$20,000.00
        - paragraph:
          - strong: Denaro da leva ~$19,000.00
        - separator
        - link "Vai alla piattaforma":
          - /url: ""
      - cell "-0.00074%"
    - row "Ora di adeguamento degli interessi overnight 21:00 (UTC)":
      - cell "Ora di adeguamento degli interessi overnight"
      - cell "21:00 (UTC)"
    - row "Valuta USD":
      - cell "Valuta"
      - cell "USD"
    - row "Quantità negoziata min 0.001":
      - cell "Quantità negoziata min"
      - cell "0.001"
    - row "Margine 5.00%":
      - cell "Margine"
      - cell "5.00%"
    - row "Borsa":
      - cell "Borsa"
      - cell
    - row "Commissione sull'operazione1 0%":
      - cell "Commissione sull'operazione1":
        - text: Commissione sull'operazione
        - superscript: "1"
      - cell "0%"
    - row "Premio stop garantito La commissione prevista per gli stop-loss garantiti (GSL) viene applicata solo se il GSL viene effettivamente attivato. Per ulteriori informazioni, visita la sezione del nostro sito dedicata a oneri e commissioni. 0.02%":
      - cell "Premio stop garantito La commissione prevista per gli stop-loss garantiti (GSL) viene applicata solo se il GSL viene effettivamente attivato. Per ulteriori informazioni, visita la sezione del nostro sito dedicata a oneri e commissioni.":
        - text: Premio stop garantito La commissione prevista per gli stop-loss garantiti (GSL) viene applicata solo se il GSL viene effettivamente attivato. Per ulteriori informazioni, visita la sezione del nostro sito dedicata a
        - link "oneri e commissioni":
          - /url: /it-it/ways-to-trade/fees-and-charges
        - text: .
      - cell "0.02%"
- paragraph:
  - superscript: "1"
  - text: La commissione applicata per l'esecuzione delle operazioni è lo spread, ossia la differenza tra il prezzo di acquisto e quello di vendita. Vai alla sezione
  - link "Oneri e commissioni":
    - /url: https://capital.com/it-it/ways-to-trade/fees-and-charges
  - text: del nostro sito per ulteriori informazioni
- main:
  - heading "Negozia US Tech 100 - US100" [level=2]
  - text: "The Tech 100 Index (NDX) represents the performance of leading non-financial securities actively traded on the NASDAQ Stock Market. The index is calculated according to a capitalisation-weighted method. Started in 1985, the NASDAQ-100 includes both domestic and foreign securities of leading companies in a variety of industry sectors: IT, telecommunications, retail, biotechnology, media, etc. The NASDAQ-100 is often referred to as NDX. The index doesn't measure stocks of investment or financial institutions, and it is recalculated once a year."
  - heading "Ultimi articoli sugli indici" [level=2]
  - link "Wall street":
    - /url: /it-it/market-updates/us-indices-forecasts-30-06-2026
    - img "Wall street"
  - 'link "Previsioni prezzo US Tech 100, US 500, US Wall Street 30: utili AI"':
    - /url: /it-it/market-updates/us-indices-forecasts-30-06-2026
  - text: Gli indici US Tech 100, US 500 e US Wall Street 30 tracciano le azioni USA a grande capitalizzazione, con il ribilanciamento Nasdaq-100 di giugno che ha aggiunto CoreWeave e Astera Labs. I risultati passati non sono un indicatore affidabile dei risultati futuri. 11:08, 30 Giugno 2026
  - link "Previsioni indici USA | Payrolls, petrolio e Fed":
    - /url: /it-it/market-updates/us-index-forecast-10-06-2026
    - img "Previsioni indici USA | Payrolls, petrolio e Fed"
  - 'link "Dow Jones, S&P 500 e Nasdaq 100: Payrolls, petrolio e Fed"':
    - /url: /it-it/market-updates/us-index-forecast-10-06-2026
  - text: US Tech 100, US 500 e US Wall Street 30 seguono i principali mercati azionari statunitensi, con movimenti recenti influenzati dai dati occupazionali di maggio, dai prezzi del petrolio e dagli utili del settore chip. Le performance passate non sono un indicatore affidabile dei risultati futuri. 10:21, 10 Giugno 2026
  - link "Interfaccia di intelligenza artificiale che simboleggia il sentiment di mercato guidato dall'AI e le tendenze tecnologiche":
    - /url: /it-it/market-updates/us100-it40-us30-forecast-28-05-2026
    - img "Interfaccia di intelligenza artificiale che simboleggia il sentiment di mercato guidato dall'AI e le tendenze tecnologiche"
  - 'link "Previsioni FTSE MIB, Nasdaq 100 e Dow Jones: Sentiment AI ai massimi"':
    - /url: /it-it/market-updates/us100-it40-us30-forecast-28-05-2026
  - text: L'US Tech 100, l'Italy 40 e l'US Wall Street 30 hanno scambiato vicino ai recenti massimi dopo che i risultati di NVIDIA hanno sostenuto il sentiment sull'AI nei mercati azionari. 07:15, 28 Maggio 2026
  - link "Skyline del distretto finanziario di Hong Kong con moderne torri per uffici e bandiere vicino a Exchange Square":
    - /url: /it-it/market-updates/hong-kong-50-forecast-13-05-2026
    - img "Skyline del distretto finanziario di Hong Kong con moderne torri per uffici e bandiere vicino a Exchange Square"
  - link "Previsioni Hang Seng (Hong Kong 50)":
    - /url: /it-it/market-updates/hong-kong-50-forecast-13-05-2026
  - text: L'Hong Kong 50 replica le principali azioni quotate a Hong Kong, con l'azione dei prezzi recente influenzata dal mantenimento dei tassi di Fed e HKMA, dai prezzi del petrolio e dalle tensioni USA-Iran. I risultati passati non sono un indicatore affidabile dei risultati futuri. 06:55, 13 Maggio 2026
  - strong
  - text: Reuters News • Europe 20:57 (UTC), 15 Luglio 2026
  - link "Il calo del titolo SpaceX al di sotto del prezzo di quotazione rischia di trasformare quella che doveva essere un'IPO di grande successo in una prova di fiducia":
    - /url: /it-it/news/il-calo-del-titolo-spacex-al-di-sotto-del-prezzo
    - strong: Il calo del titolo SpaceX al di sotto del prezzo di quotazione rischia di trasformare quella che doveva essere un'IPO di grande successo in una prova di fiducia
  - text: Reuters News • Europe 20:22 (UTC), 15 Luglio 2026
  - link "MERCATO AZIONARIO STATUNITENSE-Wall Street chiude in rialzo grazie ai dati moderati sull'inflazione e agli ottimi risultati societari":
    - /url: /it-it/news/mercato-azionario-statunitense-wall-street-chiude-in-rialzo-grazie-ai-dati
    - strong: MERCATO AZIONARIO STATUNITENSE-Wall Street chiude in rialzo grazie ai dati moderati sull'inflazione e agli ottimi risultati societari
  - text: Reuters News • Europe 16:26 (UTC), 15 Luglio 2026
  - link "Le azioni di SpaceX scendono al di sotto del prezzo di quotazione, mentre il vertiginoso rialzo si esaurisce":
    - /url: /it-it/news/le-azioni-di-spacex-scendono-al-di-sotto-del-prezzo
    - strong: Le azioni di SpaceX scendono al di sotto del prezzo di quotazione, mentre il vertiginoso rialzo si esaurisce
  - button
  - text: Reuters News • Europe 16:09 (UTC), 15 Luglio 2026
  - link "Le azioni di SpaceX scendono al di sotto del prezzo di quotazione, mentre il vertiginoso rialzo si esaurisce":
    - /url: /it-it/news/le-azioni-di-spacex-scendono-al-di-sotto-del-prezzo
    - strong: Le azioni di SpaceX scendono al di sotto del prezzo di quotazione, mentre il vertiginoso rialzo si esaurisce
  - button
  - text: Reuters News • Europe 10:58 (UTC), 15 Luglio 2026
  - link "BORSA USA-Futures in lieve rialzo, focus su trimestrali, balza PayPal":
    - /url: /it-it/news/borsa-usa-futures-in-lieve-rialzo-focus-su-trimestrali-balza-paypal
    - strong: BORSA USA-Futures in lieve rialzo, focus su trimestrali, balza PayPal
  - text: Reuters News • Europe 10:14 (UTC), 15 Luglio 2026
  - link "MERCATO AZIONARIO STATUNITENSE-I futures di Wall Street registrano un leggero rialzo, con l'attenzione puntata sugli utili; PayPal fa un balzo":
    - /url: /it-it/news/mercato-azionario-statunitense-i-futures-di-wall-street-registrano-un-leggero
    - strong: MERCATO AZIONARIO STATUNITENSE-I futures di Wall Street registrano un leggero rialzo, con l'attenzione puntata sugli utili; PayPal fa un balzo
  - text: Reuters News • Europe 21:46 (UTC), 7 Luglio 2026
  - link "SpaceXAI prevede di lanciare un nuovo modello con Cursor già mercoledì, secondo quanto riporta The Information":
    - /url: /it-it/news/spacexai-prevede-di-lanciare-un-nuovo-modello-con-cursor-gia
    - strong: SpaceXAI prevede di lanciare un nuovo modello con Cursor già mercoledì, secondo quanto riporta The Information
  - text: Reuters News • Europe 13:59 (UTC), 7 Luglio 2026
  - link "SpaceX in calo mentre l'azienda entra nel Nasdaq 100; le società di intermediazione avviano la copertura":
    - /url: /it-it/news/spacex-in-calo-mentre-l-azienda-entra-nel-nasdaq-100-le
    - strong: SpaceX in calo mentre l'azienda entra nel Nasdaq 100; le società di intermediazione avviano la copertura
  - text: Reuters News • Europe 10:40 (UTC), 7 Luglio 2026
  - 'link "Street View: La scommessa di SpaceX su Wall Street punta sull’intelligenza artificiale e sul calcolo orbitale"':
    - /url: /it-it/news/street-view-la-scommessa-di-spacex-su-wall-street-punta
    - strong: "Street View: La scommessa di SpaceX su Wall Street punta sull’intelligenza artificiale e sul calcolo orbitale"
  - text: Reuters News • Europe 08:29 (UTC), 7 Luglio 2026
  - link "SpaceX in calo in vista dell'inserimento nel Nasdaq 100; le società di intermediazione avviano la copertura del titolo":
    - /url: /it-it/news/spacex-in-calo-in-vista-dell-inserimento-nel-nasdaq-100-le
    - strong: SpaceX in calo in vista dell'inserimento nel Nasdaq 100; le società di intermediazione avviano la copertura del titolo
- complementary:
  - strong: Mercati correlati
  - button "I più scambiati"
  - button "I migliori rialzi"
  - button "I peggiori ribassi"
  - button "I più volatili"
  - link "US Tech 100":
    - /url: /it-it/markets/indices/us-tech-100-indice-1
  - text: "28640.3"
  - button "Negozia"
  - text: 0.2%
  - img
  - link "Japan 225":
    - /url: /it-it/markets/indices/japan-225-indice-1
  - text: "64801.1"
  - button "Negozia"
  - link "US Wall Street 30":
    - /url: /it-it/markets/indices/us-wall-street-30-indice-1
  - text: "52117.2"
  - button "Negozia"
  - link "Germany 40":
    - /url: /it-it/markets/indices/germany-40-indice-1
  - text: "24792.7"
  - button "Negozia"
  - link "US 500":
    - /url: /it-it/markets/indices/us-500-indice-1
  - text: "7459.5"
  - button "Negozia"
  - text: I prezzi delle azioni sono indicativi e possono differire dai prezzi di mercato live.
- heading "Commenti e valutazioni degli utenti" [level=2]
- text: Consulta i feedback dei nostri clienti
- superscript: "1"
- text: con diversi livelli di esperienza.
- region:
  - group "1 of 14":
    - link "2025-06-04 M****** D******* App molto utile per chi inizia da zero. C’è sia la modalità demo che quella con soldi veri, così puoi imparare piano piano. Mi ha aiutato a capire meglio il trading. La consiglio a chi parte senza esperienza.":
      - /url: https://www.trustpilot.com/review/capital.com
      - text: 2025-06-04
      - strong: M****** D*******
      - paragraph: App molto utile per chi inizia da zero. C’è sia la modalità demo che quella con soldi veri, così puoi imparare piano piano. Mi ha aiutato a capire meglio il trading. La consiglio a chi parte senza esperienza.
  - group "2 of 14":
    - link "2025-06-17 F**** Devo dire che non esiste piattaforma piu smart di questa. semplice, efficace, ma sopratutto un call center che funziona, in particolar modo Davide e' una persona che ti spiega quando le tue conoscenze non arrivano. super consigliata":
      - /url: https://www.trustpilot.com/review/capital.com
      - text: 2025-06-17
      - strong: F****
      - paragraph: Devo dire che non esiste piattaforma piu smart di questa. semplice, efficace, ma sopratutto un call center che funziona, in particolar modo Davide e' una persona che ti spiega quando le tue conoscenze non arrivano. super consigliata
  - group "3 of 14":
    - link "2025-04-08 M****** Considero Capital.com uno dei siti più affidabili nel trading, grazie alla mia pluriennale esperienza con loro. E ancor più ringrazio Angela Battaglia, Premium Client Manager, per la sua assistenza altamente professionale e qualificata. E nulla è più prezioso nel trading di un valido supporto operativo e morale come io ho avuto la possibilità di avere.":
      - /url: https://www.trustpilot.com/review/capital.com
      - text: 2025-04-08
      - strong: M******
      - paragraph: Considero Capital.com uno dei siti più affidabili nel trading, grazie alla mia pluriennale esperienza con loro. E ancor più ringrazio Angela Battaglia, Premium Client Manager, per la sua assistenza altamente professionale e qualificata. E nulla è più prezioso nel trading di un valido supporto operativo e morale come io ho avuto la possibilità di avere.
  - button "Go to last slide"
  - button "Next slide"
- paragraph: Sono riportate le nostre recensioni a 4 e 5 stelle. I dati individuali dell'utente sono stati intenzionalmente resi anonimi al fine di salvaguardare la sua privacy, in ottemperanza alle prescrizioni del GDPR.
- link "4.6":
  - /url: https://www.tradingview.com/broker/Capitalcom/
  - strong: "4.6"
- link "Valutazioni e Recensioni 4.7":
  - /url: https://app.appsflyer.com/id1230088754?cp_device_id=8a375a07-7dd1-432a-b1b0-fa55da21d777&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - strong: Valutazioni e Recensioni
  - strong: "4.7"
- link "Valutazioni e Recensioni 4.6":
  - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=8a375a07-7dd1-432a-b1b0-fa55da21d777&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - strong: Valutazioni e Recensioni
  - strong: "4.6"
- link "4.6":
  - /url: https://www.trustpilot.com/review/capital.com
  - strong: "4.6"
- heading "Tre passaggi per iniziare" [level=2]
- button
- text: 1. Crea il tuo account (previa verifica dei requisiti) 2. Effettua un deposito nel modo che preferisci 3. Fai trading quando sei pronto
- contentinfo:
  - link:
    - /url: /it-it
    - img
  - link:
    - /url: https://www.facebook.com/capitalcomitalia
  - link:
    - /url: https://www.linkedin.com/company/capital.com/
  - link:
    - /url: https://www.instagram.com/capitalcom_it/
  - link:
    - /url: https://www.youtube.com/@Capitalcom_Italia/videos
  - link:
    - /url: https://app.appsflyer.com/id1230088754?cp_device_id=8a375a07-7dd1-432a-b1b0-fa55da21d777&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=8a375a07-7dd1-432a-b1b0-fa55da21d777&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - link:
    - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=8a375a07-7dd1-432a-b1b0-fa55da21d777&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
  - text: "Paese / Regione:"
  - button "Italy"
  - text: "• Lingua:"
  - button "Italian"
  - text: "Contattaci allo:"
  - link "+39 0287362646":
    - /url: tel:+39 0287362646
    - strong: +39 0287362646
    - strong
  - text: •
  - link "support@capital.com":
    - /url: mailto:support@capital.com
    - strong: support@capital.com
  - strong: Trading
  - text: Trading
  - link "Fai trading di CFD":
    - /url: /it-it/ways-to-trade/cfd-trading
  - link "Trading di knock-out":
    - /url: /it-it/ways-to-trade/knock-outs
  - link "Account demo":
    - /url: /it-it/trading-platforms/demo-account
  - link "Account Pro":
    - /url: /it-it/professional-clients
  - text: Piattaforme di trading
  - link "Piattaforma web":
    - /url: /it-it/trading-platforms/web-platform
  - link "App per dispositivi mobili":
    - /url: /it-it/trading-platforms/mobile-apps
  - link "TradingView":
    - /url: /it-it/trading-platforms/trading-view
  - link "MT4":
    - /url: /it-it/trading-platforms/mt4
  - link "MT5":
    - /url: /it-it/trading-platforms/mt5
  - text: Impara
  - link "Strategie di Trading":
    - /url: /it-it/learn/trading-strategies
  - link "Analisi tecnica":
    - /url: /it-it/learn/technical-analysis
  - link "Psicologia del trading":
    - /url: /it-it/learn/trading-psychology
  - link "Impara":
    - /url: /it-it/learn
  - link "Webinars":
    - /url: /it-it/learn/webinars
  - strong: Mercati
  - text: I nostri mercati
  - link "Mercati":
    - /url: /it-it/markets
  - link "Forex":
    - /url: /it-it/markets/forex
  - link "Azioni":
    - /url: /it-it/markets/shares
  - link "Indici":
    - /url: /it-it/markets/indices
  - link "Materie prime":
    - /url: /it-it/markets/commodities
  - link "Criptovalute":
    - /url: /it-it/markets/cryptocurrencies
  - link "Obbligazioni":
    - /url: /it-it/markets/bonds
  - link "Tassi di interesse":
    - /url: /it-it/markets/interest-rates
  - text: Informazioni mercato
  - link "Analisi e Newsroom":
    - /url: /it-it/analysis
  - link "Prezzi di mercato":
    - /url: /it-it/about-us/how-our-markets-are-priced
  - link "Costi":
    - /url: /it-it/ways-to-trade/fees-and-charges
    - strong: Costi
  - strong: Chi siamo
  - text: Chi siamo
  - link "Informazioni":
    - /url: /it-it/about-us
  - link "I nostri uffici":
    - /url: /it-it/about-us/our-offices
  - link "Capital.com è sicuro?":
    - /url: /it-it/security-measures
  - link "Il nostro modello di business":
    - /url: /it-it/about-us/how-capital-makes-money
  - text: Lavora con noi
  - link "Carriere":
    - /url: /it-it/about-us/careers
  - text: Richiedi assistenza
  - link "Centro assistenza":
    - /url: /it-it/help
  - link "Vulnerabilità del cliente":
    - /url: /it-it/help/client-vulnerability
  - link "Contattaci":
    - /url: /it-it/contact-us
  - text: Documenti legali
  - link "Termini e politiche":
    - /url: /it-it/terms-and-policies
  - link "Procedura di gestione dei reclami - Capital Com Group Ltd":
    - /url: /it-it/terms-and-policies/complaints-procedure-cceu
  - link "Procedura per i reclami - Capital Com SV Investments Limited":
    - /url: /it-it/terms-and-policies/complaints-procedure
  - 'link "Compliance e aspetti normativi: trading di CFD"':
    - /url: /it-it/terms-and-policies/compliance-and-legals
  - paragraph:
    - text: "Capital Com SV Investments Limited: I CFD sono strumenti complessi e comportano un rischio significativo di perdere denaro rapidamente a causa della leva finanziaria. Il"
    - strong: 73 %
    - text: dei conti degli investitori al dettaglio perde denaro nelle negoziazioni in CFD con questo fornitore. Valuti se comprende il funzionamento dei CFD e se può permettersi di correre l’elevato rischio di perdere il suo denaro.
    - link "Informativa sui rischi":
      - /url: https://capital.com/risk-disclosure-policy
    - text: .
  - paragraph:
    - text: "Capital Com Group Ltd: I CFD sono strumenti complessi e presentano un rischio significativo di perdere denaro rapidamente a causa della leva finanziaria. Il"
    - strong: 74-89 %
    - text: dei conti degli investitori al dettaglio subisce perdite monetarie in seguito a negoziazione in CFD. Valuti se comprende il funzionamento dei CFD e se può permettersi di correre l’elevato rischio di perdere il suo denaro.
    - link "Informativa sui rischi":
      - /url: https://capital.com/risk-disclosure-policy-cceu
    - text: .
  - paragraph: "Avvertenza sui rischi: Il valore delle azioni e degli ETF acquistati mediante un account di negoziazione azionaria può aumentare o diminuire, motivo per cui è insito il rischio di guadagnare meno di quanto investito inizialmente. Le performance passate non costituiscono un indicatore affidabile dell'andamento futuro. Gli strumenti over-the-counter non-deliverable, come le opzioni knock-out e i CFD, sono prodotti finanziari complessi associati a un rischio elevato di perdita dell’intero capitale investito. Tali prodotti non sono indicati per tutti gli investitori, in quanto possono tradursi sia in profitti che in perdite ingenti. Prima di iniziare a praticare questa tipologia di trading, occorre valutare attentamente se si comprendono le modalità operative di tali strumenti e se ci si può permettere di correre l'elevato rischio di perdere il proprio denaro. Per i clienti professionali, è insito il rischio di perdere più di quanto depositato inizialmente. Le informazioni riportate in questo sito hanno carattere generale e non tengono conto della situazione finanziaria, degli obiettivi o delle esigenze individuali. Si raccomanda di consultare attentamente i documenti legali e di assicurarsi di aver compreso appieno i rischi insiti prima di prendere qualsivoglia decisione di trading. Si consiglia di far uso dei servizi didattici messi a disposizione dalla società, così da acquisire consapevolezza dei rischi prima di iniziare a effettuare operazioni di trading."
  - paragraph: "Capital Com SV Investments Limited è una società costituita nella Repubblica di Cipro, con numero di registrazione HE 354252, autorizzata e regolamentata dalla Cyprus Securities and Exchange Commission (numero di licenza: 319/17). Sede legale: Vasileiou Makedonos 8, Kinnis Business Center, 2° piano, 3040, Limassol, Cipro."
  - paragraph: "Capital Com Group Ltd è una società costituita nella Repubblica di Cipro, con numero di registrazione ΗΕ 446198, autorizzata e regolamentata dalla Cyprus Securities and Exchange Commission (numero di licenza: 463/25). Sede legale: Vasileiou Makedonos 8, Kinnis Business Center, 2° piano, 3040, Limassol, Cipro."
  - paragraph: Le informazioni riportate su questo sito non sono rivolte ai residenti di Stati Uniti, Canada e Belgio, o di qualsivoglia altro Paese al di fuori del SEE, e non sono concepite per la distribuzione o l’utilizzo da parte di soggetti di Paesi o giurisdizioni in cui tale distribuzione o utilizzo contravvengono alle normative o alle disposizioni localmente vigenti.
  - paragraph: © 2026 Capital Com SV Investments Limited
  - link "Mappa del sito":
    - /url: /it-it/sitemap
  - link "Impostazioni dei cookie":
    - /url: ""
  - link "Regolamentazioni":
    - /url: /it-it/terms-and-policies/regulations
  - link "Termini e condizioni":
    - /url: /it-it/terms-and-policies
  - link "Procedura per i reclami":
    - /url: /it-it/terms-and-policies/complaints-procedures
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