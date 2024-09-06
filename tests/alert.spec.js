const{expect,test}=require('@playwright/test')

test.skip('dialog handler with ok ',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog',async dialog=>{

      expect(dialog.type()).toContain('alert')
      expect(dialog.message()).toContain('I am an alert box!')
      await dialog.accept()
    })
    
    await page.click('//button [text()="Alert"]')
    await page.waitForTimeout(5000)
})


test.skip('dialog handler with ok and cancel ',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    
    page.on('dialog',async dialog=>{

      expect(dialog.type()).toContain('confirm')
      expect(dialog.message()).toContain('Press a button!')
      await dialog.accept()
    //   await dialog.dismiss()
    })
    
    await page.click('//button [text()="Confirm Box"]')
    await page.waitForTimeout(5000)

})

test('dialog handler with prompt ',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    
    page.on('dialog',async dialog=>{

      expect(dialog.type()).toContain('prompt')
      expect(dialog.message()).toContain('Please enter your name:')
      expect(dialog.defaultValue()).toContain('Harry Potter')
      await dialog.accept('Abhishek')
    //   await dialog.dismiss()
    })
    
    await page.click('//button [text()="Prompt"]')
    await page.waitForTimeout(5000)

})