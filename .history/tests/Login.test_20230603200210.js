import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage';


let homePage  = new HomePage()
describe('ELogin', () => {
    before() => {
        

        before(async function() {
            await homePage.visit()
        })

    jest.setTimeout(30000);

	it('should load homepage', async () => {
        await homePage.visit()

	})

})