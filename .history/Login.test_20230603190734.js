describe('End-to-end Test', () => {


	it('should load homepage', async () => {
        jest.setTimeout(15000);
        await page.goto('https://www.moebel-kraft.de/') // navigate to url 

	})

})