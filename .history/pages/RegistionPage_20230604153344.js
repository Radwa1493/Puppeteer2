import BasePage from './BasePage'
const TestDate = require('../Utilities/testData.js')

const elements ={
    registration_Buttom:'button#registerAccount',
    Gender_DropDown:'#salutation',
    FristName:'#firstName',
    LastName:'#lastName',
    Email:'#email',
    Passwprd:'#password',
    Password2:'#password2',
    Checkbox1:'div.accountNew__newsletterCheckbox > div > div > span.checkbox__checkbox.checkbox__checkbox--alignTop',
    Checkbox2:'div.accountNew__agbCheckbox > div > div > span.checkbox__checkbox.checkbox__checkbox--alignTop',
    submit:'#email',
 }

export default class RegistionPage extends BasePage {
    async isRegisterPageDisplayed(){
        await page.waitForSelector(elements.Gender_DropDown)    
    }

    async openRegisterPage(){
        await page.click(elements.registration_Buttom)    
    }
    async enterNewUserData(){
        await page.select(elements.Gender_DropDown,TestDate.Gender)

        await page.type(elements.FristName,TestDate.TextGenerator())
        await page.type(elements.LastName,TestDate.TextGenerator())
        await page.type(elements.Email,gandamtext+'@'+gandamtext+'.com')
        await page.type(elements.Passwprd,TestDate.PasswordGenerator())
        await page.type(elements.Password2,TestDate.PasswordGenerator())
        await page.click(elements.Checkbox1) ;
        await page.click(elements.Checkbox2) ;
        await page.click("") ;

    }

}