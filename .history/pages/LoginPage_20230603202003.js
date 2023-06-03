export default class LoginPage{
    async Enter(){
        await page.click(".headerElement__icon--login") ;

       await page.waitForSelector('#loginEmail')    
    }

}