const {expect,test}=require("@playwright/test")

test('assertions',async({page}) =>{
   
    await page.goto('https://demo.nopcommerce.com/register')

    //  to verify url of page
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    //  to verify title of page
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    // to verify visibillity of element on page
    await expect(page.locator('.header-logo')).toBeVisible()

    // handle radio and checkboxes
    const gender= page.locator('#gender-male')
    await gender.click()
    await expect(gender).toBeChecked()

    // verify text on page 
    await expect(page.locator('#register-button')).toHaveText('Register')
    await expect(page.locator('#register-button')).toContainText('Reg')

    // To verify value 
    const email=page.locator('#Email')
    await email.fill('test')
    await expect(email).toHaveValue('test')
    await page.waitForTimeout(5000)

    // to close page
    await page.close()


})