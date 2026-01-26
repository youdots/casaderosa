const { test, expect } = require("@playwright/test");

test("homepage loads", async ({ page, baseURL }) => {
  await page.goto(baseURL, { waitUntil: "domcontentloaded" });
  await expect(page.locator("body")).toBeVisible();
});
