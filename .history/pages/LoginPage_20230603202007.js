export default class LoginPage{
    async EnterCredinial(){
        await page.click(".headerElement__icon--login") ;

       await page.waitForSelector('#loginEmail')    
    }

}