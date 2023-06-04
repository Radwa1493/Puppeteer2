import BasePage from './BasePage'
const TestDate = require('../Utilities/testData.js')
let PasswprdGen
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
        PasswprdGen = 
        await page.select(elements.Gender_DropDown,TestDate.Gender)
        console.log('Frist Name : '+ TestDate.TestDataGenerator())
        await page.type(elements.FristName,TestDate.TestDataGenerator())
        console.log('Last Name : '+ TestDate.TestDataGenerator())
        await page.type(elements.LastName,TestDate.TestDataGenerator())
        console.log('Email : '+ TestDate.TestDataGenerator()+'@'+TestDate.TestDataGenerator()+'.com')
        await page.type(elements.Email,TestDate.TestDataGenerator()+'@'+TestDate.TestDataGenerator()+'.com')
        console.log('Password : '+ )
        await page.type(elements.Passwprd,TestDate.PasswordGenerator())
        console.log('Password2 : '+ TestDate.PasswordGenerator())
        await page.type(elements.Password2,TestDate.PasswordGenerator())
        await page.click(elements.Checkbox1) ;
        await page.click(elements.Checkbox2) ;
        await page.click(elements.submit) ;

    }

}