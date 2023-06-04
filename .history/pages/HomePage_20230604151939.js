    import BasePage from './BasePage'
    const elements ={
        lgoin_Buttom:'.headerElement__icon--login',
        loginEmail_TxtBox:  '#loginEmail' ,
        loginPass_TxtBox:  '#loginPassword' ,
        submit_TxtBox:  '#login-submit' ,
        error_Txt:  '#loginEmail-error' ,
    
        registration_Buttom:'button#registerAccount'
    
     }
    export default class HomePage extends BasePage {

    async visit(){

        await page.goto('https://www.moebel-kraft.de/') // navigate to url 
    }  
       
    async isHomePageDisplayed(){
        await page.waitForSelector("div.consentForm__acceptButton:nth-child(2) > button") ;
       }
    async CloseCookies(){
        await page.click("div.consentForm__acceptButton:nth-child(2) > button") ;
    }

    async OpenProfile(){

        await page.click(".headerElement__icon--login") ;

    }

}
