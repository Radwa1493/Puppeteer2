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


});