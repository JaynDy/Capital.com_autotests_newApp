import { test as setup } from "@playwright/test";
import path from "path";
import fs from "fs";
import { BASE_URL } from "../../framework/config/baseURL";

setup("manual authenticate", async ({ browser }, testInfo) => {
  const project = testInfo.project.use;

  const authFile = path.resolve(
    `storage/auth/${project.browserName}-authorised.json`,
  );

  if (fs.existsSync(authFile)) {
    console.log("AUTH STATE FOUND → REUSE:", authFile);
    return;
  }

  fs.mkdirSync(path.dirname(authFile), { recursive: true });

  const context = await browser.newContext({
    baseURL: BASE_URL,
  });

  const page = await context.newPage();

  await page.goto(BASE_URL);

  await page.pause();

  await context.storageState({ path: authFile });

  console.log("AUTH SAVED:", authFile);
  const authData = JSON.parse(fs.readFileSync(authFile, "utf8"));
  console.log("COOKIES:", authData.cookies.length);
  console.log("ORIGINS:", authData.origins.length);

  await context.close();
});
