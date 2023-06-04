    import BasePage from './BasePage'
    const TestDate = require('../Utilities/testData.js')

    const elements ={
        Cookies_Buttom:'div.consentForm__acceptButton:nth-child(2) > button',
        Profile_Buttom:  '.headerElement__icon--login' ,
        loginstatus_Flag:  '.headerElement__status--login' ,
    
     }
    export default class HomePage extends BasePage {
    
    async isHomePageDisplayed(){
        await page.waitForSelector(elements.Cookies_Buttom) ;
       }
    async CloseCookies(){
        await page.click(elements.Cookies_Buttom) ;
    }

    async OpenProfile(){
        await   page.click(elements.Profile_Buttom) ;
    }

    async isloginstatusDisplayed(){
        await page.waitForSelector(elements.loginstatus_Flag);
        expect(elements.loginstatus_Flag).not.toBeNull(); // assertion


       }
       async Profile(){

        await page.goto(TestDate.ProfileUrl);
    }
}
