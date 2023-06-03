import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('Features/Login.feature');
defineFeature(feature, test => {


    beforeAll(async function() {
        await page.setViewport({ width: 1266, height: 768}); // set screen size

        homePage  = new HomePage()
        profilePage  = new ProfilePage()
        registionPage  = new RegistionPage()

    })
    beforeEach(async function() {

            jest.setTimeout(1000000); // increase defult timeout from 5000
    
    })


    test('User can\'t login with invalid credincials', ({ given }) => {
        given('Open Url', () => {
console.log('eeeeeeeee')
        });
    });
  });