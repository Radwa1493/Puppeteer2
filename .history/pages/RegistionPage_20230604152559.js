import BasePage from './BasePage'
const TestDate = require('../Utilities/testData.js')

const elements ={
    registration_Buttom:'button#registerAccount',
    Gender_DropDown:'#salutation',

 }

export default class RegistionPage extends BasePage {
    async isRegisterPageDisplayed(){
        await page.waitForSelector()    
    }

    async openRegisterPage(){
        await page.click(elements.registration_Buttom)    
    }
    async enterNewUserData(){
        await page.select('#salutation','Frau')
       // const gandamtext = await page.evaluate(this.TextGenerator())
       //Text Generator
    /*   const gandamtext = await page.evaluate(() => {
        var text = "";
          var charset = "abcdefghijklmnopqrstuvwxyz";
          for (var i = 0; i < 5; i++)
            text += charset.charAt(Math.floor(Math.random() * charset.length));
          return text;     
         
      });
      */
        await page.type('#firstName',TestDate.TextGenerator())
        await page.type('#lastName',TestDate.TextGenerator())
        await page.type('#email',gandamtext+'@'+gandamtext+'.com')
        await page.type('#password',TestDate.PasswordGenerator())
        await page.type('#password2',TestDate.PasswordGenerator())
        await page.click("div.accountNew__newsletterCheckbox > div > div > span.checkbox__checkbox.checkbox__checkbox--alignTop") ;
        await page.click("div.accountNew__agbCheckbox > div > div > span.checkbox__checkbox.checkbox__checkbox--alignTop") ;
        await page.click("#register-submit") ;

    }

}