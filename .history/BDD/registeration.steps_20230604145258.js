import { defineFeature, loadFeature } from 'jest-cucumber';
const TestDataGenerator = require('../Utilities/TestDataGenerator.js')
const TestDate = require('../Utilities/testData.js')

import HomePage from '../pages/HomePage'
import ProfilePage from '../pages/ProfilePage';
import RegistionPage from '../pages/RegistionPage';


let homePage 
let profilePage 
let registionPage
//const loginfeature = loadFeature('BDD/features/2-Login.feature');
const registerfeature = loadFeature('BDD/features/1-Registration.feature');

defineFeature(registerfeature, test => {

    jest.setTimeout(1000000); // increase defult timeout from 5000

    beforeAll(async function() {
        await page.setViewport({ width: 1266, height: 768}); // set screen size
        homePage  = new HomePage()
        profilePage  = new ProfilePage()
        registionPage  = new RegistionPage()

        await page.goto(TestDate.Url) // navigate to url 
        await homePage.isHomePageDisplayed()
        await homePage.CloseCookies()
    })

    test('User can\'t login with invalid credincials', ({ given ,when , then,and}) => {
        given('Open Profile Page', async function ()   {
            await homePage.OpenProfile()
            await profilePage.isLoginPageDisplayed()
            
        });
        when('Enter Invalid credincials', async function ()   {
           
            await profilePage.EnterCredinial()
        });
        


  });
  test('New user Registraion', ({ given, when, and, then }) => {
    given('Open Profile Page',  async function ()   {
        await profilePage.EnterCredinial()

    });

    when('Open Registration Page',  async function ()   {
        await registionPage.openRegisterPage()
        await registionPage.isRegisterPageDisplayed()
    });

    and('Fill New user data',  async function ()   {
        await registionPage.enterNewUserData()

    });

    then('Homepage displayed',  async function ()   {
    });

    and('New user created', () => {

    });
});
})