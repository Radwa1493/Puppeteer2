import BasePage from './BasePage'

export default class ProfilePage extends BasePage {

    async isRegisterPageDisplayed(){

        await page.waitForSelector('#salutation')    
 
    }

    async EnterNewUserDat(){
        await page.click(".headerElement__icon--login") ;
       await page.waitForSelector('#loginEmail')   
       await page.type('#loginEmail','ccjss@ccjss.com')
       await page.type('#loginPassword','wrong')
       await page.click('#login-submit')
    }
    async InvalidloginError(){
        
        await page.waitForSelector('#loginEmail-error')   

    }
    
    async OpenRegisterPage(){
        
     await page.click('button#registerAccount')

    }

}