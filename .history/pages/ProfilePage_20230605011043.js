import BasePage from './BasePage'
const TestDate = require('../Utilities/testData.js')

const elements ={
    lgoin_Buttom:'.headerElement__icon--login',
    loginEmail_TxtBox:  '#loginEmail' ,
    loginPass_TxtBox:  '#loginPassword' ,
    submit_TxtBox:  '#login-submit' ,
    error_Txt:  '#loginEmail-error' ,
    registration_Buttom:'button#registerAccount',
    welcome_TXT:'.titleHeadline',
    logout_button:  '.sidebarNavigation__rootChild' 
 }

export default class ProfilePage extends BasePage {

    async isLoginPageDisplayed(){
        await page.waitForSelector(elements.loginEmail_TxtBox)     
    }

    async EnterCredinial(email,password){
    await page.click(elements.lgoin_Buttom) ;
       await page.$eval(elements.loginEmail_TxtBox, input => input.value = ''); // Clear the text from the field
       await page.type(elements.loginEmail_TxtBox,email)
       await page.type(elements.loginPass_TxtBox,password)
       await page.click(elements.submit_TxtBox)
    }
    async isInvalidloginError(){
        await page.waitForSelector(elements.error_Txt)
        expect(elements.error_Txt).not.toBeNull();

    }
    
    async OpenRegisterPage(){
     await page.click(elements.registration_Buttom)
 // Get the text of the first h1 element on the page using page.$eval()
 const textContent = await page.$eval('h1', element => element.textContent);
    }

    async Logout(){
   //     this.ScrolltoElemeny(elements.logout_button)
        await page.click(elements.logout_button)
        console.log("logout")
       }
       
}