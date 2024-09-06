const{test,expect} = require('@playwright/test')

test('dropdowns',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#country').selectOption('Canada')
    await page.waitForTimeout(5000)
})