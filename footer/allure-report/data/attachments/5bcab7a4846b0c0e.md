# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cta/generated.cta.spec.js >> tradeBitcoin page | tradePolkadotSharesLink | tradePolkadotSharesLink
- Location: tests/cta/generated.cta.spec.js:40:7

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "learn/market-guides/trade-polkadot"
Received string:    "/de-int/learn/market-guides/trade-cardano"
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e7]:
      - text: CFDs sind komplexe Instrumente und aufgrund des Hebels mit einem hohen Risiko des schnellen Geldverlustes verbunden.
      - generic [ref=e8]:
        - strong [ref=e9]: 79.75 % der Kleinanlegerkonten verlieren Geld beim CFD-Handel mit diesem Anbieter.
        - text: Sie sollten abwägen, ob Sie verstehen, wie CFDs funktionieren, und ob Sie es sich leisten können, das hohe Risiko des Geldverlustes einzugehen.
    - generic [ref=e11]:
      - link [ref=e12] [cursor=pointer]:
        - /url: /de-int
        - img [ref=e13]
      - generic [ref=e18]:
        - navigation [ref=e19]:
          - button "Handel" [ref=e20]:
            - button "Handel" [ref=e21]:
              - generic [ref=e22]: Handel
          - button "Märkte" [ref=e23]:
            - button "Märkte" [ref=e24]:
              - generic [ref=e25]: Märkte
          - link "Preisgestaltung" [ref=e28] [cursor=pointer]:
            - /url: /de-int/ways-to-trade/fees-and-charges
          - button "Über uns" [ref=e29]:
            - button "Über uns" [ref=e30]:
              - generic [ref=e31]: Über uns
        - button "de" [ref=e32] [cursor=pointer]:
          - generic [ref=e34]: de
      - generic [ref=e36]:
        - button "Anmelden" [ref=e37] [cursor=pointer]: Anmelden
        - button "Konto eröffnen" [ref=e38] [cursor=pointer]: Konto eröffnen
  - generic [ref=e39]:
    - paragraph [ref=e42]:
      - generic [ref=e43]:
        - link "Startseite" [ref=e44] [cursor=pointer]:
          - /url: /de-int
        - text: •
      - generic [ref=e45]:
        - link "Lernen" [ref=e46] [cursor=pointer]:
          - /url: /de-int/learn
        - text: •
      - generic [ref=e47]:
        - link "Marktleitfäden" [ref=e48] [cursor=pointer]:
          - /url: /de-int/learn/market-guides
        - text: •
      - text: Was ist Polkadot?
    - generic [ref=e49]:
      - generic [ref=e51]:
        - main [ref=e52]:
          - generic [ref=e54]:
            - generic [ref=e55]:
              - heading "Was ist Polkadot?" [level=1] [ref=e57]
              - generic [ref=e60]:
                - button "share on Twitter" [ref=e61] [cursor=pointer]
                - button "share on Facebook" [ref=e62] [cursor=pointer]
                - button "share on Linkedin" [ref=e63] [cursor=pointer]
                - button "Copy the url of the current page." [ref=e64] [cursor=pointer]:
                  - button "Copy the url of the current page." [ref=e65]
            - figure [ref=e66]
          - generic [ref=e69]:
            - paragraph [ref=e70]: Erfahren Sie mehr über Polkadot und die Kursentwicklung von DOT, wie es mit Ethereum verglichen werden kann und wie Sie DOT/USD über CFDs auf Capital.com traden können
            - paragraph [ref=e71]:
              - link "Zur Marktseite" [ref=e72] [cursor=pointer]:
                - /url: /de-int/markets/cryptocurrencies/chart-dot-to-us-dollar
            - heading "Was ist Polkadot?" [level=2] [ref=e73]
            - paragraph [ref=e74]: Polkadot ist eine dezentralisierte Open-Source-Blockchain-Plattform, die konzipiert wurde, um Cross-Chain-Interoperabilität und Skalierbarkeit zu ermöglichen. Sie wurde 2020 eingeführt und zielt darauf ab, mehrere Blockchains zu einem einheitlichen Netzwerk zu vereinen, damit diese parallel Transaktionen verarbeiten und Daten sicher austauschen können. Die native Kryptowährung der Blockchain heißt DOT und wird für Transaktionen sowie zur Bezahlung von Netzwerkgebühren verwendet, die mit den auf der Plattform basierenden Anwendungen zusammenhängen.
            - paragraph [ref=e75]: Erstellt wurde Polkadot von der Web3 Foundation und wurde von einem Team unter der Leitung von Gavin Wood, Robert Habermeier und Peter Czaban entwickelt. Das Trio sah Polkadot als eine Plattform zur Überwindung der Grenzen von bestehenden Blockchain-Netzwerken, wie Skalierungsprobleme und ein Mangel an Interoperabilität. Polkadot bietet ein Framework für Blockchains, um diese miteinander zu verbinden, Informationen auszutauschen und nahtlos miteinander zu funktionieren. DOT befindet sich durchgehend unter den größten Kryptowährungen nach Marktkapitalisierung. Mit Stand vom Oktober 2024 befand sich die Kryptowährung unter den Top 15 auf Plattformen wie CoinMarketCap.
          - generic [ref=e77]:
            - 'heading "Polkadot vs. Ethereum: Was sind die wichtigsten Unterschiede?" [level=2] [ref=e78]'
            - paragraph [ref=e79]: Polkadot wurde ursprünglich entwickelt, um eine Verbesserung der Grundlage von Ethereum zu bewirken. Seit der Umstellung von Ethereum auf Proof-of-Stake mit „The Merge“ haben sich die Ähnlichkeiten und Unterschiede der beiden jedoch weiterentwickelt.
            - paragraph [ref=e80]: "Hier sind einige wichtige Gegenüberstellungen:"
            - table [ref=e82]:
              - rowgroup [ref=e83]:
                - row "Polkadot Ethereum" [ref=e84]:
                  - cell [ref=e85]
                  - cell "Polkadot" [ref=e86]:
                    - strong [ref=e87]: Polkadot
                  - cell "Ethereum" [ref=e88]:
                    - strong [ref=e89]: Ethereum
                - row "Einführungsjahr 2020 2015" [ref=e90]:
                  - cell "Einführungsjahr" [ref=e91]:
                    - strong [ref=e92]: Einführungsjahr
                  - cell "2020" [ref=e93]
                  - cell "2015" [ref=e94]
                - row "Gründer Gavin Wood, Robert Habermeier und Peter Czaban Vitalik Buterin, Gavin Wood und weitere." [ref=e95]:
                  - cell "Gründer" [ref=e96]:
                    - strong [ref=e97]: Gründer
                  - cell "Gavin Wood, Robert Habermeier und Peter Czaban" [ref=e98]
                  - cell "Vitalik Buterin, Gavin Wood und weitere." [ref=e99]
                - row "Kryptowährung DOT Ether (ETH)" [ref=e100]:
                  - cell "Kryptowährung" [ref=e101]:
                    - strong [ref=e102]: Kryptowährung
                  - cell "DOT" [ref=e103]
                  - cell "Ether (ETH)" [ref=e104]
                - row "Konsensmechanismus Nominated Proof-of-Stake (NPoS) Proof-of-Stake (PoS), seit 2022" [ref=e105]:
                  - cell "Konsensmechanismus" [ref=e106]:
                    - strong [ref=e107]: Konsensmechanismus
                  - cell "Nominated Proof-of-Stake (NPoS)" [ref=e108]
                  - cell "Proof-of-Stake (PoS), seit 2022" [ref=e109]
                - row "Skalierbarkeit Hoch, durch die parallele Verarbeitung auf Parachains Verbessert nach Merge, anhaltende Skalierungsbemühungen." [ref=e110]:
                  - cell "Skalierbarkeit" [ref=e111]:
                    - strong [ref=e112]: Skalierbarkeit
                  - cell "Hoch, durch die parallele Verarbeitung auf Parachains" [ref=e113]
                  - cell "Verbessert nach Merge, anhaltende Skalierungsbemühungen." [ref=e114]
                - row "Interoperabilität Konzipiert für die Cross-Chain-Kommunikation Begrenzt, mit potenziellen Lösungen in der Entwicklung" [ref=e115]:
                  - cell "Interoperabilität" [ref=e116]:
                    - strong [ref=e117]: Interoperabilität
                  - cell "Konzipiert für die Cross-Chain-Kommunikation" [ref=e118]
                  - cell "Begrenzt, mit potenziellen Lösungen in der Entwicklung" [ref=e119]
                - row "Smart Contracts und dApps Unterstützt über das wachsende Ökosystem von Parachains Nativ unterstützt; größtes dApp-Ökosystem" [ref=e120]:
                  - cell "Smart Contracts und dApps" [ref=e121]:
                    - strong [ref=e122]: Smart Contracts und dApps
                  - cell "Unterstützt über das wachsende Ökosystem von Parachains" [ref=e123]
                  - cell "Nativ unterstützt; größtes dApp-Ökosystem" [ref=e124]
                - row "Governance On-Chain-Governance durch DOT-Inhaber Kombination von On-Chain- und Off-Chain-Mechanismen" [ref=e125]:
                  - cell "Governance" [ref=e126]:
                    - strong [ref=e127]: Governance
                  - cell "On-Chain-Governance durch DOT-Inhaber" [ref=e128]
                  - cell "Kombination von On-Chain- und Off-Chain-Mechanismen" [ref=e129]
                - row "Netzwerkgeschwindigkeit Bis zu 1.000+ TPS über Parachains ~20–30 TPS auf der Basis-Layer, deutlich höher mit Layer-2-Lösungen" [ref=e130]:
                  - cell "Netzwerkgeschwindigkeit" [ref=e131]:
                    - strong [ref=e132]: Netzwerkgeschwindigkeit
                  - cell "Bis zu 1.000+ TPS über Parachains" [ref=e133]
                  - cell "~20–30 TPS auf der Basis-Layer, deutlich höher mit Layer-2-Lösungen" [ref=e134]
                - row "Transaktionsgebühren Allgemein niedriger und berechenbarer In der Vergangenheit höher und volatiler; Verbesserung mit Layer-2-Lösungen" [ref=e135]:
                  - cell "Transaktionsgebühren" [ref=e136]:
                    - strong [ref=e137]: Transaktionsgebühren
                  - cell "Allgemein niedriger und berechenbarer" [ref=e138]
                  - cell "In der Vergangenheit höher und volatiler; Verbesserung mit Layer-2-Lösungen" [ref=e139]
                - row "Maximales Token-Angebot Unbegrenzt; inflationäres Modell Unbegrenzt; kann aufgrund von EIP-1559 deflationär sein" [ref=e140]:
                  - cell "Maximales Token-Angebot" [ref=e141]:
                    - strong [ref=e142]: Maximales Token-Angebot
                  - cell "Unbegrenzt; inflationäres Modell" [ref=e143]
                  - cell "Unbegrenzt; kann aufgrund von EIP-1559 deflationär sein" [ref=e144]
                - row "Philosophie Interoperabilität und Skalierbarkeit über ein Multi-Chain-Framework Blockchain für dApps und Smart Contracts" [ref=e145]:
                  - cell "Philosophie" [ref=e146]:
                    - strong [ref=e147]: Philosophie
                  - cell "Interoperabilität und Skalierbarkeit über ein Multi-Chain-Framework" [ref=e148]
                  - cell "Blockchain für dApps und Smart Contracts" [ref=e149]
          - generic [ref=e151]:
            - heading "Wie funktioniert Polkadot?" [level=2] [ref=e152]
            - paragraph [ref=e153]:
              - text: Polkadot wurde konzipiert, um mehrere Blockchains in einem einheitlichen Ökosystem zu verbinden. Dabei steht die
              - strong [ref=e154]: Relay Chain
              - text: im Zentrum, die als zentraler Knotenpunkt dient und für die Netzwerksicherheit, den Konsens und die Cross-Chain-Interoperabilität verantwortlich ist. Die Relay Chain koordiniert das System, wobei sichergestellt wird, dass alle verbundenen Blockchains nahtlos kommunizieren und Informationen austauschen können.
            - paragraph [ref=e155]:
              - text: Parallel zur Relay Chain befinden sich die
              - strong [ref=e156]: Parachains
              - text: ", bei denen es sich um eigenständige Blockchains handelt, die auf bestimmte Zwecke zugeschnitten sind. Jede Parachain kann ganz eigene individuelle Merkmale, Token und Governance-Strukturen besitzen, wodurch die Anpassung und Optimierung für bestimmte Anwendungsfälle wie Finanzen, Gaming oder Lieferkettenmanagement möglich ist. Indem Transaktionen zeitgleich über diese Parachains verarbeitet werden, erhöht Polkadot die Skalierbarkeit im Vergleich zu traditionellen Single-Chain-Netzwerken deutlich, reduziert Engpässe und verbessert die gesamte Netzwerk-Performance."
            - paragraph [ref=e157]:
              - text: Polkadot verwendet einen Konsensmechanismus, der bekannt ist als
              - strong [ref=e158]: Nominated Proof-of-Stake (NPoS)
              - text: . In diesem System sind Validatoren für die Verifizierung von Transaktionen und das Hinzufügen neuer Blöcke zur Relay Chain verantwortlich. Hierfür staken diese DOT-Token als Sicherheit, um Anreize für ein ehrliches Verhalten zu schaffen. Nominatoren unterstützen die Validatoren, indem diese ihre eigenen DOT staken und somit zur Sicherheit des Netzwerks beitragen und dafür Belohnungen verdienen.
            - paragraph [ref=e159]:
              - text: Ein herausstechendes Merkmal von Polkadot ist die
              - strong [ref=e160]: Cross-Chain-Interoperabilität
              - text: . Über spezialisierte Protokolle, die
              - strong [ref=e161]: Bridges
              - text: genannt werden, kann sich Polkadot mit externen Netzwerken wie
              - link "Ethereum" [ref=e162] [cursor=pointer]:
                - /url: /de-int/learn/market-guides/trade-ethereum
              - text: und
              - link "Bitcoin" [ref=e163] [cursor=pointer]:
                - /url: /de-int/learn/market-guides/trade-bitcoin
              - text: verbinden, wodurch die Übertragung von Daten und Assets über verschiedene Blockchains hinweg ermöglicht wird. Diese Interoperabilität ermöglicht es Entwicklern, dezentrale Anwendungen (dApps) zu entwickeln, die Dienste von mehreren Blockchains verwenden und somit ein besser vernetztes Blockchain-Ökosystem schaffen.
          - generic [ref=e165]:
            - heading "Wie sieht die Kursentwicklung von Polkadot (DOT) aus?" [level=2] [ref=e166]
            - paragraph [ref=e167]: Das im Jahr 2017 durchgeführte Initial Coin Offering (ICO) von Polkadot (DOT) beschaffte etwa 145 Millionen $. Jedoch führte eine Sicherheitslücke in der Parity-Multi-Sig-Wallet zum Verlust von mehr als der Hälfte dieser Gelder, was die Anfangstage von DOT überschattete.
            - paragraph [ref=e168]: In den Jahren 2018 und 2019 fokussierte sich Polkadot auf die Entwicklung, mit der Veröffentlichung mehrerer Testnets und der Verfeinerung seiner Kernarchitektur. Der Fortschritt zog die Aufmerksamkeit von Entwicklern und Tradern auf sich, was die Grundlage für die Einführung des Mainnets im Jahr 2020 bildete.
          - generic [ref=e172]:
            - paragraph [ref=e173]:
              - strong [ref=e174]: Die Wertentwicklung in der Vergangenheit garantiert keine zukünftigen Ergebnisse.
            - paragraph [ref=e175]: Im Jahr 2022 sorgten weltweite Wirtschaftsunsicherheiten, einschließlich Inflation, Zinserhöhungen und regulatorische Entwicklungen, für einen allgemeinen Rückgang des Kryptomarktes, wovon auch der DOT-Kurs betroffen war. Dennoch setzte Polkadot seine Entwicklung fort, sodass seine Parachains und Cross-Chain-Messaging-Funktionen im Jahr 2023 trotz der anhaltenden Wirtschaftsunsicherheit genutzt eingesetzt wurden.
            - paragraph [ref=e176]: Bis in das Jahr 2024 konnte DOT trotz erheblicher Kursschwankungen eine stabile Position in der Rangliste des Kryptomarktes beibehalten. Der Fokus von Polkadot auf Interoperabilität und seine Multi-Chain-Architektur zogen weiterhin Entwickler und Anleger zugleich an.
            - heading "Welche Faktoren könnten den Realtime-Kurs von Polkadot (DOT) beeinflussen?" [level=2] [ref=e177]
            - paragraph [ref=e178]: Polkadot wird durch eine Vielzahl von Faktoren beeinflusst, die potenziell zu einer Veränderung seines Kurses auf dem Kryptowährungsmarkt führen können. Ein Verständnis dieser Faktoren kann Tradern dabei helfen, fundiertere Entscheidungen zu treffen.
            - paragraph [ref=e179]: Nachfogend finden Sie einige der wichtigsten Kurstreiber, die den DOT-Kurs bewegen könnten.
            - paragraph [ref=e180]:
              - strong [ref=e181]: Technologische Fortschritte und Netzwerk-Upgrades
              - text: – Erfolgreiche Implementierungen von Netzwerk-Upgrades, wie die Einführung neuer Parachains und die Verbesserung der Interoperabilität, können das Vertrauen der Trader stärken und die Nachfrage nach DOT erhöhen. Verzögerungen oder technische Probleme bei Upgrades können jedoch zu Unsicherheiten führen und möglicherweise einen Rückgang des Kurses auslösen.
            - paragraph [ref=e182]:
              - strong [ref=e183]: Marktstimmung und Kryptowährungstrends
              - text: – DOT bewegt sich häufig im Einklang mit den allgemeinen Trends auf dem Kryptowährungsmarkt. In Zeiten einer insgesamt bullischen Marktstimmung, insbesondere wenn große Kryptowährungen wie
              - link "Bitcoin (BTC)" [ref=e184] [cursor=pointer]:
                - /url: /de-int/markets/cryptocurrencies/chart-btc-usd
              - text: ein Kurswachstum verzeichnen, reagiert DOT häufig ähnlich. Positive Trends wie die zunehmende institutionelle Akzeptanz oder vorteilhafte regulatorische Nachrichten können zu einem allgemeinen Marktanstieg führen. Umgekehrt können bärische Marktbedingungen oder negative Nachrichten Abwärtsdruck auf den DOT-Kurs ausüben.
            - paragraph [ref=e185]:
              - strong [ref=e186]: Regulatorisches Umfeld
              - text: – Die Regierungspolitik und regulatorische Veränderungen können sich erheblich auf den DOT-Kurs auswirken. Regulierungen, die die Blockchain-Innovation unterstützen, können Investitionen und die Akzeptanz fördern, wodurch der DOT-Kurs potenziell steigen könnte. Eine restriktivere Politik, ein Verbot des Handels von Kryptowährungen oder verschärfte Compliance-Anforderungen können den Marktzugang beeinträchtigen, was einen Kursrückgang verursachen könnte.
            - paragraph [ref=e187]:
              - strong [ref=e188]: Staking und Angebotsdynamik
              - text: – Polkadot verwendet einen Konsensmechanismus auf Basis von Nominated Proof-of-Stake (NPoS), bei dem das Staking eine entscheidende Rolle spielt. Wenn sich eine große Menge an DOT im Staking befindet, wird das zirkulierende Angebot reduziert, was bei einer gleichbleibenden oder steigenden Nachfrage einen Aufwärtsdruck auf den Kurs ausüben kann. Wird hingegen eine größere Menge an DOT aus dem Staking entnommen und wieder in Umlauf gebracht, so kann dies das verfügbare Angebot erhöhen, was potenziell zu einem niedrigeren DOT-Kurs führen kann, sollte die Nachfrage nicht entsprechend steigen.
            - paragraph [ref=e189]:
              - strong [ref=e190]: Akzeptanz von Entwicklern und Projekten
              - text: – Eine zunehmende Akzeptanz verdeutlicht den Nutzen der Plattform und könnte mehr Nutzer und Trader anziehen. Namhafte Partnerschaften oder erfolgreiche Parachain-Auktionen, die innovative Lösungen in das Netzwerk einführen, können dessen Ruf verbessern und zu einer höheren Nachfrage nach DOT führen.
            - paragraph [ref=e191]:
              - strong [ref=e192]: Makroökonomische Faktoren und globale Nachrichten
              - text: – Allgemeine Wirtschaftsbedingungen wie Inflationsraten, Änderungen der Zinssätze und geopolitische Ereignisse können sich auf das Trader-Verhalten auf dem
              - link "Kryptowährungsmarkt" [ref=e193] [cursor=pointer]:
                - /url: /de-int/markets/cryptocurrencies
              - text: auswirken. In Zeiten der wirtschaftlichen Unsicherheit könnten Trader auf Kryptowährungen wie DOT zurückgreifen, was den Kurs potenziell steigen lassen könnte. Eine starke Weltwirtschaft könnte hingegen dazu führen, dass Trader traditionelle Vermögenswerte bevorzugen, was zu einem Rückgang der Nachfrage nach Kryptowährungen führen könnte.
            - paragraph [ref=e194]:
              - link "Ein Konto erstellen" [ref=e195] [cursor=pointer]:
                - /url: /trading/signup
              - link "Ein Demokonto eröffnen" [ref=e196] [cursor=pointer]:
                - /url: /trading/signup?go=demo
          - generic [ref=e198]:
            - heading "Was sind die Handelszeiten für Polkadot (DOT)?" [level=2] [ref=e199]
            - paragraph [ref=e200]: Polkadot (DOT) basiert auf einem dezentralisierten Blockchain-Netzwerk, das 24 Stunden am Tag, an sieben Tagen in der Woche und 365 Tage im Jahr aktiv ist. Das bedeutet, dass Sie DOT jederzeit traden können, auch an Wochenenden und Feiertagen.
            - list [ref=e201]:
              - listitem [ref=e202]:
                - text: •
                - strong [ref=e203]: Kryptowährungsbörsen
                - text: – viele Börsen ermöglichen das 24/7-Trading, wodurch eine kontinuierliche Marktteilnahme möglich ist.
              - listitem [ref=e204]:
                - text: •
                - strong [ref=e205]: Online-Handelsplattformen
                - text: – einige zuverlässige und vertrauenswürdige Broker bieten das DOT/USD-Trading über CFDs an.
            - paragraph [ref=e206]: Wenn Sie sich für das Traden mit CFDs entscheiden, können Sie die Performance von DOT in Realtime in US-Dollar mit unserem umfassenden DOT/USD-Kurschart verfolgen.
            - paragraph [ref=e207]: Indem Sie die Kryptowährungsaktivitäten beobachten, können Sie wichtige fundamentale oder technische Ereignisse im Blick behalten, die sich auf die kurzfristige Wertentwicklung der Kryptowährung auswirken können.
            - paragraph [ref=e208]:
              - link "Ein Konto erstellen" [ref=e209] [cursor=pointer]:
                - /url: /trading/signup
              - link "Ein Demokonto eröffnen" [ref=e210] [cursor=pointer]:
                - /url: /trading/signup?go=demo
          - generic [ref=e212]:
            - heading "So können Sie Polkadot (DOT) halten und aufbewahren" [level=2] [ref=e213]
            - paragraph [ref=e214]: "Nachdem Sie DOT gekauft haben, können Sie es in einer Wallet für Kryptowährungen aufbewahren. Zu den Optionen gehören:"
            - list [ref=e215]:
              - listitem [ref=e216]:
                - text: •
                - strong [ref=e217]: Software-Wallets
                - text: – Spezialisierte Wallets für den Desktop oder Mobilgeräte wie Nova Wallet, Polkawallet und imToken.
              - listitem [ref=e218]:
                - text: •
                - strong [ref=e219]: Hardware-Wallets
                - text: – Physische Geräte wie Ledger Nano S/X und Trezor bieten eine sichere Offline-Aufbewahrung und schützen Ihr DOT vor Online-Bedrohungen.
            - paragraph [ref=e220]: Es ist wichtig sicherzustellen, dass Ihre Wallet sicher ist und Sie Ihre Private Keys sicher aufbewahren.
            - paragraph [ref=e221]: Wenn Sie alternativ auf den DOT/USD-Kurs über CFDs traden, müssen Sie sich keine Sorgen über die Verwahrung oder die Sicherung des zugrunde liegenden Vermögenswerts machen.
          - generic [ref=e223]:
            - heading "So traden Sie Polkadot (DOT)" [level=2] [ref=e224]
            - paragraph [ref=e225]: Polkadot (DOT) ist eine Kryptowährung, was bedeutet, dass sie direkt auf einer Kryptowährungsbörse oder Peer-to-Peer gehandelt werden kann. Trader können sich ebenso dafür entscheiden, DOT über ein Derivat zu traden, ein Finanzprodukt, das seinen Wert aus dem Kurs des zugrundeliegenden Vermögenswerts bezieht (oder „ableitet“).
            - paragraph [ref=e226]:
              - text: Sie könnten einen
              - link "Differenzkontrakt oder CFD" [ref=e227] [cursor=pointer]:
                - /url: /de-int/ways-to-trade/cfd-trading
              - text: verwenden, um auf den Kurs von DOT-Paaren zu traden. Ein CFD ist ein Kontrakt, üblicherweise zwischen einem Broker und einem Trader, bei dem sich eine Partei verpflichtet, der anderen die Differenz des Wertes eines Wertpapiers zwischen der Eröffnung und der Schließung eines Trades zu zahlen.
            - paragraph [ref=e228]:
              - text: Sie können
              - link "CFDs" [ref=e229] [cursor=pointer]:
                - /url: /de-int/ways-to-trade/cfd-trading/what-is-cfd-trading
              - text: zum Traden nutzen, unabhängig davon, ob Sie denken, dass DOT/USD steigen (als „long gehen“ bezeichnet) oder fallen wird („short gehen“). CFDs geben Ihnen den Zugang zu einem Hebel, auch bekannt als
              - link "Margin-Trading" [ref=e230] [cursor=pointer]:
                - /url: /de-int/learn/trading-strategies/margin-trading
              - text: ", was größere Positionen mit einer relativ geringen Einlage ermöglicht. Dadurch können Ihre potenziellen Gewinne verstärkt werden, aber auch Ihre potenziellen Verluste, was das CFD-Trading risikoreich macht."
            - paragraph [ref=e231]:
              - text: Sie können mehr über das Trading von
              - link "Kryptowährungen" [ref=e232] [cursor=pointer]:
                - /url: /de-int/markets/cryptocurrencies
              - text: mit Capital.com in unserem umfassenden
              - link "Leitfaden zum Kryptowährungshandel" [ref=e233] [cursor=pointer]:
                - /url: /de-int/learn/market-guides/what-is-cryptocurrency-trading
              - text: erfahren.
            - paragraph [ref=e234]: Sie können DOT neben CFDs auch über Instrumente wie Futures, Optionen, ETFs und Investmentfonds handeln. Allesamt bieten jeweils eine Alternative zum CFD-Trading mit Hebelwirkung und sind für verschiedene Risikoprofile und Anlagestrategien geeignet.
            - paragraph [ref=e235]:
              - link "Ein Konto erstellen" [ref=e236] [cursor=pointer]:
                - /url: /trading/signup
              - link "Ein Demokonto eröffnen" [ref=e237] [cursor=pointer]:
                - /url: /trading/signup?go=demo
          - heading "Häufig gestellte Fragen" [level=2] [ref=e240]
          - generic [ref=e242]:
            - group [ref=e243]:
              - generic "Was ist Polkadot?" [ref=e244] [cursor=pointer]:
                - heading "Was ist Polkadot?" [level=3] [ref=e245]
            - group [ref=e246]:
              - generic "Ist Polkadot besser als Ethereum?" [ref=e247] [cursor=pointer]:
                - heading "Ist Polkadot besser als Ethereum?" [level=3] [ref=e248]
            - group [ref=e249]:
              - generic "Wie funktioniert Polkadot?" [ref=e250] [cursor=pointer]:
                - heading "Wie funktioniert Polkadot?" [level=3] [ref=e251]
            - group [ref=e252]:
              - generic "Wer besitzt am meisten Polkadot?" [ref=e253] [cursor=pointer]:
                - heading "Wer besitzt am meisten Polkadot?" [level=3] [ref=e254]
            - group [ref=e255]:
              - generic "Wofür wird Polkadot (DOT) verwendet?" [ref=e256] [cursor=pointer]:
                - heading "Wofür wird Polkadot (DOT) verwendet?" [level=3] [ref=e257]
              - text: • • •
          - generic [ref=e260]:
            - heading "Besuchen Sie unsere weiteren vollständigen Leitfäden" [level=2] [ref=e262]
            - generic [ref=e263]:
              - generic [ref=e266]:
                - heading "Wie man mit Ethereum handelt" [level=3] [ref=e267]
                - generic [ref=e268]: Erfahren Sie alles über Ethereum und den Kursverlauf von Ether (ETH), einschließlich dApps, NFTs und wie Sie ETH/USD über CFDs auf Capital.com traden
                - link "Ethereum traden" [ref=e269] [cursor=pointer]:
                  - /url: /de-int/learn/market-guides/trade-ethereum
                  - generic [ref=e270]: Ethereum traden
              - generic [ref=e273]:
                - heading "So traden Sie Cardano" [level=3] [ref=e274]
                - generic [ref=e275]: Vertiefen Sie Ihr Wissen über Cardano sowie den Kursverlauf von ADA und erfahren Sie, wie Sie ADA/BTC über CFDs auf Capital.com traden können
                - link "Cardano traden" [ref=e276] [cursor=pointer]:
                  - /url: /de-int/learn/market-guides/trade-cardano
                  - generic [ref=e277]: Cardano traden
        - complementary [ref=e278]:
          - navigation [ref=e282]:
            - strong [ref=e283]: Inhalte
            - separator
            - generic [ref=e284]:
              - link "Was ist Polkadot?" [ref=e286] [cursor=pointer]:
                - /url: "#part_0"
              - 'link "Polkadot vs. Ethereum: Was sind die wichtigsten Unterschiede?" [ref=e288] [cursor=pointer]':
                - /url: "#part_1"
              - link "Wie funktioniert Polkadot?" [ref=e290] [cursor=pointer]:
                - /url: "#part_2"
              - link "Wie sieht die Kursentwicklung von Polkadot (DOT) aus?" [ref=e292] [cursor=pointer]:
                - /url: "#part_3"
              - link "Welche Faktoren könnten den Realtime-Kurs von Polkadot (DOT) beeinflussen?" [ref=e294] [cursor=pointer]:
                - /url: "#part_4"
              - link "Was sind die Handelszeiten für Polkadot (DOT)?" [ref=e296] [cursor=pointer]:
                - /url: "#part_5"
              - link "So können Sie Polkadot (DOT) halten und aufbewahren" [ref=e298] [cursor=pointer]:
                - /url: "#part_6"
              - link "So traden Sie Polkadot (DOT)" [ref=e300] [cursor=pointer]:
                - /url: "#part_7"
              - link "Häufig gestellte Fragen" [ref=e302] [cursor=pointer]:
                - /url: "#part_8"
          - generic [ref=e303]:
            - generic [ref=e305]:
              - strong [ref=e306]: Die meistgehandelten
              - generic [ref=e310]:
                - button "Die meistgehandelten" [ref=e311]: Die meistgehandelten
                - button "Top-Aufsteiger" [ref=e312] [cursor=pointer]: Top-Aufsteiger
                - button "Top-Absteiger" [ref=e313] [cursor=pointer]: Top-Absteiger
                - button "Die volatilsten" [ref=e314] [cursor=pointer]: Die volatilsten
            - text: Die Aktienkurse sind indikativ und können von den aktuellen Marktpreisen abweichen.
      - generic [ref=e318]:
        - heading "Drei Schritte für den Einstieg" [level=2] [ref=e320]
        - generic [ref=e321]:
          - button [ref=e323] [cursor=pointer]
          - generic [ref=e326]: 1. Erstellen Sie Ihr Konto (vorbehaltlich der Eignung)
          - generic [ref=e327]: 2. Zahlen Sie zu Ihren Bedingungen ein
          - generic [ref=e328]: 3. Starten Sie, wenn Sie bereit sind
  - contentinfo [ref=e330]:
    - generic [ref=e331]:
      - link [ref=e332] [cursor=pointer]:
        - /url: /de-int
        - img [ref=e333]
      - generic [ref=e337]:
        - link [ref=e338] [cursor=pointer]:
          - /url: https://twitter.com/capitalcom
        - link [ref=e339] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/capital.com/
        - link [ref=e340] [cursor=pointer]:
          - /url: https://www.instagram.com/capitalcom/
        - link [ref=e341] [cursor=pointer]:
          - /url: https://www.tiktok.com/@capitalcom_international
        - link [ref=e342] [cursor=pointer]:
          - /url: https://www.facebook.com/capitalcom/
        - link [ref=e343] [cursor=pointer]:
          - /url: https://www.reddit.com/r/capitalcom/
      - generic [ref=e344]:
        - link [ref=e345] [cursor=pointer]:
          - /url: https://app.appsflyer.com/id1230088754
        - link [ref=e346] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading
        - link [ref=e347] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei
    - generic [ref=e348]:
      - generic [ref=e349]:
        - generic [ref=e350]:
          - generic [ref=e351]:
            - generic [ref=e352]: "Land / Region:"
            - button "Serbia" [ref=e353] [cursor=pointer]:
              - generic [ref=e355]: Serbia
          - generic [ref=e356]: •
          - generic [ref=e357]:
            - generic [ref=e358]: "Sprache:"
            - button "German" [ref=e359] [cursor=pointer]:
              - generic [ref=e360]: German
        - generic [ref=e361]:
          - generic [ref=e362]: "Sie können auch uns kontaktieren:"
          - link "+41 435053128" [ref=e365] [cursor=pointer]:
            - /url: tel:+41 435053128
            - strong [ref=e366]: +41 435053128
            - strong
          - generic [ref=e367]: •
          - link "support@capital.com" [ref=e369] [cursor=pointer]:
            - /url: mailto:support@capital.com
            - strong [ref=e370]: support@capital.com
      - generic [ref=e371]:
        - generic [ref=e372]:
          - strong [ref=e374]: Handel
          - generic [ref=e375]:
            - generic [ref=e376]:
              - generic [ref=e377]: Handel
              - generic [ref=e378]:
                - link "CFDs traden" [ref=e380] [cursor=pointer]:
                  - /url: /de-int/ways-to-trade/cfd-trading
                - link "Demokonto eröffnen" [ref=e382] [cursor=pointer]:
                  - /url: /de-int/trading-platforms/demo-account
                - link "Pro-Konto eröffnen" [ref=e384] [cursor=pointer]:
                  - /url: /de-int/professional
            - generic [ref=e385]:
              - generic [ref=e386]: Plattformen
              - generic [ref=e387]:
                - link "Web-Plattform" [ref=e389] [cursor=pointer]:
                  - /url: /de-int/trading-platforms/web-platform
                - link "Mobile App" [ref=e391] [cursor=pointer]:
                  - /url: /de-int/trading-platforms/mobile-apps
                - link "TradingView" [ref=e393] [cursor=pointer]:
                  - /url: /de-int/trading-platforms/trading-view
                - link "MT4" [ref=e395] [cursor=pointer]:
                  - /url: /de-int/trading-platforms/mt4
                - link "MT5" [ref=e397] [cursor=pointer]:
                  - /url: /de-int/trading-platforms/mt5
            - generic [ref=e398]:
              - generic [ref=e399]: Lernen
              - generic [ref=e400]:
                - link "Trading-Strategien" [ref=e402] [cursor=pointer]:
                  - /url: /de-int/learn/trading-strategies
                - link "Technische Analyse" [ref=e404] [cursor=pointer]:
                  - /url: /de-int/learn/technical-analysis
                - link "Trading-Psychologie" [ref=e406] [cursor=pointer]:
                  - /url: /de-int/learn/trading-psychology
                - link "Webinare" [ref=e408] [cursor=pointer]:
                  - /url: /de-int/learn/webinars
                - link "Lernen" [ref=e410] [cursor=pointer]:
                  - /url: /de-int/learn
        - generic [ref=e411]:
          - strong [ref=e413]: Märkte
          - generic [ref=e414]:
            - generic [ref=e415]:
              - generic [ref=e416]: Unsere Märkte
              - generic [ref=e417]:
                - link "Märkte" [ref=e419] [cursor=pointer]:
                  - /url: /de-int/markets
                - link "Aktien" [ref=e421] [cursor=pointer]:
                  - /url: /de-int/markets/shares
                - link "Forex" [ref=e423] [cursor=pointer]:
                  - /url: /de-int/markets/forex
                - link "Indizes" [ref=e425] [cursor=pointer]:
                  - /url: /de-int/markets/indices
                - link "Rohstoffe" [ref=e427] [cursor=pointer]:
                  - /url: /de-int/markets/commodities
                - link "Kryptowährungen" [ref=e429] [cursor=pointer]:
                  - /url: /de-int/markets/cryptocurrencies
                - link "Anleihen" [ref=e431] [cursor=pointer]:
                  - /url: /de-int/markets/bonds
                - link "Zinssätze" [ref=e433] [cursor=pointer]:
                  - /url: /de-int/markets/interest-rates
            - generic [ref=e434]:
              - generic [ref=e435]: Marktinformationen
              - link "Marktanalyse" [ref=e438] [cursor=pointer]:
                - /url: /de-int/analysis
        - link "Preisgestaltung" [ref=e441] [cursor=pointer]:
          - /url: /de-int/ways-to-trade/fees-and-charges
          - strong [ref=e442]: Preisgestaltung
        - generic [ref=e443]:
          - strong [ref=e445]: Über uns
          - generic [ref=e446]:
            - generic [ref=e447]:
              - generic [ref=e448]: Über uns
              - generic [ref=e449]:
                - link "Über uns" [ref=e451] [cursor=pointer]:
                  - /url: /de-int/about-us
                - link "Unsere Niederlassungen" [ref=e453] [cursor=pointer]:
                  - /url: /de-int/about-us/our-offices
                - link "Ist Capital.com sicher?" [ref=e455] [cursor=pointer]:
                  - /url: /de-int/security-measures
                - link "Unser Geschäftsmodell" [ref=e457] [cursor=pointer]:
                  - /url: /de-int/about-us/how-capital-makes-money
            - generic [ref=e458]:
              - generic [ref=e459]: Karriere
              - generic [ref=e460]:
                - link "Partnerprogramme" [ref=e462] [cursor=pointer]:
                  - /url: /de-int/partnerships
                - link "Freund empfehlen" [ref=e464] [cursor=pointer]:
                  - /url: /de-int/refer-a-friend
            - generic [ref=e465]:
              - generic [ref=e466]: Hilfe
              - generic [ref=e467]:
                - link "Hilfe-Center" [ref=e469] [cursor=pointer]:
                  - /url: /de-int/help
                - link "Kundenvulnerabilität" [ref=e471] [cursor=pointer]:
                  - /url: /de-int/help/client-vulnerability
                - link "Kontaktieren Sie uns" [ref=e473] [cursor=pointer]:
                  - /url: /de-int/contact-us
            - generic [ref=e474]:
              - generic [ref=e475]: Rechtliches
              - generic [ref=e476]:
                - link "Bedingungen & Richtlinien" [ref=e478] [cursor=pointer]:
                  - /url: /de-int/terms-and-policies
                - link "Beschwerden" [ref=e480] [cursor=pointer]:
                  - /url: /de-int/help/complaints
    - generic [ref=e482]:
      - paragraph [ref=e483]:
        - text: CFDs sind komplexe Instrumente und aufgrund des Hebels mit einem hohen Risiko des schnellen Geldverlustes verbunden.
        - generic [ref=e484]:
          - strong [ref=e485]: 79.75 % der Kleinanlegerkonten verlieren Geld beim CFD-Handel mit diesem Anbieter.
          - text: Sie sollten abwägen, ob Sie verstehen, wie CFDs funktionieren, und ob Sie es sich leisten können, das hohe Risiko des Geldverlustes einzugehen.
      - paragraph
      - paragraph [ref=e486]: "Capital Com Online Investments Ltd ist eine Gesellschaft mit beschränkter Haftung mit der Unternehmensnummer 209236B. Capital Com Online Investments Ltd ist ein im Commonwealth der Bahamas eingetragenes Unternehmen, das von der Securities Commission of the Bahamas unter der Lizenznummer SIA-F245 zugelassen ist. Der eingetragene Unternehmenssitz befindet sich in #3 Bayside Executive Park, Blake Road and West Bay Street, P. O. Box CB 13012, Nassau, The Bahamas."
    - generic [ref=e487]:
      - paragraph [ref=e488]: © 2026 Capital Com Online Investments Ltd
      - generic [ref=e489]:
        - link "Sitemap" [ref=e490] [cursor=pointer]:
          - /url: /de-int/sitemap
        - link "Cookie-Einstellungen" [ref=e491] [cursor=pointer]:
          - /url: ""
        - link:
          - /url: /de-int
        - link "Bedingungen und Richtlinien" [ref=e492] [cursor=pointer]:
          - /url: /de-int/terms-and-policies
        - link "Beschwerdeverfahren (SCB)" [ref=e493] [cursor=pointer]:
          - /url: /de-int/help/complaints
  - button [ref=e494] [cursor=pointer]
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
  10  | ) {
  11  |   console.log("EXPECTATION ASSERTIONS", expectation);
  12  |   const currentUrl = testInfo.project.use.baseURL;
  13  |   const currentLicense = testInfo.project.use.licenseName;
  14  |   const currentLang = testInfo.project.use.langName;
  15  |   // console.log("Current URL: ", currentUrl);
  16  | 
  17  |   const expectationType =
  18  |     typeof expectation === "string" ? expectation : expectation.type;
  19  | 
  20  |   switch (expectationType) {
  21  |     case "redirects to platform":
  22  |       await expect(page).toHaveURL(/trading\/platform/);
  23  |       break;
  24  | 
  25  |     case "shows signup form":
  26  |       await expect(
  27  |         // page.locator('form[data-sentry-component="SignUp"]'),
  28  |         page.locator('[data-type="SIGN_UP_close"]'),
  29  |       ).toBeVisible();
  30  |       break;
  31  | 
  32  |     case "shows login form":
  33  |       await expect(page.locator('[data-testid="modal-title"]'));
  34  |       break;
  35  | 
  36  |     case "redirect": {
  37  |       const pageConfig = ctaRegistry[expectation.page].path;
  38  | 
  39  |       // const pagePath = ctaRegistry[expectation.page].path;
  40  |       const pagePath =
  41  |         typeof pageConfig === "function"
  42  |           ? pageConfig(currentLicense)
  43  |           : pageConfig;
  44  | 
  45  |       const expectedURL = pagePath ? `${currentUrl}/${pagePath}` : currentUrl;
  46  |       await expect(page).toHaveURL(new RegExp(`${expectedURL}/?$`));
  47  |       break;
  48  |     }
  49  | 
  50  |     case "opens external link": {
  51  |       const href = await locator.getAttribute("href");
  52  |       // await expect(locator).toHaveAttribute("target", "_blank");
  53  |       expect(href).toContain(action.expectedHrefContains);
  54  |       break;
  55  |     }
  56  | 
  57  |     case "opens regional settings window": {
  58  |       await expect(page.locator('[data-sentry-component="CountryLangSelect"]'));
  59  |       break;
  60  |     }
  61  | 
  62  |     case "exist corresponding license": {
  63  |       const expectedLicenses = action.licenseText?.[currentLicense];
  64  | 
  65  |       if (expectedLicenses?.length) {
  66  |         for (const text of expectedLicenses) {
  67  |           await expect(locator).toContainText(text);
  68  |         }
  69  |       } else {
  70  |         await expect(locator).toContainText(currentLicense);
  71  |       }
  72  | 
  73  |       break;
  74  |     }
  75  | 
  76  |     case "opens cookie menu": {
  77  |       await expect(page.locator(".consent-pc-modal__content"));
  78  |       break;
  79  |     }
  80  | 
  81  |     case "opens pdf document": {
  82  |       const href = await locator.getAttribute("href");
  83  | 
> 84  |       expect(href).toContain(action.expectedHrefContains);
      |                    ^ Error: expect(received).toContain(expected) // indexOf
  85  |       await expect(locator).toHaveAttribute("target", "_blank");
  86  | 
  87  |       const browserName = testInfo.project.use.browserName;
  88  | 
  89  |       if (browserName.includes("webkit")) {
  90  |         const [download] = await Promise.all([
  91  |           page.waitForEvent("download"),
  92  |           locator.click(),
  93  |         ]);
  94  | 
  95  |         const path = await download.path();
  96  |         expect(path).not.toBeNull();
  97  | 
  98  |         const fs = await import("node:fs/promises");
  99  |         const stat = await fs.stat(path);
  100 | 
  101 |         expect(
  102 |           stat.size,
  103 |           `Downloaded file "${download.suggestedFilename()}" is empty`,
  104 |         ).toBeGreaterThan(0);
  105 |       } else {
  106 |         const [pdfPage] = await Promise.all([
  107 |           page.context().waitForEvent("page"),
  108 |           locator.click(),
  109 |         ]);
  110 | 
  111 |         await pdfPage.waitForLoadState("domcontentloaded");
  112 | 
  113 |         expect(pdfPage.url()).toContain(action.expectedHrefContains);
  114 |         await expect(pdfPage.locator("body")).not.toContainText(
  115 |           "HTTP ERROR 404",
  116 |         );
  117 |       }
  118 |       break;
  119 |     }
  120 | 
  121 |     case "opens link on currentURL": {
  122 |       const currentUrl = page.url();
  123 | 
  124 |       console.log("EXPECTED:", await locator.getAttribute("href"));
  125 |       console.log("ACTUAL:", currentUrl);
  126 | 
  127 |       expect(currentUrl).toContain(action.expectedHrefContains);
  128 |       await expect(page.locator("body")).not.toContainText("HTTP ERROR 404");
  129 | 
  130 |       break;
  131 |     }
  132 | 
  133 |     default:
  134 |       throw new Error(`Unknown expectation: ${expectation}`);
  135 |   }
  136 | }
  137 | 
```