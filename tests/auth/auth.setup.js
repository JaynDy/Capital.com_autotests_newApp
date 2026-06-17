// /* eslint-disable playwright/no-conditional-in-test */
import fs from "fs";
import path from "path";
import { test as setup } from "@playwright/test";
import { login } from "../../framework/auth/login";
import { BASE_URL } from "../../framework/config/baseURL";
// import { isAuthStateValid } from "../../framework/auth/isAuthStateValid";

setup("authenticate", async ({ browser }, testInfo) => {
  const project = testInfo.project.use;

  const authFile = path.resolve(
    `storage/auth/${project.browserName}-authorised.json`,
  );

  fs.mkdirSync(path.dirname(authFile), { recursive: true });

  // if (isAuthStateValid(authFile)) {
  //   console.log("AUTH STATE VALID → REUSE:", authFile);
  //   return;
  // }
  // console.log("AUTH EXPIRED → RELOGIN");

  fs.rmSync(authFile, { force: true });

  const context = await browser.newContext({ baseURL: BASE_URL });
  const page = await context.newPage();

  await login(page, BASE_URL, {
    email: process.env.TEST_EMAIL,
    password: process.env.TEST_PASSWORD,
  });

  await context.storageState({ path: authFile });
  // console.log("AUTH FILE SIZE:", fs.statSync(authFile).size);
  // const authData = JSON.parse(fs.readFileSync(authFile, "utf8"));
  // console.log("COOKIES:", authData.cookies.length);
  // console.log("ORIGINS:", authData.origins.length);

  await context.close();

  // const verifyContext = await browser.newContext({
  //   storageState: authFile,
  // });
  // const verifyPage = await verifyContext.newPage();
  // await verifyPage.goto(`${BASE_URL}/trading/platform`);
  // console.log("VERIFY URL:", verifyPage.url());

  // await verifyContext.close();
});

// setup("authenticate", async ({ browser }, testInfo) => {
//   const project = testInfo.project.use;

//   const authFile = path.resolve(
//     `storage/auth/${project.browserName}-authorised.json`,
//   );

//   fs.mkdirSync(path.dirname(authFile), { recursive: true });

//   // NEW
//   console.log("AUTH REFRESH → CLEAN LOGIN:", authFile);

//   fs.rmSync(authFile, { force: true });

//   // OLD
//   // if (fs.existsSync(authFile)) {
//   //   console.log("AUTH STATE EXISTS → REUSE:", authFile);
//   //   return;
//   // }
//   // console.log("AUTH STATE NOT FOUND → LOGIN:", authFile);

//   const context = await browser.newContext({
//     baseURL: BASE_URL,
//   });

//   // NEW
//   // await context.addInitScript(() => {
//   //   Object.defineProperty(navigator, "webdriver", {
//   //     get: () => false,
//   //   });
//   // });

//   const page = await context.newPage();

//   await login(page, BASE_URL, {
//     email: process.env.TEST_EMAIL,
//     password: process.env.TEST_PASSWORD,
//   });
//   console.log("PASSWORD LENGTH:", process.env.TEST_PASSWORD?.length);

//   await context.storageState({ path: authFile });
//   await context.close();

//   console.log("AUTH SAVED");
// });
