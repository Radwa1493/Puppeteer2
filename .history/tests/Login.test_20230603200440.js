import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage';


let homePage  = new HomePage()
describe('ELogin', () => {
        

    beforeAll(async function() {
            jest.setTimeout(30000); // increase defult timeout from 5000
        })


	it('should load homepage', async () => {
        await homePage.visit(

	})

})