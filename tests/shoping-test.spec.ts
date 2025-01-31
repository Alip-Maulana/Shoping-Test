import { test, expect } from '@playwright/test';

test('Login-submit', async ({ page }) => {
await page.goto('https://www.saucedemo.com/');
await expect(page).toHaveTitle('Swag Labs');

//input username dan password
await page.locator('[data-test="username"]').click();
await page.locator('[data-test="username"]').fill('standard_user');
await page.locator('[data-test="password"]').click();
await page.locator('[data-test="password"]').fill('secret_sauce');
await page.locator('[data-test="login-button"]').click();
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});

test('Failed-Username', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle('Swag Labs');
  
  //input username dan password
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user111');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toBeVisible();

  
  });


test('add-to-cart', async ({ page }) => {
  //membuka web
  await page.goto('https://www.saucedemo.com/');

  //memasukkan username dan passworn
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');

  //klik button login dan menuju ke halaman yang di inginkan
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

  //klik produk dan menambahkan ke chart
  await page.locator('[data-test="item-4-title-link"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.locator('[data-test="item-5-title-link"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="secondary-header"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();

  //masuk ke menu cart dan checkhout
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();

  //memngisi inputan form yang ada
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('alipp');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('putra');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('1111111');

  //submit answer
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
  
  //kembali ke home
  await page.locator('[data-test="back-to-products"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');



  });
  
  
