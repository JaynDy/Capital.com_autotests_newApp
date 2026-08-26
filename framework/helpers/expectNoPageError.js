import { expect } from "@playwright/test";

export async function expectNoPageError(targetPage) {
  await expect(targetPage).not.toHaveTitle(/404|Not Found/i);
}
