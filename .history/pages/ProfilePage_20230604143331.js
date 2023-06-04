import BasePage from './BasePage'

const elements ={
    TEXTBOX: () => { return '#loginEmail' },
    TEXTBOX_XPath: () => { return cy.xpath("//*[@id='APjFqb']") },
 
    BUTTON: () => { return cy.get('#APjFqb')}
 }

export default class ProfilePage extends BasePage {


    async isLoginPageDisplayed(){

        await page.waitForSelector('#loginEmail')    
 
    }

    async EnterCredinial(){
    await page.click(".headerElement__icon--login") ;
       await page.waitForSelector('#loginEmail')   
       await page.$eval('#loginEmail', input => input.value = ''); // Clear the text from the field
       await page.type('#loginEmail','ccjss@ccjss.com')
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