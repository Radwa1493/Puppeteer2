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
    Checkbox1:'#password',
    Checkbox2:'#password',
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
        await page.type('#',TestDate.PasswordGenerator())
        await page.type('#password2',TestDate.PasswordGenerator())
        await page.click("div.accountNew__newsletterCheckbox > div > div > span.checkbox__checkbox.checkbox__checkbox--alignTop") ;
        await page.click("div.accountNew__agbCheckbox > div > div > span.checkbox__checkbox.checkbox__checkbox--alignTop") ;
        await page.click("#register-submit") ;

    }

}