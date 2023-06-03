export default class LoginPage{

    async OpenProfile(){

        await page.click(".headerElement__icon--login") ;

       await page.waitForSelector('#loginEmail')    
    }


    async EnterCredinial(){
        await page.click(".headerElement__icon--login") ;

       await page.waitForSelector('#loginEmail')    
    }

}