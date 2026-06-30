// @ts-check
import "dotenv/config";
import { defineConfig, devices } from "@playwright/test";
import { createProjects } from "./framework/projects/createProjects.js";
import { filterProjects } from "./framework/projects/filterProjects.js";

const projects = createProjects(devices);

const filteredProjects = filterProjects(projects, {
  license: process.env.TEST_LICENSE || undefined,
  user: process.env.TEST_USER || undefined,
  lang: process.env.TEST_LANG || undefined,
  browser: process.env.TEST_BROWSER || undefined,
});

if (process.env.DEBUG_FILTER) {
  console.log("FILTERED PROJECTS:", filteredProjects.length);
}

const authBrowsers = [
  ...new Set(filteredProjects.map((p) => p.use.browserName)),
];

// console.log("CI:", process.env.CI);
// console.log("HEADLESS FINAL:", !!process.env.CI);

export default defineConfig({
  testDir: "./tests",
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  fullyParallel: false,
  reporter: [
    ["html", { outputFolder: "playwright-report", open: "never" }],
    ["list"],
    ["allure-playwright"],
  ],

  use: {
    headless: !!process.env.CI,
    // headless: true, // NEW
    // trace: "on-first-retry",
    trace: "on",
  },

  projects: [
    // AUTH PROJECTS
    // ...authBrowsers.map((browser) => ({
    //   name: `auth-${browser}`,
    //   testMatch: /.*auth\.setup\.js/,

    //   use: {
    //     ...devices[browser],
    //     browserName: browser,
    //     ...(browser === "chromium" ? { channel: "chrome" } : {}),
    //     storageState: undefined,
    //   },
    // })),

    // REGULAR PROJECTS
    ...filteredProjects.map((p) => ({
      name: p.name,
      use: p.use,

      // dependencies:
      //   p.use.userState === "authorised" ? [`auth-${p.use.browserName}`] : [],
    })),
  ],
});
