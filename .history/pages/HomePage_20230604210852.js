    import BasePage from './BasePage'
    const elements ={
        Cookies_Buttom:'div.consentForm__acceptButton:nth-child(2) > button',
        Profile_Buttom:  '#loginEmail' ,
        loginstatus_Flag:  '#loginPassword' ,
        submit_TxtBox:  '#login-submit' ,
        error_Txt:  '#loginEmail-error' ,
    
        registration_Buttom:'button#registerAccount'
    
     }
    export default class HomePage extends BasePage {
    
    async isHomePageDisplayed(){
        await page.waitForSelector(elements.Cookies_Buttom) ;
       }
    async CloseCookies(){
        await page.click(elements.Cookies_Buttom) ;
    }

    async OpenProfile(){

        await page.click(".headerElement__icon--login") ;

    }

}
