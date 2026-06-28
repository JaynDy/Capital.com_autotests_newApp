import { chromium } from "@playwright/test";
import fs from "fs";

(async () => {
  const context = await chromium.launchPersistentContext("./chrome-profile", {
    channel: "chrome",
    headless: false,
    viewport: null,
    ignoreDefaultArgs: ["--enable-automation"],
    args: [
      "--disable-blink-features=AutomationControlled",
      "--start-maximized",
    ],
  });

  const page = context.pages()[0];

  await page.goto("https://capital.com");

  console.log("Выполни логин вручную и нажми Enter");

  process.stdin.resume();

  process.stdin.once("data", async () => {
    fs.mkdirSync("./storage/auth", { recursive: true });

    await context.storageState({
      path: "./storage/auth/chromium-authorised.json",
    });

    console.log("Storage state saved");

    await context.close();
    process.exit(0);
  });
})();
