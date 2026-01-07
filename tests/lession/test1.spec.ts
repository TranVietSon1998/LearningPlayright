// tests/register.spec.ts
import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

test.describe("Register page - fill all fields", () => {
  test("Fill all fields and submit with assertions", async ({ page }) => {
    // ---------- Test data ----------
    const username = `son_${Date.now()}`;
    const email = `son_${Date.now()}@example.com`;
    const dob = "1998-08-15"; // yyyy-mm-dd (input[type="date"])
    const biography = "Hello! I am learning Playwright and XPath.";
    const countryLabelOrValue = "United States"; // depends on <option value="...">, we'll handle flexibly
    const interestsToSelect = ["Technology", "Music"]; // text labels
    const favoriteColor = "#1d7227"; // input[type="color"]
    const rateValue = "4"; // slider/range as string

    // ---------- Go to page ----------
    await page.goto(
      "https://material.playwrightvn.com/01-xpath-register-page.html"
    );
    await expect(page).toHaveURL(/01-xpath-register-page\.html/);

    // ---------- Locators ----------
    const usernameInput = page.locator("#username");
    const emailInput = page.locator("#email");

    const maleRadio = page.locator("#male");
    const femaleRadio = page.locator("#female");

    const readingCb = page.locator("#reading");
    const travelingCb = page.locator("#traveling");
    const cookingCb = page.locator("#cooking");

    const interestsSelect = page.locator("#interests"); // multi-select
    const countrySelect = page.locator("#country");

    const dobInput = page.locator("#dob");
    const profileInput = page.locator("#profile");

    const biographyTextarea = page.locator("#bio");

    const rateRange = page.locator("#rating");

    const favoriteColorInput = page.locator("#favcolor");

    const newsletterCb = page.locator(
      "//input[@type='checkbox' and @id='newsletter']"
    );
    const enableFeatureCb = page.locator("label.switch .slider");

    const submitBtn = page.locator('button[type="submit"]');

    const table = page.locator("table");

    // ---------- Assertions: elements visible ----------
    await expect(usernameInput).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(submitBtn).toBeVisible();

    // ---------- Count rows before submit (for later assertion) ----------
    // Assuming table has <tbody> and rows added there; fallback to all rows if needed
    const tbodyRows = table.locator("tbody tr");
    const allRows = table.locator("tr");
    const beforeCount = await tbodyRows.count().catch(() => 0);
    const beforeCountFallback = await allRows.count();

    // ---------- Fill: Username / Email ----------
    await usernameInput.fill(username);
    await emailInput.fill(email);

    await expect(usernameInput).toHaveValue(username);
    await expect(emailInput).toHaveValue(email);

    // ---------- Gender: choose Female ----------
    await femaleRadio.check();
    await expect(femaleRadio).toBeChecked();
    await expect(maleRadio).not.toBeChecked();

    // ---------- Hobbies: check all ----------
    await readingCb.check();
    await travelingCb.check();
    await cookingCb.check();

    await expect(readingCb).toBeChecked();
    await expect(travelingCb).toBeChecked();
    await expect(cookingCb).toBeChecked();

    // ---------- Interests: multi-select by label (robust) ----------
    // Playwright selectOption supports label matching by { label }
    await interestsSelect.selectOption(
      interestsToSelect.map((label) => ({ label }))
    );

    // Assert selected labels (evaluate in page)
    const selectedInterests = await interestsSelect.evaluate((el) => {
      const select = el as HTMLSelectElement;
      return Array.from(select.selectedOptions).map((o) => o.text.trim());
    });
    for (const i of interestsToSelect) {
      expect(selectedInterests).toContain(i);
    }

    // ---------- Country: try select by label, fallback by value ----------
    try {
      await countrySelect.selectOption({ label: countryLabelOrValue });
    } catch {
      await countrySelect.selectOption(countryLabelOrValue);
    }

    // Assert country selected (by selected option text)
    const selectedCountryText = await countrySelect.evaluate((el) => {
      const select = el as HTMLSelectElement;
      return select.selectedOptions[0]?.text?.trim() ?? "";
    });
    expect(selectedCountryText.length).toBeGreaterThan(0);

    // ---------- Date of birth ----------
    await dobInput.fill(dob);
    await expect(dobInput).toHaveValue(dob);

    // ---------- Profile upload (create a small temp file) ----------
    const tmpDir = path.join(process.cwd(), "test-artifacts");
    fs.mkdirSync(tmpDir, { recursive: true });

    const tmpFilePath = path.join(tmpDir, `profile_${Date.now()}.txt`);
    fs.writeFileSync(tmpFilePath, "dummy profile file");

    await profileInput.setInputFiles(tmpFilePath);

    // Assert file name is set (value contains fakepath + filename)
    await expect(profileInput).toHaveValue(/profile_.*\.txt/);

    // ---------- Biography ----------
    await biographyTextarea.fill(biography);
    await expect(biographyTextarea).toHaveValue(biography);

    await rateRange.fill("3");

    // ---------- Favorite color ----------
    await favoriteColorInput.fill(favoriteColor);
    await expect(favoriteColorInput).toHaveValue(favoriteColor);

    // ---------- Toggles ----------
    await newsletterCb.check();
    await enableFeatureCb.click();
    // ---------- Submit ----------
    await submitBtn.click();
  });
});
