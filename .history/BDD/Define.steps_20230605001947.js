import { defineFeature, loadFeature } from 'jest-cucumber';
import HomePage from '../pages/HomePage'
import ProfilePage from '../pages/ProfilePage';
import RegistionPage from '../pages/RegistionPage';
let homePage 
let profilePage 
let registionPage

const TestDate = require('../Utilities/testData.js')

const feature = loadFeature('BDD/features/Feature.feature');
defineFeature(feature, test => {

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
    test('New user Registraion', ({ given, when, and, then }) => {
        given('Open Profile Page',  async function ()   {
            await homePage.OpenProfile()
            await profilePage.isLoginPageDisplayed()
        });
    
        when('Open Registration Page',  async function ()   {
            await registionPage.openRegisterPage()
            await registionPage.isRegisterPageDisplayed()
        });
    
        and('Fill New user data',  async function ()   {
            await registionPage.enterNewUserData()
        });
    
        then('Login status flag displayed',  async function ()   {
            await homePage.isloginstatusDisplayed()
    
        });

        and('Open Profile Page',  async function ()   {
            await homePage.OpenProfile()
            await profilePage.isLoginPageDisplayed()
        });

        and('Logout', async function ()   {
            await profilePage.logOut()
        });



    });
     
/*

    test('User can\'t login with invalid credincials', ({ given ,when , then}) => {
        given('Open Profile Page', async function ()   {
            await homePage.OpenProfile()
            await profilePage.isLoginPageDisplayed()
            
        });
        when('Enter Invalid credincials', async function ()   {
           
            await profilePage.EnterCredinial(RegistionPage.emailGen,TestDate.InValidPassword)
        });

        then('An error displayed', async function ()   {
            await profilePage.isInvalidloginError()

        });

        
    });

    test('User login with valid credincials', ({ given, when, then }) => {
        given('Open Profile Page', async function ()   {
            await homePage.OpenProfile()
            await profilePage.isLoginPageDisplayed()
        });

        when('Enter valid credincials', async function ()   {
            await profilePage.EnterCredinial(RegistionPage.emailGen,RegistionPage.PasswprdGen)

        });

        then('Login status flag displayed',  async function ()   {
            await homePage.isloginstatusDisplayed()
    
        });
    });


*/
   


});