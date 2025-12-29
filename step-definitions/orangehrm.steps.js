const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');

setDefaultTimeout(60 * 1000); // 60 seconds timeout

let browser;
let context;
let page;

Given('I open the OrangeHRM application', async () => {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://opensource-demo.orangehrmlive.com/');
});

When(
  'I login with username {string} and password {string}',
  async (username, password) => {
    await page.fill('input[name="username"]', username);
    await page.fill('input[name="password"]', password);
    await page.click('button[type="submit"]');
  }
);

Then('I should see the dashboard page', async () => {
  await expect(page).toHaveURL(/dashboard/);
  await expect(
    page.getByRole('heading', { name: /dashboard/i })
  ).toHaveText('Dashboard');
});

When('I navigate to PIM module', async () => {
  await page.click('span:has-text("PIM")');
});

Then('I should see the PIM page', async () => {
  await expect(
    page.getByRole('heading', { name: /pim/i })
  ).toHaveText('PIM');
});

When(
  'I add a new employee with first name {string} and last name {string}',
  async (firstName, lastName) => {
    await page.click('button:has-text("Add")');
    await expect(
      page.getByRole('heading', { name: /add employee/i })
    ).toHaveText('Add Employee');

    await page.fill('input[name="firstName"]', firstName);
    await page.fill('input[name="lastName"]', lastName);
    await page.click('button[type="submit"]');
  }
);

Then('I should see the personal details page', async () => {
  await expect(page).toHaveURL(/viewPersonalDetails/);
  
});

When('I update nationality and gender', async () => {
  await page.mouse.wheel(0, 800);

  await page
    .locator('.oxd-input-group')
    .filter({ hasText: 'Nationality' })
    .locator('.oxd-select-text-input')
    .click();

  await page.getByRole('option', { name: 'Indian' }).click();
  await page.click('label:has-text("Male")');
  await page.click('button:has-text("Save")');
});

Then('I should see a success toast message', async () => {
  const toast = page.locator('.oxd-toast');
  await expect(toast).toBeVisible();
  await expect(toast).toContainText('Success');
});

When('I search for employee {string}', async (name) => {
  await page.click('span:has-text("PIM")');
  await page.fill('input[placeholder="Type for hints..."]', name);
  await page.click('button:has-text("Search")');
});

Then('I should see employee in the result table', async () => {
  await expect(page.locator('.oxd-table-body')).toContainText('swati');
});

When('I delete the employee', async () => {
  await page.locator('button:has(i.bi-trash)').first().click();
  await expect(page.getByText('Yes, Delete', { exact: true })).toBeVisible();
  await page.locator('button:has(i.bi-trash.oxd-button-icon)').click();
});

Then('I should see employee deleted successfully', async () => {
  const toast = page.locator('.oxd-toast');
  await expect(toast).toBeVisible();
  await expect(toast).toContainText('Successfully Deleted');
});

When('I logout from the application', async () => {
  await page.locator('.oxd-userdropdown-name').click();
  await page.click('a:has-text("Logout")');
});

Then('I should be redirected to login page', async () => {
  await expect(page).toHaveURL(/login/);
  await expect(page.locator('button[type="submit"]')).toBeVisible();
  await browser.close();
});
