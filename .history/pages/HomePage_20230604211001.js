    import BasePage from './BasePage'
    const elements ={
        Cookies_Buttom:'div.consentForm__acceptButton:nth-child(2) > button',
        Profile_Buttom:  'ail' ,
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

        await page.click() ;

    }

}
