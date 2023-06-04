export default class BasePage{
async wait(time){

    await page.waitFor(time);

}
async getTitle(){

    return await page.title();

}
async getUrl(){

    return await page.url();

}

async ScrolltoElemeny(e){

  await page.waitForSelector(selector);


    const element = document.querySelector(selector);
    element.scrollIntoView();
  }, selector
}

}