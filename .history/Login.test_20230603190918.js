describe('End-to-end Test', () => {


	it('should load homepage', async () => {
        jest.setTimeout(15000); // increase jest timeout
        await page.goto('https://www.moebel-kraft.de/') // navigate to url 
        await page.setTimeout(3000)

	})

})