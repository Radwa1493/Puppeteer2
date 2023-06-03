import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage';


let homePage 
describe('ELogin', () => {
        

    beforeAll(async function() {
            jest.setTimeout(30000); // increase defult timeout from 5000
            homePage  = new HomePage()
        })


	it('should load homepage', async () => {
        await homePage.visit()
	})

})