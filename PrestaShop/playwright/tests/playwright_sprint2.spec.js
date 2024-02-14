import { test, expect } from '@playwright/test';

test('TC01', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.waitForTimeout(2000);
  });

test('TC02', async ({ page }) => {
    await page.goto('http://localhost:8080/gb/');
    await page.getByRole('link', { name: 'th', exact: true }).click();
    await page.waitForTimeout(2000);
  });

test('TC03', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.getByRole('link', { name: 'gb' }).click();
    await page.waitForTimeout(2000);
  });

test('TC04', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.getByRole('link', { name: 'id' }).click();
    await page.waitForTimeout(2000);
  });

test('TC05', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.getByRole('link', { name: 'Clothes' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'th', exact: true }).click();
    await page.waitForTimeout(2000);
  });

test('TC06', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.getByRole('link', { name: 'Clothes' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'gb' }).click();
    await page.waitForTimeout(2000);
  });

test('TC07', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.getByRole('link', { name: 'Clothes' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'id' }).click();
    await page.waitForTimeout(2000);
  });

test('TC08', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.getByRole('link', { name: 'Clothes' }).click();
    await page.locator('#left-column').getByRole('link', { name: 'T-shirt', exact: true }).click();
    await page.getByRole('link', { name: 'KKU T-shirt 60 Y' }).first().click();
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'th', exact: true }).click();
    await page.waitForTimeout(2000);
  });

test('TC09', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.getByRole('link', { name: 'Clothes' }).click();
    await page.locator('#left-column').getByRole('link', { name: 'T-shirt', exact: true }).click();
    await page.getByRole('link', { name: 'KKU T-shirt 60 Y' }).first().click();
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'gb' }).click();
    await page.waitForTimeout(2000);
  });

test('TC10', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.getByRole('link', { name: 'Clothes' }).click();
    await page.locator('#left-column').getByRole('link', { name: 'T-shirt', exact: true }).click();
    await page.getByRole('link', { name: 'KKU T-shirt 60 Y' }).first().click();
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'id' }).click();
    await page.waitForTimeout(2000);
  });

test('TC11', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.getByRole('link', { name: 'Clothes' }).click();
    await page.locator('#left-column').getByRole('link', { name: 'Jacket', exact: true }).click();
    await page.getByRole('link', { name: 'Jacket 60Y KKU' }).first().click();
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'th', exact: true }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'id' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'gb' }).click();
    await page.waitForTimeout(2000);
  });

test('TC12', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.getByRole('link', { name: 'Accessories' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'th', exact: true }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'id' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'gb' }).click();
    await page.waitForTimeout(2000);
  });

test('TC13', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.getByRole('link', { name: 'Accessories' }).click();
    await page.locator('#left-column').getByRole('link', { name: 'Bag', exact: true }).click();
    await page.getByRole('link', { name: 'Bag', exact: true }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'th', exact: true }).click();
    await page.waitForTimeout(2000);
  });

test('TC14', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.getByRole('link', { name: 'Accessories' }).click();
    await page.locator('#left-column').getByRole('link', { name: 'Bag', exact: true }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'id' }).click();
    await page.waitForTimeout(2000);
  });

test('TC15', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.getByRole('link', { name: 'Accessories' }).click();
    await page.locator('#left-column').getByRole('link', { name: 'Bag', exact: true }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'gb' }).click();
    await page.waitForTimeout(2000);
  });

test('TC16', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.getByRole('link', { name: 'Accessories' }).click();
    await page.locator('#left-column').getByRole('link', { name: 'Hat', exact: true }).click();
    await page.getByRole('link', { name: 'CP faculty sun hat' }).first().click();
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'th', exact: true }).click();
    await page.waitForTimeout(2000);
  });

  test('TC17', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.getByRole('link', { name: 'Accessories' }).click();
    await page.locator('#left-column').getByRole('link', { name: 'Hat', exact: true }).click();
    await page.getByRole('link', { name: 'CP faculty sun hat' }).first().click();
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'gb' }).click();
    await page.waitForTimeout(2000);
  });

  test('TC18', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.getByRole('link', { name: 'Accessories' }).click();
    await page.locator('#left-column').getByRole('link', { name: 'Hat', exact: true }).click();
    await page.getByRole('link', { name: 'CP faculty sun hat' }).first().click();
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'id' }).click();
    await page.waitForTimeout(2000);
  });

  test('TC19', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.getByRole('link', { name: 'Accessories' }).click();
    await page.locator('#left-column').getByRole('link', { name: 'Phone Case', exact: true }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'th', exact: true }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'id' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'gb' }).click();
    await page.waitForTimeout(2000);
  });


  test('TC20', async ({ page }) => {
    await page.goto('http://localhost:8080/gb/');
    await page.getByRole('link', { name: 'Accessories' }).click();
    await page.locator('#left-column').getByRole('link', { name: 'Glass', exact: true }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'id' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'gb' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'th', exact: true }).click();
    await page.waitForTimeout(2000);
  });