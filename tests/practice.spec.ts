import{test} from '@playwright/test';

test('Go to demo website', async({page})=>{
    await page.goto('https://practicesoftwaretesting.com/');
})

