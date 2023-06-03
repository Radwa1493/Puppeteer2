import BasePage from './BasePage'

export default class ProfilePage extends BasePage {

    async isRegisterPageDisplayed(){

        await page.waitForSelector('#salutation')    
 
    }

    async enterNewUserData(){
        await page.select('#salutation','Frau')
        const gandamtext =this.TextGenerator()


    }

}