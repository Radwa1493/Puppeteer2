import HomePage from '../pages/HomePage'
import ProfilePage from '../pages/ProfilePage';
import RegistionPage from '../pages/RegistionPage';


let homePage 
let profilePage 
let registionPage
describe('ELogin', () => {
        

    beforeAll(async function() {
            await page.setViewport({ width: 1266, height: 768}); // set screen size

            homePage  = new HomePage()
            profilePage  = new ProfilePage()
            registionPage  = new RegistionPage()

        })
        beforeEach(async function() {

                jest.setTimeout(1000000); // increase defult timeout from 5000
        
        })

	it('Load Homepage', async () => {
        await homePage.visit()
        await homePage.isHomePageDisplayed()
        
	})

        it('Close Cookies', async () => {
                await homePage.CloseCookies()
          })

        it('Invalid Login', async () => {
             await homePage.OpenProfile()
             await profilePage.isLoginPageDisplayed()
             await profilePage.EnterCredinial()
             await profilePage.InvalidloginError()

          })

          it('Registration', async () => {
                
                await registionPage.isRegisterPageDisplayed()
                openRegisterPage()
                await enterNewUserData()
                
             })

})