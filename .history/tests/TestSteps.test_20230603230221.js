import HomePage from '../pages/HomePage'
import ProfilePage from '../pages/ProfilePage';
import RegistionPage from '../pages/RegistionPage';


let homePage 
let profilePage 
let registionPage
describe('ELogin', () => {
        


	it('Load Homepage', async () => {
        await homePage.visit()
        await homePage.isHomePageDisplayed()
        
	})

        it('Close Cookies', async () => {
                await homePage.CloseCookies()
          })

          it('OpenProfilePage', async () => {
                await homePage.OpenProfile()
                await profilePage.isLoginPageDisplayed()
          })
     /*   it('Invalid Login', async () => {
           
             await profilePage.EnterCredinial()
             await profilePage.isInvalidloginError()

          })
*/
          it('Registration', async () => {
                
                await registionPage.openRegisterPage()
                await registionPage.isRegisterPageDisplayed()
                await registionPage.enterNewUserData()
                
             })

})