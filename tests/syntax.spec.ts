import {test} from '@playwright/test';

// test.describe('My Test Suite', () => {
// test('basic test', async ({page}) => {
// await test.step('Step1: access page', async () => {
//   await page.goto('https://material.playwrightvn.com/');
// })
// await test.step('Step2: Click button', async () => {
//   await page.goto('https://example.com');
// })
// await test.step('Step3', async () => {
//   await page.goto('https://example.com');
// })


// });

// test('basic1 test', async ({page}) => {
// await test.step('Step1: access page', async () => {
//   await page.goto('https://example.com');
// })
// await test.step('Step2: Click button', async () => {
//   await page.goto('https://example.com');
// })
// await test.step('Step3', async () => {
//   await page.goto('https://example.com');
// })


// });
// });

// test('basic test1', async({page}) => {
//   await test.step('Step1: access page', async() => {
//    await page.goto('https://material.playwrightvn.com/');
//   });
//   await test.step('Step2: click button', async() =>{
//     await page.goto('https://example.com');
//   });
// });

test.describe('my test suite', async() => {
  test('basic test1', async({page}) => {
  await test.step('Step1: access page', async() => {
   await page.goto('https://material.playwrightvn.com/');
  });
  await test.step('Step2: click button', async() =>{
    await page.goto('https://example.com');
  });
});
});