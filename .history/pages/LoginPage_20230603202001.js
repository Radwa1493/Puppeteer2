export default class LoginPage{
    async En(){
        await page.click(".headerElement__icon--login") ;

       await page.waitForSelector('#loginEmail')    
    }

}