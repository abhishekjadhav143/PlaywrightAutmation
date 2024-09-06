const{test,expect}=require('@playwright/test')

test.skip('verify alert ', async ({page})=>{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    page.on('dialog',async dialog=>{

        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('Hello , share this practice page and share your knowledge')
        await dialog.accept()
      })

      await page.locator('#alertbtn').click()
      await page.waitForTimeout(5000)
})

test('verify confirm', async ({page})=>{

  await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    page.on('dialog',async dialog=>{

        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Hello , Are you sure you want to confirm?')
        await dialog.accept()
        // await dialog.dismiss()
      })

      await page.locator('#confirmbtn').click()
      await page.waitForTimeout(5000)
})