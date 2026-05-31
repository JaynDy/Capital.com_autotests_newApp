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

npx playwright test

TEST_LICENSE=FCA TEST_BROWSER=chromium TEST_USER=authorised TEST_CTA=heroBanner TEST_PAGE=markets npx playwright test
