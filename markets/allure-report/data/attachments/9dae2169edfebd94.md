# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: markets/markets.spec.js >> markets page | tradingInstrument | tradedBtn
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
      - text: Les CFD sont des instruments complexes et présentent un risque élevé de perte rapide en raison de l\'effet de levier.
      - generic [ref=e8]:
        - strong [ref=e9]: 78.48 % des comptes d’investisseurs particuliers perdent de l’argent en tradant des CFD avec ce fournisseur.
        - text: Vous devez vous demander si vous comprenez le fonctionnement des CFD et si vous pouvez vous permettre de prendre le risque élevé de perdre votre argent.
    - generic [ref=e11]:
      - link [ref=e12] [cursor=pointer]:
        - /url: /fr-int
        - img [ref=e13]
      - generic [ref=e18]:
        - navigation [ref=e19]:
          - button "Trading" [ref=e20]:
            - button "Trading" [ref=e21]:
              - generic [ref=e22]: Trading
          - button "Marchés" [ref=e23]:
            - button "Marchés" [ref=e24]:
              - generic [ref=e25]: Marchés
          - link "Tarification" [ref=e28] [cursor=pointer]:
            - /url: /fr-int/ways-to-trade/fees-and-charges
          - button "À propos de nous" [ref=e29]:
            - button "À propos de nous" [ref=e30]:
              - generic [ref=e31]: À propos de nous
        - button "fr" [ref=e32] [cursor=pointer]:
          - generic [ref=e34]: fr
      - generic [ref=e36]:
        - button "Se connecter" [ref=e37] [cursor=pointer]: Se connecter
        - button "Ouvrir un compte" [ref=e38] [cursor=pointer]: Ouvrir un compte
  - generic [ref=e39]:
    - paragraph [ref=e42]:
      - generic [ref=e43]:
        - link "Accueil" [ref=e44] [cursor=pointer]:
          - /url: /fr-int
        - text: •
      - generic [ref=e45]:
        - link "Les marchés" [ref=e46] [cursor=pointer]:
          - /url: /fr-int/markets
        - text: •
      - generic [ref=e47]:
        - link "Matières premières" [ref=e48] [cursor=pointer]:
          - /url: /fr-int/markets/commodities
        - text: •
      - text: Gold Spot
    - generic [ref=e49]:
      - generic [ref=e52]:
        - generic [ref=e54]:
          - heading "Négociation Gold Spot CFD" [level=1] [ref=e56]
          - button "Ajouter aux favoris" [ref=e57] [cursor=pointer]: Ajouter aux favoris
        - generic [ref=e58]:
          - generic [ref=e59]:
            - generic [ref=e60]:
              - generic [ref=e61]:
                - strong [ref=e62]: "4031.23"
                - generic [ref=e63]: "-1.22%"
              - link [ref=e64] [cursor=pointer]:
                - /url: ""
            - generic [ref=e65]:
              - generic [ref=e66]:
                - generic [ref=e67]:
                  - button "1 m" [ref=e68]
                  - button "5 m" [ref=e69] [cursor=pointer]
                  - button "15 m" [ref=e70] [cursor=pointer]
                  - button "30 m" [ref=e71] [cursor=pointer]
                  - button "1h" [ref=e72] [cursor=pointer]
                  - button "4h" [ref=e73] [cursor=pointer]
                  - button "1j" [ref=e74] [cursor=pointer]
                  - button "1s" [ref=e75] [cursor=pointer]
                - img [ref=e77]
              - button "Voir le graphique détaillé" [ref=e78] [cursor=pointer]
            - generic [ref=e79]:
              - generic [ref=e80]:
                - link "Vendre 4030.73" [ref=e81] [cursor=pointer]:
                  - /url: /instrument?id=27045129890124996
                  - text: Vendre
                  - paragraph [ref=e82]: "4030.73"
                - link "Acheter 4031.23" [ref=e83] [cursor=pointer]:
                  - /url: /instrument?id=27045129890124996
                  - text: Acheter
                  - paragraph [ref=e84]: "4031.23"
                - generic [ref=e85]: "0.50"
              - generic [ref=e86]:
                - generic [ref=e87]: "Bas: 3990.29"
                - generic [ref=e88]: "Élevé: 4090.14"
              - table [ref=e90]
              - generic [ref=e91]:
                - generic [ref=e92]:
                  - generic [ref=e93]: "Vendeurs:"
                  - generic [ref=e94]: 26.31%
                - generic [ref=e95]:
                  - generic [ref=e96]: "Acheteurs:"
                  - generic [ref=e97]: 73.69%
            - generic [ref=e98]:
              - button "Heures de Trading du Marché (UTC)" [ref=e101]:
                - generic [ref=e103] [cursor=pointer]:
                  - paragraph [ref=e104]: Heures de Trading du Marché (UTC)
                  - strong [ref=e105]: Ouvrir maintenant
              - strong [ref=e107]: . Les cours des actions sont donnés à titre indicatif et peuvent différer des prix du marché en direct.
          - generic [ref=e108]:
            - generic [ref=e110]:
              - button "Résumé" [ref=e111]: Résumé
              - button "Données historiques" [ref=e112] [cursor=pointer]: Données historiques
            - generic [ref=e116]:
              - strong [ref=e117]: Conditions de trading
              - table [ref=e118]:
                - rowgroup [ref=e119]:
                  - 'row "Type Ce marché financier est disponible pour le trading de CFD. En savoir plus sur : CFD CFD" [ref=e120]':
                    - 'cell "Type Ce marché financier est disponible pour le trading de CFD. En savoir plus sur : CFD" [ref=e121]':
                      - generic [ref=e122] [cursor=pointer]:
                        - generic [ref=e124]: Type
                        - generic [ref=e127]:
                          - generic [ref=e128]: Ce marché financier est disponible pour le trading de CFD.
                          - generic [ref=e129]:
                            - generic [ref=e130]: "En savoir plus sur :"
                            - link "CFD" [ref=e131]:
                              - /url: /fr-int/ways-to-trade/cfd-trading
                              - generic [ref=e132]: CFD
                    - cell "CFD" [ref=e133]
                  - row "Écart 0.5" [ref=e134]:
                    - cell "Écart" [ref=e135]
                    - cell "0.5" [ref=e136]
                  - row "Frais de session nocturne pour une position longue Frais de session nocturne pour une position longue Marge. Votre investissement $1,000.00 Ajustement des fonds de overnight Frais sur la valeur totale de la position -0.015532 % (-$15.53) Taille de la position avec effet de levier ~$100,000.00 Valeur nominale avec effet de levier ~$99,000.00 Vers la plateforme -0.01553%" [ref=e137]:
                    - cell "Frais de session nocturne pour une position longue Frais de session nocturne pour une position longue Marge. Votre investissement $1,000.00 Ajustement des fonds de overnight Frais sur la valeur totale de la position -0.015532 % (-$15.53) Taille de la position avec effet de levier ~$100,000.00 Valeur nominale avec effet de levier ~$99,000.00 Vers la plateforme" [ref=e138]:
                      - generic [ref=e139] [cursor=pointer]:
                        - generic [ref=e141]: Frais de session nocturne pour une position longue
                        - generic [ref=e143]:
                          - strong [ref=e144]: Frais de session nocturne pour une position longue
                          - table [ref=e146]
                          - separator [ref=e147]
                          - generic [ref=e148]:
                            - table [ref=e149]:
                              - rowgroup [ref=e150]:
                                - row "Marge. Votre investissement $1,000.00" [ref=e151]:
                                  - cell "Marge. Votre investissement" [ref=e152]:
                                    - generic [ref=e153]: Marge. Votre investissement
                                  - cell "$1,000.00" [ref=e155]
                                - row "Ajustement des fonds de overnight Frais sur la valeur totale de la position -0.015532 % (-$15.53)" [ref=e156]:
                                  - cell "Ajustement des fonds de overnight Frais sur la valeur totale de la position" [ref=e157]:
                                    - generic [ref=e158]:
                                      - text: Ajustement des fonds de overnight
                                      - generic [ref=e160]: Frais sur la valeur totale de la position
                                  - cell "-0.015532 % (-$15.53)" [ref=e161]:
                                    - generic [ref=e162]: "-0.015532 %"
                                    - generic [ref=e163]: (-$15.53)
                            - paragraph [ref=e164]:
                              - strong [ref=e165]: Taille de la position avec effet de levier ~$100,000.00
                            - paragraph [ref=e166]:
                              - strong [ref=e167]: Valeur nominale avec effet de levier ~$99,000.00
                          - separator [ref=e168]
                          - link "Vers la plateforme" [ref=e170]:
                            - /url: ""
                            - generic [ref=e171]: Vers la plateforme
                    - cell "-0.01553%" [ref=e172]:
                      - generic [ref=e173]: "-0.01553%"
                  - row "Frais de session nocturne pour une position courte Frais de session nocturne pour une position courte Marge. Votre investissement $1,000.00 Ajustement des fonds de overnight Frais sur la valeur totale de la position 0.007312 % ($7.31) Taille de la position avec effet de levier ~$100,000.00 Valeur nominale avec effet de levier ~$99,000.00 Vers la plateforme 0.00731%" [ref=e174]:
                    - cell "Frais de session nocturne pour une position courte Frais de session nocturne pour une position courte Marge. Votre investissement $1,000.00 Ajustement des fonds de overnight Frais sur la valeur totale de la position 0.007312 % ($7.31) Taille de la position avec effet de levier ~$100,000.00 Valeur nominale avec effet de levier ~$99,000.00 Vers la plateforme" [ref=e175]:
                      - generic [ref=e176] [cursor=pointer]:
                        - generic [ref=e178]: Frais de session nocturne pour une position courte
                        - generic [ref=e180]:
                          - strong [ref=e181]: Frais de session nocturne pour une position courte
                          - table [ref=e183]
                          - separator [ref=e184]
                          - generic [ref=e185]:
                            - table [ref=e186]:
                              - rowgroup [ref=e187]:
                                - row "Marge. Votre investissement $1,000.00" [ref=e188]:
                                  - cell "Marge. Votre investissement" [ref=e189]:
                                    - generic [ref=e190]: Marge. Votre investissement
                                  - cell "$1,000.00" [ref=e192]
                                - row "Ajustement des fonds de overnight Frais sur la valeur totale de la position 0.007312 % ($7.31)" [ref=e193]:
                                  - cell "Ajustement des fonds de overnight Frais sur la valeur totale de la position" [ref=e194]:
                                    - generic [ref=e195]:
                                      - text: Ajustement des fonds de overnight
                                      - generic [ref=e197]: Frais sur la valeur totale de la position
                                  - cell "0.007312 % ($7.31)" [ref=e198]:
                                    - generic [ref=e199]: 0.007312 %
                                    - generic [ref=e200]: ($7.31)
                            - paragraph [ref=e201]:
                              - strong [ref=e202]: Taille de la position avec effet de levier ~$100,000.00
                            - paragraph [ref=e203]:
                              - strong [ref=e204]: Valeur nominale avec effet de levier ~$99,000.00
                          - separator [ref=e205]
                          - link "Vers la plateforme" [ref=e207]:
                            - /url: ""
                            - generic [ref=e208]: Vers la plateforme
                    - cell "0.00731%" [ref=e209]:
                      - generic [ref=e210]: 0.00731%
                  - row "Horaires des frais de session nocturne 21:00 (UTC)" [ref=e211]:
                    - cell "Horaires des frais de session nocturne" [ref=e212]
                    - cell "21:00 (UTC)" [ref=e213]
                  - row "Devise USD" [ref=e214]:
                    - cell "Devise" [ref=e215]
                    - cell "USD" [ref=e216]
                  - row "Quantité minimale négociée 0.01" [ref=e217]:
                    - cell "Quantité minimale négociée" [ref=e218]
                    - cell "0.01" [ref=e219]
                  - row "Marge 1.00%" [ref=e220]:
                    - cell "Marge" [ref=e221]
                    - cell "1.00%" [ref=e222]:
                      - generic [ref=e223]: 1.00%
                  - row "Bourse" [ref=e224]:
                    - cell "Bourse" [ref=e225]
                    - cell [ref=e226]
                  - row "Commission sur trade1 0%" [ref=e227]:
                    - cell "Commission sur trade1" [ref=e228]:
                      - text: Commission sur trade
                      - superscript [ref=e229]: "1"
                    - cell "0%" [ref=e230]
                  - row "Prime de stop garanti Des frais de stop-loss garanti (SLG) ne sont facturés que si le SLG est déclenché. Veuillez consulter la section 'Tarifs et Frais de notre site web pour plus de détails. 0.03%" [ref=e231]:
                    - cell "Prime de stop garanti Des frais de stop-loss garanti (SLG) ne sont facturés que si le SLG est déclenché. Veuillez consulter la section 'Tarifs et Frais de notre site web pour plus de détails." [ref=e232]:
                      - generic [ref=e233] [cursor=pointer]:
                        - generic [ref=e235]: Prime de stop garanti
                        - generic [ref=e238]:
                          - text: Des frais de stop-loss garanti (SLG) ne sont facturés que si le SLG est déclenché. Veuillez consulter la section
                          - link "'Tarifs et Frais" [ref=e239]:
                            - /url: /fr-int/ways-to-trade/fees-and-charges
                          - text: de notre site web pour plus de détails.
                    - cell "0.03%" [ref=e240]:
                      - generic [ref=e241]: 0.03%
              - paragraph [ref=e242]:
                - generic [ref=e243]:
                  - superscript [ref=e244]: "1"
                  - text: Notre rémunération pour l’exécution de votre trade correspond au spread, soit la différence entre le prix d’achat et le prix de vente. Veuillez consulter la section
                  - link "Frais et Commissions" [ref=e245] [cursor=pointer]:
                    - /url: https://capital.com/fr-int/ways-to-trade/fees-and-charges
                  - text: sur notre site internet pour plus d’informations
      - generic [ref=e247]:
        - main [ref=e248]:
          - heading "Négociation Gold Spot" [level=2] [ref=e251]
          - generic [ref=e253]:
            - heading "Derniers articles sur les matières premières" [level=2] [ref=e256]
            - generic [ref=e257]:
              - link "Barres de cuivre" [ref=e258] [cursor=pointer]:
                - /url: /fr-int/analysis/copper-price-prediction
                - img "Barres de cuivre" [ref=e260]
              - generic [ref=e261]:
                - 'link "Prévisions du prix du cuivre : perspectives tierces" [ref=e262] [cursor=pointer]':
                  - /url: /fr-int/analysis/copper-price-prediction
                - generic [ref=e263]: Les prix du cuivre sont revenus au centre de l'attention début 2026 après une période de forte volatilité, les mouvements récents plaçant le métal près de niveaux jamais atteints auparavant sur les principales bourses.
                - generic [ref=e264]: 09:53, 15 Janvier 2026
            - generic [ref=e265]:
              - link "Prévisions sur le prix de l’aluminium" [ref=e266] [cursor=pointer]:
                - /url: /fr-int/analysis/aluminium-price-forecast
                - img "Prévisions sur le prix de l’aluminium" [ref=e268]
              - generic [ref=e269]:
                - 'link "Prévisions sur le prix de l’aluminium : que se passera-t-il après les sommets atteints en 10 ans ?" [ref=e270] [cursor=pointer]':
                  - /url: /fr-int/analysis/aluminium-price-forecast
                - generic [ref=e271]: La forte demande et les contraintes de l’offre en Chine continueront-elles à faire grimper les prix de l’aluminium ?
                - generic [ref=e272]: 11:01, 2 Décembre 2021
          - generic [ref=e274]:
            - generic [ref=e275]:
              - strong
            - generic [ref=e277]:
              - generic [ref=e278]:
                - generic [ref=e280]:
                  - generic [ref=e281]: Reuters News
                  - generic [ref=e282]: •
                  - generic [ref=e283]: Europe
                - link "MARCHÉS MONDI AUX-Les marchés boursiers se redressent et les cours du pétrole reculent alors que les États-Unis et l'Iran mettent fin aux hostilités" [ref=e284] [cursor=pointer]:
                  - /url: /fr-int/news/marches-mondi-aux-les-marches-boursiers-se-redressent-et-les-cours
                  - strong [ref=e285]: MARCHÉS MONDI AUX-Les marchés boursiers se redressent et les cours du pétrole reculent alors que les États-Unis et l'Iran mettent fin aux hostilités
              - generic [ref=e286]:
                - generic [ref=e287]:
                  - generic [ref=e288]:
                    - generic [ref=e289]: Reuters News
                    - generic [ref=e290]: •
                    - generic [ref=e291]: Europe
                  - generic [ref=e292]: 20:02 (UTC), 26 Juin 2026
                - link "MARCHÉS MONDI AUX-Les marchés boursiers mondiaux reculent légèrement, sous l'effet d'une vague de ventes dans le secteur technologique qui pèse sur les marchés" [ref=e293] [cursor=pointer]:
                  - /url: /fr-int/news/marches-mondi-aux-les-marches-boursiers-mondiaux-reculent-legerement-sous-l-effet
                  - strong [ref=e294]: MARCHÉS MONDI AUX-Les marchés boursiers mondiaux reculent légèrement, sous l'effet d'une vague de ventes dans le secteur technologique qui pèse sur les marchés
              - generic [ref=e295]:
                - generic [ref=e296]:
                  - generic [ref=e297]:
                    - generic [ref=e298]: Reuters News
                    - generic [ref=e299]: •
                    - generic [ref=e300]: Europe
                  - generic [ref=e301]: 15:51 (UTC), 26 Juin 2026
                - link "MARCHÉS MONDI AUX-Les marchés boursiers mondiaux reculent légèrement, sous l'effet d'une vague de ventes dans le secteur technologique qui pèse sur les marchés" [ref=e302] [cursor=pointer]:
                  - /url: /fr-int/news/marches-mondi-aux-les-marches-boursiers-mondiaux-reculent-legerement-sous-l-effet
                  - strong [ref=e303]: MARCHÉS MONDI AUX-Les marchés boursiers mondiaux reculent légèrement, sous l'effet d'une vague de ventes dans le secteur technologique qui pèse sur les marchés
              - generic [ref=e304]:
                - generic [ref=e305]:
                  - generic [ref=e306]:
                    - generic [ref=e307]: Reuters News
                    - generic [ref=e308]: •
                    - generic [ref=e309]: Europe
                  - generic [ref=e310]: 08:36 (UTC), 26 Juin 2026
                - link "La faiblesse du secteur technologique entraîne une forte baisse des entrées hebdomadaires dans les fonds d'actions mondiaux" [ref=e311] [cursor=pointer]:
                  - /url: /fr-int/news/la-faiblesse-du-secteur-technologique-entraine-une-forte-baisse-des
                  - strong [ref=e312]: La faiblesse du secteur technologique entraîne une forte baisse des entrées hebdomadaires dans les fonds d'actions mondiaux
              - generic [ref=e313]:
                - generic [ref=e314]:
                  - generic [ref=e315]:
                    - generic [ref=e316]: Reuters News
                    - generic [ref=e317]: •
                    - generic [ref=e318]: Europe
                  - generic [ref=e319]: 21:01 (UTC), 25 Juin 2026
                - link "JOUR DE BOURSE-Les perspectives du secteur technologique sont incertaines" [ref=e320] [cursor=pointer]:
                  - /url: /fr-int/news/jour-de-bourse-les-perspectives-du-secteur-technologique-sont-incertaines
                  - strong [ref=e321]: JOUR DE BOURSE-Les perspectives du secteur technologique sont incertaines
              - generic [ref=e322]:
                - generic [ref=e323]:
                  - generic [ref=e324]:
                    - generic [ref=e325]: Reuters News
                    - generic [ref=e326]: •
                    - generic [ref=e327]: Europe
                  - generic [ref=e328]: 16:17 (UTC), 25 Juin 2026
                - link "MARCHÉS MONDI AUX-Les marchés boursiers mondiaux progressent grâce à la remontée du secteur des semi-conducteurs ; le dollar se stabilise près de son plus haut niveau depuis un an" [ref=e329] [cursor=pointer]:
                  - /url: /fr-int/news/marches-mondi-aux-les-marches-boursiers-mondiaux-progressent-grace-a-la
                  - strong [ref=e330]: MARCHÉS MONDI AUX-Les marchés boursiers mondiaux progressent grâce à la remontée du secteur des semi-conducteurs ; le dollar se stabilise près de son plus haut niveau depuis un an
              - generic [ref=e331]:
                - generic [ref=e332]:
                  - generic [ref=e333]:
                    - generic [ref=e334]: Reuters News
                    - generic [ref=e335]: •
                    - generic [ref=e336]: Europe
                  - generic [ref=e337]: 13:07 (UTC), 25 Juin 2026
                - link "MARCHÉS EN DIRECT-Des données solides stimulent les contrats à terme sur actions" [ref=e338] [cursor=pointer]:
                  - /url: /fr-int/news/marches-en-direct-des-donnees-solides-stimulent-les-contrats-a-terme
                  - strong [ref=e339]: MARCHÉS EN DIRECT-Des données solides stimulent les contrats à terme sur actions
              - generic [ref=e340]:
                - generic [ref=e341]:
                  - generic [ref=e342]:
                    - generic [ref=e343]: Reuters News
                    - generic [ref=e344]: •
                    - generic [ref=e345]: Europe
                  - generic [ref=e346]: 12:48 (UTC), 25 Juin 2026
                - link "MARCHÉS MONDI AUX-Les valeurs technologiques s'envolent alors que les résultats de Micron apaisent les craintes liées à l'IA ; le pétrole poursuit sa chute" [ref=e347] [cursor=pointer]:
                  - /url: /fr-int/news/marches-mondi-aux-les-valeurs-technologiques-s-envolent-alors-que-les-resultats
                  - strong [ref=e348]: MARCHÉS MONDI AUX-Les valeurs technologiques s'envolent alors que les résultats de Micron apaisent les craintes liées à l'IA ; le pétrole poursuit sa chute
              - generic [ref=e349]:
                - generic [ref=e350]:
                  - generic [ref=e351]:
                    - generic [ref=e352]: Reuters News
                    - generic [ref=e353]: •
                    - generic [ref=e354]: Europe
                  - generic [ref=e355]: 05:04 (UTC), 25 Juin 2026
                - link "MARCHÉS MONDI AUX-Les marchés boursiers asiatiques s'envolent alors que les résultats de Micron apaisent les craintes liées à l'IA" [ref=e356] [cursor=pointer]:
                  - /url: /fr-int/news/marches-mondi-aux-les-marches-boursiers-asiatiques-s-envolent-alors-que-les
                  - strong [ref=e357]: MARCHÉS MONDI AUX-Les marchés boursiers asiatiques s'envolent alors que les résultats de Micron apaisent les craintes liées à l'IA
              - generic [ref=e358]:
                - generic [ref=e359]:
                  - generic [ref=e360]:
                    - generic [ref=e361]: Reuters News
                    - generic [ref=e362]: •
                    - generic [ref=e363]: Europe
                  - generic [ref=e364]: 01:24 (UTC), 25 Juin 2026
                - link "MARCHÉS MONDI AUX-Les marchés boursiers asiatiques s'envolent alors que les résultats de Micron apaisent les craintes liées à l'IA" [ref=e365] [cursor=pointer]:
                  - /url: /fr-int/news/marches-mondi-aux-les-marches-boursiers-asiatiques-s-envolent-alors-que-les
                  - strong [ref=e366]: MARCHÉS MONDI AUX-Les marchés boursiers asiatiques s'envolent alors que les résultats de Micron apaisent les craintes liées à l'IA
        - complementary [ref=e367]
      - generic [ref=e368]:
        - generic [ref=e369]:
          - generic [ref=e371]:
            - heading "Avis et évaluations des utilisateurs" [level=2] [ref=e372]
            - generic [ref=e373]: Consultez les commentaires de nos clients, quel que soit leur niveau d'expérience.
          - generic [ref=e374]:
            - region [ref=e375]:
              - generic [ref=e377]:
                - group [ref=e378]:
                  - link [ref=e379] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e382]: 2025-07-02
                    - strong [ref=e383]: a****************
                    - paragraph [ref=e385]: Très bonne app s'agissant du Trading , c'est app est fiable et meme conseillé par les tradeur eux meme
                - group [ref=e387]:
                  - link [ref=e388] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e391]: 2025-06-29
                    - strong [ref=e392]: b*********
                    - paragraph [ref=e394]: Une bonne plateforme, répond à toutes mes exigences, une seule demande lors du retrait d'argent d'un compte de trading, j'aimerais le recevoir sur une carte bancaire plus rapidement, mais dans l'ensemble je suis satisfait.
                - group [ref=e396]:
                  - link [ref=e397] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e400]: 2025-06-26
                    - strong [ref=e401]: G*****
                    - paragraph [ref=e403]: En bourse depuis plus de 20 ans et perdu une fortune. Ici chez Capital, je ressens que je pourrai récupérer une partie grâce à l' outil qui me plaît, et l' accueil vraiment bien Les "robots" sont super accueillants et nous placent dans une position d' un avenir sympathique possible.
                - group [ref=e405]:
                  - link [ref=e406] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e409]: 2025-06-26
                    - strong [ref=e410]: t***********
                    - paragraph [ref=e412]: "Trop bien pour les débutants qui veulent se lancer dans le trading. Les spread son raisonnable et la plate-forme et facile d'accès et d'utilisation. Merci à capital.com pour tout ce qu'il a mis en place pour les débutants. Ex: cours de trading Merci infiniment."
                - group [ref=e414]:
                  - link [ref=e415] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e418]: 2025-06-10
                    - strong [ref=e419]: A******** F*******
                    - paragraph [ref=e421]: Bonjour je tenais vraiment a remercier le service client qui est actif et qui aide vraiment quand vous faites une erreur, a toute les personnes qui hésite, je vous le recommande a 100%. Un courtier très fiable et digne de cette 5 étoiles
                - group [ref=e423]:
                  - link [ref=e424] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e427]: 2025-06-09
                    - strong [ref=e428]: m**********
                    - paragraph [ref=e430]: Très facile d’utilisation, service client impeccable pas de prise de tête, je n’ai pas rencontré de problème pour ma part depuis le début...
                - group [ref=e432]:
                  - link [ref=e433] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e436]: 2025-06-15
                    - strong [ref=e437]: s*******E**********
                    - paragraph [ref=e439]: tres bien une fois bien pris en main. il manque un outil important pour valider l'étude, le market profil avec l'intégralité de ses paramètres modifiable comme son heure d'ouverture pour le près marché à 14h30 etc
                - group [ref=e441]:
                  - link [ref=e442] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e445]: 2025-05-29
                    - strong [ref=e446]: s*****
                    - paragraph [ref=e448]: C'est vraiment un très bon brokers hyper simple à manipuler
                - group [ref=e450]:
                  - link [ref=e451] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e454]: 2025-05-25
                    - strong [ref=e455]: y********i*********D******
                    - paragraph [ref=e457]: Je recommande vivement Capital.com pour la qualité de son service de courtage. L’interface est claire, rapide, et facile à utiliser, idéale autant pour les débutants que pour les traders expérimentés. Le service client est réactif et professionnel, et les spreads sont très compétitifs. Un broker fiable, transparent, et efficace. Très satisfait de mon expérience jusqu’à présent ! ✅
                - group [ref=e459]:
                  - link [ref=e460] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e463]: 2025-05-12
                    - strong [ref=e464]: N*****
                    - paragraph [ref=e466]: j'ai mis longtemps a faire impeux d'argent mais maintenant c'est bon. je recommande pour toute les personnes super appli
                - group [ref=e468]:
                  - link [ref=e469] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e472]: 2025-04-11
                    - strong [ref=e473]: F*****
                    - paragraph [ref=e475]: Bonne interface compréhensible et userfriendly. Facile à utiliser. Les actualités sont biens aussi.
                - group [ref=e477]:
                  - link [ref=e478] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e481]: 2025-01-21
                    - strong [ref=e482]: A**** C******
                    - paragraph [ref=e484]: Très bon service, rapide et à l’écoute de tout, j’ai eu un soucis de banque il m’ont très bien indiquer ce que je devais faire et tout est rentré dans l’ordre
                - group [ref=e486]:
                  - link [ref=e487] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e490]: 2025-01-02
                    - strong [ref=e491]: J B G*****
                    - paragraph [ref=e493]: Pas de problème pour moi , cash out rapide . à voir dans le temps. satisfait
                - group "1 of 13" [ref=e495]:
                  - link "2025-07-02 a**************** Très bonne app s'agissant du Trading , c'est app est fiable et meme conseillé par les tradeur eux meme" [ref=e496] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e499]: 2025-07-02
                    - strong [ref=e500]: a****************
                    - paragraph [ref=e502]: Très bonne app s'agissant du Trading , c'est app est fiable et meme conseillé par les tradeur eux meme
                - group "2 of 13" [ref=e504]:
                  - link "2025-06-29 b********* Une bonne plateforme, répond à toutes mes exigences, une seule demande lors du retrait d'argent d'un compte de trading, j'aimerais le recevoir sur une carte bancaire plus rapidement, mais dans l'ensemble je suis satisfait." [ref=e505] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e508]: 2025-06-29
                    - strong [ref=e509]: b*********
                    - paragraph [ref=e511]: Une bonne plateforme, répond à toutes mes exigences, une seule demande lors du retrait d'argent d'un compte de trading, j'aimerais le recevoir sur une carte bancaire plus rapidement, mais dans l'ensemble je suis satisfait.
                - group "3 of 13" [ref=e513]:
                  - link "2025-06-26 G***** En bourse depuis plus de 20 ans et perdu une fortune. Ici chez Capital, je ressens que je pourrai récupérer une partie grâce à l' outil qui me plaît, et l' accueil vraiment bien Les \"robots\" sont super accueillants et nous placent dans une position d' un avenir sympathique possible." [ref=e514] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=c0935a0f-70a3-433e-8fdd-13af8c75e607&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
                    - generic [ref=e517]: 2025-06-26
                    - strong [ref=e518]: G*****
                    - paragraph [ref=e520]: En bourse depuis plus de 20 ans et perdu une fortune. Ici chez Capital, je ressens que je pourrai récupérer une partie grâce à l' outil qui me plaît, et l' accueil vraiment bien Les "robots" sont super accueillants et nous placent dans une position d' un avenir sympathique possible.
                - group [ref=e522]:
                  - link [ref=e523] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e526]: 2025-06-26
                    - strong [ref=e527]: t***********
                    - paragraph [ref=e529]: "Trop bien pour les débutants qui veulent se lancer dans le trading. Les spread son raisonnable et la plate-forme et facile d'accès et d'utilisation. Merci à capital.com pour tout ce qu'il a mis en place pour les débutants. Ex: cours de trading Merci infiniment."
                - group [ref=e531]:
                  - link [ref=e532] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e535]: 2025-06-10
                    - strong [ref=e536]: A******** F*******
                    - paragraph [ref=e538]: Bonjour je tenais vraiment a remercier le service client qui est actif et qui aide vraiment quand vous faites une erreur, a toute les personnes qui hésite, je vous le recommande a 100%. Un courtier très fiable et digne de cette 5 étoiles
                - group [ref=e540]:
                  - link [ref=e541] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e544]: 2025-06-09
                    - strong [ref=e545]: m**********
                    - paragraph [ref=e547]: Très facile d’utilisation, service client impeccable pas de prise de tête, je n’ai pas rencontré de problème pour ma part depuis le début...
                - group [ref=e549]:
                  - link [ref=e550] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e553]: 2025-06-15
                    - strong [ref=e554]: s*******E**********
                    - paragraph [ref=e556]: tres bien une fois bien pris en main. il manque un outil important pour valider l'étude, le market profil avec l'intégralité de ses paramètres modifiable comme son heure d'ouverture pour le près marché à 14h30 etc
                - group [ref=e558]:
                  - link [ref=e559] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e562]: 2025-05-29
                    - strong [ref=e563]: s*****
                    - paragraph [ref=e565]: C'est vraiment un très bon brokers hyper simple à manipuler
                - group [ref=e567]:
                  - link [ref=e568] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e571]: 2025-05-25
                    - strong [ref=e572]: y********i*********D******
                    - paragraph [ref=e574]: Je recommande vivement Capital.com pour la qualité de son service de courtage. L’interface est claire, rapide, et facile à utiliser, idéale autant pour les débutants que pour les traders expérimentés. Le service client est réactif et professionnel, et les spreads sont très compétitifs. Un broker fiable, transparent, et efficace. Très satisfait de mon expérience jusqu’à présent ! ✅
                - group [ref=e576]:
                  - link [ref=e577] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=c0935a0f-70a3-433e-8fdd-13af8c75e607&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
                    - generic [ref=e580]: 2025-05-12
                    - strong [ref=e581]: N*****
                    - paragraph [ref=e583]: j'ai mis longtemps a faire impeux d'argent mais maintenant c'est bon. je recommande pour toute les personnes super appli
                - group [ref=e585]:
                  - link [ref=e586] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e589]: 2025-04-11
                    - strong [ref=e590]: F*****
                    - paragraph [ref=e592]: Bonne interface compréhensible et userfriendly. Facile à utiliser. Les actualités sont biens aussi.
                - group [ref=e594]:
                  - link [ref=e595] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e598]: 2025-01-21
                    - strong [ref=e599]: A**** C******
                    - paragraph [ref=e601]: Très bon service, rapide et à l’écoute de tout, j’ai eu un soucis de banque il m’ont très bien indiquer ce que je devais faire et tout est rentré dans l’ordre
                - group [ref=e603]:
                  - link [ref=e604] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=c0935a0f-70a3-433e-8fdd-13af8c75e607&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
                    - generic [ref=e607]: 2025-01-02
                    - strong [ref=e608]: J B G*****
                    - paragraph [ref=e610]: Pas de problème pour moi , cash out rapide . à voir dans le temps. satisfait
                - group [ref=e612]:
                  - link [ref=e613] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e616]: 2025-07-02
                    - strong [ref=e617]: a****************
                    - paragraph [ref=e619]: Très bonne app s'agissant du Trading , c'est app est fiable et meme conseillé par les tradeur eux meme
                - group [ref=e621]:
                  - link [ref=e622] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e625]: 2025-06-29
                    - strong [ref=e626]: b*********
                    - paragraph [ref=e628]: Une bonne plateforme, répond à toutes mes exigences, une seule demande lors du retrait d'argent d'un compte de trading, j'aimerais le recevoir sur une carte bancaire plus rapidement, mais dans l'ensemble je suis satisfait.
                - group [ref=e630]:
                  - link [ref=e631] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e634]: 2025-06-26
                    - strong [ref=e635]: G*****
                    - paragraph [ref=e637]: En bourse depuis plus de 20 ans et perdu une fortune. Ici chez Capital, je ressens que je pourrai récupérer une partie grâce à l' outil qui me plaît, et l' accueil vraiment bien Les "robots" sont super accueillants et nous placent dans une position d' un avenir sympathique possible.
                - group [ref=e639]:
                  - link [ref=e640] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e643]: 2025-06-26
                    - strong [ref=e644]: t***********
                    - paragraph [ref=e646]: "Trop bien pour les débutants qui veulent se lancer dans le trading. Les spread son raisonnable et la plate-forme et facile d'accès et d'utilisation. Merci à capital.com pour tout ce qu'il a mis en place pour les débutants. Ex: cours de trading Merci infiniment."
                - group [ref=e648]:
                  - link [ref=e649] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e652]: 2025-06-10
                    - strong [ref=e653]: A******** F*******
                    - paragraph [ref=e655]: Bonjour je tenais vraiment a remercier le service client qui est actif et qui aide vraiment quand vous faites une erreur, a toute les personnes qui hésite, je vous le recommande a 100%. Un courtier très fiable et digne de cette 5 étoiles
                - group [ref=e657]:
                  - link [ref=e658] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e661]: 2025-06-09
                    - strong [ref=e662]: m**********
                    - paragraph [ref=e664]: Très facile d’utilisation, service client impeccable pas de prise de tête, je n’ai pas rencontré de problème pour ma part depuis le début...
                - group [ref=e666]:
                  - link [ref=e667] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e670]: 2025-06-15
                    - strong [ref=e671]: s*******E**********
                    - paragraph [ref=e673]: tres bien une fois bien pris en main. il manque un outil important pour valider l'étude, le market profil avec l'intégralité de ses paramètres modifiable comme son heure d'ouverture pour le près marché à 14h30 etc
                - group [ref=e675]:
                  - link [ref=e676] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e679]: 2025-05-29
                    - strong [ref=e680]: s*****
                    - paragraph [ref=e682]: C'est vraiment un très bon brokers hyper simple à manipuler
                - group [ref=e684]:
                  - link [ref=e685] [cursor=pointer]:
                    - /url: https://www.tradingview.com/broker/Capitalcom/
                    - generic [ref=e688]: 2025-05-25
                    - strong [ref=e689]: y********i*********D******
                    - paragraph [ref=e691]: Je recommande vivement Capital.com pour la qualité de son service de courtage. L’interface est claire, rapide, et facile à utiliser, idéale autant pour les débutants que pour les traders expérimentés. Le service client est réactif et professionnel, et les spreads sont très compétitifs. Un broker fiable, transparent, et efficace. Très satisfait de mon expérience jusqu’à présent ! ✅
                - group [ref=e693]:
                  - link [ref=e694] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e697]: 2025-05-12
                    - strong [ref=e698]: N*****
                    - paragraph [ref=e700]: j'ai mis longtemps a faire impeux d'argent mais maintenant c'est bon. je recommande pour toute les personnes super appli
                - group [ref=e702]:
                  - link [ref=e703] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e706]: 2025-04-11
                    - strong [ref=e707]: F*****
                    - paragraph [ref=e709]: Bonne interface compréhensible et userfriendly. Facile à utiliser. Les actualités sont biens aussi.
                - group [ref=e711]:
                  - link [ref=e712] [cursor=pointer]:
                    - /url: https://www.trustpilot.com/review/capital.com
                    - generic [ref=e715]: 2025-01-21
                    - strong [ref=e716]: A**** C******
                    - paragraph [ref=e718]: Très bon service, rapide et à l’écoute de tout, j’ai eu un soucis de banque il m’ont très bien indiquer ce que je devais faire et tout est rentré dans l’ordre
                - group [ref=e720]:
                  - link [ref=e721] [cursor=pointer]:
                    - /url: https://app.appsflyer.com/com.capital.trading
                    - generic [ref=e724]: 2025-01-02
                    - strong [ref=e725]: J B G*****
                    - paragraph [ref=e727]: Pas de problème pour moi , cash out rapide . à voir dans le temps. satisfait
              - generic:
                - button "Go to last slide" [ref=e729] [cursor=pointer]
                - button "Next slide" [ref=e730] [cursor=pointer]
            - paragraph [ref=e731]: Affichage de nos avis 4 et 5 étoiles. Les détails spécifiques des utilisateurs ont été intentionnellement anonymisés pour protéger leur vie privée conformément aux exigences du RGPD.
          - generic [ref=e733]:
            - link "4.6" [ref=e734] [cursor=pointer]:
              - /url: https://www.tradingview.com/broker/Capitalcom/
              - strong [ref=e737]: "4.6"
            - link "Notes et Avis 4.7" [ref=e740] [cursor=pointer]:
              - /url: https://app.appsflyer.com/id1230088754?cp_device_id=c0935a0f-70a3-433e-8fdd-13af8c75e607&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
              - strong [ref=e742]: Notes et Avis
              - strong [ref=e744]: "4.7"
            - link "Notes et Avis 4.7" [ref=e747] [cursor=pointer]:
              - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=c0935a0f-70a3-433e-8fdd-13af8c75e607&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
              - strong [ref=e749]: Notes et Avis
              - strong [ref=e751]: "4.7"
            - link "4.6" [ref=e754] [cursor=pointer]:
              - /url: https://www.trustpilot.com/review/capital.com
              - strong [ref=e757]: "4.6"
        - generic [ref=e761]:
          - heading "Trois étapes pour commencer" [level=2] [ref=e763]
          - generic [ref=e764]:
            - button [ref=e766] [cursor=pointer]
            - generic [ref=e769]: 1. Créez votre compte (sous réserve d'éligibilité)
            - generic [ref=e770]: 2. Déposez à votre convenance
            - generic [ref=e771]: 3. Tradez quand vous êtes prêt
  - contentinfo [ref=e773]:
    - generic [ref=e774]:
      - link [ref=e775] [cursor=pointer]:
        - /url: /fr-int
        - img [ref=e776]
      - generic [ref=e780]:
        - link [ref=e781] [cursor=pointer]:
          - /url: https://twitter.com/capitalcom
        - link [ref=e782] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/capital.com/
        - link [ref=e783] [cursor=pointer]:
          - /url: https://www.instagram.com/capitalcom/
        - link [ref=e784] [cursor=pointer]:
          - /url: https://www.tiktok.com/@capitalcom_international
        - link [ref=e785] [cursor=pointer]:
          - /url: https://www.facebook.com/capitalcom/
        - link [ref=e786] [cursor=pointer]:
          - /url: https://www.reddit.com/r/capitalcom/
      - generic [ref=e787]:
        - link [ref=e788] [cursor=pointer]:
          - /url: https://app.appsflyer.com/id1230088754?cp_device_id=c0935a0f-70a3-433e-8fdd-13af8c75e607&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e789] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading?cp_device_id=c0935a0f-70a3-433e-8fdd-13af8c75e607&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
        - link [ref=e790] [cursor=pointer]:
          - /url: https://app.appsflyer.com/com.capital.trading.huawei-huawei?cp_device_id=c0935a0f-70a3-433e-8fdd-13af8c75e607&af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&af_ss_ui=true
    - generic [ref=e791]:
      - generic [ref=e792]:
        - generic [ref=e793]:
          - generic [ref=e794]:
            - generic [ref=e795]: "Pays / Région:"
            - button "Côte d'Ivoire" [ref=e796] [cursor=pointer]:
              - generic [ref=e798]: Côte d'Ivoire
          - generic [ref=e799]: •
          - generic [ref=e800]:
            - generic [ref=e801]: "Langue:"
            - button "French" [ref=e802] [cursor=pointer]:
              - generic [ref=e803]: French
        - generic [ref=e804]:
          - generic [ref=e805]: "Vous pouvez également nous contacter :"
          - link "+442080899989" [ref=e808] [cursor=pointer]:
            - /url: tel:+442080899989
            - strong [ref=e809]: "+442080899989"
            - strong
          - generic [ref=e810]: •
          - link "support@capital.com" [ref=e812] [cursor=pointer]:
            - /url: mailto:support@capital.com
            - strong [ref=e813]: support@capital.com
      - generic [ref=e814]:
        - generic [ref=e815]:
          - strong [ref=e817]: Trading
          - generic [ref=e818]:
            - generic [ref=e819]:
              - generic [ref=e820]: Trading
              - generic [ref=e821]:
                - generic [ref=e822]:
                  - link "Trading de CFD" [ref=e823] [cursor=pointer]:
                    - /url: /fr-int/ways-to-trade/cfd-trading
                  - link "Calculateur de trading CFD" [ref=e826] [cursor=pointer]:
                    - /url: /fr-int/ways-to-trade/cfd-trading/cfd-calculator
                - link "Trading démo" [ref=e828] [cursor=pointer]:
                  - /url: /fr-int/trading-platforms/demo-account
                - link "Professionnel" [ref=e830] [cursor=pointer]:
                  - /url: /fr-int/professional
                - link "Remises pour tous les traders" [ref=e832] [cursor=pointer]:
                  - /url: /fr-int/ways-to-trade/rebates
            - generic [ref=e833]:
              - generic [ref=e834]: Plateformes
              - generic [ref=e835]:
                - link "Plateforme web" [ref=e837] [cursor=pointer]:
                  - /url: /fr-int/trading-platforms/web-platform
                - link "Applications mobiles" [ref=e839] [cursor=pointer]:
                  - /url: /fr-int/trading-platforms/mobile-apps
                - link "TradingView" [ref=e841] [cursor=pointer]:
                  - /url: /fr-int/trading-platforms/trading-view
                - link "MT4" [ref=e843] [cursor=pointer]:
                  - /url: /fr-int/trading-platforms/mt4
            - generic [ref=e844]:
              - generic [ref=e845]: Apprendre
              - generic [ref=e846]:
                - link "Stratégies de trading" [ref=e848] [cursor=pointer]:
                  - /url: /fr-int/learn/trading-strategies
                - link "Analyse technique" [ref=e850] [cursor=pointer]:
                  - /url: /fr-int/learn/technical-analysis
                - link "La psychologie du trading" [ref=e852] [cursor=pointer]:
                  - /url: /fr-int/learn/trading-psychology
                - generic [ref=e853]:
                  - link "Apprendre" [ref=e854] [cursor=pointer]:
                    - /url: /fr-int/learn
                  - link "Trading d’IPO" [ref=e857] [cursor=pointer]:
                    - /url: /fr-int/learn/ipo
        - generic [ref=e858]:
          - strong [ref=e860]: Marchés
          - generic [ref=e861]:
            - generic [ref=e862]:
              - generic [ref=e863]: Nos marchés
              - generic [ref=e864]:
                - link "Les marchés" [ref=e866] [cursor=pointer]:
                  - /url: /fr-int/markets
                - link "Actions" [ref=e868] [cursor=pointer]:
                  - /url: /fr-int/markets/shares
                - link "Forex" [ref=e870] [cursor=pointer]:
                  - /url: /fr-int/markets/forex
                - link "Indices" [ref=e872] [cursor=pointer]:
                  - /url: /fr-int/markets/indices
                - link "Matières premières" [ref=e874] [cursor=pointer]:
                  - /url: /fr-int/markets/commodities
                - link "Cryptomonnaies" [ref=e876] [cursor=pointer]:
                  - /url: /fr-int/markets/cryptocurrencies
                - link "Obligations" [ref=e878] [cursor=pointer]:
                  - /url: /fr-int/markets/bonds
                - link "Taux d’intérêt" [ref=e880] [cursor=pointer]:
                  - /url: /fr-int/markets/interest-rates
            - generic [ref=e881]:
              - generic [ref=e882]: Aperçus du marché
              - link "Analyse du marché" [ref=e885] [cursor=pointer]:
                - /url: /fr-int/analysis
        - link "Tarification" [ref=e888] [cursor=pointer]:
          - /url: /fr-int/ways-to-trade/fees-and-charges
          - strong [ref=e889]: Tarification
        - generic [ref=e890]:
          - strong [ref=e892]: À propos de nous
          - generic [ref=e893]:
            - generic [ref=e894]:
              - generic [ref=e895]: Qui nous sommes
              - generic [ref=e896]:
                - generic [ref=e897]:
                  - link "À propos" [ref=e898] [cursor=pointer]:
                    - /url: /fr-int/about-us
                  - link "Viktor Prokopenya" [ref=e901] [cursor=pointer]:
                    - /url: /fr-int/about-us/viktor-prokopenya
                - link "Nos bureaux" [ref=e903] [cursor=pointer]:
                  - /url: /fr-int/about-us/our-offices
                - link "Capital.com est-il sûr ?" [ref=e905] [cursor=pointer]:
                  - /url: /fr-int/security-measures
                - link "Notre modèle économique" [ref=e907] [cursor=pointer]:
                  - /url: /fr-int/about-us/how-capital-makes-money
            - generic [ref=e908]:
              - generic [ref=e909]: Travaillez avec nous
              - generic [ref=e910]:
                - link "Programmes de partenariat" [ref=e912] [cursor=pointer]:
                  - /url: /fr-int/partnerships
                - link "Parrainez un(e) ami(e)" [ref=e914] [cursor=pointer]:
                  - /url: /fr-int/refer-a-friend
            - generic [ref=e915]:
              - generic [ref=e916]: Aide
              - generic [ref=e917]:
                - link "Aide" [ref=e919] [cursor=pointer]:
                  - /url: /fr-int/help
                - link "Vulnérabilité du client" [ref=e921] [cursor=pointer]:
                  - /url: /fr-int/help/client-vulnerability
                - link "Nous contacter" [ref=e923] [cursor=pointer]:
                  - /url: /fr-int/contact-us
            - generic [ref=e924]:
              - generic [ref=e925]: Mentions légales
              - generic [ref=e926]:
                - link "Conditions générales et politiques" [ref=e928] [cursor=pointer]:
                  - /url: /fr-int/terms-and-policies
                - link "Réclamations" [ref=e930] [cursor=pointer]:
                  - /url: /fr-int/help/complaints
    - generic [ref=e932]:
      - paragraph [ref=e933]:
        - text: Les CFD sont des instruments complexes et présentent un risque élevé de perte rapide en raison de l\'effet de levier.
        - generic [ref=e934]:
          - strong [ref=e935]: 78.48 % des comptes d’investisseurs particuliers perdent de l’argent en tradant des CFD avec ce fournisseur.
          - text: Vous devez vous demander si vous comprenez le fonctionnement des CFD et si vous pouvez vous permettre de prendre le risque élevé de perdre votre argent.
      - paragraph
      - paragraph [ref=e936]: "Capital Com Online Investments Ltd est une société à responsabilité limitée portant le numéro d\\'enregistrement 209236B. Capital Com Online Investments Ltd est une société enregistrée dans le Commonwealth des Bahamas et autorisée par la Commission des valeurs mobilières des Bahamas sous le numéro de licence SIA-F245. Le bureau enregistré de la société se situe au #3 Bayside Executive Park, Blake Road et West Bay Street, P. O. Box CB 13012, Nassau, Bahamas."
    - generic [ref=e937]:
      - paragraph [ref=e938]: © 2026 Capital Com Online Investments Ltd
      - generic [ref=e939]:
        - link "Plan du site" [ref=e940] [cursor=pointer]:
          - /url: /fr-int/sitemap
        - link "Paramètres des cookies" [ref=e941] [cursor=pointer]:
          - /url: ""
        - link:
          - /url: /fr-int
        - link "Conditions Générales et Politiques" [ref=e942] [cursor=pointer]:
          - /url: /fr-int/terms-and-policies
        - link "Procédure de réclamations (SCB)" [ref=e943] [cursor=pointer]:
          - /url: /fr-int/help/complaints
  - button [ref=e944] [cursor=pointer]
  - alert [ref=e946]: Graphique Des Prix Actuels du Gold | Commerce Du Gold Spot | Capital.com
```

# Test source

```ts
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
  92  |     // console.log("ACTION:", actionName);
  93  |     // console.log("URL:", this.page.url());
  94  |     console.log("PAGE CLOSED:", this.page.isClosed());
  95  | 
  96  |     const count = await locator.count();
  97  |     console.log(actionName, count);
  98  | 
  99  |     if (action.optional && count === 0) {
  100 |       return { skipped: true };
  101 |     }
  102 | 
> 103 |     await locator.waitFor({
      |                   ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  104 |       state: "visible",
  105 |       // timeout: 5000,
  106 |     });
  107 | 
  108 |     await locator.click();
  109 | 
  110 |     return { skipped: false, locator };
  111 |   }
  112 | }
  113 | 
```