import BasePage from './BasePage'

export default class RegistionPage extends BasePage {

    async isRegisterPageDisplayed(){

        await page.waitForSelector('button#registerAccount')    
 
    }

    async openRegisterPage(){

        await page.click('button#registerAccount')    
 
    }
    async enterNewUserData(){
        await page.select('#salutation','Frau')
        const gandamtext =this.TextGenerator()
        await page.type('#firstName',gandamtext)
        await page.type('#lastName',gandamtext)
        await page.type('#email',gandamtext+'@'+gandamtext+'.com')


    }

}