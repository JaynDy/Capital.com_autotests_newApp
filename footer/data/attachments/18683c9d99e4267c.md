# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cta/generated.cta.spec.js >> GLOBAL | main page | footer | socialMediaBar | youtubeIcon
- Location: tests/cta/generated.cta.spec.js:37:7

# Error details

```
Error: expect(page).not.toHaveTitle(expected) failed

Expected pattern: not /404|Not Found/i
Received string: "404 Not Found"
Timeout: 5000ms

Call log:
  - Expect "not toHaveTitle" with timeout 5000ms
    14 × unexpected value "404 Not Found"

```

```yaml
- iframe
```

# Test source

```ts
  1 | import { expect } from "@playwright/test";
  2 | 
  3 | export async function expectNoPageError(targetPage) {
> 4 |   await expect(targetPage).not.toHaveTitle(/404|Not Found/i);
    |                                ^ Error: expect(page).not.toHaveTitle(expected) failed
  5 | }
  6 | 
```