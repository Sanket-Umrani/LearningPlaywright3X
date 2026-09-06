import{test,expect} from '@playwright/test';

test('uses await in playwright test',async ({page})=>{
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
    let value=await getexampleValue();
    expect(value).toBe('abc');
});
async function getExampleValue()
{
    return 'abc';
}