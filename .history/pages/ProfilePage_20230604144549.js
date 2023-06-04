import BasePage from './BasePage'
const TestDate = require('../Utilities/testData.js')

const elements ={
    lgoin_Buttom:'.headerElement__icon--login',
    loginEmail_TxtBox:  '#loginEmail' ,
    loginPass_TxtBox:  '#loginPassword' ,
    Submit_TxtBox:  '#login-submit' ,
    Error_Txt:  '#loginEmail-error' ,

 }

export default class ProfilePage extends BasePage {

    async isLoginPageDisplayed(){
        await page.waitForSelector(elements.loginEmail_TxtBox)     
    }

    async EnterCredinial(){
    await page.click(elements.lgoin_Buttom) ;
       await page.$eval(elements.loginEmail_TxtBox, input => input.value = ''); // Clear the text from the field
       await page.type(elements.loginEmail_TxtBox,'ccjss@ccjss.com')
       await page.type(elements.loginPass_TxtBox,TestDate.InValidPassword)
       await page.click(elements.Submit_TxtBox)
    }
    async isInvalidloginError(){
        
        await page.waitForSelector(elements.Error_Txt)   

    }
    
    async OpenRegisterPage(){
        
     await page.click('button#registerAccount')

    }

}