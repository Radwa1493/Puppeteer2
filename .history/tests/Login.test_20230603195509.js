import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage';


let homePage  = new HomePage()
describe('ELogin', () => {


	it('should load homepage', async () => {
        await homePage.visit()

	})

})