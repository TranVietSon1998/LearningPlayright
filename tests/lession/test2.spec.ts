import { test, expect } from "@playwright/test";

test.describe("test suite", async () => {
  test("basic test", async ({ page }) => {
    await page.goto(
      "https://material.playwrightvn.com/03-xpath-todo-list.html"
    );
    for (let i = 1; i <= 100; i++) {
      await page.locator("#new-task").fill(`Todo ${i}`);
      await page.locator("#add-task").click();
    }

    //dialog
    page.on("dialog", (dialog) => dialog.accept());
    for (let i = 1; i <= 100; i++) {
      if (i % 2 != 0) {
        // await page.locator(`//button[@id="todo-${i}-delete"]`).click();
        await page.locator(`#todo-${i}-delete`).click();
      }
    }
  });
});
