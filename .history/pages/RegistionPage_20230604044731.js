import BasePage from './BasePage'
const TestDate = require('../Utilities/testData.js')

export default class RegistionPage extends BasePage {

    async isRegisterPageDisplayed(){

        await page.waitForSelector('#salutation')    
 
    }

    async openRegisterPage(){

        await page.click('button#registerAccount')    
 
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
        await page.type('#firstName',TestDate.TestDataGenerator.TextGenerator())
        await page.type('#lastName',TestDate.TextGenerator())
        await page.type('#email',gandamtext+'@'+gandamtext+'.com')


    }

}