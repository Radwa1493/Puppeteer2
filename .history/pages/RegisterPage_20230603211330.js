import BasePage from './BasePage'

export default class ProfilePage extends BasePage {

    async isRegisterPageDisplayed(){

        await page.waitForSelector('#salutation')    
 
    }

    async EnterNewUserData(){
       

    }

}