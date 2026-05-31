export async function waitForPlatform(page, timeout) {
  try {
    await expect(page).toHaveURL(/trading\/platform/, { timeout });
    return true;
  } catch {
    return false;
  }
}
