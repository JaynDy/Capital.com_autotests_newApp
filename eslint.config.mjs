import js from "@eslint/js";
import playwright from "eslint-plugin-playwright";

export default [
  js.configs.recommended,
  {
    files: ["tests/**/*.js"],
    plugins: {
      playwright,
    },
    rules: {
      ...playwright.configs.recommended.rules,
      "no-unused-vars": "warn",
    },
  },
];
