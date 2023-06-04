import BasePage from './BasePage'
const TestDate = require('../Utilities/testData.js')
let PasswprdGen
let textGen
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
    submit:'#register-submit',
 }

export default class RegistionPage extends BasePage {
    async isRegisterPageDisplayed(){
        await page.waitForSelector(elements.Gender_DropDown)    
    }

    async openRegisterPage(){
        await page.click(elements.registration_Buttom)    
    }
    async enterNewUserData(){
        PasswprdGen = TestDate.PasswordGenerator()
        textGen = TestDate.TextGenerator()
        await page.select(elements.Gender_DropDown,TestDate.Gender)
        console.log('Frist Name : '+ textGen)
        await page.type(elements.FristName,textGen)
        console.log('Last Name : '+ textGen)
        await page.type(elements.LastName,textGen)
        console.log('Email : '+ textGen+'@'+textGen+'.com')
        await page.type(elements.Email,textGen+'@'+textGen+'.com')
        console.log('Password : '+ PasswprdGen )
        await page.type(elements.Passwprd,PasswprdGen)
        console.log('Password2 : '+ PasswprdGen)
        await page.type(elements.Password2,PasswprdGen)
        await page.click(elements.Checkbox1) ;
        await page.click(elements.Checkbox2) ;
        await page.click(elements.submit) ;

    }

}