import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage';


let homePage 
describe('ELogin', () => {
        

    beforeAll(async function() {
            jest.setTimeout(30000); // increase defult timeout from 5000
            homePage  = new HomePage()
        })


	it('Load Homepage', async () => {
        await homePage.visit()
	})

        it('Close Cookies', async () => {
                await homePage.CloseCookies()
          })
          it('Invalid Login with valid credincials', async () => {
                await homePage.CloseCookies()
          })

})