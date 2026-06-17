# Playwright Test Filters

The framework supports flexible filtering by:

- License
- Language
- Browser
- User State

---

# Run by License

### Single License

TEST_LICENSE=ASIC npx playwright test

Available:

- FCA
- ASIC
- CMA
- SCB
- CySEC

---

### Multiple Licenses

TEST_LICENSE=FCA,ASIC npx playwright test

---

# Run by Language

### Multiple Languages

TEST_LANG=en,ru npx playwright test

---

### Chinese Languages

Run all Chinese variants:
TEST_LANG=zh npx playwright test

Run specific variants:
TEST_LANG=zh-hant,zh-hans npx playwright test

---

# Run by Browser

TEST_BROWSER=chromium npx playwright test

Available:

- chromium
- webkit

---

# Run by User State

TEST_USER=authorised,unauthorised npx playwright test

Available:

- authorised
- unauthorised
- unregistered

---

# Mixed Filters

TEST_LICENSE=CySEC TEST_LANG=fr,de TEST_USER=unauthorised TEST_BROWSER=chromium npx playwright test
TEST_LICENSE=CYSEC TEST_LANG=de-de TEST_USER=authorised TEST_BROWSER=chromium npx playwright test --headed
TEST_BROWSER=chromium TEST_USER=authorised npx playwright test

---

# Run Everything

TEST_BROWSER=chromium npx playwright test tests/auth +

TEST_LICENSE=FCA TEST_BROWSER=chromium TEST_USER=authorised TEST_CTA=heroBanner TEST_PAGE=markets npx playwright test +

TEST_LICENSE=ASIC TEST_BROWSER=chromium TEST_CTA=marketsBlock TEST_PAGE=markets npx playwright test -

TEST_LICENSE=ASIC TEST_BROWSER=chromium TEST_PAGE=marketAnalysis TEST_CTA=mostTradedMarketsBlock npx playwright test +

TEST_LICENSE=SCB TEST_LANG=en,de,zh TEST_BROWSER=chromium TEST_PAGE=financeNews npx playwright test -

TEST_LICENSE=SCB TEST_LANG=en TEST_BROWSER=chromium TEST_CTA=readyToJoinBlock npx playwright test +

TEST_LICENSE=SCB,FCA,CYSEC TEST_LANG=en TEST_BROWSER=chromium TEST_CTA=readyToJoinBlock npx playwright test +
TEST_LICENSE=SCB,FCA,CYSEC TEST_LANG=en TEST_BROWSER=chromium TEST_CTA=readyToJoinBlock npx playwright test --list +

//---------------------------------- ###### Runing: FCA

# TEST_CTA=heroBanner

TEST_LICENSE=FCA TEST_BROWSER=chromium TEST_USER=authorised TEST_CTA=heroBanner npx playwright test +++
// 8 = (1 lang \* 7 pages (except financeNews, cryptocurrencies (pages is not exist), marketAnalysis, marketPricind (don't have this button)) + 1 auth)

TEST_LICENSE=FCA TEST_BROWSER=chromium TEST_USER=unauthorised,unregistered TEST_CTA=heroBanner npx playwright test +++
// 15 = 7 \* 2 + 1 (auth)

# TEST_CTA=builtAccountBlock

TEST_LICENSE=FCA TEST_BROWSER=chromium TEST_USER=authorised TEST_CTA=builtAccountBlock npx playwright test +++
// 2 = (1 lang \* 1 page (only markets page)) + 1

TEST_LICENSE=FCA TEST_BROWSER=chromium TEST_USER=unauthorised,unregistered TEST_CTA=builtAccountBlock npx playwright test +++
// 3 = (1 lang \* 2) + 1

# TEST_CTA=mostTradedMarketsBlock

TEST_LICENSE=FCA TEST_BROWSER=chromium TEST_USER=authorised TEST_CTA=mostTradedMarketsBlock npx playwright test +++
// 1 = (1 lang \* 0 page + 1 auth)

TEST_LICENSE=FCA TEST_BROWSER=chromium TEST_USER=unauthorised,unregistered TEST_CTA=mostTradedMarketsBlock npx playwright test +++
// 1 = 0 \* 2 + 1

# TEST_CTA=readyToJoinBlock

TEST_LICENSE=FCA TEST_BROWSER=chromium TEST_USER=authorised TEST_CTA=readyToJoinBlock npx playwright test +++
// 2 = (1 lang \* 1 page (marketPricing) + 1 auth)

TEST_LICENSE=FCA TEST_BROWSER=chromium TEST_USER=unauthorised,unregistered TEST_CTA=readyToJoinBlock npx playwright test +++
// 3 = (1 \* 2 + 1 auth)

# TEST_CTA=marketsBlock

TEST_LICENSE=FCA TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=addToFavouriteBtn npx playwright test +++
// 8 = 7 (pages, cryptocurrensis page don't exist) + 1 (auth)

TEST_LICENSE=FCA TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=longPositionGoToPlatformBtn npx playwright test +++
// 8 = 7 (pages, cryptocurrensis page don't exist) + 1 (auth)

TEST_LICENSE=FCA TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=shortPositionGoToPlatformBtn npx playwright test +++
// 8 = 7 (pages, cryptocurrensis page don't exist) + 1 (auth)

TEST_LICENSE=FCA TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=viewDetailedChartBtn npx playwright test +++
// 8 = 7 (pages, cryptocurrensis page don't exist) + 1 (auth)
TEST_LICENSE=FCA TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=sellBtn npx playwright test +++
// 8 = 7 (pages, cryptocurrensis page don't exist) + 1 (auth)
TEST_LICENSE=FCA TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=buyBtn npx playwright test +++
// 8 = 7 (pages, cryptocurrensis page don't exist) + 1 (auth)
TEST_LICENSE=FCA TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=alertBtn npx playwright test +++
// 8 = 7 (pages, cryptocurrensis page don't exist) + 1 (auth)
TEST_LICENSE=FCA TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=tradedBtn npx playwright test +++
// 1 = 0 (buttons don't exist for FCA) + 1 (auth)
TEST_LICENSE=FCA TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=readyToJoinSignUpBtn npx playwright test +++
// 8 = 7 (pages, cryptocurrensis page don't exist) + 1 (auth)

// 57 = 7 (pages) \* 8 (actions, tradedBtn don't exist) \* 2 (userState) = 56\*3 (userState) + 1 (auth) = 169 +++

// TEST_LICENSE=FCA TEST_BROWSER=chromium npx playwright test --list === 196

//---------------------------------- ###### Runing: ASIC

# TEST_CTA=heroBanner

TEST_LICENSE=ASIC TEST_BROWSER=chromium TEST_USER=authorised TEST_CTA=heroBanner npx playwright test +++
// 9 = (1 lang \* 8 pages (except financeNews (page is not exist), marketAnalysis, marketPricind (don't have this button)) + 1 auth)

TEST_LICENSE=ASIC TEST_BROWSER=chromium TEST_USER=unauthorised,unregistered TEST_CTA=heroBanner npx playwright test +++
// 17 = 8 \* 2 + 1 (auth)

# TEST_CTA=builtAccountBlock

TEST_LICENSE=FCA TEST_BROWSER=chromium TEST_USER=authorised TEST_CTA=builtAccountBlock npx playwright test +++
// 2 = (1 lang \* 1 page (only markets page)) + 1

TEST_LICENSE=FCA TEST_BROWSER=chromium TEST_USER=unauthorised,unregistered TEST_CTA=builtAccountBlock npx playwright test +++
// 3 = (1 lang \* 2) + 1

# TEST_CTA=mostTradedMarketsBlock

TEST_LICENSE=ASIC TEST_BROWSER=chromium TEST_USER=authorised TEST_CTA=mostTradedMarketsBlock npx playwright test +++
// 2 = (1 lang \* 1 page (marketAnalysis) + 1 auth)

TEST_LICENSE=ASIC TEST_BROWSER=chromium TEST_USER=unauthorised,unregistered TEST_CTA=mostTradedMarketsBlock npx playwright test +++
// 3 = 1 \* 2 + 1

# TEST_CTA=readyToJoinBlock

TEST_LICENSE=ASIC TEST_BROWSER=chromium TEST_USER=authorised TEST_CTA=readyToJoinBlock npx playwright test +++
// 2 = (1 lang \* 0 page + 1 auth)

TEST_LICENSE=ASIC TEST_BROWSER=chromium TEST_USER=unauthorised,unregistered TEST_CTA=readyToJoinBlock npx playwright test +++
// 3 = (0 \* 2 + 1 auth)

# TEST_CTA=marketsBlock

TEST_LICENSE=ASIC TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=addToFavouriteBtn npx playwright test +++
// 9 = 8 (pages) + 1 (auth)
TEST_LICENSE=ASIC TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=longPositionGoToPlatformBtn npx playwright test
// 9 = 8 (pages) + 1 (auth)
TEST_LICENSE=ASIC TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=shortPositionGoToPlatformBtn npx playwright test
// 9 = 8 (pages) + 1 (auth)
TEST_LICENSE=ASIC TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=viewDetailedChartBtn npx playwright test
// 9 = 8 (pages) + 1 (auth)
TEST_LICENSE=ASIC TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=sellBtn npx playwright test
// 9 = 8 (pages) + 1 (auth)
TEST_LICENSE=ASIC TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=buyBtn npx playwright test
// 9 = 8 (pages) + 1 (auth)
TEST_LICENSE=ASIC TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=alertBtn npx playwright test
// 9 = 8 (pages) + 1 (auth)
TEST_LICENSE=ASIC TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=tradedBtn npx playwright test +++
// 9 = 8 (pages) + 1 (auth)
TEST_LICENSE=ASIC TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=readyToJoinSignUpBtn npx playwright test +++
// 9 = 8 (pages) + 1 (auth)

// 73 = 8 (pages) \* 9 (actions) \* 2 (userState) = 72\*2 + 1 (auth) = 14572

// TEST_LICENSE=ASIC TEST_BROWSER=chromium npx playwright test --list === 247

//---------------------------------- ###### Runing: CMA

# TEST_CTA=heroBanner

TEST_LICENSE=CMA TEST_BROWSER=chromium TEST_USER=authorised TEST_CTA=heroBanner npx playwright test +++
// 17 = (2 lang \* 8 pages (except financeNews, marketPricing(pages not exist on SCB) and marketAnalysis (not this button)) + 1 auth)

TEST_LICENSE=CMA TEST_BROWSER=chromium TEST_USER=unauthorised,unregistered TEST_CTA=heroBanner npx playwright test +++
// 33 = 16 \* 2 + 1 (auth)

# TEST_CTA=builtAccountBlock

TEST_LICENSE=CMA TEST_BROWSER=chromium TEST_USER=authorised TEST_CTA=builtAccountBlock npx playwright test +++
// 3 = (2 lang \* 1 page (only markets page)) + 1

TEST_LICENSE=CMA TEST_BROWSER=chromium TEST_USER=unauthorised,unregistered TEST_CTA=builtAccountBlock npx playwright test +++
// 5 = (2 lang \* 2) + 1

# TEST_CTA=mostTradedMarketsBlock

TEST_LICENSE=CMA TEST_BROWSER=chromium TEST_USER=authorised TEST_CTA=mostTradedMarketsBlock npx playwright test +++
// 3 = (2 lang \* 1 page (marketAnalysis) + 1 auth)

TEST_LICENSE=CMA TEST_BROWSER=chromium TEST_USER=unauthorised,unregistered TEST_CTA=mostTradedMarketsBlock npx playwright test
// 5 = 2 \* 2 + 1

# TEST_CTA=readyToJoinBlock

TEST_LICENSE=CMA TEST_BROWSER=chromium TEST_USER=authorised TEST_CTA=readyToJoinBlock npx playwright test ---
// 1 = (2 lang \* 0 page + 1 auth)

TEST_LICENSE=CMA TEST_BROWSER=chromium TEST_USER=unauthorised,unregistered TEST_CTA=readyToJoinBlock npx playwright test ---
// 1 = (0 \* 2 + 1 auth)

# TEST_CTA=marketsBlock

TEST_LICENSE=CMA TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=addToFavouriteBtn npx playwright test +++
// 17 = 8 (pages) \* 2 + 1 (auth)
TEST_LICENSE=CMA TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=longPositionGoToPlatformBtn npx playwright test
// 17 = 8 (pages) \* 2 + 1 (auth)
TEST_LICENSE=CMA TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=shortPositionGoToPlatformBtn npx playwright test
// 17 = 8 (pages) \* 2 + 1 (auth)
TEST_LICENSE=CMA TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=viewDetailedChartBtn npx playwright test
// 17 = 8 (pages) \* 2 + 1 (auth)
TEST_LICENSE=CMA TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=sellBtn npx playwright test
// 17 = 8 (pages) \* 2 + 1 (auth)
TEST_LICENSE=CMA TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=buyBtn npx playwright test
// 17 = 8 (pages) \* 2 + 1 (auth)
TEST_LICENSE=CMA TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=alertBtn npx playwright test
// 17 = 2 (lang) \* 8 (pages) + 1 (auth)
TEST_LICENSE=CMA TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=tradedBtn npx playwright test +++
// 17 = 2 (lang) \* 8 (pages) + 1 (auth)
TEST_LICENSE=CMA TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=readyToJoinSignUpBtn npx playwright test +++
// 17 = 2 (lang) \* 8 (pages) + 1 (auth)

// 73 = 8 (pages) \* 9 (actions) \* 2 (userState) = 72\*2 + 1 (auth) = 145

TEST_LICENSE=CMA TEST_BROWSER=chromium npx playwright test --list === 493

//---------------------------------- ###### Runing: SCB

# TEST_CTA=heroBanner

TEST_LICENSE=SCB TEST_BROWSER=chromium TEST_USER=authorised TEST_CTA=heroBanner npx playwright test +++
// 81 = (10 lang \* 8 pages (except financeNews, marketAnalysis, marketPricing(page not exist on SCB)) + 1 auth)

TEST_LICENSE=SCB TEST_BROWSER=chromium TEST_USER=unauthorised,unregistered TEST_CTA=heroBanner npx playwright test +++
// 161 = 80 \* 2 + 1 (auth)

# TEST_CTA=builtAccountBlock

TEST_LICENSE=SCB TEST_BROWSER=chromium TEST_USER=authorised TEST_CTA=builtAccountBlock npx playwright test +++
// 11 = (10 lang \* 1 page (only markets page)) + 1

TEST_LICENSE=SCB TEST_BROWSER=chromium TEST_USER=unauthorised,unregistered TEST_CTA=builtAccountBlock npx playwright test +++
// 21 = (10 lang \* 2) + 1

# TEST_CTA=mostTradedMarketsBlock

TEST_LICENSE=SCB TEST_BROWSER=chromium TEST_USER=authorised TEST_CTA=mostTradedMarketsBlock npx playwright test +++
// 10 = (8 lang (except MN,VI) \* 1 page (marketAnalysis) + (1 lang (EN) \* 1 page (financeNews)) + 1 auth)

TEST_LICENSE=SCB TEST_BROWSER=chromium TEST_USER=unauthorised,unregistered TEST_CTA=mostTradedMarketsBlock npx playwright test
// 19 = 9 \* 2 + 1

// 33 skipped (because MN,VI don't have marketAnalysis page and financeNews page only EN)

# TEST_CTA=readyToJoinBlock

TEST_LICENSE=SCB TEST_BROWSER=chromium TEST_USER=authorised TEST_CTA=readyToJoinBlock npx playwright test ---
// 9 = (8 lang (except MN,VI) \* 1 page (marketAnalysis) + 1 auth)

TEST_LICENSE=SCB TEST_BROWSER=chromium TEST_USER=unauthorised,unregistered TEST_CTA=readyToJoinBlock npx playwright test +++
// 17 = (8 \* 2 + 1 auth)

6 skipped (because MN,VI don't have marketAnalysis page)

# TEST_CTA=marketsBlock

TEST_LICENSE=SCB TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=addToFavouriteBtn npx playwright test +++
// 81 = 10 (lang) \* 8 (pages) + 1 (auth)
TEST_LICENSE=SCB TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=longPositionGoToPlatformBtn npx playwright test
// 81 = 10 (lang) \* 8 (pages) + 1 (auth)
TEST_LICENSE=SCB TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=shortPositionGoToPlatformBtn npx playwright test
// 81 = 10 (lang) \* 8 (pages) + 1 (auth)
TEST_LICENSE=SCB TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=viewDetailedChartBtn npx playwright test
// 81 = 10 (lang) \* 8 (pages) + 1 (auth)
TEST_LICENSE=SCB TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=sellBtn npx playwright test
// 81 = 10 (lang) \* 8 (pages) + 1 (auth)
TEST_LICENSE=SCB TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=buyBtn npx playwright test
// 81 = 10 (lang) \* 8 (pages) + 1 (auth)
TEST_LICENSE=SCB TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=alertBtn npx playwright test
// 81 = 10 (lang) \* 8 (pages) + 1 (auth)
TEST_LICENSE=SCB TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=tradedBtn npx playwright test +++
// 81 = 10 (lang) \* 8 (pages) + 1 (auth)
TEST_LICENSE=SCB TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=readyToJoinSignUpBtn npx playwright test +++
// 81 = 10 (lang) \* 8 (pages) + 1 (auth)

// 721 = 10 (lang) \* 8 (pages) \* 9 (actions) = 720 + 1 (auth) // for one userState 2161 - 3 UserState

TEST_LICENSE=SCB TEST_BROWSER=chromium npx playwright test --list === 2521 = 2482 and 39 - skipped (because MN,VI don't have marketAnalysis page and financeNews page only EN)

//---------------------------------- ###### Runing: CySEC

# TEST_CTA=heroBanner

TEST_LICENSE=CYSEC TEST_BROWSER=chromium TEST_USER=authorised TEST_CTA=heroBanner npx playwright test +++
// 81 = (10 lang \* 8 pages (except financeNews, marketPricing, marketAnalysis(don't have this button)) + 1 auth)

TEST_LICENSE=CySEC TEST_BROWSER=chromium TEST_USER=unauthorised,unregistered TEST_CTA=heroBanner npx playwright test +++
// 161 = 80 \* 2 + 1 (auth)

# TEST_CTA=builtAccountBlock

TEST_LICENSE=CYSEC TEST_BROWSER=chromium TEST_USER=authorised TEST_CTA=builtAccountBlock npx playwright test +++
// 11 = (10 lang \* 1 page (only markets page)) + 1

TEST_LICENSE=CYSEC TEST_BROWSER=chromium TEST_USER=unauthorised,unregistered TEST_CTA=builtAccountBlock npx playwright test +++
// 21 = (10 lang \* 2) + 1

# TEST_CTA=mostTradedMarketsBlock

TEST_LICENSE=CYSEC TEST_BROWSER=chromium TEST_USER=authorised TEST_CTA=mostTradedMarketsBlock npx playwright test +++
// 11 = (10 lang \* 1 page (marketAnalysis) + 1 auth)

TEST_LICENSE=CYSEC TEST_BROWSER=chromium TEST_USER=unauthorised,unregistered TEST_CTA=mostTradedMarketsBlock npx playwright test
// 21 = 10 \* 2 + 1 +++

# TEST_CTA=readyToJoinBlock

TEST_LICENSE=CYSEC TEST_BROWSER=chromium TEST_USER=authorised TEST_CTA=readyToJoinBlock npx playwright test +++
// 11 = (10 lang \* 1 page (marketPricing) + 1 auth)

TEST_LICENSE=CYSEC TEST_BROWSER=chromium TEST_USER=unauthorised,unregistered TEST_CTA=readyToJoinBlock npx playwright test +++
// 21 = (10 \* 2 + 1 auth)

# TEST_CTA=marketsBlock

TEST_LICENSE=CYSEC TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=addToFavouriteBtn npx playwright test +++
// 81 = 10 (lang) \* 8 (pages) + 1 (auth)
TEST_LICENSE=CYSEC TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=longPositionGoToPlatformBtn npx playwright test
// 81 = 10 (lang) \* 8 (pages) + 1 (auth)
TEST_LICENSE=CYSEC TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=shortPositionGoToPlatformBtn npx playwright test
// 81 = 10 (lang) \* 8 (pages) + 1 (auth)
TEST_LICENSE=CYSEC TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=viewDetailedChartBtn npx playwright test
// 81 = 10 (lang) \* 8 (pages) + 1 (auth)
TEST_LICENSE=CYSEC TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=sellBtn npx playwright test
// 81 = 10 (lang) \* 8 (pages) + 1 (auth)
TEST_LICENSE=CYSEC TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=buyBtn npx playwright test
// 81 = 10 (lang) \* 8 (pages) + 1 (auth)
TEST_LICENSE=CYSEC TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=alertBtn npx playwright test
// 81 = 10 (lang) \* 8 (pages) + 1 (auth)
TEST_LICENSE=CYSEC TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=tradedBtn npx playwright test +++
// 81 = 10 (lang) \* 8 (pages) + 1 (auth)
TEST_LICENSE=CYSEC TEST_BROWSER=chromium TEST_USER=unauthorised TEST_CTA=tradingInstrument TEST_ACTION=readyToJoinSignUpBtn npx playwright test +++
// 81 = 10 (lang) \* 8 (pages) + 1 (auth)

// 721 = 10 (lang) \* 8 (pages) \* 9 (actions) = 720 + 1 (auth) // for one userState 2161 - 3 UserState

TEST_LICENSE=CYSEC TEST_BROWSER=chromium npx playwright test --list === 2521 = 2482 and 39 - skipped (because MN,VI don't have marketAnalysis page and financeNews page only EN)

# AUTH

TEST_BROWSER=chromium npx playwright test tests/auth

npx allure serve allure-results
