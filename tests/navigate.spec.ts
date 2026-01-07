import { test } from "@playwright/test";
const registerUrl =
  "https://material.playwrightvn.com/01-xpath-register-page.html";

const toDoListUrl = "https://material.playwrightvn.com/03-xpath-todo-list.html";
//NAVIGATE
// test('basic test', async ({page}) => {
//  await test.step('Step1: access page', async () => {
//    await page.goto('https://material.playwrightvn.com/');
//  })
//   await test.step('Step2: access 2nd page', async () => {
//    await page.goto('https://www.google.com/');
//  })
// });

//CLICK
//   test.describe('Navigate Test Suite', () => {
//     test('Navigate to Playwright homepage', async ({page}) => {
//       await test.step('Step1: Go to Playwright homepage', async () => {
//         await page.goto('https://material.playwrightvn.com/018-mouse.html');
//       });
//         await test.step('Step2: Single click', async () => {
//         await page.click('text=Single click');
//         await test.step('Step1: Go to Playwright homepage', async () => {
//         await page.goto('https://material.playwrightvn.com/018-mouse.html');
//       });
//         await test.step('Step1: Go to Playwright homepage', async () => {
//         await page.goto('https://material.playwrightvn.com/018-mouse.html');
//       });
//     });
//   });
//     });

// test.describe('My test suite', async() => {
//    test(',test case 1: Navigate to Playwright homepage', async ({page}) => {
//       await test.step('Step1: Go to Playwright homepage', async () => {
//         await page.goto('https://material.playwrightvn.com/018-mouse.html');
//       });
// });

// test(',test case 2: Navigate to Playwright homepage and do something', async ({page}) => {
//       await test.step('Step1: Go to Playwright homepage', async () => {
//         await page.goto('https://material.playwrightvn.com/018-mouse.html');
//       });
//       await test.step('Step2: Do single click', async () => {
//         await page.locator("//div[@id='clickArea']").click();
//       });
//       await test.step('Step3: Do double click', async () => {
//         await page.locator("//div[@id='clickArea']").dblclick();
//       });
//     //   await test.step('Step4: Do right click', async () => {
//     //     await page.locator("//div[@id='clickArea']").click({ button: 'right' });
//     //   });
//     //    await test.step('Step5: Do left click', async () => {
//     //     await page.locator("//div[@id='clickArea']").click({ button: 'left' });
//     //   });
//     await test.step('Step6: Do another click ', async () => {
//         await page.locator("//div[@id='clickArea']").click(
//             { modifiers: ['Shift','Meta'] }
//         )
//       });
// });
// });

//INPUT

// test.describe("my test suite", async () => {
//   test("basic test", async ({ page }) => {
//     await page.goto(
//       "https://material.playwrightvn.com/01-xpath-register-page.html"
//     );
//     //day la input nhanh
//     //await page.locator("//input[@id='username']").fill("Son");
//     // await page.locator("#username").fill("Son");
//     // await page.locator("#email").fill("son.tran@mobi.ch");

//     //day la input chuyen nghiep , co delay time giua cac ky tu
//     await page.locator("#username").pressSequentially("son", { delay: 100 });
//     await page
//       .locator("#email")
//       .pressSequentially("son.tran@mobi.ch", { delay: 100 });
//   });
// });

//Radio/Checkbox/Select
// test.describe("my test suite", async () => {
//   test("basic test", async ({ page }) => {
//     await page.goto(
//       "https://material.playwrightvn.com/01-xpath-register-page.html"
//     );
//     await page.locator("#male").check();
//     await page.locator("#female").check();

//     await page.locator("#reading").check();
//     // await page.locator("#reading").setChecked(false);

//     await page.locator("#traveling").check();
//     // await page.locator("#traveling").setChecked(false);

//     await page.locator("#cooking").check();

//     //kiemr tra xem check khong
//     let check = await page.locator("#cooking").isChecked();
//     console.log(check);
//     await page.locator("#cooking").setChecked(false);
//     check = await page.locator("#cooking").isChecked();
//     console.log(check);

//     //Select Single option
//     await page.locator("//select[@id='country']").selectOption("Australia");

//     //Select Multiple options
//     await page
//       .locator("//select[@id='interests']")
//       .selectOption(["Music", "Art"]);
//   });
// });

//DatePicker
// test.describe("my test suite", async () => {
//   test("basic test", async ({ page }) => {
//     await page.goto(
//       "https://material.playwrightvn.com/01-xpath-register-page.html"
//     );
//     await page.locator("#dob").fill("2026-01-01");
//   });
// });

//Continue to learning: Date, Rating and Favcolor
//DATE, RATING, FAVCOLOR
// test.describe("basic test", async () => {
//   test("test 1", async ({ page }) => {
//     await page.goto(registerUrl);
//     await page.locator("//input[@id='dob']").fill("2026-01-01");
//     await page.locator("//input[@id='rating']").pressSequentially("5");
//     await page.locator("//input[@id='favcolor']").fill("#e66465");
//   });
// });

//Continue to learning: SetInputFiles, HOVER
// test.describe("basic test", async () => {
//   test("test 1", async ({ page }) => {
//     await page.goto(registerUrl);
//     await page.locator("#profile").setInputFiles("a.txt");
//     await page.locator("//div[@class='tooltip']").hover;
//   });
// });

//Handle Confirm Dialog ( Su dung su kien Dialog cua Playwright nha, luu y la` phai accept truoc dialog truoc khi click button moi dc nha)
test.describe("basic test", async () => {
  test("test 1", async ({ page }) => {
    await page.goto(toDoListUrl);
    await page
      .locator("#new-task")
      .pressSequentially("New task", { delay: 100 }); //input text
    await page.locator("#add-task").click(); // click Add task button
    page.on("dialog", (dialog) => dialog.accept());
    await page.locator("#new-task-delete").click(); // click Delete task button

    await page.getByRole("button").click();
  });
});
