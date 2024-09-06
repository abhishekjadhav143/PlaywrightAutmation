const{test,expect} = require('@playwright/test')

test('inputBox',async({page})=>{

   await page.goto('https://www.rahulshettyacademy.com/angularpractice/')

   //    To handle input box 
   await expect(await page.locator('#exampleInputPassword1')).toBeEditable()
   await expect(await page.locator('#exampleInputPassword1')).toBeEmpty()

   await page.locator('#exampleInputPassword1').fill('password')

   //    To handle checkboxes 
   await page.locator('#inlineRadio1').check()
   await expect(await page.locator('#inlineRadio1')).toBeChecked()
   
   //   Handle disabled radio buttons  
   await expect(await page.locator('#inlineRadio3')).toBeDisabled()



   
   
   
   





   




})