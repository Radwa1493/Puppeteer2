describe('End-to-end Test', () => {


	it('should load homepage', async () => {
		await homePage.visit()
		await homePage.isNavbarDisplayed()
	})

})