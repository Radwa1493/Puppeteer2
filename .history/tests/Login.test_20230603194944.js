import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage';

//const Str = require('@supercharge/strings')

describe('Registraion Scenario ', () => {

let homePage  = new HomePage()

/*
    before(async function() {


        browser = await puppeteer.launch({
            headless:false,
            args: ['--start-maximized'], // open browser in maxmize window
            devtools:false
         }) 
         const Incognito = await browser.createIncognitoBrowserContext()
        page = await Incognito.newPage(); // open new tab

    })
 */
    /*   after(async function() {
        await browser.close();
    })
    beforeEach(async function() {
    })
    afterEach(async function() {
    })
    */
    it('Invalid Login', async function() {
    
        await page.setViewport({ width: 1266, height: 768}); // set screen size
       
        await homePage.visit()
        
      //  await page.goto('https://www.moebel-kraft.de/'); // navigate to url 
        await page.waitForTimeout(2000)

        const title = await page.title() // get title

        console.log("Page title is : "+title)
       // expect(title).to.be.a('Möbelhaus Kraft - Möbel und Dekorationen für ein schöneres Zuhause');

        await page.click(".headerElement__icon--login") ;
       // await page.waitForTimeout(2000)
        await page.waitForSelector('#loginEmail')
        await page.type('#loginEmail','ccjss@ccjss.com')
    })

    it('Valid Login', async function() {


    })

})
//ccjss 