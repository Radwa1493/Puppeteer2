export default class LoginPage{

    async IsLoginPage(){

        await page.click(".headerElement__icon--login") ;

       await page.waitForSelector('#loginEmail')    
    }


    async EnterCredinial(){
        await page.click(".headerElement__icon--login") ;

       await page.waitForSelector('#loginEmail')    
    }

}