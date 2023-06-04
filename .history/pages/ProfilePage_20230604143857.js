import BasePage from './BasePage'

const elements ={
    lgoin
    loginEmail_TxtBox:    '#loginEmail' ,

 }

export default class ProfilePage extends BasePage {

    async isLoginPageDisplayed(){
        await page.waitForSelector(elements.loginEmail_TxtBox)     
    }

    async EnterCredinial(){
    await page.click(".headerElement__icon--login") ;
       await page.$eval(elements.loginEmail_TxtBox, input => input.value = ''); // Clear the text from the field
       await page.type(elements.loginEmail_TxtBox,'ccjss@ccjss.com')
       await page.type('#loginPassword','wrong')
       await page.click('#login-submit')
    }
    async isInvalidloginError(){
        
        await page.waitForSelector('#loginEmail-error')   

    }
    
    async OpenRegisterPage(){
        
     await page.click('button#registerAccount')

    }

}