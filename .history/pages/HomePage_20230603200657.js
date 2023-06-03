    import BasePage from './BasePage'

    export default class HomePage extends BasePage {

    async visit(){
     
        await page.goto('https://www.moebel-kraft.de/') // navigate to url 
        await page.waitForSelector("div.consentForm__acceptButton:nth-child(2) > button") ;

       }

    async CloseCookies(){
        await page.click("div.consentForm__acceptButton:nth-child(2) > button") ;
    }

    async OpenProfile(){
        await page.click(".headerElement__icon--login") ;

       await page.waitForSelector('#loginEmail')    
    }

}module.exports =  HomePage
