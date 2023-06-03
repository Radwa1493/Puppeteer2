import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage';


let homePage  = new HomePage()
describe('ELogin', () => {
        

    beforeEach(async function() {
            jest.setTimeout(30000);
        })


	it('should load homepage', async () => {
        await homePage.visit()

	})

})