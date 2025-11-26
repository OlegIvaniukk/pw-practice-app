import { test } from "@playwright/test";

test.describe("First Test Suite", () => {
  test("first test", async ({ page }) => {
    await page.goto("http://localhost:4200/");
  });
});