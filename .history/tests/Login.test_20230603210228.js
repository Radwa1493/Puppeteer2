import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage';


let homePage 
let loginPage 
describe('ELogin', () => {
        

    beforeAll(async function() {
            jest.setTimeout(1000000); // increase defult timeout from 5000
            await page.setViewport({ width: 1266, height: 768}); // set screen size

            homePage  = new HomePage()
            loginPage  = new LoginPage()
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
             await loginPage.isLoginPageDisplayed()
             await loginPage.     EnterCredinial()
             await loginPage.InvalidloginError()
          })


})