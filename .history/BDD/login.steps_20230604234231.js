import { defineFeature, loadFeature } from 'jest-cucumber';
const TestDate = require('../Utilities/testData.js')

import HomePage from '../pages/HomePage'
import ProfilePage from '../pages/ProfilePage';
import RegistionPage from '../pages/RegistionPage';


let homePage 
let profilePage 
let registionPage
const feature = loadFeature('BDD/features/2-Login.feature');
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

    


    test('User can\'t login with invalid credincials', ({ given ,when , then}) => {
        given('Open Profile Page', async function ()   {
            await homePage.OpenProfile()
            await profilePage.isLoginPageDisplayed()
            
        });
        when('Enter Invalid credincials', async function ()   {
           
            await profilePage.EnterCredinial(RegistionPage.emailGen,TestDate.InValidPassword)
        });

        then('An error displayed', async function ()   {
           

        });

        
    });

    test('User login with valid credincials', ({ given, when, then }) => {
        given('Open Profile Page', async function ()   {
            await homePage.OpenProfile()
            await profilePage.isLoginPageDisplayed()
        });

        when('Enter valid credincials', async function (,)   {
            await profilePage.EnterCredinial(RegistionPage.emailGen,TestDate.InValidPassword)

        });

        then('Homepage displayed', async function ()   {

        });
    });


});