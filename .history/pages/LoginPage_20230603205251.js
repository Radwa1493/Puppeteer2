export default class LoginPage{
    export default class HomePage extends BasePage {

    async isLoginPageDisplayed(){

        await page.waitForSelector('#loginEmail')    
 
    }


    async EnterCredinial(){
        await page.click(".headerElement__icon--login") ;

       await page.waitForSelector('#loginEmail')    
    }

}